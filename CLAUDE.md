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

Next.js 16 marketing site for ContentRepurposeHub (webinar repurposing service). App Router, TypeScript, Tailwind CSS v4.

### Key Files

- `src/app/(agency)/page.tsx` — Main marketing site (hero, pricing, FAQ, JSON-LD)
- `src/app/layout.tsx` — Root layout
- `src/app/api/chat/route.ts` — Claude API endpoint (`@anthropic-ai/sdk`)
- `src/app/api/leads/route.ts` — Lead capture API. POST `{ name, email, client, source }` -> Google Sheets + email platform adapter
- `src/app/sitemap.ts` — Dynamic sitemap from `clients.ts`
- `src/app/globals.css` — Tailwind + custom CSS (`.gradient-text`, `.gradient-bg`, `.card-shadow`)
- `src/app/(clients)/clients/[name]/page.tsx` — Client landing page (lead capture)
- `src/app/(clients)/clients/[name]/blog/page.tsx` — First blog post (Part 1)
- `src/app/(clients)/clients/[name]/blog/[slug]/page.tsx` — Month 2+ blog posts
- `src/app/(clients)/clients/[name]/scorecard/` — Interactive lead magnet
- `src/app/(clients)/clients/[name]/LeadCaptureForm.tsx` — Email capture form (client component)
- `src/lib/clients.ts` — **Client Config Registry** (central source of truth for all client metadata)
- `src/components/SeriesNav.tsx` — Blog series navigation
- `src/components/BlogIndex.tsx` — Blog index
- `scripts/generate-monthly-report.ts` — Monthly AI Ranking Report generator
- `scripts/create-client-deliverables.ts` — Google Sheet deliverables generator

### Path Aliases

`@/*` maps to `./src/*`

### Environment Variables

- `ANTHROPIC_API_KEY` — Chat API
- `GOOGLE_SHEETS_PRIVATE_KEY` / `GOOGLE_SHEETS_CLIENT_EMAIL` / `GOOGLE_SHEETS_SPREADSHEET_ID` — Lead storage
- `[CLIENTSLUG]_EMAIL_PLATFORM` / `[CLIENTSLUG]_EMAIL_API_KEY` / `[CLIENTSLUG]_EMAIL_LIST_ID` — Per-client email platform
- `[CLIENTSLUG]_WEBHOOK_URL` — (Optional) Generic webhook fallback

## Content Generation Skills

**IMPORTANT:** When the user requests content generation, automatically invoke the appropriate skill. Do not write content manually.

| Request Type | Skill |
|-------------|-------|
| Landing pages, sales copy, CTAs, headlines | `/direct-response-copy` |
| Blog posts, SEO articles | `/seo-content` |
| Email sequences, welcome series | `/email-sequences` |
| Newsletters | `/newsletter` |
| Lead magnets, opt-in ideas | `/lead-magnet` |
| Repurpose content for social | `/content-atomizer` |
| Define/extract brand voice | `/brand-voice` |
| Positioning, angles, hooks | `/positioning-angles` |
| Keyword research, content strategy | `/keyword-research` |
| Product photography | `/ai-product-photo` |
| Product videos | `/ai-product-video` |
| Social graphics, thumbnails | `/ai-social-graphics` |
| Talking head videos, UGC | `/ai-talking-head` |
| General AI image generation | `/ai-image-generation` |
| Creative strategy, briefs | `/ai-creative-strategist` |
| Reddit/X trend research, what people are saying about a topic | `/last30days` |
| Unsure / need routing | `/orchestrator` |

## Client Delivery System

**The flywheel:** Webinar -> Transcription -> Content Pieces -> Grow Email List -> Promote Next Webinar -> Repeat

**AUTO-TRIGGER RULE:** When user provides a transcript/script/webinar content, automatically treat as client engagement. Ask tier + funnel type, then begin Step 1 immediately.

### Onboarding Questions (Ask ALL Before Starting Any Work)

