import { notFound } from 'next/navigation'
import { getClientBlogPost, getSeriesNavigation } from '@/lib/clients'
import SeriesNav from '@/components/SeriesNav'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function DavidBachBlogSlug({ params }: PageProps) {
  const { slug } = await params
  const post = getClientBlogPost('david-bach', slug)

  if (!post) {
    notFound()
  }

  const nav = getSeriesNavigation('david-bach', slug)

  return (
    <main style={{ background: '#FFFFFF' }}>
      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '48px 24px 64px' }}>
        {nav.seriesName && nav.current && (
          <SeriesNav
            clientSlug="david-bach"
            seriesName={nav.seriesName}
            currentOrder={nav.current.seriesOrder}
            totalPosts={nav.totalPosts}
            prev={nav.prev ? { slug: nav.prev.seriesOrder === 1 ? 'index' : nav.prev.slug, title: nav.prev.title } : undefined}
            next={nav.next ? { slug: nav.next.slug, title: nav.next.title } : undefined}
            position="top"
          />
        )}

        <h1 style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(28px, 5vw, 42px)',
          color: '#231F21',
          lineHeight: 1.2,
          marginBottom: '28px',
        }}>
          {post.title}
        </h1>

        <div style={{ fontSize: '18px', lineHeight: 1.8, color: '#4b5563' }}>
          <p>This post is coming soon. Check back for Part {post.seriesOrder} of The Automatic Wealth System.</p>
        </div>

        {nav.seriesName && nav.current && (
          <SeriesNav
            clientSlug="david-bach"
            seriesName={nav.seriesName}
            currentOrder={nav.current.seriesOrder}
            totalPosts={nav.totalPosts}
            prev={nav.prev ? { slug: nav.prev.seriesOrder === 1 ? 'index' : nav.prev.slug, title: nav.prev.title } : undefined}
            next={nav.next ? { slug: nav.next.slug, title: nav.next.title } : undefined}
            position="bottom"
          />
        )}
      </article>
    </main>
  )
}
