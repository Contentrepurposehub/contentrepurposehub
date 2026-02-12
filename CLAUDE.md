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
- `src/app/(clients)/clients/[name]/page.tsx` - Lead capture landing page (email form → lead magnet)
- `src/app/(clients)/clients/[name]/blog/page.tsx` - First blog post (Part 1 of content series) with series navigation
- `src/app/(clients)/clients/[name]/blog/[slug]/page.tsx` - Dynamic route for Month 2+ blog posts with series navigation
- `src/app/(clients)/clients/[name]/scorecard/` - Interactive lead magnet (accessed after email capture)
- `src/app/(clients)/clients/[name]/LeadCaptureForm.tsx` - Client component for email capture form
- `src/lib/clients.ts` - **Client Config Registry** — central source of truth for all client metadata, blog posts, series info. Used by sitemap, blog routing, leads API.
- `src/components/SeriesNav.tsx` - Series navigation component (part badge, prev/next, start from beginning)
- `src/components/BlogIndex.tsx` - Blog index component showing all posts in a series
- `scripts/generate-monthly-report.ts` - Monthly AI Ranking Report generator

### Path Aliases

`@/*` maps to `./src/*` (configured in tsconfig.json)

### Environment Variables

- `ANTHROPIC_API_KEY` - Required for the chat API endpoint (add to `.env.local`)
- `GOOGLE_SHEETS_PRIVATE_KEY` - Service account key for lead capture Google Sheets integration
- `GOOGLE_SHEETS_CLIENT_EMAIL` - Service account email for Google Sheets API
- `GOOGLE_SHEETS_SPREADSHEET_ID` - Default spreadsheet ID for lead storage
- `[CLIENT]_WEBHOOK_URL` - (Optional) Webhook URL for per-client lead notifications (e.g. `DAVID_BACH_WEBHOOK_URL`)

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

**AUTO-TRIGGER RULE:** When the user provides a video script, transcript, or webinar recording content, automatically treat it as a client engagement. If no plan tier is specified, ask: "Which plan tier — Starter ($750), Growth ($1,000), or Scale ($1,500)?" Then ask the funnel type question below. Create the client folder structure and begin the delivery workflow. Do NOT wait for additional instructions — begin Step 1 immediately once tier and funnel type are confirmed.

### Client Onboarding Questions (Ask Before Step 1)

When onboarding a new client, ask these questions in order:

1. **Tier:** "Which plan tier — Starter ($750), Growth ($1,000), or Scale ($1,500)?"
2. **Funnel Type:** "Does this client run live webinars regularly, or are we promoting an existing replay?"
   - If **live webinars** → `funnelType: 'active-webinar'`
   - If **existing replay / evergreen** → `funnelType: 'replay-promotion'`
3. **Webhook:** "Do you have a webhook URL for this client's email platform (ConvertKit, Mailchimp, ActiveCampaign, etc.)? If yes, provide the URL. If no, leads will be stored in Google Sheets only."
   - If provided → set env var `[CLIENTSLUG]_WEBHOOK_URL` in `.env.local`
4. **Conversion URL (depends on funnel type):**
   - Active webinar: "What's the registration URL for the client's next live webinar?"
   - Replay promotion: "What's the URL where people watch the replay?"

These answers populate `src/lib/clients.ts` fields: `funnelType`, `postCaptureRedirect`, `conversionUrl`, `conversionLabel`, `webhookUrl`.

### Two Funnel Types

Every client falls into one of two funnel types. This determines the CTA in every content piece.

#### Type 1: Active Webinar (`funnelType: 'active-webinar'`)

**Flow:** Webinar → Content → Leads → Newsletter → Next Live Webinar → More Content → Flywheel

```
LinkedIn/Blog → Landing Page → Email Capture → Lead Magnet (scorecard)
                                     │
                                     ├──→ Google Sheet (our tracking)
                                     └──→ Webhook → Client's email platform
                                                         │
                                                         ▼
                                                    Newsletter
                                              "Register for next live training"
                                                         │
                                                         ▼
                                                   Next Webinar
                                                   (more source material)
```

**Content CTAs:**
- **Newsletter:** Primary CTA = "Register for [Next Webinar Title]" with webinar registration link
- **Email sequence:** Welcome emails → deliver lead magnet → build trust → invite to next live webinar
- **LinkedIn posts:** Drive to landing page (lead capture). Occasional posts promote the live webinar directly.
- **Blog post:** CTAs drive to landing page. If webinar is soon, add a banner: "Join us live on [date]"

#### Type 2: Replay Promotion (`funnelType: 'replay-promotion'`)

**Flow:** Content → Leads → Email Sequence → Watch Replay → Buy Course/Coaching/Consulting

```
LinkedIn/Blog → Landing Page → Email Capture → Lead Magnet (scorecard)
                                     │
                                     ├──→ Google Sheet (our tracking)
                                     └──→ Webhook → Client's email platform
                                                         │
                                                         ▼
                                                  Email Sequence
                                              "Watch the free masterclass"
                                                         │
                                                         ▼
                                                   Replay URL
                                              (sells course/coaching)
```

