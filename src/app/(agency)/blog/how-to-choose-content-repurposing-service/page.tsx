import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Choose a Content Repurposing Service: 8 Questions to Ask Before You Hire',
  description: 'Not all content repurposing services are equal. Ask these 8 questions before hiring: Do they match your voice? Do they optimize for SEO AND AI search? What\'s the turnaround time? Here\'s how to evaluate repurposing services.',
  keywords: 'how to choose content repurposing service, content repurposing service, best repurposing service, hire content repurposing, repurposing service comparison, what to look for in a repurposing service',
  alternates: {
    canonical: 'https://contentrepurposehub.com/blog/how-to-choose-content-repurposing-service',
  },
  openGraph: {
    title: 'How to Choose a Content Repurposing Service: 8 Questions to Ask',
    description: '8 specific questions that separate good repurposing services from expensive disappointments. Plus red flags, price ranges, and what to expect.',
    url: 'https://contentrepurposehub.com/blog/how-to-choose-content-repurposing-service',
    siteName: 'ContentRepurposeHub',
    type: 'article',
    publishedTime: '2026-02-16T00:00:00.000Z',
    images: [
      {
        url: 'https://contentrepurposehub.com/api/og?title=How%20to%20Choose%20a%20Content%20Repurposing%20Service%3A%208%20Questions%20to%20Ask',
        width: 1200,
        height: 630,
        alt: 'How to Choose a Content Repurposing Service: 8 Questions to Ask',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Choose a Content Repurposing Service: 8 Questions',
    description: '8 questions to ask before hiring a content repurposing service. Red flags, price ranges, and what good answers look like.',
    images: ['https://contentrepurposehub.com/api/og?title=How%20to%20Choose%20a%20Content%20Repurposing%20Service%3A%208%20Questions%20to%20Ask'],
  },
}

export default function HowToChooseContentRepurposingService() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://contentrepurposehub.com/blog/how-to-choose-content-repurposing-service#article',
        headline: 'How to Choose a Content Repurposing Service: 8 Questions to Ask Before You Hire',
        description: 'Not all content repurposing services are equal. Ask these 8 questions before hiring to separate good services from expensive disappointments.',
        datePublished: '2026-02-16',
        dateModified: '2026-02-16',
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
        mainEntityOfPage: 'https://contentrepurposehub.com/blog/how-to-choose-content-repurposing-service',
        wordCount: 2400,
        articleSection: 'Content Marketing',
        keywords: ['content repurposing service', 'choose repurposing service', 'repurposing service comparison', 'content repurposing pricing'],
        about: [
          { '@type': 'Thing', name: 'Content Repurposing' },
          { '@type': 'Thing', name: 'Content Marketing Services' },
          { '@type': 'Thing', name: 'Service Evaluation' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://contentrepurposehub.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://contentrepurposehub.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'How to Choose a Content Repurposing Service' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much does a content repurposing service cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Content repurposing services typically cost between $500 and $3,000 per month. Budget services ($500-$750/month) usually deliver templated content with minimal customization. Mid-range services ($750-$1,500/month) offer voice-matched content with SEO optimization and 14-30+ pieces per webinar. Premium services ($1,500-$3,000/month) include AI search optimization, video editing, and 50-75+ content pieces.',
            },
          },
          {
            '@type': 'Question',
            name: 'How many content pieces should a repurposing service deliver per webinar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A good content repurposing service should deliver at least 14 content pieces per 60-minute webinar. This typically includes a full blog post, 5-10 social media posts, an email sequence, video clips, a carousel, and a lead magnet. Premium services deliver 50-75+ pieces per webinar including additional formats like newsletter editions, Twitter threads, and quote cards.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the typical turnaround time for content repurposing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Professional content repurposing services typically deliver within 7-10 business days after receiving your webinar recording. Some premium services offer faster turnaround of 5 business days. Be cautious of services promising 24-48 hour delivery. This usually means templated, low-quality output that does not match your voice.',
            },
          },
          {
            '@type': 'Question',
            name: 'Should a repurposing service optimize for AI search or just Google?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In 2026, a repurposing service should optimize for both Google and AI search engines (ChatGPT, Perplexity, Gemini). AI search optimization requires structured data like FAQ schema, direct-answer formatting, and topical authority building. A service that only optimizes for traditional Google SEO is missing a significant and growing traffic source.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I know if a repurposing service matches my voice?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ask for writing samples created from webinar content (not generic portfolio pieces). A good service will either create a voice profile from your existing content before starting or offer a trial piece to verify voice match. If every client\'s content reads the same way, the service is using templates rather than matching individual voices.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is it better to hire a repurposing service or do it myself?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If you have 15-25 hours per webinar to spare and enjoy content creation, DIY works. If your hourly rate as a coach exceeds $100/hour, outsourcing to a repurposing service is almost always more cost-effective. A service costing $750/month replaces 15-25 hours of work. That is an effective rate of $30-$50/hour for professional, optimized content.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do repurposing services require long-term contracts?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Some services require 3-6 month commitments, while others operate month-to-month. Month-to-month services are generally preferable because they earn your business every month. ContentRepurposeHub offers month-to-month plans with no long-term commitment required. If the content does not perform, you can cancel anytime.',
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
              <span className="text-gray-700">How to Choose a Content Repurposing Service</span>
            </nav>

            {/* Header */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Service Guide</span>
                <span className="text-xs text-gray-500">11 min read</span>
                <span className="text-xs text-gray-400">February 9, 2026</span>
                <span className="text-xs text-gray-500">&middot;</span>
                <a href="/about" className="text-xs text-gray-500 hover:text-blue-600 transition">By Marius Galatan</a>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                How to Choose a Content Repurposing Service: 8 Questions to Ask Before You Hire
              </h1>
              <p className="text-xl text-gray-600">
                Most repurposing services deliver generic content that does not sound like you and does not rank anywhere. Here is how to find one that actually works.
              </p>
            </header>

            {/* Table of Contents */}
            <div className="bg-gray-50 rounded-xl p-6 mb-10 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Table of Contents</h2>
              <ol className="space-y-2 text-blue-600">
                <li><a href="#why-it-matters" className="hover:text-blue-800">1. Why Choosing the Right Service Matters</a></li>
                <li><a href="#8-questions" className="hover:text-blue-800">2. The 8 Questions to Ask Before Hiring</a></li>
                <li><a href="#red-flags" className="hover:text-blue-800">3. Red Flags vs. Green Flags</a></li>
                <li><a href="#how-we-answer" className="hover:text-blue-800">4. How ContentRepurposeHub Answers Each Question</a></li>
                <li><a href="#price-ranges" className="hover:text-blue-800">5. Price Ranges and What You Get at Each Tier</a></li>
                <li><a href="#faq" className="hover:text-blue-800">6. Frequently Asked Questions</a></li>
              </ol>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">

              {/* Direct answer paragraph */}
              <p className="text-gray-700 mb-4 text-lg">
                <strong>The right content repurposing service should match your voice, optimize for both Google and AI search engines, deliver within 7-10 business days, and produce at least 14 content pieces per webinar.</strong> Most services only check one or two of those boxes. Here are 8 specific questions that separate good services from expensive disappointments.
              </p>

              {/* Section 1 */}
              <section id="why-it-matters" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Choosing the Right Service Matters</h2>
                <p className="text-gray-700 mb-4">
                  Bad repurposing is worse than no repurposing. When a service delivers content that does not sound like you, your audience notices. Generic blog posts with your name on them erode trust. Templated LinkedIn posts that read like every other coach&apos;s feed make you forgettable.
                </p>
                <p className="text-gray-700 mb-4">
                  And then there is the money. Content repurposing services range from $500 to $3,000 per month. At the low end, you might get templated output that requires hours of editing to make usable. At the high end, you might pay for premium branding and still get content that does not rank on Google or get cited by AI search engines.
                </p>
                <p className="text-gray-700 mb-4">
                  The cost of a bad hire is not the monthly fee. It is the months of missed leads, invisible content, and wasted webinar material. A coach paying $1,000/month for a service that delivers content nobody reads is losing $12,000/year plus the opportunity cost of the leads that content should have generated.
                </p>
                <p className="text-gray-700 mb-4">
                  The right service, on the other hand, turns your existing webinars into a lead-generating content machine. Every webinar becomes 14-75+ content pieces across every platform. Each piece sounds like you, ranks on Google, and gets cited by AI assistants. That is the difference between a cost and an investment.
                </p>
                <p className="text-gray-700">
                  For a full breakdown of DIY versus hiring a service, including time comparisons and ROI calculations, read our deep dive on <Link href="/blog/content-repurposing-diy-vs-service" className="text-blue-600 hover:text-blue-800 font-medium">content repurposing: DIY vs. hiring a service</Link>.
                </p>
              </section>

              {/* Section 2 */}
              <section id="8-questions" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The 8 Questions to Ask Before Hiring a Repurposing Service</h2>
                <p className="text-gray-700 mb-6">
                  These are the questions that reveal whether a service will actually deliver results. For each one, I will explain what a good answer looks like and what should make you walk away.
                </p>

                {/* Question 1 */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">1. Do You Match My Voice or Use Templates?</h3>
                <p className="text-gray-700 mb-4">
                  This is the question that matters most. Your content needs to sound like you: your phrases, your rhythm, your personality. If it reads like it could have been written for any coach in your industry, it defeats the purpose.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Good answer:</strong> &quot;We create a voice profile from your existing content before we write anything. We study your webinars, your website, and your social media to capture how you actually talk. You approve a sample before we go into production.&quot;
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Bad answer:</strong> &quot;We have proven templates that work for all coaching niches.&quot; Templates are the opposite of voice matching. If the service uses the same structure and phrasing for every client, the content will sound generic.
                </p>

                {/* Question 2 */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">2. How Many Content Pieces Per Webinar?</h3>
                <p className="text-gray-700 mb-4">
                  A 60-minute webinar contains enough raw material for 14-75+ content pieces depending on the level of service. Ask for a specific number and a breakdown of exactly which formats they deliver.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Good answer:</strong> &quot;We deliver 14+ pieces minimum, including a full blog post, 5+ social media posts, an email sequence, video clips, a carousel, and a lead magnet. Our premium tier delivers 50-75+ pieces.&quot;
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Bad answer:</strong> &quot;It depends&quot; or &quot;We create multiple content assets from your recording.&quot; Vague answers here usually mean low output. Get a number in writing.
                </p>

                {/* Question 3 */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">3. Do You Optimize for Google AND AI Search?</h3>
                <p className="text-gray-700 mb-4">
                  In 2026, optimizing only for Google is leaving traffic on the table. AI search engines like ChatGPT, Perplexity, and Gemini now drive significant traffic through citations. A good repurposing service should optimize blog content for both.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Good answer:</strong> &quot;We optimize every blog post with target keywords for Google and add FAQ schema, Article schema, direct-answer formatting, and structured data for AI search engines.&quot;
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Bad answer:</strong> &quot;We do basic SEO&quot; or blank stares when you mention AI search. If they do not know what FAQ schema or AI search optimization means, their content will not rank in either channel. For more on what AI search optimization involves, see our guide on <Link href="/blog/get-content-cited-by-ai" className="text-blue-600 hover:text-blue-800 font-medium">how to get your content cited by AI assistants</Link>.
                </p>

                {/* Question 4 */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">4. What Is the Turnaround Time?</h3>
                <p className="text-gray-700 mb-4">
                  You need to know when content will be ready so you can plan your publishing schedule. A reasonable turnaround for a full content package from one webinar is 7-10 business days.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Good answer:</strong> &quot;7-10 business days from receiving your recording. We send a preview for approval before finalizing.&quot;
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Bad answer:</strong> &quot;24-48 hours.&quot; Extremely fast turnaround usually means templated, low-quality output. Quality voice matching, SEO optimization, and thorough content creation take time. Also watch out for &quot;2-4 weeks&quot;; that is too slow to maintain a consistent publishing cadence.
                </p>

                {/* Question 5 */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">5. Can I See Samples or Past Work?</h3>
                <p className="text-gray-700 mb-4">
                  Every service should be able to show you real content they have created for real clients. Not hypothetical examples or generic portfolio pieces, but actual repurposed webinar content.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Good answer:</strong> &quot;Here are three blog posts we created from client webinars. Notice how each one sounds different. That is because we match each client&apos;s voice.&quot;
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Bad answer:</strong> &quot;We do not share client work due to confidentiality.&quot; While confidentiality is legitimate, a good service will have case studies, anonymized samples, or clients willing to serve as references. If they cannot show you anything, that is a red flag.
                </p>

                {/* Question 6 */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">6. What Formats Do You Deliver?</h3>
                <p className="text-gray-700 mb-4">
                  Get specific. &quot;Social media content&quot; is not a format. You need to know: Do they deliver LinkedIn text posts? Carousels as designed PDF slides? Vertical video clips with captions? Blog posts in WordPress-ready format? Email sequences in your platform&apos;s format?
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Good answer:</strong> A specific list of deliverables with format details: &quot;Blog post in Google Doc or HTML, LinkedIn text posts ready to paste, carousel as PDF slides, video clips as MP4 with burned-in captions, email sequence as subject lines + body copy.&quot;
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Bad answer:</strong> &quot;We deliver a content package.&quot; Vague deliverables lead to vague results. Pin down exactly what you are paying for.
                </p>

                {/* Question 7 */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">7. Is There a Minimum Commitment?</h3>
                <p className="text-gray-700 mb-4">
                  Some services lock you into 3-6 month contracts. Others operate month-to-month. Neither is inherently wrong, but you should know what you are signing up for.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Good answer:</strong> &quot;Month-to-month. We earn your business every month. If the content is not performing, you can cancel anytime.&quot;
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Bad answer:</strong> &quot;We require a 6-month commitment upfront.&quot; Long contracts protect the service, not you. A confident service does not need to lock you in. The exception is if they offer significant discounts for longer commitments, but even then, start with one month to verify quality.
                </p>

                {/* Question 8 */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">8. How Do Revisions Work?</h3>
                <p className="text-gray-700 mb-4">
                  Even good services sometimes miss the mark on a particular piece. You need to know: How many revision rounds are included? What is the turnaround for revisions? Is there a limit on what can be revised?
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Good answer:</strong> &quot;Two rounds of revisions included with every delivery. Revision turnaround is 2-3 business days. We want you to be 100% satisfied with every piece.&quot;
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Bad answer:</strong> &quot;Revisions are available at an additional cost&quot; or &quot;We do not do revisions. The content is final.&quot; A service that will not revise is a service that does not stand behind its work.
                </p>
              </section>

              {/* CTA 1 */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 md:p-8 text-center my-10">
                <p className="text-white text-lg font-semibold mb-2">
                  Know what to ask. Know what to expect.
                </p>
                <p className="text-blue-100 mb-4">
                  Book a call with us and we will answer all 8 questions, transparently, with samples.
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

              {/* Section 3 */}
              <section id="red-flags" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Red Flags vs. Green Flags When Evaluating Services</h2>
                <p className="text-gray-700 mb-4">
                  Beyond the 8 questions, here are the signals that tell you whether a service is worth your money:
                </p>
                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 border border-gray-200 font-semibold text-green-700">Green Flags</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-red-700">Red Flags</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Creates a voice profile before starting', 'Uses the same templates for every client'],
                        ['Shows real client work and results', 'Cannot share any samples or case studies'],
                        ['Specific deliverable list with format details', 'Vague promises of "content packages"'],
                        ['Optimizes for Google AND AI search', 'Only mentions basic SEO or no SEO at all'],
                        ['7-10 business day turnaround', 'Promises everything in 24 hours'],
                        ['Month-to-month commitment option', 'Requires 6+ months locked in upfront'],
                        ['2+ revision rounds included', 'Revisions cost extra or are not available'],
                        ['Clear pricing on their website', 'Will not share pricing until a sales call'],
                        ['Names specific content formats and counts', '"It depends" on every question'],
                        ['Transparent about what they can and cannot do', 'Promises unrealistic results without specifics'],
                      ].map((row, i) => (
                        <tr key={i}>
                          <td className="p-3 border border-gray-200 text-gray-700">{row[0]}</td>
                          <td className="p-3 border border-gray-200 text-gray-700">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 mb-4">
                  One red flag is not necessarily a dealbreaker. But three or more? Walk away. There are better options.
                </p>
              </section>

              {/* Section 4 */}
              <section id="how-we-answer" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How ContentRepurposeHub Answers Each Question</h2>
                <p className="text-gray-700 mb-4">
                  We wrote this guide, so it is only fair we answer our own questions. Here is how ContentRepurposeHub stacks up:
                </p>
                <div className="space-y-4 my-6">
                  {[
                    { q: '1. Voice matching or templates?', a: 'Voice matching. We build a voice profile from your webinars, website, and social media before writing a single word. You approve a sample piece before we go into production.' },
                    { q: '2. How many pieces per webinar?', a: '14-75+ depending on your plan. Our Starter plan delivers 14+ pieces per webinar. Growth delivers 30+. Authority delivers 75+.' },
                    { q: '3. Google AND AI search?', a: 'Both. Every blog post includes target keywords, FAQ schema, Article schema, BreadcrumbList schema, and direct-answer formatting optimized for ChatGPT, Perplexity, and Gemini.' },
                    { q: '4. Turnaround time?', a: '7-10 business days from receiving your recording. Preview sent for approval before finalizing.' },
                    { q: '5. Samples?', a: 'Yes. We walk through sample content on our strategy call and show you exactly what your webinar would become.' },
                    { q: '6. Formats delivered?', a: 'Blog posts (Google Doc or HTML), LinkedIn text posts (ready to paste), carousel slides (designed PDF), vertical video clips (MP4 with captions), email sequences (subject lines + body), lead magnets (designed PDF), newsletter editions, quote cards, and more depending on your plan.' },
                    { q: '7. Minimum commitment?', a: 'Month-to-month. No contracts. Cancel anytime. We earn your business every delivery.' },
                    { q: '8. Revisions?', a: 'Two rounds included with every delivery, 2-3 business day turnaround. We want you happy with every piece.' },
                  ].map((item, i) => (
                    <div key={i} className="border border-gray-200 rounded-lg p-4">
                      <p className="text-sm font-semibold text-blue-600 mb-1">{item.q}</p>
                      <p className="text-gray-700 text-sm">{item.a}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  For a full breakdown of what each plan includes, what it costs, and the ROI math, check our detailed article on <Link href="/blog/webinar-repurposing-roi" className="text-blue-600 hover:text-blue-800 font-medium">webinar repurposing ROI</Link>.
                </p>
              </section>

              {/* CTA 2 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 text-center my-10">
                <p className="text-gray-900 text-lg font-semibold mb-2">
                  Want to see how we would repurpose your webinar?
                </p>
                <p className="text-gray-600 mb-4">
                  Book a free call. We will walk through your most recent webinar and show you exactly what we would create.
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
              <section id="price-ranges" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Content Repurposing Service Price Ranges: What You Get at Each Tier</h2>
                <p className="text-gray-700 mb-4">
                  Repurposing services vary widely in price. Here is what the market looks like in 2026 and what you should expect at each level:
                </p>
                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Price Range</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">What You Typically Get</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Watch Out For</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['$500-$750/mo', 'Basic repurposing: a blog post, a few social posts, maybe an email. Templated formatting. Minimal SEO.', 'Generic voice, no AI optimization, low piece count (5-10 per webinar)'],
                        ['$750-$1,500/mo', 'Professional repurposing: voice-matched content, 14-30+ pieces per webinar, SEO optimization, multiple formats including video clips and carousels.', 'Some services at this tier still skip AI search optimization. Ask specifically.'],
                        ['$1,500-$3,000/mo', 'Premium repurposing: 50-75+ pieces per webinar, full Google + AI search optimization, video editing, designed assets, lead magnets, newsletter content, and dedicated strategist.', 'At this price, you should get everything. If they cannot list 50+ deliverables, you are overpaying.'],
                      ].map((row, i) => (
                        <tr key={i}>
                          <td className="p-3 border border-gray-200 font-medium text-gray-900 whitespace-nowrap">{row[0]}</td>
                          <td className="p-3 border border-gray-200 text-gray-700">{row[1]}</td>
                          <td className="p-3 border border-gray-200 text-gray-700">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>The math that matters:</strong> If your coaching rate is $200/hour and a repurposing service saves you 15-25 hours per webinar, the service needs to cost less than $3,000-$5,000/month to break even on time alone. At $750-$1,500/month, the ROI is substantial, even before counting the leads the content generates.
                </p>
                <p className="text-gray-700 mb-4">
                  ContentRepurposeHub plans start at $750/month for 14+ content pieces per webinar, with all Google and AI search optimization included. For detailed pricing and what each tier includes, see our <Link href="/blog/content-repurposing-cost-pricing" className="text-blue-600 hover:text-blue-800 font-medium">content repurposing cost and pricing guide</Link>.
                </p>
              </section>

              {/* Section 6: FAQ */}
              <section id="faq" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions About Choosing a Repurposing Service</h2>

                <div className="space-y-6">
                  {[
                    {
                      q: 'How much does a content repurposing service cost?',
                      a: 'Content repurposing services typically cost between $500 and $3,000 per month. Budget services ($500-$750/month) usually deliver templated content with minimal customization. Mid-range services ($750-$1,500/month) offer voice-matched content with SEO optimization and 14-30+ pieces per webinar. Premium services ($1,500-$3,000/month) include AI search optimization, video editing, and 50-75+ content pieces.',
                    },
                    {
                      q: 'How many content pieces should a repurposing service deliver per webinar?',
                      a: 'A good content repurposing service should deliver at least 14 content pieces per 60-minute webinar. This typically includes a full blog post, 5-10 social media posts, an email sequence, video clips, a carousel, and a lead magnet. Premium services deliver 50-75+ pieces per webinar including additional formats like newsletter editions, Twitter threads, and quote cards.',
                    },
                    {
                      q: 'What is the typical turnaround time for content repurposing?',
                      a: 'Professional content repurposing services typically deliver within 7-10 business days after receiving your webinar recording. Some premium services offer faster turnaround of 5 business days. Be cautious of services promising 24-48 hour delivery. This usually means templated, low-quality output that does not match your voice.',
                    },
                    {
                      q: 'Should a repurposing service optimize for AI search or just Google?',
                      a: 'In 2026, a repurposing service should optimize for both Google and AI search engines (ChatGPT, Perplexity, Gemini). AI search optimization requires structured data like FAQ schema, direct-answer formatting, and topical authority building. A service that only optimizes for traditional Google SEO is missing a significant and growing traffic source.',
                    },
                    {
                      q: 'How do I know if a repurposing service matches my voice?',
                      a: 'Ask for writing samples created from webinar content (not generic portfolio pieces). A good service will either create a voice profile from your existing content before starting or offer a trial piece to verify voice match. If every client\'s content reads the same way, the service is using templates rather than matching individual voices.',
                    },
                    {
                      q: 'Is it better to hire a repurposing service or do it myself?',
                      a: 'If you have 15-25 hours per webinar to spare and enjoy content creation, DIY works. If your hourly rate as a coach exceeds $100/hour, outsourcing to a repurposing service is almost always more cost-effective. A service costing $750/month replaces 15-25 hours of work. That is an effective rate of $30-$50/hour for professional, optimized content.',
                    },
                    {
                      q: 'Do repurposing services require long-term contracts?',
                      a: 'Some services require 3-6 month commitments, while others operate month-to-month. Month-to-month services are generally preferable because they earn your business every month. ContentRepurposeHub offers month-to-month plans with no long-term commitment required. If the content does not perform, you can cancel anytime.',
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Make the Right Choice the First Time</h2>
                <p className="text-gray-700 mb-4">
                  Switching repurposing services is expensive, not because of cancellation fees, but because of lost time. Every month with the wrong service is a month of webinar content that did not reach its potential.
                </p>
                <p className="text-gray-700 mb-4">
                  Use the 8 questions above on every service you evaluate. Check the green flags and red flags table. Ask for specific numbers, specific formats, and specific timelines. The right service will answer every question clearly because they have nothing to hide.
                </p>
                <p className="text-gray-700">
                  And if you want to see how ContentRepurposeHub would repurpose your most recent webinar, <a href="https://cal.com/contentrepurposehub/30min" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">book a free strategy call</a>. We will walk through your recording, show you the content plan, and answer every one of these 8 questions, with specifics.
                </p>
              </section>
            </div>
          </div>
        </article>

        {/* Reading Path Navigation */}
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <p className="text-sm text-gray-500 mb-2">This is Part 8 of our 10-part LLM-Optimized Content Series</p>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Continue Reading</h3>
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link href="/blog/get-content-cited-by-ai" className="text-blue-600 hover:text-blue-700 font-medium">
                &larr; How to Get Cited by AI Assistants
              </Link>
              <Link href="/blog/content-repurposing-cost-pricing" className="text-blue-600 hover:text-blue-700 font-medium sm:text-right">
                How Much Does Content Repurposing Cost? &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <section className="py-16 gradient-bg px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stop Guessing. Start With a Free Strategy Call.
            </h2>
            <p className="text-blue-100 text-lg mb-6">
              14-75+ content pieces from every webinar. Voice-matched. Google + AI optimized. Starting at $750/month.
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
