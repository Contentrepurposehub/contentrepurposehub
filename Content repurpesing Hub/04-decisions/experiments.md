# Experiments Log

> What we tried, what happened, what we learned
> Last updated: 2026-03-02

## Format

```
## [Name]
**Date:** YYYY-MM-DD
**What we tried:** ...
**Result:** Won / Lost / Inconclusive
**What we learned:** ...
**Follow-up:** ...
```

---

## Blog Visual Elements (Infographics)

**Date:** 2026-02-18
**What we tried:** Added styled infographic elements (no images, pure CSS/JSX) to top 5 blog posts
**Result:** Pending — too early for data
**What we tried adding:**
- Hero cards (e.g., "1 Webinar = 14+ Pieces")
- Time comparison cards
- 6-step process flows
- Comparison scorecards
- Budget decision matrices
**Hypothesis:** Visual elements increase time-on-page and reduce bounce rate vs. pure text
**What we learned:** Will check GA4 data after 30 days
**Follow-up:** Add to remaining 20 blog posts if GA4 shows improvement

---

## Dynamic OG Images

**Date:** 2026-02-18
**What we tried:** Dynamic per-blog OG images via /api/og route using @vercel/og
**Result:** Implemented — pending social share testing
**Why:** Static OG was missing (public/og-image.png referenced but didn't exist). Social shares had no preview.
**Follow-up:** Test by sharing a blog URL on LinkedIn — verify image appears

---

## Hive-Rank AI Rankings Tracking

**Date:** 2026-02-09
**What we tried:** Installed Hive-Rank MCP, track AI search rankings per session
**Result:** Zero data as of 2026-02-11 (too early)
**What we learned:** AI search indexing takes longer than Google for new domains. Expected first signals ~Feb 23-25, 2026.
**Follow-up:** Run `hive_domain contentrepurposehub.com` at session start to check for first rankings

---

## Blog Category System

**Date:** 2026-02-18
**What we tried:** Rewrote blog index with 5 categories, sticky nav, color-coded badges, "New" labels
**Categories:** Getting Started / How-To Guides / Strategy & ROI / Comparisons & Reviews / AI Search
**Result:** Pending — checking if category organization improves navigation metrics
**Follow-up:** GA4 → check blog index exit rate vs. before

---

## Test Clients as System Validation

**Date:** Jan-Feb 2026
**What we tried:** Built 3 fictional test clients (David Bach, Yoshua Bengio, YB v2) to validate the entire delivery pipeline
**Result:** System works — email flywheel, Google Sheets, lead capture, landing pages all tested
**What we learned:** The full pipeline works. Tests confirmed all critical paths before first real client.
**Follow-up:** Deleted all test data 2026-02-18. Ready for first real client.
