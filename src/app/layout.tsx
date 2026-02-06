import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Webinar Repurposing Service | Turn 1 Webinar into 75+ Content Pieces | ContentRepurposeHub",
  description: "Webinar repurposing for coaches and consultants. We transform your webinars into lead magnets, LinkedIn posts, blog articles, newsletters, and email sequences. All content optimized for Google and AI search. Starting at $750/month.",
  keywords: "webinar repurposing, webinar repurposing service, content repurposing, repurpose webinar content, webinar to blog post, webinar to LinkedIn, content marketing for coaches, SEO content, AI search optimization",
  authors: [{ name: "ContentRepurposeHub" }],
  creator: "ContentRepurposeHub",
  publisher: "ContentRepurposeHub",
  category: "Business Services",
  classification: "Content Marketing Service",
  openGraph: {
    title: "Turn 1 Webinar into 75+ Content Pieces | ContentRepurposeHub",
    description: "Webinar repurposing service for coaches. We create lead magnets, LinkedIn posts, blog articles, newsletters, and email sequences from your webinars. All optimized for Google + AI search.",
    url: "https://contentrepurposehub.com",
    siteName: "ContentRepurposeHub",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://contentrepurposehub.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "ContentRepurposeHub - Webinar Repurposing Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webinar Repurposing | 1 Webinar → 75+ Content Pieces",
    description: "Turn your webinars into lead magnets, LinkedIn posts, blog articles, and more. Google + AI search optimized.",
    images: ["https://contentrepurposehub.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://contentrepurposehub.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* LLM Discovery Tags */}
        <meta name="ai-content-type" content="service-page" />
        <meta name="service-type" content="webinar repurposing" />
        <meta name="pricing" content="$750-$1500/month" />
        <meta name="service-area" content="United States" />
        <meta name="target-audience" content="coaches, consultants, course creators" />
        <link rel="llms" href="/llms.txt" />
      </head>
      <body className="antialiased">
        {children}
        
        {/* Beehiiv Attribution Tracking */}
        <Script
          src="https://subscribe-forms.beehiiv.com/attribution.js"
          strategy="afterInteractive"
        />

        {/* Botsonic Chat Widget */}
        <Script
          id="botsonic-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function (w, d, s, o, f, js, fjs) {
                w["botsonic_widget"] = o;
                w[o] = w[o] || function () {
                  (w[o].q = w[o].q || []).push(arguments);
                };
                (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
                js.id = o;
                js.src = f;
                js.async = 1;
                fjs.parentNode.insertBefore(js, fjs);
              })(window, document, "script", "Botsonic", "https://widget.botsonic.com/CDN/botsonic.min.js");
              Botsonic("init", {
                serviceBaseUrl: "https://api-bot.writesonic.com",
                token: "affcc016-e143-4fbd-a36d-5840c4a658a4",
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
