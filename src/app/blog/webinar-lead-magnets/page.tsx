import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '7 High-Converting Lead Magnets You Can Create From a Single Webinar (Without Starting From Scratch)',
  description: 'Turn your existing webinar into 7 proven lead magnets — cheat sheets (34% conversion), checklists (27%), ebooks (24%), and more. Step-by-step instructions for coaches and consultants.',
  keywords: 'webinar lead magnet, repurpose webinar into lead magnet, create lead magnet from webinar, webinar to ebook, lead magnet from webinar content, webinar content lead generation',
  alternates: {
    canonical: 'https://contentrepurposehub.com/blog/webinar-lead-magnets',
  },
  openGraph: {
    title: '7 High-Converting Lead Magnets From a Single Webinar',
    description: 'Your webinar already contains your next lead magnet. Here are 7 proven formats with conversion data and step-by-step creation guides.',
    url: 'https://contentrepurposehub.com/blog/webinar-lead-magnets',
    siteName: 'ContentRepurposeHub',
    type: 'article',
    publishedTime: '2026-04-13T00:00:00.000Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: '7 Lead Magnets From 1 Webinar — No Starting From Scratch',
    description: 'Cheat sheets convert at 34%. Checklists at 27%. And your webinar already has the raw material for both.',
  },
}

export default function WebinarLeadMagnets() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://contentrepurposehub.com/blog/webinar-lead-magnets#article',
        headline: '7 High-Converting Lead Magnets You Can Create From a Single Webinar (Without Starting From Scratch)',
        description: 'Turn your existing webinar into 7 proven lead magnets with step-by-step instructions. Includes conversion rate data and a decision matrix for choosing which to create first.',
        datePublished: '2026-04-13',
        dateModified: '2026-04-13',
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
        mainEntityOfPage: 'https://contentrepurposehub.com/blog/webinar-lead-magnets',
        wordCount: 2100,
        articleSection: 'Content Marketing',
        keywords: ['webinar lead magnet', 'repurpose webinar into lead magnet', 'create lead magnet from webinar', 'webinar to ebook', 'lead magnet conversion rates'],
        about: [
          { '@type': 'Thing', name: 'Lead Magnets' },
          { '@type': 'Thing', name: 'Webinar Repurposing' },
          { '@type': 'Thing', name: 'Content Marketing' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://contentrepurposehub.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://contentrepurposehub.com/blog' },
          { '@type': 'ListItem', position: 3, name: '7 Lead Magnets From a Webinar' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the best lead magnet to create from a webinar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Cheat sheets convert at 34%, making them the highest-converting lead magnet format according to Leadpages data. A one-page cheat sheet summarizing your webinar\'s key takeaways can be created in under an hour from your existing content.',
            },
          },
          {
            '@type': 'Question',
            name: 'How many lead magnets can you create from one webinar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A single 60-minute webinar contains enough material for at least 7 different lead magnets: a cheat sheet, a checklist, a mini ebook, a resource guide, a worksheet or template, a gated replay with bonus content, and an email mini-course. Each targets a different segment of your audience.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I turn a webinar into an ebook?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pick one section of your webinar (15-20 minutes of content), transcribe it, expand the key points with examples and data, add an introduction and conclusion, format it as a 10-15 page PDF with your branding, and gate it behind an email opt-in. The webinar transcript gives you 70-80% of the content you need.',
            },
          },
          {
            '@type': 'Question',
            name: 'What lead magnet format has the highest conversion rate?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'According to Leadpages data, cheat sheets convert at 34%, checklists at 27%, and ebooks at 24%. Shorter, more actionable formats consistently outperform longer ones because they promise a quick win with minimal time investment from the reader.',
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
              <span className="text-gray-700">7 Lead Magnets From a Webinar</span>
            </nav>

            {/* Header */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Lead Generation</span>
                <span className="text-xs text-gray-500">10 min read</span>
                <span className="text-xs text-gray-400">April 13, 2026</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                7 High-Converting Lead Magnets You Can Create From a Single Webinar (Without Starting From Scratch)
              </h1>
              <p className="text-xl text-gray-600">
                Most coaches spend 5-10 hours building a lead magnet from scratch. But your last webinar already contains the raw material for at least 7 of them. Here is how to extract, format, and deploy each one.
              </p>
            </header>

            {/* Key Takeaways */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg mb-10">
              <h2 className="text-base font-semibold text-gray-900 mb-2">Key Takeaways</h2>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>- Cheat sheets convert at 34%, checklists at 27%, ebooks at 24% (Leadpages data)</li>
                <li>- A single 60-minute webinar has enough material for 7 distinct lead magnets</li>
                <li>- The fastest to create (cheat sheet) takes under 60 minutes from a webinar transcript</li>
                <li>- Shorter, more actionable formats outperform longer ones every time</li>
              </ul>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 rounded-xl p-6 mb-10 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Table of Contents</h2>
              <ol className="space-y-2 text-blue-600">
                <li><a href="#why-webinar-lead-magnets" className="hover:text-blue-800">1. Your Webinar Already Contains Your Next Lead Magnet</a></li>
                <li><a href="#cheat-sheet" className="hover:text-blue-800">2. Lead Magnet #1: The Webinar Cheat Sheet</a></li>
                <li><a href="#checklist" className="hover:text-blue-800">3. Lead Magnet #2: The Step-by-Step Checklist</a></li>
                <li><a href="#mini-ebook" className="hover:text-blue-800">4. Lead Magnet #3: The Mini Ebook</a></li>
                <li><a href="#resource-guide" className="hover:text-blue-800">5. Lead Magnet #4: The Resource Guide</a></li>
                <li><a href="#worksheet" className="hover:text-blue-800">6. Lead Magnet #5: The Worksheet or Template</a></li>
                <li><a href="#gated-replay" className="hover:text-blue-800">7. Lead Magnet #6: The Gated Replay With Bonus Content</a></li>
                <li><a href="#email-mini-course" className="hover:text-blue-800">8. Lead Magnet #7: The Email Mini-Course</a></li>
                <li><a href="#decision-matrix" className="hover:text-blue-800">9. Which Lead Magnet Should You Create First?</a></li>
                <li><a href="#opt-in-funnel" className="hover:text-blue-800">10. Setting Up the Opt-In Funnel</a></li>
                <li><a href="#faq" className="hover:text-blue-800">11. Frequently Asked Questions</a></li>
              </ol>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">

              {/* Section 1 */}
              <section id="why-webinar-lead-magnets" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Your Webinar Already Contains Your Next Lead Magnet</h2>
                <p className="text-gray-700 mb-4">
                  Here is what most coaches do: they run a webinar, upload the recording somewhere, and then spend the next two weeks agonizing over a lead magnet. Writing from scratch. Designing from scratch. Wondering if anyone will actually download it.
                </p>
                <p className="text-gray-700 mb-4">
                  Meanwhile, the webinar they already delivered contains every insight, framework, and step-by-step process they need. It is sitting right there in the recording.
                </p>
                <p className="text-gray-700 mb-4">
                  The data backs this up. According to Leadpages, the <strong>highest-converting lead magnet formats</strong> are:
                </p>
                <div className="grid md:grid-cols-3 gap-4 my-6">
                  {[
                    { format: 'Cheat Sheets', rate: '34%', note: 'Highest conversion rate' },
                    { format: 'Checklists', rate: '27%', note: 'Second highest' },
                    { format: 'Ebooks', rate: '24%', note: 'Third highest' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold text-blue-600 mb-1">{item.rate}</p>
                      <p className="text-sm font-semibold text-gray-900">{item.format}</p>
                      <p className="text-xs text-gray-500">{item.note}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  Notice a pattern? The top three formats are all things you can pull directly from a webinar transcript. A cheat sheet is your key takeaways on one page. A checklist is your action items listed out. An ebook is one section of your webinar expanded.
                </p>
                <p className="text-gray-700 mb-4">
                  You already did the hard work. The expertise, the examples, the structure -- it is all in the recording. You do not need to create a lead magnet from nothing. You need to <em>extract</em> one from something you already made.
                </p>
                <p className="text-gray-700">
                  If you want a deeper look at the full range of content you can pull from a webinar (not just lead magnets), check out our <Link href="/blog/webinar-content-pieces-breakdown" className="text-blue-600 hover:text-blue-800 font-medium">complete breakdown of 75+ content pieces from one webinar</Link>.
                </p>
              </section>

              {/* Lead Magnet #1 */}
              <section id="cheat-sheet" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Lead Magnet #1: The Webinar Cheat Sheet</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Conversion rate: 34%</strong> (the highest of any lead magnet format).
                </p>
                <p className="text-gray-700 mb-4">
                  A cheat sheet distills your entire webinar into a single page. The key insights. The critical numbers. The frameworks. Everything someone would write on a sticky note if they were taking the best possible notes during your presentation.
                </p>
                <p className="text-gray-700 mb-4">
                  Cheat sheets convert so well because they promise instant value with zero time commitment. Nobody looks at a one-page PDF and thinks &quot;I do not have time for this.&quot;
                </p>

                <h3 className="text-lg font-bold text-gray-900 mb-2 mt-6">How to create it</h3>
                <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Pull up your webinar transcript (or re-watch at 2x speed with a notepad).</li>
                  <li>Extract 5-8 core takeaways -- the things you would tell someone if they had 60 seconds to listen.</li>
                  <li>Add any specific numbers, formulas, or frameworks you taught.</li>
                  <li>Format in Canva using a single-page template with your brand colors. One column or two columns. Keep it scannable.</li>
                  <li>Export as PDF. Total time: 30-60 minutes.</li>
                </ol>
                <p className="text-gray-700">
                  That is it. One page. The distilled version of an hour of your expertise. And it converts at 34%.
                </p>
              </section>

              {/* Lead Magnet #2 */}
              <section id="checklist" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Lead Magnet #2: The Step-by-Step Checklist</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Conversion rate: 27%.</strong>
                </p>
                <p className="text-gray-700 mb-4">
                  If your webinar walked people through a process -- and most coaching webinars do -- you already have a checklist. The steps are in your presentation. You taught them live. Now put them on paper.
                </p>
                <p className="text-gray-700 mb-4">
                  Checklists work because they are actionable. Someone downloads it, prints it out, and starts checking things off. It feels like progress. And every time they look at it, they see your name and logo.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mb-2 mt-6">How to create it</h3>
                <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Identify the process or framework from your webinar. What did you walk attendees through step by step?</li>
                  <li>Break each step into a checkbox item. Be specific -- &quot;Write your welcome email&quot; is better than &quot;Set up email.&quot;</li>
                  <li>Add 1-2 sentences of context under each item if it needs clarification.</li>
                  <li>Group related steps under section headers if the process has distinct phases.</li>
                  <li>Design in Canva or Google Docs. Keep it to 1-2 pages. Add your branding and a link back to your site.</li>
                </ol>
                <p className="text-gray-700">
                  The beauty of a checklist: it is useful <em>immediately</em>. No reading required. Your audience downloads it and starts doing things. That kind of practical value builds trust fast.
                </p>
              </section>

              {/* Lead Magnet #3 */}
              <section id="mini-ebook" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Lead Magnet #3: The Mini Ebook</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Conversion rate: 24%.</strong>
                </p>
                <p className="text-gray-700 mb-4">
                  A mini ebook is not a 50-page monster. It is 10-15 pages that go deep on one section of your webinar. Pick the part where you taught something substantial -- a framework, a methodology, a case study breakdown -- and expand it.
                </p>
                <p className="text-gray-700 mb-4">
                  Your webinar transcript gives you 70-80% of the content. The rest is adding examples, data points, and visual formatting.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mb-2 mt-6">How to create it</h3>
                <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Pick one section of your webinar (15-20 minutes of content works best). Choose the part with the most depth.</li>
                  <li>Transcribe that section if you have not already.</li>
                  <li>Clean up the transcript: remove filler words, tighten the language, add transitions.</li>
                  <li>Expand key points with additional examples, data, or context that you did not have time for during the live session.</li>
                  <li>Add an introduction (why this matters) and a conclusion (next steps + CTA).</li>
                  <li>Format with headers, pull quotes, and visuals. Canva has ebook templates. So does Google Slides exported to PDF.</li>
                </ol>
                <p className="text-gray-700">
                  Mini ebooks position you as an authority. Someone who downloads a 12-page guide on your specific topic is a warm lead. They are self-selecting as interested in exactly what you teach.
                </p>
              </section>

              {/* CTA 1 */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 md:p-8 text-center my-10">
                <p className="text-white text-lg font-semibold mb-2">
                  Don&apos;t want to build these yourself?
                </p>
                <p className="text-blue-100 mb-4">
                  We create lead magnets, email sequences, and 14-75+ content pieces from your webinars. Starting at $750/month.
                </p>
                <a
                  href="https://contentrepurposehub.com/#pricing"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  See Plans &amp; Pricing &rarr;
                </a>
              </div>

              {/* Lead Magnet #4 */}
              <section id="resource-guide" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Lead Magnet #4: The Resource Guide</h2>
                <p className="text-gray-700 mb-4">
                  Every webinar mentions tools, books, websites, frameworks, or references. You say things like &quot;I use ConvertKit for this&quot; or &quot;there is a great study from HubSpot that shows...&quot; Your audience is writing these down frantically.
                </p>
                <p className="text-gray-700 mb-4">
                  A resource guide collects every single tool, reference, and recommendation from your webinar into one organized document. It is the page your attendees wish they had during the live session.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mb-2 mt-6">How to create it</h3>
                <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Re-watch or scan the transcript for every tool, book, person, study, or website you mentioned.</li>
                  <li>Organize by category (e.g., &quot;Email Tools,&quot; &quot;Design Tools,&quot; &quot;Books,&quot; &quot;Studies/Data&quot;).</li>
                  <li>Add a one-sentence description and a link for each resource.</li>
                  <li>Include your honest take where relevant -- &quot;I use X for Y because Z.&quot;</li>
                  <li>Format as a clean 2-3 page PDF. This one can be simple. Utility beats design.</li>
                </ol>
                <p className="text-gray-700">
                  Resource guides have a hidden benefit: they stay on people&apos;s desks. They get bookmarked. They get shared with colleagues. Your name is on every page.
                </p>
              </section>

              {/* Lead Magnet #5 */}
              <section id="worksheet" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Lead Magnet #5: The Worksheet or Template</h2>
                <p className="text-gray-700 mb-4">
                  Did you teach a framework during your webinar? A planning process? A fill-in-the-blank approach to something?
                </p>
                <p className="text-gray-700 mb-4">
                  Turn it into a worksheet. Give people a structured way to apply your teaching to their own situation. This is where webinar content becomes genuinely useful beyond the session itself.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mb-2 mt-6">How to create it</h3>
                <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Identify the framework or process from your webinar that people need to customize for themselves.</li>
                  <li>Turn each step into a prompt or fill-in-the-blank field. &quot;My target audience is ___&quot; or &quot;The 3 biggest pain points I solve are: 1. ___ 2. ___ 3. ___&quot;</li>
                  <li>Add a brief example showing a completed version so people know what good looks like.</li>
                  <li>Create in Google Docs (so it is editable) or as a fillable PDF. Both work.</li>
                  <li>Include instructions at the top: what it is, how to use it, how long it takes.</li>
                </ol>
                <p className="text-gray-700">
                  Worksheets create what marketers call &quot;investment.&quot; Once someone spends 20 minutes filling out your worksheet, they are invested in your methodology. And they are much more likely to book a call to get help implementing it.
                </p>
              </section>

              {/* Lead Magnet #6 */}
              <section id="gated-replay" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Lead Magnet #6: The Gated Replay With Bonus Content</h2>
                <p className="text-gray-700 mb-4">
                  This one is almost too easy. Take your webinar recording, add 10-15 minutes of bonus content at the end (an extra tip, an extended Q&amp;A, a behind-the-scenes look at your process), and put it behind an email opt-in.
                </p>
                <p className="text-gray-700 mb-4">
                  The &quot;bonus content&quot; part matters. People do not want to give their email for something they could have watched live for free. But add exclusive material and the value equation changes.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mb-2 mt-6">How to create it</h3>
                <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Upload your webinar recording to a hosting platform (Vimeo, Wistia, or even an unlisted YouTube video).</li>
                  <li>Record a 10-15 minute bonus segment. Screen share works fine. No production value needed -- your audience wants the content, not cinema.</li>
                  <li>Stitch the bonus onto the end of the webinar, or provide both as separate links.</li>
                  <li>Create a landing page with an email gate. ConvertKit, Leadpages, or even a simple Carrd page works.</li>
                  <li>Promote it to people who missed the live event and to new audience members finding you through search or social.</li>
                </ol>
                <p className="text-gray-700">
                  This format works especially well for high-value webinars where the topic has ongoing search demand. Someone Googling your topic three months later still wants to watch the replay.
                </p>
              </section>

              {/* Lead Magnet #7 */}
              <section id="email-mini-course" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Lead Magnet #7: The Email Mini-Course</h2>
                <p className="text-gray-700 mb-4">
                  Break your webinar into 5 daily lessons. Each lesson covers one key concept from the presentation. Day 1 is the overview. Days 2-4 go deep on specific sections. Day 5 wraps up with action steps and a CTA.
                </p>
                <p className="text-gray-700 mb-4">
                  This is the most underrated lead magnet on this list. It does double duty: it captures the email address <em>and</em> it builds a 5-day relationship with the subscriber. By the time they finish, they have heard from you 5 times.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mb-2 mt-6">How to create it</h3>
                <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Divide your webinar into 5 logical sections. Most 60-minute webinars have a natural structure you can follow.</li>
                  <li>Write each email as a standalone lesson: 300-500 words. Subject line, one teaching point, one action item.</li>
                  <li>Set up an automated sequence in your email platform (ConvertKit, ActiveCampaign, Mailchimp). Space them 24 hours apart.</li>
                  <li>Email 5 should include a soft CTA -- a link to book a call, check out your program, or reply with questions.</li>
                  <li>Promote the mini-course the same way you would any lead magnet: landing page, social posts, blog CTAs.</li>
                </ol>
                <p className="text-gray-700">
                  If you already have <Link href="/blog/webinar-follow-up-email-sequence" className="text-blue-600 hover:text-blue-800 font-medium">a webinar follow-up email sequence</Link> in place, the mini-course is a natural next step. Different entry point, same nurture system.
                </p>
              </section>

              {/* CTA 2 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 text-center my-10">
                <p className="text-gray-900 text-lg font-semibold mb-2">
                  7 lead magnets. 1 webinar. Zero starting from scratch.
                </p>
                <p className="text-gray-600 mb-4">
                  We build these as part of our webinar repurposing service.
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

              {/* Decision Matrix */}
              <section id="decision-matrix" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Which Lead Magnet Should You Create First?</h2>
                <p className="text-gray-700 mb-4">
                  You do not need all seven at once. Start with one. But which one?
                </p>
                <p className="text-gray-700 mb-6">
                  Here is a decision matrix based on your situation, your niche, and how much time you have.
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">If you...</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Create this first</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Why</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Time needed</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Want the highest conversion rate', 'Cheat sheet', '34% conversion rate. Fast to create, fast to consume.', '30-60 min'],
                        ['Teach a step-by-step process', 'Checklist', 'Your process is already structured. Transfer it to a page.', '45-90 min'],
                        ['Want to build deep authority', 'Mini ebook', 'Positions you as the expert. Attracts serious leads.', '3-5 hours'],
                        ['Mentioned lots of tools/resources', 'Resource guide', 'High utility. Gets bookmarked and shared.', '60-90 min'],
                        ['Taught a customizable framework', 'Worksheet/template', 'Creates investment. Leads who fill it out are warm.', '2-3 hours'],
                        ['Have a high-demand webinar topic', 'Gated replay', 'Almost zero creation time. Just add a bonus segment.', '30-45 min'],
                        ['Want ongoing email engagement', 'Email mini-course', 'Builds a 5-day relationship. Best for nurture.', '3-4 hours'],
                      ].map((row, i) => (
                        <tr key={i}>
                          <td className="p-3 border border-gray-200 text-gray-700">{row[0]}</td>
                          <td className="p-3 border border-gray-200 font-medium text-gray-900">{row[1]}</td>
                          <td className="p-3 border border-gray-200 text-gray-700">{row[2]}</td>
                          <td className="p-3 border border-gray-200 text-gray-700 whitespace-nowrap">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 mb-4">
                  <strong>Our recommendation if you are unsure:</strong> start with the cheat sheet. It takes the least time, converts the best, and gives you a quick win. Then build out the checklist and worksheet as your second and third lead magnets.
                </p>
                <p className="text-gray-700">
                  And if you want the full picture of what one webinar can produce beyond lead magnets -- <Link href="/blog/webinar-repurposing-guide" className="text-blue-600 hover:text-blue-800 font-medium">our complete webinar repurposing guide</Link> covers all 14+ content formats.
                </p>
              </section>

              {/* Opt-In Funnel */}
              <section id="opt-in-funnel" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Setting Up the Opt-In Funnel in Under an Hour</h2>
                <p className="text-gray-700 mb-4">
                  A lead magnet without a delivery system is a PDF sitting on your hard drive. Here is the minimum viable funnel to get your lead magnet in front of people and capturing emails.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mb-2 mt-6">Step 1: Build a landing page (15 minutes)</h3>
                <p className="text-gray-700 mb-4">
                  Use ConvertKit, Leadpages, Carrd, or even a simple Notion page. You need a headline, 3-4 bullet points describing what they get, and an email capture form. That is the whole page.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mb-2 mt-6">Step 2: Connect your email platform (10 minutes)</h3>
                <p className="text-gray-700 mb-4">
                  Set up automatic delivery. When someone submits their email, they get the lead magnet immediately. ConvertKit and Mailchimp both do this natively. No custom code needed.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mb-2 mt-6">Step 3: Add a welcome email (15 minutes)</h3>
                <p className="text-gray-700 mb-4">
                  The delivery email should include the download link, a brief introduction to who you are, and a single question -- &quot;What is your biggest challenge with [topic]?&quot; Replies to this email are gold for understanding your audience.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mb-2 mt-6">Step 4: Promote it everywhere (20 minutes)</h3>
                <p className="text-gray-700 mb-4">
                  Add the lead magnet link to your LinkedIn profile, your email signature, your blog posts, and your social media bios. Mention it at the end of your next webinar. Include it in your <Link href="/blog/webinar-follow-up-email-sequence" className="text-blue-600 hover:text-blue-800 font-medium">webinar follow-up email sequence</Link>.
                </p>
                <p className="text-gray-700">
                  Total setup time: under 60 minutes. And once it is live, it captures leads 24/7 without you lifting a finger.
                </p>
              </section>

              {/* FAQ */}
              <section id="faq" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

                <div className="space-y-6">
                  {[
                    {
                      q: 'What is the best lead magnet to create from a webinar?',
                      a: 'Cheat sheets convert at 34%, making them the highest-converting format. They are also the fastest to create -- under 60 minutes from a webinar transcript. If your webinar teaches a process, a checklist (27% conversion rate) is a close second.',
                    },
                    {
                      q: 'How many lead magnets can I create from one webinar?',
                      a: 'At least 7. A single 60-minute webinar has enough material for a cheat sheet, checklist, mini ebook, resource guide, worksheet, gated replay, and email mini-course. You do not need to create all of them -- start with one and expand over time.',
                    },
                    {
                      q: 'How do I turn a webinar into an ebook?',
                      a: 'Pick one section (15-20 minutes of content), transcribe it, expand key points with examples and data, add an introduction and conclusion, and format as a 10-15 page PDF. The transcript gives you most of the content. Budget 3-5 hours for the first one.',
                    },
                    {
                      q: 'Do I need design skills to create lead magnets?',
                      a: 'No. Canva has templates for every format -- cheat sheets, checklists, ebooks, and worksheets. Google Docs works fine for simpler formats. The content matters more than the design. A plain checklist with great content outperforms a beautiful PDF with generic advice.',
                    },
                    {
                      q: 'How do I promote my webinar lead magnet?',
                      a: 'Add the opt-in link to your LinkedIn profile, email signature, blog posts, and social media bios. Mention it during live webinars. Include it in your follow-up email sequence. Create LinkedIn and social posts promoting the specific value of the lead magnet.',
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Stop Building Lead Magnets From Scratch</h2>
                <p className="text-gray-700 mb-4">
                  Your webinar already did the hard part. The thinking, the structuring, the teaching -- that is where the real effort goes. Turning that material into a lead magnet is extraction, not creation.
                </p>
                <p className="text-gray-700 mb-4">
                  Start with a cheat sheet. It takes 30-60 minutes and converts at 34%. Once that is working, add a checklist. Then a worksheet. Before long, you have multiple lead magnets -- all from one webinar, all driving email subscribers while you sleep.
                </p>
                <p className="text-gray-700 mb-4">
                  And lead magnets are only one piece of the puzzle. A single webinar can produce <Link href="/blog/webinar-content-pieces-breakdown" className="text-blue-600 hover:text-blue-800 font-medium">75+ content pieces</Link> across blog posts, social media, email, and more. The lead magnet captures the email. The rest of the system turns that subscriber into a client.
                </p>
                <p className="text-gray-700">
                  If you would rather focus on coaching and let someone else handle the repurposing, it is worth understanding <Link href="/blog/content-repurposing-diy-vs-service" className="text-blue-600 hover:text-blue-800 font-medium">the tradeoffs between DIY tools and done-for-you services</Link>. Or <a href="https://cal.com/contentrepurposehub/30min" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">book a free strategy call</a> and we will show you exactly what we can create from your next webinar.
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
              <Link href="/blog/webinar-follow-up-email-sequence" className="text-blue-600 hover:text-blue-700 font-medium">
                &larr; Webinar Follow-Up Email Sequences That Convert
              </Link>
              <Link href="/blog/webinar-evergreen-seo-content" className="text-blue-600 hover:text-blue-700 font-medium sm:text-right">
                How to Turn Webinars Into Evergreen SEO Assets &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <section className="py-16 gradient-bg px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Your Webinar Is Already a Lead Magnet Factory
            </h2>
            <p className="text-blue-100 text-lg mb-6">
              We create lead magnets, email sequences, blog posts, and 14-75+ content pieces from every webinar. All optimized for Google and AI search. Starting at $750/month.
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