**CRITICAL: Do NOT begin Step 1 until ALL 5 questions are answered. Missing info (especially email platform) causes incomplete delivery.**

1. **Tier:** "Which plan tier — Starter ($750), Growth ($1,000), or Scale ($1,500)?"
2. **Funnel Type:** "Live webinars regularly, or promoting an existing replay?"
   - Live webinars -> `funnelType: 'active-webinar'`
   - Existing replay -> `funnelType: 'replay-promotion'`
3. **Email Platform:** "Which email platform does the client use for their subscriber list?"
   - Supported: **Beehiiv**, **Mailchimp**, **ConvertKit (Kit)**, **ActiveCampaign**
   - If other platform: ask for a **webhook URL** as fallback
4. **Email Platform Credentials:** Based on the platform from Q3, ask the client for:
   - **Beehiiv:** API Key (Settings > Integrations > API) + Publication ID (starts with `pub_`)
   - **Mailchimp:** API Key (Account > Extras > API Keys) + Audience ID (Audience > Settings)
   - **ConvertKit:** API Key (Settings > Developer) + Form ID (from form URL)
   - **ActiveCampaign:** API URL + API Key (Settings > Developer) + List ID (from list URL)
   - Tell the client: "I need two things from your [platform] account to connect leads directly to your subscriber list. Takes 5 minutes." (See `.claude/email-setup.md` for step-by-step instructions per platform.)
5. **Conversion URL:** Active webinar = registration URL. Replay = replay URL. Also ask for the **Conversion Label** (e.g., "Watch the Full Episode Free", "Register Now").

These populate `src/lib/clients.ts` fields: `funnelType`, `postCaptureRedirect`, `conversionUrl`, `conversionLabel`.
Email credentials go into `.env.local` as: `[CLIENTSLUG]_EMAIL_PLATFORM`, `[CLIENTSLUG]_EMAIL_API_KEY`, `[CLIENTSLUG]_EMAIL_LIST_ID`.

### The Email Flywheel (Non-Negotiable)

Every lead captured on a client's landing page or scorecard MUST go to **two places simultaneously**:
1. **Our Google Sheet** — for our tracking (always happens via `GOOGLE_SHEETS_*` env vars)
2. **Client's email platform** — so their automated email sequence fires immediately

This is handled by `src/app/api/leads/route.ts` which reads `[CLIENTSLUG]_EMAIL_PLATFORM` env vars. If these aren't set, leads go ONLY to our sheet and the client never receives them. **This is a broken flywheel.**

Setup steps (do this during Step 9 — Build Live Pages):
1. Collect credentials from onboarding Q3/Q4
2. Add 3 env vars to `.env.local` (and production)
3. Test with a real email on the client's landing page
4. Verify subscriber appears in client's platform as Active
5. See `.claude/email-setup.md` for platform-specific gotchas (e.g., Beehiiv double opt-in must be OFF)

### Funnel-Type CTA Rules

| Skill | Active Webinar CTA | Replay Promotion CTA |
|-------|-------------------|---------------------|
| `/newsletter` | "Register for [webinar title]" + registration URL | "[conversionLabel]" + replay URL |
| `/email-sequences` | Welcome -> value -> invite to live webinar | Welcome -> value -> drive to replay with urgency |
| `/content-atomizer` | "Comment [X] to get the free [lead magnet]" -> landing page | Same — always capture email first |
| `/seo-content` | Landing page CTAs + optional webinar banner | Landing page CTAs + "free training" mention |

If `conversionUrl` or `conversionLabel` is not set in client config, ask before writing content.

### Workflow (James Dickerson Methodology)

**Never skip a step. Never create content without completing research first.**

#### Starter Tier ($750) — Steps 0.5 through 10

