import { NextResponse } from "next/server"
import { renderToBuffer } from "@react-pdf/renderer"
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.5,
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#2563eb",
    paddingBottom: 15,
  },
  brand: {
    fontSize: 8,
    color: "#6b7280",
    marginBottom: 4,
  },
  title: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: "#111827",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 12,
    color: "#4b5563",
  },
  intro: {
    backgroundColor: "#f3f4f6",
    padding: 12,
    marginBottom: 20,
    borderRadius: 4,
  },
  introText: {
    fontSize: 10,
    color: "#374151",
    lineHeight: 1.6,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: "#111827",
    marginTop: 16,
    marginBottom: 10,
    backgroundColor: "#eff6ff",
    padding: 8,
  },
  item: {
    marginBottom: 14,
    paddingLeft: 8,
    borderLeftWidth: 3,
    borderLeftColor: "#2563eb",
  },
  itemHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  itemNumber: {
    width: 20,
    height: 20,
    backgroundColor: "#2563eb",
    borderRadius: 10,
    color: "#ffffff",
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
    paddingTop: 4,
    marginRight: 8,
  },
  itemTitle: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: "#111827",
  },
  itemSubtitle: {
    fontSize: 9,
    color: "#2563eb",
    marginLeft: 28,
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 9,
    color: "#4b5563",
    marginLeft: 28,
    marginBottom: 4,
  },
  howTo: {
    backgroundColor: "#f9fafb",
    padding: 8,
    marginLeft: 28,
    marginTop: 4,
    borderRadius: 3,
  },
  howToLabel: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: "#374151",
    marginBottom: 2,
  },
  howToText: {
    fontSize: 8,
    color: "#6b7280",
  },
  summarySection: {
    marginTop: 20,
    padding: 12,
    backgroundColor: "#f0fdf4",
    borderRadius: 4,
  },
  summaryTitle: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: "#111827",
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 9,
    color: "#374151",
  },
  summaryBold: {
    fontFamily: "Helvetica-Bold",
  },
  footer: {
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    textAlign: "center",
  },
  footerText: {
    fontSize: 9,
    color: "#6b7280",
    marginBottom: 4,
  },
  footerCta: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#2563eb",
    marginTop: 8,
  },
  pageNumber: {
    position: "absolute",
    bottom: 20,
    right: 40,
    fontSize: 8,
    color: "#9ca3af",
  },
})

const checklistItems = [
  {
    category: "Short-Form Video",
    items: [
      {
        number: 1,
        title: "Vertical Video Clips",
        subtitle: "3-5 clips per webinar",
        description:
          "Pull your best 30 to 60 second moments. Look for clear explanations, surprising stats, memorable one-liners, or emotional stories. Add captions. Post to TikTok, Instagram Reels, YouTube Shorts, and LinkedIn.",
        howTo:
          "Watch your webinar and timestamp moments that made you think 'that was good.' Cut those segments. Use CapCut or Descript to add captions and format for vertical.",
      },
      {
        number: 2,
        title: "Audiogram Clips",
        subtitle: "2-3 clips per webinar",
        description:
          "Turn audio-only highlights into videos with waveform animations. Works well when video quality isn't great or when the insight is purely verbal.",
        howTo:
          "Extract audio from key moments. Use Headliner or Wavve to create waveform videos. Add your branding and captions. Keep them under 90 seconds.",
      },
    ],
  },
  {
    category: "Social Graphics",
    items: [
      {
        number: 3,
        title: "Quote Cards",
        subtitle: "5-8 cards per webinar",
        description:
          "Your most tweetable lines become shareable graphics. Look for contrarian takes, memorable phrases, or insights that challenge assumptions.",
        howTo:
          "Transcribe your webinar and highlight quotable moments. Design simple graphics with your brand colors. One quote per image.",
      },
    ],
  },
  {
    category: "Long-Form Content",
    items: [
      {
        number: 4,
        title: "Full Blog Post",
        subtitle: "1,500-2,500 words",
        description:
          "Transcribe and edit your webinar into a comprehensive article. Clean up spoken-word patterns, add headers for structure. This becomes evergreen content that ranks on Google.",
        howTo:
          "Use Otter.ai or Descript to transcribe. Edit for readability. Add H2 headers every 200-300 words. Include your target keyword in the title and first paragraph.",
      },
      {
        number: 5,
        title: "LinkedIn Article",
        subtitle: "800-1,200 words",
        description:
          "Adapt your main framework or teaching into a LinkedIn long-form post. Focus on one core takeaway rather than covering everything.",
        howTo:
          "Pick the most valuable framework from your webinar. Write an intro that hooks. Explain the framework step by step. End with a CTA.",
      },
      {
        number: 6,
        title: "Podcast Episode",
        subtitle: "Full audio extraction",
        description:
          "Strip the audio, clean it up, add an intro and outro. If your webinar had a guest, it already fits the podcast format perfectly.",
        howTo:
          "Export audio from your webinar recording. Use Descript or Audacity to clean up. Record a 30-second intro and outro. Upload to your podcast host.",
      },
    ],
  },
  {
    category: "Lead Magnets",
    items: [
      {
        number: 7,
        title: "PDF Checklist or Cheat Sheet",
        subtitle: "1-2 page downloadable",
        description:
          "Turn your process or framework into a downloadable one-pager. This becomes an opt-in offer for email capture.",
        howTo:
          "Identify a process, framework, or list from your webinar. Format it cleanly in Canva or Google Docs. Export as PDF. Set up as a lead magnet.",
      },
      {
        number: 8,
        title: "Slide Deck Download",
        subtitle: "Presentation as resource",
        description:
          "Clean up your presentation slides and offer them as a downloadable resource. Low effort since the slides already exist.",
        howTo:
          "Remove slides that don't make sense without narration. Add context where needed. Export as PDF. Offer as a content upgrade.",
      },
    ],
  },
  {
    category: "Social Media",
    items: [
      {
        number: 9,
        title: "Twitter/X Thread",
        subtitle: "8-15 tweets",
        description:
          "Distill your webinar into a thread. One insight per tweet. Threads get bookmarked and shared more than single tweets.",
        howTo:
          "Outline the main points. Write each as a standalone tweet. Start with a hook. End with a CTA.",
      },
      {
        number: 10,
        title: "LinkedIn Carousel",
        subtitle: "8-12 slides",
        description:
          "Turn key points into a swipeable carousel. These consistently outperform regular posts on LinkedIn.",
        howTo:
          "Pick a framework from your webinar. One point per slide. Design in Canva. Include hook on slide one, CTA on last slide.",
      },
      {
        number: 11,
        title: "Micro-Lesson Posts",
        subtitle: "5-7 individual posts",
        description:
          "Each section of your webinar becomes its own standalone social post. A week of content without creating anything new.",
        howTo:
          "Break your webinar into distinct topics. Write a short post for each (150-300 words). Spread them across the week.",
      },
    ],
  },
  {
    category: "Email Content",
    items: [
      {
        number: 12,
        title: "Email Welcome Sequence",
        subtitle: "3-5 email series",
        description:
          "Create a sequence that delivers value from your webinar content. Each email dives deeper into one concept.",
        howTo:
          "Map out the main insights. Assign each to an email. Write in a conversational tone. End each email with a soft CTA.",
      },
      {
        number: 13,
        title: "Newsletter Content",
        subtitle: "2-3 editions worth",
        description:
          "Mine your Q&A section for newsletter topics. The questions people asked reveal what your audience wants to learn.",
        howTo:
          "Review questions from your webinar. Pick questions that represent common struggles. Write a newsletter answering each.",
      },
    ],
  },
  {
    category: "Evergreen Assets",
    items: [
      {
        number: 14,
        title: "YouTube Long-Form Video",
        subtitle: "Full webinar upload",
        description:
          "Upload the full webinar to YouTube with proper titles, descriptions, and chapters. Often becomes your best-performing YouTube content.",
        howTo:
          "Edit out dead time. Add chapter markers. Write a keyword-rich title and description. Create a custom thumbnail.",
      },
    ],
  },
]

