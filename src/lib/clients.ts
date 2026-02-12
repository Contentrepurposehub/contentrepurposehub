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
  'chris-koerner': {
    slug: 'chris-koerner',
    name: 'Chris Koerner',
    tier: 'starter',
    startDate: '2026-02-01',
    currentMonth: 1,
    funnelType: 'active-webinar',
    postCaptureRedirect: '/clients/chris-koerner/scorecard',
    // conversionUrl: 'https://zoom.us/webinar/register/...', // Set when client provides next webinar link
    // conversionLabel: 'Register for the Live Training',
    series: {
      name: 'The Deal Structure Series',
      description: 'How to buy a business with creative financing — from zero-down structures to stacking multiple sources.',
      posts: [
        {
          slug: 'how-to-buy-a-business-with-no-money',
          title: 'How to Buy a Business With No Money (10 Deal Structures I\'ve Actually Used)',
          date: '2026-02-12',
          keyword: 'how to buy a business with no money',
          seriesOrder: 1,
        },
      ],
    },
    leadMagnetType: 'scorecard',
    leadMagnetPath: '/clients/chris-koerner/scorecard',
  },

  'david-bach': {
    slug: 'david-bach',
    name: 'David Bach',
    tier: 'starter',
    startDate: '2026-02-01',
    currentMonth: 1,
    funnelType: 'replay-promotion',
    postCaptureRedirect: '/clients/david-bach/scorecard',
    conversionUrl: 'https://example.com/david-bach-masterclass-replay', // Replace with real replay URL
    conversionLabel: 'Watch the Free Masterclass',
    series: {
      name: 'The Automatic Millionaire Series',
      description: 'How to build wealth automatically — from the Latte Factor to full financial automation.',
      posts: [
        {
          slug: 'how-to-become-an-automatic-millionaire',
          title: 'How to Become an Automatic Millionaire: The Complete David Bach Method',
          date: '2026-02-10',
          keyword: 'how to become an automatic millionaire',
          seriesOrder: 1,
        },
      ],
    },
    leadMagnetType: 'scorecard',
    leadMagnetPath: '/clients/david-bach/scorecard',
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
