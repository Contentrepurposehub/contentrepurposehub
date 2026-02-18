import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Content Repurposing: DIY Tools vs. Done-for-You Services — Which Is Right for Your Coaching Business?',
  description: 'Honest comparison of DIY content repurposing tools (Repurpose.io, Descript, Canva) vs. done-for-you services. Includes pricing, time costs, and a 5-question decision framework for coaches.',
  keywords: 'content repurposing service vs DIY, done for you content repurposing, content repurposing tools vs agency, best content repurposing service for coaches, DIY content repurposing tools, content repurposing for coaches',
  alternates: {
    canonical: 'https://contentrepurposehub.com/blog/content-repurposing-diy-vs-service',
  },
  openGraph: {
    title: 'Content Repurposing: DIY Tools vs. Done-for-You Services',
    description: 'Honest comparison with real pricing, time costs, and a decision framework for coaches choosing between DIY tools and done-for-you repurposing services.',
    url: 'https://contentrepurposehub.com/blog/content-repurposing-diy-vs-service',
    siteName: 'ContentRepurposeHub',
    type: 'article',
    publishedTime: '2026-02-18T00:00:00.000Z',
    images: [
      {
        url: 'https://contentrepurposehub.com/api/og?title=Content%20Repurposing%3A%20DIY%20Tools%20vs.%20Done-for-You%20Services',
        width: 1200,
        height: 630,
        alt: 'Content Repurposing: DIY Tools vs. Done-for-You Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DIY Tools vs. Done-for-You Content Repurposing Services',
    description: 'Honest comparison with real pricing, time costs, and a 5-question decision framework for coaches.',
    images: ['https://contentrepurposehub.com/api/og?title=Content%20Repurposing%3A%20DIY%20Tools%20vs.%20Done-for-You%20Services'],
  },
}

export default function ContentRepurposingDIYvsService() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://contentrepurposehub.com/blog/content-repurposing-diy-vs-service#article',
        headline: 'Content Repurposing: DIY Tools vs. Done-for-You Services — Which Is Right for Your Coaching Business?',
        description: 'Honest comparison of DIY content repurposing tools vs. done-for-you services with real pricing, time costs, and a 5-question decision framework for coaches and consultants.',
        datePublished: '2026-02-18',
        dateModified: '2026-02-18',
        author: {
          '@type': 'Person',
          name: 'Marius Galatan',
          url: 'https://contentrepurposehub.com/about',
        },
        publisher: {
          '@type': 'Organization',
          name: 'ContentRepurposeHub',
          url: 'https://contentrepurposehub.com',
        },
        mainEntityOfPage: 'https://contentrepurposehub.com/blog/content-repurposing-diy-vs-service',
        wordCount: 2600,
        articleSection: 'Content Marketing',
        keywords: ['content repurposing service vs DIY', 'done for you content repurposing', 'content repurposing tools vs agency', 'best content repurposing service for coaches', 'content repurposing for coaches'],
        about: [
          { '@type': 'Thing', name: 'Content Repurposing' },
          { '@type': 'Thing', name: 'Content Marketing' },
          { '@type': 'Thing', name: 'Marketing Services for Coaches' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://contentrepurposehub.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://contentrepurposehub.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Content Repurposing: DIY vs. Done-for-You' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much does DIY content repurposing cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'DIY content repurposing tools typically cost $50-$200 per month for a basic stack (Repurpose.io at $29/month, Descript at $24/month, Canva Pro at $13/month, plus scheduling tools). However, the real cost is your time: 10-20 hours per webinar for a coach doing it themselves.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much does a done-for-you content repurposing service cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Done-for-you content repurposing services for coaches typically range from $500 to $2,000 per month. ContentRepurposeHub starts at $750/month and delivers 14-75+ content pieces per webinar, all optimized for Google and AI search engines.',
            },
          },
          {
            '@type': 'Question',
            name: 'Should I use DIY tools or hire a content repurposing service?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'It depends on your hourly rate and available time. If you bill clients $150+ per hour, the 10-20 hours spent on DIY repurposing costs you $1,500-$3,000 in lost billable time, more than most done-for-you services charge. If you are a newer coach with more time than clients, DIY tools can work well while you build your business.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are the best DIY content repurposing tools for coaches?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The most popular DIY repurposing tools include Repurpose.io ($29/month) for automated content distribution, Descript ($24/month) for transcription and video editing, CapCut (free) for short-form video clips, Canva Pro ($13/month) for graphics and carousels, and ChatGPT Plus ($20/month) for rewriting content across formats.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I use a hybrid approach to content repurposing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Many coaches start with a hybrid approach: they handle simple tasks like posting video clips and writing LinkedIn posts themselves, while outsourcing time-intensive work like blog posts, SEO optimization, email sequences, and lead magnets to a repurposing service. This keeps costs lower while still freeing up significant time.',
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
              <span className="text-gray-700">DIY vs. Done-for-You Content Repurposing</span>
            </nav>

            {/* Header */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Comparison Guide</span>
                <span className="text-xs text-gray-500">12 min read</span>
                <span className="text-xs text-gray-400">April 6, 2026</span>
                <span className="text-xs text-gray-500">&middot;</span>
                <a href="/about" className="text-xs text-gray-500 hover:text-blue-600 transition">By Marius Galatan</a>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Content Repurposing: DIY Tools vs. Done-for-You Services. Which Is Right for Your Coaching Business?
              </h1>
              <p className="text-xl text-gray-600">
                Both options cost you something. DIY costs you time. A service costs you money. Here is the honest breakdown, with real prices, real time estimates, and a framework to figure out which one actually makes sense for where you are right now.
              </p>
            </header>

            {/* Key Takeaways */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg mb-10">
              <p className="text-sm font-semibold text-blue-800 mb-2">Key Takeaways</p>
              <ul className="text-gray-800 text-sm space-y-1">
                <li>- DIY repurposing tools cost $50-$200/month but take 10-20 hours per webinar</li>
                <li>- Done-for-you services run $500-$2,000/month and deliver 14-75+ pieces per webinar</li>
                <li>- If you bill $150+/hour, DIY repurposing costs you more in lost revenue than hiring a service</li>
                <li>- A hybrid approach works for coaches who want to stay hands-on with some content</li>
                <li>- Use the 5-question decision framework at the end to find your best path</li>
              </ul>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 rounded-xl p-6 mb-10 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Table of Contents</h2>
              <ol className="space-y-2 text-blue-600">
                <li><a href="#the-decision" className="hover:text-blue-800">1. The Decision Every Coach Faces</a></li>
                <li><a href="#diy-path" className="hover:text-blue-800">2. The DIY Path: Tools, Costs, and Real Time Estimates</a></li>
                <li><a href="#done-for-you-path" className="hover:text-blue-800">3. The Done-for-You Path: Services, Investment, and Output</a></li>
                <li><a href="#head-to-head" className="hover:text-blue-800">4. Head-to-Head Comparison</a></li>
                <li><a href="#hybrid" className="hover:text-blue-800">5. The Hybrid Approach</a></li>
                <li><a href="#decision-framework" className="hover:text-blue-800">6. 5 Questions to Decide Your Best Path</a></li>
                <li><a href="#what-to-look-for" className="hover:text-blue-800">7. What to Look for in a Repurposing Service</a></li>
                <li><a href="#faq" className="hover:text-blue-800">8. Frequently Asked Questions</a></li>
              </ol>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">

              {/* Section 1 */}
              <section id="the-decision" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Decision Every Coach Faces</h2>
                <p className="text-gray-700 mb-4">
                  You know you should be repurposing your webinars. You have heard the numbers. <Link href="/blog/webinar-repurposing-guide" className="text-blue-600 hover:text-blue-800 font-medium">a single webinar can become 14-75+ content pieces</Link>. You have seen other coaches show up everywhere on LinkedIn, email, and YouTube while somehow running their actual business at the same time.
                </p>
                <p className="text-gray-700 mb-4">
                  So now you are standing at a fork.
                </p>
                <p className="text-gray-700 mb-4">
                  One path: buy the tools, learn the workflows, and do it yourself. The other path: hand your recording to a service and get finished content back.
                </p>
                <p className="text-gray-700 mb-4">
                  Both paths work. Neither one is free. The question is which one costs you less when you factor in time, money, quality, and consistency.
                </p>
                <p className="text-gray-700 mb-4">
                  Here is the thing. Most comparison articles on this topic are written by agencies trying to sell you their service, or by tool companies trying to sell you software. This one is going to be honest about when each option makes sense. Because the right answer depends entirely on where your coaching business is right now.
                </p>
              </section>

              {/* Infographic 1: Quick Verdict Comparison Card */}
              <figure className="my-12" role="img" aria-label="Quick verdict comparison: DIY Tools cost $30-200 per month and 15-20 hours per week of your time with basic output and no SEO strategy. Done-for-You Service costs $750-1,500 per month and 1 hour per month of your time with professional output and full SEO plus AI optimization. The winner for coaches billing $100 or more per hour is Done-for-You Service.">
                <div className="rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  {/* Header */}
                  <div className="bg-gray-900 px-6 py-4 text-center">
                    <h3 className="text-white text-lg md:text-xl font-bold">Quick Verdict: DIY vs. Done-for-You</h3>
                    <p className="text-gray-400 text-sm mt-1">The real costs side by side</p>
                  </div>

                  {/* Comparison Columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Left Column: DIY Tools */}
                    <div className="bg-gray-50 p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200">
                      <div className="text-center mb-6">
                        <span className="inline-block bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-3">DIY Tools</span>
                        <p className="text-3xl font-bold text-gray-900">$30-200<span className="text-base font-normal text-gray-500">/mo</span></p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="text-red-500 text-lg font-bold mt-0.5 shrink-0" aria-hidden="true">&times;</span>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">15-20 hrs/week your time</p>
                            <p className="text-gray-500 text-xs">Per webinar, after learning curve</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-red-500 text-lg font-bold mt-0.5 shrink-0" aria-hidden="true">&times;</span>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">Basic output quality</p>
                            <p className="text-gray-500 text-xs">Limited by your editing skills</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-red-500 text-lg font-bold mt-0.5 shrink-0" aria-hidden="true">&times;</span>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">No SEO strategy</p>
                            <p className="text-gray-500 text-xs">Unless you learn SEO yourself</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-red-500 text-lg font-bold mt-0.5 shrink-0" aria-hidden="true">&times;</span>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">Consistency drops off</p>
                            <p className="text-gray-500 text-xs">When client work gets busy</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Done-for-You Service */}
                    <div className="relative bg-blue-50 p-6 md:p-8 ring-2 ring-blue-500 ring-inset">
                      {/* Winner Badge */}
                      <div className="absolute -top-0 right-4 md:right-6">
                        <div className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-b-lg shadow-md">
                          BEST FOR $100+/HR COACHES
                        </div>
                      </div>

                      <div className="text-center mb-6 mt-2 md:mt-0">
                        <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-3">Done-for-You Service</span>
                        <p className="text-3xl font-bold text-gray-900">$750-1,500<span className="text-base font-normal text-gray-500">/mo</span></p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">~1 hr/month your time</p>
                            <p className="text-gray-500 text-xs">Send recording, review drafts</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">Professional output</p>
                            <p className="text-gray-500 text-xs">14-75+ pieces, platform-optimized</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">Full SEO + AI optimization</p>
                            <p className="text-gray-500 text-xs">Google, ChatGPT, Perplexity</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">Consistent every month</p>
                            <p className="text-gray-500 text-xs">Delivers regardless of your schedule</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="bg-gray-900 px-6 py-3 text-center">
                    <p className="text-gray-300 text-xs">At $150/hr, 15 hours of DIY = <span className="text-white font-semibold">$2,250 in lost billable time</span>, more than the service costs.</p>
                  </div>
                </div>
                <figcaption className="text-center text-xs text-gray-400 mt-3">Quick Verdict: The true cost of DIY goes beyond tool subscriptions.</figcaption>
              </figure>

              {/* Section 2 */}
              <section id="diy-path" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The DIY Path: Tools, Costs, and Real Time Estimates</h2>
                <p className="text-gray-700 mb-4">
                  The DIY repurposing toolkit has gotten significantly better in the last two years. Tools that used to require a video editor on staff are now point-and-click. And AI has genuinely sped up certain steps.
                </p>
                <p className="text-gray-700 mb-4">
                  But the tools are only part of the equation. The bigger cost is your time.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">The DIY Tool Stack (With Real Pricing)</h3>
                <p className="text-gray-700 mb-4">
                  Here is what a solid DIY repurposing setup looks like in 2026, with what you will actually pay:
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Tool</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">What It Does</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Cost/Month</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Repurpose.io', 'Automated content distribution across platforms', '$29'],
                        ['Descript', 'Transcription, video editing, audiograms', '$24'],
                        ['CapCut', 'Short-form video clips (Reels, Shorts, TikTok)', 'Free (Pro: $8)'],
                        ['Canva Pro', 'Carousels, quote cards, thumbnails, PDFs', '$13'],
                        ['ChatGPT Plus', 'Rewriting transcripts into blog posts, emails, social', '$20'],
                        ['Opus Clip', 'AI-powered clip extraction from long videos', '$19'],
                        ['Buffer or Publer', 'Social media scheduling', '$6-$18'],
                      ].map((row, i) => (
                        <tr key={i}>
                          <td className="p-3 border border-gray-200 font-medium text-gray-900">{row[0]}</td>
                          <td className="p-3 border border-gray-200 text-gray-700">{row[1]}</td>
                          <td className="p-3 border border-gray-200 text-gray-700">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 mb-4">
                  <strong>Total tool cost: roughly $100-$130/month.</strong> Not bad. You could go leaner by skipping Opus Clip and using the free tiers of CapCut and Buffer. A bare-minimum stack (Descript, Canva free, ChatGPT, and manual posting) runs about $44/month.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">The Real Time Cost of DIY Repurposing</h3>
                <p className="text-gray-700 mb-4">
                  This is where most coaches underestimate. The tools are cheap. The hours are not.
                </p>
                <p className="text-gray-700 mb-4">
                  Here is a realistic time breakdown for repurposing one 60-minute webinar into 14+ content pieces (assuming you have already learned the tools):
                </p>

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
                        ['Transcription + cleanup', '1-2 hours'],
                        ['Identify key content blocks and plan outputs', '1 hour'],
                        ['Write and optimize blog post (1,500-2,500 words)', '3-4 hours'],
                        ['Create 3-5 short-form video clips with captions', '2-3 hours'],
                        ['Design LinkedIn carousel (8-12 slides)', '1-2 hours'],
                        ['Write 5-10 LinkedIn/social posts', '1-2 hours'],
                        ['Draft email sequence (3-5 emails)', '1-2 hours'],
                        ['Create quote cards and graphics', '1 hour'],
                        ['SEO optimization (meta tags, headers, keywords)', '1 hour'],
                        ['Schedule and publish everything', '1 hour'],
                      ].map((row, i) => (
                        <tr key={i}>
                          <td className="p-3 border border-gray-200 text-gray-700">{row[0]}</td>
                          <td className="p-3 border border-gray-200 font-medium text-gray-900">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 mb-4">
                  <strong>Total: 13-22 hours per webinar.</strong> And that is after you know what you are doing. The first two or three times, add another 5-10 hours for the learning curve.
                </p>
                <p className="text-gray-700 mb-4">
                  Now the math that matters. If you bill coaching clients $200/hour, those 15 hours of repurposing cost you $3,000 in lost billable time. At $300/hour, it is $4,500. Even at $100/hour, that is $1,500 worth of your time. Per webinar.
                </p>

                <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg my-6">
                  <p className="text-gray-800">
                    <strong>DIY is best for:</strong> Coaches in their first 1-2 years who have more available hours than paying clients. If your calendar has open slots you cannot fill with coaching, those hours have a lower opportunity cost, making DIY a smart choice while you build your client base.
                  </p>
                </div>

                <p className="text-gray-700 mb-4">
                  That is an honest assessment. DIY works. It teaches you what content resonates with your audience. And you keep full creative control. But the time cost is real, and it scales badly. Two webinars a month? That is 30-40 hours of repurposing. Basically a part-time job.
                </p>
              </section>

              {/* CTA 1 */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 md:p-8 text-center my-10">
                <p className="text-white text-lg font-semibold mb-2">
                  Want to skip the 15-hour DIY process?
                </p>
                <p className="text-blue-100 mb-4">
                  We repurpose your webinars into 14-75+ content pieces. You send the recording. We handle the rest.
                </p>
                <a
                  href="https://contentrepurposehub.com/#pricing"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  See Plans &amp; Pricing &rarr;
                </a>
              </div>

              {/* Section 3 */}
              <section id="done-for-you-path" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Done-for-You Path: Services, Investment, and Output</h2>
                <p className="text-gray-700 mb-4">
                  A done-for-you content repurposing service takes your webinar recording and turns it into finished, platform-ready content. You do roughly one hour of work (sending the recording and reviewing drafts). They do the other 14.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">The Pricing Landscape</h3>
                <p className="text-gray-700 mb-4">
                  Repurposing services vary widely. Here is what the market looks like in 2026:
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Service Type</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Price Range</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Typical Output</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Freelancer (Upwork/Fiverr)', '$200-$600/month', '5-10 pieces, inconsistent quality'],
                        ['Boutique agency', '$500-$1,500/month', '10-30 pieces, moderate quality'],
                        ['Specialist service (like ContentRepurposeHub)', '$750-$1,500/month', '14-75+ pieces, SEO-optimized, AI search optimized'],
                        ['Full-service content agency', '$2,000-$5,000/month', '20-50+ pieces, premium quality, dedicated strategist'],
                      ].map((row, i) => (
                        <tr key={i}>
                          <td className="p-3 border border-gray-200 font-medium text-gray-900">{row[0]}</td>
                          <td className="p-3 border border-gray-200 text-gray-700">{row[1]}</td>
                          <td className="p-3 border border-gray-200 text-gray-700">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 mb-4">
                  The sweet spot for most coaching businesses is the $750-$1,500/month range. Below that, you tend to get inconsistent work from generalists who do not understand coaching businesses. Above that, you are paying for enterprise features most solo coaches do not need.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">What You Actually Get</h3>
                <p className="text-gray-700 mb-4">
                  A good repurposing service delivers content across every format: blog posts, LinkedIn posts, carousels, video clips, email sequences, quote graphics, lead magnets, and more. The key difference from DIY is not just the time savings. It is the professional execution across formats you might not be skilled in.
                </p>
                <p className="text-gray-700 mb-4">
                  Most coaches are strong writers. But can you also edit video clips with captions? Design carousels that stop the scroll? Optimize blog posts for Google AND AI search engines? Do keyword research? Build email sequences with proper segmentation?
                </p>
                <p className="text-gray-700 mb-4">
                  A specialist service handles all of that. And the content is consistent: same brand voice, same quality, same schedule, month after month.
                </p>

                <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg my-6">
                  <p className="text-gray-800">
                    <strong>Done-for-you is best for:</strong> Established coaches billing $150+/hour who run 1-4 webinars per month. At that rate, the <Link href="/blog/webinar-repurposing-roi" className="text-blue-600 hover:text-blue-800 font-medium">ROI math is straightforward</Link>. The service costs less than the billable hours you would lose doing it yourself.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="head-to-head" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Head-to-Head Comparison</h2>
                <p className="text-gray-700 mb-4">
                  Here is the full side-by-side breakdown. No spin. Both approaches have genuine strengths and weaknesses.
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Factor</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">DIY Tools</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Done-for-You Service</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Monthly cost', '$50-$200 (tools only)', '$500-$1,500'],
                        ['Time per webinar', '13-22 hours', '~1 hour (review drafts)'],
                        ['Learning curve', '2-4 weeks to get efficient', 'None (they handle it)'],
                        ['Content pieces per webinar', '8-15 (realistically)', '14-75+'],
                        ['Blog post quality', 'Depends on your writing skills', 'Professional, SEO-optimized'],
                        ['Video clip quality', 'Basic (unless you learn editing)', 'Professional with captions and branding'],
                        ['SEO optimization', 'Basic unless you know SEO', 'Full Google + AI search optimization'],
                        ['Consistency', 'Drops off when you get busy', 'Same output every month'],
                        ['Creative control', 'Total control', 'You approve everything, but less hands-on'],
                        ['Scalability', 'Linear: more webinars = more hours', 'Scales easily to 2-4 webinars/month'],
                        ['Brand voice accuracy', 'Perfect (it is your voice)', 'Good with onboarding, improves over time'],
                      ].map((row, i) => (
                        <tr key={i}>
                          <td className="p-3 border border-gray-200 font-medium text-gray-900">{row[0]}</td>
                          <td className="p-3 border border-gray-200 text-gray-700">{row[1]}</td>
                          <td className="p-3 border border-gray-200 text-gray-700">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 mb-4">
                  Notice the consistency row. That is the one most coaches underestimate.
                </p>
                <p className="text-gray-700 mb-4">
                  DIY repurposing works great during slow weeks. But then a client launches, three coaching calls stack up, and suddenly you have not posted in 12 days. Sound familiar?
                </p>
                <p className="text-gray-700 mb-4">
                  A service delivers regardless of how busy you are. That consistency compounds. Algorithms reward accounts that post regularly. SEO rewards sites that publish regularly. Your audience starts expecting and looking for your content. And then you skip two weeks and all that momentum stalls.
                </p>
              </section>

              {/* Infographic 2: Decision Framework Flowchart */}
              <figure className="my-12" role="img" aria-label="Decision framework flowchart: What is your hourly rate? Under $50 per hour leads to DIY tools make sense. $50 to $100 per hour leads to consider a freelancer or hybrid approach. Over $100 per hour leads to a done-for-you service that pays for itself, which is the recommended path.">
                <div className="rounded-xl shadow-lg overflow-hidden border border-gray-200 bg-white">
                  {/* Header */}
                  <div className="bg-gray-900 px-6 py-4 text-center">
                    <h3 className="text-white text-lg md:text-xl font-bold">Decision Framework</h3>
                    <p className="text-gray-400 text-sm mt-1">Find your path in 10 seconds</p>
                  </div>

                  <div className="p-6 md:p-8">
                    {/* Top Question */}
                    <div className="flex justify-center mb-6">
                      <div className="bg-gray-900 text-white rounded-xl px-6 py-4 text-center max-w-sm w-full shadow-md">
                        <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">Start Here</p>
                        <p className="font-bold text-lg">What is your hourly rate?</p>
                      </div>
                    </div>

                    {/* Connecting Lines - Top */}
                    <div className="flex justify-center mb-6">
                      <div className="flex items-end gap-0 w-full max-w-2xl">
                        {/* Left branch line */}
                        <div className="flex-1 flex flex-col items-center">
                          <div className="w-px h-6 bg-gray-300" aria-hidden="true"></div>
                        </div>
                        {/* Center branch line */}
                        <div className="flex-1 flex flex-col items-center">
                          <div className="w-px h-6 bg-gray-300" aria-hidden="true"></div>
                        </div>
                        {/* Right branch line */}
                        <div className="flex-1 flex flex-col items-center">
                          <div className="w-px h-6 bg-blue-400" aria-hidden="true"></div>
                        </div>
                      </div>
                    </div>

                    {/* Three Branches */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                      {/* Branch 1: Under $50/hr */}
                      <div className="rounded-xl border-2 border-gray-200 bg-gray-50 p-5 text-center">
                        <div className="inline-block bg-gray-200 text-gray-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
                          Under $50/hr
                        </div>
                        {/* Arrow */}
                        <div className="flex justify-center my-3" aria-hidden="true">
                          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                        </div>
                        <div className="bg-white rounded-lg border border-gray-200 p-4">
                          <p className="font-bold text-gray-900 text-sm mb-1">DIY tools make sense</p>
                          <p className="text-gray-500 text-xs">Your time cost is lower than a service. Invest in tools and learn the workflow.</p>
                        </div>
                      </div>

                      {/* Branch 2: $50-$100/hr */}
                      <div className="rounded-xl border-2 border-amber-200 bg-amber-50 p-5 text-center">
                        <div className="inline-block bg-amber-200 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
                          $50 - $100/hr
                        </div>
                        {/* Arrow */}
                        <div className="flex justify-center my-3" aria-hidden="true">
                          <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                        </div>
                        <div className="bg-white rounded-lg border border-amber-200 p-4">
                          <p className="font-bold text-gray-900 text-sm mb-1">Consider a freelancer</p>
                          <p className="text-gray-500 text-xs">Hybrid approach: handle social yourself, outsource blogs and SEO.</p>
                        </div>
                      </div>

                      {/* Branch 3: Over $100/hr (Highlighted) */}
                      <div className="rounded-xl border-2 border-blue-500 bg-blue-50 p-5 text-center relative ring-2 ring-blue-500/20">
                        {/* Recommended Tag */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shadow-sm">Recommended</span>
                        </div>
                        <div className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 mt-1">
                          Over $100/hr
                        </div>
                        {/* Arrow */}
                        <div className="flex justify-center my-3" aria-hidden="true">
                          <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                        </div>
                        <div className="bg-white rounded-lg border border-blue-300 p-4 shadow-sm">
                          <p className="font-bold text-blue-900 text-sm mb-1">A service pays for itself</p>
                          <p className="text-gray-500 text-xs">15 hrs x $100+/hr = $1,500+ in lost revenue. The service costs less.</p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Note */}
                    <div className="mt-6 text-center">
                      <p className="text-gray-500 text-xs">Most coaches billing $100+/hr recoup their investment in the first month through freed-up billable hours.</p>
                    </div>
                  </div>
                </div>
                <figcaption className="text-center text-xs text-gray-400 mt-3">Decision Framework: Your hourly rate determines which repurposing path delivers the best ROI.</figcaption>
              </figure>

              {/* Section 5 */}
              <section id="hybrid" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Hybrid Approach: When It Makes Sense</h2>
                <p className="text-gray-700 mb-4">
                  This is the option nobody talks about. And for some coaches, it is the smartest move.
                </p>
                <p className="text-gray-700 mb-4">
                  A hybrid approach means you handle the quick, simple repurposing tasks yourself and outsource the time-intensive, skill-intensive ones.
                </p>
                <p className="text-gray-700 mb-4">
                  Here is what that looks like in practice:
                </p>

                <div className="space-y-3 my-6">
                  <div className="flex gap-3 items-start">
                    <span className="text-green-600 font-bold mt-0.5">You do:</span>
                    <p className="text-gray-700">LinkedIn posts (you know your voice best), short video clips (quick cuts in CapCut), and posting/scheduling (5-7 hours/month)</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-blue-600 font-bold mt-0.5">Service does:</span>
                    <p className="text-gray-700">Blog posts with SEO optimization, email sequences, carousels, lead magnets, and quote graphics (the stuff that takes skill and hours you do not have)</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  This keeps your monthly cost lower than full done-for-you (some services offer content-only packages without distribution). And you stay connected to your content, which matters for coaches whose personal brand IS the business.
                </p>
                <p className="text-gray-700 mb-4">
                  The hybrid approach also works well as a transition. Start DIY, learn what works for your audience, then gradually hand off the pieces that eat the most time. By the time you move to full done-for-you, you understand exactly what good repurposed content looks like. That makes you a better client and gets you better results.
                </p>
              </section>

              {/* CTA 2 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 text-center my-10">
                <p className="text-gray-900 text-lg font-semibold mb-2">
                  Not sure which approach fits your business?
                </p>
                <p className="text-gray-600 mb-4">
                  We will walk you through the math for your specific situation. No pitch, just an honest assessment.
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

              {/* Section 6 */}
              <section id="decision-framework" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">5 Questions to Decide Your Best Path</h2>
                <p className="text-gray-700 mb-4">
                  Forget the abstract advice. Answer these five questions honestly and you will know exactly which path is right for your coaching business right now.
                </p>

                <div className="space-y-8 my-6">
                  <div className="border border-gray-200 rounded-lg p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Question 1: What is your effective hourly rate?</h3>
                    <p className="text-gray-700 mb-3">
                      Not your aspirational rate. Your actual rate: what you earned last month divided by the hours you worked.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700 mb-1"><strong>Under $75/hour:</strong> DIY makes financial sense. Your time is cheaper than a service.</p>
                      <p className="text-sm text-gray-700 mb-1"><strong>$75-$150/hour:</strong> Hybrid is your sweet spot. Outsource the time-heavy tasks.</p>
                      <p className="text-sm text-gray-700"><strong>Over $150/hour:</strong> Done-for-you. Every hour you spend repurposing costs you more than the service charges.</p>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Question 2: How many hours per week do you have for content?</h3>
                    <p className="text-gray-700 mb-3">
                      Be realistic. Not how many hours you think you should have. How many hours you actually spent on content last month, on average, per week.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700 mb-1"><strong>5+ hours/week available:</strong> DIY is feasible for 1 webinar/month.</p>
                      <p className="text-sm text-gray-700 mb-1"><strong>2-5 hours/week:</strong> Hybrid. You can handle distribution but need help with creation.</p>
                      <p className="text-sm text-gray-700"><strong>Under 2 hours/week:</strong> Done-for-you. You do not have the bandwidth for DIY.</p>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Question 3: How important is SEO and long-term traffic to your business?</h3>
                    <p className="text-gray-700 mb-3">
                      Blog posts that rank on Google are the highest-ROI repurposed content. But <Link href="/blog/webinar-repurposing-guide" className="text-blue-600 hover:text-blue-800 font-medium">SEO optimization</Link> is a skill that takes months to learn well.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700 mb-1"><strong>Not a priority right now:</strong> DIY is fine. Focus on social content you can create quickly.</p>
                      <p className="text-sm text-gray-700 mb-1"><strong>Somewhat important:</strong> Hybrid. Outsource blog posts and SEO, handle social yourself.</p>
                      <p className="text-sm text-gray-700"><strong>Critical to your growth:</strong> Done-for-you. Professional SEO + AI search optimization pays off for years.</p>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Question 4: How many webinars do you run per month?</h3>
                    <p className="text-gray-700 mb-3">
                      This is the scalability question. DIY works for one webinar a month. It breaks at two.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700 mb-1"><strong>1 webinar/month:</strong> DIY or hybrid are both manageable.</p>
                      <p className="text-sm text-gray-700 mb-1"><strong>2 webinars/month:</strong> Hybrid minimum. That is 30+ hours of DIY repurposing.</p>
                      <p className="text-sm text-gray-700"><strong>3-4 webinars/month:</strong> Done-for-you. There are not enough hours in the week otherwise.</p>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Question 5: Have you been consistent with content for the last 3 months?</h3>
                    <p className="text-gray-700 mb-3">
                      This is the honesty check. If you have tried DIY content and it keeps falling off your calendar, that pattern is unlikely to change. The <Link href="/blog/content-repurposing-workflow-coaches" className="text-blue-600 hover:text-blue-800 font-medium">content repurposing workflow</Link> only works if you actually do it.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700 mb-1"><strong>Yes, consistently:</strong> DIY can keep working. You have the discipline.</p>
                      <p className="text-sm text-gray-700 mb-1"><strong>Sometimes, with gaps:</strong> Hybrid. Outsource the pieces that fall off first.</p>
                      <p className="text-sm text-gray-700"><strong>Honestly, no:</strong> Done-for-you. Remove yourself from the bottleneck.</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  <strong>Scoring:</strong> If you answered &quot;done-for-you&quot; on 3 or more questions, the math strongly favors hiring a service. If you answered &quot;DIY&quot; on 3 or more, start there and reassess in 90 days. Mixed? The hybrid approach was built for you.
                </p>
              </section>

              {/* Section 7 */}
              <section id="what-to-look-for" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What to Look for in a Content Repurposing Service</h2>
                <p className="text-gray-700 mb-4">
                  If you decide to go the done-for-you route (or hybrid), here is how to evaluate services. These are the green flags and red flags from working in this space.
                </p>

                <h3 className="text-xl font-bold text-green-700 mb-3 mt-8">Green Flags</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li><strong>Specific to your niche.</strong> A service that works with coaches and consultants understands your audience, your sales cycle, and your content goals. A generalist agency does not.</li>
                  <li><strong>Clear deliverables with numbers.</strong> &quot;14-75+ content pieces per webinar&quot; is specific. &quot;We will help you grow your brand&quot; is vague. Ask for an exact list of what you get.</li>
                  <li><strong>SEO and AI search optimization included.</strong> In 2026, content needs to rank on Google AND get cited by ChatGPT, Perplexity, and Gemini. If a service is not optimizing for both, they are already behind.</li>
                  <li><strong>You keep your voice.</strong> They should sound like you, not like a marketing team. Ask for writing samples before signing up.</li>
                  <li><strong>Transparent pricing.</strong> Monthly cost, what is included, what costs extra. No surprises.</li>
                  <li><strong>Review/approval process.</strong> You should see content before it publishes. A service that does not offer this is a red flag.</li>
                </ul>

                <h3 className="text-xl font-bold text-red-700 mb-3">Red Flags</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li><strong>Vague output promises.</strong> If they cannot tell you exactly how many pieces you get per webinar, they are guessing.</li>
                  <li><strong>No niche focus.</strong> A service that repurposes for &quot;businesses of all kinds&quot; will produce generic content that sounds like everyone else.</li>
                  <li><strong>Lock-in contracts.</strong> Month-to-month is standard. If they require a 6-month commitment before you have seen results, walk away.</li>
                  <li><strong>No human review.</strong> AI can assist with repurposing. But if the entire process is automated with no human editing, the quality will show it.</li>
                  <li><strong>They cannot explain their process.</strong> A good service can walk you through every step from recording to published content. If the answer is &quot;we handle everything, do not worry about it,&quot; worry about it.</li>
                </ul>
              </section>

              {/* CTA 3 */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 md:p-8 text-center my-10">
                <p className="text-white text-lg font-semibold mb-2">
                  Ready to stop spending 15 hours on content every time you run a webinar?
                </p>
                <p className="text-blue-100 mb-4">
                  We turn your webinars into 14-75+ content pieces every month. All optimized for Google and AI search.
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

                <div className="space-y-6">
                  {[
                    {
                      q: 'How much does DIY content repurposing cost?',
                      a: 'The tools themselves run $50-$200 per month for a solid stack (Repurpose.io at $29/month, Descript at $24/month, Canva Pro at $13/month, plus scheduling tools). But the real cost is your time: 13-22 hours per webinar. If you bill clients $200/hour, that is $2,600-$4,400 in opportunity cost per webinar.',
                    },
                    {
                      q: 'How much does a done-for-you content repurposing service cost?',
                      a: 'Services range from $500 to $2,000 per month for coaches and consultants. ContentRepurposeHub starts at $750/month and delivers 14-75+ content pieces per webinar, all optimized for Google and AI search engines.',
                    },
                    {
                      q: 'Should I use DIY tools or hire a content repurposing service?',
                      a: 'It depends on your hourly rate and available time. If you bill $150+/hour, the 13-22 hours of DIY work costs more in lost revenue than most services charge. If you are a newer coach building your practice, DIY makes sense while your calendar is not fully booked.',
                    },
                    {
                      q: 'What are the best DIY content repurposing tools for coaches?',
                      a: 'The most useful tools include Repurpose.io ($29/month) for automated distribution, Descript ($24/month) for transcription and video editing, CapCut (free) for short-form clips, Canva Pro ($13/month) for graphics, and ChatGPT Plus ($20/month) for rewriting content across formats.',
                    },
                    {
                      q: 'Can I use a hybrid approach to content repurposing?',
                      a: 'Yes, and for many coaches it is the best starting point. Handle quick tasks yourself (LinkedIn posts, scheduling, simple video clips) and outsource the skill-intensive, time-heavy work (SEO blog posts, email sequences, carousels, lead magnets) to a service.',
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Bottom Line</h2>
                <p className="text-gray-700 mb-4">
                  There is no universally right answer here. A coach in year one with 10 open hours a week should absolutely go DIY. They will learn what content works, build their skills, and save money while their business grows.
                </p>
                <p className="text-gray-700 mb-4">
                  A coach billing $250/hour with a packed calendar and two webinars a month? Every hour spent on repurposing is an hour not spent coaching clients. The <Link href="/blog/webinar-repurposing-roi" className="text-blue-600 hover:text-blue-800 font-medium">ROI math</Link> is straightforward at that point.
                </p>
                <p className="text-gray-700 mb-4">
                  And most coaches fall somewhere in between. The hybrid approach exists because the world is not binary.
                </p>
                <p className="text-gray-700 mb-4">
                  What matters is that you stop letting your webinars die after the live event. Whether you repurpose them yourself or hire someone to do it, the content is already there. You already did the hard work. The only question is whether it sits in a Zoom folder or turns into months of content that brings in clients.
                </p>
                <p className="text-gray-700">
                  If you want to talk through which option makes sense for your specific coaching business, <a href="https://cal.com/contentrepurposehub/30min" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">book a free strategy call</a>. We will walk through the math together and give you an honest recommendation, even if that recommendation is to start with DIY.
                </p>
              </section>
            </div>
          </div>
        </article>

        {/* Reading Path Navigation */}
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Continue Reading</h3>
            <p className="text-sm text-gray-500 mb-4">You have reached the end of our Webinar Repurposing Series. Start from the beginning or explore all guides.</p>
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link href="/blog/webinar-repurposing-roi" className="text-blue-600 hover:text-blue-700 font-medium">
                &larr; The ROI of Webinar Repurposing
              </Link>
              <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium sm:text-right">
                See All Guides &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <section className="py-16 gradient-bg px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Your Webinars Already Contain the Content. You Choose Who Creates It.
            </h2>
            <p className="text-blue-100 text-lg mb-6">
              14-75+ content pieces from every webinar. Google + AI search optimized. Starting at $750/month.
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
