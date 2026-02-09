'use client'

import { useState, useEffect } from 'react'

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  // Close menu on route change (hash change)
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('hashchange', close)
    return () => window.removeEventListener('hashchange', close)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-gray-700"
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed inset-0 top-[65px] bg-white z-50 flex flex-col">
          <nav className="flex flex-col p-6 gap-1">
            {[
              { href: '/blog', label: 'Blog' },
              { href: '#free-checklists', label: 'Free Checklists' },
              { href: '#how-it-works', label: 'How It Works' },
              { href: '#pricing', label: 'Pricing' },
              { href: '#faq', label: 'FAQ' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 text-lg font-medium py-3 border-b border-gray-100 hover:text-blue-600 transition"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://cal.com/contentrepurposehub/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 gradient-bg text-white text-center px-6 py-3 rounded-lg font-semibold text-lg"
            >
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </div>
  )
}
