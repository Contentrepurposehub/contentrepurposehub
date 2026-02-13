import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'David Bach — Wealth Automation Scorecard',
  description: 'Free 2-minute scorecard based on the system used by 654,000 401k millionaires. Find out if your wealth system is running on autopilot or still relying on willpower.',
}

export default function DavidBachLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Google Fonts: Inter (headlines - proxy for Neue Haas) + Source Sans 3 (body - matches davidbach.com) */}
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
