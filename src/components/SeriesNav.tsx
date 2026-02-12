import Link from 'next/link'

interface SeriesNavProps {
  clientSlug: string
  seriesName: string
  currentOrder: number
  totalPosts: number
  prev?: { slug: string; title: string }
  next?: { slug: string; title: string }
  position: 'top' | 'bottom'
}

/**
 * Series navigation component for serialized blog posts.
 *
 * Renders:
 * - Top position: "Part N of [Series Name]" badge
 * - Bottom position: Previous / Next links + "Start from the beginning" + newsletter teaser
 */
export default function SeriesNav({
  clientSlug,
  seriesName,
  currentOrder,
  totalPosts,
  prev,
  next,
  position,
}: SeriesNavProps) {
  const blogBase = `/clients/${clientSlug}/blog`

  if (position === 'top') {
    return (
      <div style={{ marginBottom: '24px' }}>
        <div
          style={{
            display: 'inline-block',
            background: '#eef2ff',
            color: '#1e3a5f',
            padding: '6px 14px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.02em',
          }}
        >
          Part {currentOrder} of {totalPosts} in {seriesName}
        </div>
      </div>
    )
  }

  // Bottom position: full navigation
  return (
    <div style={{ marginTop: '48px', borderTop: '2px solid #e5e7eb', paddingTop: '32px' }}>
      {/* Series label */}
      <p
        style={{
          textAlign: 'center',
          fontSize: '13px',
          color: '#6b7280',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontWeight: 600,
          marginBottom: '20px',
        }}
      >
        {seriesName}
      </p>

      {/* Prev / Next navigation */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: prev && next ? '1fr 1fr' : '1fr',
          gap: '16px',
          marginBottom: '24px',
        }}
      >
        {prev && (
          <Link
            href={prev.slug === 'index' ? blogBase : `${blogBase}/${prev.slug}`}
            style={{
              display: 'block',
              padding: '16px 20px',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              textDecoration: 'none',
              transition: 'border-color 0.15s',
            }}
          >
            <span style={{ fontSize: '12px', color: '#6b7280', display: 'block', marginBottom: '4px' }}>
              Previous
            </span>
            <span style={{ fontSize: '15px', color: '#1e3a5f', fontWeight: 600 }}>
              {prev.title}
            </span>
          </Link>
        )}
        {next && (
          <Link
            href={`${blogBase}/${next.slug}`}
            style={{
              display: 'block',
              padding: '16px 20px',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              textDecoration: 'none',
              textAlign: prev ? 'right' : 'left',
              transition: 'border-color 0.15s',
            }}
          >
            <span style={{ fontSize: '12px', color: '#6b7280', display: 'block', marginBottom: '4px' }}>
              Next
            </span>
            <span style={{ fontSize: '15px', color: '#1e3a5f', fontWeight: 600 }}>
              {next.title}
            </span>
          </Link>
        )}
      </div>

      {/* Start from beginning (if not on post 1) */}
      {currentOrder > 1 && (
        <p style={{ textAlign: 'center', marginBottom: '16px' }}>
          <Link
            href={blogBase}
            style={{ fontSize: '14px', color: '#3b82f6', textDecoration: 'underline' }}
          >
            Start from the beginning
          </Link>
        </p>
      )}

      {/* Newsletter teaser */}
      {next && (
        <div
          style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '20px 24px',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '15px', fontWeight: 600, color: '#1e293b', marginBottom: '4px' }}>
            Get Part {currentOrder + 1} in your inbox when it drops
          </p>
          <p style={{ fontSize: '13px', color: '#64748b' }}>
            Sign up for the free newsletter and never miss the next chapter.
          </p>
        </div>
      )}
    </div>
  )
}