| Step | Action | Skill | Output |
|------|--------|-------|--------|
| 0.5 | Trend & Conversation Research | `/last30days` | Informs brief + angles |
| 1 | Research & Extraction | Manual | `brief.md` |
| 2 | Brand Voice Extraction | `/brand-voice` | `brand-voice.md` |
| 3 | Positioning & Angles | `/positioning-angles` | `positioning-angles.md` |
| 4 | Lead Magnet | `/lead-magnet` | `01-lead-magnet.md` |
| 5 | Blog Post | `/seo-content` | `02-blog-post.md` |
| 6 | Newsletter | `/newsletter` | `03-newsletter.md` |
| 7 | Landing Page Copy | `/direct-response-copy` | `04-landing-page-copy.md` |
| 8 | LinkedIn Posts | `/content-atomizer` | `05-linkedin-posts.md` |
| 9 | Build Live Pages + Email Integration | Code | Live URLs + email flywheel tested |
| 10 | Google Sheet Delivery | Script | Sheet tabs with Playbook links |

#### Growth Tier ($1,000) — All of Starter PLUS Steps 0, 0.5-extra, 11-16

| Step | Action | Skill | Output |
|------|--------|-------|--------|
| 0 | Client Digital Presence Analysis | Web research | `digital-presence-analysis.md` |
| 0.5 | Keyword & AI Citation Gap Analysis | `/keyword-research` | `step-0.5-trend-research.md` |
| 11 | Twitter/X Threads (2) | `/content-atomizer` | `06-twitter-threads.md` |
| 12 | Email Sequence (3-email welcome) | `/email-sequences` | `07-email-sequence.md` |
| 13 | Instagram Content (8 captions) | `/content-atomizer` | `08-instagram-content.md` |
| 14 | YouTube Shorts Scripts (4) | `/content-atomizer` | `09-youtube-shorts-scripts.md` |
| 15 | Content Calendar (30-day) | Manual | `10-content-calendar.md` |
| 16 | Brand Voice Doc (client-facing) | `/brand-voice` | `11-brand-voice-client-facing.md` |

Growth differences from Starter:
- Step 0: Crawl client website + social media for colors, fonts, layout, voice
- Steps 5/7/9: Landing page + blog are **brand-matched** to client's website design
- Step 8: LinkedIn posts are **voice-matched** to client's actual writing style (20 posts, not 10)
- Step 6: 2 newsletter editions (not 1)
- Step 10: Google Sheet includes extra tabs (Twitter/X Threads, Email Sequence)

#### Scale Tier ($1,500) — All of Growth PLUS higher volume

Same steps as Growth, with increased volume:
- 4 blog posts (not 1), 40 LinkedIn posts (not 20), 4 newsletters (not 2)
- 4 Twitter threads (not 2), 7-email nurture sequence (not 3-email welcome)
- 8 Instagram captions, 4 YouTube Short scripts, 30-day content calendar, full brand voice doc
- Google Sheet includes all tabs: LinkedIn, Newsletter, Twitter, Email, Instagram, YouTube Shorts, Calendar

### Client Folder Structure

```
/clients/[client-name]/
  status.md                     # Workflow progress tracker (read before touching any client files)
  brief.md                      # Step 1: Source material research + extraction
  brand-voice.md                # Step 2: Extracted voice profile
  positioning-angles.md         # Step 3: 3-5 angle options
  digital-presence-analysis.md  # Step 0 (Growth/Scale only)
  step-0.5-trend-research.md    # Step 0.5 (Growth/Scale only)
  /deliverables/
    01-lead-magnet.md           # Scorecard/quiz concept + questions
    02-blog-post.md             # SEO blog post (publication-ready)
    03-newsletter.md            # Newsletter edition(s)
    04-landing-page-copy.md     # Landing page copy blocks
    05-linkedin-posts.md        # LinkedIn posts (10 Starter / 20 Growth / 40 Scale)
    06-twitter-threads.md       # Growth/Scale: Twitter threads
    07-email-sequence.md        # Growth/Scale: Email welcome/nurture sequence
    08-instagram-content.md     # Scale: Instagram captions
    09-youtube-shorts-scripts.md # Scale: YouTube Shorts scripts
    10-content-calendar.md      # Scale: 30-day content calendar
    11-brand-voice-client-facing.md # Scale: Brand voice document for client's team
```

