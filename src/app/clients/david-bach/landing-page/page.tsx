import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'The Automatic Millionaire by David Bach — The System That Builds Wealth Without Discipline',
  description:
    "654,000 people became 401k millionaires doing exactly what's in this book. $27.40 a day. Automatic. No willpower required. Updated 20th anniversary edition.",
  alternates: {
    canonical: 'https://contentrepurposehub.com/clients/david-bach/landing-page',
  },
  openGraph: {
    type: 'website',
    title:
      'The Automatic Millionaire by David Bach — The System That Builds Wealth Without Discipline',
    description:
      "654,000 people became 401k millionaires doing exactly what's in this book. $27.40 a day. Automatic. No willpower required.",
    url: 'https://contentrepurposehub.com/clients/david-bach/landing-page',
    siteName: 'David Bach',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'The Automatic Millionaire by David Bach — Wealth Without Discipline',
    description:
      "654,000 people became 401k millionaires doing exactly what's in this book. $27.40 a day. Automatic. No willpower required.",
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Book',
      name: 'The Automatic Millionaire',
      author: {
        '@type': 'Person',
        name: 'David Bach',
      },
      description:
        'The system that builds wealth without discipline, a budget, or a high income. Updated 20th anniversary edition with new fund recommendations, AI economy strategies, and 20 years of reader success stories.',
      numberOfPages: 272,
      bookEdition: 'Updated 20th Anniversary Edition',
      bookFormat: 'https://schema.org/Paperback',
      inLanguage: 'en',
      genre: 'Personal Finance',
      copyrightYear: 2025,
      publisher: {
        '@type': 'Organization',
        name: 'Crown Currency',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.6',
        reviewCount: '15000',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'I can barely pay my bills. How am I supposed to save?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Start with 1%. If you make $3,000 a month, that's $30. You won't notice it. Increase by 1% each month. In a year, you're saving 12%. Or try the $10/Day for 100 Days Challenge — it gets you to $1,000, which is more than half of Americans have saved.",
          },
        },
        {
          '@type': 'Question',
          name: "Don't I need to make a lot of money first?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Jim and Sue McIntyre averaged $40,000 a year and retired at 52 with $1.8 million. My grandmother started with 50 cents a week. The system works at any income level because it\'s about the percentage, not the dollar amount.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this just another budgeting book?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "The opposite. I teach that budgets don't work. This book is about building a system where you never have to budget again. The money moves before you can spend it. No tracking. No spreadsheets. No willpower.",
          },
        },
        {
          '@type': 'Question',
          name: "I'm in debt. Should I save or pay off debt first?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both. The book shows you how to use the DOLP system to attack debt while simultaneously automating small savings. The key is making minimum payments automatic on everything, then attacking the smallest balance first.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if the stock market crashes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The stock market has averaged over 10% annually for more than 100 years. It drops, it recovers, it goes higher. The people who get rich are the ones who keep investing automatically through the drops. The people who get hurt are the ones who panic and sell.',
          },
        },
        {
          '@type': 'Question',
          name: "I'm in my 40s/50s. Is it too late?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "$27.40 a day at age 45 still becomes $505,000 by 65. At age 50, it's $266,000. At any age, that's worth a lot more than zero. And if you own a home, you're building equity on top of that.",
          },
        },
        {
          '@type': 'Question',
          name: "What's different about this updated edition?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'New fund recommendations (VTI, QQQ, target-date funds), strategies for the AI economy, current data on housing and retirement wealth, 20 years of updated success stories from readers, and the $10/Day for 100 Days Challenge for people starting from zero.',
          },
        },
      ],
    },
    {
      '@type': 'Person',
      name: 'David Bach',
      jobTitle: '9x New York Times Bestselling Author',
      knowsAbout: [
        'Personal Finance',
        'Automatic Investing',
        'Wealth Building',
      ],
      description:
        '9x New York Times bestselling author and former Senior Vice President at Morgan Stanley. 33 years helping ordinary people with ordinary incomes become financially free. Nearly 10 million copies sold worldwide.',
    },
  ],
}

