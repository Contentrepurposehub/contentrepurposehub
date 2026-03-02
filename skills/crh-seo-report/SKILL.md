---
name: crh-seo-report
description: "Generate an SEO and AI search rankings report. Reads 02-seo/rankings-log.md + what-is-working.md, runs hive_domain tool, and returns: what is gaining, what is stalled, what to prioritize next."
version: 1.0.0
---

# CRH SEO Report

## Why This Exists

Rankings data is useless if it lives in a file nobody reads. This skill runs the check, synthesizes it with historical data, and returns a clear "here's what to do next" — not just raw numbers.

## When to Use

- Monthly (first session of the month)
- After publishing a new batch of content
- After making significant technical changes to the site
- When asked "how is the site doing?"
- Before deciding what content to write next

## Process

### Step 1: Read Historical Data

Read:
```
/Users/galman/contentrepurposehub/Content repurpesing Hub/02-seo/rankings-log.md
/Users/galman/contentrepurposehub/Content repurpesing Hub/02-seo/what-is-working.md
/Users/galman/contentrepurposehub/Content repurpesing Hub/02-seo/keyword-map.md
```

### Step 2: Run Live Rankings Check

Run the Hive-Rank tool:
```
hive_domain("contentrepurposehub.com")
```

Also run spot checks on the highest-priority queries:
```
hive_rankings("best webinar repurposing service")
hive_rankings("content repurposing for coaches")
hive_rankings("webinar repurposing")
```

### Step 3: Compare Against History

Cross-reference live results with the last entry in rankings-log.md.
- What's new? What moved? What dropped?
- Any query appearing for the first time?

### Step 4: Update the Log

Append a new entry to:
```
/Users/galman/contentrepurposehub/Content repurpesing Hub/02-seo/rankings-log.md
```

Format: Date | What Was Checked | Findings

### Step 5: Generate Report

Return a structured report:

```
## SEO Report — [DATE]

### Summary
[1-2 sentence status: gaining / holding / stalled / first signals]

### What's Moving
[Any queries where we appear for the first time, or moved up]
[If none: "Zero rankings across all tracked queries. Expected — content is [N] weeks old."]

### What's Stalled
[Queries with no movement despite content being >6 weeks old]

### Priority Actions
1. [Most important action based on data]
2. [Second priority]
3. [Third priority]

### Backlink Status
[Zero / N backlinks — from backlink-tracker.md]

### Next Check
[Recommended date for next check]
```

### Step 6: Update what-is-working.md

If any rankings appeared for the first time, document what worked in:
```
/Users/galman/contentrepurposehub/Content repurpesing Hub/02-seo/what-is-working.md
```

## Guardrails

| Rule | Why |
|------|-----|
| Always run live check, not just historical | Vault data can be stale |
| Update rankings-log.md after every check | Otherwise the history is lost |
| Be honest about zero rankings | Don't spin "no data" as positive |
| Connect rankings to content actions | Data without action is noise |
