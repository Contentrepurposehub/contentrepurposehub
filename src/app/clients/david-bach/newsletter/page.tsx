import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'She Saved 50 Cents a Week. She Retired a Millionaire. — David Bach Newsletter',
  description:
    "The one decision that changed my entire family's financial future — and why the next 10 years are your window. By David Bach.",
  alternates: {
    canonical: 'https://contentrepurposehub.com/clients/david-bach/newsletter',
  },
  openGraph: {
    title: 'She Saved 50 Cents a Week. She Retired a Millionaire.',
    description:
      "The one decision that changed my entire family's financial future — and why the next 10 years are your window. By David Bach.",
    url: 'https://contentrepurposehub.com/clients/david-bach/newsletter',
    siteName: 'David Bach',
    type: 'article',
    publishedTime: '2026-02-11T00:00:00.000Z',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'She Saved 50 Cents a Week. She Retired a Millionaire.',
    description:
      "The one decision that changed my entire family's financial future — and why the next 10 years are your window.",
  },
}

export default function NewsletterPage() {
  const newsArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: 'She Saved 50 Cents a Week. She Retired a Millionaire.',
    author: {
      '@type': 'Person',
      name: 'David Bach',
      jobTitle: 'Financial Author & Speaker',
      description:
        '9x New York Times bestselling author. Former Senior VP, Morgan Stanley. 33 years in financial services. Nearly 10 million copies sold worldwide.',
    },
    datePublished: '2026-02-11',
    articleSection: 'Personal Finance Newsletter',
    url: 'https://contentrepurposehub.com/clients/david-bach/newsletter',
    publisher: {
      '@type': 'Organization',
      name: 'ContentRepurposeHub',
      url: 'https://contentrepurposehub.com',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://contentrepurposehub.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'David Bach',
        item: 'https://contentrepurposehub.com/clients/david-bach',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Newsletter',
        item: 'https://contentrepurposehub.com/clients/david-bach/newsletter',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="bg-gray-50 min-h-screen py-8 px-4">
        {/* Breadcrumb */}
        <nav className="max-w-xl mx-auto mb-6 text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-gray-700 transition">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/clients/david-bach" className="hover:text-gray-700 transition">
                David Bach
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-900 font-medium">Newsletter</li>
          </ol>
        </nav>

        {/* Email Container */}
        <article className="max-w-xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          {/* Top Bar — "View in browser" style header */}
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 text-sm">
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-3">
              Web version of email newsletter
            </p>
            <div className="space-y-1.5">
              <p className="text-gray-700">
                <span className="font-semibold text-gray-500">Subject:</span>{' '}
                She saved 50 cents a week. She retired a millionaire.
              </p>
              <p className="text-gray-500 text-xs italic">
                Preview: The one decision that changed my entire family&apos;s financial future
                &mdash; and why the next 10 years are your window.
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-gray-500">From:</span> David Bach
              </p>
            </div>
          </div>

          {/* Email Body */}
          <div className="px-6 py-8 sm:px-8 text-base leading-relaxed text-gray-800">
            {/* Opening */}
            <p className="text-lg leading-relaxed mb-6">
              My grandmother Rose made a decision at 30 years old that I think about almost every
              day.
            </p>

            <p className="mb-6">
              It was her birthday. A cold day. She turned to my grandfather and said something that
              would change the entire destiny of our family:
            </p>

            <p className="mb-6">
              <strong>
                &ldquo;We don&apos;t have any money. We&apos;re living paycheck to paycheck. I
                don&apos;t want to retire here. I want to go to California where it&apos;s
                warm.&rdquo;
              </strong>
            </p>

            <p className="mb-6">
              My grandfather asked what she wanted to do about it.
            </p>

            <p className="mb-6">
              And she said:{' '}
              <strong>
                &ldquo;We need to change what we&apos;re doing, or nothing will change.&rdquo;
              </strong>
            </p>

            {/* Divider */}
            <hr className="border-t border-gray-200 my-8" />

            <p className="mb-6">
              She didn&apos;t have a college degree. My grandfather worked in a plant. She worked in
              retail. They were ordinary people with an ordinary income.
            </p>

            <p className="mb-6">
              But that day, she started saving 50 cents a week from her paycheck. My grandfather did
              the same.
            </p>

            <p className="mb-6 font-semibold text-gray-900">50 cents a week.</p>

            <p className="mb-6">
              She didn&apos;t wait until they had more money. She didn&apos;t wait until the timing
              was right. She didn&apos;t wait until she understood the stock market.
            </p>

            <p className="mb-6">She started with what she had.</p>

            <p className="mb-6">
              Over her lifetime, Grandma Rose became an investor. She became a self-made millionaire.
              She moved to California. She retired where it was warm.
            </p>

            <p className="mb-8">
              And her friends from Milwaukee &mdash; the ones who teased her for brown-bagging her
              lunch, for being &ldquo;cheap,&rdquo; for not spending like everyone else?
            </p>

            <p className="mb-0">
              They got stuck. They couldn&apos;t afford to retire the way she did.
            </p>

            {/* Divider */}
            <hr className="border-t border-gray-200 my-8" />

            {/* The Ripple Effect */}
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              The Ripple Effect That Still Blows My Mind
            </h2>

            <p className="mb-6">
              Here&apos;s the part of this story that I didn&apos;t fully understand until I was much
              older.
            </p>

            <p className="mb-6">
              Grandma Rose&apos;s decision at 30 didn&apos;t just change her life.
            </p>

            <p className="mb-6">
              She taught my father how to invest. He became a financial adviser for 45 years.
            </p>

            <p className="mb-4">My sister became a financial adviser.</p>

            <p className="mb-6">
              I became a financial adviser at Morgan Stanley, then spent the last 30 years writing
              books and teaching millions of people about money.
            </p>

            <p className="mb-6">
              <strong>One woman. One decision. On one cold birthday.</strong>
            </p>

            <p className="mb-6">
              And here I am, decades later, still teaching the lessons she taught me when I was seven
              years old at a McDonald&apos;s &mdash; when she explained the difference between
              consumers, employees, and investors, then took me to a brokerage firm to buy my first
              share of stock.
            </p>

            <p className="mb-0">
              That&apos;s what I mean when I say financial decisions have a ripple effect.
              You&apos;re not just deciding for yourself. You&apos;re deciding for your kids. Your
              grandkids. Generations you&apos;ll never meet.
            </p>

            {/* Divider */}
            <hr className="border-t border-gray-200 my-8" />

            {/* Why I'm Telling You This Right Now */}
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Why I&apos;m Telling You This Right Now
            </h2>

            <p className="mb-6">
              I&apos;m not sharing Grandma Rose&apos;s story today just because it&apos;s a nice
              story.
            </p>

            <p className="mb-6">
              I&apos;m sharing it because I believe{' '}
              <strong>
                the next 10 years will be the greatest opportunity to build wealth in our lifetime.
              </strong>
            </p>

            <p className="mb-6">
              AI is making companies more productive and more profitable than they&apos;ve ever been.
              The stock market went up over 17% last year. Some global investments were up 30%+.
              There are now 24 million millionaires in the United States &mdash; up 8 million in just
              20 years.
            </p>

            <p className="mb-6">
              Wealth is being created at a pace we haven&apos;t seen before.
            </p>

            <p className="mb-6">
              <strong>And at the same time, the safety nets are breaking.</strong>
            </p>

            <p className="mb-6">
              Social Security is projected to be underfunded by 2033 &mdash; that&apos;s less than 8
              years from now. The government is already warning of a 20% cut to benefits. Sixty
              million Americans depend on that $1,900 monthly check.
            </p>

            <p className="mb-6">
              I just did a keynote speech in Arizona. I asked the audience how many Americans receive
              SNAP checks (government food assistance). Most people had no idea. The answer: 41.5
              million people. Getting about $6 a day for food.
            </p>

            <p className="mb-6">
              When the government shut down for six weeks, that was three pay cycles. The average
              American doesn&apos;t have two weeks of expenses saved. Let that sink in.
            </p>

            <p className="mb-0">
              No one is coming to save you. The system that people are counting on is buckling under
              its own weight.
            </p>

            {/* Divider */}
            <hr className="border-t border-gray-200 my-8" />

            {/* Your Grandma Rose Moment */}
            <h2 className="text-xl font-bold text-gray-900 mb-6">Your Grandma Rose Moment</h2>

            <p className="mb-6">
              My grandmother didn&apos;t have AI. She didn&apos;t have investment apps. She
              didn&apos;t have target-date mutual funds that automatically rebalance. She didn&apos;t
              have index funds that let you own 3,500 companies for the cost of a coffee.
            </p>

            <p className="mb-6">She had 50 cents a week and a decision.</p>

            <p className="mb-6">
              You have more tools, more access, and more opportunity than she ever did.
            </p>

            <p className="mb-6">
              The question is the same one she answered on that cold birthday:
            </p>

            <p className="mb-6">
              <strong>
                Are you going to change what you&apos;re doing? Or are you going to keep doing the
                same thing and hope something magically changes?
              </strong>
            </p>

            <p className="mb-6">Here&apos;s what I know after 33 years of doing this:</p>

            <p className="mb-6 font-semibold text-gray-900">
              Nothing changes until you make it automatic.
            </p>

            <p className="mb-4">
              Not &ldquo;I&apos;ll start saving next month.&rdquo;
            </p>
            <p className="mb-4">
              Not &ldquo;I&apos;ll figure out investing when I have more money.&rdquo;
            </p>
            <p className="mb-6">
              Not &ldquo;I&apos;ll deal with it later.&rdquo;
            </p>

            <p className="mb-6">
              Automatic. Today. Even if it&apos;s $1 a day. Even if it&apos;s 1% of your income.
              Even if you open the account and set up the transfer and start with the smallest amount
              you can imagine.
            </p>

            <p className="mb-0">
              Because here&apos;s the thing about my grandmother &mdash; she didn&apos;t start rich.
              She started with 50 cents. But she started. And she made it automatic. And she never
              stopped.
            </p>

            {/* Divider */}
            <hr className="border-t border-gray-200 my-8" />

            {/* One Action You Can Take Today */}
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              One Action You Can Take Today
            </h2>

            <p className="mb-6">
              Open your phone. Go to whatever brokerage or bank you use &mdash; or open a new
              account at Fidelity, Schwab, or Vanguard (takes 10 minutes).
            </p>

            <p className="mb-6">
              Set up an automatic transfer. Whatever you can afford. From your checking account, on
              payday, every single time.
            </p>

            <p className="mb-6">
              Don&apos;t think about it. Don&apos;t budget for it. Don&apos;t plan to start next
              month.
            </p>

            <p className="mb-8">Do it while you&apos;re reading this email.</p>

            {/* Grandma Rose's Three Quotes */}
            <p className="mb-6">My grandmother always said three things:</p>

            <div className="space-y-4 mb-8">
              <blockquote className="border-l-4 border-[#1e3a5f] pl-4 py-1 italic text-gray-700">
                <strong className="not-italic">1.</strong>{' '}
                <strong>&ldquo;Dream it, design it, and do it.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-[#1e3a5f] pl-4 py-1 italic text-gray-700">
                <strong className="not-italic">2.</strong>{' '}
                <strong>&ldquo;You&apos;re going to run out of time.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-[#1e3a5f] pl-4 py-1 italic text-gray-700">
                <strong className="not-italic">3.</strong> And the one that started everything:{' '}
                <strong>
                  &ldquo;We need to change what we&apos;re doing, or nothing will change.&rdquo;
                </strong>
              </blockquote>
            </div>

            <p className="mb-8">She was right about all three.</p>

            {/* CTA Button */}
            <div className="text-center my-10">
              <a
                href="https://www.amazon.com/Automatic-Millionaire-Expanded-Updated-Powerful/dp/0451499085"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#1e3a5f] hover:bg-[#162d4a] text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors shadow-md hover:shadow-lg"
              >
                Get the complete system: The Automatic Millionaire (Updated Edition) &rarr;
              </a>
            </div>

            {/* Divider */}
            <hr className="border-t border-gray-200 my-8" />

            {/* Sign-off */}
            <p className="text-lg font-medium text-gray-900 mb-6" style={{ fontStyle: 'italic' }}>
              David
            </p>

            {/* P.S. */}
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>P.S.</strong> &mdash; This might be the last time I do this. I&apos;ve updated
              The Automatic Millionaire one final time. New strategies for the AI economy. New fund
              recommendations. 20 years of reader success stories. The book I wish I could hand to
              every person who&apos;s ever said &ldquo;I don&apos;t know where to start.&rdquo; If
              that&apos;s you,{' '}
              <a
                href="https://www.amazon.com/Automatic-Millionaire-Expanded-Updated-Powerful/dp/0451499085"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1e3a5f] underline hover:text-[#162d4a] transition-colors"
              >
                this is where you start
              </a>
              .
            </p>

            {/* Divider */}
            <hr className="border-t border-gray-200 my-8" />

            {/* Footer note */}
            <p className="text-xs text-gray-400 italic leading-relaxed text-center">
              You&apos;re receiving this because you&apos;re interested in building wealth the
              boring, automatic way. If this edition resonated, forward it to someone who needs to
              hear Grandma Rose&apos;s story.
            </p>
          </div>
        </article>

        {/* Back link */}
        <div className="max-w-xl mx-auto mt-8 text-center">
          <Link
            href="/clients/david-bach"
            className="text-sm text-gray-500 hover:text-gray-700 transition"
          >
            &larr; Back to all deliverables
          </Link>
        </div>
      </main>
    </>
  )
}
