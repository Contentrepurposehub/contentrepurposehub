import OblioApi from '@obliosoftware/oblioapi';

const PLAN_DETAILS: Record<string, { name: string; price: string }> = {
  starter: { name: 'Starter Plan - Webinar Repurposing (1 webinar, 14 content pieces/month)', price: '750' },
  growth: { name: 'Growth Plan - Webinar Repurposing (2 webinars, 32+ content pieces/month)', price: '1000' },
  scale: { name: 'Scale Plan - Webinar Repurposing (4 webinars, 75+ content pieces/month)', price: '1500' },
};

export async function createOblioInvoice({
  customerEmail,
  customerName,
  customerAddress,
  customerCity,
  customerState,
  customerCountry,
  customerVatId,
  plan,
  amountPaid,
  currency,
}: {
  customerEmail: string;
  customerName: string;
  customerAddress?: string;
  customerCity?: string;
  customerState?: string;
  customerCountry?: string;
  customerVatId?: string;
  plan: string;
  amountPaid: number;
  currency: string;
}) {
  const api = new OblioApi(
    process.env.OBLIO_EMAIL!,
    process.env.OBLIO_API_TOKEN!,
  );

  const planInfo = PLAN_DETAILS[plan] || {
    name: `Webinar Repurposing - ${plan}`,
    price: String(amountPaid / 100),
  };

  const isEU = isEUCountry(customerCountry || '');
  const isRomania = customerCountry === 'RO';

  // VAT logic:
  // Romania → 19% TVA
  // EU B2B with VAT ID → 0% reverse charge
  // EU B2C without VAT ID → client country VAT rate (simplified: use 0% and note it)
  // Non-EU (US etc) → 0% no VAT
  let vatPercentage = 0;
  let vatName = 'SDD';
  let mentions = '';

  if (isRomania) {
    // Romanian client → 21% TVA (as of 2025)
    vatPercentage = 21;
    vatName = 'Normala';
  } else if (isEU && customerVatId) {
    // EU B2B client with valid VAT ID → 0% reverse charge
    vatPercentage = 0;
    vatName = 'SDD';
    mentions = 'Reverse charge - VAT to be accounted for by the recipient (art. 196 EU VAT Directive). Taxare inversa conform art. 150 Cod Fiscal.';
  } else if (isEU && !customerVatId) {
    // EU B2C client without VAT ID → Romanian VAT rate applies
    vatPercentage = 21;
    vatName = 'Normala';
    mentions = 'VAT charged at Romanian rate for B2C intra-community service supply.';
  } else {
    // Non-EU client (US, UK, etc.) → 0% no VAT
    vatPercentage = 0;
    vatName = 'SDD';
    mentions = 'Export of services outside the EU - not subject to Romanian VAT (art. 133 Cod Fiscal).';
  }

  const data = {
    cif: process.env.OBLIO_CIF!,
    client: {
      cif: customerVatId || '',
      name: customerName,
      rc: '',
      code: '',
      address: customerAddress || '',
      state: customerState || '',
      city: customerCity || '',
      country: customerCountry || 'US',
      iban: '',
      bank: '',
      email: customerEmail,
      phone: '',
      contact: '',
    },
    issueDate: new Date().toISOString().substring(0, 10),
    dueDate: '',
    seriesName: process.env.OBLIO_SERIES_NAME || 'INV',
    language: 'EN',
    precision: 2,
    currency: currency.toUpperCase(),
    products: [
      {
        name: planInfo.name,
        code: '',
        description: 'Monthly subscription - Webinar repurposing service',
        price: String(amountPaid / 100),
        measuringUnit: 'buc',
        currency: currency.toUpperCase(),
        vatName,
        vatPercentage,
        vatIncluded: true,
        quantity: 1,
        productType: 'Serviciu',
      },
    ],
    mentions,
  };

  const response = await api.createInvoice(data);
  console.log('Oblio invoice created:', JSON.stringify(response));
  return response;
}

function isEUCountry(code: string): boolean {
  const euCountries = [
    'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
    'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
    'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  ];
  return euCountries.includes(code.toUpperCase());
}
