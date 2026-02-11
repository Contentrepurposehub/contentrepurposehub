# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture Overview

This is a Next.js 16 marketing site for ContentRepurposeHub (a webinar repurposing service) using the App Router with TypeScript and Tailwind CSS v4.

### Key Files

- `src/app/(agency)/page.tsx` - Single-page marketing site with all sections (hero, pricing, FAQ, etc.) and JSON-LD structured data for SEO/AI search optimization
- `src/app/layout.tsx` - Root layout with base HTML structure
- `src/app/api/chat/route.ts` - Simple Claude API endpoint (uses `@anthropic-ai/sdk`) that accepts POST with `{ message: string }` and returns `{ reply: string }`
- `src/app/api/leads/route.ts` - Lead capture API endpoint. Accepts POST with `{ name, email, client, source }`. Stores leads to Google Sheets + optional webhook.
- `src/app/sitemap.ts` - Dynamic sitemap generator for SEO
- `src/app/globals.css` - Tailwind imports and custom CSS variables/utility classes (`.gradient-text`, `.gradient-bg`, `.card-shadow`)
- `src/app/(clients)/clients/david-bach/page.tsx` - Lead capture landing page (email form → scorecard)
- `src/app/(clients)/clients/david-bach/blog/page.tsx` - SEO blog post with CTAs to landing page
- `src/app/(clients)/clients/david-bach/scorecard/` - Interactive lead magnet (accessed after email capture)
- `src/app/(clients)/clients/david-bach/LeadCaptureForm.tsx` - Client component for email capture form

### Path Aliases

`@/*` maps to `./src/*` (configured in tsconfig.json)

### Environment Variables

- `ANTHROPIC_API_KEY` - Required for the chat API endpoint (add to `.env.local`)
- `GOOGLE_SHEETS_PRIVATE_KEY` - Service account key for lead capture Google Sheets integration
- `GOOGLE_SHEETS_CLIENT_EMAIL` - Service account email for Google Sheets API
- `GOOGLE_SHEETS_SPREADSHEET_ID` - Default spreadsheet ID for lead storage
- `DAVID_BACH_WEBHOOK_URL` - (Optional) Webhook URL for David Bach lead notifications

## Content Generation Skills

**IMPORTANT:** When the user requests content generation, automatically invoke the appropriate skill. Do not just write content manually—use these skills.

### Skill Mapping

| Request Type | Skill to Use |
|-------------|--------------|
| Landing pages, sales copy, CTAs, headlines | `/direct-response-copy` |
| Blog posts, SEO articles | `/seo-content` |
| Email sequences, welcome series, nurture campaigns | `/email-sequences` |
| Newsletters | `/newsletter` |
| Lead magnets, opt-in ideas, freebies | `/lead-magnet` |
| Repurpose content for social platforms | `/content-atomizer` |
| Define/extract brand voice | `/brand-voice` |
| Positioning, angles, hooks, differentiation | `/positioning-angles` |
| Keyword research, content strategy, topic clusters | `/keyword-research` |
| Product photography | `/ai-product-photo` |
| Product videos, reveals, hero shots | `/ai-product-video` |
| Social graphics, thumbnails, Instagram/LinkedIn images | `/ai-social-graphics` |
| Talking head videos, UGC, lip-sync | `/ai-talking-head` |
| General AI image generation | `/ai-image-generation` |
| Creative strategy, briefs, visual direction | `/ai-creative-strategist` |
| Unsure which skill / need routing | `/orchestrator` |

### Usage Pattern

1. Identify what the user is asking for
2. Match to the appropriate skill from the table above
3. Invoke the skill immediately using the Skill tool
4. Follow the skill's workflow and outputs

## Client Delivery System (v2 — Cody Schneider Flywheel Model)

**The flywheel:** Webinar → Transcription → Content Pieces → Grow Email List → Promote Next Webinar → Repeat

**AUTO-TRIGGER RULE:** When the user provides a video script, transcript, or webinar recording content, automatically treat it as a client engagement. If no plan tier is specified, ask: "Which plan tier — Starter ($750), Growth ($1,000), or Scale ($1,500)?" Then create the client folder structure and begin the delivery workflow. Do NOT wait for additional instructions — begin Step 1 immediately once the tier is confirmed.

### What We Host vs. What We Deliver

**Live Web Pages (we host on our domain):**

