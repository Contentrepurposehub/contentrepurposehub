---
name: crh-drift
description: "Detect planning vs. execution drift for ContentRepurposeHub. Compare 05-content/pipeline.md (planned) against .claude/status.md completed items (done). Flag neglected pipeline items and topics in research that never became content."
version: 1.0.0
---

# CRH Drift

## Why This Exists

Plans drift. Content gets planned and never written. Research gets done and never used. Ideas get added to the pipeline and forgotten. This skill surfaces the gap between what was planned and what actually happened — so nothing important falls through.

## When to Use

- Monthly review (first session of the month)
- When the content pipeline feels bloated
- After a busy period where execution lagged
- "What have I been neglecting?"
- Before planning next month (clear the backlog first)

## Process

### Step 1: Read the Pipeline (Planned)

Read:
```
/Users/galman/contentrepurposehub/Content repurpesing Hub/05-content/pipeline.md
```
Extract: all "Queued Up" and "In Progress" items with their dates.

### Step 2: Read What Got Done

Read:
```
/Users/galman/contentrepurposehub/.claude/status.md
```
Extract: all completed items from the Completed sections.

Read:
```
/Users/galman/contentrepurposehub/Content repurpesing Hub/05-content/content-inventory.md
```
Extract: all published dates.

### Step 3: Read Untapped Research

Read:
```
/Users/galman/contentrepurposehub/Content repurpesing Hub/03-research/trend-log.md
/Users/galman/contentrepurposehub/Content repurpesing Hub/02-seo/content-gaps.md
```
Find: research that was done but never became a published piece.

### Step 4: Check Active Client Drift

Read `src/lib/clients.ts`. For any active clients, read their `clients/[name]/status.md` to check if any steps are overdue.

### Step 5: Generate Drift Report

Return a structured report:

```
## Drift Report — [DATE]

### Pipeline vs Reality
| Planned | Added Date | Status | Age |
|---------|-----------|--------|-----|
[Items in pipeline that aren't published yet — sorted by age]

### Neglected Items (>2 weeks old, not started)
[Pipeline items that have been sitting longest]
**Recommendation:** Publish, deprioritize, or delete.

### Research That Became Content
[Research sessions that led to published posts — celebrate these]

### Research That Didn't Become Content
[/last30days sessions or keyword research that was done but never used]
**Recommendation:** Turn into content, or archive if stale.

### Client Drift (If Any Active Clients)
[Any steps overdue or behind schedule]

### Cleanup Actions
1. [What to write or finish this week]
2. [What to deprioritize or archive]
3. [What to delete from pipeline entirely]
```

## Guardrails

| Rule | Why |
|------|-----|
| Don't just list — recommend | The point is action, not reporting |
| Distinguish "not started" from "blocked" | Blocked items need unblocking, not pressure |
| Archive rather than delete research | It might be useful later |
| Flag content calendar gaps | If nothing is scheduled for next 2 weeks, that's drift |
| Update pipeline.md after running this | Remove done items, reorder based on priority |
