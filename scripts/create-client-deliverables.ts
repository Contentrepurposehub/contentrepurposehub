#!/usr/bin/env npx tsx

/**
 * Client Content Deliverables — Google Sheet Generator
 *
 * Creates a professionally formatted Google Sheet with a "Your Content Playbook"
 * guide tab + all content deliverables for a client engagement.
 *
 * Usage:
 *   npx tsx scripts/create-client-deliverables.ts SPREADSHEET_ID \
 *     --client david-bach \
 *     --tier starter \
 *     --source "Diary of a CEO podcast"
 *
 * Prerequisites:
 *   1. Create a blank Google Sheet named: [Client Name] — Content Deliverables
 *   2. Share with leads-capture@contentrepurposehub-leads.iam.gserviceaccount.com (Editor)
 *   3. Run this script with the spreadsheet ID from the URL
 *
 * Tiers:
 *   starter ($750)  — Playbook + LinkedIn (10) + Newsletter + Posting Schedule
 *   growth ($1,000) — + Twitter Threads + Email Sequence + more volume
 *   scale ($1,500)  — + Instagram + YouTube Shorts + Content Calendar + max volume
 */

import { readFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { webcrypto } from 'crypto'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

type Tier = 'starter' | 'growth' | 'scale'
type RowType =
  | 'title'
  | 'intro'
  | 'cta'
  | 'section'
  | 'subheader'
  | 'label'
  | 'link'
  | 'note'
  | 'contact'
  | 'spacer'

interface PlaybookRow {
  type: RowType
  cells: [string, string]
}

// ─── Argument Parsing ─────────────────────────────────────────────────

function parseArgs() {
  const args = process.argv.slice(2)
  const spreadsheetId = args[0]

  if (!spreadsheetId || spreadsheetId.startsWith('--')) {
    console.error(`
  Usage: npx tsx scripts/create-client-deliverables.ts SPREADSHEET_ID [options]

  Options:
    --client NAME    Client folder name for reading deliverables (default: david-bach)
    --slug SLUG      URL slug for live page links (default: same as --client)
    --tier TIER      starter | growth | scale (default: starter)
    --source TEXT    Source content description (default: "your webinar content")
    --mode MODE      create | append (default: create)
                     create: Wipe and recreate all tabs (Month 1)
                     append: Add new content to existing tabs (Month 2+)
    --month N        Month number for append mode (default: 2)
`)
    process.exit(1)
  }

  let client = 'david-bach'
  let slug = '' // URL slug override (defaults to client name)
  let tier: Tier = 'starter'
  let source = 'your webinar content'
  let mode: 'create' | 'append' = 'create'
  let month = 2

  for (let i = 1; i < args.length; i++) {
    if (args[i] === '--client' && args[i + 1]) client = args[++i]
    else if (args[i] === '--slug' && args[i + 1]) slug = args[++i]
    else if (args[i] === '--tier' && args[i + 1]) tier = args[++i] as Tier
    else if (args[i] === '--source' && args[i + 1]) source = args[++i]
    else if (args[i] === '--mode' && args[i + 1]) mode = args[++i] as 'create' | 'append'
    else if (args[i] === '--month' && args[i + 1]) month = parseInt(args[++i])
  }

  // Default slug to client name if not specified
  if (!slug) slug = client

  if (!['starter', 'growth', 'scale'].includes(tier)) {
    console.error(`  Invalid tier: ${tier}. Use starter, growth, or scale.`)
    process.exit(1)
  }

  if (!['create', 'append'].includes(mode)) {
    console.error(`  Invalid mode: ${mode}. Use create or append.`)
    process.exit(1)
  }

  return { spreadsheetId, client, slug, tier, source, mode, month }
}

// ─── Environment ──────────────────────────────────────────────────────

function loadEnv() {
  try {
    const content = readFileSync(join(ROOT, '.env.local'), 'utf-8')
    for (const line of content.split('\n')) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const eqIndex = trimmed.indexOf('=')
      if (eqIndex === -1) continue
      const key = trimmed.slice(0, eqIndex).trim()
      let value = trimmed.slice(eqIndex + 1).trim()
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      )
        value = value.slice(1, -1)
      if (!process.env[key]) process.env[key] = value
    }
  } catch {}
}

// ─── Google Auth (JWT) ────────────────────────────────────────────────

function toBase64Url(data: Buffer | Uint8Array): string {
  return Buffer.from(data).toString('base64url')
}

