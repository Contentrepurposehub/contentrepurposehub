import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Webinar Repurposing: How to Turn 1 Webinar Into 14+ Content Pieces [2026 Guide]',
  description: 'Learn 14 proven ways to repurpose your webinar into blog posts, LinkedIn posts, email sequences, lead magnets, and more. Step-by-step guide for coaches and consultants.',
  keywords: 'webinar repurposing, repurpose webinar content, how to repurpose a webinar, webinar to blog post, webinar to LinkedIn posts, webinar content strategy, content repurposing for coaches',
  alternates: {
    canonical: 'https://contentrepurposehub.com/blog/webinar-repurposing-guide',
  },
  openGraph: {
    title: 'Webinar Repurposing: How to Turn 1 Webinar Into 14+ Content Pieces',
    description: 'The complete guide to webinar repurposing. 14 proven content formats, step-by-step process, and tools you need.',
    url: 'https://contentrepurposehub.com/blog/webinar-repurposing-guide',
    siteName: 'ContentRepurposeHub',
    type: 'article',
    publishedTime: '2026-02-09T00:00:00.000Z',
    images: [
      {
        url: 'https://contentrepurposehub.com/api/og?title=Webinar%20Repurposing%3A%20How%20to%20Turn%201%20Webinar%20Into%2014%2B%20Content%20Pieces',
        width: 1200,
        height: 630,
        alt: 'Webinar Repurposing: How to Turn 1 Webinar Into 14+ Content Pieces',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webinar Repurposing: 1 Webinar → 14+ Content Pieces',
    description: 'The complete guide for coaches and consultants. 14 formats, step-by-step process.',
    images: ['https://contentrepurposehub.com/api/og?title=Webinar%20Repurposing%3A%20How%20to%20Turn%201%20Webinar%20Into%2014%2B%20Content%20Pieces'],
  },
}

export default function WebinarRepurposingGuide() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://contentrepurposehub.com/blog/webinar-repurposing-guide#article',
        headline: 'Webinar Repurposing: How to Turn 1 Webinar Into 14+ Content Pieces',
        description: 'Learn 14 proven ways to repurpose your webinar into blog posts, LinkedIn posts, email sequences, lead magnets, and more.',
        datePublished: '2026-02-09',
        dateModified: '2026-02-09',
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
        mainEntityOfPage: 'https://contentrepurposehub.com/blog/webinar-repurposing-guide',
        wordCount: 4200,
        articleSection: 'Content Marketing',
        keywords: ['webinar repurposing', 'repurpose webinar', 'content repurposing', 'webinar to blog post', 'webinar content strategy'],
        about: [
          { '@type': 'Thing', name: 'Webinar Repurposing' },
          { '@type': 'Thing', name: 'Content Marketing' },
          { '@type': 'Thing', name: 'Content Repurposing' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://contentrepurposehub.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://contentrepurposehub.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Webinar Repurposing Guide' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is webinar repurposing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Webinar repurposing is the process of transforming a recorded webinar into multiple content formats like blog posts, LinkedIn posts, email sequences, lead magnets, video clips, and social media content. A single 60-minute webinar can become 14 or more individual content pieces.',
            },
          },
          {
            '@type': 'Question',
            name: 'How many content pieces can you get from one webinar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A single webinar can be repurposed into 14-30+ content pieces including vertical video clips, a full blog post, LinkedIn posts, a LinkedIn carousel, a podcast episode, an email sequence, quote cards, Twitter threads, a PDF lead magnet, newsletter editions, and a YouTube video with chapters.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does it take to repurpose a webinar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If you do it yourself, repurposing one webinar into 14+ content pieces takes approximately 15-25 hours. A professional webinar repurposing service can deliver all content within 7-10 business days while you focus on your coaching or consulting business.',
            },
          },
          {
            '@type': 'Question',
            name: 'What tools do you need for webinar repurposing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Essential tools for DIY webinar repurposing include a transcription tool (Otter.ai or Descript), a video editor for clips (CapCut or Descript), a design tool for carousels and quote cards (Canva), and an email platform (ConvertKit or Mailchimp). A professional repurposing service handles all of this for you.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is webinar repurposing worth it for coaches?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Coaches already spend hours creating webinar content. Without repurposing, that content reaches attendees once and disappears. With repurposing, a single webinar can generate months of content across LinkedIn, email, blog, and social media, bringing in new leads long after the webinar ends.',
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
              <span className="text-gray-700">Webinar Repurposing Guide</span>
            </nav>

            {/* Header */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Complete Guide</span>
                <span className="text-xs text-gray-500">15 min read</span>
                <span className="text-xs text-gray-400">February 9, 2026</span>
                <span className="text-xs text-gray-500">&middot;</span>
                <a href="/about" className="text-xs text-gray-500 hover:text-blue-600 transition">By Marius Galatan</a>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Webinar Repurposing: How to Turn 1 Webinar Into 14+ Content Pieces
              </h1>
              <p className="text-xl text-gray-600">
                You spent 10 hours preparing and delivering that webinar. Then it vanished into a Zoom folder. Here are 14 proven ways to turn that single recording into a content engine that generates leads for months.
              </p>
            </header>

            {/* --- INFOGRAPHIC 1: "1 Webinar = 14+ Pieces" Hero Card --- */}
            <figure className="my-10">
              <div
                role="img"
                aria-label="Infographic showing how 1 webinar recording becomes 14 or more content pieces across 10 different formats including blog posts, LinkedIn posts, newsletters, email sequences, lead magnets, Twitter threads, Instagram captions, YouTube Short scripts, landing pages, and content calendars"
                className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-2xl shadow-xl overflow-hidden"
              >
                {/* Top header bar */}
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 border-b border-white/10">
                  <p className="text-blue-100 text-xs font-semibold tracking-widest uppercase text-center">The Content Multiplier Effect</p>
                </div>

                <div className="p-6 md:p-8">
                  {/* Source and output side by side */}
                  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    {/* Left: Source */}
                    <div className="flex-shrink-0 text-center">
                      <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20 inline-block">
                        <div className="text-5xl mb-2" aria-hidden="true">🎙️</div>
                        <p className="text-white font-bold text-lg">1 Webinar</p>
                        <p className="text-blue-200 text-sm">60 min recording</p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0 text-white text-2xl font-bold" aria-hidden="true">
                      <span className="hidden md:block">→</span>
                      <span className="md:hidden">↓</span>
                    </div>

                    {/* Right: Output grid */}
                    <div className="flex-1 w-full">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/15">
                        <p className="text-white font-bold text-lg mb-3 text-center md:text-left">14+ Content Pieces</p>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { icon: '📝', label: 'Blog Post', count: '1' },
                            { icon: '💼', label: 'LinkedIn Posts', count: '10' },
                            { icon: '📧', label: 'Newsletter', count: '2' },
                            { icon: '📨', label: 'Email Sequence', count: '3-5' },
                            { icon: '📚', label: 'Lead Magnet', count: '1' },
                            { icon: '🐦', label: 'Twitter Threads', count: '2' },
                            { icon: '📸', label: 'IG Captions', count: '8' },
                            { icon: '🎬', label: 'YT Short Scripts', count: '4' },
                            { icon: '📄', label: 'Landing Page', count: '1' },
                            { icon: '📅', label: 'Content Calendar', count: '30 days' },
                          ].map((item, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2"
                            >
                              <span className="text-lg flex-shrink-0" aria-hidden="true">{item.icon}</span>
                              <div className="min-w-0">
                                <p className="text-white text-sm font-medium leading-tight truncate">{item.label}</p>
                                <p className="text-blue-200 text-xs">{item.count}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom stat bar */}
                  <div className="mt-6 pt-5 border-t border-white/15 flex flex-wrap justify-center gap-6 md:gap-10">
                    {[
                      { stat: '1 hr', desc: 'of your time' },
                      { stat: '14-75+', desc: 'content pieces' },
                      { stat: '30 days', desc: 'of content' },
                    ].map((item, i) => (
                      <div key={i} className="text-center">
                        <p className="text-white text-2xl font-bold">{item.stat}</p>
                        <p className="text-blue-200 text-xs">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <figcaption className="text-center text-sm text-gray-500 mt-3">
                A single 60-minute webinar contains enough material for 14 or more content pieces across every major platform.
              </figcaption>
            </figure>

            {/* Table of Contents */}
            <div className="bg-gray-50 rounded-xl p-6 mb-10 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Table of Contents</h2>
              <ol className="space-y-2 text-blue-600">
                <li><a href="#what-is-webinar-repurposing" className="hover:text-blue-800">1. What Is Webinar Repurposing?</a></li>
                <li><a href="#why-repurpose" className="hover:text-blue-800">2. Why Repurpose Your Webinars? (The ROI)</a></li>
                <li><a href="#14-ways" className="hover:text-blue-800">3. 14 Ways to Repurpose a Single Webinar</a></li>
                <li><a href="#step-by-step" className="hover:text-blue-800">4. Step-by-Step Webinar Repurposing Process</a></li>
                <li><a href="#tools" className="hover:text-blue-800">5. Best Tools for Webinar Repurposing</a></li>
                <li><a href="#for-coaches" className="hover:text-blue-800">6. Webinar Repurposing for Coaches &amp; Consultants</a></li>
                <li><a href="#diy-vs-service" className="hover:text-blue-800">7. DIY vs. Hiring a Repurposing Service</a></li>
                <li><a href="#faq" className="hover:text-blue-800">8. Frequently Asked Questions</a></li>
              </ol>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">

              {/* Section 1 */}
              <section id="what-is-webinar-repurposing" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What Is Webinar Repurposing?</h2>
                <p className="text-gray-700 mb-4">
                  Webinar repurposing is the process of transforming a recorded webinar into multiple content formats: blog posts, LinkedIn posts, email sequences, lead magnets, video clips, social media content, and more.
                </p>
                <p className="text-gray-700 mb-4">
                  Instead of delivering your expertise once to a live audience and letting it disappear, you extract the insights, frameworks, stories, and teaching moments from your webinar and repackage them for every platform where your audience spends time.
                </p>
                <p className="text-gray-700 mb-4">
                  A single 60-minute webinar contains enough raw material to create <strong>14 or more individual content pieces</strong>. That means one hour of work you already did can fuel your entire content calendar for weeks.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
                  <p className="text-gray-800 font-medium">
                    Think of your webinar as a content goldmine. Every section, story, framework, and Q&A answer is a standalone piece of content waiting to be published.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="why-repurpose" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Repurpose Your Webinars? (The ROI Case)</h2>
                <p className="text-gray-700 mb-4">
                  Most coaches and consultants create webinars that reach 50-500 attendees live, then never touch the recording again. That is a massive waste of the hours spent preparing, rehearsing, and delivering the content.
                </p>
                <p className="text-gray-700 mb-4">Here is what webinar repurposing changes:</p>
                <div className="grid md:grid-cols-2 gap-4 my-6">
                  {[
                    { label: 'Reach', before: '100 live attendees', after: 'Thousands across every platform' },
                    { label: 'Lifespan', before: '60 minutes, then forgotten', after: 'Months of content from one recording' },
                    { label: 'SEO Impact', before: 'Zero (webinars are not indexed)', after: 'Blog posts rank on Google for years' },
                    { label: 'Lead Generation', before: 'Only from live signups', after: 'Ongoing leads from every platform' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-lg p-4">
                      <p className="text-sm font-semibold text-blue-600 mb-1">{item.label}</p>
                      <p className="text-sm text-gray-500 line-through mb-1">{item.before}</p>
                      <p className="text-sm text-gray-900 font-medium">{item.after}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  The math is simple: you already created the content. Repurposing extracts maximum value from the work you already did, without creating anything from scratch.
                </p>
                <p className="text-gray-700">
                  For coaches and consultants who run webinars regularly, repurposing turns each recording into a lead-generation machine. Your webinar content reaches people on LinkedIn who missed the live event, on Google when they search for answers you already gave, and in their inbox through email sequences built from your teaching.
                </p>
              </section>

              {/* --- INFOGRAPHIC 2: Time Comparison Card --- */}
              <figure className="my-10">
                <div
                  role="img"
                  aria-label="Side-by-side comparison showing creating content from scratch requires 15 to 20 hours per week, starts from zero every week, and content dies after posting, versus repurposing 1 webinar which requires only 1 hour of your time, produces 14 or more pieces delivered, and content compounds over months"
                  className="rounded-2xl shadow-xl overflow-hidden border border-gray-200"
                >
                  {/* Header */}
                  <div className="bg-gray-900 px-6 py-3">
                    <p className="text-gray-300 text-xs font-semibold tracking-widest uppercase text-center">The Real Cost of Content Creation</p>
                  </div>

                  <div className="grid md:grid-cols-2">
                    {/* Left column: From scratch (red) */}
                    <div className="bg-gradient-to-b from-red-50 to-red-100/50 p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200">
                      <div className="flex items-center gap-2 mb-5">
                        <div className="w-3 h-3 rounded-full bg-red-500 flex-shrink-0" aria-hidden="true"></div>
                        <h3 className="text-lg font-bold text-red-900">Creating From Scratch</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-white rounded-xl p-4 border border-red-200 shadow-sm">
                          <p className="text-red-700 text-xs font-semibold uppercase tracking-wide mb-1">Time Required</p>
                          <p className="text-red-900 text-2xl font-bold">15-20 hrs<span className="text-base font-normal text-red-600">/week</span></p>
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-red-200 shadow-sm">
                          <p className="text-red-700 text-xs font-semibold uppercase tracking-wide mb-1">Process</p>
                          <p className="text-red-900 font-medium">Starts from zero every week</p>
                          <p className="text-red-600 text-sm mt-1">Research, write, design, edit, repeat</p>
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-red-200 shadow-sm">
                          <p className="text-red-700 text-xs font-semibold uppercase tracking-wide mb-1">Content Lifespan</p>
                          <p className="text-red-900 font-medium">Dies after posting</p>
                          <p className="text-red-600 text-sm mt-1">No compounding, no evergreen value</p>
                        </div>
                      </div>
                    </div>

                    {/* Right column: Repurposing (green) */}
                    <div className="bg-gradient-to-b from-emerald-50 to-emerald-100/50 p-6 md:p-8">
                      <div className="flex items-center gap-2 mb-5">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 flex-shrink-0" aria-hidden="true"></div>
                        <h3 className="text-lg font-bold text-emerald-900">Repurposing 1 Webinar</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-white rounded-xl p-4 border border-emerald-200 shadow-sm">
                          <p className="text-emerald-700 text-xs font-semibold uppercase tracking-wide mb-1">Time Required</p>
                          <p className="text-emerald-900 text-2xl font-bold">~1 hr<span className="text-base font-normal text-emerald-600"> of your time</span></p>
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-emerald-200 shadow-sm">
                          <p className="text-emerald-700 text-xs font-semibold uppercase tracking-wide mb-1">Output</p>
                          <p className="text-emerald-900 font-medium">14+ pieces delivered</p>
                          <p className="text-emerald-600 text-sm mt-1">Blog, LinkedIn, email, social, video</p>
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-emerald-200 shadow-sm">
                          <p className="text-emerald-700 text-xs font-semibold uppercase tracking-wide mb-1">Content Lifespan</p>
                          <p className="text-emerald-900 font-medium">Compounds over months</p>
                          <p className="text-emerald-600 text-sm mt-1">SEO ranks higher, email nurtures forever</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom verdict bar */}
                  <div className="bg-gray-900 px-6 py-4 text-center">
                    <p className="text-white text-sm font-medium">
                      Same expertise. <span className="text-emerald-400 font-bold">95% less time.</span> Exponentially more reach.
                    </p>
                  </div>
                </div>
                <figcaption className="text-center text-sm text-gray-500 mt-3">
                  Repurposing eliminates the weekly content creation grind by extracting maximum value from work you already did.
                </figcaption>
              </figure>

              {/* CTA 1 */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 md:p-8 text-center my-10">
                <p className="text-white text-lg font-semibold mb-2">
                  Don&apos;t want to do this yourself?
                </p>
                <p className="text-blue-100 mb-4">
                  We repurpose your webinars into 14-75+ content pieces. Starting at $750/month.
                </p>
                <a
                  href="https://contentrepurposehub.com/#pricing"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  See Plans &amp; Pricing &rarr;
                </a>
              </div>

              {/* Section 3 */}
              <section id="14-ways" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">14 Ways to Repurpose a Single Webinar</h2>
                <p className="text-gray-700 mb-6">
                  Here are 14 proven content formats you can create from every webinar. Each format reaches a different audience on a different platform, maximizing your exposure from one piece of source content.
                </p>

                {/* Format 1 */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">1. Vertical Video Clips (3-5 per webinar)</h3>
                <p className="text-gray-700 mb-4">
                  Short-form video is the highest-reach content format in 2026. Watch your webinar at 1.5x speed and timestamp the moments where you explained something perfectly, told a compelling story, or dropped a memorable one-liner. Cut each moment into a 30-60 second vertical clip. Add captions. 85% of people watch on mute. Post to TikTok, Instagram Reels, YouTube Shorts, and LinkedIn.
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Why it works:</strong> Short clips have the widest organic reach of any content format. One viral clip can drive more awareness than the entire live webinar.
                </p>

                {/* Format 2 */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">2. Full Blog Post (1,500-2,500 words)</h3>
                <p className="text-gray-700 mb-4">
                  Your webinar is already a rough draft of a blog post. Transcribe it, clean up the filler words, add headings every 200-300 words, and optimize for a target keyword. This becomes evergreen content that ranks on Google and brings in organic search traffic for months or years. For a step-by-step walkthrough of this process, see our guide on <Link href="/blog/webinar-to-blog-post" className="text-blue-600 hover:text-blue-800 font-medium">how to turn a webinar into a blog post</Link>.
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Why it works:</strong> Blog posts are the backbone of SEO. While your webinar disappears after the live event, a well-optimized blog post brings in new visitors every day through Google search. In 2026, blog posts also get cited by AI search engines like ChatGPT, Perplexity, and Gemini.
                </p>

                {/* Format 3 */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">3. LinkedIn Carousel (8-12 slides)</h3>
                <p className="text-gray-700 mb-4">
                  Take a framework, process, or list from your webinar and turn it into a swipeable LinkedIn carousel. Slide 1 is your hook. Make it stop the scroll. Slides 2-10 cover one point each. The last slide is your CTA. Carousels consistently outperform regular LinkedIn posts for saves and shares.
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Why it works:</strong> LinkedIn carousels get 2-3x more engagement than text posts. The swipe mechanic keeps people on your content longer, which the algorithm rewards.
                </p>

                {/* Format 4 */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">4. LinkedIn Text Posts (5-10 per webinar)</h3>
                <p className="text-gray-700 mb-4">
                  Every key insight, story, and lesson from your webinar is a standalone LinkedIn post. Structure them with a hook (first line), a story or insight (body), and a takeaway or question (ending). One 60-minute webinar can easily generate 5-10 high-quality LinkedIn posts.
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Why it works:</strong> LinkedIn posts build thought leadership and keep you visible in your network&apos;s feed. Posting consistently from repurposed webinar content means you never run out of ideas.
                </p>

                {/* Format 5 */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">5. Email Welcome Sequence (3-5 emails)</h3>
                <p className="text-gray-700 mb-4">
                  Build a welcome sequence using the best insights from your webinar. Email 1 delivers your lead magnet and sets expectations. Emails 2-4 share one key insight each. Email 5 includes a soft call-to-action. This nurtures every new subscriber automatically. For detailed templates and strategies, read our guide on <Link href="/blog/webinar-follow-up-email-sequence" className="text-blue-600 hover:text-blue-800 font-medium">webinar follow-up email sequences that convert</Link>.
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Why it works:</strong> Email sequences convert subscribers into clients on autopilot. Using webinar content ensures every email delivers real value, not generic filler.
                </p>

                {/* Format 6 */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">6. PDF Lead Magnet (Checklist or Guide)</h3>
                <p className="text-gray-700 mb-4">
                  Take the main framework or process from your webinar and turn it into a 1-2 page PDF checklist or guide. Offer it as a free download in exchange for an email address. This is how you build your email list from your repurposed content. We cover seven specific lead magnet formats in our article on <Link href="/blog/webinar-lead-magnets" className="text-blue-600 hover:text-blue-800 font-medium">high-converting lead magnets from a single webinar</Link>.
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Why it works:</strong> Lead magnets are the bridge between free content and paid clients. A checklist derived from your webinar is specific, actionable, and directly connected to your expertise.
                </p>

                {/* Format 7 */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">7. Newsletter Editions (2-3 per webinar)</h3>
                <p className="text-gray-700 mb-4">
                  Your webinar Q&A section alone can fuel multiple newsletter editions. Take the best questions from your audience, pair them with your detailed answers, and send them as standalone newsletter issues. Add a personal anecdote or updated take to make it fresh.
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Why it works:</strong> Newsletters maintain regular contact with your list. Repurposing from webinars means you always have high-quality content to send, even on weeks when you are too busy to write from scratch.
                </p>

                {/* Format 8 */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">8. Twitter/X Thread (8-15 tweets)</h3>
                <p className="text-gray-700 mb-4">
                  Break your webinar into a thread that teaches one complete concept. Start with a hook tweet, deliver value in 8-12 subsequent tweets, and end with a summary and CTA. Threads are X&apos;s highest-engagement content format for educational content.
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Why it works:</strong> Threads get 3-5x more impressions than single tweets. The format rewards depth, which plays perfectly to webinar content.
                </p>

                {/* Format 9 */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">9. Audiogram Clips (2-3 per webinar)</h3>
                <p className="text-gray-700 mb-4">
                  Extract audio-only clips from your best moments and add a waveform animation. These work well on LinkedIn and Twitter where some users prefer audio content. Tools like Headliner or Descript make this simple.
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Why it works:</strong> Audiograms stand out in feeds dominated by text and images. They add variety to your content mix and are fast to create.
                </p>

                {/* Format 10 */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">10. Quote Cards (5-8 per webinar)</h3>
                <p className="text-gray-700 mb-4">
                  Pull your most memorable lines, statistics, or insights from the webinar and design them as shareable quote cards. Use Canva with your brand colors and fonts. These are perfect for Instagram, LinkedIn, and Pinterest.
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Why it works:</strong> Quote cards are the most shareable content format. When others share your quotes, your reach multiplies without any extra effort.
                </p>

                {/* Format 11 */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">11. LinkedIn Article (800-1,200 words)</h3>
                <p className="text-gray-700 mb-4">
                  Write a LinkedIn article that goes deeper on one specific topic from your webinar. Unlike LinkedIn posts (which disappear from feeds quickly), articles live permanently on your LinkedIn profile and can rank in Google search.
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Why it works:</strong> LinkedIn articles establish authority and are discoverable through search long after publication. They are also shareable as standalone links.
                </p>

                {/* Format 12 */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">12. Podcast Episode</h3>
                <p className="text-gray-700 mb-4">
                  Extract the audio from your webinar, add a brief intro and outro, and publish it as a podcast episode. If you already have a podcast, this is free content. If you do not, this is the easiest way to start one. You already have the material.
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Why it works:</strong> Podcasts reach people during commutes, workouts, and downtime, times when they would not read a blog post or scroll LinkedIn. It is an entirely new audience channel from the same content.
                </p>

                {/* Format 13 */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">13. Slide Deck Download</h3>
                <p className="text-gray-700 mb-4">
                  Clean up your presentation slides, add your branding, and offer them as a downloadable resource. Many webinar attendees want the slides for reference. Non-attendees will download them too. It is another lead magnet opportunity.
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Why it works:</strong> Slides are a low-effort, high-value asset. Platforms like SlideShare still drive traffic, and they work as gated content for email capture.
                </p>

                {/* Format 14 */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">14. YouTube Long-Form Video</h3>
                <p className="text-gray-700 mb-4">
                  Upload your full webinar to YouTube with proper chapters, a keyword-rich title, and a detailed description. YouTube is the second-largest search engine. Your webinar can rank for relevant keywords and bring in new audience members for years.
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Why it works:</strong> YouTube videos compound over time. A well-optimized webinar upload can drive hundreds of views per month indefinitely, turning a one-time event into a permanent lead source.
                </p>
              </section>

              {/* CTA 2 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 text-center my-10">
                <p className="text-gray-900 text-lg font-semibold mb-2">
                  That&apos;s 14 content pieces from one webinar.
                </p>
                <p className="text-gray-600 mb-4">
                  Imagine doing this every month. That&apos;s what the service delivers.
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

              {/* Section 4 */}
              <section id="step-by-step" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Step-by-Step Webinar Repurposing Process</h2>
                <p className="text-gray-700 mb-6">
                  Here is the exact process to repurpose any webinar, whether you do it yourself or hand it to a team.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Step 1: Transcribe Your Webinar</h3>
                <p className="text-gray-700 mb-4">
                  Upload your recording to a transcription tool like Otter.ai, Descript, or Rev. A good transcript is the foundation of every content piece. Clean up filler words (um, uh, you know) and format speaker names if there are multiple presenters.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Step 2: Identify Key Content Blocks</h3>
                <p className="text-gray-700 mb-4">
                  Read through the transcript and highlight: key insights, frameworks or processes, stories and examples, memorable quotes, and Q&A answers. Each of these becomes the seed for one or more content pieces.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Step 3: Create Your Content Map</h3>
                <p className="text-gray-700 mb-4">
                  Match each content block to the formats listed above. Your main framework becomes the blog post and carousel. Your stories become LinkedIn posts and video clips. Your Q&A becomes newsletter content and email sequences.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Step 4: Produce Each Format</h3>
                <p className="text-gray-700 mb-4">
                  Work through your content map format by format. Start with the blog post (it takes the longest and serves as a reference for shorter pieces). Then create the social content, email content, and video clips. Each piece should be optimized for its specific platform.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Step 5: Optimize for Search</h3>
                <p className="text-gray-700 mb-4">
                  For every piece that lives on a website (blog posts, landing pages, YouTube descriptions), optimize for both Google and AI search engines. This means proper heading structure, target keywords, meta descriptions, and clear factual formatting that AI assistants can cite.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Step 6: Schedule and Publish</h3>
                <p className="text-gray-700 mb-6">
                  Spread your content over 2-4 weeks. Do not publish everything at once. A consistent publishing cadence signals to algorithms (and your audience) that you are active and authoritative.
                </p>
              </section>

              {/* --- INFOGRAPHIC 3: Process Flow --- */}
              <figure className="my-10">
                <div
                  role="img"
                  aria-label="Horizontal process flow diagram showing 6 steps of webinar repurposing: Step 1 Record your webinar, Step 2 Transcribe the recording, Step 3 Extract key insights and frameworks, Step 4 Map content to formats, Step 5 Produce each piece, Step 6 Optimize and publish across platforms"
                  className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3">
                    <p className="text-white text-xs font-semibold tracking-widest uppercase text-center">The 6-Step Repurposing Pipeline</p>
                  </div>

                  <div className="p-6 md:p-8">
                    {/* Desktop: Horizontal flow */}
                    <div className="hidden md:block">
                      <div className="flex items-start justify-between gap-2">
                        {[
                          { step: 1, title: 'Record', desc: 'Deliver your webinar as usual' },
                          { step: 2, title: 'Transcribe', desc: 'AI-powered transcript cleanup' },
                          { step: 3, title: 'Extract', desc: 'Pull insights, stories, frameworks' },
                          { step: 4, title: 'Map', desc: 'Match content blocks to formats' },
                          { step: 5, title: 'Produce', desc: 'Create each piece for its platform' },
                          { step: 6, title: 'Publish', desc: 'Optimize, schedule, distribute' },
                        ].map((item, i) => (
                          <div key={i} className="flex items-start flex-1">
                            {/* Step card */}
                            <div className="text-center flex-1">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white text-lg font-bold flex items-center justify-center mx-auto shadow-lg shadow-blue-200">
                                {item.step}
                              </div>
                              <p className="text-gray-900 font-bold text-sm mt-3">{item.title}</p>
                              <p className="text-gray-500 text-xs mt-1 leading-snug px-1">{item.desc}</p>
                            </div>
                            {/* Connector arrow (not after last item) */}
                            {i < 5 && (
                              <div className="flex items-center pt-5 flex-shrink-0 text-blue-300" aria-hidden="true">
                                <div className="w-4 h-0.5 bg-blue-300"></div>
                                <svg className="w-3 h-3 -ml-px" fill="currentColor" viewBox="0 0 12 12"><path d="M4 1l5 5-5 5V1z" /></svg>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Mobile: Vertical flow */}
                    <div className="md:hidden space-y-1">
                      {[
                        { step: 1, title: 'Record', desc: 'Deliver your webinar as usual' },
                        { step: 2, title: 'Transcribe', desc: 'AI-powered transcript cleanup' },
                        { step: 3, title: 'Extract', desc: 'Pull insights, stories, frameworks' },
                        { step: 4, title: 'Map', desc: 'Match content blocks to formats' },
                        { step: 5, title: 'Produce', desc: 'Create each piece for its platform' },
                        { step: 6, title: 'Publish', desc: 'Optimize, schedule, distribute' },
                      ].map((item, i) => (
                        <div key={i}>
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-200">
                              {item.step}
                            </div>
                            <div>
                              <p className="text-gray-900 font-bold text-sm">{item.title}</p>
                              <p className="text-gray-500 text-xs">{item.desc}</p>
                            </div>
                          </div>
                          {/* Vertical connector */}
                          {i < 5 && (
                            <div className="flex justify-start ml-5 py-1" aria-hidden="true">
                              <div className="w-0.5 h-4 bg-blue-300"></div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Result bar */}
                    <div className="mt-6 pt-5 border-t border-gray-200 text-center">
                      <p className="text-gray-900 text-sm font-semibold">
                        Result: <span className="text-blue-600">14-75+ content pieces</span> from a single recording
                      </p>
                    </div>
                  </div>
                </div>
                <figcaption className="text-center text-sm text-gray-500 mt-3">
                  The webinar repurposing pipeline: 6 steps from recording to a full month of published content.
                </figcaption>
              </figure>

              {/* Section 5 */}
              <section id="tools" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Best Tools for Webinar Repurposing</h2>
                <p className="text-gray-700 mb-4">If you are repurposing webinars yourself, here are the essential tools:</p>

                <div className="space-y-4 my-6">
                  {[
                    { category: 'Transcription', tools: 'Otter.ai, Descript, Rev', note: 'Start here. Everything else depends on a good transcript.' },
                    { category: 'Video Editing', tools: 'Descript, CapCut, Opus Clip', note: 'For cutting short-form clips from your webinar' },
                    { category: 'Design', tools: 'Canva, Figma', note: 'For carousels, quote cards, and thumbnails' },
                    { category: 'Writing', tools: 'Google Docs, Notion', note: 'For drafting blog posts and email sequences' },
                    { category: 'Email', tools: 'ConvertKit, Beehiiv, Mailchimp', note: 'For sending newsletters and sequences' },
                    { category: 'Scheduling', tools: 'Buffer, Typefully, Publer', note: 'For scheduling social media posts' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap">{item.category}</div>
                      <div>
                        <p className="text-gray-900 font-medium">{item.tools}</p>
                        <p className="text-gray-600 text-sm">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 6 */}
              <section id="for-coaches" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Webinar Repurposing for Coaches &amp; Consultants</h2>
                <p className="text-gray-700 mb-4">
                  If you are a coach or consultant, webinar repurposing solves your biggest content marketing problem: <strong>you have the expertise but not the time to create content consistently.</strong>
                </p>
                <p className="text-gray-700 mb-4">
                  You already run webinars. You already have recordings. That means you already have the raw material for weeks of content. It just needs to be reformatted and distributed.
                </p>
                <p className="text-gray-700 mb-4">Here is why repurposing is especially powerful for coaches:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li><strong>Authentic voice:</strong> The content uses your actual words from your webinar, so it sounds like you, not like generic AI-generated marketing copy.</li>
                  <li><strong>Demonstrate expertise:</strong> Every repurposed piece showcases your knowledge. A LinkedIn carousel from your framework is a mini-demonstration of your coaching ability.</li>
                  <li><strong>Build trust at scale:</strong> People who see your content across multiple platforms (LinkedIn, blog, email, YouTube) develop familiarity and trust before they ever book a call.</li>
                  <li><strong>Compound over time:</strong> Blog posts rank higher as they age. Email sequences nurture leads automatically. YouTube videos accumulate views. Your one webinar keeps working for you.</li>
                </ul>
              </section>

              {/* Section 7 */}
              <section id="diy-vs-service" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">DIY vs. Hiring a Webinar Repurposing Service</h2>
                <p className="text-gray-700 mb-4">
                  You have two options: repurpose your webinars yourself or hire a service to do it for you. Here is the honest comparison:
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900"></th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">DIY</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Repurposing Service</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Time per webinar', '15-25 hours', '~1 hour (send the recording)'],
                        ['Cost', 'Your time + tools (~$100/mo)', '$750-$1,500/month'],
                        ['Content pieces', 'Depends on your skills', '14-75+ pieces guaranteed'],
                        ['SEO optimization', 'Basic (unless you learn SEO)', 'Professional Google + AI optimization'],
                        ['Consistency', 'Varies with your schedule', 'Delivered every month'],
                        ['Quality', 'Good if you are a strong writer', 'Professional across all formats'],
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
                  <strong>The bottom line:</strong> If you have more time than money, DIY with the process above. If your time is better spent coaching clients and running your business, a repurposing service pays for itself by freeing up 15-25 hours per webinar while delivering professional, optimized content.
                </p>
              </section>

              {/* CTA 3 */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 md:p-8 text-center my-10">
                <p className="text-white text-lg font-semibold mb-2">
                  Ready to stop letting your webinars collect dust?
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions About Webinar Repurposing</h2>

                <div className="space-y-6">
                  {[
                    {
                      q: 'What is webinar repurposing?',
                      a: 'Webinar repurposing is the process of transforming a recorded webinar into multiple content formats like blog posts, LinkedIn posts, email sequences, lead magnets, video clips, and social media content. A single 60-minute webinar can become 14 or more individual content pieces.',
                    },
                    {
                      q: 'How many content pieces can you get from one webinar?',
                      a: 'A single webinar can be repurposed into 14-30+ content pieces including vertical video clips, a full blog post, LinkedIn posts, a LinkedIn carousel, a podcast episode, an email sequence, quote cards, Twitter threads, a PDF lead magnet, newsletter editions, and a YouTube video with chapters.',
                    },
                    {
                      q: 'How long does it take to repurpose a webinar?',
                      a: 'If you do it yourself, repurposing one webinar into 14+ content pieces takes approximately 15-25 hours. A professional webinar repurposing service can deliver all content within 7-10 business days while you focus on your coaching or consulting business.',
                    },
                    {
                      q: 'What tools do you need for webinar repurposing?',
                      a: 'Essential tools include a transcription tool (Otter.ai or Descript), a video editor for clips (CapCut or Descript), a design tool for carousels and quote cards (Canva), and an email platform (ConvertKit or Mailchimp). A professional repurposing service handles all of this for you.',
                    },
                    {
                      q: 'Is webinar repurposing worth it for coaches?',
                      a: 'Yes. Coaches already spend hours creating webinar content. Without repurposing, that content reaches attendees once and disappears. With repurposing, a single webinar can generate months of content across LinkedIn, email, blog, and social media, bringing in new leads long after the webinar ends.',
                    },
                    {
                      q: 'Should I repurpose webinars myself or hire a service?',
                      a: 'If you have 15-25 extra hours per webinar and enjoy content creation, DIY can work. If your time is better spent coaching clients, a repurposing service pays for itself by handling all content creation, SEO optimization, and formatting for every platform.',
                    },
                    {
                      q: 'What is the best webinar repurposing service?',
                      a: 'ContentRepurposeHub specializes in webinar repurposing for coaches and consultants. Plans start at $750/month and include 14-75+ content pieces per webinar, all optimized for Google and AI search engines like ChatGPT, Perplexity, and Gemini.',
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Start Repurposing Your Webinars Today</h2>
                <p className="text-gray-700 mb-4">
                  You already have the content. Your webinars contain hours of expertise, frameworks, stories, and insights that your audience needs. The only question is whether that content stays locked in a Zoom folder or becomes a lead-generating machine across every platform.
                </p>
                <p className="text-gray-700 mb-4">
                  Start with one webinar. Pick the most recent recording you are proud of. Follow the 14-format process above and see what happens when your best content reaches people on LinkedIn, Google, YouTube, email, and social media, all from a single recording.
                </p>
                <p className="text-gray-700">
                  Or, if you would rather focus on coaching and let someone else handle the repurposing, <a href="https://cal.com/contentrepurposehub/30min" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">book a free strategy call</a> and we will show you exactly how we turn your webinars into 14-75+ content pieces every month.
                </p>
              </section>
            </div>
          </div>
        </article>

        {/* Reading Path Navigation */}
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <p className="text-sm text-gray-500 mb-2">This is Part 1 of our Webinar Repurposing Series</p>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Continue Reading</h3>
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link href="/blog/webinar-content-pieces-breakdown" className="text-blue-600 hover:text-blue-700 font-medium sm:text-right">
                From 1 Webinar to 75+ Content Pieces: The Complete Breakdown &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <section className="py-16 gradient-bg px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Your Webinars Deserve More Than a Zoom Folder
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