**Content CTAs:**
- **Newsletter:** Primary CTA = "[conversionLabel]" (e.g., "Watch the Free Masterclass") linking to replay URL
- **Email sequence:** Welcome emails → deliver lead magnet → build anticipation → drive to replay with urgency/scarcity framing
- **LinkedIn posts:** Drive to landing page (lead capture). Never link directly to the replay — capture the email first.
- **Blog post:** CTAs drive to landing page. End-of-article CTA can mention "free training" as extra incentive.

### Funnel-Type CTA Rules for Content Skills

**CRITICAL:** When invoking `/newsletter`, `/email-sequences`, `/content-atomizer`, or `/seo-content` for a client, ALWAYS check the client's `funnelType` in `src/lib/clients.ts` and adjust CTAs accordingly:

| Skill | Active Webinar CTA | Replay Promotion CTA |
|-------|-------------------|---------------------|
| `/newsletter` | "Register for [webinar title]" + registration URL | "[conversionLabel]" + replay URL |
| `/email-sequences` | Welcome → value → invite to live webinar | Welcome → value → drive to replay with urgency |
| `/content-atomizer` (LinkedIn) | "Comment [X] to get the free [lead magnet]" → landing page | Same — always capture email first |
| `/seo-content` (Blog) | Landing page CTAs + optional webinar banner | Landing page CTAs + "free training" mention |

If `conversionUrl` or `conversionLabel` is not set in the client config, ask the user before writing the content.

### Email Platform Integration (Per Client)

Every lead captured on a client's landing page or lead magnet goes directly into the client's email platform. No Zapier. No Make. No extra cost for the client.

#### What We Ask the Client (3 Questions)

1. **"Which email platform do you use?"** — Beehiiv, Mailchimp, ConvertKit (Kit), or ActiveCampaign
2. **"What's your API key?"** — We tell them exactly where to find it (see table below)
3. **"What list/audience/form should leads go to?"** — The ID for where new subscribers land

#### Where Clients Find Their Credentials

| Platform | API Key Location | List/Audience ID Location |
|----------|-----------------|--------------------------|
| **Beehiiv** | Settings > Integrations > API | Publication ID on the same page |
| **Mailchimp** | Account > Extras > API Keys | Audience > Settings > Audience name and defaults |
| **ConvertKit (Kit)** | Settings > Developer > API Key | Forms > select the form > URL contains the Form ID |
| **ActiveCampaign** | Settings > Developer > API URL + API Key | Lists > select list > URL contains the List ID |

#### Setup (3 env vars per client, no code changes)

Add to `.env.local`:

```bash
# Pattern: CLIENTSLUG_EMAIL_PLATFORM, CLIENTSLUG_EMAIL_API_KEY, CLIENTSLUG_EMAIL_LIST_ID
# Example for David Bach using Beehiiv:
DAVID_BACH_EMAIL_PLATFORM=beehiiv
DAVID_BACH_EMAIL_API_KEY=bh_xxxxxxxxxxxxxxxx
DAVID_BACH_EMAIL_LIST_ID=pub_xxxxxxxxxxxxxxxx

# Example for a Mailchimp client:
# JANE_DOE_EMAIL_PLATFORM=mailchimp
# JANE_DOE_EMAIL_API_KEY=xxxxxxxx-us21
# JANE_DOE_EMAIL_LIST_ID=abc123def4
```

The leads API reads these automatically. When a lead submits on `/clients/david-bach`:
1. Lead saved to Google Sheets (our tracking — always happens)
2. Reads `DAVID_BACH_EMAIL_PLATFORM` → picks the right adapter (Beehiiv, Mailchimp, etc.)
3. Reads `DAVID_BACH_EMAIL_API_KEY` + `DAVID_BACH_EMAIL_LIST_ID`
4. Calls the platform's API → lead appears in client's email list instantly

#### Supported Platforms

| Platform | API Endpoint | What Gets Sent |
|----------|-------------|----------------|
| **Beehiiv** | `POST /v2/publications/{pub_id}/subscriptions` | email, utm_source, referring_site |
| **Mailchimp** | `POST /3.0/lists/{list_id}/members` | email_address, status, merge_fields.FNAME |
| **ConvertKit** | `POST /v4/subscribers` | email_address, first_name |
| **ActiveCampaign** | `POST /api/3/contacts` + `POST /api/3/contactLists` | email, firstName, list |

#### Beehiiv Setup — Step-by-Step (Tested & Verified Feb 2026)

**What to tell the client:**

> "I need two things from your Beehiiv account to connect your landing page leads directly to your subscriber list. Takes 5 minutes."

**Step 1: Get the Publication ID**
1. Client goes to **app.beehiiv.com** → **Settings** (bottom left) → **API**
2. Scroll to **Publication ID** section
3. Copy the **API V2** Publication ID (starts with `pub_`)
4. This is the `CLIENTSLUG_EMAIL_LIST_ID` value

