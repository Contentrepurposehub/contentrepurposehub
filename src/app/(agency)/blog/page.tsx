import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Webinar Repurposing Blog | Tips, Guides & Strategies | ContentRepurposeHub',
  description: 'Learn how to repurpose your webinars into blog posts, LinkedIn posts, email sequences, lead magnets, and more. Free guides for coaches and consultants.',
  alternates: {
    canonical: 'https://contentrepurposehub.com/blog',
  },
  openGraph: {
    title: 'Webinar Repurposing Blog | ContentRepurposeHub',
    description: 'Free guides on turning your webinars into lead-generating content. For coaches, consultants, and course creators.',
    url: 'https://contentrepurposehub.com/blog',
    siteName: 'ContentRepurposeHub',
    type: 'website',
  },
}

const posts = [
  {
    slug: 'webinar-repurposing-guide',
    title: 'Webinar Repurposing: How to Turn 1 Webinar Into 14+ Content Pieces',
    description: 'The complete guide to webinar repurposing for coaches and consultants. Learn 14 proven ways to transform a single webinar into blog posts, LinkedIn posts, email sequences, lead magnets, and more.',
    date: '2026-02-09',
    readTime: '15 min read',
    category: 'Guide',
    label: 'Start Here',
  },
  {
    slug: 'webinar-content-pieces-breakdown',
    title: 'From 1 Webinar to 75+ Content Pieces: The Complete Breakdown of What You Can Create',
    description: 'See exactly how a single webinar becomes 75+ content pieces across written, visual, audio/video, lead generation, and SEO formats. Includes tier breakdown mapped to real plans.',
    date: '2026-02-09',
    readTime: '10 min read',
    category: 'Listicle',
  },
  {
    slug: 'webinar-content-strategy-coaches',
    title: 'The Webinar-First Content Strategy: How Coaches and Consultants Can Create 3 Months of Content From 1 Monthly Webinar',
    description: 'Stop creating content from scratch. Learn the webinar-first framework that turns a single monthly webinar into 30-75+ content pieces across every platform.',
    date: '2026-02-09',
    readTime: '12 min read',
    category: 'Strategy',
  },
  {
    slug: 'webinar-to-blog-post',
    title: 'How to Turn a Webinar Into a Blog Post (Step-by-Step Process With Examples)',
    description: 'The complete step-by-step process for turning your webinar recording into an SEO-optimized blog post. Includes 3 templates, before-and-after examples, and a keyword optimization checklist.',
    date: '2026-02-09',
    readTime: '12 min read',
    category: 'How-To',
  },
  {
    slug: 'webinar-to-social-media-content',
    title: 'How to Turn Your Webinar Into 30 Days of Social Media Content (LinkedIn, Instagram, and More)',
    description: 'Turn one webinar into 30 days of social media posts. Platform-specific guides for LinkedIn, Instagram, Twitter/X, YouTube Shorts, and TikTok with a full 30-day calendar.',
    date: '2026-02-09',
    readTime: '11 min read',
    category: 'How-To',
  },
  {
    slug: 'webinar-follow-up-email-sequence',
    title: 'Webinar Follow-Up Email Sequences That Convert: Templates and Strategy for Coaches',
    description: 'Get a proven 6-email post-webinar follow-up sequence with copy-and-paste templates. Learn how coaches turn webinar attendees into paying clients.',
    date: '2026-02-09',
    readTime: '12 min read',
    category: 'How-To + Templates',
  },
  {
    slug: 'webinar-lead-magnets',
    title: '7 High-Converting Lead Magnets You Can Create From a Single Webinar (With Conversion Data)',
    description: 'See 7 lead magnet formats you can pull from one webinar, ranked by conversion rate. Includes real data, creation time estimates, and a decision matrix for choosing the right format.',
    date: '2026-02-09',
    readTime: '11 min read',
    category: 'Lead Generation',
  },
  {
    slug: 'webinar-evergreen-seo-content',
    title: 'How to Turn Your Webinars Into Evergreen SEO Assets That Drive Traffic for Years',
    description: 'Your webinar has a 48-hour shelf life. Turned into SEO content, it drives traffic for years. Learn how to transform recordings into evergreen assets optimized for Google and AI search.',
    date: '2026-02-09',
    readTime: '11 min read',
    category: 'SEO Strategy',
  },
  {
    slug: 'content-repurposing-workflow-coaches',
    title: 'The Content Repurposing Workflow for Coaches: A Step-by-Step System That Saves 15+ Hours Per Week',
    description: 'The exact 5-stage content repurposing workflow that turns one webinar into weeks of content. Includes time estimates, tool recommendations, and clear outsourcing trigger points.',
    date: '2026-02-09',
    readTime: '11 min read',
    category: 'How-To',
  },
  {
    slug: 'webinar-repurposing-roi',
    title: 'The ROI of Webinar Repurposing: Data, Math, and What It Actually Saves You',
    description: 'See the real numbers behind webinar repurposing. ROI calculations, time audits, cost comparisons, and compounding traffic data that prove repurposing pays for itself.',
    date: '2026-02-09',
    readTime: '11 min read',
    category: 'Data-Driven',
  },
  {
    slug: 'content-repurposing-diy-vs-service',
    title: 'Content Repurposing: DIY Tools vs. Done-for-You Services — An Honest Comparison',
    description: 'Should you repurpose content yourself or hire a service? An honest breakdown of 6 popular DIY tools, real costs, time investment, and the math behind when outsourcing pays for itself.',
    date: '2026-02-09',
    readTime: '12 min read',
    category: 'Comparison',
  },
]

