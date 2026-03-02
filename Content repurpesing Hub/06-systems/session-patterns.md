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

## LinkedIn Content Principles (learned from Kleo, March 2026)

Apply these every time writing LinkedIn content for ContentRepurposeHub:

1. **Never make unverified claims about competitors** — pricing, feature claims, time estimates. If you can't verify it, don't write it. Factual inaccuracies destroy credibility faster than weak copy.
2. **Compare categories correctly** — Descript is a video editor, not a repurposing service. Don't compare a hammer to a construction company. Only compare like-for-like.
3. **Lead with opportunity cost for this audience** — $300+/hour professionals respond to time cost ($3,000 in billing time) more than monthly subscription comparisons ($50 vs $750).
4. **Differentiate on HOW, not WHAT** — RepurposeMyWebinar claims similar deliverables. The difference is human voice matching vs AI output that still needs editing. Lead with the mechanism, not the list.
5. **The real objection is "why 7.5x more"** — address it directly. Don't dodge it with a deliverable list. Explain what you actually get for the price difference.
6. **"Written in your voice" needs proof** — everyone claims this. Show the process: someone studies how you talk, your vocabulary, your rhythm. Make it specific enough to be believable.
7. **Reframe price comparisons as category comparisons** — DIY tools vs done-for-you is a different buying decision than $99 vs $750. Name the category difference explicitly.
8. **The hook should address the REAL objection** — not the surface one. "Can't you use Castmagic?" is surface. "Why pay 7.5x more?" is the real one.

## What Makes a Post Go Viral (Kleo Analysis, March 2026)

1. **Flip the narrative** — "You already created it, you're just not using it" beats "create more content." Position repurposing as the insider move, not the lazy option.
2. **Specific + visceral hook** — "12 webinar recordings you'll never watch again. Sitting in a folder labeled Zoom Recordings." Describe their reality back to them. Don't pitch. Mirror.
3. **Translate expertise to dollars** — Abstract value means nothing. "$36,000 opportunity cost" lands. "540 minutes of unused expertise" lands. Always convert to numbers the audience thinks in.
4. **Connect math to outcomes, not just numbers** — "120+ pieces of content" is abstract. "Enough to stay visible for a year without writing a single new post from scratch" is the outcome they want.
5. **"Here's what kills me" energy** — Conversational, emotional, human. Use this type of phrase to signal a shift from logic to truth. Don't overuse it, but one per post works.
6. **AI angle must be specific** — "LinkedIn is drowning in AI content" is a cliché. "Your recordings contain the one thing AI can't replicate: your actual voice explaining real client transformations" is specific and differentiating.
7. **End with self-reflection, not a pitch** — "How many recordings are in your graveyard?" is more powerful than "Book a call." High-billing professionals don't respond to hard sells. They respond to mirrors.
8. **"Winning" needs to mean something concrete** — Define it: more clients, less time on content, higher conversion. Abstract "winning" lands flat for this audience.

## Things That Work Well

1. Run `/last30days` before writing anything — real language from real people makes copy better
2. Internal cross-linking — each new post should link to 3+ existing posts
3. FAQ schema in every post — helps with "people also ask" without traditional ranking
