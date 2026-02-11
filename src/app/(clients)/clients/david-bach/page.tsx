import type { Metadata } from 'next'
import LeadCaptureForm from './LeadCaptureForm'

export const metadata: Metadata = {
  title: 'How Automatic Is Your Financial Life? Free Scorecard | David Bach',
  description: 'Take the free Automatic Millionaire Scorecard. Score yourself across 8 financial categories in 5 minutes. Based on David Bach\'s system — used by 10 million readers worldwide.',
  alternates: {
    canonical: 'https://contentrepurposehub.com/clients/david-bach',
  },
  openGraph: {
    title: 'How Automatic Is Your Financial Life? Take the Free Assessment',
    description: 'Score yourself across 8 financial categories in 5 minutes. Find out if your money is working for you — or disappearing. By David Bach.',
    url: 'https://contentrepurposehub.com/clients/david-bach',
    siteName: 'David Bach',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Automatic Is Your Financial Life? Free 5-Minute Scorecard',
    description: 'Score yourself across 8 categories. Based on David Bach\'s system used by 10 million readers.',
  },
}

export default function DavidBachLanding() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'The Automatic Millionaire Scorecard',
    description: 'Free 5-minute financial self-assessment based on David Bach\'s Automatic Millionaire system.',
    url: 'https://contentrepurposehub.com/clients/david-bach',
    author: {
      '@type': 'Person',
      name: 'David Bach',
      jobTitle: '9x New York Times Bestselling Author',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen">
        {/* Hero — Lead Capture */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-[#1e3a5f]/5 to-white">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-sm font-medium text-[#1e3a5f] uppercase tracking-wider mb-4">
              Free 5-Minute Assessment
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              How Automatic Is Your Financial Life?
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              Most people think they need more income to build wealth. They don&apos;t. They need a better system. Take the scorecard and find out where yours stands.
            </p>
            <div className="max-w-sm mx-auto">
              <LeadCaptureForm source="hero" />
            </div>
          </div>
        </section>

        {/* What You'll Discover */}
        <section className="py-14 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What the Scorecard Reveals
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full flex items-center justify-center font-bold text-sm">1</span>
                <div>
                  <p className="font-semibold text-gray-900">Your automation score</p>
                  <p className="text-gray-600 text-sm">How much of your financial life runs on autopilot vs. manual decisions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full flex items-center justify-center font-bold text-sm">2</span>
                <div>
                  <p className="font-semibold text-gray-900">Your biggest gap</p>
                  <p className="text-gray-600 text-sm">The one area where money is slipping through the cracks</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full flex items-center justify-center font-bold text-sm">3</span>
                <div>
                  <p className="font-semibold text-gray-900">Where you stand vs. millionaires</p>
                  <p className="text-gray-600 text-sm">How your habits compare to the 654,000 Fidelity 401k millionaires</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full flex items-center justify-center font-bold text-sm">4</span>
                <div>
                  <p className="font-semibold text-gray-900">Your next step</p>
                  <p className="text-gray-600 text-sm">A personalized action plan based on your score</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Based on a System Used by Millions
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              This scorecard is built on David Bach&apos;s Automatic Millionaire system &mdash; the framework behind nearly 10 million books sold and 33 years of financial advising.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-[#1e3a5f]">10M+</p>
                <p className="text-gray-500 text-sm">Books sold worldwide</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1e3a5f]">9x</p>
                <p className="text-gray-500 text-sm">NY Times bestseller</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1e3a5f]">33</p>
                <p className="text-gray-500 text-sm">Years of advising</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-14 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              How It Works
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <p className="font-semibold text-gray-900">Enter your email</p>
                  <p className="text-gray-600">So we can send your personalized results and action plan.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <p className="font-semibold text-gray-900">Take the 5-minute assessment</p>
                  <p className="text-gray-600">Answer 24 questions across 8 financial categories. Honest answers only.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <p className="font-semibold text-gray-900">Get your score + action plan</p>
                  <p className="text-gray-600">See exactly where you stand and what to fix first.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">How long does it take?</h3>
                <p className="text-gray-600">About 5 minutes. 24 questions, mostly yes/no.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Is it actually free?</h3>
                <p className="text-gray-600">Yes. No credit card. No hidden upsell. Just your score and what to do about it.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">What happens with my email?</h3>
                <p className="text-gray-600">We&apos;ll send your results and a few follow-up tips from David Bach. You can unsubscribe anytime.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Find Out Where You Stand?
            </h2>
            <p className="text-gray-600 mb-8">
              Takes 5 minutes. Might change the next 40 years.
            </p>
            <div className="max-w-sm mx-auto">
              <LeadCaptureForm source="footer" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
