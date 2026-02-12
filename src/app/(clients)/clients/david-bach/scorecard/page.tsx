import type { Metadata } from 'next'
import ScorecardClient from './ScorecardClient'
import { getClient } from '@/lib/clients'

export const metadata: Metadata = {
  title: 'The Automatic Millionaire Scorecard — How Automatic Is Your Financial Life?',
  description:
    'Take the 5-minute assessment. Score yourself across 8 financial categories to find out if your money is working for you or disappearing. By David Bach.',
  alternates: {
    canonical: 'https://contentrepurposehub.com/clients/david-bach/scorecard',
  },
  openGraph: {
    title: 'The Automatic Millionaire Scorecard — How Automatic Is Your Financial Life?',
    description:
      'Take the 5-minute assessment. Score yourself across 8 financial categories to find out if your money is working for you or disappearing. By David Bach.',
    url: 'https://contentrepurposehub.com/clients/david-bach/scorecard',
    siteName: 'David Bach',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Automatic Millionaire Scorecard — 5-Minute Financial Assessment',
    description:
      'Score yourself across 8 categories. Find out if your money is working for you or disappearing without a trace.',
  },
}

export default function ScorecardPage() {
  const client = getClient('david-bach')

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'The Automatic Millionaire Scorecard',
    description:
      'A 24-question self-assessment across 8 financial categories that measures how automatic your financial life is. Created by David Bach, author of The Automatic Millionaire.',
    url: 'https://contentrepurposehub.com/clients/david-bach/scorecard',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Person',
      name: 'David Bach',
      jobTitle: 'Financial Author & Speaker',
      description:
        '9x New York Times bestselling author. Former Senior VP, Morgan Stanley. 33 years in financial services. Nearly 10 million copies sold worldwide.',
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
        name: 'What does a score of 0-12 mean on the Automatic Millionaire Scorecard?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Code Red — Your Financial Life Is on Manual. You're flying blind. Money comes in, money goes out, and you don't know where it all went. The good news? Every single fix can be set up in 10 minutes. Start with one thing: set up an automatic transfer of 1% of your income to a retirement account.",
        },
      },
      {
        '@type': 'Question',
        name: 'What does a score of 13-24 mean on the Automatic Millionaire Scorecard?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yellow Zone — You've Started, But the System Has Holes. You're doing some things right, but the gaps are where your wealth is leaking. Most people in this range have a retirement account but aren't contributing enough, have some savings but no automation, and are bleeding money through forgotten subscriptions.",
        },
      },
      {
        '@type': 'Question',
        name: 'What does a score of 25-36 mean on the Automatic Millionaire Scorecard?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Green Zone — Your System Is Working, Time to Optimize. You're ahead of most Americans. Your finances are mostly automated. Now it's about optimization: Are you saving enough? The millionaire formula is 14% of gross income plus employer match, invested 70/30 stocks/bonds.",
        },
      },
      {
        '@type': 'Question',
        name: 'What does a score of 37-48 mean on the Automatic Millionaire Scorecard?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Automatic Millionaire Status — You're Living the System. Your financial life runs on autopilot. You're paying yourself first, your debt has a payoff plan, your investments are automated, and your family is protected. Focus on maintaining the system and teaching it to the next generation.",
        },
      },
      {
        '@type': 'Question',
        name: 'What are the 8 categories in the Automatic Millionaire Scorecard?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The 8 categories are: (1) Pay Yourself First, (2) Emergency Protection, (3) The Dream Account, (4) Debt Elimination, (5) Homeownership Track, (6) Investment Automation, (7) Subscription & Spending Leak, and (8) Protection & Planning. Each category has 3 questions scored 0-2 for a maximum of 6 points per category and 48 points total.',
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
        <h1>The Automatic Millionaire Scorecard — How Automatic Is Your Financial Life?</h1>
        <p>
          A 5-minute self-assessment created by David Bach, 9x New York Times bestselling author
          and former Senior VP at Morgan Stanley. Score yourself across 8 financial categories
          (24 questions total) to find out if your money is working for you or disappearing
          without a trace.
        </p>
        <h2>The 8 Scorecard Categories</h2>
        <ol>
          <li>
            <strong>Pay Yourself First</strong> — Measures whether you have automatic retirement
            contributions set up, whether money moves same-day, and whether you know your exact
            savings percentage.
          </li>
          <li>
            <strong>Emergency Protection</strong> — Evaluates your emergency savings account,
            automatic deposits, and how many months you could survive without income.
          </li>
          <li>
            <strong>The Dream Account</strong> — Assesses whether you have a dedicated account for
            goals like homeownership, education, or travel, with automatic funding and a specific
            target amount.
          </li>
          <li>
            <strong>Debt Elimination</strong> — Checks if you know your total debt, have all
            minimums on automatic, and use a systematic payoff strategy like DOLP (Dead On Last
            Payment).
          </li>
          <li>
            <strong>Homeownership Track</strong> — Measures whether you own a home or are saving
            for one, have an accelerated mortgage payoff plan, and know your equity position.
          </li>
          <li>
            <strong>Investment Automation</strong> — Evaluates automatic monthly investing,
            knowledge of your asset allocation, and regular portfolio reviews.
          </li>
          <li>
            <strong>Subscription and Spending Leak</strong> — Checks whether you audit phone
            subscriptions, know your total subscription costs, and have eliminated wasteful
            spending.
          </li>
          <li>
            <strong>Protection and Planning</strong> — Assesses whether you have a will, your
            partner knows your financial details, and you have adequate life insurance.
          </li>
        </ol>
        <h2>Scoring Methodology</h2>
        <p>
          Each of the 24 questions is scored 0, 1, or 2. A score of 0 means no system is in place.
          A score of 1 means partial progress. A score of 2 means fully automated or complete.
          Maximum score is 48. Score tiers: Code Red (0-12), Yellow Zone (13-24), Green Zone
          (25-36), Automatic Millionaire (37-48).
        </p>
      </section>

      <ScorecardClient
        conversionUrl={client?.conversionUrl}
        conversionLabel={client?.conversionLabel}
      />
    </>
  )
}
