# ContentRepurposeHub — Session Context

> Last updated: 2026-03-02
> Vault: /Users/galman/contentrepurposehub/Content repurpesing Hub/
> Project: /Users/galman/contentrepurposehub/

## What This Is

One-person webinar repurposing agency. Turns client webinars into 14+ content pieces that grow their email list. Tier pricing: Starter $750, Growth $1,000, Scale $1,500/month.

**The flywheel:** Webinar -> Transcription -> Content Pieces -> Grow Email List -> Promote Next Webinar -> Repeat

---

## Active State

### Active Clients

| Client | Tier | Month | Next Action |
|--------|------|-------|-------------|
| None | — | — | Acquire first paying client |

No active clients as of 2026-02-18. All prior client data (David Bach, Yoshua Bengio, YB v2) were system tests — deleted. Client delivery system is fully built and ready.

### Current Sprint

**Focus:** Ongoing content/SEO cadence. No active client work.

**In progress:**
- Build backlinks (directory listings, guest posts) — pending
- Tier 4: Publish new blog posts 1-2/week — ongoing
- Install Remotion for video deliverables — pending when ready

**Next up:**
- Acquire first real paying client
- Consider installing Remotion
- Connect Obsidian vault as second brain (this session)

### Blockers

- No backlinks from external sites yet
- First client not yet signed

---

## Site Health

- Blog posts live: 25 (all SEO-optimized, author bylines, zero em dashes)
- OG images: Dynamic per-blog via /api/og route + homepage opengraph-image.tsx
- Sitemap: 29 URLs total
- About page: /about (Marius Galatan, founder bio, Person schema)
- Legal pages: /privacy, /terms
- Known issues:
  - Google Sheet Playbook links not one-click hyperlinks (manual workaround)
  - Zero rankings across all priority keywords (expected — content <2 months old)
  - Zero backlinks from external sites
- Last Hive-Rank check: 2026-02-11 (zero domain data, zero rankings on all 8 priority keywords)
- GA4 + Microsoft Clarity: installed

---

## Key Decisions Since Last Session

- 2026-02-18: Deleted all test client data (David Bach, Yoshua Bengio, YB v2)
- 2026-02-18: Removed Botsonic chatbot to cut costs
- 2026-02-18: Ran full SEO/GEO audit — 511 AI punctuation tells removed across 25 blog posts
- 2026-02-18: Added About page + Marius Galatan author schema to all 25 blog posts
- 2026-02-18: Created Privacy Policy + Terms of Service pages
- 2026-02-18: Created 3 comparison pages (Chopcast, RepurposeMyWebinar, Komet Media alternatives)
- 2026-02-18: Created original research post (/blog/webinar-repurposing-benchmarks-2026)
- 2026-02-13: ZERO external links on any CTA — non-negotiable traffic rule
- 2026-02-13: No YouTube embeds on landing pages — all video served locally
- 2026-02-12: Remotion researched (free for <=3 users), not yet installed
- 2026-03-02: Connected Obsidian vault as second brain for this project

---

## Where Things Live

**Code:**
- `src/app/(agency)/page.tsx` — Main marketing site
- `src/lib/clients.ts` — Client config registry
- `src/app/(clients)/clients/[name]/` — Client landing pages (ready for first client)
- `src/app/api/leads/route.ts` — Lead capture API

**Reference procedures:**
- `.claude/status.md` — Sprint state (detailed)
- `.claude/pricing.md` — Tier specs
- `.claude/email-setup.md` — Email platform credential guide
- `.claude/landing-page-template.md` — MUST READ before any Growth/Scale page build
- `.claude/google-sheet-workflow.md` — Sheet structure per tier
- `.claude/audit-2026-02-18.md` — Full SEO/GEO audit findings

**Vault:**
- `00-agency/` — Brand voice, positioning, pricing, competitor map
- `01-clients/` — Client knowledge graphs (empty until first client)
- `02-seo/` — Rankings log, keyword map, content gaps
- `03-research/` — Competitor intelligence, trend log
- `04-decisions/` — Decisions log, experiments
- `05-content/` — Content inventory (25 posts), pipeline
- `06-systems/` — Workflow notes, skill index

---

## Reference Docs (read on demand)

- `.claude/status.md` — Detailed sprint state
- `.claude/pricing.md` — Tier specs
- `.claude/email-setup.md` — Email platform credentials guide
- `.claude/landing-page-template.md` — MUST READ before any Growth/Scale page build
- `.claude/google-sheet-workflow.md` — Sheet structure per tier
- `02-seo/rankings-log.md` — Full rankings history
- `03-research/competitor-intelligence.md` — Synthesized competitor map
- `04-decisions/decisions-log.md` — All decisions with context
