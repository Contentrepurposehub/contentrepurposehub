import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Webinar-First Content Strategy: Create 3 Months of Content From 1 Monthly Webinar',
  description: 'Learn how coaches and consultants can build a complete content marketing plan powered by a single monthly webinar. Framework, calendar, and real math included.',
  keywords: 'webinar content strategy, content strategy for coaches, coach content marketing plan, webinar marketing strategy coaches, webinar-first content strategy, content creation for coaches',
  alternates: {
    canonical: 'https://contentrepurposehub.com/blog/webinar-content-strategy-coaches',
  },
  openGraph: {
    title: 'The Webinar-First Content Strategy: 3 Months of Content From 1 Webinar',
    description: 'Stop creating content from scratch. Build your entire content marketing plan around a single monthly webinar. Framework and calendar for coaches and consultants.',
    url: 'https://contentrepurposehub.com/blog/webinar-content-strategy-coaches',
    siteName: 'ContentRepurposeHub',
    type: 'article',
    publishedTime: '2026-02-23T00:00:00.000Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Webinar-First Content Strategy for Coaches and Consultants',
    description: 'Create 3 months of content from 1 monthly webinar. Framework, calendar, and real math inside.',
  },
}

export default function WebinarContentStrategyCoaches() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://contentrepurposehub.com/blog/webinar-content-strategy-coaches#article',
        headline: 'The Webinar-First Content Strategy: How Coaches and Consultants Can Create 3 Months of Content From 1 Monthly Webinar',
        description: 'Learn how coaches and consultants can build a complete content marketing plan powered by a single monthly webinar. Framework, calendar, and real math included.',
        datePublished: '2026-02-23',
        dateModified: '2026-02-23',
        author: {
          '@type': 'Organization',
          name: 'ContentRepurposeHub',
          url: 'https://contentrepurposehub.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'ContentRepurposeHub',
          url: 'https://contentrepurposehub.com',
        },
        mainEntityOfPage: 'https://contentrepurposehub.com/blog/webinar-content-strategy-coaches',
        wordCount: 2400,
        articleSection: 'Content Marketing',
        keywords: ['webinar content strategy', 'content strategy for coaches', 'coach content marketing plan', 'webinar marketing strategy coaches', 'webinar-first content strategy'],
        about: [
          { '@type': 'Thing', name: 'Content Marketing Strategy' },
          { '@type': 'Thing', name: 'Webinar Marketing' },
          { '@type': 'Thing', name: 'Content Repurposing' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://contentrepurposehub.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://contentrepurposehub.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Webinar Content Strategy for Coaches' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is a webinar-first content strategy?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A webinar-first content strategy is a marketing approach where you create one webinar per month and repurpose that single recording into dozens of content pieces across every platform -- blog posts, LinkedIn posts, email sequences, lead magnets, video clips, and more. Instead of creating content from scratch for each channel, the webinar serves as your single content input that fuels everything else.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much content can I create from one monthly webinar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A single 60-minute webinar can be repurposed into 30-75+ content pieces, including 3-5 short video clips, 1-2 blog posts, 5-10 LinkedIn posts, a LinkedIn carousel, an email sequence, newsletter editions, quote graphics, a podcast episode, and a PDF lead magnet. This is enough to fill your content calendar for 4-12 weeks depending on your posting frequency.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do coaches build a content strategy around webinars?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Coaches build a webinar-first content strategy by choosing one webinar topic per month that aligns with their core offer, delivering that webinar live, then systematically repurposing the recording into content for every platform. The key is planning webinar topics that map to your ideal client journey -- awareness topics to attract new leads, consideration topics to build trust, and decision topics to drive sales.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does it take to repurpose a webinar into 3 months of content?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If you do it yourself, repurposing one webinar into a full content calendar takes 15-25 hours of work spread across transcription, writing, video editing, design, and scheduling. A professional repurposing service can handle the entire process in 7-10 business days, requiring only about 1 hour of your time to submit the recording and review the finished content.',
            },
          },
          {
            '@type': 'Question',
            name: 'What should coaches talk about in their webinars for content marketing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Coaches should choose webinar topics that solve a specific problem for their ideal client and naturally connect to their paid offer. The best topics follow a framework: teach something actionable (so the content has standalone value), address a common misconception (so it sparks engagement), and demonstrate your methodology (so it builds trust in your approach). Plan topics in 90-day cycles so each quarter covers awareness, consideration, and decision-stage content.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is a webinar content strategy better than posting on social media every day?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, for most coaches and consultants. A webinar-first strategy is more sustainable because you create content once (during the live webinar) and distribute it many times. Daily social media posting from scratch requires constant ideation, writing, and production. The webinar approach eliminates the daily content hamster wheel while actually producing more content at higher quality because it draws from your deep expertise delivered in a teaching format.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I use a webinar content strategy if I only do webinars quarterly?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolutely. If you deliver one webinar per quarter, you can repurpose that single recording into enough content to fill the entire 90 days until your next webinar. You would need to extract more pieces per webinar (aiming for 50-75+ content pieces) and schedule them across a longer time horizon. However, monthly webinars give you fresher source material and let each webinar carry a lighter content load.',
            },
          },
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
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl text-gray-900">
              Content<span className="text-blue-600">Repurpose</span>Hub
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition">Blog</Link>
              <Link href="/#pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</Link>
              <Link href="/#faq" className="text-gray-600 hover:text-gray-900 transition">FAQ</Link>
              <a
                href="https://cal.com/contentrepurposehub/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Book a Call
              </a>
            </div>
          </div>
        </nav>

        {/* Article */}
        <article className="pt-32 pb-20 px-4">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-blue-600">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700">Webinar Content Strategy for Coaches</span>
            </nav>

            {/* Header */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Strategy</span>
                <span className="text-xs text-gray-500">12 min read</span>
                <span className="text-xs text-gray-400">February 23, 2026</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                The Webinar-First Content Strategy: How Coaches and Consultants Can Create 3 Months of Content From 1 Monthly Webinar
              </h1>
              <p className="text-xl text-gray-600">
                You do not need to post on LinkedIn every day, write a blog post every week, and send a newsletter every Tuesday. You need one webinar per month and a system to turn it into everything else. Here is the exact framework.
              </p>
            </header>

            {/* Key Takeaways */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Key Takeaways</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">--</span>
                  <span>A single monthly webinar can produce 30-75+ content pieces, enough to fill 4-12 weeks of content across every platform.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">--</span>
                  <span>The webinar-first model eliminates the daily content creation hamster wheel that burns out most coaches.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">--</span>
                  <span>By mapping webinar topics to funnel stages, you build a content ecosystem that attracts, nurtures, and converts clients on autopilot.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">--</span>
                  <span>DIY repurposing takes 15-25 hours per webinar. A done-for-you service delivers the same output in about 1 hour of your time.</span>
                </li>
              </ul>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 rounded-xl p-6 mb-10 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Table of Contents</h2>
              <ol className="space-y-2 text-blue-600">
                <li><a href="#content-creation-trap" className="hover:text-blue-800">1. The Content Creation Trap: Why Coaches Burn Out on Marketing</a></li>
                <li><a href="#webinar-first-model" className="hover:text-blue-800">2. The Webinar-First Model: One Input, Dozens of Outputs</a></li>
                <li><a href="#monthly-content-calendar" className="hover:text-blue-800">3. Monthly Content Calendar Powered by a Single Webinar</a></li>
                <li><a href="#funnel-stages" className="hover:text-blue-800">4. Mapping Content Types to Funnel Stages</a></li>
                <li><a href="#minimum-viable-webinar" className="hover:text-blue-800">5. The Minimum Viable Webinar for Maximum Content Output</a></li>
                <li><a href="#90-day-topics" className="hover:text-blue-800">6. How to Plan Webinar Topics That Feed Your Strategy for 90 Days</a></li>
                <li><a href="#real-math" className="hover:text-blue-800">7. Real Math: Time Invested vs. Content Produced</a></li>
                <li><a href="#faq" className="hover:text-blue-800">8. Frequently Asked Questions</a></li>
              </ol>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">

              {/* Section 1 */}
              <section id="content-creation-trap" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Content Creation Trap: Why Coaches Burn Out on Marketing</h2>
                <p className="text-gray-700 mb-4">
                  Here is the content marketing advice most coaches receive: post on LinkedIn 5 times per week, send a weekly newsletter, publish a blog post every 7-10 days, create short-form video clips, show up on Instagram Stories, write Twitter threads, and build an email sequence. Do all of that while also coaching clients, developing programs, and running your business.
                </p>
                <p className="text-gray-700 mb-4">
                  The result is predictable. You start strong for 2-3 weeks. Then you miss a few posts. Then the newsletter slips. Then the blog goes quiet. Within 60 days, your content calendar has more gaps than entries. You feel guilty about it, which makes you avoid it even more.
                </p>
                <p className="text-gray-700 mb-4">
                  This is not a discipline problem. It is a <strong>strategy problem.</strong> You are trying to create original content for 5-7 different platforms from scratch, every single week. That is not a content strategy -- it is a content treadmill.
                </p>
                <p className="text-gray-700 mb-4">
                  According to HubSpot&apos;s 2026 State of Marketing report, content repurposing is the 5th most popular digital marketing trend of the year. And for good reason: <strong>60% of marketers report getting more leads from repurposed content than from original content.</strong> Repurposed content also generates 3x more engagement while reducing creation time by up to 60%.
                </p>
                <p className="text-gray-700 mb-4">
                  The coaches who consistently show up across every platform are not working harder than you. They are working from a different model. Instead of creating content for each platform separately, they create it once and transform it many times.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
                  <p className="text-gray-800 font-medium">
                    The problem is not that you need more ideas or more discipline. The problem is that you need a single content input that produces everything else. That input is a webinar.
                  </p>
                </div>
                <p className="text-gray-700">
                  If you are already running webinars as part of your coaching or consulting business -- or if you have ever considered it -- you are sitting on the most powerful content engine available to you. A single 60-minute webinar, repurposed systematically, can fuel your entire content marketing plan for months. (For a deep dive into the specific formats you can create, read our <Link href="/blog/webinar-repurposing-guide" className="text-blue-600 hover:text-blue-800 font-medium">complete guide to webinar repurposing</Link>.)
                </p>
              </section>

              {/* Section 2 */}
              <section id="webinar-first-model" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Webinar-First Model: One Input, Dozens of Outputs</h2>
                <p className="text-gray-700 mb-4">
                  A webinar content strategy flips the traditional model on its head. Instead of asking &quot;what should I post today?&quot; you ask &quot;what did I already teach in my webinar that I can share here?&quot;
                </p>
                <p className="text-gray-700 mb-4">
                  Here is how the webinar-first model works:
                </p>

                {/* Visual Framework */}
                <div className="my-8 bg-white border-2 border-blue-200 rounded-xl overflow-hidden">
                  <div className="bg-blue-600 text-white text-center py-3 px-4">
                    <p className="font-bold text-lg">The Webinar-First Content Model</p>
                  </div>
                  <div className="p-6">
                    {/* Input */}
                    <div className="text-center mb-6">
                      <div className="inline-block bg-blue-100 border-2 border-blue-400 rounded-xl px-6 py-4">
                        <p className="font-bold text-blue-900 text-lg">1 Monthly Webinar (60 min)</p>
                        <p className="text-blue-700 text-sm">Your single content input</p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="text-center text-blue-400 text-2xl mb-6">
                      <span className="inline-block border-l-2 border-blue-300 h-8"></span>
                      <br />
                      <span className="font-bold">Repurpose</span>
                      <br />
                      <span className="inline-block border-l-2 border-blue-300 h-8"></span>
                    </div>

                    {/* Outputs Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        { type: 'Blog Posts', count: '1-2', color: 'bg-green-50 border-green-200 text-green-800' },
                        { type: 'LinkedIn Posts', count: '5-10', color: 'bg-blue-50 border-blue-200 text-blue-800' },
                        { type: 'Video Clips', count: '3-5', color: 'bg-purple-50 border-purple-200 text-purple-800' },
                        { type: 'Email Sequence', count: '3-5 emails', color: 'bg-orange-50 border-orange-200 text-orange-800' },
                        { type: 'Newsletter', count: '2-3 editions', color: 'bg-yellow-50 border-yellow-200 text-yellow-800' },
                        { type: 'LinkedIn Carousel', count: '1-2', color: 'bg-indigo-50 border-indigo-200 text-indigo-800' },
                        { type: 'Quote Graphics', count: '5-8', color: 'bg-pink-50 border-pink-200 text-pink-800' },
                        { type: 'PDF Lead Magnet', count: '1', color: 'bg-red-50 border-red-200 text-red-800' },
                        { type: 'Podcast Episode', count: '1', color: 'bg-teal-50 border-teal-200 text-teal-800' },
                      ].map((item, i) => (
                        <div key={i} className={`border rounded-lg p-3 text-center ${item.color}`}>
                          <p className="font-semibold text-sm">{item.type}</p>
                          <p className="text-xs mt-1">{item.count}</p>
                        </div>
                      ))}
                    </div>

                    {/* Total */}
                    <div className="text-center mt-6 pt-4 border-t border-gray-200">
                      <p className="text-2xl font-bold text-gray-900">= 30-75+ Content Pieces</p>
                      <p className="text-gray-600 text-sm">From one recording you already made</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  The webinar is the ideal content source for three reasons:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li><strong>It captures your authentic voice.</strong> You are teaching in your own words, with your own stories and frameworks. Repurposed content sounds like you, not like generic marketing copy.</li>
                  <li><strong>It is long-form by nature.</strong> A 60-minute webinar contains 8,000-10,000 words of spoken content. That is more raw material than most coaches produce in a month of daily posting.</li>
                  <li><strong>It is multi-format from the start.</strong> You have video (for clips), audio (for podcasts), slides (for carousels and downloads), and a transcript (for blog posts and emails). Every output format is already embedded in the source.</li>
                </ul>
                <p className="text-gray-700">
                  52% of marketers already use webinars in their content strategy, but research shows that only about 20% of that content ever gets repurposed. That means 80% of the value sitting inside webinar recordings is being wasted. The webinar-first content strategy closes that gap. For a category-by-category breakdown of every content piece you can extract, see our <Link href="/blog/webinar-content-pieces-breakdown" className="text-blue-600 hover:text-blue-800 font-medium">complete breakdown of 75+ content pieces from one webinar</Link>.
                </p>
              </section>

              {/* CTA 1 */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 md:p-8 text-center my-10">
                <p className="text-white text-lg font-semibold mb-2">
                  Want someone to build this content calendar for you?
                </p>
                <p className="text-blue-100 mb-4">
                  We turn your monthly webinar into 30-75+ content pieces. Delivered and ready to publish.
                </p>
                <a
                  href="https://contentrepurposehub.com/#pricing"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  See Plans &amp; Pricing &rarr;
                </a>
              </div>

              {/* Section 3 */}
              <section id="monthly-content-calendar" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Monthly Content Calendar Powered by a Single Webinar</h2>
                <p className="text-gray-700 mb-4">
                  Here is what a coach content marketing plan looks like when it is built around the webinar-first model. This example shows how a single webinar delivered in Week 1 feeds every content channel for the remaining 3-4 weeks of the month -- and beyond.
                </p>

                {/* Visual Content Calendar */}
                <div className="my-8 overflow-x-auto">
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden min-w-[640px]">
                    <div className="bg-gray-900 text-white py-3 px-4">
                      <p className="font-bold text-center">Sample Monthly Content Calendar: One Webinar, Four Weeks of Content</p>
                    </div>
                    <div className="divide-y divide-gray-200">
                      {/* Week 1 */}
                      <div className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">WEEK 1</span>
                          <span className="text-sm font-semibold text-gray-900">Webinar + Immediate Content</span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {[
                            { day: 'Tue', task: 'Deliver live webinar', tag: 'Source', tagColor: 'bg-blue-100 text-blue-700' },
                            { day: 'Wed', task: 'Publish full blog post (SEO)', tag: 'Blog', tagColor: 'bg-green-100 text-green-700' },
                            { day: 'Thu', task: 'LinkedIn post: key insight #1', tag: 'Social', tagColor: 'bg-purple-100 text-purple-700' },
                            { day: 'Fri', task: 'Send replay email + takeaways', tag: 'Email', tagColor: 'bg-orange-100 text-orange-700' },
                          ].map((item, i) => (
                            <div key={i} className="bg-gray-50 rounded-lg p-3">
                              <p className="text-xs font-bold text-gray-500 mb-1">{item.day}</p>
                              <p className="text-sm text-gray-800 mb-2">{item.task}</p>
                              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.tagColor}`}>{item.tag}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Week 2 */}
                      <div className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">WEEK 2</span>
                          <span className="text-sm font-semibold text-gray-900">Social + Email Sequence</span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {[
                            { day: 'Mon', task: 'LinkedIn carousel from framework', tag: 'Social', tagColor: 'bg-purple-100 text-purple-700' },
                            { day: 'Tue', task: 'Video clip #1 (Reels/Shorts)', tag: 'Video', tagColor: 'bg-red-100 text-red-700' },
                            { day: 'Wed', task: 'LinkedIn post: key insight #2', tag: 'Social', tagColor: 'bg-purple-100 text-purple-700' },
                            { day: 'Thu', task: 'Newsletter: deep dive on one topic', tag: 'Email', tagColor: 'bg-orange-100 text-orange-700' },
                          ].map((item, i) => (
                            <div key={i} className="bg-gray-50 rounded-lg p-3">
                              <p className="text-xs font-bold text-gray-500 mb-1">{item.day}</p>
                              <p className="text-sm text-gray-800 mb-2">{item.task}</p>
                              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.tagColor}`}>{item.tag}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Week 3 */}
                      <div className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">WEEK 3</span>
                          <span className="text-sm font-semibold text-gray-900">Deeper Content + Lead Magnets</span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {[
                            { day: 'Mon', task: 'LinkedIn post: story from webinar', tag: 'Social', tagColor: 'bg-purple-100 text-purple-700' },
                            { day: 'Tue', task: 'Video clip #2 + quote graphic', tag: 'Video', tagColor: 'bg-red-100 text-red-700' },
                            { day: 'Wed', task: 'Publish PDF lead magnet (checklist)', tag: 'Lead Gen', tagColor: 'bg-yellow-100 text-yellow-700' },
                            { day: 'Thu', task: 'Newsletter: Q&A from the webinar', tag: 'Email', tagColor: 'bg-orange-100 text-orange-700' },
                          ].map((item, i) => (
                            <div key={i} className="bg-gray-50 rounded-lg p-3">
                              <p className="text-xs font-bold text-gray-500 mb-1">{item.day}</p>
                              <p className="text-sm text-gray-800 mb-2">{item.task}</p>
                              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.tagColor}`}>{item.tag}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Week 4 */}
                      <div className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">WEEK 4</span>
                          <span className="text-sm font-semibold text-gray-900">Evergreen + Conversion Content</span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {[
                            { day: 'Mon', task: 'LinkedIn post: myth-busting insight', tag: 'Social', tagColor: 'bg-purple-100 text-purple-700' },
                            { day: 'Tue', task: 'Video clip #3 + podcast episode', tag: 'Video', tagColor: 'bg-red-100 text-red-700' },
                            { day: 'Wed', task: 'LinkedIn post: CTA to lead magnet', tag: 'Social', tagColor: 'bg-purple-100 text-purple-700' },
                            { day: 'Thu', task: 'Email sequence: nurture + soft sell', tag: 'Email', tagColor: 'bg-orange-100 text-orange-700' },
                          ].map((item, i) => (
                            <div key={i} className="bg-gray-50 rounded-lg p-3">
                              <p className="text-xs font-bold text-gray-500 mb-1">{item.day}</p>
                              <p className="text-sm text-gray-800 mb-2">{item.task}</p>
                              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.tagColor}`}>{item.tag}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  Notice the pattern: you create once on Tuesday of Week 1, and then you distribute for 4 consecutive weeks. That is 16+ pieces of content across blog, LinkedIn, email, video, and lead generation -- all from a single recording.
                </p>
                <p className="text-gray-700 mb-4">
                  And this calendar is conservative. If you are aggressive about extraction, a single webinar can produce enough content for 8-12 weeks, not just 4. That means one webinar per month builds a <strong>compounding content library</strong> where this month&apos;s webinar is still generating posts while next month&apos;s webinar is being prepared.
                </p>
                <p className="text-gray-700">
                  For a detailed look at how to transform your webinar recording into a high-ranking blog post specifically, see our guide on <Link href="/blog/webinar-to-blog-post" className="text-blue-600 hover:text-blue-800 font-medium">how to turn a webinar into a blog post</Link>.
                </p>
              </section>

              {/* Section 4 */}
              <section id="funnel-stages" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Mapping Content Types to Funnel Stages (Awareness, Consideration, Decision)</h2>
                <p className="text-gray-700 mb-4">
                  Not all content serves the same purpose. The smartest webinar marketing strategy for coaches maps each repurposed content piece to a specific stage of the buyer journey. This ensures your content is not just filling a calendar -- it is moving people toward becoming clients.
                </p>

                {/* Funnel Visualization */}
                <div className="my-8 space-y-4">
                  {/* Awareness Stage */}
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-green-600 text-white py-2 px-4">
                      <p className="font-bold">Top of Funnel: Awareness</p>
                      <p className="text-green-100 text-sm">Goal: Attract new people who do not know you yet</p>
                    </div>
                    <div className="p-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {['Short Video Clips', 'LinkedIn Posts', 'Quote Graphics', 'Twitter/X Threads', 'Podcast Episodes', 'YouTube Videos'].map((item, i) => (
                          <span key={i} className="bg-green-50 text-green-800 text-sm px-3 py-1 rounded-full border border-green-200">{item}</span>
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm"><strong>Why these work:</strong> High-reach formats that appear in feeds of people who have never heard of you. Short, shareable, and algorithm-friendly.</p>
                    </div>
                  </div>

                  {/* Consideration Stage */}
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-yellow-500 text-white py-2 px-4">
                      <p className="font-bold">Middle of Funnel: Consideration</p>
                      <p className="text-yellow-100 text-sm">Goal: Build trust with people who know you but are not yet ready to buy</p>
                    </div>
                    <div className="p-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {['Blog Posts (SEO)', 'LinkedIn Carousels', 'Newsletters', 'LinkedIn Articles', 'Lead Magnets (PDFs)'].map((item, i) => (
                          <span key={i} className="bg-yellow-50 text-yellow-800 text-sm px-3 py-1 rounded-full border border-yellow-200">{item}</span>
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm"><strong>Why these work:</strong> Longer-form content that demonstrates depth and expertise. People consume these when they are evaluating whether you know your stuff.</p>
                    </div>
                  </div>

                  {/* Decision Stage */}
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-red-600 text-white py-2 px-4">
                      <p className="font-bold">Bottom of Funnel: Decision</p>
                      <p className="text-red-100 text-sm">Goal: Convert warm leads into paying clients</p>
                    </div>
                    <div className="p-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {['Email Sequences', 'Webinar Replay (Gated)', 'Case Study Snippets', 'Testimonial Posts', 'Direct CTA Posts'].map((item, i) => (
                          <span key={i} className="bg-red-50 text-red-800 text-sm px-3 py-1 rounded-full border border-red-200">{item}</span>
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm"><strong>Why these work:</strong> These formats speak directly to people who are ready to make a decision. They answer objections, provide social proof, and make the next step clear.</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  The power of this mapping is that every single webinar you deliver produces content for all three stages simultaneously. Your video clips attract new audience members at the top. Your blog posts and carousels nurture them in the middle. Your email sequences convert them at the bottom.
                </p>
                <p className="text-gray-700">
                  This is what makes the webinar-first approach a true content strategy for coaches -- not just a content creation hack. You are building a system where every piece of content has a job, and all the pieces work together to move people from &quot;I just discovered this person&quot; to &quot;I want to work with them.&quot;
                </p>
              </section>

              {/* CTA 2 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 text-center my-10">
                <p className="text-gray-900 text-lg font-semibold mb-2">
                  Ready to turn your webinars into a full-funnel content machine?
                </p>
                <p className="text-gray-600 mb-4">
                  Book a free strategy call and we will map out your first webinar content calendar together.
                </p>
                <a
                  href="https://cal.com/contentrepurposehub/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block gradient-bg text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Book a Free Strategy Call &rarr;
                </a>
              </div>

              {/* Section 5 */}
              <section id="minimum-viable-webinar" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Minimum Viable Webinar for Maximum Content Output</h2>
                <p className="text-gray-700 mb-4">
                  You do not need a 90-minute production with 50 slides, a professional studio, and three guest speakers. The most repurposable webinars are simpler than you think.
                </p>
                <p className="text-gray-700 mb-4">
                  Here is the minimum viable webinar structure optimized for content extraction:
                </p>

                <div className="space-y-4 my-6">
                  {[
                    {
                      time: '0-5 min',
                      section: 'Hook + Introduction',
                      content: 'State the problem your audience faces. Introduce what they will learn. This becomes your blog post introduction, LinkedIn post hooks, and video clip openers.',
                      extract: 'Blog intro, 1-2 social hooks',
                    },
                    {
                      time: '5-15 min',
                      section: 'The Problem (Deep Dive)',
                      content: 'Explain why this problem exists and why common solutions fail. Share a story or case study. This section produces empathy-driven social content and newsletter material.',
                      extract: '2-3 LinkedIn posts, 1 newsletter edition',
                    },
                    {
                      time: '15-35 min',
                      section: 'Your Framework / Solution',
                      content: 'Teach your methodology step by step. This is the core of your blog post, your LinkedIn carousel, and your lead magnet. Spend the most time here.',
                      extract: 'Blog post body, 1 carousel, 1 PDF lead magnet, 2-3 video clips',
                    },
                    {
                      time: '35-45 min',
                      section: 'Examples + Proof',
                      content: 'Walk through real examples, case studies, or before-and-after results. This becomes your social proof content and email sequence material.',
                      extract: '2-3 social posts, email sequence content, testimonial clips',
                    },
                    {
                      time: '45-55 min',
                      section: 'Action Steps + CTA',
                      content: 'Give attendees 3-5 specific next steps they can implement today. Close with your offer or call-to-action. This produces your checklist lead magnet and conversion emails.',
                      extract: 'Checklist PDF, CTA posts, closing email in sequence',
                    },
                    {
                      time: '55-60 min',
                      section: 'Live Q&A',
                      content: 'Answer audience questions. Every question-and-answer pair is a standalone content piece. This section is pure gold for FAQ blog content, newsletter editions, and social posts.',
                      extract: '3-5 social posts, 1-2 newsletter editions, FAQ section for blog',
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row gap-4">
                      <div className="md:w-24 flex-shrink-0">
                        <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">{item.time}</span>
                      </div>
                      <div className="flex-grow">
                        <p className="font-semibold text-gray-900 mb-1">{item.section}</p>
                        <p className="text-gray-700 text-sm mb-2">{item.content}</p>
                        <p className="text-gray-500 text-xs"><strong>Content extracted:</strong> {item.extract}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 mb-4">
                  <strong>Total time: 60 minutes.</strong> Total content pieces extracted: 30+ at minimum. That is the ratio that makes this strategy work. You invest one hour of delivery time (plus preparation) and get weeks of content in return.
                </p>
                <p className="text-gray-700">
                  The key is structure. An unstructured webinar rambles and produces fragmented content that is hard to repurpose. A structured webinar with clear sections, distinct frameworks, and a dedicated Q&A produces content blocks that can be cleanly extracted and adapted for any platform.
                </p>
              </section>

              {/* Section 6 */}
              <section id="90-day-topics" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How to Plan Webinar Topics That Feed Your Content Strategy for 90 Days</h2>
                <p className="text-gray-700 mb-4">
                  If one webinar feeds one month of content, then three strategically chosen webinar topics can fuel your entire quarter. The secret is choosing topics that cover different stages of your client&apos;s journey so your 90-day content library addresses awareness, consideration, and decision needs.
                </p>
                <p className="text-gray-700 mb-4">
                  Here is the 90-day webinar content strategy framework:
                </p>

                {/* 90-Day Framework */}
                <div className="my-8 bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-900 text-white py-3 px-4 text-center">
                    <p className="font-bold">90-Day Webinar Topic Planning Framework</p>
                  </div>
                  <div className="divide-y divide-gray-200">
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">MONTH 1</span>
                        <span className="font-semibold text-gray-900">Awareness Topic</span>
                      </div>
                      <p className="text-gray-700 mb-2">
                        <strong>Focus:</strong> A common problem your ideal client is searching for. Something broad enough to attract new people.
                      </p>
                      <p className="text-gray-600 text-sm mb-2">
                        <strong>Example (business coach):</strong> &quot;The 5 Revenue Leaks Keeping Your Business Under $500K&quot;
                      </p>
                      <p className="text-gray-600 text-sm">
                        <strong>Content it produces:</strong> Educational social posts, SEO blog content targeting high-volume keywords, shareable video clips, lead magnet that captures email addresses.
                      </p>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">MONTH 2</span>
                        <span className="font-semibold text-gray-900">Consideration Topic</span>
                      </div>
                      <p className="text-gray-700 mb-2">
                        <strong>Focus:</strong> Your unique methodology or framework. Something that positions your specific approach as the solution.
                      </p>
                      <p className="text-gray-600 text-sm mb-2">
                        <strong>Example (business coach):</strong> &quot;The Revenue Architecture Method: How to Build Predictable Monthly Income&quot;
                      </p>
                      <p className="text-gray-600 text-sm">
                        <strong>Content it produces:</strong> Framework carousels, in-depth blog posts, newsletter deep dives, LinkedIn articles that demonstrate authority.
                      </p>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">MONTH 3</span>
                        <span className="font-semibold text-gray-900">Decision Topic</span>
                      </div>
                      <p className="text-gray-700 mb-2">
                        <strong>Focus:</strong> Results, case studies, and the &quot;how to implement&quot; angle. Something that makes people think &quot;I need help with this.&quot;
                      </p>
                      <p className="text-gray-600 text-sm mb-2">
                        <strong>Example (business coach):</strong> &quot;How 3 Coaches Went From $200K to $500K Using This System (Live Breakdown)&quot;
                      </p>
                      <p className="text-gray-600 text-sm">
                        <strong>Content it produces:</strong> Case study posts, testimonial video clips, conversion-focused email sequences, social proof content, direct CTA posts.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  When you plan webinar topics this way, your content calendar is not random. Each month&apos;s content has a strategic purpose, and the three months work together as a complete marketing cycle. Someone might discover you from a Month 1 video clip, read your Month 2 blog post, and book a call after seeing a Month 3 case study post in their feed.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>How to choose your specific topics:</strong> Start with the 5-10 questions your ideal clients ask most frequently during discovery calls. Each question is a potential webinar topic. Group them by funnel stage: questions about problems are awareness topics, questions about approaches are consideration topics, and questions about results or pricing are decision topics.
                </p>
                <p className="text-gray-700">
                  Then repeat. Your next quarter covers three new topics from the list. After a year, you have 12 webinars covering every major question your market asks -- and a content library that positions you as the definitive authority in your space.
                </p>
              </section>

              {/* Section 7 */}
              <section id="real-math" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Real Math: Time Invested vs. Content Produced (DIY vs. Done-for-You)</h2>
                <p className="text-gray-700 mb-4">
                  Let us be honest about the numbers. The webinar-first content strategy is the most efficient approach available to coaches and consultants, but there is still work involved -- especially if you do it all yourself. Here is the real breakdown.
                </p>

                {/* DIY Math */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">The DIY Path</h3>
                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Task</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Webinar preparation and delivery', '4-6 hours'],
                        ['Transcription and cleanup', '1-2 hours'],
                        ['Blog post writing and SEO optimization', '3-4 hours'],
                        ['Short-form video editing (3-5 clips)', '2-3 hours'],
                        ['LinkedIn posts and carousel creation', '2-3 hours'],
                        ['Email sequence writing', '2-3 hours'],
                        ['Lead magnet design (PDF)', '1-2 hours'],
                        ['Newsletter editions', '1-2 hours'],
                        ['Quote graphics and visual assets', '1-2 hours'],
                        ['Scheduling across platforms', '1 hour'],
                      ].map((row, i) => (
                        <tr key={i}>
                          <td className="p-3 border border-gray-200 text-gray-700">{row[0]}</td>
                          <td className="p-3 border border-gray-200 text-gray-700 font-medium">{row[1]}</td>
                        </tr>
                      ))}
                      <tr className="bg-blue-50">
                        <td className="p-3 border border-gray-200 font-bold text-gray-900">Total DIY Time</td>
                        <td className="p-3 border border-gray-200 font-bold text-blue-700">18-28 hours per webinar</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 mb-4">
                  If you bill $200-$500 per hour as a coach (which is typical for established coaches and consultants), then 18-28 hours of DIY repurposing has an <strong>opportunity cost of $3,600-$14,000 per month.</strong> That is the revenue you cannot earn because you are editing video clips and writing LinkedIn posts instead of coaching clients.
                </p>

                {/* Done-for-You Math */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Done-for-You Path</h3>
                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Task</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Webinar preparation and delivery', '4-6 hours'],
                        ['Submit recording to repurposing service', '5 minutes'],
                        ['Review and approve finished content', '30-60 minutes'],
                      ].map((row, i) => (
                        <tr key={i}>
                          <td className="p-3 border border-gray-200 text-gray-700">{row[0]}</td>
                          <td className="p-3 border border-gray-200 text-gray-700 font-medium">{row[1]}</td>
                        </tr>
                      ))}
                      <tr className="bg-blue-50">
                        <td className="p-3 border border-gray-200 font-bold text-gray-900">Total Your Time</td>
                        <td className="p-3 border border-gray-200 font-bold text-blue-700">5-7 hours per webinar</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="p-3 border border-gray-200 font-bold text-gray-900">Time Saved</td>
                        <td className="p-3 border border-gray-200 font-bold text-green-700">13-21 hours per month</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 mb-4">
                  A done-for-you webinar repurposing service typically costs $750-$1,500 per month. Compare that to the $3,600-$14,000 in opportunity cost of doing it yourself, and the math becomes clear: <strong>the service pays for itself if it frees up even 4-5 hours that you redirect toward client work.</strong>
                </p>

                {/* Comparison Summary */}
                <div className="grid md:grid-cols-2 gap-4 my-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <p className="text-sm font-semibold text-gray-500 mb-2">DIY APPROACH</p>
                    <p className="text-gray-900 font-bold text-lg mb-1">18-28 hours/month</p>
                    <p className="text-gray-600 text-sm mb-2">Your time on repurposing</p>
                    <p className="text-gray-900 font-medium">$100-200/month in tools</p>
                    <p className="text-gray-600 text-sm mb-2">Direct cost</p>
                    <p className="text-red-600 font-medium">$3,600-14,000/month</p>
                    <p className="text-gray-600 text-sm">Opportunity cost</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                    <p className="text-sm font-semibold text-blue-600 mb-2">DONE-FOR-YOU</p>
                    <p className="text-gray-900 font-bold text-lg mb-1">5-7 hours/month</p>
                    <p className="text-gray-600 text-sm mb-2">Your time (prep + review)</p>
                    <p className="text-gray-900 font-medium">$750-1,500/month</p>
                    <p className="text-gray-600 text-sm mb-2">Service cost</p>
                    <p className="text-green-600 font-medium">13-21 hours freed up</p>
                    <p className="text-gray-600 text-sm">To coach clients or rest</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  <strong>The bottom line for a coach content marketing plan:</strong> the webinar-first strategy works whether you DIY or outsource. But the ROI improves dramatically when you remove yourself from the production process and focus on what only you can do -- preparing and delivering the webinar, coaching clients, and building relationships.
                </p>
                <p className="text-gray-700">
                  If you want to start with DIY and transition later, that works too. The important thing is adopting the webinar-first model itself. Stop creating content from scratch for every platform. Start creating once and distributing everywhere. For a full breakdown of every content format you can extract from a single webinar, see our <Link href="/blog/webinar-repurposing-guide" className="text-blue-600 hover:text-blue-800 font-medium">complete webinar repurposing guide</Link>.
                </p>
              </section>

              {/* CTA 3 */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 md:p-8 text-center my-10">
                <p className="text-white text-lg font-semibold mb-2">
                  Stop creating from scratch. Start repurposing.
                </p>
                <p className="text-blue-100 mb-4">
                  We turn your monthly webinar into 30-75+ content pieces. Blog posts, LinkedIn content, email sequences, lead magnets, and more -- all done for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://contentrepurposehub.com/#pricing"
                    className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                  >
                    See Pricing &rarr;
                  </a>
                  <a
                    href="https://cal.com/contentrepurposehub/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                  >
                    Book Free Strategy Call
                  </a>
                </div>
              </div>

              {/* Section 8: FAQ */}
              <section id="faq" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions About Webinar Content Strategy</h2>

                <div className="space-y-6">
                  {[
                    {
                      q: 'What is a webinar-first content strategy?',
                      a: 'A webinar-first content strategy is a marketing approach where you create one webinar per month and repurpose that single recording into dozens of content pieces across every platform -- blog posts, LinkedIn posts, email sequences, lead magnets, video clips, and more. Instead of creating content from scratch for each channel, the webinar serves as your single content input that fuels everything else.',
                    },
                    {
                      q: 'How much content can I create from one monthly webinar?',
                      a: 'A single 60-minute webinar can be repurposed into 30-75+ content pieces, including 3-5 short video clips, 1-2 blog posts, 5-10 LinkedIn posts, a LinkedIn carousel, an email sequence, newsletter editions, quote graphics, a podcast episode, and a PDF lead magnet. This is enough to fill your content calendar for 4-12 weeks depending on your posting frequency.',
                    },
                    {
                      q: 'How do coaches build a content strategy around webinars?',
                      a: 'Coaches build a webinar-first content strategy by choosing one webinar topic per month that aligns with their core offer, delivering that webinar live, then systematically repurposing the recording into content for every platform. The key is planning webinar topics that map to your ideal client journey -- awareness topics to attract new leads, consideration topics to build trust, and decision topics to drive sales.',
                    },
                    {
                      q: 'How long does it take to repurpose a webinar into 3 months of content?',
                      a: 'If you do it yourself, repurposing one webinar into a full content calendar takes 15-25 hours of work spread across transcription, writing, video editing, design, and scheduling. A professional repurposing service can handle the entire process in 7-10 business days, requiring only about 1 hour of your time to submit the recording and review the finished content.',
                    },
                    {
                      q: 'What should coaches talk about in their webinars for content marketing?',
                      a: 'Choose webinar topics that solve a specific problem for your ideal client and naturally connect to your paid offer. The best topics follow a framework: teach something actionable (so the content has standalone value), address a common misconception (so it sparks engagement), and demonstrate your methodology (so it builds trust in your approach). Plan topics in 90-day cycles so each quarter covers awareness, consideration, and decision-stage content.',
                    },
                    {
                      q: 'Is a webinar content strategy better than posting on social media every day?',
                      a: 'Yes, for most coaches and consultants. A webinar-first strategy is more sustainable because you create content once (during the live webinar) and distribute it many times. Daily social media posting from scratch requires constant ideation, writing, and production. The webinar approach eliminates the daily content hamster wheel while actually producing more content at higher quality.',
                    },
                    {
                      q: 'Can I use a webinar content strategy if I only do webinars quarterly?',
                      a: 'Absolutely. If you deliver one webinar per quarter, you can repurpose that single recording into enough content to fill the entire 90 days until your next webinar. Aim for 50-75+ content pieces per webinar and schedule them across a longer time horizon. Monthly webinars give you fresher source material, but quarterly works if you extract thoroughly.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="border border-gray-200 rounded-lg p-5">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.q}</h3>
                      <p className="text-gray-700">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Build Your Webinar Content Strategy Today</h2>
                <p className="text-gray-700 mb-4">
                  The content creation trap exists because coaches try to produce original content for every platform, every week. It is unsustainable, and it takes you away from the work that actually grows your business: coaching clients and delivering results.
                </p>
                <p className="text-gray-700 mb-4">
                  The webinar-first content strategy solves this by giving you a single creation event (your monthly webinar) that produces everything else. One hour of teaching becomes weeks of blog posts, LinkedIn content, email sequences, video clips, lead magnets, and more.
                </p>
                <p className="text-gray-700 mb-4">
                  Here is your next step: pick one webinar topic from the 90-day framework above. Schedule it for this month. Deliver it. Then repurpose it using the content calendar template in this guide -- or follow our step-by-step <Link href="/blog/content-repurposing-workflow-coaches" className="text-blue-600 hover:text-blue-800 font-medium">content repurposing workflow for coaches</Link>. Within 30 days, you will have more content published than most coaches produce in a quarter.
                </p>
                <p className="text-gray-700">
                  Or, if you want the content calendar delivered to you -- fully written, designed, and ready to publish -- <a href="https://cal.com/contentrepurposehub/30min" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">book a free strategy call</a> and we will show you exactly how ContentRepurposeHub turns your monthly webinar into 30-75+ content pieces. No more creating from scratch. No more content burnout. Just one webinar, repurposed everywhere.
                </p>
              </section>

              {/* Related Posts */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Articles</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link
                    href="/blog/webinar-repurposing-guide"
                    className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-300 hover:shadow-md transition"
                  >
                    <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Complete Guide</span>
                    <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-1">Webinar Repurposing: How to Turn 1 Webinar Into 14+ Content Pieces</h3>
                    <p className="text-gray-600 text-sm">The definitive guide to all 14 content formats you can create from a single webinar recording.</p>
                    <span className="inline-block mt-2 text-blue-600 text-sm font-medium">Read more &rarr;</span>
                  </Link>
                  <Link
                    href="/blog/webinar-to-blog-post"
                    className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-300 hover:shadow-md transition"
                  >
                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">How-To</span>
                    <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-1">How to Turn a Webinar Into a Blog Post (Step-by-Step Process With Examples)</h3>
                    <p className="text-gray-600 text-sm">The complete process for transforming webinar recordings into SEO-optimized blog content.</p>
                    <span className="inline-block mt-2 text-blue-600 text-sm font-medium">Read more &rarr;</span>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>

        {/* Reading Path Navigation */}
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Continue Reading</h3>
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link href="/blog/webinar-content-pieces-breakdown" className="text-blue-600 hover:text-blue-700 font-medium">
                &larr; From 1 Webinar to 75+ Content Pieces
              </Link>
              <Link href="/blog/webinar-to-blog-post" className="text-blue-600 hover:text-blue-700 font-medium sm:text-right">
                How to Turn a Webinar Into a Blog Post &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <section className="py-16 gradient-bg px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              One Webinar. Months of Content. Zero Burnout.
            </h2>
            <p className="text-blue-100 text-lg mb-6">
              We turn your monthly webinar into 30-75+ content pieces. Blog posts, LinkedIn content, emails, video clips, and more. Starting at $750/month.
            </p>
            <a
              href="https://cal.com/contentrepurposehub/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
            >
              Book Free Strategy Call &rarr;
            </a>
            <p className="text-blue-200 text-sm mt-4">
              No contracts. 30-day guarantee. Cancel anytime.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <Link href="/" className="font-bold text-xl text-white mb-4 md:mb-0">
                Content<span className="text-blue-400">Repurpose</span>Hub
              </Link>
              <div className="flex gap-6">
                <Link href="/blog" className="hover:text-white transition">Blog</Link>
                <Link href="/#pricing" className="hover:text-white transition">Pricing</Link>
                <Link href="/#faq" className="hover:text-white transition">FAQ</Link>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
              <p>&copy; 2026 ContentRepurposeHub. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
