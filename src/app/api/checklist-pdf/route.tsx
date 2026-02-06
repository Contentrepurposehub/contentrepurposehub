import { NextResponse } from "next/server"
import { renderToBuffer } from "@react-pdf/renderer"
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer"

const colors = {
  primary: "#2563eb",
  primaryLight: "#eff6ff",
  secondary: "#7c3aed",
  success: "#059669",
  successLight: "#ecfdf5",
  dark: "#111827",
  gray: "#4b5563",
  lightGray: "#9ca3af",
  background: "#f1f5f9",
  white: "#ffffff",
  accent: "#fbbf24",
}

const styles = StyleSheet.create({
  // Cover page
  coverPage: {
    padding: 60,
    backgroundColor: colors.primary,
  },
  coverTop: {
    marginTop: 80,
  },
  coverBrand: {
    fontSize: 28,
    fontFamily: "Helvetica-Bold",
    color: colors.white,
    marginBottom: 8,
  },
  coverBrandAccent: {
    color: colors.accent,
  },
  coverTagline: {
    fontSize: 12,
    color: "#93c5fd",
    letterSpacing: 1,
    marginBottom: 60,
  },
  coverTitle: {
    fontSize: 42,
    fontFamily: "Helvetica-Bold",
    color: colors.white,
    lineHeight: 1.1,
    marginBottom: 20,
  },
  coverSubtitle: {
    fontSize: 18,
    color: "#bfdbfe",
    marginBottom: 50,
  },
  coverValueBox: {
    backgroundColor: "rgba(255,255,255,0.15)",
    padding: 24,
    borderRadius: 8,
  },
  coverValueText: {
    fontSize: 16,
    color: colors.white,
    textAlign: "center",
    lineHeight: 1.5,
  },
  coverFooter: {
    position: "absolute",
    bottom: 60,
    left: 60,
    right: 60,
  },
  coverFooterText: {
    fontSize: 12,
    color: "#93c5fd",
    textAlign: "center",
  },

  // Content pages
  page: {
    padding: 45,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
    paddingBottom: 12,
    borderBottomWidth: 3,
    borderBottomColor: colors.primary,
  },
  headerBrand: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
  },
  headerBrandAccent: {
    color: colors.secondary,
  },
  headerPage: {
    fontSize: 11,
    color: colors.lightGray,
  },

  // Section headers
  sectionHeader: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderRadius: 6,
  },
  sectionTitle: {
    fontSize: 15,
    fontFamily: "Helvetica-Bold",
    color: colors.white,
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },

  // Items
  item: {
    backgroundColor: colors.white,
    padding: 18,
    marginBottom: 14,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  itemHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  itemNumber: {
    width: 28,
    height: 28,
    backgroundColor: colors.primary,
    borderRadius: 14,
    marginRight: 12,
  },
  itemNumberText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
    paddingTop: 6,
  },
  itemTitleGroup: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 15,
    fontFamily: "Helvetica-Bold",
    color: colors.dark,
    marginBottom: 3,
  },
  itemSubtitle: {
    fontSize: 11,
    color: colors.primary,
    fontFamily: "Helvetica-Bold",
  },
  itemDescription: {
    fontSize: 11,
    color: colors.gray,
    lineHeight: 1.6,
    marginBottom: 12,
    marginLeft: 40,
  },
  tipBox: {
    backgroundColor: colors.successLight,
    padding: 12,
    borderRadius: 6,
    marginLeft: 40,
    borderLeftWidth: 3,
    borderLeftColor: colors.success,
  },
  tipLabel: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: colors.success,
    marginBottom: 4,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  tipText: {
    fontSize: 10,
    color: "#065f46",
    lineHeight: 1.5,
  },

  // Summary page
  summaryPage: {
    padding: 45,
    backgroundColor: colors.background,
  },
  summaryBox: {
    backgroundColor: "#fef9c3",
    padding: 28,
    borderRadius: 10,
    marginBottom: 28,
    borderWidth: 2,
    borderColor: colors.accent,
  },
  summaryTitle: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: colors.dark,
    marginBottom: 20,
    textAlign: "center",
  },
  summaryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  summaryItem: {
    width: "50%",
    paddingVertical: 5,
  },
  summaryItemText: {
    fontSize: 12,
    color: colors.dark,
  },
  summaryTotalBox: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
  },
  summaryTotalText: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: colors.white,
    textAlign: "center",
  },

  // CTA
  ctaBox: {
    backgroundColor: colors.dark,
    padding: 32,
    borderRadius: 10,
  },
  ctaTitle: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    color: colors.white,
    marginBottom: 14,
    textAlign: "center",
  },
  ctaText: {
    fontSize: 13,
    color: "#d1d5db",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 1.6,
  },
  ctaButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignSelf: "center",
  },
  ctaButtonText: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: colors.white,
    textAlign: "center",
  },
  ctaUrl: {
    fontSize: 12,
    color: colors.lightGray,
    textAlign: "center",
    marginTop: 14,
  },

  // Footer
  footer: {
    position: "absolute",
    bottom: 25,
    left: 45,
    right: 45,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerText: {
    fontSize: 9,
    color: colors.lightGray,
  },
})

