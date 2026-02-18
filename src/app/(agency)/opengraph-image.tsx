import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'ContentRepurposeHub - Webinar Repurposing Service'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 32,
            color: 'white',
            marginBottom: 20,
            fontWeight: 700,
          }}
        >
          Content
          <span style={{ color: '#93c5fd' }}>Repurpose</span>
          Hub
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.2,
            maxWidth: 900,
            marginBottom: 24,
          }}
        >
          Turn 1 Webinar Into 75+ Content Pieces
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#bfdbfe',
            textAlign: 'center',
            maxWidth: 700,
            marginBottom: 32,
          }}
        >
          Webinar repurposing for coaches & consultants. Google + AI search optimized.
        </div>
        <div
          style={{
            display: 'flex',
            gap: 32,
            fontSize: 18,
            color: '#e0e7ff',
          }}
        >
          <span>Starting at $750/mo</span>
          <span>|</span>
          <span>14-75+ pieces per webinar</span>
          <span>|</span>
          <span>First delivery in 7 days</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
