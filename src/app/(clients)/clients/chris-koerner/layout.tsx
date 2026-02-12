import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  authors: [{ name: 'Chris Koerner' }],
  creator: 'Chris Koerner',
  publisher: 'Chris Koerner',
}

export default function ChrisKoernerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/clients/chris-koerner" className="font-bold text-xl text-gray-900">
            Chris <span className="text-[#1e3a5f]">Koerner</span>
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/clients/chris-koerner/blog" className="text-gray-600 hover:text-gray-900 transition">
              Blog
            </Link>
            <Link
              href="/clients/chris-koerner"
              className="bg-[#1e3a5f] text-white px-4 py-2 rounded-lg hover:bg-[#162d4a] transition font-medium"
            >
              Free Cheat Sheet
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
          <p className="text-gray-900 font-semibold text-lg mb-2">Chris Koerner</p>
          <p className="text-gray-600 text-sm max-w-xl mx-auto mb-4">
            Serial entrepreneur. Started and sold five 7-8 figure companies across five industries.
            17 years buying real estate. Creator of The Koerner Office and TKOwners community.
          </p>
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} Chris Koerner. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
