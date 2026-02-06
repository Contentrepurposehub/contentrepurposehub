import { NextResponse } from "next/server"
import { renderToBuffer } from "@react-pdf/renderer"
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer"

const colors = {
  primary: "#2563eb",
  primaryDark: "#1d4ed8",
  secondary: "#7c3aed",
  success: "#059669",
  warning: "#d97706",
  dark: "#111827",
  gray: "#4b5563",
  lightGray: "#9ca3af",
  background: "#f8fafc",
  white: "#ffffff",
}

const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontFamily: "Helvetica",
    fontSize: 12,
    lineHeight: 1.6,
    backgroundColor: colors.white,
  },
  // Cover page styles
  coverPage: {
    padding: 50,
    fontFamily: "Helvetica",
    backgroundColor: colors.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  coverContent: {
    textAlign: "center",
    marginTop: 200,
  },
  coverBrand: {
    fontSize: 14,
    color: "#93c5fd",
    marginBottom: 20,
    letterSpacing: 2,
  },
  coverTitle: {
    fontSize: 36,
    fontFamily: "Helvetica-Bold",
    color: colors.white,
    marginBottom: 16,
    lineHeight: 1.2,
  },
  coverSubtitle: {
    fontSize: 18,
    color: "#bfdbfe",
    marginBottom: 40,
  },
  coverBox: {
    backgroundColor: "rgba(255,255,255,0.15)",
    padding: 20,
    borderRadius: 8,
    marginTop: 40,
  },
  coverBoxText: {
    fontSize: 14,
    color: colors.white,
    textAlign: "center",
  },
  coverFooter: {
    position: "absolute",
    bottom: 50,
    left: 50,
    right: 50,
    textAlign: "center",
  },
  coverFooterText: {
    fontSize: 11,
    color: "#93c5fd",
  },
  // Header styles
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  headerBrand: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
  },
  headerPage: {
    fontSize: 10,
    color: colors.lightGray,
  },
  // Intro styles
  introBox: {
    backgroundColor: "#eff6ff",
    padding: 24,
    marginBottom: 30,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  introTitle: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: colors.dark,
    marginBottom: 10,
  },
  introText: {
    fontSize: 13,
    color: colors.gray,
    lineHeight: 1.7,
  },
  // Section styles
  sectionHeader: {
    backgroundColor: colors.primary,
    padding: 14,
    marginTop: 24,
    marginBottom: 16,
    borderRadius: 6,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: colors.white,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  // Item styles
  item: {
    marginBottom: 20,
    backgroundColor: colors.background,
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  itemHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  itemNumber: {
    width: 32,
    height: 32,
    backgroundColor: colors.primary,
    borderRadius: 16,
    color: colors.white,
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
    paddingTop: 8,
    marginRight: 14,
  },
  itemTitleGroup: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: colors.dark,
    marginBottom: 4,
  },
  itemSubtitle: {
    fontSize: 12,
    color: colors.primary,
    fontFamily: "Helvetica-Bold",
  },
  itemDescription: {
    fontSize: 13,
    color: colors.gray,
    lineHeight: 1.7,
    marginBottom: 14,
  },
  // Pro tip box
  proTipBox: {
    backgroundColor: "#f0fdf4",
    padding: 14,
    borderRadius: 6,
    borderLeftWidth: 3,
    borderLeftColor: colors.success,
  },
  proTipLabel: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: colors.success,
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  proTipText: {
    fontSize: 12,
    color: "#065f46",
    lineHeight: 1.6,
  },
  // Summary page
  summaryBox: {
    backgroundColor: "#fef3c7",
    padding: 24,
    borderRadius: 8,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: "#fbbf24",
  },
  summaryTitle: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: colors.dark,
    marginBottom: 16,
    textAlign: "center",
  },
  summaryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  summaryItem: {
    width: "50%",
    paddingVertical: 6,
    paddingRight: 10,
  },
  summaryItemText: {
    fontSize: 12,
    color: colors.gray,
  },
  summaryTotal: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 6,
    marginTop: 16,
  },
  summaryTotalText: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: colors.white,
    textAlign: "center",
  },
  // CTA section
  ctaBox: {
    backgroundColor: colors.dark,
    padding: 30,
    borderRadius: 8,
    marginTop: 20,
  },
  ctaTitle: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    color: colors.white,
    marginBottom: 12,
    textAlign: "center",
  },
  ctaText: {
    fontSize: 13,
    color: "#d1d5db",
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 1.6,
  },
  ctaButton: {
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 6,
    marginHorizontal: 40,
  },
  ctaButtonText: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: colors.white,
    textAlign: "center",
  },
  ctaUrl: {
    fontSize: 11,
    color: "#9ca3af",
    textAlign: "center",
    marginTop: 12,
  },
  // Footer
  footer: {
    position: "absolute",
    bottom: 30,
    left: 50,
    right: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
  },
  footerText: {
    fontSize: 9,
    color: colors.lightGray,
  },
})

