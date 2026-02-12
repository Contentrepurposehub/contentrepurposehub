import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SeriesNav from '@/components/SeriesNav'
import { getClient, getClientBlogPost, getClientBlogPosts, getSeriesNavigation } from '@/lib/clients'

const CLIENT_SLUG = 'david-bach'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getClientBlogPosts(CLIENT_SLUG)
  // Skip first post (it lives at blog/page.tsx)
  return posts.slice(1).map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getClientBlogPost(CLIENT_SLUG, slug)
  if (!post) return { title: 'Not Found' }

  const client = getClient(CLIENT_SLUG)!
  return {
    title: post.title,
    description: `Part ${post.seriesOrder} of ${client.series?.name}. ${post.keyword}.`,
    alternates: {
      canonical: `https://contentrepurposehub.com/clients/${CLIENT_SLUG}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      url: `https://contentrepurposehub.com/clients/${CLIENT_SLUG}/blog/${slug}`,
      siteName: client.name,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getClientBlogPost(CLIENT_SLUG, slug)
  if (!post) notFound()

  const client = getClient(CLIENT_SLUG)!
  const nav = getSeriesNavigation(CLIENT_SLUG, slug)

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      {/* Series badge */}
      {nav.seriesName && (
        <SeriesNav
          clientSlug={CLIENT_SLUG}
          seriesName={nav.seriesName}
          currentOrder={post.seriesOrder}
          totalPosts={nav.totalPosts}
          position="top"
        />
      )}

      {/* Post header */}
      <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#111827', lineHeight: 1.2, marginBottom: '16px' }}>
        {post.title}
      </h1>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '32px' }}>
        By {client.name} &middot; {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      </p>

      {/* Post content placeholder — each month's blog post content will be added here */}
      <div style={{ padding: '40px', background: '#f9fafb', borderRadius: '12px', textAlign: 'center', border: '1px dashed #d1d5db' }}>
        <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '8px' }}>
          Blog post content for &quot;{post.title}&quot;
        </p>
        <p style={{ fontSize: '13px', color: '#9ca3af' }}>
          Content will be populated when this post is produced in the monthly delivery cycle.
        </p>
      </div>

      {/* Series navigation (bottom) */}
      {nav.seriesName && (
        <SeriesNav
          clientSlug={CLIENT_SLUG}
          seriesName={nav.seriesName}
          currentOrder={post.seriesOrder}
          totalPosts={nav.totalPosts}
          prev={nav.prev ? { slug: nav.prev.seriesOrder === 1 ? 'index' : nav.prev.slug, title: nav.prev.title } : undefined}
          next={nav.next ? { slug: nav.next.slug, title: nav.next.title } : undefined}
          position="bottom"
        />
      )}
    </div>
  )
}
