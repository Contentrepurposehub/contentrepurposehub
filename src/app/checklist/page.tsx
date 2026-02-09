import BeehiivSubscribeForm from "@/components/BeehiivSubscribeForm"

export const metadata = {
  title: "Free Webinar Repurposing Checklist | ContentRepurposeHub",
  description: "Get 14 content ideas from your next webinar. Free checklist for coaches and consultants who want to maximize their webinar ROI.",
}

export default function ChecklistPage() {
  const freeItems = [
    {
      number: 1,
      title: "Vertical Video Clips",
      subtitle: "3-5 clips per webinar",
      problem: "You spent an hour delivering insights on camera. The next day, you're staring at a blank screen trying to think of something to post on Instagram or TikTok.",
      solution: "Your webinar already has the content. Pull 30 to 60 second moments where you explained something clearly, told a story, or dropped a memorable line. Add captions. Post to Reels, TikTok, YouTube Shorts, and LinkedIn.",
      example: "Say you run a webinar on pricing strategies. You'd pull four clips: one where you explain why discounting kills perceived value, one story about a client who tripled their prices, and two quick tips. Those four clips can generate more engagement than a month of original content — because they're real moments, not scripted posts.",
    },
    {
      number: 2,
      title: "SEO Blog Post",
      subtitle: "1,500-2,500 words",
      problem: "You want to rank on Google for topics in your niche. But writing long-form content takes hours, and you keep pushing it to next week.",
      solution: "Your webinar is already a rough draft of a blog post. Transcribe it, clean up the spoken-word rambling, add headers and structure, and you have a comprehensive article. The content exists. It just needs reformatting.",
      example: "Say you run a webinar called 'How to Land Your First Coaching Client.' That transcription becomes a 2,000+ word blog post targeting that exact search phrase. Now you have an article working for you on Google 24/7 — every visitor is someone actively searching for what you sell.",
    },
    {
      number: 3,
      title: "LinkedIn Carousel",
      subtitle: "8-12 slides",
      problem: "Carousels perform well on LinkedIn, but designing them takes forever. You've got client work to do. The carousel idea sits in your notes app, untouched.",
      solution: "Take a framework or process from your webinar and break it into slides. Each slide covers one step or one point. You already explained it verbally. Now it becomes visual content that gets saved and shared.",
      example: "Say you explain a 6-step client onboarding process in your webinar. Those six steps become a carousel — one step per slide, plus an intro and a CTA slide. Carousels get saved and shared because people want to reference them later. One post, working for weeks.",
    },
    {
      number: 4,
      title: "Email Welcome Sequence",
      subtitle: "3-5 emails",
      problem: "Someone downloads your lead magnet. They get one email with the PDF. Then silence. You know you should nurture them, but writing email sequences feels like a project you never start.",
      solution: "Your webinar contains stories, insights, and teaching moments. Pull them out and spread them across a sequence. Each email delivers value from content you already created. The subscriber gets nurtured. You get leads who actually remember you when they're ready to buy.",
      example: "Say you have a webinar on building online courses. Email one delivers your lead magnet. Emails two through four share specific insights from the webinar. Email five invites them to a strategy call. Every email has real substance because it's pulled from content you already created — not filler.",
    },
    {
      number: 5,
      title: "PDF Lead Magnet",
      subtitle: "Checklist, guide, or framework",
      problem: "You need something to offer in exchange for emails. Creating a lead magnet from scratch means research, writing, design. It keeps getting delayed.",
      solution: "Look at your webinar. Did you share a framework? A checklist? A step-by-step process? That becomes your lead magnet. Pull it out, format it cleanly, and you have a PDF that captures emails and demonstrates your expertise.",
      example: "Say you mention a '7-question discovery call framework' in minute 34 of your webinar. You almost forgot you said it. Those seven questions become a one-page PDF that captures emails and demonstrates your expertise — all from something you said off the cuff.",
    },
  ]

  const lockedItems = [
    { number: 6, title: "Audiogram Clips", subtitle: "Audio highlights with waveform visuals" },
    { number: 7, title: "Quote Cards", subtitle: "Your best one-liners as shareable graphics" },
    { number: 8, title: "LinkedIn Article", subtitle: "Long-form thought leadership" },
    { number: 9, title: "Podcast Episode", subtitle: "Audio content from your recording" },
    { number: 10, title: "Twitter/X Thread", subtitle: "Your key insights in thread format" },
    { number: 11, title: "Micro-Lesson Posts", subtitle: "Daily social content from webinar sections" },
    { number: 12, title: "Newsletter Edition", subtitle: "Email content for your list" },
    { number: 13, title: "Slide Deck Download", subtitle: "Presentation as a lead magnet" },
    { number: 14, title: "YouTube Long-Form Video", subtitle: "Evergreen content that ranks" },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="font-bold text-xl text-gray-900">
            Content<span className="text-blue-600">Repurpose</span>Hub
          </a>
          <a
            href="/#pricing"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            See Pricing
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
            Free Resource
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            14 Content Ideas from Your Next Webinar
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            You spent hours on that webinar. Here&apos;s how to turn it into a month of content.
          </p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Most webinars get used once. You deliver it live, maybe upload the replay, then move on to the next thing.
              Meanwhile, that recording contains enough material for weeks of content. LinkedIn posts, blog articles,
              email sequences, lead magnets. All sitting in a Zoom folder.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              This checklist shows you exactly what to extract. Below are 5 content types you can create from any webinar,
              with examples of how each one works.
            </p>
          </div>
        </div>
      </section>

      {/* Free Items */}
      <section className="pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            5 Content Ideas (Free Preview)
          </h2>

          <div className="space-y-8">
            {freeItems.map((item) => (
              <div key={item.number} className="bg-white border border-gray-200 rounded-xl p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-blue-600 text-sm font-medium">{item.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-4 ml-0 md:ml-14">
                  <div>
                    <p className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-1">The Problem</p>
                    <p className="text-gray-600">{item.problem}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-1">The Solution</p>
                    <p className="text-gray-600">{item.solution}</p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-1">How This Works</p>
                    <p className="text-gray-700 text-sm">{item.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locked Items */}
      <section className="pb-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Plus 9 More Content Ideas
            </h2>
            <p className="text-gray-600 mb-6">
              Get the complete checklist with all 14 content types, including examples and how-to guidance for each.
            </p>

            <div className="grid md:grid-cols-2 gap-3">
              {lockedItems.map((item) => (
                <div key={item.number} className="flex items-center gap-3 bg-white/60 rounded-lg p-3 border border-gray-200">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 font-bold text-sm flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Get the Complete Checklist
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              All 14 content ideas with full descriptions, examples, and step-by-step guidance. Free. Instant download.
            </p>

            {/* Beehiiv Form */}
            <div className="bg-white rounded-xl p-6">
              <BeehiivSubscribeForm />
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500 mt-4">
                <span className="flex items-center gap-1">
                  <span className="text-green-500">✓</span> Instant PDF download
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-green-500">✓</span> No spam, unsubscribe anytime
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-green-500">✓</span> Just the checklist, nothing else
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Reminder */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Happens After You Download
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            You&apos;ll look at your webinar recordings differently. That folder of &quot;old content&quot; becomes a library of raw material.
            Every recording holds posts, articles, emails, and lead magnets waiting to be extracted.
          </p>
          <p className="text-gray-600">
            The checklist shows you exactly what to look for. The rest is up to you.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2026 ContentRepurposeHub. All rights reserved.</p>
          <p className="mt-2">
            <a href="/" className="hover:text-gray-700">Back to Homepage</a>
            {" · "}
            <a href="/#pricing" className="hover:text-gray-700">See Pricing</a>
          </p>
        </div>
      </footer>
    </main>
  )
}
