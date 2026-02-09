import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createOblioInvoice } from '@/lib/oblio';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    if (webhookSecret) {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } else {
      event = JSON.parse(body) as Stripe.Event;
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Webhook verification failed';
    console.error('Webhook signature verification failed:', message);
    return NextResponse.json({ error: message }, { status: 400 });
  }

  switch (event.type) {
    case 'invoice.paid': {
      const invoice = event.data.object as Stripe.Invoice;
      console.log(`Invoice paid: ${invoice.customer_email} - Amount: ${invoice.amount_paid / 100} ${invoice.currency}`);

      // Generate Oblio invoice for every paid Stripe invoice (initial + recurring)
      if (process.env.OBLIO_EMAIL && process.env.OBLIO_API_TOKEN && process.env.OBLIO_CIF) {
        try {
          // Get customer details for the invoice
          const customer = invoice.customer
            ? await stripe.customers.retrieve(invoice.customer as string)
            : null;

          const customerData = customer && 'deleted' in customer && !customer.deleted ? customer : null;
          const address = customerData?.address;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const plan = invoice.lines?.data?.[0]?.metadata?.plan || (invoice as any).subscription_details?.metadata?.plan || 'unknown';

          // Check for tax ID (EU VAT number)
          const taxIds = customerData?.tax_ids?.data;
          const vatId = taxIds?.find(t => t.type === 'eu_vat')?.value || '';

          await createOblioInvoice({
            customerEmail: invoice.customer_email || customerData?.email || '',
            customerName: customerData?.name || invoice.customer_name || invoice.customer_email || 'Customer',
            customerAddress: address?.line1 || '',
            customerCity: address?.city || '',
            customerState: address?.state || '',
            customerCountry: address?.country || 'US',
            customerVatId: vatId,
            plan,
            amountPaid: invoice.amount_paid,
            currency: invoice.currency,
          });
          console.log('Oblio invoice generated successfully');
        } catch (oblioErr) {
          console.error('Failed to generate Oblio invoice:', oblioErr);
          // Don't fail the webhook — log and continue
        }
      }
      break;
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription;
      console.log(`Subscription cancelled: ${subscription.id}`);
      break;
    }

    default:
      break;
  }

  return NextResponse.json({ received: true });
}