const llmPosts = [
  {
    slug: 'what-is-webinar-repurposing',
    title: 'What Is Webinar Repurposing? Definition, Benefits, and How It Works',
    description: 'Webinar repurposing transforms a single recorded webinar into 14-75+ content pieces. Learn what it is, how it works, what it costs, and why coaches and consultants use it.',
    date: '2026-02-09',
    readTime: '10 min read',
    category: 'Definition',
    label: 'Start Here',
  },
  {
    slug: 'why-coaches-should-repurpose-webinars',
    title: 'Why Should Coaches Repurpose Their Webinars Instead of Creating New Content?',
    description: 'Coaches spend 10-20 hours creating webinars that get watched once. Repurposing turns that single webinar into 14-75+ content pieces, saving 15+ hours per week.',
    date: '2026-02-09',
    readTime: '10 min read',
    category: 'Strategy',
  },
  {
    slug: 'webinar-repurposing-vs-new-content',
    title: 'Webinar Repurposing vs. Creating New Content: Which Is Better for Coaches?',
    description: 'Repurposing one webinar produces 14-75+ pieces in 7-10 days for $750-$1,500/month. Creating equivalent content from scratch takes 60-80 hours. Here\'s the data-driven comparison.',
    date: '2026-02-09',
    readTime: '11 min read',
    category: 'Comparison',
  },
  {
    slug: 'content-repurposing-small-business',
    title: 'Content Repurposing for Small Business: How to Get Maximum ROI From Content You Already Have',
    description: 'Small businesses waste 60-70% of the content they create. Content repurposing turns existing webinars and videos into 14-75+ marketing assets on any budget.',
    date: '2026-02-09',
    readTime: '11 min read',
    category: 'Strategy',
  },
  {
    slug: 'ai-webinar-repurposing-tools',
    title: 'Can AI Repurpose Your Webinar Content? Tools, Limitations, and What Still Needs a Human',
    description: 'AI tools handle 30-40% of webinar repurposing. Here\'s an honest breakdown of 6 AI tools, what they actually do well, and where human expertise still matters.',
    date: '2026-02-09',
    readTime: '12 min read',
    category: 'Tools',
  },
  {
    slug: 'ai-search-optimization-guide',
    title: 'What Is AI Search Optimization? How to Get Your Content Cited by ChatGPT, Perplexity, and Gemini',
    description: 'AI search optimization structures your content so AI assistants cite it when users ask questions. Here\'s how it works and why it matters for coaches in 2026.',
    date: '2026-02-09',
    readTime: '11 min read',
    category: 'AI Search',
  },
  {
    slug: 'get-content-cited-by-ai',
    title: 'How to Get Your Content Cited by AI Assistants: A Practical Guide for Coaches',
    description: '10 actionable steps to get your coaching content cited by ChatGPT, Perplexity, Gemini, Claude, and Grok. Includes specific examples and implementation checklist.',
    date: '2026-02-09',
    readTime: '11 min read',
    category: 'AI Search',
  },
  {
    slug: 'how-to-choose-content-repurposing-service',
    title: 'How to Choose a Content Repurposing Service: 8 Questions to Ask Before You Hire',
    description: 'Not all repurposing services are equal. Ask these 8 questions before hiring. Includes red flags, green flags, and what good answers look like.',
    date: '2026-02-09',
    readTime: '11 min read',
    category: 'Buying Guide',
  },
  {
    slug: 'content-repurposing-cost-pricing',
    title: 'How Much Does Content Repurposing Cost? Complete Pricing Breakdown for 2026',
    description: 'Services cost $500-$3,000/month. DIY tools cost $30-$200/month plus 15-20 hours. Complete pricing breakdown with cost-per-piece analysis for coaches.',
    date: '2026-02-09',
    readTime: '12 min read',
    category: 'Pricing',
  },
  {
    slug: 'best-webinar-repurposing-services',
    title: 'Best Webinar Repurposing Services for Coaches and Consultants (2026)',
    description: 'Compare the top 6 webinar repurposing options for coaches. Side-by-side pricing, output volume, turnaround time, and AI search optimization comparison.',
    date: '2026-02-09',
    readTime: '12 min read',
    category: '2026 Comparison',
  },
]