| Page | Purpose | URL Pattern |
|------|---------|-------------|
| Landing Page | Lead capture — email form → access to lead magnet | `/clients/[name]` |
| Blog Post | SEO/AI traffic driver — CTAs to landing page | `/clients/[name]/blog` |
| Lead Magnet | Interactive tool accessed after email capture | `/clients/[name]/scorecard` (or similar) |

The landing page IS the main client URL. No hub page, no portfolio cards.

**Google Sheet Deliverables (copy the client uses):**
- LinkedIn Posts (with hooks, body, CTAs, posting schedule)
- Newsletter (subject line, preview text, body, CTA)
- Lead Magnet content (scorecard questions, framework, etc.)
- Email Sequence (Growth/Scale only)
- Twitter Threads (Growth/Scale only)
- Keyword Gap Report (Growth/Scale only)
- Instagram Captions (Scale only)
- YouTube Short Scripts (Scale only)

### Traffic & Lead Flow

```
                    ┌─── Google/AI Search ───┐
                    │                         │
                    ▼                         │
LinkedIn Post ─── CTA ──→ LANDING PAGE ◄── BLOG POST
(comment X to           (lead capture)     (SEO engine)
 get free guide)              │
                              ▼
                        EMAIL FORM
                     (name + email)
                              │
                    ┌─────────┼──────────┐
                    ▼         ▼          ▼
              Google Sheet  Webhook   Embed
              (default)   (optional) (client's
                    │                  form)
                    ▼
              CLIENT'S EMAIL LIST
                    │
                    ▼
              NEWSLETTER
              (promotes next webinar)
                    │
                    ▼
              NEXT WEBINAR → MORE CONTENT → FLYWHEEL
```

### Client Folder Structure

```
/clients/
  /[client-name]/
    brief.md                    — Extracted themes, frameworks, stories, data, quotes
    brand-voice.md              — Client voice profile (from /brand-voice Extract mode)
    positioning-angles.md       — Best angles from the content
    design-brief.md             — (Growth/Scale) Hex colors, fonts, layout patterns from client site
    keyword-gap-report.md       — (Growth/Scale) Keyword & AI citation gap analysis
    /deliverables/
      01-lead-magnet.md
      02-blog-post.md
      03-newsletter.md
      04-landing-page-copy.md
      05-linkedin-posts.md
      (additional files for Growth/Scale tiers)
```

### Tier Structure

#### Starter ($750) — Content Creation Only
- Take transcript, run James Dickerson methodology (Steps 1-10)
- Landing page + blog post use a clean professional template (NOT matched to client brand)
- No website crawling, no keyword gap analysis, no design matching
- **Live pages:** Landing page (lead capture) + Blog post (SEO) + Lead magnet page
- **Google Sheet:** LinkedIn posts (10), newsletter copy, lead magnet content, posting schedule

#### Growth ($1,000) — Content + Intelligence
- Everything in Starter, PLUS:
- **Brand Intelligence** — crawl client's website + social media, extract colors/layout/fonts/voice, match page design to their brand
- **Keyword & AI Citation Gap Analysis** — find what competitors rank for that client doesn't, build those keywords into content, deliver intelligence report
- Landing page + blog post visually match client's existing site
- LinkedIn posts match client's existing writing style
- **Google Sheet additions:** Twitter threads (2), email welcome sequence (3 emails), keyword gap report

#### Scale ($1,500) — Full Service
- Everything in Growth, PLUS:
- More volume (40 LinkedIn posts, 4 blog posts, 4 newsletters, etc.)
- Instagram captions (8), YouTube Short scripts (4), content calendar
- Full brand voice document for client's team

### Tier Deliverable Specs

| Deliverable | Starter ($750) | Growth ($1,000) | Scale ($1,500) |
|-------------|---------------|-----------------|----------------|
| Lead Magnets | 1 | 1 | 1 |
| Blog Posts (live) | 1 | 1 | 4 |
| Landing Page (live, lead capture) | 1 | 1 (brand-matched) | 1 (brand-matched) |
| LinkedIn Posts (Google Sheet) | 10 | 20 | 40 |
| Newsletters (Google Sheet) | 1 | 2 | 4 |
| Twitter/X Threads (Google Sheet) | — | 2 | 4 |
| Email Sequence (Google Sheet) | — | 3-email welcome | 7-email full |
| Brand Intelligence Report | — | 1 | 1 |
| Keyword Gap Report | — | 1 | 1 |
| Instagram Captions (Google Sheet) | — | — | 8 |
| YouTube Short Scripts (Google Sheet) | — | — | 4 |
| Content Calendar | — | — | 1 |
| Brand Voice Doc | — | — | 1 |