const checklistData = [
  {
    category: "Short-Form Video",
    emoji: "🎬",
    items: [
      {
        number: 1,
        title: "Vertical Video Clips",
        subtitle: "Create 3-5 clips per webinar",
        description:
          "Your webinar is full of gold. Those moments where you explained something perfectly, told a compelling story, or dropped an insight that made people lean in. Those moments become TikToks, Reels, and YouTube Shorts.",
        tip: "Watch your webinar at 1.5x speed. When something makes you think 'that was good,' timestamp it. Cut 30-60 second clips. Add captions (85% of people watch on mute). Post everywhere.",
      },
      {
        number: 2,
        title: "Audiogram Clips",
        subtitle: "Create 2-3 audiograms per webinar",
        description:
          "Sometimes the video quality isn't great, but the audio is fire. Audiograms let you share powerful moments with waveform animations. They work especially well on LinkedIn and Twitter where people scroll fast.",
        tip: "Use Headliner or Wavve. Pick your most quotable 60-90 second moments. Add your brand colors to the waveform. These are perfect for insights that don't need visual context.",
      },
    ],
  },
  {
    category: "Social Graphics",
    emoji: "🎨",
    items: [
      {
        number: 3,
        title: "Quote Cards",
        subtitle: "Create 5-8 cards per webinar",
        description:
          "Every webinar has 8-10 lines that would make people stop scrolling if they saw them on social media. Contrarian takes, memorable phrases, insights that challenge assumptions. Turn them into shareable graphics.",
        tip: "Transcribe your webinar. Highlight anything you'd want to tweet. Design simple graphics with your brand colors in Canva. One quote per image. Schedule them throughout the month.",
      },
    ],
  },
  {
    category: "Long-Form Content",
    emoji: "📝",
    items: [
      {
        number: 4,
        title: "Full Blog Post",
        subtitle: "1,500-2,500 words for SEO",
        description:
          "Your webinar is basically a rough draft of a blog post. The structure is there. The examples are there. The expertise is there. It just needs to be reformatted for readers instead of listeners.",
        tip: "Transcribe with Otter.ai or Descript. Remove filler words and repetition. Add H2 headers every 200-300 words. Put your target keyword in the title and first paragraph. This becomes evergreen content that ranks.",
      },
      {
        number: 5,
        title: "LinkedIn Article",
        subtitle: "800-1,200 words for thought leadership",
        description:
          "Pick the most valuable framework from your webinar and expand it into a LinkedIn article. These stay on your profile forever and continue generating views months after you publish.",
        tip: "Focus on ONE framework or insight, not the entire webinar. Start with a hook that creates curiosity. End with a clear takeaway. LinkedIn articles work best when they teach something specific and actionable.",
      },
      {
        number: 6,
        title: "Podcast Episode",
        subtitle: "Audio extraction with intro/outro",
        description:
          "If you did a webinar, you did a podcast episode. Strip the audio, clean it up, add a quick intro and outro. Done. If your webinar was interview-style, it already fits the podcast format perfectly.",
        tip: "Export audio from your recording. Use Descript to remove awkward pauses and clean up audio levels. Record a 30-second intro explaining what listeners will learn. Upload to your podcast host.",
      },
    ],
  },
  {
    category: "Lead Magnets",
    emoji: "🧲",
    items: [
      {
        number: 7,
        title: "PDF Checklist or Guide",
        subtitle: "1-2 pages that capture emails",
        description:
          "Did you share a process? A framework? A set of tips? That becomes a lead magnet. People love downloadable resources they can reference later. You capture their email. They get instant value.",
        tip: "Look for any numbered list or step-by-step process in your webinar. Format it cleanly in Canva or Google Docs. Export as PDF. Set it up with an email opt-in form. Promote it on social media.",
      },
      {
        number: 8,
        title: "Slide Deck Download",
        subtitle: "Your presentation as a resource",
        description:
          "Your slides already exist. Clean them up, remove anything that doesn't make sense without your voice, and offer them as a downloadable resource. Minimal effort, high perceived value.",
        tip: "Remove slides that need verbal explanation. Add context notes where helpful. Export as PDF. Offer as a 'bonus' for email subscribers or webinar attendees who want to review the material.",
      },
    ],
  },
  {
    category: "Social Media",
    emoji: "📱",
    items: [
      {
        number: 9,
        title: "Twitter/X Thread",
        subtitle: "8-15 tweets that teach",
        description:
          "Threads get saved, shared, and referenced more than single tweets. Take your webinar's main insights and break them into tweet-sized pieces. Each tweet should stand alone but flow together.",
        tip: "Start with a hook tweet that creates curiosity. One insight per tweet. Keep each under 280 characters. End with a CTA. Pin the thread to your profile for ongoing visibility.",
      },
      {
        number: 10,
        title: "LinkedIn Carousel",
        subtitle: "8-12 swipeable slides",
        description:
          "Carousels consistently outperform regular LinkedIn posts. Take a framework or process from your webinar, design one slide per point, and watch the saves pile up.",
        tip: "Slide 1: Hook that creates curiosity. Slides 2-10: One point per slide with a visual. Last slide: CTA and reminder of who you help. Use Canva's carousel templates to design quickly.",
      },
      {
        number: 11,
        title: "Micro-Lesson Posts",
        subtitle: "5-7 standalone social posts",
        description:
          "Each section of your webinar becomes its own social post. 'One thing I taught in my webinar last week...' gives you a full week of content without creating anything new.",
        tip: "Break your webinar into 5-7 distinct topics. Write a short post for each (150-300 words). Schedule them throughout the week. Each post is standalone value that points back to your expertise.",
      },
    ],
  },
  {
    category: "Email Content",
    emoji: "📧",
    items: [
      {
        number: 12,
        title: "Welcome Email Sequence",
        subtitle: "3-5 emails that nurture leads",
        description:
          "Someone downloads your lead magnet. Now what? A welcome sequence keeps you top of mind and builds the relationship. Each email delivers value from content you already created in your webinar.",
        tip: "Email 1: Deliver the lead magnet. Emails 2-4: Share one insight per email from your webinar. Email 5: Soft CTA to book a call or check out your offer. Keep emails short and valuable.",
      },
      {
        number: 13,
        title: "Newsletter Content",
        subtitle: "2-3 editions ready to send",
        description:
          "Your webinar Q&A is newsletter gold. The questions people asked reveal exactly what your audience wants to learn. Each question becomes a newsletter edition.",
        tip: "Review questions from your webinar (live Q&A, chat, or follow-up emails). Pick 2-3 that represent common struggles. Write a newsletter answering each one in depth. Your audience asked. You deliver.",
      },
    ],
  },
  {
    category: "Evergreen Assets",
    emoji: "🌲",
    items: [
      {
        number: 14,
        title: "YouTube Long-Form Video",
        subtitle: "Full webinar for search traffic",
        description:
          "Upload the full webinar to YouTube. Add chapters, write a keyword-rich description, create a custom thumbnail. Webinars often become top-performing YouTube content because they deliver serious value.",
        tip: "Edit out dead time and technical hiccups. Add chapter markers for easy navigation. Write a title targeting what people search for. Create a thumbnail that stands out. Let YouTube's algorithm do the work.",
      },
    ],
  },
]