const checklistData = [
  {
    category: "SHORT-FORM VIDEO",
    items: [
      {
        number: 1,
        title: "Vertical Video Clips",
        subtitle: "Create 3-5 clips per webinar",
        description:
          "Your webinar is full of gold. Those moments where you explained something perfectly or told a compelling story. Those moments become TikToks, Reels, and YouTube Shorts.",
        tip: "Watch at 1.5x speed. Timestamp the good moments. Cut 30-60 second clips. Add captions (85% watch on mute). Post everywhere.",
      },
      {
        number: 2,
        title: "Audiogram Clips",
        subtitle: "Create 2-3 audiograms per webinar",
        description:
          "Sometimes video quality isn't great, but the audio is fire. Audiograms let you share powerful moments with waveform animations. Perfect for LinkedIn and Twitter.",
        tip: "Use Headliner or Wavve. Pick 60-90 second moments. Add your brand colors. Great for insights that don't need visual context.",
      },
    ],
  },
  {
    category: "SOCIAL GRAPHICS",
    items: [
      {
        number: 3,
        title: "Quote Cards",
        subtitle: "Create 5-8 cards per webinar",
        description:
          "Every webinar has 8-10 lines that would stop someone scrolling. Contrarian takes, memorable phrases, insights that challenge assumptions. Make them shareable.",
        tip: "Transcribe your webinar. Highlight tweetable moments. Design simple graphics in Canva. One quote per image. Schedule throughout the month.",
      },
    ],
  },
  {
    category: "LONG-FORM CONTENT",
    items: [
      {
        number: 4,
        title: "Full Blog Post",
        subtitle: "1,500-2,500 words for SEO",
        description:
          "Your webinar is a rough draft of a blog post. The structure, examples, and expertise are there. It just needs reformatting for readers.",
        tip: "Transcribe with Otter.ai. Remove filler words. Add H2 headers every 200-300 words. Include target keyword in title. This becomes evergreen content.",
      },
      {
        number: 5,
        title: "LinkedIn Article",
        subtitle: "800-1,200 words for thought leadership",
        description:
          "Pick your best framework and expand it into a LinkedIn article. These stay on your profile forever and keep generating views.",
        tip: "Focus on ONE framework. Start with curiosity. End with clear takeaway. LinkedIn articles work best when they teach something specific.",
      },
      {
        number: 6,
        title: "Podcast Episode",
        subtitle: "Audio extraction with intro/outro",
        description:
          "If you did a webinar, you did a podcast episode. Strip the audio, clean it up, add intro and outro. Done.",
        tip: "Export audio. Use Descript to remove pauses. Record 30-second intro. Upload to your podcast host.",
      },
    ],
  },
  {
    category: "LEAD MAGNETS",
    items: [
      {
        number: 7,
        title: "PDF Checklist or Guide",
        subtitle: "1-2 pages that capture emails",
        description:
          "Did you share a process or framework? That becomes a lead magnet. You capture emails. They get instant value.",
        tip: "Find any numbered list in your webinar. Format in Canva. Export as PDF. Set up email opt-in. Promote on social.",
      },
      {
        number: 8,
        title: "Slide Deck Download",
        subtitle: "Your presentation as a resource",
        description:
          "Your slides exist. Clean them up and offer as a download. Minimal effort, high perceived value.",
        tip: "Remove slides needing explanation. Add context notes. Export as PDF. Offer as bonus for subscribers.",
      },
    ],
  },
  {
    category: "SOCIAL MEDIA",
    items: [
      {
        number: 9,
        title: "Twitter/X Thread",
        subtitle: "8-15 tweets that teach",
        description:
          "Threads get saved and shared more than single tweets. Break your insights into tweet-sized pieces that flow together.",
        tip: "Hook tweet first. One insight per tweet. Under 280 characters. End with CTA. Pin to profile.",
      },
      {
        number: 10,
        title: "LinkedIn Carousel",
        subtitle: "8-12 swipeable slides",
        description:
          "Carousels outperform regular posts. Take a framework, design one slide per point, watch the saves pile up.",
        tip: "Slide 1: Hook. Slides 2-10: One point each. Last slide: CTA. Use Canva carousel templates.",
      },
      {
        number: 11,
        title: "Micro-Lesson Posts",
        subtitle: "5-7 standalone social posts",
        description:
          "Each webinar section becomes its own post. A full week of content without creating anything new.",
        tip: "Break into 5-7 topics. Write 150-300 words each. Schedule throughout the week.",
      },
    ],
  },
  {
    category: "EMAIL CONTENT",
    items: [
      {
        number: 12,
        title: "Welcome Email Sequence",
        subtitle: "3-5 emails that nurture leads",
        description:
          "Someone downloads your lead magnet. A welcome sequence keeps you top of mind and builds the relationship.",
        tip: "Email 1: Deliver magnet. Emails 2-4: One insight each. Email 5: Soft CTA. Keep emails short.",
      },
      {
        number: 13,
        title: "Newsletter Content",
        subtitle: "2-3 editions ready to send",
        description:
          "Your webinar Q&A is newsletter gold. The questions reveal what your audience wants to learn.",
        tip: "Review Q&A questions. Pick common struggles. Write newsletter answering each in depth.",
      },
    ],
  },
  {
    category: "EVERGREEN ASSETS",
    items: [
      {
        number: 14,
        title: "YouTube Long-Form Video",
        subtitle: "Full webinar for search traffic",
        description:
          "Upload to YouTube with chapters and keyword-rich description. Often becomes top-performing content.",
        tip: "Edit out dead time. Add chapter markers. Write searchable title. Create thumbnail. Let algorithm work.",
      },
    ],
  },
]

