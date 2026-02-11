import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Content Repurposing Workflow for Coaches: A Step-by-Step System (With Templates)',
  description: 'A 5-stage content repurposing workflow built for coaches. Includes time estimates, tool recommendations, and templates. Turn one webinar into weeks of content systematically.',
  keywords: 'content repurposing workflow, content repurposing system coaches, webinar repurposing workflow, content repurposing process template, step by step content repurposing system',
  alternates: {
    canonical: 'https://contentrepurposehub.com/blog/content-repurposing-workflow-coaches',
  },
  openGraph: {
    title: 'The Content Repurposing Workflow for Coaches: A Step-by-Step System',
    description: 'A 5-stage repurposing workflow with time estimates, tools, and templates. Built for coaches who run webinars.',
    url: 'https://contentrepurposehub.com/blog/content-repurposing-workflow-coaches',
    siteName: 'ContentRepurposeHub',
    type: 'article',
    publishedTime: '2026-04-27T00:00:00.000Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Repurposing Workflow for Coaches (5-Stage System)',
    description: 'A repeatable 5-stage system with time estimates and tool recommendations for every step.',
  },
}

export default function ContentRepurposingWorkflowCoaches() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://contentrepurposehub.com/blog/content-repurposing-workflow-coaches#article',
        headline: 'The Content Repurposing Workflow for Coaches: A Step-by-Step System (With Templates)',
        description: 'A 5-stage content repurposing workflow built for coaches. Includes time estimates, tool recommendations, and templates for turning one webinar into weeks of content.',
        datePublished: '2026-04-27',
        dateModified: '2026-04-27',
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
        mainEntityOfPage: 'https://contentrepurposehub.com/blog/content-repurposing-workflow-coaches',
        wordCount: 2400,
        articleSection: 'Content Marketing',
        keywords: ['content repurposing workflow', 'content repurposing system', 'webinar repurposing workflow', 'content repurposing process template', 'content repurposing for coaches'],
        about: [
          { '@type': 'Thing', name: 'Content Repurposing' },
          { '@type': 'Thing', name: 'Content Marketing Workflow' },
          { '@type': 'Thing', name: 'Webinar Repurposing' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://contentrepurposehub.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://contentrepurposehub.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Content Repurposing Workflow for Coaches' },
        ],
      },
      {
        '@type': 'HowTo',
        name: 'Content Repurposing Workflow for Coaches',
        description: 'A 5-stage workflow for turning one webinar into weeks of content. Total time: 12-20 hours DIY, or 1 hour with a repurposing service.',
        totalTime: 'PT20H',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Record and Transcribe',
            text: 'Record your webinar and get a clean, timestamped transcript using tools like Descript or Otter.ai. Time estimate: 1-2 hours.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Extract and Categorize',
            text: 'Read through the transcript and pull out key insights, quotable moments, stories, data points, frameworks, and Q&A highlights into a content extraction sheet. Time estimate: 2-3 hours.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Transform Into Content Formats',
            text: 'Match each extracted asset to a content format: blog posts, LinkedIn posts, carousels, email sequences, video clips, quote cards, and lead magnets. Time estimate: 5-8 hours.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Optimize for Each Platform',
            text: 'Format each piece for its target platform. Add SEO elements to blog posts, captions to video clips, hooks to LinkedIn posts, and subject lines to emails. Time estimate: 2-4 hours.',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Schedule and Distribute',
            text: 'Load content into your scheduling tools and spread publication over 2-4 weeks for consistent visibility. Time estimate: 1-2 hours.',
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
              <span className="text-gray-700">Content Repurposing Workflow for Coaches</span>
            </nav>

            {/* Header */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Process Guide</span>
                <span className="text-xs text-gray-500">11 min read</span>
                <span className="text-xs text-gray-400">April 27, 2026</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                The Content Repurposing Workflow for Coaches: A Step-by-Step System (With Templates)
              </h1>
              <p className="text-xl text-gray-600">
                Most coaches repurpose content the same way: randomly. They pull a quote here, write a LinkedIn post there, maybe clip a video when they remember. No system. No consistency. No results. Here is a 5-stage workflow that actually works.
              </p>
            </header>

            {/* Key Takeaways */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg mb-8">
              <p className="text-sm font-semibold text-blue-800 mb-2">Key Takeaways</p>
              <ul className="text-sm text-gray-800 space-y-1">
                <li>- A repeatable 5-stage content repurposing workflow that turns 1 webinar into 20-30+ content pieces</li>
                <li>- Total DIY time: 12-20 hours per webinar (with specific time estimates per stage)</li>
                <li>- Tool recommendations for every stage, including free options</li>
                <li>- Clear trigger points for when it makes sense to outsource instead</li>
              </ul>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 rounded-xl p-6 mb-10 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Table of Contents</h2>
              <ol className="space-y-2 text-blue-600">
                <li><a href="#why-ad-hoc-fails" className="hover:text-blue-800">1. Why Ad-Hoc Repurposing Fails</a></li>
                <li><a href="#stage-1" className="hover:text-blue-800">2. Stage 1: Record and Transcribe (1-2 hours)</a></li>
                <li><a href="#stage-2" className="hover:text-blue-800">3. Stage 2: Extract and Categorize (2-3 hours)</a></li>
                <li><a href="#stage-3" className="hover:text-blue-800">4. Stage 3: Transform Into Content (5-8 hours)</a></li>
                <li><a href="#stage-4" className="hover:text-blue-800">5. Stage 4: Optimize for Each Platform (2-4 hours)</a></li>
                <li><a href="#stage-5" className="hover:text-blue-800">6. Stage 5: Schedule and Distribute (1-2 hours)</a></li>
                <li><a href="#batch-processing" className="hover:text-blue-800">7. How to Batch-Process for Efficiency</a></li>
                <li><a href="#outsourcing-triggers" className="hover:text-blue-800">8. When to Outsource: The 5 Trigger Points</a></li>
              </ol>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">

              {/* Section 1 */}
              <section id="why-ad-hoc-fails" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Ad-Hoc Repurposing Fails</h2>
                <p className="text-gray-700 mb-4">
                  You finish a webinar. You feel great about it. You tell yourself you will repurpose it this week.
                </p>
                <p className="text-gray-700 mb-4">
                  Then Monday hits. Client calls. Emails. Program delivery. By Wednesday the webinar recording is buried in a folder and you have posted nothing.
                </p>
                <p className="text-gray-700 mb-4">
                  Sound familiar? You are not alone. <strong>80% of webinar content never gets repurposed</strong>, according to industry data. And the main reason is not a lack of skill or tools. It is the absence of a system.
                </p>
                <p className="text-gray-700 mb-4">
                  Ad-hoc repurposing fails because it depends on motivation. A content repurposing workflow succeeds because it depends on a process. The same way you follow a coaching framework with clients, you need a framework for turning your webinars into content.
                </p>
                <p className="text-gray-700 mb-4">
                  Here is what a real content repurposing system looks like. Five stages. Clear time estimates. Specific tools. And a realistic picture of when it makes sense to hand the whole thing off.
                </p>
                <p className="text-gray-700">
                  This workflow is built specifically for coaches and consultants who run webinars (if that is you, you may also want to read our <Link href="/blog/webinar-content-strategy-coaches" className="text-blue-600 hover:text-blue-800 font-medium">webinar-first content strategy guide</Link> for the bigger picture of how this fits into your marketing).
                </p>
              </section>

              {/* Stage 1 */}
              <section id="stage-1" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Stage 1: Record and Transcribe</h2>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-semibold">Time: 1-2 hours</span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-sm font-medium">Difficulty: Easy</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Everything starts with the transcript. Not the recording. The transcript.
                </p>
                <p className="text-gray-700 mb-4">
                  A good transcript is the raw material for every single content piece you will create. Without it, you are rewatching your own webinar over and over, trying to find that one thing you said at minute 37. That is not a workflow. That is punishment.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>The process:</strong>
                </p>
                <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Record your webinar with both video and audio (Zoom, Riverside, or StreamYard all work)</li>
                  <li>Upload the recording to a transcription tool immediately after the session</li>
                  <li>Review the transcript for accuracy -- fix names, technical terms, and any garbled sections</li>
                  <li>Add timestamps at natural topic transitions (this saves hours later)</li>
                </ol>
                <p className="text-gray-700 mb-4">
                  <strong>Tool recommendations:</strong>
                </p>
                <div className="space-y-3 my-4">
                  {[
                    { tool: 'Descript', price: '$24/month', note: 'Best overall. Transcribes and lets you edit video by editing text.' },
                    { tool: 'Otter.ai', price: '$16.99/month', note: 'Great for transcription-only. Fast and accurate.' },
                    { tool: 'Rev', price: '$1.50/minute', note: 'Human-reviewed transcripts. Most accurate, but most expensive.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start bg-gray-50 p-3 rounded-lg">
                      <div>
                        <p className="text-gray-900 font-medium">{item.tool} <span className="text-gray-500 text-sm font-normal">({item.price})</span></p>
                        <p className="text-gray-600 text-sm">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
                  <p className="text-gray-800 font-medium">
                    Pro tip: Do not skip the timestamp step. Marking topic transitions in your transcript cuts your extraction time in Stage 2 by roughly 40%.
                  </p>
                </div>
              </section>

              {/* Stage 2 */}
              <section id="stage-2" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Stage 2: Extract and Categorize</h2>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-semibold">Time: 2-3 hours</span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-sm font-medium">Difficulty: Medium</span>
                </div>
                <p className="text-gray-700 mb-4">
                  This is the stage most people skip. And it is the reason their repurposed content feels random.
                </p>
                <p className="text-gray-700 mb-4">
                  Extraction means reading through your transcript with a specific lens. You are not reading for enjoyment. You are mining for content assets. There are six categories:
                </p>
                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Category</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">What to Look For</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Becomes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Key insights', 'Original ideas, contrarian takes, aha moments', 'LinkedIn posts, Twitter threads, quote cards'],
                        ['Frameworks/processes', 'Step-by-step methods, models, systems you taught', 'Blog posts, carousels, lead magnets'],
                        ['Stories', 'Client examples, personal anecdotes, case studies', 'LinkedIn posts, email sequences, video clips'],
                        ['Data points', 'Statistics, results, specific numbers you cited', 'Quote cards, carousel slides, blog sections'],
                        ['Quotable moments', 'Sentences that stand alone as wisdom', 'Quote cards, social posts, email subject lines'],
                        ['Q&A highlights', 'Best questions and your answers from the live session', 'Newsletter editions, FAQ content, blog posts'],
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
                  Create a simple spreadsheet or Notion database. One row per extracted asset. Columns for the category, the raw text, the timestamp, and which content format it maps to.
                </p>
                <p className="text-gray-700 mb-4">
                  A typical 60-minute webinar yields <strong>15-25 individual content assets</strong> across these six categories. That is not a guess. We have done this across hundreds of webinars. For a detailed look at just how far one webinar can stretch, see our <Link href="/blog/webinar-content-pieces-breakdown" className="text-blue-600 hover:text-blue-800 font-medium">breakdown of 75+ content pieces from a single webinar</Link>.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Tool recommendations:</strong>
                </p>
                <div className="space-y-3 my-4">
                  {[
                    { tool: 'Notion', price: 'Free tier available', note: 'Best for a content database. Tag, filter, and sort extracted assets.' },
                    { tool: 'Google Sheets', price: 'Free', note: 'Simple and shareable. Works fine if you prefer spreadsheets.' },
                    { tool: 'Airtable', price: 'Free tier available', note: 'More powerful than Sheets for content pipelines. Good Kanban view.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start bg-gray-50 p-3 rounded-lg">
                      <div>
                        <p className="text-gray-900 font-medium">{item.tool} <span className="text-gray-500 text-sm font-normal">({item.price})</span></p>
                        <p className="text-gray-600 text-sm">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA 1 */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 md:p-8 text-center my-10">
                <p className="text-white text-lg font-semibold mb-2">
                  Want this workflow done for you?
                </p>
                <p className="text-blue-100 mb-4">
                  We handle all 5 stages and deliver 14-75+ content pieces from every webinar. Starting at $750/month.
                </p>
                <a
                  href="https://contentrepurposehub.com/#pricing"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  See Plans &amp; Pricing &rarr;
                </a>
              </div>

              {/* Stage 3 */}
              <section id="stage-3" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Stage 3: Transform Into Content</h2>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-semibold">Time: 5-8 hours</span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-sm font-medium">Difficulty: Hard</span>
                </div>
                <p className="text-gray-700 mb-4">
                  This is where the real work happens. And where most DIY repurposers stall out.
                </p>
                <p className="text-gray-700 mb-4">
                  You have your extracted assets from Stage 2. Now you turn each one into a finished content piece. The key word is <em>finished</em> -- not a rough draft sitting in Google Docs. A piece ready to publish.
                </p>
                <p className="text-gray-700 mb-4">
                  Work in this order (it is deliberate):
                </p>
                <ol className="list-decimal pl-6 text-gray-700 space-y-3 mb-6">
                  <li>
                    <strong>Blog post first (2-3 hours).</strong> The blog post is your anchor piece. It uses the most extracted material and becomes the reference for everything else. Target a keyword, add proper headings, write an SEO-optimized meta description. For more detail on this process, see our <Link href="/blog/webinar-repurposing-guide" className="text-blue-600 hover:text-blue-800 font-medium">complete webinar repurposing guide</Link>.
                  </li>
                  <li>
                    <strong>LinkedIn posts second (1-2 hours).</strong> Take your extracted insights and stories and format them as LinkedIn text posts. Hook in the first line. Value in the body. Takeaway at the end. Aim for 5-8 posts per webinar.
                  </li>
                  <li>
                    <strong>LinkedIn carousel third (45-60 minutes).</strong> Pick your best framework or process and design it as 8-12 slides. Slide 1 is the hook. One idea per slide. CTA on the last slide.
                  </li>
                  <li>
                    <strong>Email sequence fourth (1-2 hours).</strong> Build a 3-5 email nurture sequence from your best insights. Each email delivers one specific takeaway from the webinar.
                  </li>
                  <li>
                    <strong>Video clips fifth (1-2 hours).</strong> Go back to the recording and cut 3-5 short clips at the timestamps you marked in Stage 1. Add captions. 30-60 seconds each.
                  </li>
                  <li>
                    <strong>Quote cards and other assets last (30-45 minutes).</strong> Design 3-5 quote cards from your best one-liners. Fast to create and high on shareability.
                  </li>
                </ol>
                <p className="text-gray-700 mb-4">
                  <strong>Tool recommendations:</strong>
                </p>
                <div className="space-y-3 my-4">
                  {[
                    { tool: 'Google Docs / Notion', price: 'Free', note: 'For blog posts and email drafts.' },
                    { tool: 'Canva', price: 'Free / $12.99/month Pro', note: 'For carousels, quote cards, and thumbnails.' },
                    { tool: 'CapCut', price: 'Free', note: 'For cutting and captioning video clips.' },
                    { tool: 'Descript', price: '$24/month', note: 'For video editing by editing the transcript text. Surprisingly fast.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start bg-gray-50 p-3 rounded-lg">
                      <div>
                        <p className="text-gray-900 font-medium">{item.tool} <span className="text-gray-500 text-sm font-normal">({item.price})</span></p>
                        <p className="text-gray-600 text-sm">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700">
                  The 5-8 hour estimate assumes you are reasonably fast at writing and basic design. If you are not, double it. Be honest with yourself here -- this is the stage that separates coaches who stick with a content repurposing workflow from those who abandon it after one try.
                </p>
              </section>

              {/* Stage 4 */}
              <section id="stage-4" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Stage 4: Optimize for Each Platform</h2>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-semibold">Time: 2-4 hours</span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-sm font-medium">Difficulty: Medium</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Here is a mistake that kills repurposed content: posting the same thing everywhere with zero adaptation.
                </p>
                <p className="text-gray-700 mb-4">
                  A LinkedIn post is not an Instagram caption. A blog post written for Google needs different formatting than a newsletter sent to your email list. Each platform has its own rules.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Platform optimization checklist:</strong>
                </p>
                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Platform</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Optimization</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Blog post', 'Target keyword in title, H1, first 100 words. Meta description under 160 characters. Internal links to 2-3 related posts. Alt text on images.'],
                        ['LinkedIn text posts', 'Strong hook in first line (this shows above the fold). Short paragraphs. No external links in the post body (put them in comments).'],
                        ['LinkedIn carousel', 'Branded slides. One idea per slide. Large readable text. CTA on final slide. Save as PDF.'],
                        ['Email sequence', 'Compelling subject lines. One clear CTA per email. Personal tone. Preview text optimized.'],
                        ['Video clips', 'Captions burned in (85% watch on mute). Vertical format (9:16). Hook in first 3 seconds. 30-60 seconds max.'],
                        ['Quote cards', 'Brand colors and fonts. Legible on mobile. Your name/handle visible. Square (1:1) or vertical (4:5) format.'],
                      ].map((row, i) => (
                        <tr key={i}>
                          <td className="p-3 border border-gray-200 font-medium text-gray-900 whitespace-nowrap">{row[0]}</td>
                          <td className="p-3 border border-gray-200 text-gray-700">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Tool recommendations:</strong>
                </p>
                <div className="space-y-3 my-4">
                  {[
                    { tool: 'Yoast / RankMath', price: 'Free tier available', note: 'For blog post SEO. Shows you what to fix before publishing.' },
                    { tool: 'Hemingway Editor', price: 'Free', note: 'For readability. Keeps your writing clear and scannable.' },
                    { tool: 'Grammarly', price: 'Free / $12/month', note: 'Catches errors across all written content.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start bg-gray-50 p-3 rounded-lg">
                      <div>
                        <p className="text-gray-900 font-medium">{item.tool} <span className="text-gray-500 text-sm font-normal">({item.price})</span></p>
                        <p className="text-gray-600 text-sm">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700">
                  This stage is tedious. No way around it. But it is the difference between repurposed content that performs and repurposed content that gets ignored.
                </p>
              </section>

              {/* Stage 5 */}
              <section id="stage-5" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Stage 5: Schedule and Distribute</h2>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-semibold">Time: 1-2 hours</span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-sm font-medium">Difficulty: Easy</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Do not publish everything at once. That is a common beginner mistake.
                </p>
                <p className="text-gray-700 mb-4">
                  One webinar should fuel 2-4 weeks of content. Spread it out. Here is a sample distribution schedule from a single 60-minute webinar:
                </p>
                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Week</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Content to Publish</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Week 1', 'Blog post, 2 LinkedIn posts, Email 1 of sequence, 2 video clips'],
                        ['Week 2', '2 LinkedIn posts, LinkedIn carousel, Email 2-3 of sequence, 2 quote cards'],
                        ['Week 3', '2 LinkedIn posts, Newsletter edition, Email 4-5 of sequence, 1 video clip'],
                        ['Week 4', '2 LinkedIn posts, 2 quote cards, Newsletter edition (from Q&A)'],
                      ].map((row, i) => (
                        <tr key={i}>
                          <td className="p-3 border border-gray-200 font-medium text-gray-900 whitespace-nowrap">{row[0]}</td>
                          <td className="p-3 border border-gray-200 text-gray-700">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 mb-4">
                  That is 20-25 individual content pieces from one webinar, published consistently over a month. Your audience sees you everywhere. The algorithm rewards your consistency. And you did zero content creation from scratch after the initial workflow.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Tool recommendations:</strong>
                </p>
                <div className="space-y-3 my-4">
                  {[
                    { tool: 'Buffer', price: 'Free / $6/month per channel', note: 'Simple scheduling for LinkedIn, Twitter, Instagram.' },
                    { tool: 'Typefully', price: '$12.50/month', note: 'Best for LinkedIn and Twitter scheduling specifically. Clean interface.' },
                    { tool: 'ConvertKit', price: 'Free up to 10,000 subscribers', note: 'For email sequences and newsletters. Built for creators.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start bg-gray-50 p-3 rounded-lg">
                      <div>
                        <p className="text-gray-900 font-medium">{item.tool} <span className="text-gray-500 text-sm font-normal">({item.price})</span></p>
                        <p className="text-gray-600 text-sm">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Total Time Summary */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 my-10">
                <p className="text-gray-900 text-lg font-semibold mb-4">Total Workflow Time: The Reality Check</p>
                <div className="space-y-2 mb-4">
                  {[
                    { stage: 'Stage 1: Record and Transcribe', time: '1-2 hours' },
                    { stage: 'Stage 2: Extract and Categorize', time: '2-3 hours' },
                    { stage: 'Stage 3: Transform Into Content', time: '5-8 hours' },
                    { stage: 'Stage 4: Optimize for Each Platform', time: '2-4 hours' },
                    { stage: 'Stage 5: Schedule and Distribute', time: '1-2 hours' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                      <span className="text-gray-700">{item.stage}</span>
                      <span className="text-gray-900 font-semibold">{item.time}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center py-2 border-t-2 border-gray-300">
                    <span className="text-gray-900 font-bold">Total</span>
                    <span className="text-blue-600 font-bold text-lg">12-20 hours per webinar</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  That is 12-20 hours of focused content work for 20-30+ finished pieces. For context, creating that many pieces from scratch would take 40-60+ hours.
                </p>
              </div>

              {/* Batch Processing */}
              <section id="batch-processing" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How to Batch-Process for Efficiency</h2>
                <p className="text-gray-700 mb-4">
                  The fastest way through this workflow is batching. Do not bounce between stages. Work through each stage completely before moving to the next.
                </p>
                <p className="text-gray-700 mb-4">
                  Here is a realistic schedule for a coach batching the entire workflow into 3 focused sessions:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-4">
                  <li>
                    <strong>Session 1 (Tuesday, 2 hours):</strong> Complete Stages 1-2. Get the transcript cleaned and all assets extracted into your spreadsheet. This is your setup day.
                  </li>
                  <li>
                    <strong>Session 2 (Thursday, 5-6 hours):</strong> Complete Stage 3. Write the blog post, LinkedIn posts, email sequence, and design the carousel. This is your heavy production day. Block the morning. Protect the time.
                  </li>
                  <li>
                    <strong>Session 3 (Friday, 3-4 hours):</strong> Complete Stages 4-5. Optimize everything for each platform, cut the video clips, and load everything into your scheduling tools. By Friday afternoon, you have a month of content queued.
                  </li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Three sessions. About 10-12 hours total. A month of content done.
                </p>
                <p className="text-gray-700">
                  But here is the thing -- that is 10-12 hours on top of running your coaching business. On top of client calls, program delivery, sales conversations, and the admin work that never ends. Which brings us to the most important section of this guide.
                </p>
              </section>

              {/* CTA 2 */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 md:p-8 text-center my-10">
                <p className="text-white text-lg font-semibold mb-2">
                  Would you rather spend those 12-20 hours coaching clients?
                </p>
                <p className="text-blue-100 mb-4">
                  We run this entire workflow for you. Send us the recording. Get back 14-75+ finished pieces.
                </p>
                <a
                  href="https://cal.com/contentrepurposehub/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Book a Free Strategy Call &rarr;
                </a>
              </div>

              {/* When to Outsource */}
              <section id="outsourcing-triggers" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">When to Outsource: The 5 Trigger Points</h2>
                <p className="text-gray-700 mb-4">
                  Not every coach needs to outsource. If you are early in your business, have time to learn, and enjoy content creation, DIY works. For a deeper comparison, read our <Link href="/blog/content-repurposing-diy-vs-service" className="text-blue-600 hover:text-blue-800 font-medium">full DIY vs. done-for-you breakdown</Link>.
                </p>
                <p className="text-gray-700 mb-4">
                  But there are clear signals that the workflow has outgrown you. If any of these are true, it is time to hand it off:
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Trigger 1: Your hourly rate exceeds $150</h3>
                <p className="text-gray-700 mb-4">
                  The math is simple. If you bill $200/hour and spend 15 hours repurposing a webinar, that is $3,000 in opportunity cost. A repurposing service costs $750-$1,500/month. You come out ahead every time.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Trigger 2: You have skipped repurposing 2 webinars in a row</h3>
                <p className="text-gray-700 mb-4">
                  One missed webinar is normal. Life happens. Two in a row means the system is not sustainable for you. Every unrepurposed webinar is content that vanishes. If the pattern has started, it will not fix itself.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Trigger 3: Quality is slipping</h3>
                <p className="text-gray-700 mb-4">
                  You are rushing through Stage 3. Blog posts are thin. LinkedIn posts feel repetitive. Video clips have no captions. When you are cutting corners to save time, the content stops working. Bad repurposed content is worse than no content -- it actively hurts your brand.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Trigger 4: You are doing 2+ webinars per month</h3>
                <p className="text-gray-700 mb-4">
                  One webinar per month at 12-20 hours of repurposing is manageable (barely). Two webinars per month means 24-40 hours. That is a part-time job. At that volume, outsourcing is not a luxury -- it is a necessity.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Trigger 5: You want SEO and AI search optimization</h3>
                <p className="text-gray-700 mb-4">
                  Basic repurposing -- posting clips and writing LinkedIn posts -- you can learn. But optimizing blog posts for Google and AI search engines like ChatGPT, Perplexity, and Gemini requires specialized knowledge. Keyword research. Schema markup. Internal linking strategy. If you want your repurposed content to drive organic traffic for years (not weeks), professional optimization makes a measurable difference.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
                  <p className="text-gray-800 font-medium">
                    Here is an honest take: if 2 or more of these triggers apply to you, you will save more money outsourcing than you will save doing it yourself. The time you reclaim goes straight back into revenue-generating activities.
                  </p>
                </div>
              </section>

              {/* Template Section */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Your Content Repurposing Workflow Template</h2>
                <p className="text-gray-700 mb-4">
                  Here is a simplified version of the workflow you can copy into Notion, Google Sheets, or Trello. Use it as your repeatable process for every webinar.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6">
                  <p className="text-gray-900 font-semibold mb-3">Repurposing Workflow Checklist</p>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">STAGE 1: Record + Transcribe (Day 1)</p>
                      <ul className="text-gray-700 space-y-1 pl-4">
                        <li>[ ] Record webinar with video + audio</li>
                        <li>[ ] Upload to transcription tool</li>
                        <li>[ ] Review and clean transcript</li>
                        <li>[ ] Add timestamps at topic transitions</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">STAGE 2: Extract + Categorize (Day 1-2)</p>
                      <ul className="text-gray-700 space-y-1 pl-4">
                        <li>[ ] Read transcript and highlight assets</li>
                        <li>[ ] Log each asset: category, raw text, timestamp</li>
                        <li>[ ] Map each asset to a content format</li>
                        <li>[ ] Count total: aim for 15-25 assets minimum</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">STAGE 3: Transform (Days 3-4)</p>
                      <ul className="text-gray-700 space-y-1 pl-4">
                        <li>[ ] Write blog post (1,500-2,500 words)</li>
                        <li>[ ] Write 5-8 LinkedIn text posts</li>
                        <li>[ ] Design 1 LinkedIn carousel (8-12 slides)</li>
                        <li>[ ] Write 3-5 email sequence</li>
                        <li>[ ] Cut 3-5 video clips (30-60 sec each)</li>
                        <li>[ ] Design 3-5 quote cards</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">STAGE 4: Optimize (Day 5)</p>
                      <ul className="text-gray-700 space-y-1 pl-4">
                        <li>[ ] SEO-optimize blog post (keyword, meta, headings, internal links)</li>
                        <li>[ ] Add hooks to LinkedIn posts (check first line)</li>
                        <li>[ ] Add captions to all video clips</li>
                        <li>[ ] Write email subject lines and preview text</li>
                        <li>[ ] Final proofread on all written content</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">STAGE 5: Schedule + Distribute (Day 5)</p>
                      <ul className="text-gray-700 space-y-1 pl-4">
                        <li>[ ] Publish blog post</li>
                        <li>[ ] Schedule LinkedIn posts (spread over 4 weeks)</li>
                        <li>[ ] Schedule video clips across platforms</li>
                        <li>[ ] Set up email sequence in your email tool</li>
                        <li>[ ] Schedule newsletters</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  Copy this checklist. Run it after every webinar. Within 2-3 cycles, the process becomes second nature and your time per cycle drops. The first time through is always the slowest.
                </p>
              </section>

              {/* Conclusion */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The System Is the Strategy</h2>
                <p className="text-gray-700 mb-4">
                  Most coaches do not have a content problem. They have a systems problem.
                </p>
                <p className="text-gray-700 mb-4">
                  You already create high-value content every time you run a webinar. The expertise is there. The raw material is there. What is missing is a repeatable process to turn that raw material into 20-30 finished content pieces that work for you across every platform.
                </p>
                <p className="text-gray-700 mb-4">
                  This 5-stage workflow gives you that process. Follow it consistently and you will never stare at a blank screen wondering what to post. Your webinars become your content engine.
                </p>
                <p className="text-gray-700 mb-4">
                  And if the 12-20 hours per webinar is more than your schedule can absorb -- that is a legitimate business decision, not a failure. <a href="https://cal.com/contentrepurposehub/30min" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Book a free strategy call</a> and we will walk you through exactly how we run this workflow for coaches like you. You send the recording. We handle the rest.
                </p>
                <p className="text-gray-700">
                  Either way -- DIY or done-for-you -- the worst thing you can do is nothing. Your webinars are too valuable to leave sitting in a folder.
                </p>
              </section>

            </div>
          </div>
        </article>

        {/* Reading Path Navigation */}
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Continue Reading</h3>
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link href="/blog/webinar-evergreen-seo-content" className="text-blue-600 hover:text-blue-700 font-medium">
                &larr; How to Turn Webinars Into Evergreen SEO Assets
              </Link>
              <Link href="/blog/webinar-repurposing-roi" className="text-blue-600 hover:text-blue-700 font-medium sm:text-right">
                The ROI of Webinar Repurposing &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <section className="py-16 gradient-bg px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stop Letting Your Webinars Go to Waste
            </h2>
            <p className="text-blue-100 text-lg mb-6">
              14-75+ content pieces from every webinar. All 5 stages handled. Starting at $750/month.
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
            <p className="text-blue-200 text-sm mt-4">
              No contracts. 30-day guarantee. Cancel anytime.
            </p>
            </div>
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
