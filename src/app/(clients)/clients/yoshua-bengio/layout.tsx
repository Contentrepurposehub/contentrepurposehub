import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The AI Safety Imperative — Yoshua Bengio',
  description: 'He helped create AI. Now he says we have 2 years. Free scorecard, full analysis, and the episode that started it all — from Turing Award winner Yoshua Bengio.',
}

export default function YoshuaBengioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Google Fonts: Inter (headlines) + Source Sans 3 (body) */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Source+Sans+3:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div style={{ fontFamily: "'Source Sans 3', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, sans-serif" }}>
        {children}
      </div>
    </>
  )
}