**Step 2: Get the API Key**
1. On the same page (Settings → API), look at the **API Keys** section
2. If first time: client must click **"Start Stripe Identity Verification"** — takes ~5 minutes
3. Once verified, they can generate an API key
4. Copy the full API key string
5. This is the `CLIENTSLUG_EMAIL_API_KEY` value

**Step 3: Disable Double Opt-In (IMPORTANT)**
1. Client goes to **Settings** → **Emails**
2. Scroll to **Preset Emails** section
3. Find **"Double Opt in Email"** toggle
4. Make sure it is **OFF** (gray, not orange/red)
5. If this is ON, subscribers added via API will be stuck in "validating" status and won't appear in the subscriber list

**Why:** The landing page form IS the opt-in. Requiring a second email confirmation adds friction and loses leads. The client can re-enable it later if they want, but for API-sourced leads from our landing pages, it should be off.

**Step 4: Add env vars and deploy**
```bash
# In .env.local (and production env vars):
CHRIS_KOERNER_EMAIL_PLATFORM=beehiiv
CHRIS_KOERNER_EMAIL_API_KEY=the-api-key-from-step-2
CHRIS_KOERNER_EMAIL_LIST_ID=pub_xxxxx-from-step-1
```

**Step 5: Test**
1. Restart the dev server (`npm run dev`) to pick up new env vars
2. Go to the client's landing page and submit with a **real email address** that is NOT already in their subscriber list
3. Check client's Beehiiv → Audience → Subscribers
4. The new subscriber should appear as **Active** with acquisition source **"api: contentrepurposehub / hero"**

**Gotchas we discovered:**
- **Fake emails get rejected** — Beehiiv validates email addresses. Test with real emails only.
- **Already-subscribed emails silently succeed** — No error, no duplicate. Just returns success.
- **Double opt-in must be OFF** — Otherwise subscribers appear in the API but not in the dashboard (stuck in "validating" → "invalid").
- **Beehiiv free plan works** — No paid plan required for API access, just Stripe identity verification.

#### Fallback: Generic Webhook

If a client uses a platform we don't have an adapter for, fall back to the generic webhook:

```bash
CLIENTSLUG_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/xxxxx/xxxxx/
```

The leads API fires a POST with `{ name, email, client, source }` to this URL. The client would need Zapier/Make to catch it and route to their platform. Use this only when no direct adapter exists.

#### Adding a New Platform Adapter

Platform adapters live in `src/app/api/leads/route.ts`. Each adapter is a function that takes `{ name, email, apiKey, listId }` and calls the platform's API. To add a new platform:

1. Add the adapter function (follow the pattern of existing ones)
2. Add it to the `platformAdapters` map
3. Document the credential locations in this section

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

### Scorecard / Lead Magnet Conversion CTA

The scorecard results page includes an optional conversion CTA that appears when `conversionUrl` and `conversionLabel` are set in the client config. This drives the lead to the next step in the funnel:

- **Replay-promotion clients:** "Watch [Client Name]'s Full Training" → replay URL
- **Active-webinar clients:** "Register for the Next Live Training" → webinar registration URL
- **If neither is set:** CTA block doesn't render. The existing default CTA (book link, community link, etc.) still shows.

The scorecard `page.tsx` (server component) reads from `src/lib/clients.ts` and passes `conversionUrl` + `conversionLabel` as props to `ScorecardClient` (client component).

### Landing Page → LeadCaptureForm Wiring

The landing page `page.tsx` reads `postCaptureRedirect` from the client config and passes it as `redirectUrl` to `LeadCaptureForm`. This means:

- Changing `postCaptureRedirect` in `src/lib/clients.ts` changes where leads go after email capture
- Internal paths (e.g., `/clients/david-bach/scorecard`) use `router.push`
- External URLs (e.g., `https://replay-url.com`) use `window.location.href`
- Default: scorecard page for the client

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

### Landing Page Template (Starter Tier Standard)

This is the standard landing page template for every Starter plan client. Follow this exactly.

**Key principle:** SHORT, focused lead capture page. One goal: get the email. Even at Starter tier, scrape the client's social profiles for a headshot photo + credentials/media appearances to make the page feel authentic and recognizable.