function ChecklistPDF() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.brand}>ContentRepurposeHub</Text>
          <Text style={styles.title}>14 Content Ideas from Your Next Webinar</Text>
          <Text style={styles.subtitle}>The Complete Repurposing Checklist</Text>
        </View>

        <View style={styles.intro}>
          <Text style={styles.introText}>
            One webinar contains enough material for 30+ pieces of content. This checklist shows you
            exactly what to extract. Use it before, during, or after your next webinar to make sure
            nothing goes to waste.
          </Text>
        </View>

        {checklistItems.slice(0, 4).map((section) => (
          <View key={section.category}>
            <Text style={styles.sectionTitle}>{section.category}</Text>
            {section.items.map((item) => (
              <View key={item.number} style={styles.item}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemNumber}>{item.number}</Text>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                </View>
                <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <View style={styles.howTo}>
                  <Text style={styles.howToLabel}>How to do it:</Text>
                  <Text style={styles.howToText}>{item.howTo}</Text>
                </View>
              </View>
            ))}
          </View>
        ))}

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        />
      </Page>

      <Page size="A4" style={styles.page}>
        {checklistItems.slice(4).map((section) => (
          <View key={section.category}>
            <Text style={styles.sectionTitle}>{section.category}</Text>
            {section.items.map((item) => (
              <View key={item.number} style={styles.item}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemNumber}>{item.number}</Text>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                </View>
                <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <View style={styles.howTo}>
                  <Text style={styles.howToLabel}>How to do it:</Text>
                  <Text style={styles.howToText}>{item.howTo}</Text>
                </View>
              </View>
            ))}
          </View>
        ))}

        <View style={styles.summarySection}>
          <Text style={styles.summaryTitle}>Quick Summary: From 1 Webinar You Can Create</Text>
          <Text style={styles.summaryText}>
            • 3-5 vertical video clips  • 2-3 audiograms  • 5-8 quote cards  • 1 blog post  • 1
            LinkedIn article  • 1 podcast episode  • 1-2 PDF lead magnets  • 1 Twitter thread  • 1
            LinkedIn carousel  • 5-7 social posts  • 3-5 email sequence  • 2-3 newsletter editions
            • 1 YouTube video
          </Text>
          <Text style={[styles.summaryText, styles.summaryBold, { marginTop: 8 }]}>
            Total: 25-40+ pieces of content from a single recording
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Want us to do this for you? We turn your webinars into 14-75 ready-to-post content
            pieces.
          </Text>
          <Text style={styles.footerCta}>Book a free strategy call: contentrepurposehub.com</Text>
          <Text style={[styles.footerText, { marginTop: 12 }]}>
            © 2026 ContentRepurposeHub. All rights reserved.
          </Text>
        </View>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        />
      </Page>
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