export default function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* ========== HERO SECTION ========== */}
        <section className="bg-[#1e3a5f] text-white py-20 md:py-28 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              The System That Builds Wealth Without Discipline, a Budget, or a
              High Income
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              654,000 people became 401k millionaires doing exactly what&apos;s
              in this book. $27.40 a day. Automatic. No willpower required.
            </p>
            <a
              href="#"
              className="inline-block bg-white text-[#1e3a5f] px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold text-lg"
            >
              Get The Automatic Millionaire &rarr;
            </a>
            <p className="mt-6 text-blue-200 text-sm">
              Updated 20th anniversary edition. Nearly 10 million copies sold
              worldwide.
            </p>
          </div>
        </section>

        {/* ========== PROBLEM SECTION ========== */}
        <section className="bg-gray-50 py-16 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              You&apos;ve Tried to Be Good With Money. It Didn&apos;t Work.
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
              <p>
                You downloaded the budgeting app. You tracked expenses for a few
                weeks. You told yourself &ldquo;I&apos;ll save more this
                month.&rdquo;
              </p>
              <p>
                Then your phone bill hit. A friend&apos;s birthday dinner. A
                subscription you forgot about. A late-night Amazon order you
                barely remember.
              </p>
              <p>And just like that, the money was gone. Again.</p>
              <p>
                Here&apos;s what nobody tells you:{' '}
                <strong>the problem isn&apos;t you.</strong>
              </p>
              <p>
                The problem is that every financial plan you&apos;ve ever tried
                requires you to do something — track, budget, transfer, decide,
                remember. And in the real world, people do those things for a
                month. Maybe two. Then they stop.
              </p>
              <p>
                I know because I spent 9 years as a financial adviser at Morgan
                Stanley watching it happen. I never had a single client who
                committed to saving manually make it more than six months. Not
                one.
              </p>
              <p>
                Meanwhile, every company that wants your money has figured out
                the secret:{' '}
                <strong>they take it automatically.</strong>
              </p>
              <p>
                Your gym doesn&apos;t wait for you to send a check. Netflix
                doesn&apos;t hope you&apos;ll remember to pay. The government
                doesn&apos;t ask you to budget for taxes — they take them before
                you see your paycheck.
              </p>
              <p>
                They all know what you haven&apos;t figured out yet:
              </p>
              <p className="text-xl font-semibold text-gray-900">
                If it&apos;s not automatic, it won&apos;t happen.
              </p>
            </div>
          </div>
        </section>

        {/* ========== THE SYSTEM SECTION ========== */}
        <section className="bg-white py-16 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              The Automatic Millionaire System
            </h2>
            <p className="text-gray-700 text-lg mb-2 leading-relaxed">
              What if your wealth worked the same way your Netflix subscription
              does? Money moves. You don&apos;t think about it. It just happens.
            </p>
            <p className="text-gray-700 text-lg mb-2 leading-relaxed">
              That&apos;s what this book teaches. A system you set up once — in
              less than 10 minutes — and then it runs in the background building
              wealth while you live your life.
            </p>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              No budget. No spreadsheet. No monthly check-ins. No discipline
              required.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              The formula:
            </h3>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border border-gray-200 text-left">
                <thead>
                  <tr className="bg-[#1e3a5f] text-white">
                    <th className="px-4 py-3 font-semibold text-sm">What</th>
                    <th className="px-4 py-3 font-semibold text-sm">
                      How Much
                    </th>
                    <th className="px-4 py-3 font-semibold text-sm">Where</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 font-semibold text-gray-900">
                      Pay Yourself First
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      12.5% of gross income (1 hour of your daily pay)
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      Retirement account (401k, IRA, pension)
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-900">
                      Protect Yourself
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      5% of gross income
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      Emergency savings account
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">
                      Fund Your Dreams
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      5% of gross income
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      Dream account (house, travel, education, freedom)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Money moves automatically on payday. Before you can spend it.
              Before you can talk yourself out of it. Before life gets in the
              way.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>Can&apos;t start at 12.5%?</strong> Start at 1%. Increase
              by 1% each month. In 12 months you&apos;ll be saving four times
              what the average American saves. And you won&apos;t even notice the
              difference.
            </p>
          </div>
        </section>

        {/* ========== PROOF SECTION ========== */}
        <section className="bg-gray-50 py-16 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              The Math That Changes Everything
            </h2>
            <p className="text-gray-700 text-lg mb-2 leading-relaxed">
              $27.40 a day. That&apos;s one lunch out. One cocktail. One
              subscription you forgot to cancel.
            </p>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Invested automatically in a boring index fund at 10% average annual
              return:
            </p>

            <div className="overflow-x-auto mb-10">
              <table className="w-full border border-gray-200 text-left">
                <thead>
                  <tr className="bg-[#1e3a5f] text-white">
                    <th className="px-4 py-3 font-semibold text-sm">Years</th>
                    <th className="px-4 py-3 font-semibold text-sm">
                      You Put In
                    </th>
                    <th className="px-4 py-3 font-semibold text-sm">
                      It Grows To
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 text-gray-700">10 years</td>
                    <td className="px-4 py-3 text-gray-700">$100,000</td>
                    <td className="px-4 py-3 text-gray-700">$175,000</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 text-gray-700">20 years</td>
                    <td className="px-4 py-3 text-gray-700">$200,000</td>
                    <td className="px-4 py-3 text-gray-700">$630,000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 text-gray-700">30 years</td>
                    <td className="px-4 py-3 text-gray-700">$300,000</td>
                    <td className="px-4 py-3 text-gray-700">$1,555,000</td>
                  </tr>
                  <tr className="bg-[#1e3a5f]/5">
                    <td className="px-4 py-3 font-bold text-gray-900">
                      40 years
                    </td>
                    <td className="px-4 py-3 font-bold text-gray-900">
                      $400,000
                    </td>
                    <td className="px-4 py-3 font-bold text-gray-900">
                      $4,424,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Can&apos;t do $27.40? Here&apos;s what smaller amounts become:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border border-gray-200 text-left">
                <thead>
                  <tr className="bg-[#1e3a5f] text-white">
                    <th className="px-4 py-3 font-semibold text-sm">
                      Daily Amount
                    </th>
                    <th className="px-4 py-3 font-semibold text-sm">
                      In 40 Years
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 text-gray-700">$5 a day</td>
                    <td className="px-4 py-3 text-gray-700">$800,000</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 text-gray-700">$10 a day</td>
                    <td className="px-4 py-3 text-gray-700">$1,600,000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 text-gray-700">$15 a day</td>
                    <td className="px-4 py-3 text-gray-700">$2,400,000</td>
                  </tr>
                  <tr className="bg-[#1e3a5f]/5">
                    <td className="px-4 py-3 font-bold text-gray-900">
                      $27.40 a day
                    </td>
                    <td className="px-4 py-3 font-bold text-gray-900">
                      $4,424,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>
                The stock market has averaged over 10% annually with reinvested
                dividends for more than 100 years.
              </strong>{' '}
              This isn&apos;t speculation. This is what happens when you buy a
              boring index fund and leave it alone.
            </p>
          </div>
        </section>

        {/* ========== SOCIAL PROOF SECTION ========== */}
        <section className="bg-white py-16 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
              The People Who Proved It
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Jim and Sue McIntyre */}
              <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Jim and Sue McIntyre
                </h3>
                <div className="text-gray-700 space-y-3 text-sm leading-relaxed">
                  <p>
                    Jim and Sue walked into my office at Morgan Stanley when they
                    were 52. Average income over their lifetime: $40,000 a year.
                    No budget. No fancy investments. Everything on autopilot.
                  </p>
                  <p className="font-bold text-gray-900 text-base">
                    Their net worth: $1.8 million.
                  </p>
                  <p>
                    They owned two homes free and clear. They had a fully funded
                    retirement account. Jim was ready to retire at 52 on a
                    $40,000 salary.
                  </p>
                  <p>
                    I was making more than double what they made. I was broke.
                  </p>
                  <p className="italic text-gray-600">
                    That meeting changed my life. It&apos;s why this book exists.
                  </p>
                </div>
              </div>

              {/* Grandma Rose */}
              <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Grandma Rose
                </h3>
                <div className="text-gray-700 space-y-3 text-sm leading-relaxed">
                  <p>
                    My grandmother Rose didn&apos;t have a college degree. My
                    grandfather worked in a plant. She worked in retail. At 30,
                    on a cold birthday, she decided she didn&apos;t want to be
                    poor anymore.
                  </p>
                  <p>She started saving 50 cents a week.</p>
                  <p>
                    Over her lifetime, she became a self-made millionaire.
                    Retired to California. And she started a ripple effect
                    that&apos;s now reached millions of people: she taught my
                    father (financial adviser for 45 years), my sister (financial
                    adviser), and me.
                  </p>
                  <p className="font-bold text-gray-900 text-base">
                    One decision. 50 cents a week. A family transformed.
                  </p>
                </div>
              </div>

              {/* The 654,000 */}
              <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  The 654,000
                </h3>
                <div className="text-gray-700 space-y-3 text-sm leading-relaxed">
                  <p>
                    That&apos;s the number of people in Fidelity 401k plans who
                    are now millionaires. They saved 14% of their gross income.
                    Their employers matched on top. They invested 70% stocks, 30%
                    bonds.
                  </p>
                  <p>The average American saves 3-5%.</p>
                  <p>The millionaires saved 14%.</p>
                  <p className="font-bold text-gray-900 text-base">
                    That&apos;s the entire difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== WHAT'S INSIDE SECTION ========== */}
        <section className="bg-gray-50 py-16 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              What You&apos;ll Learn in The Automatic Millionaire
            </h2>
            <p className="text-gray-700 text-lg mb-10 leading-relaxed">
              This isn&apos;t theory. This is the exact system, step by step, in
              plain English.
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  The Pay Yourself First Plan
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  How to set up the three automatic accounts (Future, Safety,
                  Dreams) in less than 10 minutes. The exact percentages. The
                  exact sequence. Where to open them, what to buy, how to
                  automate everything.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  The Latte Factor
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  How to find $5, $10, or $27.40 a day you&apos;re currently
                  wasting — without giving up anything that actually matters to
                  you. Includes the subscription audit that found Steven Bartlett
                  8 subscriptions he didn&apos;t know he was paying for.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  The DOLP System (Getting Out of Debt)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dead On Last Payment — the debt elimination formula. List your
                  debts smallest to largest. Automate minimums on everything.
                  Attack the smallest first. Watch the snowball build. Specific
                  steps, specific order, nothing left to figure out.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  The Homeownership Advantage
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Why homeowners are worth 40x more than renters ($400,000 vs
                  $10,000 average). The leverage math that makes real estate the
                  highest-return investment most people will ever make. How to buy
                  your first home even when you think you can&apos;t afford it.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  The Bi-Weekly Mortgage Payoff
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  How to turn a 30-year mortgage into a 25-year mortgage with one
                  simple change. Saves $50,000-$100,000 in interest. Takes 5
                  minutes to set up.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  The Automatic Investment Plan
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Which funds to buy (with symbols and real performance data). How
                  to set up automatic monthly investments. Why boring index funds
                  beat everything else. And why you should ignore everything you
                  see on TikTok about trading.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  The Couples Plan
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  How to get on the same page with your partner when you&apos;re
                  financial opposites. The annual review that protects your
                  family. The &ldquo;fire drill&rdquo; conversation you need to
                  have before it&apos;s too late.
                </p>
              </div>
            </div>

            {/* NEW in this edition callout */}
            <div className="mt-8 bg-[#1e3a5f]/5 border-2 border-[#1e3a5f]/20 rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-4">
                NEW in this edition:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#1e3a5f] font-bold mt-0.5">-</span>
                  <span>
                    Updated fund recommendations for 2026 (VTI, QQQ, target-date
                    funds, Vanguard Balanced)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1e3a5f] font-bold mt-0.5">-</span>
                  <span>Strategies for the AI economy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1e3a5f] font-bold mt-0.5">-</span>
                  <span>20 years of reader success stories</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1e3a5f] font-bold mt-0.5">-</span>
                  <span>
                    Current data on housing, retirement accounts, and the wealth
                    gap
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1e3a5f] font-bold mt-0.5">-</span>
                  <span>
                    The $10/Day for 100 Days Challenge for people starting from
                    zero
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========== WHO IT'S FOR / NOT FOR SECTION ========== */}
        <section className="bg-white py-16 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* FOR column */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  This Book Is For You If:
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl font-bold mt-0.5 shrink-0">
                      &#10003;
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        You make money but don&apos;t know where it goes.
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        You earn $40K, $75K, $100K, $150K — and somehow
                        there&apos;s nothing left at the end of the month.
                        You&apos;re not reckless. You just don&apos;t have a
                        system.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl font-bold mt-0.5 shrink-0">
                      &#10003;
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        You&apos;ve tried budgeting and it didn&apos;t stick.
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        Budgets require discipline. This system doesn&apos;t.
                        That&apos;s the point.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl font-bold mt-0.5 shrink-0">
                      &#10003;
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        You&apos;re in debt and it feels like quicksand.
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        The DOLP system gives you a specific, step-by-step plan
                        to dig out. No shame. Just math.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl font-bold mt-0.5 shrink-0">
                      &#10003;
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        You&apos;re renting and wondering if you&apos;ll ever own
                        a home.
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        The book shows you how to get in the game — even if you
                        have to split a down payment with a friend and rent out
                        bedrooms. I did it. Millions of others have too.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl font-bold mt-0.5 shrink-0">
                      &#10003;
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        You&apos;re a woman who&apos;s delegated finances to
                        someone else.
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        The average age of widowhood in America is 59. You cannot
                        delegate your financial well-being to anyone. Period.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl font-bold mt-0.5 shrink-0">
                      &#10003;
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        You&apos;re a couple who fights about money.
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        Money fights are the #1 cause of divorce. This book has a
                        system for getting on the same page even if you&apos;re
                        financial opposites.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl font-bold mt-0.5 shrink-0">
                      &#10003;
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        You&apos;re young and think you have time.
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        You do — and that&apos;s your biggest advantage. Someone
                        who starts at 25 with $10 a day will have $1.6 million by
                        retirement. Someone who starts at 45 gets $266,000. Time
                        is the multiplier.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl font-bold mt-0.5 shrink-0">
                      &#10003;
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        You&apos;re not young and think it&apos;s too late.
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        It&apos;s not. Jim and Sue McIntyre didn&apos;t start
                        getting serious until their 20s and retired at 52 with
                        $1.8 million on a $40,000 income. My grandmother started
                        with 50 cents a week at 30.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* NOT FOR column */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  This Book Is NOT For You If:
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <span className="text-red-600 text-xl font-bold mt-0.5 shrink-0">
                      &#10007;
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        You&apos;re looking for a get-rich-quick strategy.
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        This is a get-rich-boring strategy. If you want to trade
                        meme coins and options, this isn&apos;t your book.
                        (People who try to get rich quick stay broke forever.)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-red-600 text-xl font-bold mt-0.5 shrink-0">
                      &#10007;
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        You&apos;re not willing to set up automatic transfers.
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        The system only works if it&apos;s automatic. If you
                        insist on doing everything manually, save yourself the
                        read.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-red-600 text-xl font-bold mt-0.5 shrink-0">
                      &#10007;
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        You want someone to manage everything for you.
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        This book teaches you how to do it yourself in 10
                        minutes. If you want a full-service financial adviser,
                        that&apos;s a different path.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== URGENCY SECTION ========== */}
        <section className="bg-[#1e3a5f] text-white py-16 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Now?</h2>
            <p className="text-blue-100 text-lg mb-4 leading-relaxed">
              The next 10 years will be the greatest opportunity to build wealth
              in our lifetime. AI is creating more productivity and profit than
              we&apos;ve ever seen. The stock market went up 600% in 20 years.
              Housing went up 400%. There are 24 million millionaires in America
              right now.
            </p>
            <p className="text-blue-100 text-lg mb-6 leading-relaxed">
              At the same time:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-2xl font-bold text-white">20%</p>
                <p className="text-blue-200 text-sm mt-1">
                  Social Security projected cut by 2033 — less than 8 years away
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-2xl font-bold text-white">60 million</p>
                <p className="text-blue-200 text-sm mt-1">
                  Americans depend on a $1,900/month Social Security check
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-2xl font-bold text-white">41.5 million</p>
                <p className="text-blue-200 text-sm mt-1">
                  Americans receive food assistance at $6/day
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-2xl font-bold text-white">7 out of 10</p>
                <p className="text-blue-200 text-sm mt-1">
                  Americans are living paycheck to paycheck
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 sm:col-span-2">
                <p className="text-2xl font-bold text-white">37%</p>
                <p className="text-blue-200 text-sm mt-1">
                  of Americans can&apos;t cover a $400 emergency
                </p>
              </div>
            </div>

            <p className="text-blue-100 text-lg mb-2 leading-relaxed">
              <strong className="text-white">The window is open.</strong> Wealth
              is being created at an extraordinary rate. But the safety nets
              people are counting on are buckling.
            </p>
            <p className="text-blue-100 text-lg mb-2 leading-relaxed">
              No one is coming to save you. You&apos;re going to have to save
              yourself.
            </p>
            <p className="text-white text-lg font-semibold">
              The Automatic Millionaire shows you how — in less than 10 minutes.
            </p>
          </div>
        </section>

        {/* ========== FAQ SECTION ========== */}
        <section className="bg-gray-50 py-16 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  &ldquo;I can barely pay my bills. How am I supposed to
                  save?&rdquo;
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Start with 1%. If you make $3,000 a month, that&apos;s $30.
                  You won&apos;t notice it. Increase by 1% each month. In a
                  year, you&apos;re saving 12%. Or try the $10/Day for 100 Days
                  Challenge — it gets you to $1,000, which is more than half of
                  Americans have saved.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  &ldquo;Don&apos;t I need to make a lot of money
                  first?&rdquo;
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Jim and Sue McIntyre averaged $40,000 a year and retired at 52
                  with $1.8 million. My grandmother started with 50 cents a week.
                  The system works at any income level because it&apos;s about
                  the percentage, not the dollar amount.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  &ldquo;Is this just another budgeting book?&rdquo;
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The opposite. I teach that budgets don&apos;t work. This book
                  is about building a system where you never have to budget
                  again. The money moves before you can spend it. No tracking. No
                  spreadsheets. No willpower.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  &ldquo;I&apos;m in debt. Should I save or pay off debt
                  first?&rdquo;
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Both. The book shows you how to use the DOLP system to attack
                  debt while simultaneously automating small savings. The key is
                  making minimum payments automatic on everything, then attacking
                  the smallest balance first.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  &ldquo;What if the stock market crashes?&rdquo;
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The stock market has averaged over 10% annually for more than
                  100 years. It drops, it recovers, it goes higher. The people
                  who get rich are the ones who keep investing automatically
                  through the drops. The people who get hurt are the ones who
                  panic and sell.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  &ldquo;I&apos;m in my 40s/50s. Is it too late?&rdquo;
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  $27.40 a day at age 45 still becomes $505,000 by 65. At age
                  50, it&apos;s $266,000. At any age, that&apos;s worth a lot
                  more than zero. And if you own a home, you&apos;re building
                  equity on top of that.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  &ldquo;What&apos;s different about this updated
                  edition?&rdquo;
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  New fund recommendations (VTI, QQQ, target-date funds),
                  strategies for the AI economy, current data on housing and
                  retirement wealth, 20 years of updated success stories from
                  readers, and the $10/Day for 100 Days Challenge for people
                  starting from zero.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== FINAL CTA SECTION ========== */}
        <section className="bg-[#1e3a5f] text-white py-16 md:py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-8">
              One Decision. One Setup. That&apos;s How It Starts.
            </h2>

            <div className="text-left max-w-3xl mx-auto space-y-4 text-blue-100 text-lg leading-relaxed mb-8">
              <p>
                My grandmother made a decision at 30 on a cold birthday that
                changed our entire family&apos;s destiny.
              </p>
              <p>
                Jim and Sue McIntyre made a decision in their 20s that let them
                retire at 52 on a $40,000 salary.
              </p>
              <p>
                I made a decision in my mid-20s, after a couple sat across from
                me with $1.8 million and I had nothing, that changed my life
                forever.
              </p>
              <p>
                The decision is always the same:{' '}
                <strong className="text-white">make it automatic.</strong>
              </p>
              <p>
                You&apos;ll work 90,000 hours over your lifetime. You&apos;ll
                earn millions of dollars. The only question is: will you keep any
                of it?
              </p>
              <p>
                As my grandmother used to say: &ldquo;We need to change what
                we&apos;re doing, or nothing will change.&rdquo;
              </p>
            </div>

            <a
              href="#"
              className="inline-block bg-white text-[#1e3a5f] px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold text-lg"
            >
              Get The Automatic Millionaire &rarr;
            </a>

            <p className="mt-6 text-blue-200 text-sm">
              The updated 20th anniversary edition. Nearly 10 million copies
              sold. The system that built 24 million millionaires.
            </p>
            <p className="mt-4 text-blue-100 italic text-sm max-w-xl mx-auto">
              Set up your automatic financial plan in less than 10 minutes. No
              budget. No discipline. Just the system that actually works.
            </p>
          </div>
        </section>

        {/* ========== AUTHOR BIO ========== */}
        <section className="bg-white py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 italic text-center leading-relaxed">
              David Bach is a 9x New York Times bestselling author and former
              Senior Vice President at Morgan Stanley. He has spent 33 years
              helping ordinary people with ordinary incomes become financially
              free. His books have sold nearly 10 million copies worldwide. This
              is his final, definitive edition of The Automatic Millionaire.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