**Color scheme:** Navy (#1e3a5f) + white. Clean professional template. No client brand matching at Starter tier.

#### Photo Sourcing Procedure (Required — Never Ship a Landing Page Without a Photo)

Try these sources in order until you get a clean headshot:

1. **Primary: `unavatar.io/x/[twitter-handle]`** — Downloads the client's X/Twitter profile photo as a clean JPEG (400x400). This works for most clients and is the fastest method.
   ```bash
   curl -sL -o public/[client-slug]-headshot.jpg "https://unavatar.io/x/[twitter-handle]"
   ```
2. **Fallback: Client's website** — Check their about page, podcast page, or homepage for `<img>` tags with headshots.
3. **Fallback: Podcast platforms** — Check Spotify, Apple Podcasts, Buzzsprout for podcast cover art (often has their face).
4. **Fallback: `unavatar.io/[email]`** — If you have their email, this checks Gravatar and other avatar services.
5. **Last resort: Ask the client** — "Can you send me a headshot for your landing page? Professional or casual works."

**Save to:** `public/[client-slug]-headshot.jpg` — Use Next.js `Image` component with `src="/[client-slug]-headshot.jpg"`.

#### Credential & Social Proof Scraping (Required)

Before building the landing page, scrape the client's website and social profiles to extract:
- **Key stats:** businesses started, revenue figures, followers, books sold, years of experience
- **Media appearances:** podcasts featured on, publications, TV shows
- **Social proof numbers:** community members, students, clients served, newsletter subscribers
- **Specific deal/result numbers:** "$800K business for $50K down", "$63K to $4.3M/mo revenue"

These populate the Social Proof section (3 key stats) and the credibility bar.

#### Client Social Links (Required on All Tiers)

Every landing page includes the client's social links. Place them in the **Social Proof / "Who Made This?" section**, below the bio paragraph and above the stats. Display as a row of icon links (X/Twitter, LinkedIn, YouTube, Instagram, podcast, website — whichever the client has). Style: muted gray icons, small, non-distracting. Purpose: adds credibility and lets visitors verify the client is real.

```tsx
{/* Social Links */}
<div className="flex items-center justify-center gap-4 mb-8">
  {socialLinks.map(link => (
    <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer"
       className="text-gray-400 hover:text-[#1e3a5f] transition-colors">
      {/* Icon for each platform */}
    </a>
  ))}
</div>
```

The client provides social links during onboarding. Store them in `clients.ts` as `socialLinks: { platform: string, url: string }[]`.

#### Section-by-Section Blueprint:

**1. Hero (two-column grid layout)**
- **Left column (copy + form):**
  - Author identity badge: circular headshot (from photo sourcing above, 48x48 via `Image` component) + client name + one-liner credential (e.g., "75+ Businesses Started / 10 at 7-8 Figures")
  - Headline: Promise the lead magnet value (e.g., "How Automatic Is Your Financial Life?")
  - Subtext with signature stat hook: Pull the client's most compelling specific number from the source material (e.g., "$27.40 a day can make you a millionaire")
  - Lead capture form: Name field + Email field + CTA button (e.g., "Get My Free Score")
  - Privacy note below form (small text)
- **Right column (visual):**
  - Client photo (from photo sourcing above, large via `Image` component with `priority` flag, `rounded-2xl object-cover shadow-lg`)
  - Hidden on mobile (`hidden md:block`)

**2. What the [Lead Magnet] Reveals**
- Section heading: "What the [Lead Magnet Name] Reveals"
- 4 items in a 2x2 grid, each with:
  - Icon or emoji
  - Short title (bold)
  - One-line description
- Use specific themes from the source material, not generic bullet points

**3. Signature Quote**
- Full-width navy (#1e3a5f) background banner
- Italic quote from the source material (the most memorable/shareable line)
- Attribution: "— [Client Name]"

**4. Social Proof / "Who Made This?"**
- Section heading: "Who Made This?"
- Short first-person bio paragraph (2-3 sentences, in client's voice, with specific numbers)
- **Client social links row** (X, LinkedIn, YouTube, podcast, website — icons, muted gray)
- 3 key stats in a row (e.g., "75+ Businesses Started", "10 at 7-8+ Figures", "153K+ Followers")
- Credibility bar below: specific deal numbers or media mentions in muted gray text

**5. How It Works**
- 3 numbered steps:
  1. Enter your name and email
  2. Take the free [assessment/scorecard/quiz]
  3. Get your personalized results + action plan
- Keep it simple. Remove friction.

**6. FAQ**
- 3 questions minimum:
  - How long does it take?
  - Is it really free?
  - What happens after I submit my email?
- Q&A format, collapsible or inline

**7. Footer CTA**
- Repeat the headline
- Repeat the lead capture form (same LeadCaptureForm component, different `source` prop for tracking)

#### Technical Implementation:

- **Server component** for the page (`page.tsx`) — exports `metadata` and JSON-LD structured data
- **Client component** for the form (`LeadCaptureForm.tsx`) — `'use client'` with `useState`, `useRouter`
- Props: `source` (tracking), `redirectUrl` (where to go after capture — defaults to scorecard, can be external replay URL)
- Form submits to `POST /api/leads` with `{ name, email, client: '[client-slug]', source: 'hero' | 'footer' }`
- On success: redirect to `redirectUrl` (internal paths use `router.push`, external URLs use `window.location.href`)
- Add `suppressHydrationWarning` on `<form>` and `<input>` elements (prevents browser extension hydration errors)
- Use Next.js `Image` component for client photos

#### For Growth/Scale Tier:
- Colors, fonts, layout matched to client's actual website via `design-brief.md`
- Photo and branding assets pulled from brand intelligence crawl, not just basic scraping

### Google Sheet Delivery Workflow

Every client gets a Google Sheet with all copy deliverables. The sheet includes a **"Your Content Playbook"** tab as the first thing they see — a strategic guide explaining what each piece of content does and how to use it. This is NOT a user manual. It's framed as a strategist briefing the client on their plan.

#### Per-Client Setup (~2 minutes)

1. Create a blank Google Sheet named: `[Client Name] — Content Deliverables`
2. Share it with `leads-capture@contentrepurposehub-leads.iam.gserviceaccount.com` as **Editor**
3. Run:
   ```bash
   npx tsx scripts/create-client-deliverables.ts SPREADSHEET_ID \
     --client [client-name] \
     --tier starter|growth|scale \
     --source "Description of source content"
   ```

#### Google Sheet Tab Structure

| Tab | Starter | Growth | Scale |
|-----|---------|--------|-------|
| Your Content Playbook | Always first. Strategy guide + how-to-use. Adapts per tier. | Same | Same |
| LinkedIn Posts | 10 posts | 20 posts | 40 posts |
| Newsletter | 1 edition | 2 editions | 4 editions |
| Twitter/X Threads | — | 2 threads | 4 threads |
| Email Sequence | — | 3-email welcome | 7-email nurture |
| Instagram Captions | — | — | 8 captions |
| YouTube Short Scripts | — | — | 4 scripts |
| Content Calendar | — | — | 30-day schedule |
| Posting Schedule | Always last. Mon/Wed/Fri calendar with dates. | Same | Same |

#### Playbook Tab Design Principles (from Sales Council)

- **Frame as strategy, not manual.** Title: "Your Content Playbook" (not "How to Use This Sheet").
- **Sections:** What's Inside → Your Content Mix (4 post types explained) → How to Use (per-platform steps) → Pro Tips → Questions
- **Tone:** Confident strategist briefing the client. Not customer support.
- **Formatting:** Navy headers, Google Sans font, hidden gridlines, merged cells for headers, spacer rows for breathing room.
- **60-second scan rule:** Client should understand everything in under a minute.
- **Don't resell.** They already bought. Frame as strategy, not deliverables.
- **Don't undermine authority.** Don't lead with "feel free to edit." Instead, end with "written in your voice and ready as-is."

#### Deliverable Markdown Formats (Required for Google Sheet Parser)

The `create-client-deliverables.ts` script parses markdown files to populate the Google Sheet. **All deliverables MUST follow these formats** or the content won't appear in the sheet.

**Newsletter (`03-newsletter.md`):**
```markdown
# Newsletter Edition: [Title]

**Subject Line:** [subject]
**Preview Text:** [preview]
**From:** [name]

---

## Email Body

[Full newsletter content here — this is what gets extracted into the Google Sheet]
```
The `## Email Body` header is the parser's primary marker. If missing, the parser falls back to extracting everything after the metadata block's first `---`, but always include `## Email Body` to be safe. Also always include the `**From:**` field.

**LinkedIn Posts (`05-linkedin-posts.md`):**
```markdown
## Post 1: TYPE — Title

**Hook:** [first line]

[body content]

**CTA:** [call to action]

**Hashtags:** #tag1 #tag2

---
```
Parser expects `## Post N: TYPE — Title` headers. TYPE must be one of: `THOUGHT LEADERSHIP`, `STORY-BASED`, `FRAMEWORK/HOW-TO`, `CONTRARIAN`. The `—` (em-dash) separates type from title.

#### Technical Notes

- Script: `scripts/create-client-deliverables.ts` — handles all tiers, includes Playbook
- Service account can't create new Google Sheets (free tier storage quota). User creates the sheet manually and shares with SA.
- Auth: JWT with `GOOGLE_SHEETS_PRIVATE_KEY` + `GOOGLE_SHEETS_CLIENT_EMAIL`
- Only needs `spreadsheets` scope (no Drive scope)
- Running on an existing sheet with content will wipe and recreate all tabs

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

## Monthly Recurring Model (Retainer Delivery)

The delivery model is a monthly retainer, NOT a one-time engagement. Month 1 builds the foundation. Month 2+ skips the foundation and runs content production only.

**Source material accepted:** Webinars + podcasts (any long-form audio/video where the client is speaking and teaching).

### Month 1: Full Onboarding

Run the complete James Dickerson methodology (Steps 0-16 depending on tier). This is the existing 10-step workflow documented above, plus:

- **Step 1.5 (NEW): Content Series Planning** — After brief extraction, before blog post. Map 6-12 month topic arc using `/keyword-research` + `/positioning-angles` + `/sales-council`. Output: `clients/[name]/content-series-arc.md`
- All live pages built (landing page, blog post, lead magnet)
- Google Sheet created with all deliverables + Playbook tab
- Weekly delivery cadence (something ships every week, never a single dump)

### Month 2+: Streamlined Recurring

Client provides next webinar or podcast. We run:

1. **Brief extraction ONLY** (Step 1) for new source → `clients/[name]/brief-month-N.md`
2. **Blog post** (next chapter in content series) — uses existing brand voice + positioning. Callbacks to previous posts, open loop to next. → Live page via `blog/[slug]/page.tsx`
3. **Newsletter** — teases new blog post → APPEND to Google Sheet (not wipe/recreate)
4. **LinkedIn posts** — reference blog series → APPEND to Google Sheet
5. **Updated posting schedule** → Google Sheet update
6. **AI Ranking Report** (Week 4) → `hive_rankings` + `hive_domain` check
7. **Leads summary** (Week 4) → Google Sheets API read
8. **Next month planning** → identify next recording to process

**What we SKIP in Month 2+:** Brand voice (step 2), positioning angles (step 3), landing page build, lead magnet build, Playbook tab.

### Weekly Delivery Calendar (Month 2+ Starter)

| Week | Deliverable | Client Message |
|------|------------|----------------|
| Week 1 | New blog post (live) + first 3 LinkedIn posts | "New blog live targeting [keyword]. First 3 posts ready." |
| Week 2 | Newsletter + LinkedIn posts 4-7 | "Newsletter ready to send. 4 more posts in the sheet." |
| Week 3 | LinkedIn posts 8-10 + updated posting schedule | "Final posts + your schedule through next month." |
| Week 4 | AI Ranking Report + leads summary + next month brief | "Ranking report attached. X leads this month. Processing next." |

### Google Sheet Append Mode (Month 2+)

```bash
npx tsx scripts/create-client-deliverables.ts SPREADSHEET_ID \
  --client [name] --tier starter --mode append --month 2 \
  --source "Episode title"
```

This APPENDS content to existing tabs (continues post numbering, adds month separator rows, extends posting schedule). Does NOT wipe/recreate.

### Monthly Report Generation

```bash
npx tsx scripts/generate-monthly-report.ts --client [name] --month 2
```

Generates a report at `clients/[name]/report-month-N-[name].md` with content inventory, blog performance, AI ranking placeholders (fill via hive-rank), lead count, and next month recommendations.

### Adding a New Blog Post (Month 2+)

**Step-by-step workflow for publishing the next post in a client's content series:**

1. **Write the blog post** using `/seo-content` skill. Save as `clients/[name]/deliverables/0N-blog-post-month-N.md`. Use the existing `brief.md`, `brand-voice.md`, and `positioning-angles.md` from Month 1 — do NOT re-extract these.

2. **Add the post to `src/lib/clients.ts`** in the client's `series.posts[]` array. Increment `seriesOrder`. Example:
   ```ts
   {
     slug: 'how-to-finance-a-business-acquisition',
     title: 'How to Finance a Business Acquisition: 7 Creative Structures',
     date: '2026-03-12',
     keyword: 'how to finance a business acquisition',
     seriesOrder: 2,
   },
   ```

3. **Build the blog content into the `[slug]/page.tsx` template.** The dynamic route at `src/app/(clients)/clients/[name]/blog/[slug]/page.tsx` exists but needs actual content for each new post. Manually build the JSX content following the same pattern as the first blog post (`blog/page.tsx`). Include:
   - Series badge via `SeriesNav` (top position)
   - Callback paragraph referencing previous post(s)
   - 2-3 internal links to earlier posts + landing page CTA
   - Open loop / cliffhanger at the end teasing the next topic
   - Series navigation via `SeriesNav` (bottom position)

   > **Future optimization:** Build an MDX loader to auto-render from the markdown deliverable, eliminating manual TSX. For now, manual TSX is the proven approach.

4. **Sitemap auto-updates** — `src/app/sitemap.ts` dynamically reads from `clients.ts`. Posts with `seriesOrder > 1` get their own `/blog/[slug]` URL. No manual sitemap edits needed.

5. **SeriesNav auto-updates** — `getSeriesNavigation()` in `clients.ts` calculates prev/next from the posts array. Post 1 will now show a "Next" link. The new post shows the series badge and "Previous" link. No component changes needed.

6. **Append new content to Google Sheet** — Run with `--mode append` to add the new post's LinkedIn posts, newsletter, and updated posting schedule without wiping existing content:
   ```bash
   npx tsx scripts/create-client-deliverables.ts SPREADSHEET_ID \
     --client [name] --tier starter --mode append --month N \
     --source "Episode/webinar title"
   ```

7. **Deploy** — Push to main. Vercel auto-deploys. Verify the new post at `/clients/[name]/blog/[slug]` and check that series navigation works on all posts.

### Blog Serialization

Every client gets a content series arc planned in Month 1. Each monthly blog post is the next chapter in the series. Posts include:

- **Series badge** at top: "Part N of [Series Name]"
- **Callback paragraph** early in the post: "In [Post 2], we talked about X..."
- **Internal links** throughout: 2-3 links to previous posts + landing page CTA
- **Open loop / cliffhanger** at end: "This handles [problem]. Next: [next problem]."
- **Series navigation** at bottom: Previous / Next links + "Start from the beginning"
- **Newsletter teaser**: "Get the next post in your inbox when it drops"

### Client Config Registry

All client metadata lives in `src/lib/clients.ts`. When onboarding a new client:

1. Add entry to the `clients` record with slug, name, tier, start date, series info, blog posts
2. Create the client folder: `clients/[name]/` with brief.md, brand-voice.md, positioning-angles.md
3. Create the app folder: `src/app/(clients)/clients/[name]/` with page.tsx, LeadCaptureForm.tsx, blog/page.tsx, scorecard/
4. The sitemap, series navigation, and monthly report auto-read from the registry

### Back Catalog Strategy

When a client has recorded webinars/podcasts sitting unused:
- Process one per month (Starter), two (Growth), or four (Scale)
- Recommended order: commercially relevant first, then data-rich, then story-rich
- When source material runs out: mine deeper angles from existing briefs, refresh existing posts, create new lead magnets, process adjacent recordings (conference talks, guest appearances)

### Pricing

| Tier | Monthly | 6-Month Commitment (20% off) |
|------|---------|------------------------------|
| Starter | $750/mo | $600/mo |
| Growth | $1,000/mo | $800/mo |
| Scale | $1,500/mo | $1,200/mo |

**Back Catalog Sprint (add-on):** $500 (3 recordings) or $750 (5 recordings). Month 1 only.

---

## Starter Tier: Complete End-to-End Playbook

**This is the battle-tested, proven workflow. Follow it exactly for every new Starter client.**

### What the User Provides

1. **Transcript** — from a YouTube video, podcast episode, or webinar recording (any long-form content where the client is speaking and teaching)
2. **Client's social links** — X/Twitter handle, LinkedIn, website, podcast URL, YouTube, Instagram (whatever they have)
3. **Answers to onboarding questions** (Claude asks these automatically):
   - Tier confirmation (Starter $750)
   - Funnel type: live webinars or replay promotion?
   - Webhook URL for email platform (or "Google Sheets only")
   - Conversion URL (webinar registration or replay link)

### What Gets Delivered (Checklist)

| # | Deliverable | Output Location | Skill Used |
|---|------------|----------------|------------|
| 1 | Brief extraction | `clients/[name]/brief.md` | Manual analysis |
| 2 | Brand voice profile | `clients/[name]/brand-voice.md` | `/brand-voice` |
| 3 | Positioning angles | `clients/[name]/positioning-angles.md` | `/positioning-angles` |
| 4 | Lead magnet content | `clients/[name]/deliverables/01-lead-magnet.md` | `/lead-magnet` |
| 5 | Blog post content | `clients/[name]/deliverables/02-blog-post.md` | `/seo-content` |
| 6 | Newsletter | `clients/[name]/deliverables/03-newsletter.md` | `/newsletter` |
| 7 | Landing page copy | `clients/[name]/deliverables/04-landing-page-copy.md` | `/direct-response-copy` |
| 8 | LinkedIn posts (10) | `clients/[name]/deliverables/05-linkedin-posts.md` | `/content-atomizer` |
| 9 | Live landing page | `/clients/[name]` | Code implementation |
| 10 | Live blog post | `/clients/[name]/blog` | Code implementation |
| 11 | Live scorecard | `/clients/[name]/scorecard` | Code implementation |
| 12 | Google Sheet | External (4 tabs: Playbook, LinkedIn, Newsletter, Schedule) | `create-client-deliverables.ts` |
| 13 | Client config | `src/lib/clients.ts` entry | Manual |
| 14 | Sitemap | Auto-generates from clients.ts | Automatic |
| 15 | SEO indexing | Google Search Console submission | Manual |

### Step-by-Step Execution Order

**Phase 1: Research (Steps 1-3) — Do NOT skip. Do NOT create content without completing research first.**

1. Read the entire transcript. Extract every key theme, framework, story, anecdote, data point, quote, pain point, transformation → `brief.md`
2. Analyze how the client speaks. Capture vocabulary, tone, rhythm, sentence patterns → `brand-voice.md` (use `/brand-voice` Extract mode)
3. Find 3-5 positioning angles from the source material → `positioning-angles.md` (use `/positioning-angles`)

**Phase 2: Scrape Client's Online Presence (do this in parallel with Phase 1)**

4. **Download headshot** using unavatar.io:
   ```bash
   curl -sL -o public/[client-slug]-headshot.jpg "https://unavatar.io/x/[twitter-handle]"
   ```
   Verify it's a valid JPEG with `file public/[client-slug]-headshot.jpg`. If it fails, try fallbacks (see Photo Sourcing Procedure above).

5. **Scrape credentials** from client's website, about page, LinkedIn, X bio:
   - Key stats (businesses, revenue, followers, years of experience)
   - Media appearances and notable achievements
   - Specific numbers for social proof section
   - Social media URLs for the social links row

**Phase 3: Content Creation (Steps 6-10)**

6. Create lead magnet → `01-lead-magnet.md` (use `/lead-magnet`)
7. Write blog post → `02-blog-post.md` (use `/seo-content`)
8. Write newsletter → `03-newsletter.md` (use `/newsletter`)
9. Write landing page copy → `04-landing-page-copy.md` (use `/direct-response-copy`)
10. Write 10 LinkedIn posts → `05-linkedin-posts.md` (use `/content-atomizer`)

**Phase 4: Build Live Pages (Steps 11-13)**

11. Add client to `src/lib/clients.ts` (slug, name, tier, series, funnel type, etc.)
12. Create app folder structure:
    ```
    src/app/(clients)/clients/[name]/
      page.tsx              — Landing page (use template, add headshot + credentials + social links)
      LeadCaptureForm.tsx   — Client component (copy from existing pattern)
      layout.tsx            — Layout wrapper
      blog/
        page.tsx            — First blog post with SeriesNav
        [slug]/
          page.tsx          — Dynamic route for future posts
      scorecard/
        page.tsx            — Server component for lead magnet
        ScorecardClient.tsx — Client component for interactive scorecard
    ```
13. Set up email platform integration (env vars in `.env.local`):
    ```bash
    [CLIENTSLUG]_EMAIL_PLATFORM=beehiiv|mailchimp|convertkit|activecampaign
    [CLIENTSLUG]_EMAIL_API_KEY=...
    [CLIENTSLUG]_EMAIL_LIST_ID=...
    ```

**Phase 5: Google Sheet (Step 14)**

14. User creates a blank Google Sheet, shares with `leads-capture@contentrepurposehub-leads.iam.gserviceaccount.com` as Editor, provides the spreadsheet ID. Then run:
    ```bash
    npx tsx scripts/create-client-deliverables.ts SPREADSHEET_ID \
      --client [client-name] --tier starter \
      --source "Description of source content"
    ```
    This creates 4 tabs: Your Content Playbook, LinkedIn Posts, Newsletter, Posting Schedule.

**Phase 6: Deploy & Index (Step 15)**

15. Build, push, deploy:
    ```bash
    npm run build  # Verify no errors
    git add -A && git commit -m "Add [client-name] Starter tier delivery"
    git push       # Vercel auto-deploys
    ```
16. After deploy, verify:
    - Landing page loads with headshot, credentials, social links, working form
    - Blog post loads with SeriesNav
    - Scorecard works end-to-end (form → email capture → scorecard)
    - Sitemap includes all new client URLs (`/sitemap.xml`)
17. Google Search Console:
    - Resubmit sitemap (`https://contentrepurposehub.com/sitemap.xml`)
    - Request indexing for client's 3 pages via URL Inspection
    - Verify domain redirects: non-www must be primary, all redirects 308 permanent

### Domain & SEO Requirements (Verified & Fixed)

These are non-negotiable for every deployment:

- **Primary domain:** `contentrepurposehub.com` (non-www) — serves 200 directly
- **www redirect:** `www.contentrepurposehub.com` → 308 permanent → `contentrepurposehub.com`
- **HTTP redirect:** `http://` → 308 permanent → `https://`
- **Sitemap:** Auto-generated from `clients.ts` at `/sitemap.xml` — includes all agency blog posts + all client pages
- **robots.txt:** Allows all crawlers (Google, Bing, GPTBot, Claude, Perplexity, etc.)
- **After every deploy:** Resubmit sitemap in Google Search Console if new pages were added
- **Daily limit:** ~10-12 URL inspection/indexing requests per day in Search Console

### Lessons Learned (From Test Client Deliveries)

These issues were discovered and fixed during the Chris Koerner and David Bach test deliveries. They are now handled by the standard workflow above, but documented here so they don't resurface:

1. **www vs non-www redirect mismatch** — Vercel had `www` as primary domain, sitemap used non-www. Google got confused, only indexed 1 of 30+ pages. Fix: non-www must be primary in Vercel Domains settings, www redirects to non-www with 308.
2. **307 vs 308 redirects** — Vercel defaulted to 307 (temporary) for domain redirect. Google treats 307 as "might change" and hesitates to index. Fix: always use 308 (permanent) for domain redirects.
3. **Landing page without photo** — Initial build used "CK" initials instead of a real headshot. Looked unprofessional. Fix: always scrape a photo before building the page. `unavatar.io/x/[handle]` works for most clients.
4. **Google Search Console sitemap showing only 5 pages** — Caused by the redirect issue above. Google gave up crawling after hitting 4xx/307 errors. Fix: fix redirects first, then resubmit sitemap.
5. **Beehiiv double opt-in** — If the client uses Beehiiv and has double opt-in enabled, API-added subscribers get stuck in "validating" status. Fix: client must disable double opt-in in Beehiiv settings before we connect.
6. **Browser hydration warnings** — Browser extensions inject attributes that cause React hydration mismatches. Fix: add `suppressHydrationWarning` on `<form>` and `<input>` elements.
7. **Hardcoded sitemap** — Original sitemap had all URLs manually listed. Adding a new client required editing the sitemap file. Fix: sitemap now dynamically reads from `clients.ts` — new clients auto-appear.

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
