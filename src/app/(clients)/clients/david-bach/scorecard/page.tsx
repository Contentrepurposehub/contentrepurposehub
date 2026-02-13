import type { Metadata } from 'next'
import { getClient } from '@/lib/clients'
import ScorecardClient from './ScorecardClient'

export const metadata: Metadata = {
  title: 'Wealth Automation Scorecard | David Bach',
  description: 'How automatic is your financial life? Take this free 2-minute scorecard based on the system used by 654,000 401k millionaires.',
}

export default function DavidBachScorecardPage() {
  const client = getClient('david-bach')
  const conversionUrl = client?.conversionUrl
  const conversionLabel = client?.conversionLabel

  return (
    <main style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      {/* Header */}
      <div style={{
        background: '#2729FE',
        padding: '24px',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          fontSize: '20px',
          color: '#fff',
        }}>
          Wealth Automation Scorecard
        </h1>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', marginTop: '4px' }}>
          Based on the system used by 654,000 401k millionaires
        </p>
      </div>

      <ScorecardClient
        conversionUrl={conversionUrl}
        conversionLabel={conversionLabel}
      />
    </main>
  )
}
