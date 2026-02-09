/**
 * One-time script to create Stripe products and prices.
 * Run with: npx tsx scripts/create-stripe-products.ts
 *
 * After running, copy the price IDs into your .env.local file.
 */
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-04-30.basil',
});

async function createProducts() {
  console.log('Creating Stripe products and prices...\n');

  // Starter Plan - $750/month
  const starter = await stripe.products.create({
    name: 'Starter Plan',
    description: '1 webinar repurposed into 14 content pieces per month. Includes 1 lead magnet, 10 LinkedIn posts, 1 newsletter, 1 blog post, 1 landing page copy. All SEO and AI-search optimized.',
    metadata: { plan: 'starter' },
  });
  const starterPrice = await stripe.prices.create({
    product: starter.id,
    unit_amount: 75000, // $750.00
    currency: 'usd',
    recurring: { interval: 'month' },
    tax_behavior: 'exclusive',
  });
  console.log(`Starter Plan:`);
  console.log(`  Product ID: ${starter.id}`);
  console.log(`  Price ID:   ${starterPrice.id}\n`);

  // Growth Plan - $1,000/month
  const growth = await stripe.products.create({
    name: 'Growth Plan',
    description: '2 webinars repurposed into 32+ content pieces per month. Includes 2 lead magnets, 20 LinkedIn posts, 2 newsletters, 2 blog posts, 2 Twitter threads, 3-email welcome sequence. All SEO and AI-search optimized.',
    metadata: { plan: 'growth' },
  });
  const growthPrice = await stripe.prices.create({
    product: growth.id,
    unit_amount: 100000, // $1,000.00
    currency: 'usd',
    recurring: { interval: 'month' },
    tax_behavior: 'exclusive',
  });
  console.log(`Growth Plan:`);
  console.log(`  Product ID: ${growth.id}`);
  console.log(`  Price ID:   ${growthPrice.id}\n`);

  // Scale Plan - $1,500/month
  const scale = await stripe.products.create({
    name: 'Scale Plan',
    description: '4 webinars repurposed into 75+ content pieces per month. Includes 4 lead magnets, 40 LinkedIn posts, 4 newsletters, 4 blog posts, 4 Twitter threads, 7-email sequence, 8 Instagram captions, 4 YouTube scripts, content calendar, brand voice document. All SEO and AI-search optimized.',
    metadata: { plan: 'scale' },
  });
  const scalePrice = await stripe.prices.create({
    product: scale.id,
    unit_amount: 150000, // $1,500.00
    currency: 'usd',
    recurring: { interval: 'month' },
    tax_behavior: 'exclusive',
  });
  console.log(`Scale Plan:`);
  console.log(`  Product ID: ${scale.id}`);
  console.log(`  Price ID:   ${scalePrice.id}\n`);

  console.log('Add these to your .env.local:');
  console.log(`STRIPE_STARTER_PRICE_ID=${starterPrice.id}`);
  console.log(`STRIPE_GROWTH_PRICE_ID=${growthPrice.id}`);
  console.log(`STRIPE_SCALE_PRICE_ID=${scalePrice.id}`);
}

createProducts().catch(console.error);