### Live Page URLs

These MUST be included in the Google Sheet Playbook tab so the client can access them directly.

```
/clients/[name]              -> Landing page (lead capture + email flywheel)
/clients/[name]/blog         -> SEO blog post
/clients/[name]/scorecard    -> Interactive lead magnet (scorecard/quiz)
```

Full URLs (for Google Sheet Playbook):
```
https://contentrepurposehub.com/clients/[name]
https://contentrepurposehub.com/clients/[name]/blog
https://contentrepurposehub.com/clients/[name]/scorecard
```

### Quality Standards (Non-Negotiable)

- **Sound like the client** — Use their words, stories, examples
- **Follow extracted brand voice profile** — Voice consistency check on every piece
- **Include specific numbers/data** from source material
- **Anti-slop test** — No buzzwords, no "in today's fast-paced...", no "game-changer", no "unlock your potential"
- **All LinkedIn/social CTAs** -> landing page (not book purchase or external links)
- **Blog CTAs** -> landing page throughout (top, middle, end)

### Landing Page Design Standards — Growth & Scale Tiers (Non-Negotiable)

**BLOCKING REQUIREMENT:** Before writing ANY `page.tsx` for a Growth or Scale client, you MUST read `.claude/landing-page-template.md` in full. Do not build from memory. Do not simplify. The template is the spec.

**Every Growth/Scale landing page MUST include ALL of these. If any is missing, the page is incomplete and must not be shipped:**

1. **VideoBackground component** — Hero section uses `VideoBackground.tsx` with local video clip + dark overlay + fallback image. NEVER a static CSS gradient. NEVER skip this.
2. **AnimatedCard component** — Every card grid on the page uses `AnimatedCard.tsx` for staggered fade-up on scroll (200ms delay between cards).
3. **AnimatedCounter component** — All key stats use `AnimatedCounter.tsx` for count-up animation on scroll.
4. **Two local video clips** — Extracted from source content via yt-dlp + re-encoded to H.264 with ffmpeg. Hero clip (autoplay muted loop) + value exchange clip (with audio/controls). Served from `public/`, NEVER YouTube embeds.
5. **Lead capture in 3 positions** — (a) Header CTA button linking to `#scorecard`, (b) mid-page opt-in section with `id="scorecard"`, (c) value exchange section at bottom with second LeadCaptureForm.
6. **15 sections minimum** — Sticky Header, Hero, Media Bar, Framework, Key Numbers, Signature Quote, What It Reveals, Opt-in, Resources, Endorsements, About, How It Works, FAQ, Value Exchange, Footer.
7. **Brand-matched colors** — Extracted from the client's actual website, stored as design tokens (`PRIMARY`, `DARK`, `LIGHT`, `ACCENT`, `CTA_BG`) at the top of `page.tsx`.

**These are STRUCTURAL, not client-specific.** When building a new client page or overwriting an existing one, ONLY the content (text, quotes, stats, links) changes. The design framework (VideoBackground, AnimatedCard, AnimatedCounter, video clips, 15-section structure, 3 lead capture positions) ALWAYS stays.

**Post-build verification:** After writing the page, check every item above before running `npm run build`. If any is missing, fix it before proceeding.

## Trend Research with /last30days

**Skill:** `/last30days` — Researches any topic across Reddit, X, and the web from the last 30 days. Surfaces what people are actually discussing, recommending, and debating right now.

**AUTO-USE in these situations:**
- **Step 0.5 of client workflow** — Before brief extraction, research the client's niche topic (e.g., `/last30days business acquisition financing` for a client who teaches buying businesses). Feeds real pain points, trending angles, and community language into the brief and positioning.
- **Before writing blog posts** — Check what Reddit/X are saying about the target keyword. Find angles that aren't covered by existing content.
- **Before writing LinkedIn posts** — Surface trending conversations to create posts that join existing discussions rather than shouting into the void.
- **Competitor/market research** — "What are people saying about [competitor]?" or "What's trending in [client's niche]?"
- **When user asks about trends** — Any question like "what's trending in...", "what are people saying about...", "what's hot in..."

