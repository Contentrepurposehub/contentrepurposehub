---
name: crh-today
description: "Generate a prioritized day plan for ContentRepurposeHub. Reads sprint state from CONTEXT.md and content pipeline from 05-content/pipeline.md. Outputs: what to finish today, what is waiting, what to start."
version: 1.0.0
---

# CRH Today

## Why This Exists

Sprint state and content pipeline are tracked in different places. This skill synthesizes both into a clear day plan so every session starts with focus, not choosing what to work on.

## When to Use

- At the start of a work session ("what should I work on today?")
- After finishing a task ("what's next?")
- When feeling scattered or unsure about priorities
- Weekly planning ("what should this week look like?")

## Process

### Step 1: Read Sprint State

Read:
```
/Users/galman/contentrepurposehub/Content repurpesing Hub/CONTEXT.md
```
Focus on: Active State > Current Sprint > In progress + Next up + Blockers

### Step 2: Read Content Pipeline

Read:
```
/Users/galman/contentrepurposehub/Content repurpesing Hub/05-content/pipeline.md
```
Focus on: Queued Up + In Progress

### Step 3: Check Active Clients

Read `src/lib/clients.ts`. If there are active clients, their work takes priority over content/SEO work.

### Step 4: Generate Day Plan

Return a prioritized list in this format:

```
## Today — [DATE]

### Finish First (In Progress)
[Things already started that need to be completed]

### Start Today
1. [Highest priority task — why it's first]
2. [Second priority — why]
3. [Third priority — why]

### Can Wait
[Items that are queued but not urgent]

### Blocked (Need External Input)
[Things waiting on someone else — skip these today]

### Quick Wins (If Time)
[Small tasks that take <30 minutes]
```

## Priority Logic

Apply this ranking:
1. **Active client work** — Always first. Revenue-generating.
2. **Finishing in-progress tasks** — Half-done work is waste.
3. **High-intent content** (comparison posts, ROI calculator) — Commercial value.
4. **Backlink building** — Zero backlinks is the biggest SEO gap.
5. **New blog posts** — Ongoing cadence, but not urgent.
6. **System improvements** — Nice-to-have, last priority.

## Guardrails

| Rule | Why |
|------|-----|
| Client work always first | It's the revenue engine |
| Never recommend publishing 2 posts same day | Signals mass-generation to Google |
| Flag blockers clearly | Don't waste time on things that can't move |
| Keep plan realistic | 3 focused tasks beat 10 vague ones |
