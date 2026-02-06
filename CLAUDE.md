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