### Skill-Stacking Workflow (James Dickerson Methodology v2)

Each step builds on the previous. **Never skip a step. Never create content without completing research first.**

#### Pre-Steps for Growth/Scale Only (before Step 1):

| Step | Action | Skill(s) Used | Output |
|------|--------|---------------|--------|
| 0 | **Client Digital Presence Analysis** — Crawl website, social media profiles. Extract: hex colors, fonts, layout patterns, button styles, photography style. Analyze LinkedIn/Instagram writing style. | Manual analysis | `design-brief.md` |
| 0.5 | **Keyword & AI Citation Gap Analysis** — Analyze client's site for existing keywords. Check competitors. Find gaps. Check AI citation status via hive-rank. | `/keyword-research` + `hive_rankings` | `keyword-gap-report.md` |

#### All Tiers:

| Step | Action | Skill(s) Used | Output |
|------|--------|---------------|--------|
| 1 | **Research & Extraction** — Read source material. Extract every key theme, framework, story, anecdote, data point, quote, pain point, transformation. Compile into a complete brief. | Manual analysis | `brief.md` |
| 2 | **Brand Voice Extraction** — Analyze how the client speaks. Capture vocabulary, tone, rhythm, sentence patterns, jargon level. Every subsequent piece must match this voice. | `/brand-voice` (Extract mode) | `brand-voice.md` |
| 3 | **Positioning & Angles** — Find 3-5 positioning angles from the source material. Identify the strongest hook, the contrarian take, the data-backed claim, the story angle. | `/positioning-angles` | `positioning-angles.md` |
| 4 | **Lead Magnet** — Create interactive tool (checklist, scorecard, calculator). Must be a tool, not just an ebook. | `/lead-magnet` | `deliverables/01-lead-magnet.md` |
| 5 | **Blog Post** — SEO + AI search optimized article. Target keyword derived from webinar topic. Structured for Google ranking AND AI citation (direct answers, FAQ, comparison tables). | `/seo-content` | `deliverables/02-blog-post.md` |
| 6 | **Newsletter** — Email-ready edition. Key insight or story from webinar turned into standalone value. Subject line, preview text, body, CTA included. | `/newsletter` | `deliverables/03-newsletter.md` |
| 7 | **Landing Page Copy** — Lead capture page (NOT sales page). Hero with email form, what you'll discover, social proof, how it works, FAQ, footer CTA. One goal: get the email. | `/direct-response-copy` | `deliverables/04-landing-page-copy.md` |
| 8 | **LinkedIn Posts** — 10 posts (Starter). Mix: 3-4 thought leadership, 2-3 story-based, 2-3 framework/how-to, 1 contrarian. CTAs drive to landing page. | `/content-atomizer` | `deliverables/05-linkedin-posts.md` |
| 9 | **Build Live Pages** — Landing page (lead capture + email form) + Blog post. For Growth/Scale, use design-brief.md to match client's brand. | Code implementation | Live URLs |
| 10 | **Prepare Google Sheet** — All copy deliverables in client-ready spreadsheet format. | Manual compilation | Google Sheet tabs |

#### Additional Steps for Growth/Scale Tiers

| Step | Action | Skill(s) Used | Output |
|------|--------|---------------|--------|
| 11 | **Twitter/X Threads** — Platform-optimized threads with hooks and algorithm signals. | `/content-atomizer` + `/x-algorithm-optimizer` | `deliverables/06-twitter-threads.md` |
| 12 | **Email Sequence** — Welcome/nurture sequence tied to the lead magnet. | `/email-sequences` | `deliverables/07-email-sequence.md` |
| 13 | **Instagram Captions** — Visual-first captions with hooks and CTAs. (Scale only) | `/content-atomizer` | `deliverables/08-instagram-captions.md` |
| 14 | **YouTube Short Scripts** — Sub-60s scripts derived from key moments. (Scale only) | `/content-atomizer` | `deliverables/09-youtube-shorts.md` |
| 15 | **Content Calendar** — 30-day publishing schedule across all platforms. (Scale only) | Manual compilation | `deliverables/10-content-calendar.md` |
| 16 | **Brand Voice Document** — Comprehensive voice guide for the client's team. (Scale only) | `/brand-voice` (Build mode) | `deliverables/11-brand-voice-doc.md` |