**Options:** `--quick` (faster, fewer sources), `--deep` (comprehensive), `--days=7` (weekly), `--days=14` (two weeks)

## Remotion Video Generation (Researched, Pending Installation)

**Status:** Research complete (Feb 12, 2026). Not yet installed in the project. See `research-remotion-framework-feb-2026.md` for full report.

**What it is:** React-based framework for programmatic video generation. Free for teams of 3 or fewer. Official Claude Code agent skills (31 rule files) that teach Claude how to write Remotion code correctly.

**Planned use cases for client deliverables:**
- Audiogram clips from webinars (waveform + animated captions)
- Animated quote cards for social media
- Data visualization videos (client stats/frameworks as animated explainers)
- Batch social media clips from transcripts
- Landing page hero animations
- Personalized monthly recap videos for clients

**Installation steps (when ready):**
1. `npm i remotion @remotion/cli @remotion/player` — Add to project
2. `npx skills add remotion-dev/skills` — Install Claude Code agent skills to `.claude/skills/`
3. Create `remotion/` folder with Root.tsx, Composition.tsx, index.ts
4. Render locally: `npx remotion render` (free) or Lambda (~$0.02/clip)

**Landing page animation goal:** Add Remotion-powered animated elements to client landing pages (hero section animations, interactive elements). Tested in demo but not yet deployed.

## AI Search Ranking Tracker (Hive-Rank)

Tools: `hive_rankings`, `hive_trending`, `hive_domain`, `hive_stats`, `hive_search`

**Tracking file:** `ai-rankings-tracker.md`

At the start of every content-related session, check AI rankings using `hive_domain` and update the tracker.

## Session Continuity

**Problem:** Context compaction and session limits lose decisions, progress, and blockers. These rules prevent re-work.

1. **Read `.claude/status.md` at every session start.** This is the "read this first" file. It contains active clients, current sprint state, decisions log, and blockers. If it's >3 days stale, reconstruct from `git log`.
2. **Update status files after completing tasks, making decisions, or discovering blockers.** Update `.claude/status.md` for global state and `clients/[name]/status.md` for client-specific progress. Also update proactively every ~15-20 exchanges, before long operations, and when switching between topics/clients.
3. **Read `clients/[name]/status.md` before touching any client files.** This tracks every workflow step, pending client actions, created assets, and config values. Prevents duplicate work and missed steps.

## Reference Files (Read On-Demand)

Detailed procedures are in `.claude/` — read these when needed, not every session:

| File | When to Read |
|------|-------------|
| `.claude/status.md` | **Every session start** (mandatory) |
| `clients/[name]/status.md` | Before touching any client files |
| `.claude/pricing.md` | When onboarding a new client (tier details, deliverable specs) |
| `.claude/email-setup.md` | **During onboarding Q3/Q4** — platform-specific credential instructions to guide the client |
| `.claude/playbook-starter.md` | Onboarding a new Starter client |
| `.claude/landing-page-template.md` | **MUST READ before Step 9** for Growth/Scale clients. Contains the full 15-section spec, design checklist, video extraction pipeline, and component requirements. Do not build from memory. |
| `.claude/google-sheet-workflow.md` | Creating/updating Google Sheet (Step 10) — includes tab structure per tier + Playbook link requirements |
| `.claude/month2-workflow.md` | Processing Month 2+ content |
| `.claude/troubleshooting.md` | Debugging deploy/SEO/integration issues |

## Key Reference Files

- `brand-voice.md` — Agency voice profile (direct, practitioner confidence, anti-fluff)
- `content-calendar.md` — 90-day content plan
- `ai-rankings-tracker.md` — AI search ranking positions for all posts