async function getAccessToken(): Promise<string> {
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n')
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
  if (!privateKey || !clientEmail)
    throw new Error('Missing GOOGLE_SHEETS_PRIVATE_KEY or GOOGLE_SHEETS_CLIENT_EMAIL')

  const header = toBase64Url(Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })))
  const now = Math.floor(Date.now() / 1000)
  const claimSet = toBase64Url(
    Buffer.from(
      JSON.stringify({
        iss: clientEmail,
        scope: 'https://www.googleapis.com/auth/spreadsheets',
        aud: 'https://oauth2.googleapis.com/token',
        exp: now + 3600,
        iat: now,
      })
    )
  )

  const keyData = privateKey
    .replace('-----BEGIN PRIVATE KEY-----', '')
    .replace('-----END PRIVATE KEY-----', '')
    .replace(/\s/g, '')

  const cryptoKey = await webcrypto.subtle.importKey(
    'pkcs8',
    Buffer.from(keyData, 'base64'),
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  )

  const sig = toBase64Url(
    new Uint8Array(
      await webcrypto.subtle.sign(
        'RSASSA-PKCS1-v1_5',
        cryptoKey,
        new TextEncoder().encode(`${header}.${claimSet}`)
      )
    )
  )

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${header}.${claimSet}.${sig}`,
  })
  const data = await res.json()
  if (!data.access_token) throw new Error(`Auth failed: ${JSON.stringify(data)}`)
  return data.access_token
}

// ─── Content Parsers ──────────────────────────────────────────────────

interface LinkedInPost {
  number: number
  type: string
  title: string
  content: string
  scheduledDate: string
  scheduledDay: string
}

function parseLinkedInPosts(markdown: string): LinkedInPost[] {
  const posts: LinkedInPost[] = []
  // Match both: ## Post N: Title  AND  ### Post N (no title)
  const headerRegex = /^#{2,3} Post (\d+)(?::?\s*(.*))?$/gm
  const headers = [...markdown.matchAll(headerRegex)]
  const startDate = getNextMonday()
  const schedule = generateSchedule(startDate, headers.length)

  // Detect format: does this file use "TYPE — Title" em-dash pattern?
  const hasTypeDash = headers.some(h => h[2]?.includes(' \u2014 '))

  // Find section boundaries: ## Comment CTA, ## Posting Notes, ## Posting Schedule
  const endSections = ['## Comment CTA', '## Posting Notes', '## Posting Schedule']
  let globalEndIdx = markdown.length
  for (const marker of endSections) {
    const idx = markdown.indexOf(marker)
    if (idx !== -1 && idx < globalEndIdx) globalEndIdx = idx
  }

  for (let i = 0; i < headers.length; i++) {
    const match = headers[i]
    const startIdx = match.index! + match[0].length
    const endIdx = headers[i + 1]?.index ?? globalEndIdx
    if (endIdx <= startIdx) break

    const section = markdown.slice(startIdx, endIdx)
    const typeTitle = match[2] || ''

    let type: string
    let title: string

    if (!typeTitle.trim()) {
      // v2 format: ### Post N (no title) — extract **Type:** from body
      const typeMatch = section.match(/\*\*Type:\*\*\s*(.+)/)
      type = typeMatch?.[1]?.trim() || 'Post'
      // Use first line of **Hook:** as title
      const hookIdx = section.indexOf('**Hook:**')
      if (hookIdx !== -1) {
        const afterHook = section.slice(hookIdx + 9).trim()
        title = afterHook.split('\n').find(l => l.trim())?.trim() || `Post ${match[1]}`
      } else {
        title = `Post ${match[1]}`
      }
    } else if (hasTypeDash) {
      // Format: "THOUGHT LEADERSHIP — Title Here"
      const dashIdx = typeTitle.indexOf(' \u2014 ')
      const rawType = dashIdx !== -1 ? typeTitle.slice(0, dashIdx).trim() : typeTitle.trim()
      title = dashIdx !== -1 ? typeTitle.slice(dashIdx + 3).trim() : ''
      const typeMap: Record<string, string> = {
        'THOUGHT LEADERSHIP': 'Thought Leadership',
        'STORY-BASED': 'Story',
        'FRAMEWORK/HOW-TO': 'Framework',
        CONTRARIAN: 'Contrarian',
      }
      type = typeMap[rawType] || rawType
    } else {
      // Format: "The Creator's Confession (Primary hook)" — title IS the full string
      // Extract parenthetical as type hint if present
      const parenMatch = typeTitle.match(/^(.+?)\s*\((.+)\)\s*$/)
      title = parenMatch ? parenMatch[1].trim() : typeTitle.trim()
      type = parenMatch ? parenMatch[2].trim() : 'Post'
    }

    // Extract the full post content, stripping markdown labels and section dividers
    let cleaned = section.replace(/^---+$/gm, '').trim()

    // Try structured format first (Hook/CTA/Hashtags markers)
    const hookMatch = cleaned.match(/\*\*Hook:\*\*\s*(.+)/)
    const ctaMatch = cleaned.match(/\*\*CTA:\*\*\s*(.+)/)
    const hashtagMatch = cleaned.match(/\*\*Hashtags:\*\*\s*(.+)/)

    if (hookMatch || ctaMatch || hashtagMatch) {
      let body = cleaned
      body = body.replace(/\*\*Hook:\*\*\s*.+\n?/, '')
      body = body.replace(/\*\*CTA:\*\*\s*.+\n?/, '')
      body = body.replace(/\*\*Hashtags:\*\*\s*.+\n?/, '')
      body = body.trim()

      cleaned = [
        hookMatch?.[1]?.trim(),
        '',
        body,
        '',
        ctaMatch?.[1]?.trim(),
        '',
        hashtagMatch?.[1]?.trim(),
      ]
        .filter((line) => line !== undefined)
        .join('\n')
    }

    // Strip any remaining markdown bold/italic for clean sheet output
    cleaned = cleaned.replace(/\n{3,}/g, '\n\n').trim()

    posts.push({
      number: parseInt(match[1]),
      type,
      title,
      content: cleaned,
      scheduledDate: schedule[i]?.date || '',
      scheduledDay: schedule[i]?.day || '',
    })
  }

  return posts
}

interface NewsletterContent {
  subjectLine: string
  previewText: string
  from: string
  body: string
}

function parseNewsletter(markdown: string): NewsletterContent {
  // If file has multiple editions (# Edition N:), use only the first one
  let content = markdown
  const editionHeaders = [...markdown.matchAll(/^# Edition \d+:/gm)]
  if (editionHeaders.length > 1) {
    content = markdown.slice(editionHeaders[0].index!, editionHeaders[1].index!)
  } else if (editionHeaders.length === 1) {
    content = markdown.slice(editionHeaders[0].index!)
  }

  // Try standard format first: **Subject Line:** ...
  let subjectLine = content.match(/\*\*Subject Line:\*\*\s*(.+)/)?.[1] || ''
  let previewText = content.match(/\*\*Preview Text:\*\*\s*(.+)/)?.[1] || ''
  let from = content.match(/\*\*From:\*\*\s*(.+)/)?.[1] || ''

  // Fallback: ## Subject Line Options with **Recommended:** marker
  if (!subjectLine) {
    const recMatch = content.match(/\*\*Recommended:\*\*\s*Option (\d+)/)
    if (recMatch) {
      const optNum = recMatch[1]
      // Match numbered option: N. **"Subject line here"**
      const optRegex = new RegExp(`${optNum}\\.\\s*\\*\\*"(.+?)"\\*\\*`)
      const optMatch = content.match(optRegex)
      if (optMatch) subjectLine = optMatch[1]
      // Get preview text from same option block
      const previewRegex = new RegExp(`${optNum}\\.\\s*\\*\\*".+?"\\*\\*\\s*\\n\\s*Preview:\\s*(.+)`)
      const prevMatch = content.match(previewRegex)
      if (prevMatch) previewText = prevMatch[1]
    }
    // If still no subject, grab the first quoted subject line option
    if (!subjectLine) {
      const firstOpt = content.match(/\d+\.\s*\*\*"(.+?)"\*\*/)
      if (firstOpt) subjectLine = firstOpt[1]
    }
    // v2 fallback: plain numbered list under ## Subject Line Options (no bold/quotes)
    if (!subjectLine) {
      const slSection = content.match(/## Subject Line Options\s*\n+([\s\S]*?)(?=\n---|\n##)/)?.[1]
      if (slSection) {
        const firstLine = slSection.match(/\d+\.\s*(.+)/)
        if (firstLine) subjectLine = firstLine[1].trim()
      }
    }
  }

  // Try "## Email Body" marker, then "## Newsletter Body", then "## Body Copy", then fallback
  let body = ''
  const bodyMarkers = ['## Email Body', '## Newsletter Body', '## Body Copy']
  for (const marker of bodyMarkers) {
    const idx = content.indexOf(marker)
    if (idx !== -1) {
      // Body goes until next # Edition or end of content
      let endIdx = content.length
      const nextEdition = content.indexOf('# Edition ', idx + marker.length)
      if (nextEdition !== -1) endIdx = nextEdition
      body = content.slice(idx + marker.length, endIdx).trim()
      // Strip leading --- if present
      body = body.replace(/^---\s*\n/, '')
      break
    }
  }

  if (!body) {
    // Find the end of the metadata block (after Subject Line, Preview Text, From, first ---)
    const lines = content.split('\n')
    let bodyStartLine = 0
    let foundMeta = false
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()
      if (line.startsWith('**Subject Line:') || line.startsWith('**Preview Text:') || line.startsWith('**From:')) {
        foundMeta = true
      } else if (foundMeta && line === '---') {
        bodyStartLine = i + 1
        break
      }
    }
    if (bodyStartLine > 0) {
      body = lines.slice(bodyStartLine).join('\n').trim()
    }
  }

  // Clean markdown formatting for Google Sheet
  body = body
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/^## (.+)$/gm, (_m, text) => text.toUpperCase())
    .replace(/^---$/gm, '')
    .replace(/\[(.+?)\]\(.*?\)/g, '$1')
    .replace(/\[(.+?)\]/g, '$1')
    .replace(/\n{3,}/g, '\n\n')
    .trim()

  return { subjectLine, previewText, from, body }
}

// ─── Twitter Thread Parser ──────────────────────────────────────────

interface TwitterThread {
  number: number
  title: string
  tweets: string[]
}

function parseTwitterThreads(markdown: string): TwitterThread[] {
  const threads: TwitterThread[] = []
  // Match both: # Thread N: Title  AND  ## Thread N: Title
  const threadRegex = /^#{1,2} Thread (\d+):\s*(.+)$/gm
  const headers = [...markdown.matchAll(threadRegex)]

  for (let i = 0; i < headers.length; i++) {
    const match = headers[i]
    const startIdx = match.index! + match[0].length
    const endIdx = headers[i + 1]?.index ?? markdown.length
    const section = markdown.slice(startIdx, endIdx)

    // Try v1 format first: **Tweet N (optional label):**
    const tweetRegex = /\*\*Tweet \d+[^:]*:\*\*/g
    const tweetHeaders = [...section.matchAll(tweetRegex)]

    const tweets: string[] = []

    if (tweetHeaders.length > 0) {
      // v1 format
      for (let j = 0; j < tweetHeaders.length; j++) {
        const tStart = tweetHeaders[j].index! + tweetHeaders[j][0].length
        const tEnd = tweetHeaders[j + 1]?.index ?? section.length
        let tweet = section.slice(tStart, tEnd)
          .replace(/^---+$/gm, '')
          .replace(/\n{3,}/g, '\n\n')
          .trim()
        if (tweet) tweets.push(tweet)
      }
    } else {
      // v2 format: tweets numbered as "N/ text" separated by ---
      const v2TweetRegex = /^(\d+)\/ /gm
      const v2Headers = [...section.matchAll(v2TweetRegex)]

      for (let j = 0; j < v2Headers.length; j++) {
        const tStart = v2Headers[j].index! + v2Headers[j][0].length
        const tEnd = v2Headers[j + 1]?.index ?? section.length
        let tweet = section.slice(tStart, tEnd)
          .replace(/^---+$/gm, '')
          .replace(/\n{3,}/g, '\n\n')
          .trim()
        if (tweet) tweets.push(tweet)
      }
    }

    // Clean title: strip quotes and parenthetical angle info
    let title = match[2].trim()
    title = title.replace(/^[""]|[""]$/g, '').replace(/\s*\(.+\)\s*$/, '').trim()

    threads.push({
      number: parseInt(match[1]),
      title,
      tweets,
    })
  }

  return threads
}

// ─── Email Sequence Parser ──────────────────────────────────────────

interface SequenceEmail {
  number: number
  title: string
  subject: string
  previewText: string
  from: string
  body: string
}

function parseEmailSequence(markdown: string): SequenceEmail[] {
  const emails: SequenceEmail[] = []
  // Match both: ### Email N: Title  AND  ## Email N: Title
  const emailRegex = /^#{2,3} Email (\d+):\s*(.+)$/gm
  const headers = [...markdown.matchAll(emailRegex)]

  for (let i = 0; i < headers.length; i++) {
    const match = headers[i]
    const startIdx = match.index! + match[0].length
    const endIdx = headers[i + 1]?.index ?? markdown.length
    const section = markdown.slice(startIdx, endIdx)

    // Try v1 single subject line first, then v2 subject line options (pick first)
    let subject = section.match(/\*\*Subject line:\*\*\s*(.+)/)?.[1] || ''
    if (!subject) {
      const optSection = section.match(/\*\*Subject line options:\*\*\s*\n([\s\S]*?)(?=\n\*\*|\n---)/i)?.[1]
      if (optSection) {
        const firstOpt = optSection.match(/\d+\.\s*(.+)/)
        if (firstOpt) subject = firstOpt[1].trim()
      }
    }
    const preview = section.match(/\*\*Preview text:\*\*\s*(.+)/)?.[1] || ''
    const from = section.match(/\*\*From:\*\*\s*(.+)/)?.[1] || ''

    // Body: try **Body copy:** marker first, then fallback to --- after metadata
    let body = ''
    const bodyCopyIdx = section.indexOf('**Body copy:**')
    if (bodyCopyIdx !== -1) {
      body = section.slice(bodyCopyIdx + '**Body copy:**'.length).trim()
      // Strip leading --- if present
      body = body.replace(/^---\s*\n/, '')
    } else {
      const lines = section.split('\n')
      let metaFound = false
      let bodyStartLine = 0
      for (let k = 0; k < lines.length; k++) {
        const line = lines[k].trim()
        if (line.startsWith('**Subject') || line.startsWith('**From:') || line.startsWith('**CTA:')) {
          metaFound = true
        } else if (metaFound && line === '---') {
          bodyStartLine = k + 1
          break
        }
      }
      if (bodyStartLine > 0) {
        body = lines.slice(bodyStartLine).join('\n')
      }
    }

    // Clean markdown formatting for Google Sheet
    body = body
      .replace(/^---+$/gm, '')
      .replace(/\*\*\[(.+?)\]\(.*?\)\*\*/g, '$1')
      .replace(/\[(.+?)\]\(.*?\)/g, '$1')
      .replace(/\*\*(.+?)\*\*/g, '$1')
      .replace(/\*(.+?)\*/g, '$1')
      .replace(/\n{3,}/g, '\n\n')
      .trim()

    emails.push({
      number: parseInt(match[1]),
      title: match[2].trim(),
      subject,
      previewText: preview,
      from,
      body,
    })
  }

  return emails
}

// ─── Schedule Helpers ─────────────────────────────────────────────────

function getNextMonday(): Date {
  const now = new Date()
  const day = now.getDay()
  const daysUntilMon = day === 0 ? 1 : day === 1 ? 7 : 8 - day
  const nextMon = new Date(now)
  nextMon.setDate(now.getDate() + daysUntilMon)
  return nextMon
}

function generateSchedule(
  start: Date,
  count: number
): Array<{ date: string; day: string }> {
  const schedule: Array<{ date: string; day: string }> = []
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const postDays = [1, 3, 5]
  const current = new Date(start)
  let posted = 0

  while (posted < count) {
    if (postDays.includes(current.getDay())) {
      schedule.push({
        date: current.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        day: dayNames[current.getDay()],
      })
      posted++
    }
    current.setDate(current.getDate() + 1)
  }

  return schedule
}

// ─── Playbook Generator ──────────────────────────────────────────────

function generatePlaybook(tier: Tier, source: string, client: string): PlaybookRow[] {
  const rows: PlaybookRow[] = []

  const add = (type: RowType, a: string, b = '') => rows.push({ type, cells: [a, b] })

  const baseUrl = 'https://contentrepurposehub.com/clients'

  // Title
  add('title', 'Your Content Playbook')
  add('spacer', '')

  // Intro (tier-specific)
  const intros: Record<Tier, string> = {
    starter: `We turned your ${source} into 11 pieces of strategic content \u2014 10 LinkedIn posts and a newsletter edition, with a 4-week posting schedule. Everything is written in your voice and ready to use.`,
    growth: `We turned your ${source} into 27+ pieces of strategic content across LinkedIn, Twitter, and email \u2014 plus a multi-week posting schedule. Everything is written in your voice and ready to use.`,
    scale: `We turned your ${source} into 67+ pieces of strategic content across 5 platforms \u2014 LinkedIn, Twitter, Instagram, YouTube, and email \u2014 with a 30-day content calendar. Everything is written in your voice and ready to use.`,
  }
  add('intro', intros[tier])
  add('spacer', '')
  add('cta', 'Your first post is ready to go today.')
  add('spacer', '')

  // YOUR LIVE PAGES (clickable links — rendered via Sheets API hyperlink property)
  add('section', 'YOUR LIVE PAGES')
  add('link', 'Landing Page', `${baseUrl}/${client}`)
  add('link', 'Blog Post', `${baseUrl}/${client}/blog`)
  add('link', 'Lead Magnet (Scorecard)', `${baseUrl}/${client}/scorecard`)
  add('note', 'These pages are live and hosted by us. Share them anywhere \u2014 social bios, email signatures, link-in-bio tools.')
  add('spacer', '')

  // WHAT'S INSIDE
  add('section', "WHAT\u2019S INSIDE")

  const linkedinCounts: Record<Tier, string> = { starter: '10', growth: '20', scale: '40' }
  add('label', 'LinkedIn Posts', `${linkedinCounts[tier]} posts ready to copy-paste. Builds your authority and drives traffic to your landing page.`)

  const nlCounts: Record<Tier, string> = { starter: 'Complete email edition', growth: '2 email editions', scale: '4 email editions for a full month of engagement' }
  add('label', 'Newsletter', `${nlCounts[tier]}. Paste into your email platform and send.`)

  if (tier === 'growth' || tier === 'scale') {
    const twCounts: Record<string, string> = { growth: '2', scale: '4' }
    add('label', 'Twitter/X Threads', `${twCounts[tier]} viral-format threads. Drives engagement and attracts new followers.`)
    const emCounts: Record<string, string> = { growth: '3-email welcome series', scale: '7-email nurture series' }
    add('label', 'Email Sequence', `${emCounts[tier]}. Converts new subscribers into customers.`)
  }

  if (tier === 'scale') {
    add('label', 'Instagram Captions', '8 captions with hooks and CTAs. Expands your reach on visual platforms.')
    add('label', 'YouTube Short Scripts', '4 sub-60-second scripts. Taps into video discovery.')
    add('label', 'Content Calendar', '30-day multi-platform publishing schedule. Your complete roadmap.')
  }

  add('label', 'Posting Schedule', tier === 'starter' ? '4-week Mon/Wed/Fri calendar. Tells you exactly what to post and when.' : 'Multi-week calendar across all platforms. Your daily action plan.')
  add('spacer', '')

  // YOUR CONTENT MIX
  add('section', 'YOUR CONTENT MIX')
  add('intro', 'We built 4 types of posts. Each does a different job for your brand:')
  add('spacer', '')
  add('label', 'Thought Leadership', 'Positions you as the expert. These are your authority builders \u2014 people follow you for these.')
  add('label', 'Story-Based', 'Creates emotional connection. People remember stories, not tips. These get shared.')
  add('label', 'Framework / How-To', 'Delivers practical value readers can use right away. These get saved and bookmarked.')
  add('label', 'Contrarian', 'Stops the scroll. Challenges assumptions and sparks conversation in the comments.')
  add('spacer', '')

  // HOW TO USE
  add('section', 'HOW TO USE')

  add('subheader', 'LINKEDIN')
  add('label', 'Step 1', 'Go to the LinkedIn Posts tab')
  add('label', 'Step 2', 'Copy the full post from the "Full Post" column')
  add('label', 'Step 3', 'Paste into LinkedIn and hit Post')
  add('spacer', '')

  add('subheader', 'NEWSLETTER')
  add('label', 'Step 1', 'Go to the Newsletter tab')
  add('label', 'Step 2', 'Copy the subject line, preview text, and email body')
  add('label', 'Step 3', 'Paste into your email platform and send')
  add('spacer', '')

  if (tier === 'growth' || tier === 'scale') {
    add('subheader', 'TWITTER/X')
    add('label', 'Step 1', 'Go to the Twitter/X Threads tab')
    add('label', 'Step 2', 'Copy each tweet in order')
    add('label', 'Step 3', 'Post as a thread on X (reply to yourself with each subsequent tweet)')
    add('spacer', '')

    add('subheader', 'EMAIL SEQUENCE')
    add('label', 'Step 1', 'Go to the Email Sequence tab')
    add('label', 'Step 2', `Set up the ${tier === 'growth' ? '3' : '7'} emails as an automated sequence in your email platform`)
    add('label', 'Step 3', 'Connect the trigger to your lead magnet opt-in form')
    add('spacer', '')
  }

  if (tier === 'scale') {
    add('subheader', 'INSTAGRAM')
    add('label', 'Step 1', 'Go to the Instagram Captions tab')
    add('label', 'Step 2', 'Copy the caption')
    add('label', 'Step 3', 'Pair with a photo, carousel, or graphic and post')
    add('spacer', '')

    add('subheader', 'YOUTUBE SHORTS')
    add('label', 'Step 1', 'Go to the YouTube Short Scripts tab')
    add('label', 'Step 2', 'Record yourself delivering the script (keep it under 60 seconds)')
    add('label', 'Step 3', 'Upload to YouTube Shorts with the suggested title')
    add('spacer', '')
  }

  add('note', 'Each post is written in your voice and ready to go as-is. Want to add a personal touch? Go for it.')
  add('spacer', '')

  // PRO TIPS
  add('section', 'PRO TIPS')
  add('label', 'Frequency', 'Post 3x/week (Mon, Wed, Fri). Your schedule is already mapped out in the Posting Schedule tab.')
  add('label', 'Best Times', '8\u201310am your audience\u2019s timezone. Tuesday through Thursday get the highest engagement.')
  add('label', 'Engagement', 'Reply to every comment in the first hour. This is what LinkedIn\u2019s algorithm rewards most.')
  add('label', 'Newsletter', 'Send Tuesday or Thursday morning for highest open rates. Copy everything from the Newsletter tab.')

  if (tier === 'growth' || tier === 'scale') {
    add('label', 'Twitter', 'Post threads between 8am\u201312pm weekdays. Quote your own thread to boost engagement.')
    add('label', 'Email', `Set up your ${tier === 'growth' ? '3' : '7'}-email sequence BEFORE promoting the lead magnet. New subscribers should get value immediately.`)
  }

  if (tier === 'scale') {
    add('label', 'Instagram', 'Carousels outperform single images. Pair each caption with a 5\u201310 slide carousel for maximum saves.')
    add('label', 'YouTube', 'Film vertical, keep energy high, and deliver your point in the first 3 seconds.')
    add('label', 'Calendar', 'Follow the Content Calendar for the optimal sequence \u2014 earlier posts set context for later ones.')
  }

  add('spacer', '')
  add('section', 'QUESTIONS?')
  add('contact', 'Reply to the email we sent you, or reach out anytime. We\u2019re here to help you get the most from this content.')

  return rows
}

// ─── Playbook Formatting ─────────────────────────────────────────────

function getPlaybookFormatRequests(sheetId: number, rows: PlaybookRow[]): any[] {
  const navy = { red: 0.118, green: 0.227, blue: 0.373 }
  const white = { red: 1, green: 1, blue: 1 }
  const sectionBg = { red: 0.94, green: 0.94, blue: 0.96 }
  const gray = { red: 0.35, green: 0.35, blue: 0.35 }

  const requests: any[] = []

  // Group row indices by type
  const byType: Partial<Record<RowType, number[]>> = {}
  for (let i = 0; i < rows.length; i++) {
    const t = rows[i].type
    if (!byType[t]) byType[t] = []
    byType[t]!.push(i)
  }

  // Merged row types (content spans both columns)
  const mergeTypes: RowType[] = ['title', 'intro', 'cta', 'section', 'subheader', 'note', 'contact', 'spacer']
  for (const type of mergeTypes) {
    for (const row of byType[type] || []) {
      requests.push({
        mergeCells: {
          range: { sheetId, startRowIndex: row, endRowIndex: row + 1, startColumnIndex: 0, endColumnIndex: 2 },
          mergeType: 'MERGE_ALL',
        },
      })
    }
  }

  // Column widths
  requests.push(
    { updateDimensionProperties: { range: { sheetId, dimension: 'COLUMNS', startIndex: 0, endIndex: 1 }, properties: { pixelSize: 220 }, fields: 'pixelSize' } },
    { updateDimensionProperties: { range: { sheetId, dimension: 'COLUMNS', startIndex: 1, endIndex: 2 }, properties: { pixelSize: 680 }, fields: 'pixelSize' } }
  )

  // Default styling: all cells
  requests.push({
    repeatCell: {
      range: { sheetId },
      cell: {
        userEnteredFormat: {
          wrapStrategy: 'WRAP',
          verticalAlignment: 'MIDDLE',
          padding: { top: 6, bottom: 6, left: 10, right: 10 },
          textFormat: { fontSize: 10, fontFamily: 'Google Sans' },
        },
      },
      fields: 'userEnteredFormat(wrapStrategy,verticalAlignment,padding,textFormat)',
    },
  })

  // Title: navy bg, white 18pt bold
  for (const row of byType['title'] || []) {
    requests.push({
      repeatCell: {
        range: { sheetId, startRowIndex: row, endRowIndex: row + 1 },
        cell: {
          userEnteredFormat: {
            backgroundColor: navy,
            textFormat: { bold: true, fontSize: 18, foregroundColor: white, fontFamily: 'Google Sans' },
            padding: { top: 16, bottom: 16, left: 16, right: 16 },
          },
        },
        fields: 'userEnteredFormat(backgroundColor,textFormat,padding)',
      },
    })
  }

  // Intro: 11pt, extra padding
  for (const row of byType['intro'] || []) {
    requests.push({
      repeatCell: {
        range: { sheetId, startRowIndex: row, endRowIndex: row + 1 },
        cell: {
          userEnteredFormat: {
            textFormat: { fontSize: 11, fontFamily: 'Google Sans' },
            padding: { top: 4, bottom: 4, left: 16, right: 16 },
          },
        },
        fields: 'userEnteredFormat(textFormat,padding)',
      },
    })
  }

  // CTA: bold navy 11pt
  for (const row of byType['cta'] || []) {
    requests.push({
      repeatCell: {
        range: { sheetId, startRowIndex: row, endRowIndex: row + 1 },
        cell: {
          userEnteredFormat: {
            textFormat: { bold: true, fontSize: 11, foregroundColor: navy, fontFamily: 'Google Sans' },
            padding: { top: 4, bottom: 4, left: 16, right: 16 },
          },
        },
        fields: 'userEnteredFormat(textFormat,padding)',
      },
    })
  }

  // Section headers: section bg + bold navy
  for (const row of byType['section'] || []) {
    requests.push({
      repeatCell: {
        range: { sheetId, startRowIndex: row, endRowIndex: row + 1 },
        cell: {
          userEnteredFormat: {
            backgroundColor: sectionBg,
            textFormat: { bold: true, fontSize: 11, foregroundColor: navy, fontFamily: 'Google Sans' },
            padding: { top: 10, bottom: 10, left: 16, right: 16 },
          },
        },
        fields: 'userEnteredFormat(backgroundColor,textFormat,padding)',
      },
    })
  }

  // Sub-headers: bold navy, no bg
  for (const row of byType['subheader'] || []) {
    requests.push({
      repeatCell: {
        range: { sheetId, startRowIndex: row, endRowIndex: row + 1 },
        cell: {
          userEnteredFormat: {
            textFormat: { bold: true, fontSize: 10, foregroundColor: navy, fontFamily: 'Google Sans' },
            padding: { top: 8, bottom: 4, left: 16, right: 16 },
          },
        },
        fields: 'userEnteredFormat(textFormat,padding)',
      },
    })
  }

  // Label rows: bold navy in column A only
  for (const row of byType['label'] || []) {
    requests.push({
      repeatCell: {
        range: { sheetId, startRowIndex: row, endRowIndex: row + 1, startColumnIndex: 0, endColumnIndex: 1 },
        cell: {
          userEnteredFormat: {
            textFormat: { bold: true, fontSize: 10, foregroundColor: navy, fontFamily: 'Google Sans' },
          },
        },
        fields: 'userEnteredFormat(textFormat)',
      },
    })
  }

  // Note: italic gray
  for (const row of byType['note'] || []) {
    requests.push({
      repeatCell: {
        range: { sheetId, startRowIndex: row, endRowIndex: row + 1 },
        cell: {
          userEnteredFormat: {
            textFormat: { italic: true, fontSize: 10, foregroundColor: gray, fontFamily: 'Google Sans' },
            padding: { top: 4, bottom: 4, left: 16, right: 16 },
          },
        },
        fields: 'userEnteredFormat(textFormat,padding)',
      },
    })
  }

  // Contact: muted gray
  for (const row of byType['contact'] || []) {
    requests.push({
      repeatCell: {
        range: { sheetId, startRowIndex: row, endRowIndex: row + 1 },
        cell: {
          userEnteredFormat: {
            textFormat: { fontSize: 10, foregroundColor: gray, fontFamily: 'Google Sans' },
            padding: { top: 4, bottom: 4, left: 16, right: 16 },
          },
        },
        fields: 'userEnteredFormat(textFormat,padding)',
      },
    })
  }

  // Spacers: small row height
  for (const row of byType['spacer'] || []) {
    requests.push({
      updateDimensionProperties: {
        range: { sheetId, dimension: 'ROWS', startIndex: row, endIndex: row + 1 },
        properties: { pixelSize: 12 },
        fields: 'pixelSize',
      },
    })
  }

  // Link rows: bold navy label in column A, blue underlined URL in column B
  const linkBlue = { red: 0.067, green: 0.333, blue: 0.8 }
  for (const row of byType['link'] || []) {
    // Column A: bold navy label (same as regular label)
    requests.push({
      repeatCell: {
        range: { sheetId, startRowIndex: row, endRowIndex: row + 1, startColumnIndex: 0, endColumnIndex: 1 },
        cell: {
          userEnteredFormat: {
            textFormat: { bold: true, fontSize: 10, foregroundColor: navy, fontFamily: 'Google Sans' },
          },
        },
        fields: 'userEnteredFormat(textFormat)',
      },
    })
    // Column B: blue underlined link text
    requests.push({
      repeatCell: {
        range: { sheetId, startRowIndex: row, endRowIndex: row + 1, startColumnIndex: 1, endColumnIndex: 2 },
        cell: {
          userEnteredFormat: {
            textFormat: { underline: true, fontSize: 10, foregroundColor: linkBlue, fontFamily: 'Google Sans' },
          },
        },
        fields: 'userEnteredFormat(textFormat)',
      },
    })
    // Set native hyperlink on the cell
    requests.push({
      updateCells: {
        rows: [{
          values: [{
            hyperlink: rows[row].cells[1],
            userEnteredValue: { stringValue: rows[row].cells[1] },
            userEnteredFormat: {
              textFormat: { underline: true, fontSize: 10, foregroundColor: linkBlue, fontFamily: 'Google Sans' },
            },
          }],
        }],
        range: { sheetId, startRowIndex: row, endRowIndex: row + 1, startColumnIndex: 1, endColumnIndex: 2 },
        fields: 'hyperlink,userEnteredValue,userEnteredFormat.textFormat',
      },
    })
  }

  // Hide gridlines
  requests.push({
    updateSheetProperties: {
      properties: { sheetId, gridProperties: { hideGridlines: true } },
      fields: 'gridProperties.hideGridlines',
    },
  })

  return requests
}

// ─── Google Sheets API ────────────────────────────────────────────────

async function sheetsApi(
  token: string,
  spreadsheetId: string,
  path: string,
  method: string,
  body?: any
) {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}${path}`
  const res = await fetch(url, {
    method,
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    ...(body ? { body: JSON.stringify(body) } : {}),
  })
  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Sheets API ${method} ${path} failed: ${err}`)
  }
  return res.json()
}

// ─── Content Tab Formatting ──────────────────────────────────────────

function getContentTabFormatRequests(
  sheetId: number,
  tabType: string,
  rowCount: number
): any[] {
  const navy = { red: 0.118, green: 0.227, blue: 0.373 }
  const white = { red: 1, green: 1, blue: 1 }
  const lightGray = { red: 0.95, green: 0.95, blue: 0.95 }
  const requests: any[] = []

  // Header row: bold white on navy
  requests.push({
    repeatCell: {
      range: { sheetId, startRowIndex: 0, endRowIndex: 1 },
      cell: {
        userEnteredFormat: {
          textFormat: { bold: true, foregroundColor: white, fontSize: 11 },
          backgroundColor: navy,
          verticalAlignment: 'MIDDLE',
          padding: { top: 8, bottom: 8, left: 8, right: 8 },
        },
      },
      fields: 'userEnteredFormat(textFormat,backgroundColor,verticalAlignment,padding)',
    },
  })

  if (tabType === 'linkedin') {
    // Column widths
    const cols = [70, 140, 700, 200, 120]
    cols.forEach((px, i) =>
      requests.push({
        updateDimensionProperties: {
          range: { sheetId, dimension: 'COLUMNS', startIndex: i, endIndex: i + 1 },
          properties: { pixelSize: px },
          fields: 'pixelSize',
        },
      })
    )

    // Content column: wrap + top-align
    requests.push({
      repeatCell: {
        range: { sheetId, startRowIndex: 1, startColumnIndex: 2, endColumnIndex: 3 },
        cell: {
          userEnteredFormat: {
            wrapStrategy: 'WRAP',
            verticalAlignment: 'TOP',
            padding: { top: 8, bottom: 8, left: 8, right: 8 },
          },
        },
        fields: 'userEnteredFormat(wrapStrategy,verticalAlignment,padding)',
      },
    })

    // Center Post # and Type columns
    requests.push({
      repeatCell: {
        range: { sheetId, startRowIndex: 1, startColumnIndex: 0, endColumnIndex: 2 },
        cell: { userEnteredFormat: { horizontalAlignment: 'CENTER', verticalAlignment: 'TOP' } },
        fields: 'userEnteredFormat(horizontalAlignment,verticalAlignment)',
      },
    })

    // Alternating rows
    for (let row = 2; row <= rowCount; row += 2) {
      requests.push({
        repeatCell: {
          range: { sheetId, startRowIndex: row, endRowIndex: row + 1 },
          cell: { userEnteredFormat: { backgroundColor: lightGray } },
          fields: 'userEnteredFormat(backgroundColor)',
        },
      })
    }

    // Status dropdown
    requests.push({
      setDataValidation: {
        range: { sheetId, startRowIndex: 1, endRowIndex: rowCount + 1, startColumnIndex: 4, endColumnIndex: 5 },
        rule: {
          condition: {
            type: 'ONE_OF_LIST',
            values: [{ userEnteredValue: 'Not Posted' }, { userEnteredValue: 'Scheduled' }, { userEnteredValue: 'Posted' }],
          },
          showCustomUi: true,
          strict: false,
        },
      },
    })
  }

  if (tabType === 'newsletter') {
    requests.push(
      { updateDimensionProperties: { range: { sheetId, dimension: 'COLUMNS', startIndex: 0, endIndex: 1 }, properties: { pixelSize: 150 }, fields: 'pixelSize' } },
      { updateDimensionProperties: { range: { sheetId, dimension: 'COLUMNS', startIndex: 1, endIndex: 2 }, properties: { pixelSize: 800 }, fields: 'pixelSize' } }
    )

    requests.push({
      repeatCell: {
        range: { sheetId, startRowIndex: 1, startColumnIndex: 1, endColumnIndex: 2 },
        cell: { userEnteredFormat: { wrapStrategy: 'WRAP', verticalAlignment: 'TOP' } },
        fields: 'userEnteredFormat(wrapStrategy,verticalAlignment)',
      },
    })

    // Bold field labels
    requests.push({
      repeatCell: {
        range: { sheetId, startRowIndex: 1, endRowIndex: 4, startColumnIndex: 0, endColumnIndex: 1 },
        cell: { userEnteredFormat: { textFormat: { bold: true } } },
        fields: 'userEnteredFormat(textFormat)',
      },
    })

    // "FULL EMAIL BODY" row formatting
    requests.push({
      repeatCell: {
        range: { sheetId, startRowIndex: 5, endRowIndex: 6 },
        cell: { userEnteredFormat: { textFormat: { bold: true, fontSize: 11 }, backgroundColor: lightGray } },
        fields: 'userEnteredFormat(textFormat,backgroundColor)',
      },
    })
  }

  if (tabType === 'twitter') {
    const cols = [100, 80, 700]
    cols.forEach((px, i) =>
      requests.push({
        updateDimensionProperties: {
          range: { sheetId, dimension: 'COLUMNS', startIndex: i, endIndex: i + 1 },
          properties: { pixelSize: px },
          fields: 'pixelSize',
        },
      })
    )

    requests.push({
      repeatCell: {
        range: { sheetId, startRowIndex: 1, startColumnIndex: 2, endColumnIndex: 3 },
        cell: { userEnteredFormat: { wrapStrategy: 'WRAP', verticalAlignment: 'TOP', padding: { top: 8, bottom: 8, left: 8, right: 8 } } },
        fields: 'userEnteredFormat(wrapStrategy,verticalAlignment,padding)',
      },
    })

    requests.push({
      repeatCell: {
        range: { sheetId, startRowIndex: 1, startColumnIndex: 0, endColumnIndex: 2 },
        cell: { userEnteredFormat: { horizontalAlignment: 'CENTER', verticalAlignment: 'TOP' } },
        fields: 'userEnteredFormat(horizontalAlignment,verticalAlignment)',
      },
    })

    for (let row = 2; row <= rowCount; row += 2) {
      requests.push({
        repeatCell: {
          range: { sheetId, startRowIndex: row, endRowIndex: row + 1 },
          cell: { userEnteredFormat: { backgroundColor: lightGray } },
          fields: 'userEnteredFormat(backgroundColor)',
        },
      })
    }
  }

  if (tabType === 'email-sequence') {
    const cols = [80, 250, 700]
    cols.forEach((px, i) =>
      requests.push({
        updateDimensionProperties: {
          range: { sheetId, dimension: 'COLUMNS', startIndex: i, endIndex: i + 1 },
          properties: { pixelSize: px },
          fields: 'pixelSize',
        },
      })
    )

    requests.push({
      repeatCell: {
        range: { sheetId, startRowIndex: 1, startColumnIndex: 2, endColumnIndex: 3 },
        cell: { userEnteredFormat: { wrapStrategy: 'WRAP', verticalAlignment: 'TOP', padding: { top: 8, bottom: 8, left: 8, right: 8 } } },
        fields: 'userEnteredFormat(wrapStrategy,verticalAlignment,padding)',
      },
    })

    // Bold email number column
    requests.push({
      repeatCell: {
        range: { sheetId, startRowIndex: 1, startColumnIndex: 0, endColumnIndex: 1 },
        cell: { userEnteredFormat: { textFormat: { bold: true }, horizontalAlignment: 'CENTER', verticalAlignment: 'TOP' } },
        fields: 'userEnteredFormat(textFormat,horizontalAlignment,verticalAlignment)',
      },
    })
  }

  if (tabType === 'schedule') {
    const cols = [80, 130, 110, 70, 150, 300]
    cols.forEach((px, i) =>
      requests.push({
        updateDimensionProperties: {
          range: { sheetId, dimension: 'COLUMNS', startIndex: i, endIndex: i + 1 },
          properties: { pixelSize: px },
          fields: 'pixelSize',
        },
      })
    )

    requests.push({
      repeatCell: {
        range: { sheetId, startRowIndex: 1, startColumnIndex: 0, endColumnIndex: 4 },
        cell: { userEnteredFormat: { horizontalAlignment: 'CENTER' } },
        fields: 'userEnteredFormat(horizontalAlignment)',
      },
    })

    for (let row = 2; row <= rowCount; row += 2) {
      requests.push({
        repeatCell: {
          range: { sheetId, startRowIndex: row, endRowIndex: row + 1 },
          cell: { userEnteredFormat: { backgroundColor: lightGray } },
          fields: 'userEnteredFormat(backgroundColor)',
        },
      })
    }
  }

  return requests
}

// ─── Append Mode (Month 2+) ──────────────────────────────────────────

async function appendContent(
  token: string,
  spreadsheetId: string,
  client: string,
  tier: Tier,
  source: string,
  month: number
) {
  const clientDir = join(ROOT, 'clients', client, 'deliverables')

  console.log(`\n  APPEND MODE — Month ${month} content for ${client} (${tier})\n`)

  // Read existing sheet info
  const info = await sheetsApi(token, spreadsheetId, '?fields=sheets.properties', 'GET')
  const existingTabs = (info.sheets || []).map((s: any) => s.properties.title)
  console.log(`  Existing tabs: ${existingTabs.join(', ')}\n`)

  // Parse new deliverables
  console.log('  [1/3] Reading new deliverables...')
  const linkedinPath = join(clientDir, '05-linkedin-posts.md')
  const newsletterPath = join(clientDir, '03-newsletter.md')

  let posts: LinkedInPost[] = []
  let newsletter: NewsletterContent | null = null

  if (existsSync(linkedinPath)) {
    posts = parseLinkedInPosts(readFileSync(linkedinPath, 'utf-8'))
    console.log(`        ${posts.length} new LinkedIn posts parsed`)
  }
  if (existsSync(newsletterPath)) {
    newsletter = parseNewsletter(readFileSync(newsletterPath, 'utf-8'))
    console.log(`        Newsletter parsed (subject: "${newsletter.subjectLine}")`)
  }
  console.log()

  // Get existing row counts to continue numbering
  console.log('  [2/3] Appending content to existing tabs...')

  // Append LinkedIn Posts
  if (posts.length > 0 && existingTabs.includes('LinkedIn Posts')) {
    // Read existing data to find last post number
    const existingData = await sheetsApi(
      token, spreadsheetId,
      `/values/${encodeURIComponent('LinkedIn Posts!A:A')}`, 'GET'
    )
    const existingRows = existingData.values?.length || 1 // includes header
    const lastPostNum = existingRows - 1 // subtract header

    // Add month separator row
    const separator = [['', '', '', '', '']]
    const monthHeader = [[`— MONTH ${month} —`, `(from: ${source})`, '', '', '']]

    // Renumber posts to continue from last
    const newRows = posts.map((post, i) => [
      lastPostNum + i + 1,
      post.type,
      post.content,
      `${post.scheduledDay}, ${post.scheduledDate}`,
      '',
    ])

    const allNewRows = [...separator, ...monthHeader, ...newRows]

    await sheetsApi(
      token, spreadsheetId,
      `/values/${encodeURIComponent('LinkedIn Posts!A' + (existingRows + 1))}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      'POST',
      { values: allNewRows }
    )
    console.log(`        Appended ${posts.length} LinkedIn posts (posts #${lastPostNum + 1}-${lastPostNum + posts.length})`)
  }

  // Append Newsletter
  if (newsletter && existingTabs.includes('Newsletter')) {
    const existingData = await sheetsApi(
      token, spreadsheetId,
      `/values/${encodeURIComponent('Newsletter!A:A')}`, 'GET'
    )
    const existingRows = existingData.values?.length || 1

    const nlRows = [
      ['', ''],
      [`— MONTH ${month} NEWSLETTER —`, ''],
      ['Subject Line', newsletter.subjectLine],
      ['Preview Text', newsletter.previewText],
      ['From Name', newsletter.from],
      ['', ''],
      ['FULL EMAIL BODY', 'Copy the entire cell below and paste into your email platform'],
      ['', newsletter.body],
    ]

    await sheetsApi(
      token, spreadsheetId,
      `/values/${encodeURIComponent('Newsletter!A' + (existingRows + 1))}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      'POST',
      { values: nlRows }
    )
    console.log('        Appended new newsletter edition')
  }

  // Update Posting Schedule
  if (posts.length > 0 && existingTabs.includes('Posting Schedule')) {
    const existingData = await sheetsApi(
      token, spreadsheetId,
      `/values/${encodeURIComponent('Posting Schedule!A:A')}`, 'GET'
    )
    const existingRows = existingData.values?.length || 1
    const existingDataRows = existingRows - 1

    // Calculate week offset
    const lastWeekNum = Math.ceil(existingDataRows / 3)
    let currentWeek = lastWeekNum + 1

    const separator = [['', '', '', '', '', '']]
    const monthHeader = [[`— MONTH ${month} —`, '', '', '', '', '']]

    const scheduleRows: (string | number)[][] = []
    for (let i = 0; i < posts.length; i++) {
      if (i > 0 && i % 3 === 0) currentWeek++
      scheduleRows.push([
        `Week ${currentWeek}`,
        posts[i].scheduledDate,
        posts[i].scheduledDay,
        posts[i].number + existingDataRows,
        posts[i].type,
        posts[i].title,
      ])
    }

    await sheetsApi(
      token, spreadsheetId,
      `/values/${encodeURIComponent('Posting Schedule!A' + (existingRows + 1))}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      'POST',
      { values: [...separator, ...monthHeader, ...scheduleRows] }
    )
    console.log(`        Updated posting schedule (weeks ${lastWeekNum + 1}-${currentWeek})`)
  }

  console.log()

  // Update Playbook tab with cumulative stats
  console.log('  [3/3] Updating Playbook with cumulative stats...')
  if (existingTabs.includes('Your Content Playbook')) {
    // Read existing LinkedIn data to get total count
    let totalLinkedIn = 0
    if (existingTabs.includes('LinkedIn Posts')) {
      const countData = await sheetsApi(
        token, spreadsheetId,
        `/values/${encodeURIComponent('LinkedIn Posts!A:A')}`, 'GET'
      )
      totalLinkedIn = (countData.values?.length || 1) - 1
    }

    let totalNewsletters = 0
    if (existingTabs.includes('Newsletter')) {
      const nlData = await sheetsApi(
        token, spreadsheetId,
        `/values/${encodeURIComponent('Newsletter!A:B')}`, 'GET'
      )
      // Count "Subject Line" rows to determine newsletter count
      totalNewsletters = (nlData.values || []).filter((row: string[]) => row[0] === 'Subject Line').length
    }

    console.log(`        Cumulative: ${totalLinkedIn} LinkedIn posts, ${totalNewsletters} newsletters across ${month} months`)
  }
  console.log()

  // Summary
  const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`
  console.log('  ========================================================')
  console.log(`  Month ${month} content appended!`)
  console.log('  ========================================================')
  console.log(`\n  Client: ${client}`)
  console.log(`  Month:  ${month}`)
  console.log(`  Source:  ${source}`)
  console.log(`  URL:    ${url}`)
  if (posts.length > 0) console.log(`  New LinkedIn posts: ${posts.length}`)
  if (newsletter) console.log('  New newsletter: 1 edition')
  console.log('\n  ========================================================\n')
}

// ─── Main ─────────────────────────────────────────────────────────────

async function main() {
  const { spreadsheetId, client, slug, tier, source, mode, month } = parseArgs()
  const clientDir = join(ROOT, 'clients', client, 'deliverables')

  loadEnv()

  // Auth first — needed for both modes
  console.log('\n  Authenticating with Google...')
  const token = await getAccessToken()
  console.log('  Done\n')

  // Route to append mode if specified
  if (mode === 'append') {
    return appendContent(token, spreadsheetId, client, tier, source, month)
  }

  // CREATE MODE (original behavior)
  console.log(`  Creating ${tier.toUpperCase()} tier deliverables for ${client}...\n`)

  // 2. Read and parse deliverables
  console.log('  [1/4] Reading deliverables...')
  const linkedinPath = join(clientDir, '05-linkedin-posts.md')
  const newsletterPath = join(clientDir, '03-newsletter.md')

  let posts: LinkedInPost[] = []
  let newsletter: NewsletterContent | null = null

  if (existsSync(linkedinPath)) {
    posts = parseLinkedInPosts(readFileSync(linkedinPath, 'utf-8'))
    console.log(`        ${posts.length} LinkedIn posts parsed`)
  } else {
    console.log('        LinkedIn posts file not found, skipping')
  }

  if (existsSync(newsletterPath)) {
    newsletter = parseNewsletter(readFileSync(newsletterPath, 'utf-8'))
    console.log(`        Newsletter parsed (subject: "${newsletter.subjectLine}")`)
  } else {
    console.log('        Newsletter file not found, skipping')
  }

  // Parse Growth/Scale deliverables
  let twitterThreads: TwitterThread[] = []
  let emailSequence: SequenceEmail[] = []

  if (tier === 'growth' || tier === 'scale') {
    const twitterPath = join(clientDir, '06-twitter-threads.md')
    const emailSeqPath = join(clientDir, '07-email-sequence.md')

    if (existsSync(twitterPath)) {
      twitterThreads = parseTwitterThreads(readFileSync(twitterPath, 'utf-8'))
      console.log(`        ${twitterThreads.length} Twitter threads parsed (${twitterThreads.reduce((s, t) => s + t.tweets.length, 0)} tweets total)`)
    } else {
      console.log('        Twitter threads file not found, skipping')
    }

    if (existsSync(emailSeqPath)) {
      emailSequence = parseEmailSequence(readFileSync(emailSeqPath, 'utf-8'))
      console.log(`        ${emailSequence.length} email sequence emails parsed`)
    } else {
      console.log('        Email sequence file not found, skipping')
    }
  }

  console.log()

  // 3. Setup tabs
  console.log('  [2/4] Setting up tabs...')
  const info = await sheetsApi(token, spreadsheetId, '?fields=sheets.properties', 'GET')
  const existingSheets = info.sheets || []

  // Define tabs to create
  const tabDefs: Array<{ title: string; cols: number; frozen: number }> = [
    { title: 'Your Content Playbook', cols: 2, frozen: 0 },
  ]

  if (posts.length > 0)
    tabDefs.push({ title: 'LinkedIn Posts', cols: 5, frozen: 1 })
  if (newsletter)
    tabDefs.push({ title: 'Newsletter', cols: 2, frozen: 0 })

  // Growth/Scale tabs
  if (twitterThreads.length > 0)
    tabDefs.push({ title: 'Twitter/X Threads', cols: 3, frozen: 1 })
  if (emailSequence.length > 0)
    tabDefs.push({ title: 'Email Sequence', cols: 3, frozen: 1 })

  tabDefs.push({ title: 'Posting Schedule', cols: 6, frozen: 1 })

  // Rename existing tabs to avoid name conflicts, then add new tabs, then delete old ones
  const setupRequests: any[] = []

  // Step 1: Rename all existing tabs to temp names
  for (let i = 0; i < existingSheets.length; i++) {
    setupRequests.push({
      updateSheetProperties: {
        properties: { sheetId: existingSheets[i].properties.sheetId, title: `_temp_${i}` },
        fields: 'title',
      },
    })
  }

  // Step 2: Add all new tabs
  for (let i = 0; i < tabDefs.length; i++) {
    setupRequests.push({
      addSheet: {
        properties: {
          title: tabDefs[i].title,
          index: i,
          gridProperties: { frozenRowCount: tabDefs[i].frozen, columnCount: tabDefs[i].cols },
        },
      },
    })
  }

  // Step 3: Delete old (renamed) tabs
  for (const sheet of existingSheets) {
    setupRequests.push({ deleteSheet: { sheetId: sheet.properties.sheetId } })
  }

  const setupData = await sheetsApi(token, spreadsheetId, ':batchUpdate', 'POST', { requests: setupRequests })
  const sheetIds: number[] = []
  for (const reply of setupData.replies || []) {
    if (reply.addSheet) sheetIds.push(reply.addSheet.properties.sheetId)
  }

  const tabNames = tabDefs.map((t) => t.title)
  console.log(`        Created: ${tabNames.join(', ')} (removed ${existingSheets.length} default tab${existingSheets.length !== 1 ? 's' : ''})\n`)

  // 4. Populate all tabs
  console.log('  [3/4] Populating content...')

  let tabIdx = 0

  // Playbook
  const playbookRows = generatePlaybook(tier, source, slug)
  const playbookValues = playbookRows.map((r) => r.cells)
  await sheetsApi(token, spreadsheetId, `/values/${encodeURIComponent("Your Content Playbook!A1")}?valueInputOption=USER_ENTERED`, 'PUT', { values: playbookValues })
  const playbookSheetId = sheetIds[tabIdx++]

  // LinkedIn Posts
  if (posts.length > 0) {
    const linkedinRows: (string | number)[][] = [
      ['Post #', 'Type', 'Full Post (Copy & Paste Into LinkedIn)', 'Scheduled Date', 'Status'],
    ]
    for (const post of posts) {
      linkedinRows.push([
        post.number,
        post.type,
        post.content,
        `${post.scheduledDay}, ${post.scheduledDate}`,
        '',
      ])
    }
    await sheetsApi(token, spreadsheetId, `/values/${encodeURIComponent("LinkedIn Posts!A1")}?valueInputOption=USER_ENTERED`, 'PUT', { values: linkedinRows })
    tabIdx++
  }

  // Newsletter
  if (newsletter) {
    const nlRows: (string | number)[][] = [
      ['Field', 'Content'],
      ['Subject Line', newsletter.subjectLine],
      ['Preview Text', newsletter.previewText],
      ['From Name', newsletter.from],
      ['', ''],
      ['FULL EMAIL BODY', 'Copy the entire cell below and paste into your email platform (ConvertKit, Mailchimp, etc.)'],
      ['', newsletter.body],
    ]
    await sheetsApi(token, spreadsheetId, `/values/${encodeURIComponent("Newsletter!A1")}?valueInputOption=USER_ENTERED`, 'PUT', { values: nlRows })
    tabIdx++
  }

  // Twitter/X Threads
  if (twitterThreads.length > 0) {
    const twitterRows: (string | number)[][] = [
      ['Thread', 'Tweet #', 'Content (Copy & Paste)'],
    ]
    for (const thread of twitterThreads) {
      for (let j = 0; j < thread.tweets.length; j++) {
        twitterRows.push([
          j === 0 ? `Thread ${thread.number}: ${thread.title}` : '',
          j + 1,
          thread.tweets[j],
        ])
      }
      // Add spacer between threads
      twitterRows.push(['', '', ''])
    }
    await sheetsApi(token, spreadsheetId, `/values/${encodeURIComponent("Twitter/X Threads!A1")}?valueInputOption=USER_ENTERED`, 'PUT', { values: twitterRows })
    tabIdx++
  }

  // Email Sequence
  if (emailSequence.length > 0) {
    const emailRows: (string | number)[][] = [
      ['Email #', 'Field', 'Content'],
    ]
    for (const email of emailSequence) {
      emailRows.push([`Email ${email.number}`, 'Subject Line', email.subject])
      emailRows.push(['', 'Preview Text', email.previewText])
      emailRows.push(['', 'From', email.from])
      emailRows.push(['', 'Title', email.title])
      emailRows.push(['', '', ''])
      emailRows.push(['', 'FULL EMAIL BODY', 'Copy the cell below and paste into your email platform'])
      emailRows.push(['', '', email.body])
      emailRows.push(['', '', '']) // spacer between emails
    }
    await sheetsApi(token, spreadsheetId, `/values/${encodeURIComponent("Email Sequence!A1")}?valueInputOption=USER_ENTERED`, 'PUT', { values: emailRows })
    tabIdx++
  }

  // Posting Schedule
  const scheduleRows: (string | number)[][] = [
    ['Week', 'Date', 'Day', 'Post #', 'Type', 'Topic'],
  ]
  let currentWeek = 1
  for (let i = 0; i < posts.length; i++) {
    if (i > 0 && i % 3 === 0) currentWeek++
    scheduleRows.push([
      `Week ${currentWeek}`,
      posts[i].scheduledDate,
      posts[i].scheduledDay,
      posts[i].number,
      posts[i].type,
      posts[i].title,
    ])
  }
  await sheetsApi(token, spreadsheetId, `/values/${encodeURIComponent("Posting Schedule!A1")}?valueInputOption=USER_ENTERED`, 'PUT', { values: scheduleRows })

  console.log(`        All ${tabNames.length} tabs populated\n`)

  // 5. Format all tabs
  console.log('  [4/4] Applying formatting...')

  const allFormatRequests: any[] = []

  // Playbook formatting
  allFormatRequests.push(...getPlaybookFormatRequests(playbookSheetId, playbookRows))

  // Content tab formatting
  let contentTabIdx = 1
  if (posts.length > 0) {
    allFormatRequests.push(...getContentTabFormatRequests(sheetIds[contentTabIdx], 'linkedin', posts.length))
    contentTabIdx++
  }
  if (newsletter) {
    allFormatRequests.push(...getContentTabFormatRequests(sheetIds[contentTabIdx], 'newsletter', 7))
    contentTabIdx++
  }
  if (twitterThreads.length > 0) {
    const totalTweetRows = twitterThreads.reduce((s, t) => s + t.tweets.length + 1, 0)
    allFormatRequests.push(...getContentTabFormatRequests(sheetIds[contentTabIdx], 'twitter', totalTweetRows))
    contentTabIdx++
  }
  if (emailSequence.length > 0) {
    const totalEmailRows = emailSequence.length * 8
    allFormatRequests.push(...getContentTabFormatRequests(sheetIds[contentTabIdx], 'email-sequence', totalEmailRows))
    contentTabIdx++
  }
  allFormatRequests.push(...getContentTabFormatRequests(sheetIds[contentTabIdx], 'schedule', posts.length))

  await sheetsApi(token, spreadsheetId, ':batchUpdate', 'POST', { requests: allFormatRequests })
  console.log('        Done\n')

  // Summary
  const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`
  const tierLabel = tier === 'starter' ? 'Starter ($750)' : tier === 'growth' ? 'Growth ($1,000)' : 'Scale ($1,500)'

  console.log('  ========================================================')
  console.log(`  ${tierLabel} deliverables ready!`)
  console.log('  ========================================================')
  console.log(`\n  Client: ${client}`)
  console.log(`  Tier:   ${tierLabel}`)
  console.log(`  URL:    ${url}`)
  console.log(`\n  Tabs:`)
  for (let i = 0; i < tabNames.length; i++) {
    const desc =
      tabNames[i] === 'Your Content Playbook' ? 'Strategy guide + how-to-use' :
      tabNames[i] === 'LinkedIn Posts' ? `${posts.length} posts, copy-paste ready` :
      tabNames[i] === 'Newsletter' ? 'Subject line + full email body' :
      tabNames[i] === 'Twitter/X Threads' ? `${twitterThreads.length} threads, ${twitterThreads.reduce((s, t) => s + t.tweets.length, 0)} tweets` :
      tabNames[i] === 'Email Sequence' ? `${emailSequence.length}-email automated sequence` :
      tabNames[i] === 'Posting Schedule' ? `Mon/Wed/Fri over ${Math.ceil(posts.length / 3)} weeks` :
      ''
    console.log(`    ${i + 1}. ${tabNames[i]}  \u2014 ${desc}`)
  }
  console.log('\n  ========================================================\n')
}

main().catch((err) => {
  console.error('\n  Error:', err.message || err)
  process.exit(1)
})