function CoverPage() {
  return (
    <Page size="A4" style={styles.coverPage}>
      <View style={styles.coverContent}>
        <Text style={styles.coverBrand}>CONTENTREPURPOSEHUB</Text>
        <Text style={styles.coverTitle}>14 Content Ideas{"\n"}from Your Next Webinar</Text>
        <Text style={styles.coverSubtitle}>The Complete Repurposing Checklist</Text>

        <View style={styles.coverBox}>
          <Text style={styles.coverBoxText}>
            Turn one webinar into 30+ pieces of content.{"\n"}
            This checklist shows you exactly how.
          </Text>
        </View>
      </View>

      <View style={styles.coverFooter}>
        <Text style={styles.coverFooterText}>contentrepurposehub.com</Text>
      </View>
    </Page>
  )
}

function ContentPage({
  sections,
  pageNum,
  totalPages,
  showIntro = false,
}: {
  sections: typeof checklistData
  pageNum: number
  totalPages: number
  showIntro?: boolean
}) {
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.headerBrand}>ContentRepurposeHub</Text>
        <Text style={styles.headerPage}>
          Page {pageNum} of {totalPages}
        </Text>
      </View>

      {showIntro && (
        <View style={styles.introBox}>
          <Text style={styles.introTitle}>Before You Start</Text>
          <Text style={styles.introText}>
            You spent hours preparing and delivering that webinar. The insights, stories, and
            frameworks you shared are valuable. This checklist helps you extract every piece of
            content hiding in that recording. Work through it after each webinar, and you'll never
            run out of things to post.
          </Text>
        </View>
      )}

      {sections.map((section) => (
        <View key={section.category} wrap={false}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              {section.emoji} {section.category}
            </Text>
          </View>

          {section.items.map((item) => (
            <View key={item.number} style={styles.item} wrap={false}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemNumber}>{item.number}</Text>
                <View style={styles.itemTitleGroup}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
                </View>
              </View>

              <Text style={styles.itemDescription}>{item.description}</Text>

              <View style={styles.proTipBox}>
                <Text style={styles.proTipLabel}>How To Do It</Text>
                <Text style={styles.proTipText}>{item.tip}</Text>
              </View>
            </View>
          ))}
        </View>
      ))}
    </Page>
  )
}

