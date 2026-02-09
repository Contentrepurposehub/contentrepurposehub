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

- `src/app/page.tsx` - Single-page marketing site with all sections (hero, pricing, FAQ, etc.) and JSON-LD structured data for SEO/AI search optimization
- `src/app/layout.tsx` - Root layout with comprehensive metadata (OpenGraph, Twitter cards, robots), custom AI discovery meta tags, and Botsonic chat widget integration
- `src/app/api/chat/route.ts` - Simple Claude API endpoint (uses `@anthropic-ai/sdk`) that accepts POST with `{ message: string }` and returns `{ reply: string }`
- `src/app/sitemap.ts` - Dynamic sitemap generator for SEO
- `src/app/globals.css` - Tailwind imports and custom CSS variables/utility classes (`.gradient-text`, `.gradient-bg`, `.card-shadow`)

### Path Aliases

`@/*` maps to `./src/*` (configured in tsconfig.json)

### Environment Variables

- `ANTHROPIC_API_KEY` - Required for the chat API endpoint (add to `.env.local`)

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
