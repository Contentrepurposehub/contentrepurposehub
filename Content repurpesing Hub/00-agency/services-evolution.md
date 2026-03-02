# Services Evolution

> Last updated: 2026-03-02

## Current State (March 2026)

Three-tier monthly retainer service. All built and ready for first paying client.

**Infrastructure built:**
- Client delivery system (CLAUDE.md workflow, all steps documented)
- Email platform adapters (Beehiiv, Mailchimp, ConvertKit, ActiveCampaign)
- Landing page template (15-section spec, VideoBackground, AnimatedCard, AnimatedCounter)
- Google Sheet delivery workflow (all tabs, clickable Playbook links)
- 25 SEO blog posts live on contentrepurposehub.com
- Lead capture API (Google Sheets + email platform sync)
- Month 2+ workflow documented

## Planned Additions

### Client Vault Deliverable (Shelved for Later)

Each client gets an Obsidian vault alongside the Google Sheet. Grows every month.

**Structure per client:**
- Webinars/ (one folder per session)
- Concepts/ (named frameworks, linked across sessions)
- Audience/ (pain points, language, questions)
- Content-Library/ (published pieces + live page links)
- Brand/ (voice patterns, positioning, stories)

**Sales angle:** "After 12 months you have a searchable archive of everything you've taught, with every piece of content linked back to its source."

**Possible tiers:**
- Scale tier ($1,500): included
- Add-on (any tier): $200/month
- Back Catalog Sprint: +$150 for all past sessions

Needs: /sales-council or /startup-strategy-council validation before finalizing pricing.

### Remotion Video Deliverables (Pending Installation)

Researched Feb 2026. Not yet installed.

**Planned use cases:**
- Audiogram clips (waveform + animated captions)
- Animated quote cards for social
- Data visualization videos (client stats/frameworks)
- Batch social clips from transcripts

**Install steps when ready:**
1. `npm i remotion @remotion/cli @remotion/player`
2. `npx skills add remotion-dev/skills`
3. Create `remotion/` folder with Root.tsx, Composition.tsx, index.ts

See: /Users/galman/contentrepurposehub/research-remotion-framework-feb-2026.md

## What Changed When

| Date | Change | Reason |
|------|--------|--------|
| 2026-02-18 | Deleted test client data | Tests complete, not real clients |
| 2026-02-18 | Removed Botsonic chatbot | Cost reduction |
| 2026-02-13 | Zero external CTAs rule | Traffic leak prevention |
| 2026-02-12 | Remotion researched | Future video deliverables |
| 2026-02-09 | 25 blog posts published | SEO foundation |