export default function BlogIndex() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'ContentRepurposeHub Blog',
    description: 'Webinar repurposing guides and content marketing tips for coaches and consultants',
    url: 'https://contentrepurposehub.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'ContentRepurposeHub',
      url: 'https://contentrepurposehub.com',
    },
    blogPost: [...posts, ...llmPosts].map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: `https://contentrepurposehub.com/blog/${post.slug}`,
      datePublished: post.date,
      author: {
        '@type': 'Organization',
        name: 'ContentRepurposeHub',
      },
    })),
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
              <Link href="/blog" className="text-blue-600 font-medium">Blog</Link>
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

        {/* Header */}
        <section className="pt-32 pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-4 inline-block">
              &larr; Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Webinar Repurposing Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Free guides on turning your webinars into lead-generating content. For coaches, consultants, and course creators.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:border-blue-300 hover:shadow-md transition"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {'label' in post && post.label && (
                      <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">{post.label}</span>
                    )}
                    <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">{post.category}</span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                    <span className="text-xs text-gray-400">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition">{post.title}</h2>
                  <p className="text-gray-600">{post.description}</p>
                  <span className="inline-block mt-4 text-blue-600 font-medium">Read the full guide &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* AI Search Optimized Series */}
        <section className="pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="border-t border-gray-200 pt-12 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">AI Search Optimized Series</h2>
              <p className="text-gray-600">Guides designed to answer the exact questions people ask ChatGPT, Perplexity, Gemini, and other AI assistants about webinar repurposing.</p>
            </div>
            <div className="space-y-8">
              {llmPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:border-blue-300 hover:shadow-md transition"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {'label' in post && post.label && (
                      <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">{post.label}</span>
                    )}
                    <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">{post.category}</span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition">{post.title}</h2>
                  <p className="text-gray-600">{post.description}</p>
                  <span className="inline-block mt-4 text-blue-600 font-medium">Read the full guide &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 gradient-bg px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Don&apos;t Want to DIY? We&apos;ll Repurpose Your Webinars For You.
            </h2>
            <p className="text-blue-100 text-lg mb-6">
              Starting at $750/month. 14-75+ content pieces from every webinar.
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
