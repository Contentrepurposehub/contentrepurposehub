# Client Vault Deliverable — Build Guide

> How to build the client knowledge vault alongside the Google Sheet delivery
> Last updated: 2026-03-02

## What This Is

A zipped Obsidian vault folder delivered alongside the Google Sheet. Every month adds to it. After 12 months the client has a searchable archive of everything they've taught.

**Key principle:** One note per concept, not one note per webinar. Webinar notes link to concept notes. After 12 webinars, a concept note shows every session it appeared in, every quote, every piece of content — impossible in a Google Sheet.

## Sales Angle

"Every month you get content. And every month your organization's knowledge base grows. After 12 months you have a searchable archive of everything you've taught, with every piece of content linked back to its source."

---

## Tier Availability

| Tier | Vault |
|------|-------|
| Starter ($750) | Not included |
| Growth ($1,000) | Not included |
| Scale ($1,500) | Included — "Webinar Knowledge Base" in deliverables list |
| Add-on (any tier) | $200/month |
| Back Catalog Sprint | +$150 to build vault for all past sessions |

**Status:** Pricing not finalized. Run `/sales-council` or `/startup-strategy-council` before quoting clients.

---

## When to Build

Build runs in **parallel with Step 1** (brief extraction). Same transcript work, two outputs:

1. `clients/[name]/brief.md` (existing — feeds content creation)
2. Client vault structure (new — becomes monthly deliverable)

---

## Build Sequence

### Month 1

1. Create the vault folder: `[ClientName]-Knowledge-Vault/`
2. Copy `Start Here.md` from `07-vault-deliverable/template/_start-here-template.md`
3. Create `Webinars/[YYYY-MM] [Title]/` folder
4. Fill in overview.md from transcript summary
5. Extract key frameworks -> `Concepts/[framework-name].md`
6. Extract audience questions -> `Audience/questions.md`
7. Extract audience language -> `Audience/language.md`
8. After content is published -> update `Content-Library/published.md` with links
9. Zip the vault folder
10. Include in Google Sheet delivery email

### Month 2+

1. Add new webinar folder: `Webinars/[YYYY-MM] [Title]/`
2. Update existing concept notes with new appearances
3. Update `Audience/` files with new signals
4. Update `Content-Library/published.md` with new pieces

---

## What NOT to Include in Client Vault

- Our internal process notes
- Pricing or margin information
- Other clients' data
- Draft content that wasn't delivered
- Our CLAUDE.md workflow docs

---

## File Structure Reference

See `07-vault-deliverable/template/` for all template files.

Structure:
```
[ClientName]-Knowledge-Vault/
  Start Here.md
  Webinars/
    [YYYY-MM] [Title]/
      overview.md
      key-frameworks.md
      quotes.md
      audience-questions.md
      action-items.md
      content-mined.md
  Concepts/
    [concept-name].md
    [framework-name].md
  Audience/
    pain-points.md
    language.md
    questions.md
  Content-Library/
    published.md
    by-webinar.md
    gaps.md
  Brand/
    voice-patterns.md
    positioning.md
    stories.md
```
