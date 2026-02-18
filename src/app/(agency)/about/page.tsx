import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | ContentRepurposeHub",
  description:
    "Meet Marius Galatan, founder of ContentRepurposeHub. We turn coaches' and consultants' webinars into full content systems — blog posts, email sequences, lead magnets, and more.",
  alternates: {
    canonical: "https://contentrepurposehub.com/about",
  },
  openGraph: {
    title: "About | ContentRepurposeHub",
    description:
      "Meet Marius Galatan, founder of ContentRepurposeHub. We turn coaches' and consultants' webinars into full content systems.",
    url: "https://contentrepurposehub.com/about",
    siteName: "ContentRepurposeHub",
    type: "profile",
    images: [
      {
        url: "https://contentrepurposehub.com/api/og?title=About%20%7C%20ContentRepurposeHub",
        width: 1200,
        height: 630,
        alt: "About ContentRepurposeHub",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://contentrepurposehub.com/#founder",
        name: "Marius Galatan",
        jobTitle: "Founder",
        worksFor: {
          "@type": "Organization",
          name: "ContentRepurposeHub",
          url: "https://contentrepurposehub.com",
        },
        knowsAbout: [
          "Content Strategy",
          "Search Engine Optimization",
          "Marketing Automation",
          "Webinar Repurposing",
          "AI Search Optimization",
        ],
        description:
          "Founder of ContentRepurposeHub. Helps coaches and consultants turn webinars into full content systems optimized for Google and AI search.",
      },
      {
        "@type": "AboutPage",
        name: "About ContentRepurposeHub",
        url: "https://contentrepurposehub.com/about",
        mainEntity: {
          "@id": "https://contentrepurposehub.com/#founder",
        },
        isPartOf: {
          "@type": "WebSite",
          name: "ContentRepurposeHub",
          url: "https://contentrepurposehub.com",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://contentrepurposehub.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: "https://contentrepurposehub.com/about",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-white">
        <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/"
              className="text-blue-300 hover:text-white text-sm transition mb-4 inline-block"
            >
              &larr; Back to ContentRepurposeHub
            </Link>
            <h1 className="text-4xl font-bold mt-2">About</h1>
            <p className="text-blue-200 mt-2">
              The team behind ContentRepurposeHub
            </p>
          </div>
        </header>

        <article className="max-w-3xl mx-auto px-4 py-12">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Marius Galatan
            </h2>
            <p className="text-blue-600 font-medium mb-6">
              Founder, ContentRepurposeHub
            </p>

            <div className="prose prose-lg prose-gray">
              <p>
                I help coaches and consultants turn their webinars into full
                content systems — blog posts, email sequences, lead magnets,
                LinkedIn content, and landing pages that drive leads on
                autopilot.
              </p>
              <p>
                My background spans content strategy, SEO, and marketing
                automation. I built ContentRepurposeHub after seeing the same
                pattern: coaches pour hours into a webinar, it gets watched
                once, and the expertise inside it never reaches the people who
                need it most.
              </p>
              <p>
                Every piece of content we create is optimized for both Google
                and AI search engines like ChatGPT, Perplexity, and Gemini — so
                your ideas get found no matter how people search.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  14-75+
                </div>
                <p className="text-gray-600 text-sm">
                  Content pieces from a single webinar — blog posts, LinkedIn
                  posts, email sequences, lead magnets, and more.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  Google + AI
                </div>
                <p className="text-gray-600 text-sm">
                  Every piece is optimized for traditional search and AI
                  assistants like ChatGPT, Perplexity, and Gemini.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  Full Funnel
                </div>
                <p className="text-gray-600 text-sm">
                  Not just clips. We build the blog, the lead magnet, the email
                  nurture, the social posts — the complete system.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <div className="prose prose-lg prose-gray">
              <p>
                You send us your webinar recording. We extract every useful
                idea, framework, and story — then turn it into a month of
                content across every channel your audience uses.
              </p>
              <p>
                Your voice stays consistent because everything comes from your
                own material. No generic content. No AI slop. Just your
                expertise, packaged for every platform.
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Turn Your Webinars Into a Content Engine?
            </h2>
            <p className="text-blue-200 mb-6 max-w-xl mx-auto">
              Starting at $750/month. 14-75+ content pieces from every webinar.
              No contracts. 30-day money-back guarantee.
            </p>
            <a
              href="https://cal.com/contentrepurposehub/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
            >
              Book Free Strategy Call &rarr;
            </a>
          </section>
        </article>

        <footer className="bg-gray-900 text-gray-400 py-12 px-4">
          <div className="max-w-3xl mx-auto text-center text-sm">
            <Link
              href="/"
              className="text-white font-bold text-lg hover:text-blue-400 transition"
            >
              Content<span className="text-blue-400">Repurpose</span>Hub
            </Link>
            <div className="flex justify-center gap-6 mt-4">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
              <Link href="/blog" className="hover:text-white transition">
                Blog
              </Link>
              <Link href="/about" className="text-white transition">
                About
              </Link>
              <Link href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition">
                Terms of Service
              </Link>
            </div>
            <p className="mt-6">
              &copy; 2026 ContentRepurposeHub. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
