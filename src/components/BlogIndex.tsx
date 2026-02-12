import Link from 'next/link'
import type { BlogPost, ContentSeries } from '@/lib/clients'

interface BlogIndexProps {
  clientSlug: string
  clientName: string
  series: ContentSeries
  posts: BlogPost[]
}

/**
 * Blog index component showing all posts in a client's content series.
 * Used at /clients/[name]/blog when there are multiple posts.
 */
export default function BlogIndex({ clientSlug, clientName, series, posts }: BlogIndexProps) {
  const blogBase = `/clients/${clientSlug}/blog`

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      {/* Series header */}
      <div style={{ marginBottom: '40px' }}>
        <p
          style={{
            fontSize: '13px',
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            fontWeight: 600,
            marginBottom: '8px',
          }}
        >
          {clientName}
        </p>
        <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#111827', marginBottom: '12px', lineHeight: 1.2 }}>
          {series.name}
        </h1>
        <p style={{ fontSize: '17px', color: '#4b5563', lineHeight: 1.6 }}>
          {series.description}
        </p>
        <p style={{ fontSize: '14px', color: '#9ca3af', marginTop: '8px' }}>
          {posts.length} {posts.length === 1 ? 'part' : 'parts'} published
        </p>
      </div>

      {/* Post list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {posts.map((post, index) => (
          <Link
            key={post.slug}
            href={index === 0 ? blogBase : `${blogBase}/${post.slug}`}
            style={{
              display: 'block',
              padding: '24px',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              textDecoration: 'none',
              transition: 'border-color 0.15s, box-shadow 0.15s',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              {/* Part number */}
              <div
                style={{
                  flexShrink: 0,
                  width: '40px',
                  height: '40px',
                  background: '#1e3a5f',
                  color: '#fff',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  fontWeight: 700,
                }}
              >
                {post.seriesOrder}
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
                  Part {post.seriesOrder} &middot; {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
                <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#111827', lineHeight: 1.3 }}>
                  {post.title}
                </h2>
                <p style={{ fontSize: '13px', color: '#9ca3af', marginTop: '6px' }}>
                  Target keyword: {post.keyword}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div
        style={{
          marginTop: '40px',
          padding: '24px',
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '15px', fontWeight: 600, color: '#1e293b', marginBottom: '4px' }}>
          New chapters published monthly
        </p>
        <p style={{ fontSize: '13px', color: '#64748b' }}>
          This series is actively growing. Sign up for {clientName}&apos;s newsletter to get notified.
        </p>
      </div>
    </div>
  )
}
