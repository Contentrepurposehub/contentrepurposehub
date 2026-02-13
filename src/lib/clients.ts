/**
 * Client Config Registry
 *
 * Central source of truth for all client metadata. Used by:
 * - Sitemap generation (auto-generates URLs for all client pages + blog posts)
 * - Dynamic blog routing (blog index + series navigation)
 * - Leads API (sheet tab names, webhook URLs)
 * - Google Sheet deliverables script
 */

export type Tier = 'starter' | 'growth' | 'scale'

export interface BlogPost {
  slug: string
  title: string
  date: string
  keyword: string
  seriesOrder: number
}

export interface ContentSeries {
  name: string
  description: string
  posts: BlogPost[]
}

export type FunnelType = 'active-webinar' | 'replay-promotion'

export interface ClientConfig {
  slug: string
  name: string
  tier: Tier
  startDate: string
  currentMonth: number
  series: ContentSeries | null
  leadMagnetType: 'scorecard' | 'calculator' | 'quiz' | 'checklist'
  leadMagnetPath: string
  /**
   * Funnel type determines the post-capture flow:
   * - 'active-webinar': Leads go to client's email platform via webhook.
   *   Newsletter promotes next live webinar. Flywheel: webinar → content → leads → newsletter → next webinar.
   * - 'replay-promotion': Leads get email sequence driving them to watch an existing replay.
   *   Evergreen funnel: content → leads → email sequence → replay → course/coaching sale.
   */
  funnelType: FunnelType
  /**
   * Where the lead goes after email capture:
   * - Active webinar: lead magnet path (scorecard/calculator)
   * - Replay promotion: can be lead magnet OR external replay URL
   */
  postCaptureRedirect: string
  /**
   * The primary conversion URL for this client's funnel:
   * - Active webinar: next webinar registration URL (e.g., Zoom webinar link)
   * - Replay promotion: replay watch URL (e.g., YouTube, Vimeo, course platform)
   */
  conversionUrl?: string
  /**
   * Label for the conversion CTA (used in newsletters, email sequences, LinkedIn posts):
   * - Active webinar: "Register for the Live Training" / "Save Your Seat"
   * - Replay promotion: "Watch the Free Masterclass" / "Watch the Replay"
   */
  conversionLabel?: string
  /**
   * Client's social media links. Displayed on the landing page for credibility.
   */
  socialLinks?: { platform: string, url: string }[]
  spreadsheetId?: string
  webhookUrl?: string
  sheetTabName?: string
  brandColors?: {
    primary: string
    secondary: string
    accent?: string
  }
}

/**
 * All registered clients. Add new clients here when onboarding.
 */
export const clients: Record<string, ClientConfig> = {
  'david-bach': {
    slug: 'david-bach',
    name: 'David Bach',
    tier: 'growth',
    startDate: '2026-02-13',
    currentMonth: 1,
    series: {
      name: 'The Automatic Wealth System',
      description: 'The complete system behind 654,000 401k millionaires — every percentage, every account, every step.',
      posts: [
        {
          slug: 'index',
          title: 'The Automatic Millionaire Formula: The Exact System Behind 654,000 New Millionaires',
          date: '2026-02-13',
          keyword: 'automatic millionaire formula',
          seriesOrder: 1,
        },
      ],
    },
    leadMagnetType: 'scorecard',
    leadMagnetPath: '/clients/david-bach/scorecard',
    funnelType: 'replay-promotion',
    postCaptureRedirect: '/clients/david-bach/scorecard',
    conversionUrl: 'REPLAY_URL',
    conversionLabel: 'Watch the Full Episode Free',
    socialLinks: [
      { platform: 'x', url: 'https://x.com/AuthorDavidBach' },
      { platform: 'instagram', url: 'https://www.instagram.com/davidlbach/' },
      { platform: 'youtube', url: 'https://www.youtube.com/user/DavidBachTV' },
      { platform: 'website', url: 'https://davidbach.com' },
    ],
    sheetTabName: 'david-bach',
    brandColors: {
      primary: '#2729FE',
      secondary: '#231F21',
      accent: '#D73A0F',
    },
  },
}

/**
 * Get a client config by slug. Returns undefined if not found.
 */
export function getClient(slug: string): ClientConfig | undefined {
  return clients[slug]
}

/**
 * Get all client slugs.
 */
export function getAllClientSlugs(): string[] {
  return Object.keys(clients)
}

/**
 * Get all blog posts for a client, sorted by series order.
 */
export function getClientBlogPosts(slug: string): BlogPost[] {
  const client = clients[slug]
  if (!client?.series) return []
  return [...client.series.posts].sort((a, b) => a.seriesOrder - b.seriesOrder)
}

/**
 * Get a specific blog post by client slug and post slug.
 */
export function getClientBlogPost(clientSlug: string, postSlug: string): BlogPost | undefined {
  const posts = getClientBlogPosts(clientSlug)
  return posts.find(p => p.slug === postSlug)
}

/**
 * Get the next and previous posts in a series relative to a given post.
 */
export function getSeriesNavigation(clientSlug: string, postSlug: string): {
  current: BlogPost | undefined
  prev: BlogPost | undefined
  next: BlogPost | undefined
  seriesName: string | undefined
  totalPosts: number
} {
  const client = clients[clientSlug]
  if (!client?.series) return { current: undefined, prev: undefined, next: undefined, seriesName: undefined, totalPosts: 0 }

  const posts = getClientBlogPosts(clientSlug)
  const currentIndex = posts.findIndex(p => p.slug === postSlug)

  return {
    current: currentIndex >= 0 ? posts[currentIndex] : undefined,
    prev: currentIndex > 0 ? posts[currentIndex - 1] : undefined,
    next: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : undefined,
    seriesName: client.series.name,
    totalPosts: posts.length,
  }
}
