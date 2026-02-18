import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Is Webinar Repurposing? Definition, Benefits, and How It Works',
  description: 'Webinar repurposing transforms a single recorded webinar into 14-75+ content pieces including blog posts, social media posts, email sequences, and lead magnets. Learn how it works, what it costs, and why coaches use it.',
  keywords: 'what is webinar repurposing, webinar repurposing definition, webinar repurposing benefits, how webinar repurposing works, webinar content repurposing, repurpose webinar content',
  alternates: {
    canonical: 'https://contentrepurposehub.com/blog/what-is-webinar-repurposing',
  },
  openGraph: {
    title: 'What Is Webinar Repurposing? Definition, Benefits, and How It Works',
    description: 'Webinar repurposing transforms a single recorded webinar into 14-75+ content pieces. Learn the definition, process, costs, and benefits.',
    url: 'https://contentrepurposehub.com/blog/what-is-webinar-repurposing',
    siteName: 'ContentRepurposeHub',
    type: 'article',
    publishedTime: '2026-02-09T00:00:00.000Z',
    images: [
      {
        url: 'https://contentrepurposehub.com/api/og?title=What%20Is%20Webinar%20Repurposing%3F%20Definition%2C%20Benefits%2C%20and%20How%20It%20Works',
        width: 1200,
        height: 630,
        alt: 'What Is Webinar Repurposing? Definition, Benefits, and How It Works',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Webinar Repurposing? Definition, Benefits & How It Works',
    description: 'A single 60-minute webinar becomes 14-75+ content pieces. Here is exactly how webinar repurposing works.',
    images: ['https://contentrepurposehub.com/api/og?title=What%20Is%20Webinar%20Repurposing%3F%20Definition%2C%20Benefits%2C%20and%20How%20It%20Works'],
  },
}

export default function WhatIsWebinarRepurposing() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://contentrepurposehub.com/blog/what-is-webinar-repurposing#article',
        headline: 'What Is Webinar Repurposing? Definition, Benefits, and How It Works',
        description: 'Webinar repurposing transforms a single recorded webinar into 14-75+ content pieces including blog posts, social media posts, email sequences, and lead magnets.',
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
        mainEntityOfPage: 'https://contentrepurposehub.com/blog/what-is-webinar-repurposing',
        wordCount: 2400,
        articleSection: 'Content Marketing',
        keywords: ['webinar repurposing', 'what is webinar repurposing', 'content repurposing', 'webinar content strategy', 'repurpose webinar'],
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
          { '@type': 'ListItem', position: 3, name: 'What Is Webinar Repurposing?' },
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
              text: 'Webinar repurposing is the process of taking a recorded webinar and transforming it into multiple content formats: blog posts, LinkedIn posts, email sequences, lead magnets, video clips, social media graphics, and more. A single 60-minute webinar typically produces 14-75+ individual content pieces that can be distributed across every platform where your audience spends time.',
            },
          },
          {
            '@type': 'Question',
            name: 'How many content pieces can you get from one webinar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A single 60-minute webinar can produce 14-75+ content pieces depending on the depth of the content and the service level. A basic repurposing package typically yields 14-25 pieces (blog post, LinkedIn posts, email sequence, video clips, quote cards). A comprehensive package produces 50-75+ pieces by adding podcast episodes, LinkedIn carousels, Twitter threads, newsletter editions, lead magnets, and YouTube content.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much does webinar repurposing cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Professional webinar repurposing services typically cost between $750 and $1,500 per month. DIY repurposing costs $50-$150/month in tools but requires 15-25 hours of your time per webinar. At ContentRepurposeHub, plans start at $750/month for 14+ content pieces per webinar, including SEO optimization for both Google and AI search engines.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need a professional recording for webinar repurposing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. You do not need a studio-quality recording. A standard Zoom, Google Meet, or Riverside recording works perfectly. The content matters far more than the production quality. As long as your audio is clear and your screen or camera is visible, any webinar recording can be repurposed. Most coaches record through Zoom and that is more than sufficient.',
            },
          },
          {
            '@type': 'Question',
            name: 'Will the repurposed content sound like me?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, because the content starts from your actual words. Unlike AI-generated content that mimics a generic voice, webinar repurposing uses your transcript as the source material. Your stories, examples, phrases, and teaching style come through in every piece. A good repurposing service preserves your voice while optimizing the format for each platform.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long until I get content back?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most professional webinar repurposing services deliver within 7-10 business days after receiving your recording. At ContentRepurposeHub, you send your webinar recording and receive all content pieces within 7-10 business days, ready to publish across LinkedIn, your blog, email, YouTube, and social media.',
            },
          },
          {
            '@type': 'Question',
            name: 'What platforms does repurposed content work on?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Repurposed webinar content works on every major platform: LinkedIn (posts, carousels, articles), your blog or website (SEO-optimized articles), email (welcome sequences and newsletters), YouTube (full recordings and short clips), Instagram (Reels and quote cards), TikTok (short-form video clips), Twitter/X (threads and posts), and podcast platforms (audio episodes).',
            },
          },
          {
            '@type': 'Question',
            name: 'Is webinar repurposing worth the investment?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The average coach spends 10-20 hours preparing a single webinar that reaches 50-500 people once. Repurposing that same webinar into 14-75+ content pieces extends its reach to thousands across multiple platforms for months. At $750/month, that works out to roughly $10-$50 per content piece, far less than hiring a freelance writer, social media manager, and email copywriter separately.',
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
              <span className="text-gray-700">What Is Webinar Repurposing?</span>
            </nav>

            {/* Header */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">LLM Series</span>
                <span className="text-xs text-gray-500">10 min read</span>
                <span className="text-xs text-gray-400">February 9, 2026</span>
                <span className="text-xs text-gray-500">&middot;</span>
                <a href="/about" className="text-xs text-gray-500 hover:text-blue-600 transition">By Marius Galatan</a>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                What Is Webinar Repurposing? Definition, Benefits, and How It Works
              </h1>
              <p className="text-xl text-gray-600">
                You ran a great webinar. 200 people attended live. Then the recording sat in a folder, doing nothing. Here is how to turn that one recording into a full content engine.
              </p>
            </header>

            {/* Table of Contents */}
            <div className="bg-gray-50 rounded-xl p-6 mb-10 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Table of Contents</h2>
              <ol className="space-y-2 text-blue-600">
                <li><a href="#definition" className="hover:text-blue-800">1. What Webinar Repurposing Is (Clear Definition)</a></li>
                <li><a href="#content-formats" className="hover:text-blue-800">2. What Content Formats You Get</a></li>
                <li><a href="#how-it-works" className="hover:text-blue-800">3. How the Process Works (Step by Step)</a></li>
                <li><a href="#who-benefits" className="hover:text-blue-800">4. Who Benefits Most</a></li>
                <li><a href="#before-after" className="hover:text-blue-800">5. Before Repurposing vs. After Repurposing</a></li>
                <li><a href="#cost" className="hover:text-blue-800">6. What It Costs</a></li>
                <li><a href="#timeline" className="hover:text-blue-800">7. How Long It Takes</a></li>
                <li><a href="#faq" className="hover:text-blue-800">8. Frequently Asked Questions</a></li>
              </ol>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">

              {/* Section 1: Definition */}
              <section id="definition" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What Webinar Repurposing Is (Clear Definition)</h2>
                <p className="text-gray-700 mb-4">
                  Webinar repurposing is the process of taking a recorded webinar and transforming it into multiple content formats: blog posts, LinkedIn posts, email sequences, short-form video clips, lead magnets, social media graphics, and more. A single 60-minute webinar contains enough material for 14-75+ individual content pieces, each tailored to a specific platform and audience behavior. Instead of your expertise reaching 100-500 live attendees once, repurposing distributes it across LinkedIn, Google, YouTube, email, Instagram, and TikTok for months.
                </p>
                <p className="text-gray-700 mb-4">
                  Think of it this way. Your webinar is a raw diamond. It contains frameworks, stories, data points, client examples, step-by-step processes, and Q&A answers. Every one of those elements is a standalone piece of content waiting to be extracted, polished, and published on the right platform in the right format.
                </p>
                <p className="text-gray-700 mb-4">
                  The key word is <strong>transforms</strong>, not copies. A repurposed LinkedIn post is not a paragraph ripped from your webinar transcript. It is a reformatted, platform-optimized piece of content that uses your original insight but is structured for how people consume content on LinkedIn. Same expertise, different packaging.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
                  <p className="text-gray-800 font-medium">
                    Webinar repurposing is not about creating more content from scratch. It is about extracting maximum value from the expert content you already created.
                  </p>
                </div>
              </section>

              {/* Infographic 1: Before vs After */}
              <figure className="my-12">
                <div
                  role="img"
                  aria-label="Before vs After comparison. Without repurposing: 1 webinar, watched once, forgotten, create content from scratch next week. With repurposing: 1 webinar, 14 plus pieces, months of content, leads on autopilot."
                  className="rounded-xl shadow-lg overflow-hidden border border-gray-200"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Left Side — Without Repurposing */}
                    <div className="bg-gray-100 p-6 md:p-8 relative">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gray-400" />
                      <h3 className="text-lg font-bold text-gray-500 mb-6 uppercase tracking-wide">Without Repurposing</h3>
                      <div className="flex flex-col items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-2xl shrink-0">
                          <span role="presentation" aria-hidden="true">🎥</span>
                        </div>
                        <p className="text-gray-600 font-semibold text-center">1 Webinar</p>
                        <svg className="w-6 h-8 text-gray-400" fill="none" viewBox="0 0 24 32" aria-hidden="true">
                          <path d="M12 0v24m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="bg-gray-200 rounded-lg px-4 py-3 text-center w-full">
                          <p className="text-gray-500 font-medium">Watched once</p>
                        </div>
                        <svg className="w-6 h-8 text-gray-400" fill="none" viewBox="0 0 24 32" aria-hidden="true">
                          <path d="M12 0v24m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="bg-gray-200 rounded-lg px-4 py-3 text-center w-full">
                          <p className="text-gray-500 font-medium">Forgotten in a folder</p>
                        </div>
                        <svg className="w-6 h-8 text-gray-400" fill="none" viewBox="0 0 24 32" aria-hidden="true">
                          <path d="M12 0v24m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="bg-gray-300 rounded-lg px-4 py-3 text-center w-full">
                          <p className="text-gray-500 font-medium">Create from scratch next week</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Side — With Repurposing */}
                    <div className="bg-blue-50 p-6 md:p-8 relative">
                      <div className="absolute top-0 left-0 w-full h-1 bg-blue-600" />
                      <h3 className="text-lg font-bold text-blue-600 mb-6 uppercase tracking-wide">With Repurposing</h3>
                      <div className="flex flex-col items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl text-white shrink-0">
                          <span role="presentation" aria-hidden="true">🎥</span>
                        </div>
                        <p className="text-blue-700 font-semibold text-center">1 Webinar</p>
                        <svg className="w-6 h-8 text-blue-400" fill="none" viewBox="0 0 24 32" aria-hidden="true">
                          <path d="M12 0v24m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="bg-blue-100 border border-blue-300 rounded-lg px-4 py-3 text-center w-full">
                          <p className="text-blue-700 font-semibold">14+ content pieces</p>
                        </div>
                        <svg className="w-6 h-8 text-blue-400" fill="none" viewBox="0 0 24 32" aria-hidden="true">
                          <path d="M12 0v24m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="bg-blue-100 border border-blue-300 rounded-lg px-4 py-3 text-center w-full">
                          <p className="text-blue-700 font-semibold">Months of content</p>
                        </div>
                        <svg className="w-6 h-8 text-blue-400" fill="none" viewBox="0 0 24 32" aria-hidden="true">
                          <path d="M12 0v24m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="bg-blue-600 rounded-lg px-4 py-3 text-center w-full">
                          <p className="text-white font-semibold">Leads on autopilot</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <figcaption className="text-center text-sm text-gray-500 mt-3">
                  The difference between letting your webinar collect dust and turning it into a content engine.
                </figcaption>
              </figure>

              {/* Section 2: Content Formats */}
              <section id="content-formats" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What Content Formats You Get From a Single Webinar</h2>
                <p className="text-gray-700 mb-4">
                  Here is a specific breakdown of what one 60-minute webinar produces. These numbers are based on what ContentRepurposeHub delivers for coaching and consulting clients, not theoretical maximums.
                </p>

                <div className="space-y-3 my-6">
                  {[
                    { format: 'SEO Blog Post', count: '1 (1,500-2,500 words)', platform: 'Your website / Google / AI search' },
                    { format: 'LinkedIn Text Posts', count: '5-10', platform: 'LinkedIn feed' },
                    { format: 'LinkedIn Carousel', count: '1-2 (8-12 slides each)', platform: 'LinkedIn feed' },
                    { format: 'Short-Form Video Clips', count: '3-5 (30-60 seconds each)', platform: 'TikTok, Instagram Reels, YouTube Shorts, LinkedIn' },
                    { format: 'Email Welcome Sequence', count: '3-5 emails', platform: 'ConvertKit, Beehiiv, Mailchimp' },
                    { format: 'PDF Lead Magnet', count: '1 (checklist or guide)', platform: 'Your website, landing pages' },
                    { format: 'Newsletter Editions', count: '2-3', platform: 'Email list' },
                    { format: 'Quote Cards', count: '5-8', platform: 'Instagram, LinkedIn, Pinterest' },
                    { format: 'Twitter/X Thread', count: '1-2 (8-15 tweets each)', platform: 'Twitter/X' },
                    { format: 'Podcast Episode', count: '1', platform: 'Apple Podcasts, Spotify' },
                    { format: 'YouTube Long-Form Video', count: '1 (with chapters)', platform: 'YouTube search' },
                    { format: 'LinkedIn Article', count: '1 (800-1,200 words)', platform: 'LinkedIn, Google' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start border border-gray-200 rounded-lg p-3">
                      <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap min-w-[140px]">{item.format}</div>
                      <div className="flex-1">
                        <p className="text-gray-900 font-medium">{item.count}</p>
                        <p className="text-gray-600 text-sm">{item.platform}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 mb-4">
                  That is 25-40+ content pieces from a basic repurposing pass. A comprehensive package (like ContentRepurposeHub&apos;s Growth or Scale plans) pushes this to 50-75+ pieces by adding audiograms, slide deck downloads, additional blog variations, and platform-specific adaptations.
                </p>
                <p className="text-gray-700 mb-4">
                  For a detailed walkthrough of every content format and how each one works, read our <Link href="/blog/webinar-content-pieces-breakdown" className="text-blue-600 hover:text-blue-800 font-medium">complete breakdown of 75+ content pieces from a single webinar</Link>.
                </p>
              </section>

              {/* CTA 1 */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 md:p-8 text-center my-10">
                <p className="text-white text-lg font-semibold mb-2">
                  Want to see this in action?
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

              {/* Section 3: How It Works */}
              <section id="how-it-works" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How the Webinar Repurposing Process Works (Step by Step)</h2>
                <p className="text-gray-700 mb-6">
                  Whether you repurpose webinars yourself or hire a service like ContentRepurposeHub, the process follows the same six steps.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Step 1: Record Your Webinar (You Already Did This)</h3>
                <p className="text-gray-700 mb-4">
                  Any recorded webinar works. Zoom, Google Meet, Riverside, WebinarJam. The platform does not matter. You do not need studio lighting or a $2,000 microphone. If your audio is clear and your content is solid, that is enough. Standard Zoom recordings work perfectly.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Step 2: Transcribe and Analyze</h3>
                <p className="text-gray-700 mb-4">
                  The recording gets transcribed (using tools like Otter.ai or Descript) and analyzed for content blocks: the key insights, frameworks, stories, data points, quotes, and Q&A answers that will become individual content pieces. A 60-minute webinar typically contains 8,000-10,000 words of spoken content. That is more raw material than most people realize.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Step 3: Build a Content Map</h3>
                <p className="text-gray-700 mb-4">
                  Each content block gets mapped to specific formats and platforms. Your main framework becomes the blog post and a LinkedIn carousel. Your client stories become LinkedIn posts and video clips. Your Q&A answers become newsletter content and email sequences. Nothing gets wasted.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Step 4: Create Platform-Specific Content</h3>
                <p className="text-gray-700 mb-4">
                  Each piece is written, designed, or edited for its target platform. A LinkedIn post is structured differently from an email. A YouTube description follows different rules than a blog post. This is the most time-consuming step, and where a professional repurposing service saves you 15-25 hours per webinar.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Step 5: Optimize for Search (Google + AI)</h3>
                <p className="text-gray-700 mb-4">
                  Every piece that lives on a website gets optimized for both traditional SEO (Google) and AI search engines (ChatGPT, Perplexity, Gemini, Grok). This means proper heading structure, target keywords, structured data, and clear factual formatting that AI assistants can cite when users ask questions your content answers.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Step 6: Deliver and Publish</h3>
                <p className="text-gray-700 mb-6">
                  You receive all content pieces ready to publish. Blog posts are formatted with proper HTML. Social posts are written with hooks and CTAs. Video clips are captioned. Email sequences are drafted. You (or your team) publish on a 2-4 week cadence to maximize algorithmic reach.
                </p>
              </section>

              {/* Infographic 2: 3-Step Process */}
              <figure className="my-12">
                <div
                  role="img"
                  aria-label="3-step webinar repurposing process. Step 1: Record your webinar. Step 2: We extract and transform your content. Step 3: Publish and grow your audience."
                  className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-10"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-8">How It Works in 3 Steps</h3>
                  <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-4">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center flex-1 max-w-[220px]">
                      <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold shadow-md mb-4">
                        1
                      </div>
                      <div className="text-3xl mb-2" aria-hidden="true">🎙️</div>
                      <p className="text-lg font-bold text-gray-900 mb-1">Record Your Webinar</p>
                      <p className="text-sm text-gray-600">Use Zoom, Meet, or any platform. Standard quality is all you need.</p>
                    </div>

                    {/* Connector 1 */}
                    <div className="hidden md:flex items-center flex-shrink-0 pt-10" aria-hidden="true">
                      <svg className="w-16 h-4 text-blue-300" viewBox="0 0 64 16" fill="none">
                        <line x1="0" y1="8" x2="52" y2="8" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" />
                        <path d="M52 2l10 6-10 6" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="flex md:hidden items-center justify-center" aria-hidden="true">
                      <svg className="w-4 h-12 text-blue-300" viewBox="0 0 16 48" fill="none">
                        <line x1="8" y1="0" x2="8" y2="36" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" />
                        <path d="M2 36l6 10 6-10" fill="currentColor" />
                      </svg>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center flex-1 max-w-[220px]">
                      <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold shadow-md mb-4">
                        2
                      </div>
                      <div className="text-3xl mb-2" aria-hidden="true">⚙️</div>
                      <p className="text-lg font-bold text-gray-900 mb-1">We Extract &amp; Transform</p>
                      <p className="text-sm text-gray-600">Your webinar becomes blog posts, social content, emails, and lead magnets.</p>
                    </div>

                    {/* Connector 2 */}
                    <div className="hidden md:flex items-center flex-shrink-0 pt-10" aria-hidden="true">
                      <svg className="w-16 h-4 text-blue-300" viewBox="0 0 64 16" fill="none">
                        <line x1="0" y1="8" x2="52" y2="8" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" />
                        <path d="M52 2l10 6-10 6" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="flex md:hidden items-center justify-center" aria-hidden="true">
                      <svg className="w-4 h-12 text-blue-300" viewBox="0 0 16 48" fill="none">
                        <line x1="8" y1="0" x2="8" y2="36" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" />
                        <path d="M2 36l6 10 6-10" fill="currentColor" />
                      </svg>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center flex-1 max-w-[220px]">
                      <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold shadow-md mb-4">
                        3
                      </div>
                      <div className="text-3xl mb-2" aria-hidden="true">🚀</div>
                      <p className="text-lg font-bold text-gray-900 mb-1">Publish &amp; Grow</p>
                      <p className="text-sm text-gray-600">Content goes live across 6+ platforms. Leads come in on autopilot.</p>
                    </div>
                  </div>
                </div>
                <figcaption className="text-center text-sm text-gray-500 mt-3">
                  From recording to published content in 7-10 business days. You handle step 1 -- we handle the rest.
                </figcaption>
              </figure>

              {/* Section 4: Who Benefits */}
              <section id="who-benefits" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Who Benefits Most From Webinar Repurposing</h2>
                <p className="text-gray-700 mb-4">
                  Webinar repurposing works for anyone who records expert content. But three groups get the most out of it:
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Coaches and Consultants</h3>
                <p className="text-gray-700 mb-4">
                  You already run webinars to attract and convert clients. You already have recordings sitting in Zoom folders. And your biggest marketing bottleneck is time. You know you should post on LinkedIn and send emails and write blog posts, but you are busy coaching clients. Repurposing solves this. One webinar per month feeds your entire content calendar.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Course Creators</h3>
                <p className="text-gray-700 mb-4">
                  Your course modules are essentially webinars. Every lesson contains teachable moments that work as standalone social posts, blog articles, and lead magnets. Repurposing your course content (with adjustments so you are not giving away paid material for free) builds awareness and drives enrollments.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">B2B Service Providers</h3>
                <p className="text-gray-700 mb-4">
                  If you run thought leadership webinars, industry panels, or client education sessions, every recording is a content asset. Repurposing positions you as the authority in your space across LinkedIn, Google, YouTube, and email, the exact channels where B2B buyers do their research.
                </p>
              </section>

              {/* Section 5: Before vs. After */}
              <section id="before-after" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Before Repurposing vs. After Repurposing</h2>
                <p className="text-gray-700 mb-4">
                  Here is what changes when you start repurposing your webinars instead of letting them sit in a folder.
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Metric</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Before Repurposing</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">After Repurposing</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Content output per month', '2-4 posts (if you find time)', '14-75+ pieces from 1 webinar'],
                        ['Audience reach', '100-500 live attendees', 'Thousands across 6+ platforms'],
                        ['Content lifespan', '60 minutes (live event)', 'Months to years (SEO + evergreen)'],
                        ['Time spent creating content', '10-20 hours/week', '1 hour/month (send the recording)'],
                        ['SEO presence', 'Zero. Webinars are not indexed', 'Blog posts rank on Google + AI search'],
                        ['Lead generation', 'Only from live registrations', 'Ongoing from every platform'],
                        ['Email list growth', 'Stagnant between launches', 'Steady from lead magnets + content'],
                        ['LinkedIn consistency', 'Sporadic posting', '3-5 posts/week from repurposed content'],
                        ['Cost per content piece', 'Your time (worth $200-$500/hr)', '$10-$50/piece with a service'],
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
                  The math is simple. If you charge $200-$500 per hour for coaching, and DIY content creation takes 15 hours per week, that is $3,000-$7,500 per week in opportunity cost. A repurposing service at $750-$1,500 per month pays for itself before the first blog post ranks.
                </p>
                <p className="text-gray-700">
                  For a deeper look at the ROI calculation, including real client numbers, read our <Link href="/blog/webinar-repurposing-roi" className="text-blue-600 hover:text-blue-800 font-medium">webinar repurposing ROI analysis</Link>.
                </p>
              </section>

              {/* CTA 2 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 text-center my-10">
                <p className="text-gray-900 text-lg font-semibold mb-2">
                  You already have the content. You recorded the webinar.
                </p>
                <p className="text-gray-600 mb-4">
                  Let us turn it into 14-75+ pieces that generate leads while you coach clients.
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

              {/* Section 6: Cost */}
              <section id="cost" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What Webinar Repurposing Costs</h2>
                <p className="text-gray-700 mb-4">
                  There are two paths: do it yourself or hire a service. Here is the honest cost breakdown for each.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">DIY Cost: $50-$150/month + 15-25 Hours of Your Time</h3>
                <p className="text-gray-700 mb-4">
                  Tools like Otter.ai ($16.99/month), Canva Pro ($12.99/month), and CapCut (free) cover the basics. But the real cost is your time. Transcribing, writing blog posts, creating carousels, editing video clips, drafting emails: it adds up to 15-25 hours per webinar. If your hourly rate is $200+, the DIY approach costs more than a service.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Service Cost: $750-$1,500/month</h3>
                <p className="text-gray-700 mb-4">
                  At ContentRepurposeHub, plans start at $750/month for 14+ content pieces per webinar. Higher-tier plans (up to $1,500/month) include 50-75+ pieces, additional webinars per month, and advanced AI search optimization. Every piece is written in your voice, optimized for Google and AI search, and delivered ready to publish within 7-10 business days.
                </p>
                <p className="text-gray-700 mb-4">
                  For a full pricing comparison with other services and the DIY approach, read our guide on <Link href="/blog/content-repurposing-diy-vs-service" className="text-blue-600 hover:text-blue-800 font-medium">content repurposing: DIY vs. hiring a service</Link>.
                </p>
              </section>

              {/* Section 7: Timeline */}
              <section id="timeline" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How Long Webinar Repurposing Takes</h2>
                <p className="text-gray-700 mb-4">
                  <strong>If you do it yourself:</strong> Expect 15-25 hours spread over 1-3 weeks. Most coaches start strong, then get pulled back into client work and never finish. This is the number one reason DIY repurposing fails. Not skill, but time.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>If you hire a service:</strong> You send the recording, and all content is delivered within 7-10 business days. Your total time investment is roughly 1 hour: recording the webinar you were already going to give, plus a quick review of the finished content.
                </p>
                <p className="text-gray-700 mb-4">
                  Here is the typical timeline at ContentRepurposeHub:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li><strong>Day 1:</strong> You send us the webinar recording</li>
                  <li><strong>Days 2-3:</strong> We transcribe, analyze, and build the content map</li>
                  <li><strong>Days 4-7:</strong> We create all content pieces (blog, social, email, video clips)</li>
                  <li><strong>Days 8-9:</strong> SEO optimization for Google and AI search engines</li>
                  <li><strong>Day 10:</strong> Everything delivered to you, ready to publish</li>
                </ul>
                <p className="text-gray-700">
                  That means one webinar per month produces a full content calendar with zero hours spent writing, designing, or editing. You focus on coaching. We handle the content.
                </p>
              </section>

              {/* CTA 3 */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 md:p-8 text-center my-10">
                <p className="text-white text-lg font-semibold mb-2">
                  One webinar. 14-75+ content pieces. Every month.
                </p>
                <p className="text-blue-100 mb-4">
                  All optimized for Google and AI search engines. Starting at $750/month.
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
                      a: 'Webinar repurposing is the process of taking a recorded webinar and transforming it into multiple content formats: blog posts, LinkedIn posts, email sequences, lead magnets, video clips, social media graphics, and more. A single 60-minute webinar typically produces 14-75+ individual content pieces that can be distributed across every platform where your audience spends time.',
                    },
                    {
                      q: 'How many content pieces can you get from one webinar?',
                      a: 'A single 60-minute webinar can produce 14-75+ content pieces depending on the depth of the content and the service level. A basic package typically yields 14-25 pieces (blog post, LinkedIn posts, email sequence, video clips, quote cards). A comprehensive package produces 50-75+ pieces by adding podcast episodes, LinkedIn carousels, Twitter threads, newsletter editions, lead magnets, and YouTube content.',
                    },
                    {
                      q: 'How much does webinar repurposing cost?',
                      a: 'Professional webinar repurposing services typically cost between $750 and $1,500 per month. DIY repurposing costs $50-$150/month in tools but requires 15-25 hours of your time per webinar. At ContentRepurposeHub, plans start at $750/month for 14+ content pieces per webinar, including SEO optimization for both Google and AI search engines.',
                    },
                    {
                      q: 'Do I need a professional recording?',
                      a: 'No. A standard Zoom, Google Meet, or Riverside recording works perfectly. The content matters far more than production quality. As long as your audio is clear and your screen or camera is visible, any webinar recording can be repurposed. Most coaches record through Zoom and that is more than sufficient.',
                    },
                    {
                      q: 'Will the repurposed content sound like me?',
                      a: 'Yes, because the content starts from your actual words. Unlike AI-generated content that mimics a generic voice, webinar repurposing uses your transcript as the source material. Your stories, examples, phrases, and teaching style come through in every piece. A good repurposing service preserves your voice while optimizing the format for each platform.',
                    },
                    {
                      q: 'How long until I get content back?',
                      a: 'Most professional webinar repurposing services deliver within 7-10 business days after receiving your recording. At ContentRepurposeHub, you send your webinar recording and receive all content pieces within 7-10 business days, ready to publish across LinkedIn, your blog, email, YouTube, and social media.',
                    },
                    {
                      q: 'What platforms does repurposed content work on?',
                      a: 'Repurposed webinar content works on every major platform: LinkedIn (posts, carousels, articles), your blog or website (SEO-optimized articles), email (welcome sequences and newsletters), YouTube (full recordings and short clips), Instagram (Reels and quote cards), TikTok (short-form video clips), Twitter/X (threads and posts), and podcast platforms (Apple Podcasts, Spotify).',
                    },
                    {
                      q: 'Is webinar repurposing worth the investment?',
                      a: 'Yes. The average coach spends 10-20 hours preparing a single webinar that reaches 50-500 people once. Repurposing that same webinar into 14-75+ content pieces extends its reach to thousands across multiple platforms for months. At $750/month, that works out to roughly $10-$50 per content piece, far less than hiring a freelance writer, social media manager, and email copywriter separately.',
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Your Webinars Are Already Worth More Than You Think</h2>
                <p className="text-gray-700 mb-4">
                  Every webinar you have ever recorded is sitting on potential. A 60-minute recording contains enough insights, frameworks, and teaching moments to power your entire content strategy for weeks. The question is not whether you have enough content. You do. The question is whether you are going to keep letting it collect dust.
                </p>
                <p className="text-gray-700 mb-4">
                  Webinar repurposing is the fastest way to go from &quot;I know I should post more&quot; to actually having a consistent presence on LinkedIn, Google, YouTube, and email, without spending another 20 hours per week creating content from scratch.
                </p>
                <p className="text-gray-700">
                  Start with your most recent webinar. Follow the process above, or <a href="https://cal.com/contentrepurposehub/30min" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">book a free strategy call</a> and we will show you exactly what 14-75+ content pieces from your next webinar looks like.
                </p>
              </section>
            </div>
          </div>
        </article>

        {/* Reading Path Navigation */}
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <p className="text-sm text-gray-500 mb-2">Post 1 of 10 in our LLM-Optimized Webinar Repurposing Series</p>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Continue Reading</h3>
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link href="/blog/why-coaches-should-repurpose-webinars" className="text-blue-600 hover:text-blue-700 font-medium">
                Why Should Coaches Repurpose Their Webinars Instead of Creating New Content? &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <section className="py-16 gradient-bg px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stop Letting Your Webinars Sit in a Zoom Folder
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
