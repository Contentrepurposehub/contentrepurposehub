# Tool Notes

> Notes on tools used in this project — what works, what doesn't, gotchas
> Last updated: 2026-03-02

## Hive-Rank (MCP)

**What it is:** AI search rankings tracker. Shows how contentrepurposehub.com ranks across AI search engines.

**Available tools:** `hive_domain`, `hive_rankings`, `hive_trending`, `hive_stats`, `hive_search`

**How to check rankings:**
```
hive_domain("contentrepurposehub.com")
```

**Current state:** Zero data as of Feb 2026. Content too new. Check monthly.

**Gotcha:** Hive-Rank has zero contributors searching webinar repurposing niche. Network data is thin for our queries.

---

## Vercel

**Deployment:** Auto-deploys from git push to main.

**Env vars gotcha:** Set env vars in Vercel dashboard, then trigger a FRESH DEPLOYMENT. Vars don't take effect until next deploy.

**Printf vs echo for vars:**
- Use `printf` NOT `echo` when setting env vars locally
- `echo` adds trailing newlines that break string matching

---

## yt-dlp + ffmpeg (Video Extraction)

**Purpose:** Extract video clips from client webinar recordings for landing pages.

```bash
# Download
yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]" [URL] -o clip.mp4

# Re-encode for browser compatibility
ffmpeg -i clip.mp4 -c:v libx264 -c:a aac -movflags +faststart output.mp4
```

**Why local video:** YouTube embeds cause traffic to leave the page. Local video keeps visitors on-site.

---

## Next.js / Vercel OG Images

**Setup:** `src/app/opengraph-image.tsx` for homepage + `/api/og` route for dynamic per-blog images.

**Gotcha:** `@vercel/og` requires Edge runtime. Keep OG image generation in Edge-compatible code.

---

## Google Sheets API

**Credentials:** `GOOGLE_SHEETS_PRIVATE_KEY`, `GOOGLE_SHEETS_CLIENT_EMAIL`, `GOOGLE_SHEETS_SPREADSHEET_ID`

**What it does:** Stores every lead captured on client landing pages / scorecard.

**Works with:** Lead capture API at `src/app/api/leads/route.ts`

---

## Email Platforms

See `.claude/email-setup.md` for platform-specific credential instructions and gotchas.

**Supported:** Beehiiv, Mailchimp, ConvertKit (Kit), ActiveCampaign

**Key Beehiiv gotcha:** Double opt-in MUST be OFF for subscribers to go Active immediately.

---

## Remotion

**Status:** Installed 2026-03-02. v4.0.431.

**Packages:** `remotion`, `@remotion/cli`, `@remotion/player`

**Agent skills:** Installed via `npx skills add remotion-dev/skills` to `.claude/skills/remotion-best-practices`

**Project files:**
- `remotion/index.ts` — Entry point (registers root)
- `remotion/Root.tsx` — All compositions registered here
- `remotion/Composition.tsx` — Starting composition (QuoteCard)

**NPM scripts:**
```bash
npm run remotion:studio   # Open visual preview (localhost:3000 equivalent)
npm run remotion:render   # Render to file
```

**Compositions registered:**
- `QuoteCard` — 1080x1080 (LinkedIn/Instagram square), 3s, 30fps
- `QuoteCardVertical` — 1080x1920 (LinkedIn video/Reels), 3s, 30fps

**Use cases for client deliverables:**
- Animated quote cards from webinar best quotes
- Audiogram clips (waveform + captions)
- Data viz / stat animations
- LinkedIn video content

**Cost:** Free (team ≤3). Lambda render ~$0.02/clip if needed.
