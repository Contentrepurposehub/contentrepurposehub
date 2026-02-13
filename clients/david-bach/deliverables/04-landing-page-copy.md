# Landing Page Copy — David Bach Wealth Automation Scorecard

**Client:** David Bach
**Tier:** Growth ($1,000/mo) — Brand-matched to davidbach.com
**Funnel:** Replay Promotion (Diary of a CEO episode)
**Page URL:** /clients/david-bach
**Goal:** Capture email → Redirect to scorecard → Scorecard CTA drives to replay

---

## Design Notes (from design-brief.md)

- Primary CTA color: `#2729FE` (bright blue)
- Background alternating: `#FFFFFF` (white) + `#F3F0EC` (cream)
- Text: `#231F21` (near-black)
- Buttons: 30px border-radius, blue with white text
- Headlines: Inter Bold (proxy for Neue Haas)
- Body: Source Sans Pro
- Headshot: `unavatar.io/x/AuthorDavidBach`
- Social links: X, Instagram, YouTube, Website

---

## Section 1: Hero (Two-Column Layout)

### Left Column (Copy + Form)

**Author Identity Badge:**
[Circular headshot 48x48] David Bach — 10x New York Times Bestselling Author

**Headline:**
How Automatic Is Your Financial Life?

**Subtext:**
The system behind 654,000 401k millionaires comes down to 3 numbers. This free scorecard tells you if your system is running — or if you're still relying on willpower.

**Form Fields:**
- First Name [input]
- Email Address [input]
- [Get My Free Score] (blue button, 30px radius)

**Privacy note (small text):**
Free. Takes 2 minutes. No spam — just your score and what to do about it.

### Right Column (Visual)
- Large David Bach headshot (rounded-2xl, object-cover, shadow-lg)
- Hidden on mobile (hidden md:block)

---

## Section 2: What the Scorecard Reveals (Cream Background)

**Section Heading:** What the Scorecard Reveals

**Grid (2x2):**

**[1] Your Savings Rate vs. the Formula**
Are you saving 14% like the 654,000 Fidelity millionaires — or the 3-5% that keeps most Americans broke? Your score shows exactly where you stand.

**[2] Your Automation Level**
The government takes taxes automatically. That's why taxes always get paid. Is your wealth system running the same way — or are you still relying on willpower?

**[3] Which Escalators You're On**
$45 trillion in stocks. $34 trillion in real estate. That's where wealth lives. The scorecard shows which escalators you're riding — and which ones you're missing.

**[4] Your 3 Biggest Gaps**
Most people are closer than they think. The scorecard identifies the specific gaps between where you are and the automatic millionaire formula — with action items to close them.

---

## Section 3: Signature Quote (Full-Width Blue #2729FE Background)

*"The government doesn't ask you to budget to pay taxes. They take your taxes from you automatically. Your wealth system needs to work the same way."*

— David Bach, The Automatic Millionaire

---

## Section 4: Who Made This? (White Background)

**Section Heading:** Who Made This?

**Bio Paragraph:**
I came out of college with $12,000 in credit card debt. I remember opening my bills and having the room spin. That was 25 years ago. Since then, I've written 12 books (10 of them New York Times bestsellers), taught millions of people the system that works, and watched 654,000 people become 401k millionaires using the exact formula in this scorecard. I built this because the formula is simple — but most people don't know if they're actually following it.

**Social Links Row (muted gray icons):**
- [X/Twitter] @AuthorDavidBach
- [Instagram] @davidlbach
- [YouTube] DavidBachTV
- [Website] davidbach.com

**3 Key Stats (in a row):**

| Stat | Value |
|------|-------|
| Books Published | 12+ in 19 Languages |
| NYT Bestsellers | 10x New York Times |
| 401k Millionaires Using the Formula | 654,000+ |

**Credibility Bar (muted gray text below stats):**
As seen on CNBC | Oprah | Forbes | Wall Street Journal | Good Morning America

---

## Section 5: How It Works (Cream Background)

**Section Heading:** How It Works

**Step 1:** Enter your name and email above

**Step 2:** Answer 8 quick questions about your financial system (takes 2 minutes)

**Step 3:** Get your Wealth Automation Score with personalized action items — plus access to the full system breakdown

---

## Section 6: FAQ (White Background)

**Section Heading:** Common Questions

**Q: How long does the scorecard take?**
About 2 minutes. 8 questions. You get your score and action items immediately — no waiting, no "we'll email you later."

**Q: Is it really free?**
Yes. No credit card. No upsell. I built this because the formula works and most people just need to see where they stand. The scorecard shows you that.

**Q: What happens after I submit my email?**
You go straight to the scorecard. Answer 8 questions, get your score, and see your personalized action items. We'll also send you the system breakdown so you have everything in one place.

---

## Section 7: Footer CTA (Blue #2729FE Background)

**Headline:**
654,000 people followed this formula and became millionaires. How does your system compare?

**Form Fields:**
- First Name [input]
- Email Address [input]
- [Get My Free Score] (white button on blue background)

**Privacy note:**
Free. 2 minutes. Your score + action items delivered instantly.

---

## SEO Metadata

**Page Title:** Wealth Automation Scorecard — How Automatic Is Your Financial Life? | David Bach

**Meta Description:** Free 2-minute scorecard based on the system used by 654,000 401k millionaires. Find out if your wealth system is running on autopilot or still relying on willpower.

**JSON-LD:** WebPage schema with author (David Bach), description, datePublished

---

## Technical Notes

- `LeadCaptureForm` component with `source="hero"` (top) and `source="footer"` (bottom)
- `redirectUrl` → `/clients/david-bach/scorecard`
- Form submits to `POST /api/leads` with `{ name, email, client: 'david-bach', source }`
- `suppressHydrationWarning` on form and input elements
- Headshot via Next.js `Image` component with `priority` flag
- Social links as `<a>` tags with `target="_blank" rel="noopener noreferrer"`
