import type { Metadata } from 'next'
import Link from 'next/link'
import { getClient } from '@/lib/clients'
import ScorecardClient from './ScorecardClient'

export const metadata: Metadata = {
  title: 'AI Blind Spot Scorecard | Yoshua Bengio',
  description: 'You use AI every day. Here\'s what you\'re not seeing. Take this free 2-minute scorecard based on insights from Yoshua Bengio, Turing Award winner and creator of deep learning.',
}

const BLUE = '#003CC5'
const CHARCOAL = '#23242B'

export default function BengioScorecardPage() {
  const client = getClient('david-bach')
  const conversionUrl = client?.conversionUrl
  const conversionLabel = client?.conversionLabel

  return (
    <main style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      {/* ═══════ Sticky Header — Cross-navigation ═══════ */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#fff',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        padding: '12px 24px',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Link href="/clients/david-bach" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: '18px',
              color: CHARCOAL,
              letterSpacing: '-0.02em',
            }}>
              YOSHUA BENGIO
            </span>
          </Link>

          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
          }}>
            <Link href="/clients/david-bach" style={{
              fontSize: '13px',
              fontWeight: 600,
              color: '#9ca3af',
              textDecoration: 'none',
              fontFamily: "'Inter', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>
              Home
            </Link>
            <Link href="/clients/david-bach/blog" style={{
              fontSize: '13px',
              fontWeight: 600,
              color: '#9ca3af',
              textDecoration: 'none',
              fontFamily: "'Inter', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>
              Blog
            </Link>
            <span style={{
              fontSize: '13px',
              fontWeight: 700,
              color: BLUE,
              fontFamily: "'Inter', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>
              Scorecard
            </span>
          </nav>

          <Link href="/clients/david-bach/blog" style={{
            background: CHARCOAL,
            color: '#fff',
            padding: '8px 20px',
            borderRadius: '30px',
            fontSize: '13px',
            fontWeight: 700,
            textDecoration: 'none',
            fontFamily: "'Inter', sans-serif",
          }}>
            Read the Analysis
          </Link>
        </div>
      </header>

      {/* Scorecard Title */}
      <div style={{
        background: BLUE,
        padding: '28px 24px',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          fontSize: '22px',
          color: '#fff',
          marginBottom: '6px',
        }}>
          The AI Blind Spot Scorecard
        </h1>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', marginTop: '4px', lineHeight: 1.5 }}>
          You use AI every day. Here&apos;s what you&apos;re not seeing.
        </p>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginTop: '8px' }}>
          Based on insights from Yoshua Bengio, Turing Award winner &amp; creator of deep learning
        </p>
      </div>

      <ScorecardClient
        conversionUrl={conversionUrl}
        conversionLabel={conversionLabel}
      />
    </main>
  )
}