function SummaryPage() {
  const items = [
    "3-5 vertical video clips",
    "2-3 audiogram clips",
    "5-8 quote cards",
    "1 SEO blog post",
    "1 LinkedIn article",
    "1 podcast episode",
    "1-2 PDF lead magnets",
    "1 Twitter/X thread",
    "1 LinkedIn carousel",
    "5-7 social media posts",
    "3-5 email sequence",
    "2-3 newsletter editions",
    "1 YouTube video",
  ]

  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.headerBrand}>ContentRepurposeHub</Text>
        <Text style={styles.headerPage}>Summary</Text>
      </View>

      <View style={styles.summaryBox}>
        <Text style={styles.summaryTitle}>From 1 Webinar, You Can Create:</Text>

        <View style={styles.summaryGrid}>
          {items.map((item, i) => (
            <View key={i} style={styles.summaryItem}>
              <Text style={styles.summaryItemText}>✓ {item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.summaryTotal}>
          <Text style={styles.summaryTotalText}>Total: 25-40+ Pieces of Content</Text>
        </View>
      </View>

      <View style={styles.ctaBox}>
        <Text style={styles.ctaTitle}>Want Us To Do This For You?</Text>
        <Text style={styles.ctaText}>
          Send us your webinar recording. We extract everything and deliver 14-75 ready-to-post
          content pieces. All optimized for Google and AI search engines.
        </Text>
        <View style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Book a Free Strategy Call</Text>
        </View>
        <Text style={styles.ctaUrl}>contentrepurposehub.com/call</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2026 ContentRepurposeHub</Text>
        <Text style={styles.footerText}>contentrepurposehub.com</Text>
      </View>
    </Page>
  )
}

function ChecklistPDF() {
  // Split items across pages
  const page1Sections = checklistData.slice(0, 2) // Short-Form Video, Social Graphics
  const page2Sections = checklistData.slice(2, 4) // Long-Form Content, Lead Magnets
  const page3Sections = checklistData.slice(4, 6) // Social Media, Email Content
  const page4Sections = checklistData.slice(6) // Evergreen Assets

  return (
    <Document>
      <CoverPage />
      <ContentPage sections={page1Sections} pageNum={1} totalPages={4} showIntro={true} />
      <ContentPage sections={page2Sections} pageNum={2} totalPages={4} />
      <ContentPage sections={page3Sections} pageNum={3} totalPages={4} />
      <ContentPage sections={page4Sections} pageNum={4} totalPages={4} />
      <SummaryPage />
    </Document>
  )
}

export async function GET() {
  const pdfBuffer = await renderToBuffer(<ChecklistPDF />)

  return new NextResponse(new Uint8Array(pdfBuffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="webinar-repurposing-checklist.pdf"',
    },
  })
}
