import type { Metadata } from 'next'
import ScorecardClient from './ScorecardClient'
import { getClient } from '@/lib/clients'

export const metadata: Metadata = {
  title: 'Deal Structure Finder — Which Seller Financing Structure Fits Your Deal?',
  description:
    'Answer 4 questions about your deal situation. Get matched to the 2-3 seller financing structures most likely to work. By Chris Koerner.',
  alternates: {
    canonical: 'https://contentrepurposehub.com/clients/chris-koerner/scorecard',
  },
  openGraph: {
    title: 'Deal Structure Finder — Which Seller Financing Structure Fits Your Deal?',
    description:
      'Answer 4 questions. Get matched to the right seller financing structures. Free tool by Chris Koerner.',
    url: 'https://contentrepurposehub.com/clients/chris-koerner/scorecard',
    siteName: 'Chris Koerner',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deal Structure Finder — Free Seller Financing Tool',
    description:
      'Answer 4 questions about your deal. Get matched to the right structures with real numbers and negotiation scripts.',
  },
}

export default function ScorecardPage() {
  const client = getClient('chris-koerner')

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'The Deal Structure Finder',
    description:
      'An interactive tool that matches your deal situation to the right seller financing structures. Answer 4 questions about the seller, your resources, the asset, and your relationship — get matched to 2-3 structures with real examples, negotiation scripts, and risk brackets.',
    url: 'https://contentrepurposehub.com/clients/chris-koerner/scorecard',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Person',
      name: 'Chris Koerner',
      jobTitle: 'Serial Entrepreneur',
      description:
        'Started and sold five 7-8 figure companies across five industries. 17 years buying real estate. Creator of The Koerner Office and TKOwners community.',
    },
    creator: {
      '@type': 'Organization',
      name: 'ContentRepurposeHub',
      url: 'https://contentrepurposehub.com',
    },
  }

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a balloon payment in seller financing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A balloon payment structure means you put little or nothing down, make small monthly payments for a set period (usually 2-5 years), and then a large "balloon" payment is due for the remaining balance. The strategy is to refinance, grow the business, or sell the asset before the balloon comes due. Example: A $200,000 landscaping business bought with $5,000/month payments from profits, sold for $600,000 in 18 months — balloon never came due.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a master lease in real estate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A master lease means you lease an asset (usually real estate) with an option to purchase at a predetermined price after a set period. You operate the asset and keep the profits, but you don\'t own it yet. Chris Koerner used a master lease on a $2 million Louisiana RV park — $7,000/month for 2 years with an option to buy at $3-4 million. Worst case for the seller: $168,000 in lease income and they get the property back.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you really buy a business with no money down?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. 100% seller financing is real. The key is trading higher interest rates, profit-sharing, or future payments for lower or zero down payments. Chris Koerner bought an $800,000 business for $50,000 down and structured a master lease on a $2 million RV park with no purchase money upfront. It doesn\'t happen on every deal, but it happens often enough that "I don\'t have money" is not a valid reason to stop looking.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the 10 seller financing structures in the Deal Structure Finder?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The 10 structures are: (1) Balloon Payment, (2) Interest-Only Payments, (3) Graduated Payments, (4) Partial Seller Carryback, (5) Shared Appreciation Mortgage, (6) Master Lease / Lease to Own, (7) Zero Down / 100% Seller Financing, (8) Asset Swap / Services in Lieu, (9) Subject to Existing Debt (Sub-2), and (10) Delayed Down Payment. Each structure includes real deal examples, negotiation scripts, and risk brackets.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      {/* Static content for AI crawlers and SEO */}
      <section className="sr-only" aria-hidden="false">
        <h1>The Deal Structure Finder — Which Seller Financing Structure Fits Your Deal?</h1>
        <p>
          An interactive tool created by Chris Koerner, serial entrepreneur who has started and sold
          five 7-8 figure companies across five industries. Answer 4 questions about your deal
          situation and get matched to the 2-3 seller financing structures most likely to work.
        </p>
        <h2>The 4 Decision Questions</h2>
        <ol>
          <li>
            <strong>What does the seller actually need?</strong> — Monthly income, a lump sum,
            to get out of the asset, maximum total return, or help with something besides money.
          </li>
          <li>
            <strong>What do you have to work with?</strong> — Zero cash but can operate, some
            cash but not enough, strong cash flow projections, assets or skills to trade, or a
            good existing relationship with the seller.
          </li>
          <li>
            <strong>What is the asset&apos;s condition?</strong> — Cash-flowing and stable,
            underperforming but fixable, needs significant work, or seller is tired/burned out.
          </li>
          <li>
            <strong>How strong is your relationship with the seller?</strong> — Stranger (just met),
            acquaintance (some rapport), or trusted (real relationship built).
          </li>
        </ol>
        <h2>The 10 Seller Financing Structures</h2>
        <ol>
          <li>Balloon Payment — Small payments with large payment at end</li>
          <li>Interest-Only Payments — Pay interest only for a set period</li>
          <li>Graduated Payments — Payments start small and increase over time</li>
          <li>Partial Seller Carryback — Bank + seller + your capital combined</li>
          <li>Shared Appreciation Mortgage — Better terms today for a share of future upside</li>
          <li>Master Lease / Lease to Own — Lease with option to purchase</li>
          <li>Zero Down / 100% Seller Financing — Higher rate for zero down</li>
          <li>Asset Swap / Services in Lieu — Non-cash value as down payment</li>
          <li>Subject to Existing Debt (Sub-2) — Take over existing loan payments</li>
          <li>Delayed Down Payment — Pay down payment 12-24 months later</li>
        </ol>
      </section>

      <ScorecardClient
        conversionUrl={client?.conversionUrl}
        conversionLabel={client?.conversionLabel}
      />
    </>
  )
}
