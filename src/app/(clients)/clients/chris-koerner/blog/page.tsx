import type { Metadata } from 'next'
import Link from 'next/link'
import SeriesNav from '@/components/SeriesNav'
import { getClient, getSeriesNavigation, getClientBlogPosts } from '@/lib/clients'

export const metadata: Metadata = {
  title: 'How to Buy a Business With No Money (10 Deal Structures I\'ve Actually Used)',
  description: 'Learn 10 seller financing structures to buy a business with little or no money down. Real deal numbers from someone who bought an $800K business for $50K down.',
  keywords: 'how to buy a business with no money, seller financing, creative financing, buy business no money down, seller financing structures',
  alternates: {
    canonical: 'https://contentrepurposehub.com/clients/chris-koerner/blog',
  },
  openGraph: {
    title: 'How to Buy a Business With No Money (10 Deal Structures I\'ve Actually Used)',
    description: 'Learn 10 seller financing structures to buy a business with little or no money down. Real deal numbers from someone who bought an $800K business for $50K down.',
    url: 'https://contentrepurposehub.com/clients/chris-koerner/blog',
    siteName: 'Chris Koerner',
    type: 'article',
    publishedTime: '2026-02-12T00:00:00.000Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Buy a Business With No Money (10 Deal Structures)',
    description: '10 seller financing structures with real numbers. Bought an $800K business for $50K down.',
  },
}

