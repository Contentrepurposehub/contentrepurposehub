# Session Patterns

> Recurring patterns across sessions — what to do, what to avoid
> Last updated: 2026-03-02

## Session Start Checklist

1. Read CONTEXT.md (this vault)
2. If >3 days old, read .claude/status.md + `git log --oneline -10`
3. Check src/lib/clients.ts for active clients
4. Run `/crh-context` if you want a formatted summary

## Session End Checklist

If substantive work was done:
1. Update CONTEXT.md Active State section
2. Update relevant vault files (decisions, rankings, content inventory)
3. Update .claude/status.md if sprint state changed

## Common Session Types

### "Check rankings" session
1. Run `hive_domain contentrepurposehub.com`
2. Update 02-seo/rankings-log.md
3. Note any new rankings in CONTEXT.md

### "Write new blog post" session
1. Run `/last30days [topic]` first
2. Run `/seo-content` with target keyword
3. After writing: run em-dash check, anti-AI rules check, brand voice check
4. After publishing: add to 05-content/content-inventory.md

### "Onboard new client" session
1. Ask all 5 onboarding questions (don't skip)
2. Create vault entry in 01-clients/[name]/snapshot.md
3. Create project directory
4. Add to clients.ts
5. Begin Step 0.5 (trend research)

### "Client content" session
1. Read clients/[name]/status.md FIRST
2. Check which step is next
3. Never skip steps

## Things That Keep Going Wrong

1. **Em dashes** — scan every content piece before calling it done
2. **External CTAs** — check every button and link before shipping a page
3. **Email env vars** — test the actual lead capture, don't assume it works
4. **Date staggering** — never publish multiple posts on same day

## Things That Work Well

1. Run `/last30days` before writing anything — real language from real people makes copy better
2. Internal cross-linking — each new post should link to 3+ existing posts
3. FAQ schema in every post — helps with "people also ask" without traditional ranking
