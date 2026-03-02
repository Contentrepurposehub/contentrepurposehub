# Reversals

> Decisions we undid and why
> Last updated: 2026-03-02

## All Blog Posts Published Same Date

**Original decision:** Publish all 21 blog posts on 2026-02-09
**Reversed:** 2026-02-18 — spread dates across Feb 9-18 (2-3 posts/day)
**Why reversed:** Publishing 21 posts on one day signals mass-generation to Google. Date staggering looks more natural.
**Lesson:** Simulate a real publishing cadence even when batch-generating.

---

## LLM Meta Tags in Body

**Original:** `ai-content-type`, `service-type` meta tags rendered in JSX body
**Reversed:** 2026-02-18 — moved to `<head>` via Next.js metadata `other` property
**Why reversed:** Crawlers expect meta tags in `<head>`. Body placement means they were never read.

---

## All Authors = Organization

**Original:** All 25 blog posts had `Organization` as author in schema markup
**Reversed:** 2026-02-18 — changed to `Person` (Marius Galatan) with link to /about
**Why reversed:** E-E-A-T requires a real person author. Organization-authored content gets less trust from Google and AI.
**Lesson:** Always have a real person as the author schema. Publisher = Organization is fine. Author must be Person.

---

## Botsonic Chat Widget

**Original:** Botsonic chat widget installed in root layout
**Reversed:** 2026-02-18 — removed to reduce costs
**Why reversed:** No paying clients to use it with yet. Cost vs. benefit was wrong.
**Bring back:** When first client is onboarded or when budget allows.