export default function BuyBusinessNoMoneyBlog() {
  const CLIENT_SLUG = 'chris-koerner'
  const client = getClient(CLIENT_SLUG)!
  const posts = getClientBlogPosts(CLIENT_SLUG)
  const firstPost = posts[0]
  const nav = getSeriesNavigation(CLIENT_SLUG, firstPost?.slug || '')
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://contentrepurposehub.com/clients/chris-koerner/blog#article',
        headline: 'How to Buy a Business With No Money (10 Deal Structures I\'ve Actually Used)',
        description: 'Learn 10 seller financing structures to buy a business with little or no money down. Real deal numbers from someone who bought an $800K business for $50K down.',
        datePublished: '2026-02-12',
        dateModified: '2026-02-12',
        author: {
          '@type': 'Person',
          name: 'Chris Koerner',
          jobTitle: 'Serial Entrepreneur',
          description: '5 companies started and sold (7-8 figures each), 17 years buying real estate',
        },
        publisher: {
          '@type': 'Person',
          name: 'Chris Koerner',
        },
        mainEntityOfPage: 'https://contentrepurposehub.com/clients/chris-koerner/blog',
        wordCount: 5500,
        articleSection: 'Business Acquisition',
        keywords: [
          'how to buy a business with no money',
          'seller financing',
          'creative financing',
          'buy business no money down',
          'seller financing structures',
          'master lease agreement',
          'balloon payment business',
          'business acquisition',
          'no money down business',
          'creative deal structures',
        ],
        about: [
          { '@type': 'Thing', name: 'Business Acquisition' },
          { '@type': 'Thing', name: 'Seller Financing' },
          { '@type': 'Thing', name: 'Entrepreneurship' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is seller financing and how does it work when buying a business?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Seller financing means the person selling the business acts as the bank. Instead of getting all their money at closing from a traditional lender, they agree to receive payments over time directly from you, the buyer. You negotiate the down payment, interest rate, payment schedule, and term directly with the seller. This works because many business sellers are motivated by factors beyond just the purchase price — they want tax advantages from installment sales, they want the business to survive, or they simply can\'t find an all-cash buyer.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you really buy a business with no money down?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, but it requires the right deal structure and the right seller relationship. 100% seller financing with zero down does happen — I\'ve done it — but you typically trade zero down payment for a higher interest rate or a larger total purchase price. The seller needs to trust you, and you need to demonstrate that you can operate the business profitably. Master leases are another path to control a business with zero down payment while you prove yourself before committing to purchase.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is a master lease and how can it help me acquire a business?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A master lease lets you operate and control a business (or property) by paying the owner a fixed monthly payment, without actually buying it yet. You keep everything above that fixed payment as profit. It\'s like renting the entire business with an option to buy later. I used a master lease to take over a $2M RV park in Louisiana for $7,000 a month. I ran it, improved it, and now it\'s worth potentially $23M. The owner got steady income without management headaches, and I got control of a high-upside asset with no down payment.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I combine multiple financing sources to buy a business?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolutely, and this is how most creative deals actually get done. A common structure is partial seller carryback combined with SBA lending and friends/family capital. For example, on a $2.2M deal, you might get an SBA loan for 70%, the seller carries 15%, and friends and family put up the remaining 15%. The key is that each source has different terms, risk tolerance, and motivation. Stack them together and you can acquire a business much larger than your personal capital would allow.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between an SBA loan and seller financing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An SBA loan comes from a bank, guaranteed by the Small Business Administration. It typically requires 10-20% down, has strict qualification criteria (credit score, business financials, collateral), and takes 60-90 days to close. Seller financing comes directly from the business seller. Terms are fully negotiable — down payment, interest rate, payment schedule, everything. It can close in days, requires no bank approval, and the terms are limited only by what you and the seller agree to. Many deals combine both: an SBA loan for the bulk of the purchase price and seller financing for the gap.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I convince a seller to offer financing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Use the "my price, your terms" framework. Most sellers fixate on the purchase price. If you let them set the price (or get close to their asking price), you gain leverage to dictate the terms — down payment, interest rate, payment schedule, and timeline. Also understand their real motivation: many sellers want tax benefits from installment sales, want to ensure the business survives for employees and customers, or have been unable to find all-cash buyers. Present seller financing as the solution to their problem, not yours. The closer your relationship on the mom-to-stranger trust spectrum, the more flexible the terms will be.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are the biggest risks of buying a business with no money down?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The biggest risks are: (1) Higher total cost — zero or low down payment usually means higher interest rates or a larger purchase price, so you pay more over time. (2) Negative cash flow early — high monthly payments from creative financing can eat into operating cash flow, leaving no margin for error. (3) Balloon payment risk — if you have a balloon payment due in 3-5 years and can\'t refinance or the business underperforms, you could lose the business. (4) Relationship strain — if you default on seller financing, you damage a personal or professional relationship, not just a bank relationship. The mitigation for all of these is conservative underwriting: make sure the business cash flow covers your payments with room to spare.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://contentrepurposehub.com/clients/chris-koerner' },
          { '@type': 'ListItem', position: 2, name: 'Chris Koerner', item: 'https://contentrepurposehub.com/clients/chris-koerner' },
          { '@type': 'ListItem', position: 3, name: 'Blog' },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen">
        {/* Article */}
        <article className="py-12 md:py-20 px-4">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6">
              <Link href="/clients/chris-koerner" className="hover:text-[#1e3a5f]">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/clients/chris-koerner" className="hover:text-[#1e3a5f]">Chris Koerner</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700">Blog</span>
            </nav>

            {/* Series badge */}
            {nav.seriesName && (
              <SeriesNav
                clientSlug={CLIENT_SLUG}
                seriesName={nav.seriesName}
                currentOrder={firstPost?.seriesOrder || 1}
                totalPosts={nav.totalPosts}
                position="top"
              />
            )}

            {/* Header */}
            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs bg-[#1e3a5f]/10 text-[#1e3a5f] px-3 py-1 rounded-full font-medium">Complete Guide</span>
                <span className="text-xs text-gray-500">22 min read</span>
                <span className="text-xs text-gray-400">February 12, 2026</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                How to Buy a Business With No Money (10 Deal Structures I&apos;ve Actually Used)
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                By <strong className="text-gray-900">Chris Koerner</strong> &mdash; Serial Entrepreneur | 5 Companies Started &amp; Sold (7&ndash;8 Figures Each) | 17 Years Buying Real Estate
              </p>
              <p className="text-sm text-gray-500">
                Last updated: February 2026 &middot; Real deal numbers included
              </p>
            </header>

            {/* Direct Answer Block */}
            <div id="quick-answer" className="bg-gray-50 border-l-4 border-[#1e3a5f] p-5 md:p-6 rounded-r-lg mb-10">
              <p className="text-gray-800 text-lg leading-relaxed">
                <strong>The best way to buy a business with no money is seller financing.</strong> The seller acts as the bank, you negotiate the down payment (sometimes to zero), and you pay them over time from the business&apos;s own cash flow. I&apos;ve used this to buy an $800K business for $50K down and take over a $2M RV park for $7,000 a month with nothing out of pocket at closing.
              </p>
              <p className="text-gray-700 mt-3 font-medium">
                There are 10 specific structures that make this work. I&apos;ve used every one of them.
              </p>
              <p className="text-gray-600 mt-3">
                Below, I&apos;ll walk you through all 10 &mdash; with real numbers from real deals &mdash; plus the negotiation framework that makes sellers say yes, and the origin story of how I bought my first property making $2.13 an hour as a waiter.
              </p>
            </div>

            {/* CTA: Cheat Sheet */}
            <div className="bg-[#1e3a5f] text-white rounded-xl p-6 mb-10 text-center">
              <p className="text-lg font-semibold mb-2">Want all 10 structures on one page?</p>
              <p className="text-white/80 text-sm mb-4">Get the free Deal Structure Cheat Sheet &mdash; every structure, the math, and the exact script to pitch each one to a seller.</p>
              <Link href="/clients/chris-koerner" className="inline-block bg-white text-[#1e3a5f] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                Get the Free Cheat Sheet &rarr;
              </Link>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Table of Contents</h2>
              <ol className="space-y-2 text-[#1e3a5f]">
                <li><a href="#quick-answer" className="hover:text-[#1e3a5f]/70">1. Quick Answer: Seller Financing Is Your Best Shot</a></li>
                <li><a href="#why-no-money-advantage" className="hover:text-[#1e3a5f]/70">2. Why &ldquo;No Money&rdquo; Is Actually Your Starting Advantage</a></li>
                <li><a href="#mom-stranger-spectrum" className="hover:text-[#1e3a5f]/70">3. The Relationship Framework That Makes Everything Else Work</a></li>
                <li><a href="#ten-structures" className="hover:text-[#1e3a5f]/70">4. 10 Seller Financing Structures (With Real Deal Numbers)</a></li>
                <li><a href="#comparison-table" className="hover:text-[#1e3a5f]/70">5. All 10 Structures Compared Side by Side</a></li>
                <li><a href="#negotiation-framework" className="hover:text-[#1e3a5f]/70">6. The &ldquo;My Price, Your Terms&rdquo; Negotiation Framework</a></li>
                <li><a href="#proof-story" className="hover:text-[#1e3a5f]/70">7. How I Bought My First House Making $2.13 an Hour</a></li>
                <li><a href="#social-media-strategy" className="hover:text-[#1e3a5f]/70">8. The Asymmetric Bet: Social Media as a Deal-Finding Engine</a></li>
                <li><a href="#action-plan" className="hover:text-[#1e3a5f]/70">9. What to Do This Week (5 Specific Steps)</a></li>
                <li><a href="#faq" className="hover:text-[#1e3a5f]/70">10. Frequently Asked Questions</a></li>
              </ol>
            </div>

            {/* Content Body */}
            <div className="space-y-12">

              {/* Why "No Money" Is Your Advantage */}
              <section id="why-no-money-advantage">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">Why &ldquo;No Money&rdquo; Is Actually Your Starting Advantage</h2>
                <p className="text-gray-700 text-lg mb-4">
                  Most people think having no money disqualifies them from buying a business. I think it&apos;s the opposite.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  When you don&apos;t have a pile of cash, you&apos;re forced to ask better questions. You have to understand the seller&apos;s real motivation. You have to structure deals creatively. You have to find the gap between what a seller wants and what a seller needs.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  People with money write checks and skip the thinking. They overpay. They take on bad deals because they can afford to. They confuse the ability to buy with the wisdom to buy well.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  Constraints equal creativity. I&apos;ve bought five companies and dozens of properties. The best deals I ever did were the ones where I had the least cash.
                </p>
                <blockquote className="border-l-4 border-[#1e3a5f] bg-[#1e3a5f]/5 pl-5 py-4 pr-4 my-6 rounded-r-lg">
                  <p className="text-gray-800 text-lg font-medium italic">
                    &ldquo;The deal structure matters more than the purchase price. I&apos;d rather buy a $1M business for $1.2M on my terms than buy a $500K business for $500K on the seller&apos;s terms.&rdquo;
                  </p>
                  <p className="text-gray-600 mt-2">&mdash; Chris Koerner</p>
                </blockquote>
                <p className="text-gray-700 text-lg">
                  Here&apos;s the reality: the seller of a small business is almost never getting 47 all-cash offers. They&apos;re getting zero offers, or one lowball offer from a private equity guy who wants to gut the business. If you show up with a creative structure that solves the seller&apos;s actual problem, you&apos;re not competing. You&apos;re the only option.
                </p>
              </section>

              {/* The Mom-Stranger Spectrum */}
              <section id="mom-stranger-spectrum">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">The Relationship Framework That Makes Everything Else Work</h2>
                <p className="text-gray-700 text-lg mb-4">
                  Before I walk you through the 10 structures, you need to understand the framework that determines which structures are available to you.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  I call it the <strong>Mom vs. Stranger spectrum</strong>.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  If you were buying a business from your mom, how much due diligence would she need? How much collateral? How big a down payment? Probably none. She trusts you completely. She knows you&apos;ll pay her back.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  Now imagine buying a business from a complete stranger you met on BizBuySell five minutes ago. That person wants everything &mdash; proof of funds, references, a massive down payment, personal guarantees, maybe even your firstborn.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  Every seller sits somewhere on this spectrum. Your job is to <strong>move them closer to the &ldquo;mom&rdquo; end</strong> before you ever bring up deal structure.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  How do you do that?
                </p>
                <ul className="space-y-3 text-gray-700 text-lg mb-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#1e3a5f] font-bold mt-1">&#x2022;</span>
                    <span><strong>Time.</strong> Build a relationship before you negotiate. Visit the business. Meet the employees. Ask about the seller&apos;s story. People sell to people they like.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#1e3a5f] font-bold mt-1">&#x2022;</span>
                    <span><strong>Competence.</strong> Demonstrate that you can actually run the business. Show relevant experience. Ask smart operational questions, not just financial ones.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#1e3a5f] font-bold mt-1">&#x2022;</span>
                    <span><strong>Alignment.</strong> Show that you care about the same things they care about &mdash; the employees, the customers, the legacy. Most small business owners built something personal. They don&apos;t want to hand it to someone who&apos;ll gut it.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#1e3a5f] font-bold mt-1">&#x2022;</span>
                    <span><strong>Skin in the game.</strong> Even if your down payment is small, show that it matters to you. Show that you&apos;re committed. Sellers who believe you&apos;re all-in are willing to take bigger risks on the terms.</span>
                  </li>
                </ul>
                <p className="text-gray-700 text-lg">
                  The further you move toward &ldquo;mom&rdquo; on the trust spectrum, the more creative your deal structures can be. A stranger demands 50% down. Someone who trusts you will take 5% &mdash; or nothing.
                </p>
              </section>

              {/* 10 Structures */}
              <section id="ten-structures">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">10 Seller Financing Structures (With Real Deal Numbers)</h2>
                <p className="text-gray-700 text-lg mb-8">
                  These are the 10 structures I&apos;ve used across five companies and 17 years of real estate deals. Each one solves a different problem. The right structure depends on the seller&apos;s motivation, the business&apos;s cash flow, and where you sit on the mom-stranger spectrum.
                </p>

                {/* Structure 1: Balloon Payment */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">1. Balloon Payment</h3>
                  <p className="text-gray-700 text-lg mb-4">
                    You make small monthly payments for a set period (usually 3&ndash;5 years), then pay the remaining balance in one large &ldquo;balloon&rdquo; payment at the end.
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4">
                    <p className="text-gray-900 font-semibold mb-2">Real example: $200K landscaping business</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-[#1e3a5f] font-bold mt-1">&#x2022;</span>
                        <span>Purchase price: $200,000</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#1e3a5f] font-bold mt-1">&#x2022;</span>
                        <span>Down payment: $20,000 (10%)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#1e3a5f] font-bold mt-1">&#x2022;</span>
                        <span>Monthly payments: $2,500 for 36 months (interest only at 6%)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#1e3a5f] font-bold mt-1">&#x2022;</span>
                        <span>Balloon at month 36: $180,000 (refinance with a bank or SBA loan)</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-700 text-lg mb-4">
                    <strong>Why it works:</strong> The seller gets some money now and all their money within 3 years. You get to operate the business and build a track record before seeking traditional financing for the balloon.
                  </p>
                  <p className="text-gray-700 text-lg">
                    <strong>Biggest risk:</strong> If you can&apos;t refinance when the balloon comes due &mdash; because the business underperformed or credit markets tightened &mdash; you could lose the business. Always negotiate a balloon extension clause.
                  </p>
                </div>

                {/* Structure 2: Interest-Only Payments */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">2. Interest-Only Payments</h3>
                  <p className="text-gray-700 text-lg mb-4">
                    You pay only the interest on the seller note for the first 12&ndash;24 months. No principal reduction. This keeps your monthly obligation as low as possible during the critical first year when you&apos;re learning the business.
                  </p>
                  <p className="text-gray-700 text-lg mb-4">
                    On a $300,000 seller note at 6%, interest-only payments are $1,500/month. Compare that to a fully amortizing payment of $3,330/month over 10 years. That&apos;s $1,830 a month you can reinvest in growth, marketing, or a cash reserve.
                  </p>
                  <p className="text-gray-700 text-lg mb-4">
                    <strong>Why it works:</strong> You preserve cash flow during the most vulnerable period of ownership. Most businesses need working capital infusions in the first year under new ownership. Interest-only gives you breathing room.
                  </p>
                  <p className="text-gray-700 text-lg">
                    <strong>Biggest risk:</strong> You&apos;re not building equity. If the business loses value in year one, you owe more than it&apos;s worth. Use this only when you have a clear plan to increase revenue in the first 12 months.
                  </p>
                </div>

                {/* Structure 3: Graduated Payments */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">3. Graduated Payments</h3>
                  <p className="text-gray-700 text-lg mb-4">
                    Payments start low and increase on a predetermined schedule &mdash; typically stepping up every 6 or 12 months. This is better than a payment holiday because the seller starts receiving money immediately (which builds trust), but your early payments are manageable.
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4">
                    <p className="text-gray-900 font-semibold mb-2">Example structure on a $400K note:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-[#1e3a5f] font-bold mt-1">&#x2022;</span>
                        <span>Months 1&ndash;6: $1,500/month</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#1e3a5f] font-bold mt-1">&#x2022;</span>
                        <span>Months 7&ndash;12: $2,500/month</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#1e3a5f] font-bold mt-1">&#x2022;</span>
                        <span>Months 13&ndash;24: $3,500/month</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#1e3a5f] font-bold mt-1">&#x2022;</span>
                        <span>Months 25+: $4,500/month until paid in full</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-700 text-lg mb-4">
                    <strong>Why it works:</strong> It aligns your payment obligations with your expected growth trajectory. As you grow the business, your payments grow with it. The seller sees money from day one, which is always better than a &ldquo;payment holiday&rdquo; that makes sellers nervous.
                  </p>
                  <p className="text-gray-700 text-lg">
                    <strong>Biggest risk:</strong> If growth doesn&apos;t materialize, the later payments can squeeze your cash flow hard. Build conservative projections, not optimistic ones.
                  </p>
                </div>

                {/* Structure 4: Partial Seller Carryback */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">4. Partial Seller Carryback (The Capital Stack)</h3>
                  <p className="text-gray-700 text-lg mb-4">
                    This is how most mid-size deals actually get done. You stack multiple funding sources: an SBA loan, a seller note, and sometimes friends-and-family capital to cover the full purchase price.
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4">
                    <p className="text-gray-900 font-semibold mb-2">Real example: $2.2M business acquisition</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-[#1e3a5f] font-bold mt-1">&#x2022;</span>
                        <span>SBA loan: $1,540,000 (70%)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#1e3a5f] font-bold mt-1">&#x2022;</span>
                        <span>Seller carryback: $330,000 (15%) &mdash; 5-year term, 6% interest, 24-month standby</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#1e3a5f] font-bold mt-1">&#x2022;</span>
                        <span>Friends and family: $330,000 (15%) &mdash; converted to equity or paid back from distributions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#1e3a5f] font-bold mt-1">&#x2022;</span>
                        <span>Your cash out of pocket: $0 (or close to it)</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-700 text-lg mb-4">
                    <strong>Why it works:</strong> The SBA requires a down payment, but the seller carryback and friends-and-family capital can serve as that down payment (the SBA is often fine with this). Each funding source has different motivations and tolerances. Stack them right and you control a $2.2M business with almost nothing out of your own pocket.
                  </p>
                  <p className="text-gray-700 text-lg">
                    <strong>Biggest risk:</strong> Multiple obligations to multiple parties. If the business hits a rough patch, you&apos;re juggling SBA payments, seller payments, and investor expectations simultaneously. Make sure total debt service doesn&apos;t exceed 50% of free cash flow.
                  </p>
                </div>

                {/* Mid-article CTA */}
                <div className="bg-gray-50 border border-[#1e3a5f]/20 rounded-xl p-6 text-center my-10">
                  <p className="text-gray-900 font-semibold mb-1">Want the math for all 10 structures in one place?</p>
                  <p className="text-gray-600 text-sm mb-3">The Deal Structure Cheat Sheet includes the formulas, scripts, and negotiation frameworks I use on every deal.</p>
                  <Link href="/clients/chris-koerner" className="inline-block bg-[#1e3a5f] text-white font-medium px-5 py-2.5 rounded-lg hover:bg-[#162d4a] transition text-sm">
                    Get the Free Cheat Sheet &rarr;
                  </Link>
                </div>

                {/* Structure 5: Shared Appreciation Mortgage */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">5. Shared Appreciation Mortgage (SAM)</h3>
                  <p className="text-gray-700 text-lg mb-4">
                    The seller gives you favorable terms (lower down payment, lower interest rate, or both) in exchange for a percentage of the business&apos;s appreciation when you eventually sell or refinance.
                  </p>
                  <p className="text-gray-700 text-lg mb-4">
                    Example: You buy a business for $500K with $25K down and a 3% interest rate, but the seller gets 20% of any value increase above $500K when you exit.
                  </p>
                  <p className="text-gray-700 text-lg mb-4">
                    <strong>Why it works:</strong> You use the seller&apos;s own optimism about the business against them &mdash; in a good way. If the seller genuinely believes the business is undervalued or has massive upside, they&apos;ll happily take a piece of the future rather than all of the present. It&apos;s cheaper for you upfront and it aligns incentives: the seller now wants you to succeed.
                  </p>
                  <p className="text-gray-700 text-lg">
                    <strong>Biggest risk:</strong> If you grow the business significantly, the appreciation percentage can end up being more expensive than conventional financing would have been. Cap the total appreciation payout in your agreement.
                  </p>
                </div>

                {/* Structure 6: Master Lease */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">6. Master Lease</h3>
                  <p className="text-gray-700 text-lg mb-4">
                    This is my favorite structure for high-upside assets. A master lease lets you <strong>operate and control a business or property</strong> by paying the owner a fixed monthly amount. You keep everything above that amount. No purchase required upfront.
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4">
                    <p className="text-gray-900 font-semibold mb-2">Real example: $2M Louisiana RV park</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-[#1e3a5f] font-bold mt-1">&#x2022;</span>
                        <span>Property value: $2,000,000</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#1e3a5f] font-bold mt-1">&#x2022;</span>
                        <span>Master lease payment: $7,000/month to the owner</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#1e3a5f] font-bold mt-1">&#x2022;</span>
                        <span>Money out of my pocket at closing: $0</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#1e3a5f] font-bold mt-1">&#x2022;</span>
                        <span>What I did: improved operations, added sites, built out amenities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#1e3a5f] font-bold mt-1">&#x2022;</span>
                        <span>Potential current value: $23,000,000</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-700 text-lg mb-4">
                    Read that again. I control an asset potentially worth $23M. I put zero down. The owner gets $7,000 a month regardless of how the park performs &mdash; that&apos;s their guaranteed floor. I take all the upside.
                  </p>
                  <p className="text-gray-700 text-lg mb-4">
                    <strong>Why it works:</strong> The owner gets steady, passive income without the headaches of management. They still own the asset and get to see it appreciate. You get operational control and unlimited upside with no capital requirement. It&apos;s a win-win when the owner is tired of running the business but doesn&apos;t want to sell outright.
                  </p>
                  <p className="text-gray-700 text-lg">
                    <strong>Biggest risk:</strong> You don&apos;t own the asset, so you can&apos;t sell it or use it as collateral for other financing. If the lease expires or the owner changes their mind, you could lose access. Always negotiate a purchase option within your master lease agreement.
                  </p>
                </div>

                {/* Structure 7: Zero Down / 100% Seller Financing */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">7. Zero Down / 100% Seller Financing</h3>
                  <p className="text-gray-700 text-lg mb-4">
                    Exactly what it sounds like. The seller finances the entire purchase price. You walk in with nothing and pay them back entirely from the business&apos;s cash flow.
                  </p>
                  <p className="text-gray-700 text-lg mb-4">
                    The trade-off is straightforward: <strong>you trade a higher interest rate (or higher purchase price) for zero down payment.</strong> A seller who might accept 5% interest with 20% down will want 8&ndash;10% interest with zero down. That premium is the cost of having no capital.
                  </p>
                  <p className="text-gray-700 text-lg mb-4">
                    <strong>Why it works:</strong> Some sellers can&apos;t find buyers at all. The business has been listed for months or years. They&apos;re burned out. They want out. A zero-down deal that gets them ongoing income and eventually gets them fully paid is better than sitting on an unsold business forever.
                  </p>
                  <p className="text-gray-700 text-lg">
                    <strong>Biggest risk:</strong> High payments can eat into cash flow, leaving no margin for operational problems. Only use this on businesses with strong, stable cash flow and low capital expenditure requirements. And you need to be close to &ldquo;mom&rdquo; on the trust spectrum &mdash; strangers don&apos;t do 100% seller financing.
                  </p>
                </div>

                {/* Structure 8: Asset Swap / Services in Lieu */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">8. Asset Swap / Services in Lieu</h3>
                  <p className="text-gray-700 text-lg mb-4">
                    Instead of cash, you offer the seller something else of value: a piece of real estate, equipment, a vehicle, consulting services, marketing services, or a stake in another business you own.
                  </p>
                  <p className="text-gray-700 text-lg mb-4">
                    I&apos;ve seen deals where a marketing agency owner traded six months of free marketing services as the down payment on a complementary business. I&apos;ve seen a contractor trade a piece of equipment worth $80K as the down payment on a $400K business.
                  </p>
                  <p className="text-gray-700 text-lg mb-4">
                    <strong>Why it works:</strong> Not everyone wants cash. Some sellers want specific things: help with their next venture, a property, a car, a consulting relationship. If you can figure out what they actually want (not what they say they want), you can often structure a deal where your &ldquo;payment&rdquo; costs you far less than its perceived value to the seller.
                  </p>
                  <p className="text-gray-700 text-lg">
                    <strong>Biggest risk:</strong> Valuation disputes. If you&apos;re trading assets, both parties need to agree on what those assets are worth. Get independent appraisals and put everything in writing.
                  </p>
                </div>

                {/* Structure 9: Subject to Existing Debt (Sub-2) */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">9. Subject to Existing Debt (Sub-2)</h3>
                  <p className="text-gray-700 text-lg mb-4">
                    You take over the business and assume responsibility for the seller&apos;s existing debt payments &mdash; but the debt stays in the seller&apos;s name. You don&apos;t need to qualify for a new loan. You just start making the payments on their existing loan.
                  </p>
                  <p className="text-gray-700 text-lg mb-4">
                    This is extremely common in real estate (it&apos;s how many investors acquire rental properties with assumable FHA/VA loans) and it works for businesses too, especially when the business has existing equipment loans, SBA loans, or commercial lines of credit.
                  </p>
                  <p className="text-gray-700 text-lg mb-4">
                    <strong>Why it works:</strong> If the seller&apos;s existing loan has a great interest rate (say 4% from before the rate hikes), you inherit that rate without needing to qualify yourself. The seller gets out from under the payments, and you get financing you couldn&apos;t get on your own.
                  </p>
                  <p className="text-gray-700 text-lg">
                    <strong>Biggest risk:</strong> Most commercial loans have a &ldquo;due on sale&rdquo; clause, meaning the lender can call the entire loan due if they discover the business changed hands. In practice, lenders rarely enforce this if payments are being made on time &mdash; but it&apos;s a real risk. Consult an attorney who specializes in business acquisitions before using this structure.
                  </p>
                </div>

                {/* Structure 10: Delayed Down Payment */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">10. Delayed Down Payment</h3>
                  <p className="text-gray-700 text-lg mb-4">
                    You close the deal with zero or minimal money at closing. The down payment is due 90&ndash;180 days later, giving you time to operate the business and use its cash flow to generate the down payment itself.
                  </p>
                  <p className="text-gray-700 text-lg mb-4">
                    Think of it as a trial period where you&apos;re operating the business and building up the cash to complete the purchase. The seller gets the confidence of seeing you run the business successfully, and you get to use the business&apos;s own revenue to fund the acquisition.
                  </p>
                  <p className="text-gray-700 text-lg mb-4">
                    <strong>Why it works:</strong> It eliminates the chicken-and-egg problem. You need cash to buy the business, but you need the business to generate cash. A delayed down payment solves this by letting the business fund its own acquisition.
                  </p>
                  <p className="text-gray-700 text-lg">
                    <strong>Biggest risk:</strong> If the business underperforms during the delay period, you may not generate enough cash for the down payment. Build in a walkaway clause that protects both parties if the business doesn&apos;t hit agreed-upon benchmarks.
                  </p>
                </div>
              </section>

              {/* Comparison Table */}
              <section id="comparison-table">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">All 10 Structures Compared Side by Side</h2>
                <p className="text-gray-700 text-lg mb-6">
                  Here&apos;s every structure in one view. Bookmark this &mdash; or better yet, <Link href="/clients/chris-koerner" className="text-[#1e3a5f] underline hover:text-[#1e3a5f]/70">grab the free cheat sheet</Link> with the full math and scripts.
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border border-gray-200 text-left text-sm">
                    <thead>
                      <tr className="bg-[#1e3a5f] text-white">
                        <th className="px-4 py-3 font-semibold">Structure</th>
                        <th className="px-4 py-3 font-semibold">Money Needed</th>
                        <th className="px-4 py-3 font-semibold">Monthly Payment</th>
                        <th className="px-4 py-3 font-semibold">Best For</th>
                        <th className="px-4 py-3 font-semibold">Biggest Risk</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="px-4 py-3 font-semibold text-gray-900">Balloon Payment</td>
                        <td className="px-4 py-3 text-gray-700">5&ndash;20% down</td>
                        <td className="px-4 py-3 text-gray-700">Low (interest only)</td>
                        <td className="px-4 py-3 text-gray-700">Businesses you plan to refinance within 3&ndash;5 years</td>
                        <td className="px-4 py-3 text-gray-700">Can&apos;t refinance when balloon is due</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-900">Interest-Only</td>
                        <td className="px-4 py-3 text-gray-700">10&ndash;20% down</td>
                        <td className="px-4 py-3 text-gray-700">Lowest possible</td>
                        <td className="px-4 py-3 text-gray-700">Cash-flow-tight first year under new ownership</td>
                        <td className="px-4 py-3 text-gray-700">No equity building; underwater if value drops</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-4 py-3 font-semibold text-gray-900">Graduated Payments</td>
                        <td className="px-4 py-3 text-gray-700">5&ndash;15% down</td>
                        <td className="px-4 py-3 text-gray-700">Starts low, increases</td>
                        <td className="px-4 py-3 text-gray-700">Businesses with clear growth runway</td>
                        <td className="px-4 py-3 text-gray-700">Growth doesn&apos;t materialize, payments still increase</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-900">Partial Seller Carryback</td>
                        <td className="px-4 py-3 text-gray-700">0&ndash;10% (your cash)</td>
                        <td className="px-4 py-3 text-gray-700">Multiple payments (SBA + seller + investors)</td>
                        <td className="px-4 py-3 text-gray-700">Mid-size deals ($1M&ndash;$5M)</td>
                        <td className="px-4 py-3 text-gray-700">Juggling multiple obligations in a downturn</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-4 py-3 font-semibold text-gray-900">Shared Appreciation</td>
                        <td className="px-4 py-3 text-gray-700">0&ndash;10% down</td>
                        <td className="px-4 py-3 text-gray-700">Below market</td>
                        <td className="px-4 py-3 text-gray-700">Undervalued businesses with high growth potential</td>
                        <td className="px-4 py-3 text-gray-700">Appreciation payout exceeds savings from low rate</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-900">Master Lease</td>
                        <td className="px-4 py-3 text-gray-700">$0</td>
                        <td className="px-4 py-3 text-gray-700">Fixed lease payment</td>
                        <td className="px-4 py-3 text-gray-700">High-upside assets with tired owners</td>
                        <td className="px-4 py-3 text-gray-700">No ownership; lease expires or owner changes mind</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-4 py-3 font-semibold text-gray-900">100% Seller Financing</td>
                        <td className="px-4 py-3 text-gray-700">$0</td>
                        <td className="px-4 py-3 text-gray-700">Higher (premium rate)</td>
                        <td className="px-4 py-3 text-gray-700">Unsold businesses; high-trust seller relationships</td>
                        <td className="px-4 py-3 text-gray-700">High payments crush cash flow margin</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-900">Asset Swap / Services</td>
                        <td className="px-4 py-3 text-gray-700">$0 cash (non-cash value)</td>
                        <td className="px-4 py-3 text-gray-700">Varies</td>
                        <td className="px-4 py-3 text-gray-700">Sellers who want something other than cash</td>
                        <td className="px-4 py-3 text-gray-700">Valuation disputes on traded assets</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-4 py-3 font-semibold text-gray-900">Subject to (Sub-2)</td>
                        <td className="px-4 py-3 text-gray-700">$0&ndash;5%</td>
                        <td className="px-4 py-3 text-gray-700">Seller&apos;s existing payment</td>
                        <td className="px-4 py-3 text-gray-700">Businesses with favorable existing loans</td>
                        <td className="px-4 py-3 text-gray-700">Due-on-sale clause triggered by lender</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-900">Delayed Down Payment</td>
                        <td className="px-4 py-3 text-gray-700">$0 at closing</td>
                        <td className="px-4 py-3 text-gray-700">Standard (after delay)</td>
                        <td className="px-4 py-3 text-gray-700">Cash-flowing businesses that fund their own acquisition</td>
                        <td className="px-4 py-3 text-gray-700">Business underperforms during delay period</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Negotiation Framework */}
              <section id="negotiation-framework">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">The &ldquo;My Price, Your Terms&rdquo; Negotiation Framework</h2>
                <p className="text-gray-700 text-lg mb-4">
                  This is the single most useful negotiation principle I&apos;ve ever learned, and it applies to every deal structure above.
                </p>
                <p className="text-gray-900 text-xl font-bold mb-4">
                  If you let the seller set the price, you get to set the terms.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  Most sellers are emotionally anchored to a purchase price. Their business is &ldquo;worth&rdquo; $800K because that&apos;s what their accountant told them, or because that&apos;s what their buddy got for a similar business, or because that&apos;s what they need for retirement.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  Don&apos;t fight the price. Accept it. Or even offer slightly above it.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  Then control everything else: the down payment, the interest rate, the payment schedule, the balloon timeline, the default provisions, and any performance-based adjustments.
                </p>
                <blockquote className="border-l-4 border-[#1e3a5f] bg-[#1e3a5f]/5 pl-5 py-4 pr-4 my-6 rounded-r-lg">
                  <p className="text-gray-800 text-lg font-medium italic">
                    &ldquo;I&apos;d rather pay $1.2M for a business on my terms than $800K on the seller&apos;s terms. On my terms, I might pay $50K down and $8K a month. On the seller&apos;s terms, I might need $400K cash at closing. The price is a vanity number. The terms are where you make or lose money.&rdquo;
                  </p>
                  <p className="text-gray-600 mt-2">&mdash; Chris Koerner</p>
                </blockquote>
                <p className="text-gray-700 text-lg mb-4">
                  Here&apos;s how the conversation goes in practice:
                </p>
                <ol className="space-y-4 text-gray-700 text-lg mb-4">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                    <span><strong>Ask what they want for the business.</strong> Let them name the price. Don&apos;t flinch. Don&apos;t counter immediately.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                    <span><strong>Say: &ldquo;I can work with that price.&rdquo;</strong> Watch their shoulders drop. Half the tension in the negotiation just evaporated.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                    <span><strong>Follow up with: &ldquo;Here&apos;s how I can structure it to make that work for both of us.&rdquo;</strong> Then present your terms &mdash; low down payment, seller financing, graduated payments, whatever structure fits the situation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                    <span><strong>Frame seller financing as beneficial to them.</strong> Tax advantages of an installment sale. Steady income stream. Interest income they wouldn&apos;t get from an all-cash deal. Position yourself as the person helping them optimize their exit, not the person trying to pay less.</span>
                  </li>
                </ol>
                <p className="text-gray-700 text-lg">
                  The seller walks away feeling like they got their price. You walk away with terms that make the deal work on your cash flow. Both sides win.
                </p>
              </section>

              {/* Proof Story */}
              <section id="proof-story">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">How I Bought My First House Making $2.13 an Hour</h2>
                <p className="text-gray-700 text-lg mb-4">
                  People ask me where I got the confidence to structure creative deals on million-dollar businesses. The answer is: I started with a house I had no business buying.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  I was a waiter. My base pay was $2.13 an hour plus tips. I had no savings. No trust fund. No rich uncle. I was living with a roommate and barely making rent.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  But I&apos;d been reading everything I could about real estate, and I found a house at <strong>1805 21st Ave E</strong>. Asking price: $90,000. I wanted it. I just didn&apos;t have any way to pay for it.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  Here&apos;s what I figured out:
                </p>
                <ul className="space-y-3 text-gray-700 text-lg mb-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#1e3a5f] font-bold mt-1">&#x2022;</span>
                    <span><strong>FHA loan with 3.5% down.</strong> On a $90K house, that&apos;s $3,150. I scraped it together.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#1e3a5f] font-bold mt-1">&#x2022;</span>
                    <span><strong>PMI refusal.</strong> The mortgage company wanted to charge me private mortgage insurance because I was putting less than 20% down. I found a lender who would waive PMI by slightly increasing the interest rate &mdash; which actually saved me money monthly.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#1e3a5f] font-bold mt-1">&#x2022;</span>
                    <span><strong>$8,000 first-time homebuyer tax credit.</strong> This was during the 2008&ndash;2010 window when the government was offering tax credits to get people buying homes again. That $8K went straight back into my pocket after I filed taxes &mdash; more than covering my down payment.</span>
                  </li>
                </ul>
                <p className="text-gray-700 text-lg mb-4">
                  So the net math: I put $3,150 down, got $8,000 back from the tax credit, and owned a house with $4,850 more in my bank account than when I started.
                </p>
                <p className="text-gray-900 text-xl font-bold mb-4">
                  I got paid to buy my first house.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  That house gave me confidence. Within a year, I bought a second property. Same playbook. Different structure. The first deal teaches you that the rules are more flexible than everyone tells you. Once you know that, you can&apos;t unknow it.
                </p>
                <blockquote className="border-l-4 border-[#1e3a5f] bg-[#1e3a5f]/5 pl-5 py-4 pr-4 my-6 rounded-r-lg">
                  <p className="text-gray-800 text-lg font-medium italic">
                    &ldquo;Every creative deal I&apos;ve done since &mdash; the $2.2M business, the $2M RV park, all five companies &mdash; started with the confidence I got from figuring out how to buy a $90K house on a waiter&apos;s salary.&rdquo;
                  </p>
                  <p className="text-gray-600 mt-2">&mdash; Chris Koerner</p>
                </blockquote>
              </section>

              {/* Social Media Strategy */}
              <section id="social-media-strategy">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">The Asymmetric Bet: Social Media as a Deal-Finding Engine</h2>
                <p className="text-gray-700 text-lg mb-4">
                  Most people think of social media as a place to consume content. I think of it as an asymmetric bet &mdash; a small investment of time that can produce outsized returns in deal flow, relationships, and opportunities.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  Let me tell you about Isaac French and Live Oak Lake.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  Isaac was a regular guy who bought a piece of land near Waco, Texas, and started building a glamping destination. He documented the entire process on Instagram. Every post, every build update, every design decision.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  He went from <strong>zero to 130,000 followers</strong>. And those followers became customers. Live Oak Lake is now booked out months in advance, at premium rates, with zero paid advertising spend. His content IS his marketing.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  But here&apos;s the part most people miss: the followers also became deal flow. Other property owners reached out to Isaac wanting help, wanting to sell, wanting to partner. His social media presence created a gravity well for opportunities.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  <strong>This is the asymmetric bet.</strong> The downside of posting consistently about your business journey is what? You waste 30 minutes a day? The upside is that sellers find you, partners find you, investors find you, and customers find you.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  I&apos;ve gotten multiple deal opportunities directly from social media &mdash; people who follow me, know my work, and reach out because they trust me before we&apos;ve ever spoken. That&apos;s the mom-stranger spectrum working in reverse: social media moves strangers toward &ldquo;mom&rdquo; before the negotiation even starts.
                </p>
                <blockquote className="border-l-4 border-[#1e3a5f] bg-[#1e3a5f]/5 pl-5 py-4 pr-4 my-6 rounded-r-lg">
                  <p className="text-gray-800 text-lg font-medium italic">
                    &ldquo;The best deals don&apos;t come from BizBuySell. They come from relationships. And social media is the most efficient relationship-building tool ever invented &mdash; if you use it to teach, not to sell.&rdquo;
                  </p>
                  <p className="text-gray-600 mt-2">&mdash; Chris Koerner</p>
                </blockquote>
              </section>

              {/* Action Plan */}
              <section id="action-plan">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">What to Do This Week (5 Specific Steps)</h2>
                <p className="text-gray-700 text-lg mb-6">
                  You&apos;ve read the structures. You understand the framework. Now here&apos;s what to actually do, starting today.
                </p>

                <div className="space-y-8">
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex-shrink-0 w-10 h-10 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center font-bold">1</span>
                      <h3 className="text-xl font-bold text-gray-900">Pick one structure and learn it deeply</h3>
                    </div>
                    <p className="text-gray-700 text-lg">
                      Don&apos;t try to master all 10. Pick the one that matches your current situation. If you have zero cash, start with master leases or 100% seller financing. If you have some savings, look at balloon payments or partial seller carryback. Read everything you can about that one structure. Talk to people who&apos;ve used it. <Link href="/clients/chris-koerner" className="text-[#1e3a5f] underline hover:text-[#1e3a5f]/70">Download the cheat sheet</Link> for the exact math.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex-shrink-0 w-10 h-10 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center font-bold">2</span>
                      <h3 className="text-xl font-bold text-gray-900">Talk to three business owners this week</h3>
                    </div>
                    <p className="text-gray-700 text-lg">
                      Not to make offers. Just to talk. Ask about their business, how they started it, what their biggest challenges are, and whether they&apos;ve ever thought about selling. You&apos;re building the relationship muscle. Every conversation moves you up the mom-stranger spectrum with someone who might, someday, be your seller.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex-shrink-0 w-10 h-10 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center font-bold">3</span>
                      <h3 className="text-xl font-bold text-gray-900">Set up a BizBuySell alert for your area</h3>
                    </div>
                    <p className="text-gray-700 text-lg">
                      Go to BizBuySell.com. Set up email alerts for businesses in your price range and geographic area. Start reading listings every day. You&apos;ll start to see patterns: what&apos;s overpriced, what&apos;s been sitting for months (those are your targets), and what types of businesses generate the cash flow you need to service seller financing.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex-shrink-0 w-10 h-10 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center font-bold">4</span>
                      <h3 className="text-xl font-bold text-gray-900">Start posting about your journey</h3>
                    </div>
                    <p className="text-gray-700 text-lg">
                      You don&apos;t need 130K followers. You need 1 post a day sharing what you&apos;re learning, what you&apos;re looking for, and what you&apos;re thinking about. The Isaac French / Live Oak Lake example isn&apos;t about becoming famous. It&apos;s about creating surface area for luck. One post, seen by the right person, can change everything.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex-shrink-0 w-10 h-10 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center font-bold">5</span>
                      <h3 className="text-xl font-bold text-gray-900">Practice the &ldquo;my price, your terms&rdquo; conversation</h3>
                    </div>
                    <p className="text-gray-700 text-lg">
                      Literally practice it out loud. With a friend, a spouse, or in the mirror. The first time you say &ldquo;I can work with that price&rdquo; in a real negotiation, it needs to sound natural. Confident. Not rehearsed. The way you make it sound natural is by rehearsing it until it is.
                    </p>
                  </div>
                </div>

                <div className="bg-[#1e3a5f]/5 border border-[#1e3a5f]/20 rounded-xl p-6 mt-8">
                  <p className="text-gray-900 text-lg font-bold">
                    You don&apos;t need money to start. You need knowledge, relationships, and the willingness to structure a deal that works for both sides. Everything in this article is something you can act on this week with $0 in the bank.
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">What is seller financing and how does it work when buying a business?</h3>
                    <p className="text-gray-700 text-lg">
                      Seller financing means the person selling the business acts as the bank. Instead of getting all their money at closing from a traditional lender, they agree to receive payments over time directly from you, the buyer. You negotiate the down payment, interest rate, payment schedule, and term directly with the seller. This works because many business sellers are motivated by factors beyond just the purchase price &mdash; they want tax advantages from installment sales, they want the business to survive, or they simply can&apos;t find an all-cash buyer.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Can you really buy a business with no money down?</h3>
                    <p className="text-gray-700 text-lg">
                      Yes, but it requires the right deal structure and the right seller relationship. 100% seller financing with zero down does happen &mdash; I&apos;ve done it &mdash; but you typically trade zero down payment for a higher interest rate or a larger total purchase price. The seller needs to trust you, and you need to demonstrate that you can operate the business profitably. Master leases are another path to control a business with zero down payment while you prove yourself before committing to purchase.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">What is a master lease and how can it help me acquire a business?</h3>
                    <p className="text-gray-700 text-lg">
                      A master lease lets you operate and control a business (or property) by paying the owner a fixed monthly payment, without actually buying it yet. You keep everything above that fixed payment as profit. It&apos;s like renting the entire business with an option to buy later. I used a master lease to take over a $2M RV park in Louisiana for $7,000 a month. I ran it, improved it, and now it&apos;s worth potentially $23M. The owner got steady income without management headaches, and I got control of a high-upside asset with no down payment.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Can I combine multiple financing sources to buy a business?</h3>
                    <p className="text-gray-700 text-lg">
                      Absolutely, and this is how most creative deals actually get done. A common structure is partial seller carryback combined with SBA lending and friends-and-family capital. For example, on a $2.2M deal, you might get an SBA loan for 70%, the seller carries 15%, and friends and family put up the remaining 15%. The key is that each source has different terms, risk tolerance, and motivation. Stack them together and you can acquire a business much larger than your personal capital would allow.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">What is the difference between an SBA loan and seller financing?</h3>
                    <p className="text-gray-700 text-lg">
                      An SBA loan comes from a bank, guaranteed by the Small Business Administration. It typically requires 10&ndash;20% down, has strict qualification criteria (credit score, business financials, collateral), and takes 60&ndash;90 days to close. Seller financing comes directly from the business seller. Terms are fully negotiable &mdash; down payment, interest rate, payment schedule, everything. It can close in days, requires no bank approval, and the terms are limited only by what you and the seller agree to. Many deals combine both: an SBA loan for the bulk of the purchase price and seller financing for the gap.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">How do I convince a seller to offer financing?</h3>
                    <p className="text-gray-700 text-lg">
                      Use the &ldquo;my price, your terms&rdquo; framework. Most sellers fixate on the purchase price. If you let them set the price (or get close to their asking price), you gain leverage to dictate the terms &mdash; down payment, interest rate, payment schedule, and timeline. Also understand their real motivation: many sellers want tax benefits from installment sales, want to ensure the business survives for employees and customers, or have been unable to find all-cash buyers. Present seller financing as the solution to their problem, not yours. The closer your relationship on the mom-to-stranger trust spectrum, the more flexible the terms will be.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">What are the biggest risks of buying a business with no money down?</h3>
                    <p className="text-gray-700 text-lg">
                      The biggest risks are: (1) Higher total cost &mdash; zero or low down payment usually means higher interest rates or a larger purchase price, so you pay more over time. (2) Negative cash flow early &mdash; high monthly payments from creative financing can eat into operating cash flow, leaving no margin for error. (3) Balloon payment risk &mdash; if you have a balloon payment due in 3&ndash;5 years and can&apos;t refinance or the business underperforms, you could lose the business. (4) Relationship strain &mdash; if you default on seller financing, you damage a personal or professional relationship, not just a bank relationship. The mitigation for all of these is conservative underwriting: make sure the business cash flow covers your payments with room to spare.
                    </p>
                  </div>
                </div>
              </section>

              {/* Author Bio */}
              <section className="mt-16">
                <div className="border border-gray-200 rounded-xl p-6 md:p-8 bg-gray-50">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">About the Author</h3>
                  <p className="text-gray-700 text-lg italic">
                    Chris Koerner is a serial entrepreneur who has started and sold five companies, each in the 7&ndash;8 figure range. He has been buying real estate for 17 years, starting with a $90K house he bought while making $2.13 an hour as a waiter. His approach to business acquisition centers on creative deal structures, seller financing, and the belief that constraints produce better deals than capital does. He teaches business buying through his content and newsletter.
                  </p>
                </div>
              </section>

              {/* End-of-article CTA */}
              <section className="mt-12">
                <div className="bg-[#1e3a5f] text-white rounded-xl p-8 text-center">
                  <h3 className="text-2xl font-bold mb-3">Get All 10 Deal Structures on One Page</h3>
                  <p className="text-white/80 mb-6 max-w-md mx-auto">
                    Download the free Deal Structure Cheat Sheet. Every structure, the exact math, and the negotiation scripts I use on every deal.
                  </p>
                  <Link href="/clients/chris-koerner" className="inline-block bg-white text-[#1e3a5f] font-semibold px-8 py-3.5 rounded-lg hover:bg-gray-100 transition">
                    Get the Free Cheat Sheet &rarr;
                  </Link>
                </div>
              </section>

              {/* Series navigation (bottom) */}
              {nav.seriesName && (
                <SeriesNav
                  clientSlug={CLIENT_SLUG}
                  seriesName={nav.seriesName}
                  currentOrder={firstPost?.seriesOrder || 1}
                  totalPosts={nav.totalPosts}
                  prev={undefined}
                  next={nav.next ? { slug: nav.next.slug, title: nav.next.title } : undefined}
                  position="bottom"
                />
              )}

            </div>
          </div>
        </article>
      </main>
    </>
  )
}
