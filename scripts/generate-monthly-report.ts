#!/usr/bin/env npx tsx

/**
 * Monthly AI Ranking Report Generator
 *
 * Generates a formatted report showing:
 * - AI search ranking positions for client's blog posts (via hive-rank)
 * - Lead capture stats from Google Sheets
 * - Content inventory summary
 * - Recommendations for next month
 *
 * Usage:
 *   npx tsx scripts/generate-monthly-report.ts --client chris-koerner [--month 2]
 *
 * Requires:
 *   - GOOGLE_SHEETS_PRIVATE_KEY, GOOGLE_SHEETS_CLIENT_EMAIL, GOOGLE_SHEETS_SPREADSHEET_ID in .env.local
 *   - hive-rank MCP server running (for AI ranking checks)
 */

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { webcrypto } from 'crypto'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

// ─── Argument Parsing ─────────────────────────────────────────────────

function parseArgs() {
  const args = process.argv.slice(2)

  let client = ''
  let month = 0

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--client' && args[i + 1]) client = args[++i]
    else if (args[i] === '--month' && args[i + 1]) month = parseInt(args[++i])
  }

  if (!client) {
    console.error(`
  Usage: npx tsx scripts/generate-monthly-report.ts --client CLIENT_SLUG [--month N]

  Options:
    --client NAME   Client folder name (required)
    --month N       Month number (auto-detected if not specified)
`)
    process.exit(1)
  }

  return { client, month }
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
  if (!privateKey || !clientEmail) {
    throw new Error('Missing GOOGLE_SHEETS_PRIVATE_KEY or GOOGLE_SHEETS_CLIENT_EMAIL')
  }

  const header = toBase64Url(Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })))
  const now = Math.floor(Date.now() / 1000)
  const claimSet = toBase64Url(
    Buffer.from(
      JSON.stringify({
        iss: clientEmail,
        scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
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

// ─── Client Config ────────────────────────────────────────────────────

interface BlogPostInfo {
  slug: string
  title: string
  keyword: string
  date: string
  seriesOrder: number
}

function loadClientConfig(clientSlug: string): {
  name: string
  tier: string
  blogPosts: BlogPostInfo[]
  seriesName: string
} {
  // Dynamically import from client registry
  // Since this is a script, we read the TS file and extract data manually
  const clientsPath = join(ROOT, 'src', 'lib', 'clients.ts')
  if (!existsSync(clientsPath)) {
    console.error('  Client registry not found at src/lib/clients.ts')
    process.exit(1)
  }

  // Simple extraction — read briefs to get blog post info
  const briefPath = join(ROOT, 'clients', clientSlug, 'brief.md')
  const briefExists = existsSync(briefPath)

  // Read the clients.ts file to get config
  const clientsFile = readFileSync(clientsPath, 'utf-8')

  // Extract client name
  const nameMatch = clientsFile.match(new RegExp(`'${clientSlug}':[\\s\\S]*?name:\\s*'([^']+)'`))
  const name = nameMatch?.[1] || clientSlug

  // Extract tier
  const tierMatch = clientsFile.match(new RegExp(`'${clientSlug}':[\\s\\S]*?tier:\\s*'([^']+)'`))
  const tier = tierMatch?.[1] || 'starter'

  // Extract series name
  const seriesMatch = clientsFile.match(new RegExp(`'${clientSlug}':[\\s\\S]*?series:[\\s\\S]*?name:\\s*'([^']+)'`))
  const seriesName = seriesMatch?.[1] || 'Content Series'

  // Extract blog posts from the registry
  const blogPosts: BlogPostInfo[] = []
  const postsSection = clientsFile.match(new RegExp(`'${clientSlug}':[\\s\\S]*?posts:\\s*\\[([\\s\\S]*?)\\]`))
  if (postsSection) {
    const slugMatches = [...postsSection[1].matchAll(/slug:\s*'([^']+)'/g)]
    const titleMatches = [...postsSection[1].matchAll(/title:\s*'([^']+)'/g)]
    const dateMatches = [...postsSection[1].matchAll(/date:\s*'([^']+)'/g)]
    const keywordMatches = [...postsSection[1].matchAll(/keyword:\s*'([^']+)'/g)]
    const orderMatches = [...postsSection[1].matchAll(/seriesOrder:\s*(\d+)/g)]

    for (let i = 0; i < slugMatches.length; i++) {
      blogPosts.push({
        slug: slugMatches[i][1],
        title: titleMatches[i]?.[1] || '',
        date: dateMatches[i]?.[1] || '',
        keyword: keywordMatches[i]?.[1] || '',
        seriesOrder: parseInt(orderMatches[i]?.[1] || '0'),
      })
    }
  }

  return { name, tier, blogPosts, seriesName }
}

// ─── Lead Count ───────────────────────────────────────────────────────

async function getLeadCount(clientSlug: string): Promise<number> {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID
    if (!spreadsheetId) return 0

    const token = await getAccessToken()
    const tabName = clientSlug || 'Leads'
    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(tabName + '!A:A')}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )

    if (!res.ok) return 0
    const data = await res.json()
    return Math.max(0, (data.values?.length || 0) - 1) // subtract header
  } catch {
    return 0
  }
}

// ─── Report Generator ─────────────────────────────────────────────────

async function main() {
  const { client, month } = parseArgs()
  loadEnv()

  console.log('\n  Generating Monthly AI Ranking Report...\n')

  const config = loadClientConfig(client)
  const reportMonth = month || config.blogPosts.length + 1
  const reportDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

  // Get lead count
  let leadCount = 0
  try {
    leadCount = await getLeadCount(client)
  } catch {
    console.log('  Note: Could not fetch lead count (Google Sheets credentials may be missing)')
  }

  // Build report
  const lines: string[] = []

  lines.push(`# Monthly AI Ranking Report — ${config.name}`)
  lines.push(``)
  lines.push(`**Report Date:** ${reportDate}`)
  lines.push(`**Month:** ${reportMonth}`)
  lines.push(`**Tier:** ${config.tier.charAt(0).toUpperCase() + config.tier.slice(1)}`)
  lines.push(``)

  // Content Inventory
  lines.push(`## Content Inventory`)
  lines.push(``)
  lines.push(`| Asset | Count | Status |`)
  lines.push(`|-------|-------|--------|`)
  lines.push(`| Blog Posts (live) | ${config.blogPosts.length} | Active |`)
  lines.push(`| Landing Page | 1 | Active |`)
  lines.push(`| Lead Magnet | 1 | Active |`)
  lines.push(`| Series: ${config.seriesName} | ${config.blogPosts.length} of 6+ planned | In progress |`)
  lines.push(``)

  // Blog Posts Detail
  lines.push(`## Blog Post Performance`)
  lines.push(``)
  lines.push(`| # | Post Title | Target Keyword | Published | Status |`)
  lines.push(`|---|-----------|----------------|-----------|--------|`)
  for (const post of config.blogPosts) {
    lines.push(`| ${post.seriesOrder} | ${post.title} | ${post.keyword} | ${post.date} | Live |`)
  }
  lines.push(``)

  // AI Rankings Section (placeholder — to be filled by hive-rank checks)
  lines.push(`## AI Search Rankings`)
  lines.push(``)
  lines.push(`> **Action Required:** Run the following hive-rank checks to populate this section:`)
  lines.push(``)
  for (const post of config.blogPosts) {
    lines.push(`- \`hive_rankings\` for query: "${post.keyword}"`)
  }
  lines.push(`- \`hive_domain\` for contentrepurposehub.com`)
  lines.push(``)
  lines.push(`| Keyword | Position | Trend | Notes |`)
  lines.push(`|---------|----------|-------|-------|`)
  for (const post of config.blogPosts) {
    lines.push(`| ${post.keyword} | Check hive-rank | — | — |`)
  }
  lines.push(``)

  // Lead Summary
  lines.push(`## Lead Capture Summary`)
  lines.push(``)
  if (leadCount > 0) {
    lines.push(`- **Total leads captured:** ${leadCount}`)
  } else {
    lines.push(`- **Total leads captured:** Data not available (check Google Sheets credentials)`)
  }
  lines.push(`- **Landing page:** /clients/${client}`)
  lines.push(`- **Lead magnet:** /clients/${client}/scorecard`)
  lines.push(``)

  // Compounding Value
  lines.push(`## Compounding Value`)
  lines.push(``)
  lines.push(`After ${reportMonth} month${reportMonth !== 1 ? 's' : ''}:`)
  lines.push(`- ${config.blogPosts.length} blog post${config.blogPosts.length !== 1 ? 's' : ''} building topical authority`)
  lines.push(`- Internal link network growing with each new post`)
  lines.push(`- SEO topical cluster strengthening (Google sees deeper coverage)`)
  lines.push(`- AI search citation surface expanding (more FAQ schema + direct answers)`)
  lines.push(``)

  // Recommendations
  lines.push(`## Recommendations for Next Month`)
  lines.push(``)
  lines.push(`1. **Process next webinar/podcast** — Continue the ${config.seriesName}`)
  lines.push(`2. **New blog post** — Part ${config.blogPosts.length + 1} targeting the next keyword in the series arc`)
  lines.push(`3. **Fresh LinkedIn posts** — 10 new posts referencing the latest blog post`)
  lines.push(`4. **Newsletter edition** — Recap the series so far, tease the next chapter`)
  if (config.tier === 'growth' || config.tier === 'scale') {
    lines.push(`5. **Keyword gap refresh** — Check for new ranking opportunities`)
  }
  lines.push(``)
  lines.push(`---`)
  lines.push(`*Generated by ContentRepurposeHub Monthly Report Generator*`)

  const report = lines.join('\n')

  // Write report to file
  const reportFileName = `report-month-${reportMonth}-${client}.md`
  const reportPath = join(ROOT, 'clients', client, reportFileName)
  writeFileSync(reportPath, report)

  console.log(`  Report generated: clients/${client}/${reportFileName}`)
  console.log(`  Client: ${config.name}`)
  console.log(`  Month: ${reportMonth}`)
  console.log(`  Blog Posts: ${config.blogPosts.length}`)
  console.log(`  Leads: ${leadCount > 0 ? leadCount : 'N/A'}`)
  console.log(`\n  Next steps:`)
  console.log(`  1. Run hive_rankings for each target keyword to fill AI ranking positions`)
  console.log(`  2. Run hive_domain for contentrepurposehub.com for domain intelligence`)
  console.log(`  3. Share report with client\n`)
}

main().catch((err) => {
  console.error('\n  Error:', err.message || err)
  process.exit(1)
})
