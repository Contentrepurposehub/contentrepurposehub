export const metadata = {
  title: "Complete Webinar Repurposing Checklist | ContentRepurposeHub",
  description: "The full 14-item checklist for repurposing your webinars into content. Exclusive access for subscribers.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function FullChecklistPage() {
  const allItems = [
    {
      number: 1,
      category: "Short-Form Video",
      title: "Vertical Video Clips",
      subtitle: "3-5 clips per webinar",
      description: "Pull your best 30 to 60 second moments. Look for clear explanations, surprising stats, memorable one-liners, or emotional stories. Add captions (most people watch without sound). Post to TikTok, Instagram Reels, YouTube Shorts, and LinkedIn.",
      howTo: "Watch your webinar and timestamp moments that made you think 'that was good.' Cut those segments. Use CapCut or Descript to add captions and format for vertical.",
    },
    {
      number: 2,
      category: "Short-Form Video",
      title: "Audiogram Clips",
      subtitle: "2-3 clips per webinar",
      description: "Turn audio-only highlights into videos with waveform animations. Works well when video quality isn't great or when the insight is purely verbal. LinkedIn and Twitter audiences respond well to audiograms.",
      howTo: "Extract audio from key moments. Use Headliner or Wavve to create waveform videos. Add your branding and captions. Keep them under 90 seconds.",
    },
    {
      number: 3,
      category: "Social Graphics",
      title: "Quote Cards",
      subtitle: "5-8 cards per webinar",
      description: "Your most tweetable lines become shareable graphics. These are the one-liners that make people stop scrolling. Look for contrarian takes, memorable phrases, or insights that challenge assumptions.",
      howTo: "Transcribe your webinar and highlight quotable moments. Design simple graphics with your brand colors. One quote per image. Post across all platforms.",
    },
    {
      number: 4,
      category: "Long-Form Content",
      title: "Full Blog Post",
      subtitle: "1,500-2,500 words",
      description: "Transcribe and edit your webinar into a comprehensive article. Clean up spoken-word patterns, add headers for structure, include relevant keywords for SEO. This becomes evergreen content that ranks on Google and gets cited by AI search tools.",
      howTo: "Use Otter.ai or Descript to transcribe. Edit for readability (remove filler words, repetition). Add H2 headers every 200-300 words. Include your target keyword in the title and first paragraph.",
    },
    {
      number: 5,
      category: "Long-Form Content",
      title: "LinkedIn Article or Newsletter",
      subtitle: "800-1,200 words",
      description: "Adapt your main framework or teaching into a LinkedIn long-form post. Focus on one core takeaway rather than covering everything. LinkedIn articles stay on your profile and continue generating views months later.",
      howTo: "Pick the most valuable framework from your webinar. Write an intro that hooks (problem or story). Explain the framework step by step. End with a CTA to your offer or another piece of content.",
    },
    {
      number: 6,
      category: "Long-Form Content",
      title: "Podcast Episode",
      subtitle: "Full audio extraction",
      description: "Strip the audio, clean it up, add an intro and outro. You now have a podcast episode. If your webinar had a guest or was interview-style, it already fits the podcast format perfectly.",
      howTo: "Export audio from your webinar recording. Use Descript or Audacity to clean up (remove long pauses, fix audio levels). Record a 30-second intro and outro. Upload to your podcast host.",
    },
    {
      number: 7,
      category: "Lead Magnets",
      title: "PDF Checklist or Cheat Sheet",
      subtitle: "1-2 page downloadable",
      description: "Turn your process or framework into a downloadable one-pager. This becomes an opt-in offer for people who missed the webinar or found you through other channels. Simple formats work best: checklists, cheat sheets, templates.",
      howTo: "Identify a process, framework, or list of tips from your webinar. Format it cleanly in Canva or Google Docs. Export as PDF. Set up as a lead magnet with email capture.",
    },
    {
      number: 8,
      category: "Lead Magnets",
      title: "Slide Deck Download",
      subtitle: "Presentation as resource",
      description: "Clean up your presentation slides and offer them as a downloadable resource. People love having reference material they can revisit. Low effort for you since the slides already exist.",
      howTo: "Remove any slides that don't make sense without your narration. Add context where needed. Export as PDF. Offer as a content upgrade or standalone lead magnet.",
    },
    {
      number: 9,
      category: "Social Media",
      title: "Twitter/X Thread",
      subtitle: "8-15 tweets",
      description: "Distill your webinar into a thread. One insight per tweet. Threads get bookmarked and shared more than single tweets. They also demonstrate expertise to people who discover your profile.",
      howTo: "Outline the main points of your webinar. Write each point as a standalone tweet (under 280 characters). Start with a hook tweet that makes people want to read more. End with a CTA.",
    },
    {
      number: 10,
      category: "Social Media",
      title: "LinkedIn Carousel",
      subtitle: "8-12 slides",
      description: "Turn key points into a swipeable carousel. These consistently outperform regular posts on LinkedIn. Save rates are high because people want to reference them later.",
      howTo: "Pick a framework or process from your webinar. One point per slide. Design in Canva using the carousel template. Include a hook on slide one, value in the middle, CTA on the last slide.",
    },
    {
      number: 11,
      category: "Social Media",
      title: "Micro-Lesson Posts",
      subtitle: "5-7 individual posts",
      description: "Each section of your webinar becomes its own standalone social post. 'One thing I taught in my webinar last week...' gives you a week of content without creating anything new.",
      howTo: "Break your webinar into distinct topics or lessons. Write a short post for each (150-300 words). Spread them across the week. Reference the webinar as the source.",
    },
    {
      number: 12,
      category: "Email Content",
      title: "Email Welcome Sequence",
      subtitle: "3-5 email series",
      description: "Create a sequence that delivers value from your webinar content. Each email dives deeper into one concept. Nurtures new subscribers and keeps your expertise top of mind until they're ready to buy.",
      howTo: "Map out the main insights from your webinar. Assign each insight to an email. Write in a conversational tone. End each email with a soft CTA or teaser for the next email.",
    },
    {
      number: 13,
      category: "Email Content",
      title: "Newsletter Content",
      subtitle: "2-3 editions worth",
      description: "Mine your Q&A section for newsletter topics. The questions people asked reveal what your audience actually wants to learn more about. Each question becomes a newsletter edition.",
      howTo: "Review questions from your webinar (live Q&A, chat, or follow-up emails). Pick questions that represent common struggles. Write a newsletter answering each one in depth.",
    },
    {
      number: 14,
      category: "Evergreen Assets",
      title: "YouTube Long-Form Video",
      subtitle: "Full webinar upload",
      description: "Upload the full webinar (or an edited version) to YouTube with proper titles, descriptions, and chapters. Webinars often become your best-performing YouTube content because they're comprehensive and valuable.",
      howTo: "Edit out any dead time or technical issues. Add chapter markers for easy navigation. Write a keyword-rich title and description. Create a custom thumbnail. Upload and optimize for search.",
    },
  ]

  const categories = [
    { name: "Short-Form Video", color: "bg-red-100 text-red-700" },
    { name: "Social Graphics", color: "bg-pink-100 text-pink-700" },
    { name: "Long-Form Content", color: "bg-blue-100 text-blue-700" },
    { name: "Lead Magnets", color: "bg-green-100 text-green-700" },
    { name: "Social Media", color: "bg-purple-100 text-purple-700" },
    { name: "Email Content", color: "bg-orange-100 text-orange-700" },
    { name: "Evergreen Assets", color: "bg-teal-100 text-teal-700" },
  ]

  const getCategoryColor = (category: string) => {
    const found = categories.find((c) => c.name === category)
    return found?.color || "bg-gray-100 text-gray-700"
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-4 print:bg-white print:text-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-100 text-sm font-medium mb-2 print:text-gray-500">
            ContentRepurposeHub
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            14 Content Ideas from Your Next Webinar
          </h1>
          <p className="text-blue-100 text-lg print:text-gray-600">
            The Complete Repurposing Checklist
          </p>
        </div>
      </header>

      {/* Intro */}
      <section className="py-8 px-4 border-b border-gray-100 print:py-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg">
            One webinar contains enough material for 30+ pieces of content. This checklist shows you exactly what to extract.
            Use it before, during, or after your next webinar to make sure nothing goes to waste.
          </p>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {allItems.map((item) => (
              <div key={item.number} className="border border-gray-200 rounded-xl p-6 print:border-gray-300 print:break-inside-avoid">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {item.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                    </div>
                    <p className="text-blue-600 text-sm font-medium">{item.subtitle}</p>
                  </div>
                </div>

                <div className="ml-16 space-y-3">
                  <p className="text-gray-600">{item.description}</p>

                  <div className="bg-gray-50 rounded-lg p-4 print:bg-gray-100">
                    <p className="text-sm font-semibold text-gray-700 mb-1">How to do it:</p>
                    <p className="text-gray-600 text-sm">{item.howTo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-8 px-4 bg-gray-50 print:bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Reference</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">From a 1-hour webinar, you can create:</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 3-5 vertical video clips</li>
                <li>• 2-3 audiograms</li>
                <li>• 5-8 quote cards</li>
                <li>• 1 blog post (1,500-2,500 words)</li>
                <li>• 1 LinkedIn article</li>
                <li>• 1 podcast episode</li>
                <li>• 1-2 PDF lead magnets</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Plus:</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 1 Twitter/X thread</li>
                <li>• 1 LinkedIn carousel</li>
                <li>• 5-7 social media posts</li>
                <li>• 3-5 email sequence</li>
                <li>• 2-3 newsletter editions</li>
                <li>• 1 YouTube video</li>
              </ul>
              <p className="text-gray-900 font-semibold mt-3">Total: 25-40+ pieces of content</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 print:hidden">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Want Us to Do This for You?
          </h2>
          <p className="text-gray-600 mb-6">
            Send us your webinar recording. We&apos;ll extract everything and deliver 14 to 75 ready-to-post content pieces.
            All optimized for Google and AI search.
          </p>
          <a
            href="https://calendly.com/contentrepurposehub/strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Book a Free Strategy Call
          </a>
          <p className="text-gray-500 text-sm mt-4">
            20 minutes. No pressure. See what we&apos;d create from your content.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-100 print:hidden">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2026 ContentRepurposeHub. All rights reserved.</p>
          <p className="mt-2">
            <a href="/" className="hover:text-gray-700">Homepage</a>
            {" · "}
            <a href="/#pricing" className="hover:text-gray-700">Pricing</a>
            {" · "}
<span className="text-gray-400">
              Tip: Press Ctrl+P (or Cmd+P) to print/save as PDF
            </span>
          </p>
        </div>
      </footer>
    </main>
  )
}
