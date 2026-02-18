import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Turn Your Webinar Into 30 Days of Social Media Content (LinkedIn, Instagram, and More)',
  description: 'Learn how to repurpose a single webinar into 30 days of social media content for LinkedIn, Instagram, Twitter/X, YouTube Shorts, and TikTok. Platform-specific formats, a ready-to-use content calendar, and character limits included.',
  keywords: 'webinar to social media content, repurpose webinar for LinkedIn, webinar clips for social media, turn webinar into LinkedIn posts, webinar to Instagram Reels, webinar social media calendar, repurpose webinar for social media',
  alternates: {
    canonical: 'https://contentrepurposehub.com/blog/webinar-to-social-media-content',
  },
  openGraph: {
    title: 'How to Turn Your Webinar Into 30 Days of Social Media Content',
    description: 'A step-by-step tutorial for turning one webinar into a full month of LinkedIn, Instagram, Twitter/X, YouTube Shorts, and TikTok content.',
    url: 'https://contentrepurposehub.com/blog/webinar-to-social-media-content',
    siteName: 'ContentRepurposeHub',
    type: 'article',
    publishedTime: '2026-02-13T00:00:00.000Z',
    images: [
      {
        url: 'https://contentrepurposehub.com/api/og?title=How%20to%20Turn%20Your%20Webinar%20Into%2030%20Days%20of%20Social%20Media%20Content',
        width: 1200,
        height: 630,
        alt: 'How to Turn Your Webinar Into 30 Days of Social Media Content',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turn 1 Webinar Into 30 Days of Social Media Content',
    description: 'Platform-by-platform guide for LinkedIn, Instagram, Twitter/X, YouTube Shorts, and TikTok. Includes a ready-to-use 30-day calendar.',
    images: ['https://contentrepurposehub.com/api/og?title=How%20to%20Turn%20Your%20Webinar%20Into%2030%20Days%20of%20Social%20Media%20Content'],
  },
}

export default function WebinarToSocialMediaContent() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://contentrepurposehub.com/blog/webinar-to-social-media-content#article',
        headline: 'How to Turn Your Webinar Into 30 Days of Social Media Content (LinkedIn, Instagram, and More)',
        description: 'Learn how to repurpose a single webinar into 30 days of social media content for LinkedIn, Instagram, Twitter/X, YouTube Shorts, and TikTok.',
        datePublished: '2026-02-13',
        dateModified: '2026-02-13',
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
        mainEntityOfPage: 'https://contentrepurposehub.com/blog/webinar-to-social-media-content',
        wordCount: 2100,
        articleSection: 'Content Marketing',
        keywords: [
          'webinar to social media content',
          'repurpose webinar for LinkedIn',
          'webinar clips for social media',
          'turn webinar into LinkedIn posts',
          'webinar to Instagram Reels',
          'social media content calendar',
        ],
        about: [
          { '@type': 'Thing', name: 'Social Media Marketing' },
          { '@type': 'Thing', name: 'Webinar Repurposing' },
          { '@type': 'Thing', name: 'Content Repurposing' },
          { '@type': 'Thing', name: 'LinkedIn Marketing' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://contentrepurposehub.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://contentrepurposehub.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Webinar to Social Media Content' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How many social media posts can you get from one webinar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A single 60-minute webinar can produce 30 or more social media posts across platforms. This typically includes 8-10 LinkedIn posts, 5-7 Instagram posts or Reels, 3-4 Twitter/X threads, 4-5 YouTube Shorts or TikTok clips, 2-3 LinkedIn carousels, and several quote graphics.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the best social media platform for repurposed webinar content?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For coaches and consultants, LinkedIn is the highest-ROI platform for repurposed webinar content. LinkedIn text posts, carousels, and video clips reach professional audiences who are most likely to become clients. Instagram and YouTube Shorts are strong secondary platforms for building broader visibility.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do you turn a webinar into LinkedIn posts?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Start by transcribing your webinar and identifying key insights, frameworks, stories, and quotable moments. Each one becomes a standalone LinkedIn post. Structure them with a hook on the first line, the insight or story in the body, and a takeaway or question at the end. One webinar typically yields 8-10 LinkedIn text posts plus 2-3 carousels.',
            },
          },
          {
            '@type': 'Question',
            name: 'What length should webinar clips be for social media?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For Instagram Reels and TikTok, aim for 30-60 seconds. YouTube Shorts must be under 60 seconds. LinkedIn video performs best between 30-90 seconds. Always add captions since 85 percent of social media users watch video on mute.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I repurpose one webinar for an entire month of social media?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. A single 60-minute webinar contains enough material for a full 30-day content calendar. By varying the format (text posts, carousels, video clips, quote graphics, threads) and spreading content across platforms, you can maintain a consistent daily posting schedule for an entire month.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need special tools to repurpose a webinar into social media content?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Basic tools include a transcription service (Otter.ai or Descript), a video editor for clips (CapCut or Descript), a design tool for carousels and quote graphics (Canva), and a scheduling tool (Buffer or Typefully). However, a done-for-you repurposing service can handle all of this while you focus on running your business.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between repurposing and cross-posting?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Cross-posting means sharing the identical content on multiple platforms. Repurposing means adapting the core idea to fit each platform natively -- respecting character limits, preferred formats, audience expectations, and algorithmic preferences. Repurposed content outperforms cross-posted content because each piece is optimized for where it appears.',
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
              <span className="text-gray-700">Webinar to Social Media Content</span>
            </nav>

            {/* Header */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">How-To Tutorial</span>
                <span className="text-xs text-gray-500">11 min read</span>
                <span className="text-xs text-gray-400">March 30, 2026</span>
                <span className="text-xs text-gray-500">&middot;</span>
                <a href="/about" className="text-xs text-gray-500 hover:text-blue-600 transition">By Marius Galatan</a>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                How to Turn Your Webinar Into 30 Days of Social Media Content (LinkedIn, Instagram, and More)
              </h1>
              <p className="text-xl text-gray-600">
                You delivered a packed webinar full of frameworks, insights, and stories. Now it is sitting in a folder while you scramble to figure out what to post on LinkedIn tomorrow. Here is how to turn that single recording into a full month of social media content -- platform by platform, format by format.
              </p>
            </header>

            {/* Key Takeaways */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Key Takeaways</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">--</span>
                  <span>A single 60-minute webinar contains enough material for 30+ social media posts across all major platforms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">--</span>
                  <span>LinkedIn is the highest-ROI platform for coaches and consultants repurposing webinar content.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">--</span>
                  <span>Repurposing is not cross-posting. Each platform requires native formatting to perform well.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-0.5">--</span>
                  <span>The extraction process starts with a transcript and involves identifying five content types: quotable moments, key insights, stories, frameworks, and Q&amp;A answers.</span>
                </li>
              </ul>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 rounded-xl p-6 mb-10 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Table of Contents</h2>
              <ol className="space-y-2 text-blue-600">
                <li><a href="#content-goldmine" className="hover:text-blue-800">1. Why Your Webinar Is a Social Media Content Goldmine</a></li>
                <li><a href="#extraction-process" className="hover:text-blue-800">2. The Extraction Process: Identifying What to Repurpose</a></li>
                <li><a href="#linkedin" className="hover:text-blue-800">3. LinkedIn: Text Posts, Carousels, Articles, and Video Clips</a></li>
                <li><a href="#instagram" className="hover:text-blue-800">4. Instagram and Reels: What Works and What to Repurpose</a></li>
                <li><a href="#twitter" className="hover:text-blue-800">5. Twitter/X Threads From Webinar Talking Points</a></li>
                <li><a href="#youtube-tiktok" className="hover:text-blue-800">6. YouTube Shorts and TikTok: Pulling the Right Clips</a></li>
                <li><a href="#30-day-calendar" className="hover:text-blue-800">7. A 30-Day Social Media Calendar From a Single Webinar</a></li>
                <li><a href="#tools" className="hover:text-blue-800">8. Tools That Help (and When Done-for-You Makes More Sense)</a></li>
                <li><a href="#platform-specs" className="hover:text-blue-800">9. Platform-Specific Formatting Tips and Character Limits</a></li>
                <li><a href="#faq" className="hover:text-blue-800">10. Frequently Asked Questions</a></li>
              </ol>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">

              {/* Section 1 */}
              <section id="content-goldmine" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Your Webinar Is a Social Media Content Goldmine</h2>
                <p className="text-gray-700 mb-4">
                  A 60-minute webinar is not one piece of content. It is dozens of pieces of content compressed into a single recording. Every framework you taught, every story you told, every question you answered, and every insight you shared is a standalone social media post waiting to be published.
                </p>
                <p className="text-gray-700 mb-4">
                  Most coaches and consultants finish a webinar and move on. They post the replay link once, maybe twice, and then start stressing about what to post on LinkedIn next week. Meanwhile, the recording sits in a folder containing enough raw material for <strong>an entire month of social media content</strong> across every platform.
                </p>
                <p className="text-gray-700 mb-4">
                  The numbers back this up. According to HubSpot, repurposed content generates 3x more engagement than single-use content while reducing creation time by up to 60 percent. And yet only about 20 percent of marketers who run webinars actually repurpose that content for social media. That gap is your opportunity.
                </p>
                <p className="text-gray-700 mb-4">
                  If you have been following our <Link href="/blog/webinar-repurposing-guide" className="text-blue-600 hover:text-blue-800 font-medium">complete guide to webinar repurposing</Link>, you already know that a single webinar can yield <Link href="/blog/webinar-content-pieces-breakdown" className="text-blue-600 hover:text-blue-800 font-medium">75+ content pieces across all formats</Link>. This article focuses specifically on the social media portion -- taking you platform by platform through exactly what to create, how to format it, and how to spread it over 30 days.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
                  <p className="text-gray-800 font-medium">
                    The difference between coaches who always have content to post and those who scramble every morning is not talent or time. It is a system. Webinar repurposing gives you that system.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="extraction-process" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Extraction Process: Identifying What to Repurpose</h2>
                <p className="text-gray-700 mb-4">
                  Before you create a single social media post, you need to mine your webinar for raw material. This extraction step is what separates effective repurposing from lazy cross-posting. Start by getting a full transcript of your webinar using a tool like Otter.ai, Descript, or Rev.
                </p>
                <p className="text-gray-700 mb-4">
                  Once you have the transcript, read through it with a highlighter (digital or physical) and tag every section that falls into one of these five categories:
                </p>
                <div className="grid md:grid-cols-2 gap-4 my-6">
                  {[
                    { label: 'Quotable Moments', desc: 'One- or two-sentence statements that are memorable, surprising, or counterintuitive. These become quote graphics and hook lines for posts.' },
                    { label: 'Key Insights', desc: 'The main lessons, principles, or data points you shared. Each insight becomes the core of a LinkedIn text post or Instagram caption.' },
                    { label: 'Stories and Examples', desc: 'Client stories, personal anecdotes, and case examples. Stories are the highest-engagement content type on every platform.' },
                    { label: 'Frameworks and Processes', desc: 'Step-by-step methods, models, or numbered lists. These become carousels, threads, and how-to videos.' },
                    { label: 'Q&A Answers', desc: 'Every question from your audience and the answer you gave. Each Q&A pair is a standalone post that addresses a real objection or curiosity.' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-lg p-4">
                      <p className="text-sm font-semibold text-blue-600 mb-1">{item.label}</p>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  A typical 60-minute webinar yields 5-8 quotable moments, 4-6 key insights, 3-5 stories, 1-3 frameworks, and 5-10 Q&amp;A answers. That is roughly 20-30 distinct content seeds -- more than enough for a full month of daily social media posting.
                </p>
                <p className="text-gray-700">
                  If you also create <Link href="/blog/webinar-to-blog-post" className="text-blue-600 hover:text-blue-800 font-medium">blog posts from your webinar</Link>, you can pull additional social content from the blog itself -- teasing key sections, quoting statistics, and linking back to the full article.
                </p>
              </section>

              {/* CTA 1 */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 md:p-8 text-center my-10">
                <p className="text-white text-lg font-semibold mb-2">
                  Want a full month of social content from your next webinar?
                </p>
                <p className="text-blue-100 mb-4">
                  We repurpose your webinars into 14-75+ content pieces including ready-to-publish social posts. Starting at $750/month.
                </p>
                <a
                  href="https://contentrepurposehub.com/#pricing"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  See Plans &amp; Pricing &rarr;
                </a>
              </div>

              {/* Section 3 */}
              <section id="linkedin" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">LinkedIn: Text Posts, Carousels, Articles, and Video Clips</h2>
                <p className="text-gray-700 mb-4">
                  LinkedIn is the single most important platform for coaches and consultants who want to turn webinar content into clients. It is where your buyers spend time, where thought leadership drives inbound leads, and where repurposed webinar content performs exceptionally well. Here are the four LinkedIn formats you should create from every webinar.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">LinkedIn Text Posts (8-10 per webinar)</h3>
                <p className="text-gray-700 mb-4">
                  Every key insight, story, and lesson from your webinar is a standalone LinkedIn post. The best-performing structure follows a simple pattern: a hook on the first line that stops the scroll, a story or insight in the body (3-8 short paragraphs), and a takeaway or question at the end that drives comments.
                </p>
                <p className="text-gray-700 mb-4">
                  Write the hook by pulling the most surprising or counterintuitive statement from your webinar. If you said &quot;Most coaches waste 80 percent of their webinar content&quot; during the presentation, that becomes your first line. The body expands the insight in written format -- shorter sentences, more line breaks, no filler. The ending asks the reader a question or gives them a single clear takeaway.
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Pro tip:</strong> LinkedIn rewards posts that keep people on the platform. Avoid external links in the post body. If you want to drive traffic to a blog post or landing page, put the link in the first comment instead.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">LinkedIn Carousels (2-3 per webinar)</h3>
                <p className="text-gray-700 mb-4">
                  Any framework, numbered process, or list from your webinar translates perfectly into a swipeable carousel. Carousels get 2-3x more engagement than text posts on LinkedIn because the swipe mechanic keeps users on your content longer, which the algorithm rewards.
                </p>
                <p className="text-gray-700 mb-6">
                  Structure: Slide 1 is your hook (make it bold and specific). Slides 2-9 cover one point per slide with minimal text. The final slide includes your call to action -- follow for more, book a call, or visit your website. Design in Canva using your brand colors at 1080 x 1350 pixels (4:5 ratio) or 1080 x 1080 (1:1 square).
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">LinkedIn Articles (1 per webinar)</h3>
                <p className="text-gray-700 mb-4">
                  Take the deepest or most nuanced topic from your webinar and expand it into an 800-1,200 word LinkedIn article. Unlike feed posts that disappear after 48 hours, articles live permanently on your profile and can rank in Google search. This is your long-form thought leadership play on the platform.
                </p>
                <p className="text-gray-700 mb-6">
                  Articles work best for topics that require more depth than a 3,000-character post allows -- detailed case studies, multi-step frameworks, or industry analyses that you covered in your webinar.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">LinkedIn Video Clips (2-3 per webinar)</h3>
                <p className="text-gray-700 mb-4">
                  Short video clips from your webinar perform extremely well on LinkedIn because they show you speaking with authority and conviction. Watch your recording and timestamp the 30-90 second segments where you made a point clearly and concisely. Cut those into vertical clips, add captions (85 percent of LinkedIn users watch on mute), and upload natively.
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Important:</strong> Upload the video directly to LinkedIn rather than posting a YouTube link. Native video gets significantly more reach in the LinkedIn algorithm.
                </p>
              </section>

              {/* Section 4 */}
              <section id="instagram" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Instagram and Reels: What Works and What to Repurpose</h2>
                <p className="text-gray-700 mb-4">
                  Instagram is a visual platform, which means your webinar repurposing strategy here focuses on two things: short-form video (Reels) and designed graphics (carousels and quote cards). Text-heavy content does not perform on Instagram. Visual content does.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Instagram Reels (3-5 per webinar)</h3>
                <p className="text-gray-700 mb-4">
                  Reels are Instagram&apos;s highest-reach format. Pull 15-60 second clips from your webinar where you delivered a clear, punchy insight or told a compelling story. The first 3 seconds must hook the viewer -- start with a bold statement or question, not &quot;Hey everyone, today I want to talk about...&quot;
                </p>
                <p className="text-gray-700 mb-6">
                  Add captions, use a strong opening text overlay, and include 3-5 relevant hashtags in the caption. Reels are discoverable by non-followers, which makes them your best tool for reaching new audiences on Instagram.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Instagram Carousels (2-3 per webinar)</h3>
                <p className="text-gray-700 mb-4">
                  The same carousels you create for LinkedIn can be adapted for Instagram with slight adjustments. Instagram carousels allow up to 10 slides at 1080 x 1350 pixels. The content can be identical, but the design should be more visually engaging -- bolder colors, larger text, and more white space.
                </p>
                <p className="text-gray-700 mb-6">
                  Instagram carousels get saved and shared more than any other post type on the platform. When someone saves your carousel, the algorithm shows your next post to more people.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">Quote Graphics (3-5 per webinar)</h3>
                <p className="text-gray-700 mb-4">
                  Pull your most memorable one-liners from the webinar and design them as branded quote graphics. These are quick to create in Canva and perform well as both feed posts and Stories. They also work as a content type you can batch-create in under 30 minutes for the entire month.
                </p>
              </section>

              {/* Section 5 */}
              <section id="twitter" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Twitter/X Threads From Webinar Talking Points</h2>
                <p className="text-gray-700 mb-4">
                  Twitter/X threads are the platform&apos;s highest-engagement format for educational content. A thread lets you break down a complex topic into bite-sized tweets -- which is exactly what your webinar already does in spoken form.
                </p>
                <p className="text-gray-700 mb-4">
                  From each webinar, create 2-3 threads of 8-15 tweets each. The first tweet is your hook -- it should be a bold claim, a surprising statistic, or a promise of what the reader will learn. Each subsequent tweet delivers one point. The final tweet summarizes the key lesson and includes a call to action (follow, bookmark, reply).
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Thread structure from a webinar:</strong>
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li><strong>Tweet 1 (Hook):</strong> &quot;I repurpose every webinar I give into 30 days of social media content. Here is the exact process:&quot;</li>
                  <li><strong>Tweets 2-10 (Value):</strong> One key point per tweet, pulled directly from the webinar talking points</li>
                  <li><strong>Tweet 11 (Summary):</strong> Recap the main lesson in one sentence</li>
                  <li><strong>Tweet 12 (CTA):</strong> &quot;If this was helpful, follow me for more. And bookmark this thread to reference later.&quot;</li>
                </ul>
                <p className="text-gray-700">
                  In addition to threads, you can also pull individual insights from your webinar and post them as standalone tweets. Each quotable moment is a single tweet. This gives you 5-8 standalone tweets to fill gaps in your calendar between threads.
                </p>
              </section>

              {/* Section 6 */}
              <section id="youtube-tiktok" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">YouTube Shorts and TikTok: Pulling the Right Clips</h2>
                <p className="text-gray-700 mb-4">
                  Short-form vertical video has the widest organic reach of any content format in 2026. YouTube Shorts and TikTok both surface content to non-followers through algorithmic discovery, which means a single clip from your webinar can reach thousands of people who have never heard of you.
                </p>
                <p className="text-gray-700 mb-4">
                  The key is selecting the right moments from your webinar. Not every segment works as a short clip. Look for moments that meet these criteria:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li><strong>Self-contained:</strong> The clip makes sense without any additional context</li>
                  <li><strong>Emotion or energy:</strong> You are speaking with conviction, humor, or passion</li>
                  <li><strong>Clear takeaway:</strong> The viewer learns something specific in 30-60 seconds</li>
                  <li><strong>Strong opening:</strong> The first 2 seconds hook the viewer (no slow intros)</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Aim for 4-5 clips per webinar. Each clip should be under 60 seconds (YouTube Shorts requires this). Add large, easy-to-read captions and a text hook at the top of the frame. Post the same clips to both YouTube Shorts and TikTok -- the format requirements are nearly identical.
                </p>
                <p className="text-gray-700">
                  <strong>Editing tip:</strong> Use CapCut or Descript to crop your horizontal webinar recording into vertical format. Center the framing on your face. If your webinar used screen share, focus on clips where you were speaking to camera instead. For a complete step-by-step system to manage all of this efficiently, see our <Link href="/blog/content-repurposing-workflow-coaches" className="text-blue-600 hover:text-blue-800 font-medium">content repurposing workflow for coaches</Link>.
                </p>
              </section>

              {/* CTA 2 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 text-center my-10">
                <p className="text-gray-900 text-lg font-semibold mb-2">
                  That is 30+ social media posts from a single webinar.
                </p>
                <p className="text-gray-600 mb-4">
                  Imagine having this delivered to you every month, ready to publish.
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

              {/* Section 7: 30-Day Calendar */}
              <section id="30-day-calendar" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">A 30-Day Social Media Calendar From a Single Webinar</h2>
                <p className="text-gray-700 mb-4">
                  Here is a sample 30-day content calendar built entirely from one 60-minute webinar. This schedule assumes you are posting daily on at least one platform, which is realistic when every piece is pre-created from existing material.
                </p>
                <p className="text-gray-700 mb-6">
                  The calendar uses a rotation of formats to keep your feed varied while ensuring you never repeat the same type two days in a row on any single platform.
                </p>

                {/* 30-Day Calendar Table */}
                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="text-left p-3 border border-blue-700 font-semibold">Day</th>
                        <th className="text-left p-3 border border-blue-700 font-semibold">Platform</th>
                        <th className="text-left p-3 border border-blue-700 font-semibold">Format</th>
                        <th className="text-left p-3 border border-blue-700 font-semibold">Content Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['1', 'LinkedIn', 'Text Post', 'Key Insight #1 from webinar opening'],
                        ['2', 'Instagram', 'Reel (30s)', 'Best clip: your strongest 30-second teaching moment'],
                        ['3', 'Twitter/X', 'Thread (10 tweets)', 'Main framework from the webinar, broken into steps'],
                        ['4', 'LinkedIn', 'Video Clip (60s)', 'Story you told about a client result'],
                        ['5', 'YouTube Shorts', 'Short (45s)', 'Counterintuitive point that surprises viewers'],
                        ['6', 'LinkedIn', 'Carousel (8 slides)', 'Step-by-step process from your framework'],
                        ['7', 'Instagram', 'Quote Graphic', 'Strongest one-liner from the webinar'],
                        ['8', 'LinkedIn', 'Text Post', 'Story from the webinar expanded into post format'],
                        ['9', 'TikTok', 'Short (30s)', 'Quick tip extracted from Q&A section'],
                        ['10', 'Twitter/X', 'Standalone Tweet', 'Surprising statistic you shared in the webinar'],
                        ['11', 'LinkedIn', 'Text Post', 'Lesson learned / mistake to avoid (from webinar content)'],
                        ['12', 'Instagram', 'Carousel (10 slides)', 'Numbered list or tips from the webinar'],
                        ['13', 'LinkedIn', 'Article (1,000 words)', 'Deep dive on the webinar\'s main topic'],
                        ['14', 'YouTube Shorts', 'Short (50s)', 'Before-and-after example from the webinar'],
                        ['15', 'Twitter/X', 'Thread (8 tweets)', 'Q&A answers compiled into a thread'],
                        ['16', 'LinkedIn', 'Text Post', 'Key Insight #2 with personal commentary'],
                        ['17', 'Instagram', 'Reel (45s)', 'Framework overview in under a minute'],
                        ['18', 'LinkedIn', 'Video Clip (45s)', 'Passionate moment about why this topic matters'],
                        ['19', 'TikTok', 'Short (30s)', 'Common myth you debunked in the webinar'],
                        ['20', 'LinkedIn', 'Carousel (10 slides)', 'Before-and-after or comparison from webinar content'],
                        ['21', 'Instagram', 'Quote Graphic', 'Second-strongest one-liner from the webinar'],
                        ['22', 'LinkedIn', 'Text Post', 'Q&A answer expanded into a full post'],
                        ['23', 'Twitter/X', 'Standalone Tweet', 'Quotable one-liner from the webinar'],
                        ['24', 'YouTube Shorts', 'Short (40s)', 'Actionable tip viewers can implement today'],
                        ['25', 'LinkedIn', 'Text Post', 'Key Insight #3 with a question for engagement'],
                        ['26', 'Instagram', 'Reel (30s)', 'Audience question + your answer (from Q&A)'],
                        ['27', 'LinkedIn', 'Video Clip (60s)', 'Teaching moment with high energy'],
                        ['28', 'Twitter/X', 'Thread (12 tweets)', 'Lessons from the webinar topic, framed as advice'],
                        ['29', 'Instagram', 'Carousel (8 slides)', 'Key takeaways summary from the full webinar'],
                        ['30', 'LinkedIn', 'Text Post', 'Reflection post: what you learned from delivering this webinar'],
                      ].map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="p-3 border border-gray-200 font-medium text-gray-900 whitespace-nowrap">{row[0]}</td>
                          <td className="p-3 border border-gray-200 text-gray-700 whitespace-nowrap">
                            <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                              row[1] === 'LinkedIn' ? 'bg-blue-100 text-blue-700' :
                              row[1] === 'Instagram' ? 'bg-pink-100 text-pink-700' :
                              row[1] === 'Twitter/X' ? 'bg-gray-200 text-gray-700' :
                              row[1] === 'YouTube Shorts' ? 'bg-red-100 text-red-700' :
                              'bg-purple-100 text-purple-700'
                            }`}>
                              {row[1]}
                            </span>
                          </td>
                          <td className="p-3 border border-gray-200 text-gray-700">{row[2]}</td>
                          <td className="p-3 border border-gray-200 text-gray-600">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
                  <p className="text-gray-800 font-medium">
                    Count the LinkedIn posts in this calendar: 12 out of 30 days. That is because LinkedIn is the primary lead-generation platform for coaches and consultants. Weight your calendar toward the platform where your buyers are.
                  </p>
                </div>
                <p className="text-gray-700">
                  This is one webinar. If you run a monthly webinar, you have a perpetual content engine that never runs dry. For the full picture of everything you can create beyond social media -- including blog posts, email sequences, and lead magnets -- see our <Link href="/blog/webinar-content-pieces-breakdown" className="text-blue-600 hover:text-blue-800 font-medium">breakdown of 75+ content pieces from a single webinar</Link>.
                </p>
              </section>

              {/* Section 8 */}
              <section id="tools" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Tools That Help (and When Done-for-You Makes More Sense)</h2>
                <p className="text-gray-700 mb-4">
                  If you are handling webinar-to-social repurposing yourself, these tools will speed up the process:
                </p>

                <div className="space-y-4 my-6">
                  {[
                    { category: 'Transcription', tools: 'Otter.ai, Descript, Rev', note: 'The foundation -- you need a transcript before you can extract content' },
                    { category: 'Video Clipping', tools: 'Descript, CapCut, Opus Clip', note: 'For cutting and reformatting short-form clips from your webinar' },
                    { category: 'Design', tools: 'Canva, Figma', note: 'For carousels, quote cards, and branded graphics' },
                    { category: 'Writing', tools: 'Google Docs, Notion, ChatGPT', note: 'For drafting and refining text posts, threads, and captions' },
                    { category: 'Scheduling', tools: 'Buffer, Typefully, Publer, Later', note: 'For scheduling posts across platforms in advance' },
                    { category: 'Captions', tools: 'CapCut, Descript, Zubtitle', note: 'For adding captions to video clips (essential for muted viewing)' },
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

                <p className="text-gray-700 mb-4">
                  <strong>The DIY reality check:</strong> Even with these tools, converting one webinar into 30 social media posts takes 10-15 hours of work. That includes transcribing, reading and tagging the transcript, writing each post, editing video clips, designing carousels, adding captions, and scheduling everything. If you are a coach billing $200/hour for your time, that is $2,000-$3,000 worth of hours spent on content formatting instead of client work.
                </p>
                <p className="text-gray-700">
                  A done-for-you repurposing service eliminates that time investment entirely. You send the webinar recording, and you receive a full month of ready-to-publish social content back -- written in your voice, formatted for each platform, and scheduled on your calendar. At $750-$1,500/month, the math works in your favor the moment your hourly rate exceeds $75.
                </p>
              </section>

              {/* Section 9: Platform Specs */}
              <section id="platform-specs" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Platform-Specific Formatting Tips and Character Limits</h2>
                <p className="text-gray-700 mb-6">
                  Repurposing is not the same as cross-posting. Each platform has its own rules, character limits, and algorithmic preferences. Here is a quick-reference card for every platform covered in this guide.
                </p>

                {/* Platform Spec Cards */}
                <div className="space-y-4 my-6">
                  {/* LinkedIn */}
                  <div className="border border-gray-200 rounded-xl p-5 bg-white">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-bold">LinkedIn</div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-gray-500 font-medium">Text Post Length</p>
                        <p className="text-gray-900">3,000 characters max (aim for 800-1,500 for engagement)</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Article Length</p>
                        <p className="text-gray-900">Up to 125,000 characters (aim for 800-1,200 words)</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Carousel</p>
                        <p className="text-gray-900">PDF upload, 1080x1350px (4:5) or 1080x1080px (1:1), max 300 pages</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Video</p>
                        <p className="text-gray-900">3 sec to 10 min, 1080x1920px vertical preferred, captions required</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Best Posting Times</p>
                        <p className="text-gray-900">Tuesday - Thursday, 8-10am and 12pm (audience timezone)</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Algorithm Tip</p>
                        <p className="text-gray-900">No external links in post body. Add links in first comment instead.</p>
                      </div>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="border border-gray-200 rounded-xl p-5 bg-white">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-pink-100 text-pink-700 px-3 py-1 rounded-lg text-sm font-bold">Instagram</div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-gray-500 font-medium">Caption Length</p>
                        <p className="text-gray-900">2,200 characters max (first 125 chars visible before &quot;more&quot;)</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Reels</p>
                        <p className="text-gray-900">Up to 90 seconds, 1080x1920px vertical (9:16), captions recommended</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Carousel</p>
                        <p className="text-gray-900">Up to 10 slides, 1080x1350px (4:5) or 1080x1080px (1:1)</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Hashtags</p>
                        <p className="text-gray-900">3-5 relevant hashtags (more is not better in 2026)</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Stories</p>
                        <p className="text-gray-900">1080x1920px, 15 sec per slide, great for behind-the-scenes</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Algorithm Tip</p>
                        <p className="text-gray-900">Reels reach non-followers. Carousels drive saves. Use both.</p>
                      </div>
                    </div>
                  </div>

                  {/* Twitter/X */}
                  <div className="border border-gray-200 rounded-xl p-5 bg-white">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm font-bold">Twitter/X</div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-gray-500 font-medium">Tweet Length</p>
                        <p className="text-gray-900">280 characters (free) or up to 25,000 (Premium subscribers)</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Thread Length</p>
                        <p className="text-gray-900">No limit, but 8-15 tweets is the sweet spot for engagement</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Video</p>
                        <p className="text-gray-900">Up to 2 min 20 sec (free) or 60 min (Premium), 1080x1920px vertical</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Images</p>
                        <p className="text-gray-900">Up to 4 images per tweet, 1200x675px (16:9) recommended</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Best Posting Times</p>
                        <p className="text-gray-900">Monday - Friday, 9-11am (audience timezone)</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Algorithm Tip</p>
                        <p className="text-gray-900">Threads with high bookmark rates get amplified. End with &quot;Bookmark this.&quot;</p>
                      </div>
                    </div>
                  </div>

                  {/* YouTube Shorts */}
                  <div className="border border-gray-200 rounded-xl p-5 bg-white">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-red-100 text-red-700 px-3 py-1 rounded-lg text-sm font-bold">YouTube Shorts</div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-gray-500 font-medium">Video Length</p>
                        <p className="text-gray-900">60 seconds maximum (aim for 30-50 seconds)</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Resolution</p>
                        <p className="text-gray-900">1080x1920px vertical (9:16 aspect ratio required)</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Title</p>
                        <p className="text-gray-900">100 characters max, include target keyword</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Description</p>
                        <p className="text-gray-900">Up to 5,000 characters, but most viewers never see it</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Hashtags</p>
                        <p className="text-gray-900">Include #Shorts in title or description</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Algorithm Tip</p>
                        <p className="text-gray-900">Retention rate matters most. Hook viewers in the first 2 seconds.</p>
                      </div>
                    </div>
                  </div>

                  {/* TikTok */}
                  <div className="border border-gray-200 rounded-xl p-5 bg-white">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-lg text-sm font-bold">TikTok</div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-gray-500 font-medium">Video Length</p>
                        <p className="text-gray-900">Up to 10 minutes (but 30-60 seconds performs best for repurposed clips)</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Resolution</p>
                        <p className="text-gray-900">1080x1920px vertical (9:16 aspect ratio)</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Caption Length</p>
                        <p className="text-gray-900">4,000 characters max (keep it short, 100-150 characters is ideal)</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Hashtags</p>
                        <p className="text-gray-900">3-5 niche hashtags, avoid overly broad tags</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Best Posting Times</p>
                        <p className="text-gray-900">Tuesday - Thursday, 10am-12pm and 7-9pm</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Algorithm Tip</p>
                        <p className="text-gray-900">Completion rate is king. Shorter clips that get rewatched outperform longer ones.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA 3 */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 md:p-8 text-center my-10">
                <p className="text-white text-lg font-semibold mb-2">
                  Stop scrambling for content ideas every morning.
                </p>
                <p className="text-blue-100 mb-4">
                  We turn your webinars into a full month of social media content -- formatted for every platform, written in your voice, ready to post.
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

              {/* Section 10: FAQ */}
              <section id="faq" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

                <div className="space-y-6">
                  {[
                    {
                      q: 'How many social media posts can you get from one webinar?',
                      a: 'A single 60-minute webinar can produce 30 or more social media posts across platforms. This typically includes 8-10 LinkedIn posts, 5-7 Instagram posts or Reels, 3-4 Twitter/X threads, 4-5 YouTube Shorts or TikTok clips, 2-3 LinkedIn carousels, and several quote graphics.',
                    },
                    {
                      q: 'What is the best social media platform for repurposed webinar content?',
                      a: 'For coaches and consultants, LinkedIn is the highest-ROI platform for repurposed webinar content. LinkedIn text posts, carousels, and video clips reach professional audiences who are most likely to become clients. Instagram and YouTube Shorts are strong secondary platforms for building broader visibility.',
                    },
                    {
                      q: 'How do you turn a webinar into LinkedIn posts?',
                      a: 'Start by transcribing your webinar and identifying key insights, frameworks, stories, and quotable moments. Each one becomes a standalone LinkedIn post. Structure them with a hook on the first line, the insight or story in the body, and a takeaway or question at the end. One webinar typically yields 8-10 LinkedIn text posts plus 2-3 carousels.',
                    },
                    {
                      q: 'What length should webinar clips be for social media?',
                      a: 'For Instagram Reels and TikTok, aim for 30-60 seconds. YouTube Shorts must be under 60 seconds. LinkedIn video performs best between 30-90 seconds. Always add captions since 85 percent of social media users watch video on mute.',
                    },
                    {
                      q: 'Can I repurpose one webinar for an entire month of social media?',
                      a: 'Yes. A single 60-minute webinar contains enough material for a full 30-day content calendar. By varying the format (text posts, carousels, video clips, quote graphics, threads) and spreading content across platforms, you can maintain a consistent daily posting schedule for an entire month.',
                    },
                    {
                      q: 'Do I need special tools to repurpose a webinar into social media content?',
                      a: 'Basic tools include a transcription service (Otter.ai or Descript), a video editor for clips (CapCut or Descript), a design tool for carousels and quote graphics (Canva), and a scheduling tool (Buffer or Typefully). However, a done-for-you repurposing service can handle all of this while you focus on running your business.',
                    },
                    {
                      q: 'What is the difference between repurposing and cross-posting?',
                      a: 'Cross-posting means sharing the identical content on multiple platforms. Repurposing means adapting the core idea to fit each platform natively -- respecting character limits, preferred formats, audience expectations, and algorithmic preferences. Repurposed content outperforms cross-posted content because each piece is optimized for where it appears.',
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Your Webinar Is Already a Content Calendar</h2>
                <p className="text-gray-700 mb-4">
                  You do not need more ideas. You do not need to spend another hour staring at a blank screen wondering what to post. You need a system that extracts the content you already created and puts it where your audience can find it.
                </p>
                <p className="text-gray-700 mb-4">
                  Every webinar you have already delivered is a 30-day social media calendar waiting to be unpacked. The frameworks are there. The stories are there. The insights, the data, the Q&amp;A answers -- all of it is ready to be formatted for LinkedIn, Instagram, Twitter/X, YouTube, and TikTok.
                </p>
                <p className="text-gray-700 mb-4">
                  Start with your most recent webinar. Follow the extraction process in section two. Build your first 30-day calendar using the template in section seven. Post consistently for one month and measure the results.
                </p>
                <p className="text-gray-700">
                  Or, if you would rather spend those 10-15 hours on coaching clients instead of formatting social media posts, <a href="https://cal.com/contentrepurposehub/30min" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">book a free strategy call</a> and we will show you exactly how we turn your webinars into a full month of ready-to-publish content across every platform. For the full picture of everything webinar repurposing can do for your business, start with our <Link href="/blog/webinar-repurposing-guide" className="text-blue-600 hover:text-blue-800 font-medium">complete webinar repurposing guide</Link>.
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
              <Link href="/blog/webinar-to-blog-post" className="text-blue-600 hover:text-blue-700 font-medium">
                &larr; How to Turn a Webinar Into a Blog Post
              </Link>
              <Link href="/blog/webinar-follow-up-email-sequence" className="text-blue-600 hover:text-blue-700 font-medium sm:text-right">
                Webinar Follow-Up Email Sequences That Convert &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <section className="py-16 gradient-bg px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              One Webinar. 30 Days of Content. Every Platform.
            </h2>
            <p className="text-blue-100 text-lg mb-6">
              We handle the extraction, writing, design, and formatting. You just send us the recording. Starting at $750/month.
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
