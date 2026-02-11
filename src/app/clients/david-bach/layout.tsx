import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  authors: [{ name: 'David Bach' }],
  creator: 'David Bach',
  publisher: 'David Bach',
}

export default function DavidBachLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/clients/david-bach" className="font-bold text-xl text-gray-900">
            David <span className="text-[#1e3a5f]">Bach</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/clients/david-bach/blog" className="text-gray-600 hover:text-gray-900 transition">
              Blog
            </Link>
            <Link href="/clients/david-bach/scorecard" className="text-gray-600 hover:text-gray-900 transition">
              Scorecard
            </Link>
            <Link href="/clients/david-bach/landing-page" className="text-gray-600 hover:text-gray-900 transition">
              The Book
            </Link>
            <Link href="/clients/david-bach/newsletter" className="text-gray-600 hover:text-gray-900 transition">
              Newsletter
            </Link>
            <Link href="/clients/david-bach/linkedin" className="text-gray-600 hover:text-gray-900 transition">
              LinkedIn
            </Link>
          </div>
          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <Link href="/clients/david-bach" className="text-gray-600 text-sm">
              Menu
            </Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="pt-[65px]">
        {children}
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-900 font-semibold text-lg mb-2">David Bach</p>
          <p className="text-gray-600 text-sm max-w-xl mx-auto mb-4">
            9x New York Times bestselling author. Former Senior VP, Morgan Stanley.
            33 years helping ordinary people build extraordinary wealth.
            Nearly 10 million copies sold worldwide.
          </p>
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} David Bach. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
