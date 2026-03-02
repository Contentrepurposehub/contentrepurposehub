# Decisions Log

> Every significant decision, why it was made, and what it affects
> Source: .claude/status.md decisions log + session history
> Last updated: 2026-03-02

## Format

Each entry: Date | Decision | Why | What It Affects

---

## 2026-03-02

**Connected Obsidian vault as second brain**
- Why: Session context was being lost between conversations. Re-explaining project state every session is expensive.
- Affects: Session start protocol, MEMORY.md, CONTEXT.md

---

## 2026-02-18

**Deleted all test client data (David Bach, Yoshua Bengio, YB v2)**
- Why: These were system tests only — no real client relationships. Keeping them pollutes the codebase.
- Affects: clients.ts, sitemap, public assets, app routes
- What was deleted: 3 client folders, 23 public assets, client routes, clients.ts entries

**Removed fragment URLs from sitemap**
- Why: Google ignores `/#pricing` etc. — wastes crawl budget.
- Affects: sitemap.ts

**Kept client delivery system intact**
- Why: Types, functions, templates all preserved for future real clients.
- Affects: clients.ts, CLAUDE.md, .claude/ reference docs
- Decision: The code is ready. Only real client data was deleted.

**Removed Botsonic chatbot**
- Why: Cost reduction. No paying clients to use it with yet.
- Affects: Root layout (removed script tag)
- Commit: d5b499c

**Full SEO/GEO audit — 511 AI punctuation tells removed**
- Why: Quality cleanup. All 25 blog posts had em dashes and double hyphens from AI generation.
- Affects: All 25 blog posts
- Detail: 302 em dashes + 209 double hyphens removed across all posts
- Commits: 298806a (em dashes), a99802b (double hyphens)

**Added About page + Marius Galatan author schema**
- Why: E-E-A-T signals. Google and AI search need a real person author to trust the content.
- Affects: All 25 blog posts + blog index (author changed from Organization to Person)
- New page: /about

**Created Privacy Policy + Terms of Service pages**
- Why: Legal compliance + trust signals. Required for any legitimate business.
- Affects: /privacy, /terms (both added to sitemap)

**Created 3 comparison pages**
- Why: Competitor alternative queries are commercial intent with lower competition.
- Affects: Blog (3 new posts), sitemap
- Pages: /blog/chopcast-alternative, /blog/repurpose-my-webinar-alternative, /blog/komet-media-vs-contentrepurposehub

**Created original research post**
- Why: AI citation requires citable data. Original research is the best signal.
- Affects: Blog (1 new post), sitemap (priority 0.9)
- Page: /blog/webinar-repurposing-benchmarks-2026

---

## 2026-02-13

**ZERO external links on any CTA — non-negotiable**
- Why: Traffic leaks kill conversion. Every link off-site is a lost lead.
- Affects: All landing pages, all CTAs, all future client builds
- Rule: Hero CTAs -> #scorecard. All buttons stay on-site. Only About section can have external links.

**No YouTube embeds on landing pages**
- Why: YouTube = traffic leaving the page. Also loads slowly.
- Affects: All client landing pages
- Solution: All video served locally from public/ via yt-dlp + ffmpeg extraction

**`printf` not `echo` for Vercel env vars**
- Why: `echo` adds trailing newlines that break string matching in env var lookup.
- Affects: All future env var setup for client email platforms

**Landing page template documented**
- Why: Standards must be written down so they're followed consistently.
- Affects: .claude/landing-page-template.md

---

## 2026-02-12

**Remotion researched, not installed**
- Why: Free for teams <=3. Good fit for video deliverables. Not a current blocker.
- Status: Pending — install when first video deliverable is needed
- Research file: research-remotion-framework-feb-2026.md

---

## 2026-02-09

**25 blog posts published on one date (later staggered)**
- Initial: All published 2026-02-09 — signals mass-generation to Google
- Fix (2026-02-18): Spread across Feb 9-18 at 2-3 posts/day
- Lesson: Publish at natural cadence, not in batches

**robots.txt allows all AI crawlers explicitly**
- Why: If AI crawlers are blocked, they can't index and cite content.
- Includes: GPTBot, PerplexityBot, Claude-Web, and all others