function CoverPage() {
  return (
    <Page size="A4" style={styles.coverPage}>
      <View style={styles.coverTop}>
        <Text style={styles.coverBrand}>
          Content<Text style={styles.coverBrandAccent}>Repurpose</Text>Hub
        </Text>
        <Text style={styles.coverTagline}>WEBINAR REPURPOSING SERVICE</Text>

        <Text style={styles.coverTitle}>14 Content Ideas{"\n"}From Your Next{"\n"}Webinar</Text>
        <Text style={styles.coverSubtitle}>The Complete Repurposing Checklist</Text>

        <View style={styles.coverValueBox}>
          <Text style={styles.coverValueText}>
            Turn one webinar into 30+ pieces of content.{"\n"}This checklist shows you exactly how.
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
}: {
  sections: typeof checklistData
  pageNum: number
  totalPages: number
}) {
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.headerBrand}>
          Content<Text style={styles.headerBrandAccent}>Repurpose</Text>Hub
        </Text>
        <Text style={styles.headerPage}>Page {pageNum} of {totalPages}</Text>
      </View>

      {sections.map((section) => (
        <View key={section.category}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{section.category}</Text>
          </View>

          {section.items.map((item) => (
            <View key={item.number} style={styles.item} wrap={false}>
              <View style={styles.itemHeader}>
                <View style={styles.itemNumber}>
                  <Text style={styles.itemNumberText}>{item.number}</Text>
                </View>
                <View style={styles.itemTitleGroup}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
                </View>
              </View>

              <Text style={styles.itemDescription}>{item.description}</Text>

              <View style={styles.tipBox}>
                <Text style={styles.tipLabel}>How To Do It</Text>
                <Text style={styles.tipText}>{item.tip}</Text>
              </View>
            </View>
          ))}
        </View>
      ))}

      <View style={styles.footer}>
        <Text style={styles.footerText}>contentrepurposehub.com</Text>
        <Text style={styles.footerText}>Page {pageNum}</Text>
      </View>
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
    <Page size="A4" style={styles.summaryPage}>
      <View style={styles.header}>
        <Text style={styles.headerBrand}>
          Content<Text style={styles.headerBrandAccent}>Repurpose</Text>Hub
        </Text>
        <Text style={styles.headerPage}>Summary</Text>
      </View>

      <View style={styles.summaryBox}>
        <Text style={styles.summaryTitle}>From 1 Webinar, You Can Create:</Text>

        <View style={styles.summaryGrid}>
          {items.map((item, i) => (
            <View key={i} style={styles.summaryItem}>
              <Text style={styles.summaryItemText}>* {item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.summaryTotalBox}>
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
        <Text style={styles.ctaUrl}>contentrepurposehub.com</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2026 ContentRepurposeHub</Text>
        <Text style={styles.footerText}>contentrepurposehub.com</Text>
      </View>
    </Page>
  )
}

function ChecklistPDF() {
  const page1 = checklistData.slice(0, 2)
  const page2 = checklistData.slice(2, 4)
  const page3 = checklistData.slice(4, 6)
  const page4 = checklistData.slice(6)

  return (
    <Document>
      <CoverPage />
      <ContentPage sections={page1} pageNum={1} totalPages={4} />
      <ContentPage sections={page2} pageNum={2} totalPages={4} />
      <ContentPage sections={page3} pageNum={3} totalPages={4} />
      <ContentPage sections={page4} pageNum={4} totalPages={4} />
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
