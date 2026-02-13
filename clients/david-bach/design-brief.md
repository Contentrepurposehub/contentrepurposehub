# David Bach — Design Brief (Growth Tier Brand Intelligence)

**Date:** February 13, 2026
**Source:** davidbach.com + social profiles
**Purpose:** Brand-match landing page, blog, and scorecard to David Bach's existing visual identity

---

## Brand Colors

| Role | Color | Hex |
|------|-------|-----|
| Primary (CTAs, buttons, links) | Bright Blue | `#2729FE` |
| Primary Hover | Darker Blue | `#1D2EC3` |
| Text / Dark Accent | Near-Black | `#231F21` |
| Secondary CTA gradient start | Deep Orange | `#D73A0F` |
| Secondary CTA gradient end | Light Orange | `#ED8345` |
| Background (warm) | Cream/Off-white | `#F3F0EC` |
| Background (clean) | White | `#FFFFFF` |

## Typography

| Role | Font | Size |
|------|------|------|
| Headlines | Neue Haas Bold / Neue Haas Medium | 48px desktop, 36px mobile |
| Body | Proxima Nova Regular / Source Sans Pro | 20px desktop, 14px mobile |
| Navigation | Neue Haas Medium | — |
| Decorative accents | KindnessMatters | Sparingly |

**Fallback stack:** For our implementation, use `Inter` (close to Neue Haas) for headlines and `Source Sans Pro` (Google Font) for body. Both are free and visually similar.

## Layout & Design Patterns

- **Aesthetic:** Modern, clean, minimal with generous whitespace
- **Hero:** Asymmetrical layouts with bold typography against image backgrounds
- **Grid:** 1200px max-width desktop, responsive breakpoint at 768px
- **Buttons:** Rounded (`border-radius: 30px`), blue with white text
- **Secondary buttons:** Black outline, uppercase text
- **Navigation:** Sticky header, hamburger on mobile
- **Overall feel:** Sophisticated yet approachable. Professional authority with accessibility.

## Credibility Elements

- "10x New York Times Bestselling Author"
- Media logos: CNBC, Oprah, Forbes, Wall Street Journal, Good Morning America
- Books: The Automatic Millionaire, Smart Women Finish Rich, The Latte Factor, Start Late Finish Rich
- 12+ books published, translated into 19+ languages

## Social Links

| Platform | URL | Handle |
|----------|-----|--------|
| Website | https://davidbach.com | — |
| X/Twitter | https://x.com/AuthorDavidBach | @AuthorDavidBach |
| Instagram | https://www.instagram.com/davidlbach/ | @davidlbach |
| YouTube | https://www.youtube.com/user/DavidBachTV | DavidBachTV |

## Implementation Notes

- Use `#2729FE` as the primary accent color (replaces navy `#1e3a5f` from Starter template)
- Cream background `#F3F0EC` for alternate sections (instead of pure white)
- Rounded blue buttons with 30px radius for all CTAs
- Headlines in Inter Bold (proxy for Neue Haas)
- Body in Source Sans Pro
- Include media logo bar for credibility
- Headshot: download via `unavatar.io/x/AuthorDavidBach`