### Live Page URL Structure

```
/clients/[client-name]              → Landing page (lead capture + email form)
/clients/[client-name]/blog         → SEO blog post (traffic driver)
/clients/[client-name]/scorecard    → Lead magnet (accessed after email capture)
```

Three URLs per client. Each with a clear purpose in the flywheel.

### Email Capture System

**API Route:** `POST /api/leads` — accepts `{ name, email, client, source }`

**Default behavior (all tiers):**
1. Append row to client's Google Sheet (via Google Sheets API)
2. Return success → redirect to lead magnet page

**Optional (configured per client):**
3. Fire webhook to client's URL (Zapier, Make, or direct to email platform)
4. OR — skip our form entirely and embed client's own ConvertKit/Mailchimp form

**Environment Variables:**
- `GOOGLE_SHEETS_PRIVATE_KEY` — Service account key
- `GOOGLE_SHEETS_CLIENT_EMAIL` — Service account email
- `GOOGLE_SHEETS_SPREADSHEET_ID` — Default spreadsheet ID

### Landing Page Structure (Lead Capture)

1. **Hero** — Headline promising the lead magnet value + email form
2. **What You'll Discover** — 3-4 bullet points about what the assessment reveals
3. **Social Proof** — Brief credibility (client credentials, book sales, etc.)
4. **How It Works** — Simple 3-step: Enter email → Take assessment → Get results
5. **FAQ** — 2-3 quick questions
6. **Footer CTA** — Repeat the email form

**Key principle:** SHORT, focused lead capture page. One goal: get the email.

- **Starter tier:** Clean professional template (navy + white)
- **Growth/Scale tier:** Colors, fonts, layout matched to client's actual website via `design-brief.md`

### Quality Standards (Non-Negotiable)

- **Sound like the client** — Use their words, stories, examples. Not generic filler.
- **Follow the extracted brand voice profile** — Every piece must pass a voice consistency check.
- **Include specific numbers/data** from the source material — vague claims kill credibility.
- **Anti-slop test** — No buzzwords, no AI-sounding phrases, no "in today's fast-paced...", no "game-changer", no "unlock your potential". If it sounds like ChatGPT wrote it, rewrite it.
- **Blog post structure** — Optimized for both Google SEO and AI search citation (direct answers, FAQ schema, comparison tables).
- **All content** — Optimized per our dual Google + AI search promise.
- **Use the client's actual anecdotes and teaching moments** — not generic examples. The source material is the content mine.
- **All LinkedIn/social CTAs** — Drive to the landing page, not to book purchase or external links.
- **Blog CTAs** — Drive to the landing page throughout the article (top, middle, end).

### Additional Skill Usage (When Relevant)

- `/keyword-research` — When the client's niche needs topic cluster mapping before writing the blog post
- `/orchestrator` — When unsure what to create next or how to sequence
- `/sales-council` — When pricing, objection handling, or pitch elements are needed in landing page copy
- `/startup-strategy-council` — When the client needs business strategy advice baked into content

---

## AI Search Ranking Tracker (Hive-Rank)

**MCP installed:** hive-rank (HTTP transport at https://mcp.hive-rank.com/mcp)

**Available tools:**
- `hive_rankings` — Check rankings for specific queries
- `hive_trending` — See trending queries across the network
- `hive_domain` — Get intelligence for contentrepurposehub.com
- `hive_stats` — Network-wide statistics
- `hive_search` — Full-text search across network queries

**Tracking file:** `ai-rankings-tracker.md` — Contains all 21 blog posts with target keywords, AI ranking positions, and trends.

**IMPORTANT:** At the start of every content-related session, check AI rankings for ContentRepurposeHub using `hive_domain` and update the tracker. When writing new content, check `hive_rankings` for target keywords to inform strategy.

### Key Reference Files

- `brand-voice.md` — Voice profile for all content (direct, practitioner confidence, anti-fluff)
- `content-calendar.md` — 90-day content plan with 12 posts mapped out
- `ai-rankings-tracker.md` — AI search ranking positions for all posts
