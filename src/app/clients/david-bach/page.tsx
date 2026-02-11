import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'David Bach — Content Deliverables | The Automatic Millionaire',
  description: 'Complete content package for David Bach\'s The Automatic Millionaire. Blog post, interactive scorecard, landing page, newsletter, and LinkedIn posts — all optimized for Google and AI search.',
  alternates: {
    canonical: 'https://contentrepurposehub.com/clients/david-bach',
  },
}

const deliverables = [
  {
    title: 'SEO Blog Post',
    description: 'How to Become an Automatic Millionaire — the complete system. 2,500+ words optimized for Google and AI search with FAQ schema, HowTo markup, and external source citations.',
    href: '/clients/david-bach/blog',
    type: 'Blog Post',
    color: 'bg-blue-100 text-blue-700',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Interactive Scorecard',
    description: 'The Automatic Millionaire Scorecard — 24-question self-assessment across 8 financial categories. Interactive scoring with personalized results and action recommendations.',
    href: '/clients/david-bach/scorecard',
    type: 'Lead Magnet',
    color: 'bg-green-100 text-green-700',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Landing Page',
    description: 'Conversion-optimized sales page for The Automatic Millionaire (Updated Edition). Hero, social proof, FAQ, and multiple CTAs with Product and FAQPage schema.',
    href: '/clients/david-bach/landing-page',
    type: 'Landing Page',
    color: 'bg-purple-100 text-purple-700',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Newsletter Edition',
    description: 'The Decision My Grandmother Made at 30 — a personal essay newsletter about Grandma Rose\'s wealth-building story and why the next 10 years are the biggest opportunity.',
    href: '/clients/david-bach/newsletter',
    type: 'Newsletter',
    color: 'bg-orange-100 text-orange-700',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'LinkedIn Posts',
    description: '10 platform-optimized posts: 4 thought leadership, 3 story-based, 2 framework/how-to, 1 contrarian. With posting schedule and one-click copy to clipboard.',
    href: '/clients/david-bach/linkedin',
    type: 'Social Content',
    color: 'bg-indigo-100 text-indigo-700',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
]

export default function DavidBachHub() {
  return (
    <main className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-[#1e3a5f] uppercase tracking-wider mb-2">
            Starter Plan Deliverables
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Automatic Millionaire — Content Package
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            5 deliverables created from a single podcast source. Every piece is optimized for
            Google search and AI citation. Click any card to view the live page.
          </p>
        </div>

        {/* Deliverable Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {deliverables.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-[#1e3a5f]/30 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="text-[#1e3a5f]">{item.icon}</div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${item.color}`}>
                  {item.type}
                </span>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#1e3a5f] transition">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="mt-4 text-sm font-medium text-[#1e3a5f] opacity-0 group-hover:opacity-100 transition">
                View deliverable &rarr;
              </div>
            </Link>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-12 bg-gray-50 rounded-xl p-6 text-center">
          <p className="text-gray-600 text-sm">
            <span className="font-semibold text-gray-900">Source material:</span> The Diary of a CEO Podcast — David Bach interview
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Delivered February 2026 | Starter Plan ($750)
          </p>
        </div>
      </div>
    </main>
  )
}
