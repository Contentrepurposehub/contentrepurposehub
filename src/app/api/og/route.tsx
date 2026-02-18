import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'ContentRepurposeHub'
  const subtitle = searchParams.get('subtitle') || 'contentrepurposehub.com/blog'

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e3a5f 0%, #1e40af 50%, #7c3aed 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 24,
            color: '#93c5fd',
            fontWeight: 700,
          }}
        >
          Content
          <span style={{ color: 'white' }}>Repurpose</span>
          Hub
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: title.length > 60 ? 40 : 48,
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.2,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 20,
              color: '#bfdbfe',
            }}
          >
            {subtitle}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            gap: 24,
            fontSize: 16,
            color: '#94a3b8',
          }}
        >
          <span>Google + AI Search Optimized</span>
          <span>|</span>
          <span>For Coaches & Consultants</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
