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
    <div style={{ fontFamily: "'Source Sans Pro', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {children}
    </div>
  )
}
