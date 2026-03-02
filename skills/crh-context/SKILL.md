---
name: crh-context
description: "Full session orientation for ContentRepurposeHub. Reads CONTEXT.md + status.md + git log. Reports active clients, sprint state, site health, blockers. Use at the start of any session to get full project context without re-explaining."
version: 1.0.0
---

# CRH Context

## Why This Exists

Starting a session without context means re-explaining the project state every time. This skill reads the vault and project state and returns a clean summary in under 60 seconds. No re-explaining required.

## When to Use

- At the start of any new session
- When returning after a few days away
- When the user says "what's the current state" or "catch me up"
- Before beginning any client work
- Before making any significant decision (so you know what's already been decided)

## Process

### Step 1: Read the Vault Context

Read the primary context file:
```
/Users/galman/contentrepurposehub/Content repurpesing Hub/CONTEXT.md
```

Check the "Last updated" date at the top.

### Step 2: Check Staleness

If CONTEXT.md is **more than 3 days old**:
- Read `/Users/galman/contentrepurposehub/.claude/status.md`
- Run `git log --oneline -10` to see recent commits
- Note any discrepancies

### Step 3: Check Active Clients

Read `src/lib/clients.ts` for the current client registry. This is the authoritative source for which clients are live.

### Step 4: Synthesize and Report

Return a structured summary with these sections:

```
## Session Context — [DATE]

### Active Clients
[Table or "No active clients" note]

### Current Sprint
[What is in progress and what is next]

### Site Health
- Blog posts: [N]
- Last rankings check: [date + result]
- Known issues: [list or "none"]

### Blockers
[What's waiting on external input, or "none"]

### Key Decisions Since Last Check
[Bullet list from CONTEXT.md, or "none noted"]
```

## Guardrails

| Rule | Why |
|------|-----|
| Always read CONTEXT.md first | It's the single source of truth for session state |
| Flag if >3 days stale | Stale context leads to wrong assumptions |
| Don't summarize what you don't know | Report "not checked" rather than guessing |
| Keep it scannable | The point is quick orientation, not a novel |
