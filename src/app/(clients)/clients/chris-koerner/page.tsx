import type { Metadata } from 'next'
import LeadCaptureForm from './LeadCaptureForm'
import { getClient } from '@/lib/clients'

export const metadata: Metadata = {
  title: '10 Deal Structures to Buy Big Things With Little Money | Chris Koerner',
  description: 'Get the free seller financing cheat sheet. 10 deal structures with real numbers from someone who bought an $800K business for $50K down. By Chris Koerner.',
  alternates: {
    canonical: 'https://contentrepurposehub.com/clients/chris-koerner',
  },
  openGraph: {
    title: '10 Deal Structures to Buy Big Things With Little Money',
    description: 'The exact seller financing playbook from 17 years of buying real estate and five 7-8 figure companies. Free cheat sheet with real numbers.',
    url: 'https://contentrepurposehub.com/clients/chris-koerner',
    siteName: 'Chris Koerner',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '10 Deal Structures to Buy Big Things With Little Money',
    description: 'Free cheat sheet: seller financing structures with real numbers from real deals. By Chris Koerner.',
  },
}

export default function ChrisKoernerLanding() {
  const client = getClient('chris-koerner')
  const redirectUrl = client?.postCaptureRedirect || '/clients/chris-koerner/scorecard'

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'The Seller Financing Deal Structure Cheat Sheet',
    description: 'Free cheat sheet with 10 seller financing structures to buy businesses and real estate with little or no money down.',
    url: 'https://contentrepurposehub.com/clients/chris-koerner',
    author: {
      '@type': 'Person',
      name: 'Chris Koerner',
      jobTitle: 'Serial Entrepreneur',
      description: 'Started and sold five 7-8 figure companies. 17 years buying real estate.',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen">
        {/* Hero -- Lead Capture */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-[#1e3a5f]/5 to-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left -- Copy + Form */}
            <div>
              {/* Author identity */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white font-bold text-lg">
                  CK
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Chris Koerner</p>
                  <p className="text-xs text-gray-500">Serial Entrepreneur &middot; 5 Companies Built &amp; Sold</p>
                </div>
              </div>

              <p className="text-sm font-medium text-[#1e3a5f] uppercase tracking-wider mb-4">
                Free Deal Structure Cheat Sheet
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                I Bought My First House Making $2.13 an Hour. Here Are the 10 Deal Structures I&apos;ve Used Ever Since.
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                The exact seller financing playbook from 17 years of buying real estate and five 7-8 figure companies. No theory. No guru fluff. Just the structures and the real numbers behind each one.
              </p>
              <div className="max-w-sm">
                <LeadCaptureForm source="hero" redirectUrl={redirectUrl} />
              </div>
            </div>

            {/* Right -- Visual */}
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] rounded-2xl p-8 text-white shadow-lg">
                <p className="text-sm uppercase tracking-wider text-white/60 mb-4">Inside the Cheat Sheet</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-sm font-bold">10</span>
                    <div>
                      <p className="font-semibold">Deal Structures</p>
                      <p className="text-white/70 text-sm">Each with real dollar amounts from real deals</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-sm font-bold">$</span>
                    <div>
                      <p className="font-semibold">Exact Negotiation Scripts</p>
                      <p className="text-white/70 text-sm">What to say to the seller, word for word</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-sm font-bold">%</span>
                    <div>
                      <p className="font-semibold">Risk Brackets</p>
                      <p className="text-white/70 text-sm">Worst case / best case for every structure</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-sm font-bold">?</span>
                    <div>
                      <p className="font-semibold">Decision Matrix</p>
                      <p className="text-white/70 text-sm">Match your situation to the right structure</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Get */}
        <section className="py-14 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What the Cheat Sheet Includes
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full flex items-center justify-center font-bold text-sm">1</span>
                <div>
                  <p className="font-semibold text-gray-900">10 seller financing structures</p>
                  <p className="text-gray-600 text-sm">Balloon payments, master leases, partial carrybacks, zero-down, asset swaps, and more</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full flex items-center justify-center font-bold text-sm">2</span>
                <div>
                  <p className="font-semibold text-gray-900">The &ldquo;My Price, Your Terms&rdquo; framework</p>
                  <p className="text-gray-600 text-sm">The two-sentence reframe that turns a dead deal into a structured deal</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full flex items-center justify-center font-bold text-sm">3</span>
                <div>
                  <p className="font-semibold text-gray-900">The Mom vs. Stranger trust spectrum</p>
                  <p className="text-gray-600 text-sm">Why your relationship with the seller matters more than your bank balance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full flex items-center justify-center font-bold text-sm">4</span>
                <div>
                  <p className="font-semibold text-gray-900">Worst-case / best-case brackets</p>
                  <p className="text-gray-600 text-sm">Know exactly what you&apos;re risking before you open your mouth</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signature Quote */}
        <section className="py-10 px-4 bg-[#1e3a5f]">
          <div className="max-w-2xl mx-auto text-center">
            <blockquote className="text-white text-lg md:text-xl italic font-medium leading-relaxed">
              &ldquo;Constraints equal creativity. When you don&apos;t have money, you&apos;re forced to ask better questions. And better questions get better deals.&rdquo;
            </blockquote>
            <p className="text-white/60 text-sm mt-3">&mdash; Chris Koerner</p>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Who Made This?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              I&apos;m Chris Koerner. I grew up poor. I&apos;m cheap. And I&apos;ve spent 17 years figuring out how to buy big things with little money. Everything in this cheat sheet comes from deals I&apos;ve done or directly helped structure.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div>
                <p className="text-3xl font-bold text-[#1e3a5f]">5</p>
                <p className="text-gray-500 text-sm">Companies built &amp; sold (7-8 figures each)</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1e3a5f]">17</p>
                <p className="text-gray-500 text-sm">Years buying real estate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1e3a5f]">750+</p>
                <p className="text-gray-500 text-sm">TKOwners community members</p>
              </div>
            </div>

            {/* Key Deals */}
            <div className="border-t border-gray-200 pt-8">
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-4">Real deals, real numbers</p>
              <div className="flex items-center justify-center gap-4 md:gap-8 text-gray-400 text-sm font-medium flex-wrap">
                <span>$800K biz for $50K down</span>
                <span className="text-gray-200">|</span>
                <span>$2M RV park for $7K/mo</span>
                <span className="text-gray-200">|</span>
                <span>$63K to $4.3M/mo revenue</span>
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
                  <p className="text-gray-600">So we can send you the cheat sheet and the interactive deal structure finder.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <p className="font-semibold text-gray-900">Use the deal structure finder</p>
                  <p className="text-gray-600">Answer 4 questions about your situation. Get matched to the 2-3 structures most likely to work for your deal.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <p className="font-semibold text-gray-900">Start structuring deals</p>
                  <p className="text-gray-600">Each structure comes with the exact conversation starter, risk bracket, and real numbers. Print it and bring it to your next seller meeting.</p>
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
                <h3 className="font-semibold text-gray-900 mb-1">Is this actually free?</h3>
                <p className="text-gray-600">Yes. No credit card. No upsell page. You give me your email, I give you the cheat sheet and the deal structure finder. I also write a free weekly newsletter at tkopod.com where I break down deals like this with real numbers. You&apos;ll get that too. Unsubscribe whenever.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">I&apos;ve never done a deal before. Is this too advanced?</h3>
                <p className="text-gray-600">No. I wrote this the same way I explain deal structures on my YouTube channel &mdash; plain language, real examples, no jargon without an explanation. I bought my first house knowing almost nothing. Sometimes ignorance is a superpower.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">What if I want more than a cheat sheet?</h3>
                <p className="text-gray-600">I run a community called TKOwners &mdash; 750+ members at $99/month. It&apos;s where operators share the deals they&apos;re actually doing, with actual numbers. But start with the free cheat sheet. See if the way I think about deal-making makes sense to you first.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Stop Saving Up. Start Structuring Deals.
            </h2>
            <p className="text-gray-600 mb-8">
              You don&apos;t need more money. You need a different conversation with the seller. These 10 structures are how I went from $2.13/hour to five companies.
            </p>
            <div className="max-w-sm mx-auto">
              <LeadCaptureForm source="footer" redirectUrl={redirectUrl} />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
