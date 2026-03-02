# Workflow Notes

> How the delivery system works — observations, shortcuts, gotchas
> Last updated: 2026-03-02

## Client Onboarding (5 Questions — All Required)

Never skip any. Missing info (especially email platform) breaks the flywheel.

1. Tier (Starter/Growth/Scale)
2. Funnel type (active-webinar or replay-promotion)
3. Email platform (Beehiiv/Mailchimp/ConvertKit/ActiveCampaign)
4. Email platform credentials (see .claude/email-setup.md for what to ask per platform)
5. Conversion URL + Conversion Label

**Do NOT begin Step 1 until all 5 answered.**

## Email Flywheel Gotchas

- **Beehiiv:** Double opt-in MUST be OFF or subscribers never activate
- **Use printf not echo** for Vercel env vars — echo adds trailing newlines that break string matching
- **Set env vars on Vercel production** AND trigger a fresh deployment AFTER adding them
- Test with a real email on the live page — check the API returns `{"success":true,"stored":"google_sheets","synced":"[platform]"}`

## Growth/Scale Landing Page (Non-Negotiable)

MUST READ `.claude/landing-page-template.md` before starting. Always. Don't build from memory.

Required components:
- VideoBackground (local video, not YouTube embed)
- AnimatedCard (all card grids)
- AnimatedCounter (all stats)
- Lead capture in 3 positions
- 15 sections minimum
- Brand-matched colors from client's real website

## Video Extraction (for Landing Pages)

```bash
# Download from YouTube
yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]" [URL] -o clip.mp4

# Re-encode to H.264 for browser compatibility
ffmpeg -i clip.mp4 -c:v libx264 -c:a aac -movflags +faststart output.mp4
```

## Common Mistakes

1. Publishing too many blog posts on one day (signals mass-generation)
2. External links on CTAs (traffic leaks)
3. Email env vars set locally but not in Vercel production
4. Author schema = Organization instead of Person (kills E-E-A-T)

## Google Sheet Delivery

Playbook tab links MUST be clickable HYPERLINK formulas, not plain text.

```
=HYPERLINK("https://contentrepurposehub.com/clients/[name]","Landing Page")
```

See `.claude/google-sheet-workflow.md` for full tab structure per tier.
