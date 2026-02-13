import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import LeadCaptureForm from './LeadCaptureForm'
import AnimatedCounter from './AnimatedCounter'

export const metadata: Metadata = {
  title: 'Wealth Automation Scorecard — How Automatic Is Your Financial Life? | David Bach',
  description: 'Free 2-minute scorecard based on the system used by 654,000 401k millionaires. Find out if your wealth system is running on autopilot or still relying on willpower.',
  openGraph: {
    title: 'Wealth Automation Scorecard | David Bach',
    description: 'Free 2-minute scorecard based on the system used by 654,000 401k millionaires.',
    type: 'website',
  },
}

/* ─── Design tokens (davidbach.com brand match) ─── */
const BLUE = '#2729FE'
const BLUE_HOVER = '#1D2EC3'
const CHARCOAL = '#231F21'
const CREAM = '#F3F0EC'
const ORANGE_START = '#D73A0F'
const ORANGE_END = '#ED8345'

const heading = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 800 as const,
  lineHeight: 1.1,
}

export default function DavidBachLandingPage() {
  return (
    <main>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Wealth Automation Scorecard',
            description: 'Free 2-minute scorecard based on the system used by 654,000 401k millionaires.',
            author: {
              '@type': 'Person',
              name: 'David Bach',
              url: 'https://davidbach.com',
              jobTitle: '10x New York Times Bestselling Author',
            },
            datePublished: '2026-02-13',
          }),
        }}
      />

      {/* Responsive styles */}
      <style>{`
        @media (min-width: 768px) {
          .db-hero-grid { grid-template-columns: 1fr 1fr !important; }
          .db-hero-image { display: flex !important; }
          .db-reveal-grid { grid-template-columns: 1fr 1fr !important; }
          .db-stats-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .db-hub-grid { grid-template-columns: 1fr 1fr !important; }
          .db-steps-row { flex-direction: row !important; }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: HERO — Dark charcoal background
      ═══════════════════════════════════════════════════════════ */}
      <section style={{
        background: CHARCOAL,
        padding: '72px 24px 64px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle gradient overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: `radial-gradient(ellipse at 80% 30%, rgba(39,41,254,0.08) 0%, transparent 60%)`,
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <div className="db-hero-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
            alignItems: 'center',
          }}>
            {/* Left Column: Copy + Form */}
            <div>
              {/* Author identity badge */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '28px',
              }}>
                <Image
                  src="/david-bach-headshot.png"
                  alt="David Bach"
                  width={44}
                  height={44}
                  style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)' }}
                />
                <span style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.7)',
                  fontWeight: 500,
                  fontFamily: "'Source Sans 3', sans-serif",
                }}>
                  David Bach &mdash; 10x New York Times Bestselling Author
                </span>
              </div>

              <h1 style={{
                ...heading,
                fontSize: 'clamp(34px, 5vw, 52px)',
                color: '#FFFFFF',
                marginBottom: '20px',
              }}>
                How Automatic Is Your Financial Life?
              </h1>

              <p style={{
                fontSize: '19px',
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.75)',
                marginBottom: '36px',
                maxWidth: '520px',
              }}>
                <AnimatedCounter
                  target={654000}
                  duration={2200}
                  style={{ color: '#fff', fontWeight: 800, fontFamily: "'Inter', sans-serif" }}
                />{' '}
                people followed one formula and became 401k millionaires. This free 2-minute scorecard shows you if your system is running &mdash; or if you&apos;re still relying on willpower.
              </p>

              <div style={{ maxWidth: '400px' }}>
                <LeadCaptureForm source="hero" variant="dark" />
              </div>
            </div>

            {/* Right Column: Headshot (hidden on mobile) */}
            <div className="db-hero-image" style={{
              display: 'none',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Image
                src="/david-bach-headshot.png"
                alt="David Bach"
                width={420}
                height={420}
                priority
                style={{
                  borderRadius: '20px',
                  objectFit: 'cover',
                  width: '100%',
                  maxWidth: '420px',
                  height: 'auto',
                  boxShadow: '0 24px 48px rgba(0,0,0,0.3)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2: MEDIA CREDIBILITY BAR
      ═══════════════════════════════════════════════════════════ */}
      <section style={{
        background: '#FFFFFF',
        padding: '20px 24px',
        borderBottom: '1px solid #eee',
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: '12px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#b0b0b0',
            fontWeight: 600,
            fontFamily: "'Inter', sans-serif",
          }}>
            As featured on &nbsp;&nbsp; CNBC &nbsp;&middot;&nbsp; Oprah &nbsp;&middot;&nbsp; Forbes &nbsp;&middot;&nbsp; Wall Street Journal &nbsp;&middot;&nbsp; Good Morning America
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3: WHAT THE SCORECARD REVEALS
      ═══════════════════════════════════════════════════════════ */}
      <section style={{ background: CREAM, padding: '72px 24px' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <p style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: BLUE,
            textAlign: 'center',
            marginBottom: '12px',
            fontFamily: "'Inter', sans-serif",
          }}>
            The Scorecard
          </p>
          <h2 style={{
            ...heading,
            fontSize: 'clamp(26px, 4vw, 38px)',
            color: CHARCOAL,
            textAlign: 'center',
            marginBottom: '52px',
          }}>
            What You&apos;ll Discover in 2 Minutes
          </h2>

          <div className="db-reveal-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px',
          }}>
            {[
              {
                num: '01',
                title: 'Your Savings Rate vs. the Formula',
                desc: 'The 654,000 Fidelity millionaires save 14% of gross income. The average American saves 3-5%. One number predicts millionaire status more than income.',
              },
              {
                num: '02',
                title: 'Your Automation Level',
                desc: "The government takes taxes automatically. That's why taxes always get paid. Is your wealth system running the same way — or still relying on willpower?",
              },
              {
                num: '03',
                title: 'Which Escalators You\'re On',
                desc: '$45 trillion in stocks. $34 trillion in real estate. The scorecard shows which wealth escalators you\'re riding — and which you\'re missing.',
              },
              {
                num: '04',
                title: 'Your 3 Biggest Gaps',
                desc: 'Most people are closer than they think. The scorecard identifies the specific gaps between where you are and the formula — with action items to close them.',
              },
            ].map((item) => (
              <div key={item.num} style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '32px',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
              }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                  fontSize: '32px',
                  color: BLUE,
                  opacity: 0.2,
                  lineHeight: 1,
                  minWidth: '40px',
                }}>
                  {item.num}
                </span>
                <div>
                  <h3 style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: '18px',
                    color: CHARCOAL,
                    marginBottom: '8px',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#6b7280' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4: SIGNATURE QUOTE
      ═══════════════════════════════════════════════════════════ */}
      <section style={{ background: BLUE, padding: '64px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(19px, 3vw, 26px)',
            fontStyle: 'italic',
            color: '#FFFFFF',
            lineHeight: 1.6,
            marginBottom: '20px',
            fontWeight: 500,
          }}>
            &ldquo;The government doesn&apos;t ask you to budget to pay taxes. They take your taxes from you automatically. Your wealth system needs to work the same way.&rdquo;
          </p>
          <p style={{
            fontSize: '15px',
            color: 'rgba(255,255,255,0.7)',
            fontWeight: 600,
            fontFamily: "'Inter', sans-serif",
          }}>
            &mdash; David Bach, <em>The Automatic Millionaire</em>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5: HUB NAVIGATION — Explore the System
      ═══════════════════════════════════════════════════════════ */}
      <section style={{ background: '#FFFFFF', padding: '72px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: BLUE,
            textAlign: 'center',
            marginBottom: '12px',
            fontFamily: "'Inter', sans-serif",
          }}>
            Go Deeper
          </p>
          <h2 style={{
            ...heading,
            fontSize: 'clamp(24px, 4vw, 34px)',
            color: CHARCOAL,
            textAlign: 'center',
            marginBottom: '48px',
          }}>
            Explore the Automatic Wealth System
          </h2>

          <div className="db-hub-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px',
          }}>
            {/* Blog Post Card */}
            <Link href="/clients/david-bach/blog" style={{ textDecoration: 'none' }}>
              <div style={{
                border: '2px solid #e5e7eb',
                borderRadius: '16px',
                padding: '32px',
                transition: 'border-color 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
              }}>
                <div style={{
                  display: 'inline-block',
                  background: CREAM,
                  borderRadius: '8px',
                  padding: '6px 12px',
                  marginBottom: '16px',
                }}>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: CHARCOAL,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    fontFamily: "'Inter', sans-serif",
                  }}>
                    Part 1 &mdash; Blog Post
                  </span>
                </div>
                <h3 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: '20px',
                  color: CHARCOAL,
                  marginBottom: '8px',
                  lineHeight: 1.3,
                }}>
                  The Automatic Millionaire Formula: The Exact System Behind 654,000 New Millionaires
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#6b7280', marginBottom: '16px' }}>
                  The complete breakdown of the pay yourself first strategy, the 70/30 allocation, and the two escalators to wealth. Every percentage, every account, every step.
                </p>
                <span style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  color: BLUE,
                  fontFamily: "'Inter', sans-serif",
                }}>
                  Read the full breakdown &rarr;
                </span>
              </div>
            </Link>

            {/* Scorecard Card */}
            <Link href="/clients/david-bach/scorecard" style={{ textDecoration: 'none' }}>
              <div style={{
                border: '2px solid #e5e7eb',
                borderRadius: '16px',
                padding: '32px',
                transition: 'border-color 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
              }}>
                <div style={{
                  display: 'inline-block',
                  background: CREAM,
                  borderRadius: '8px',
                  padding: '6px 12px',
                  marginBottom: '16px',
                }}>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: CHARCOAL,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    fontFamily: "'Inter', sans-serif",
                  }}>
                    Interactive Tool
                  </span>
                </div>
                <h3 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: '20px',
                  color: CHARCOAL,
                  marginBottom: '8px',
                  lineHeight: 1.3,
                }}>
                  Wealth Automation Scorecard
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#6b7280', marginBottom: '16px' }}>
                  8 questions. 2 minutes. Find out exactly where your financial system stands against the formula used by 654,000 401k millionaires. Get your personalized action items.
                </p>
                <span style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  color: BLUE,
                  fontFamily: "'Inter', sans-serif",
                }}>
                  Take the scorecard &rarr;
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6: WHO MADE THIS — Bio + Stats
      ═══════════════════════════════════════════════════════════ */}
      <section style={{ background: CREAM, padding: '72px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <Image
            src="/david-bach-headshot.png"
            alt="David Bach"
            width={80}
            height={80}
            style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: '24px' }}
          />

          <h2 style={{
            ...heading,
            fontSize: 'clamp(24px, 4vw, 34px)',
            color: CHARCOAL,
            marginBottom: '24px',
          }}>
            About David Bach
          </h2>

          <p style={{
            fontSize: '17px',
            lineHeight: 1.8,
            color: '#4b5563',
            marginBottom: '28px',
            maxWidth: '640px',
            margin: '0 auto 28px',
          }}>
            I came out of college with $12,000 in credit card debt. I remember opening my bills and having the room spin. That was 25 years ago. Since then, I&apos;ve written 12 books (10 of them New York Times bestsellers), taught millions of people the system that works, and watched 654,000 people become 401k millionaires using the exact formula in this scorecard.
          </p>

          {/* Social Links */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '36px',
          }}>
            {[
              { href: 'https://x.com/AuthorDavidBach', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
              { href: 'https://www.instagram.com/davidlbach/', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
              { href: 'https://www.youtube.com/user/DavidBachTV', icon: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
              { href: 'https://davidbach.com', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' },
            ].map((link, i) => (
              <a key={i} href={link.href} target="_blank" rel="noopener noreferrer"
                style={{ color: '#b0b0b0', transition: 'color 0.15s' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d={link.icon}/></svg>
              </a>
            ))}
          </div>

          {/* 3 Key Stats — Animated Counters */}
          <div className="db-stats-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px',
            marginBottom: '28px',
          }}>
            {[
              { target: 12, suffix: '+', label: 'Books in 19 Languages', duration: 1200 },
              { target: 10, suffix: 'x', label: 'New York Times Bestseller', duration: 1000 },
              { target: 654, suffix: 'K+', label: '401k Millionaires Using the Formula', duration: 2000 },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  color: BLUE,
                  marginBottom: '4px',
                  lineHeight: 1,
                }}>
                  <AnimatedCounter
                    target={stat.target}
                    duration={stat.duration}
                    suffix={stat.suffix}
                  />
                </p>
                <p style={{
                  fontSize: '13px',
                  color: '#9ca3af',
                  fontWeight: 600,
                  fontFamily: "'Inter', sans-serif",
                }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7: HOW IT WORKS
      ═══════════════════════════════════════════════════════════ */}
      <section style={{ background: '#FFFFFF', padding: '72px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            ...heading,
            fontSize: 'clamp(24px, 4vw, 34px)',
            color: CHARCOAL,
            textAlign: 'center',
            marginBottom: '52px',
          }}>
            How It Works
          </h2>

          <div className="db-steps-row" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}>
            {[
              { step: '1', title: 'Enter your name and email', desc: 'Takes 10 seconds. No credit card.' },
              { step: '2', title: 'Answer 8 quick questions', desc: 'About your savings, investments, and automation level.' },
              { step: '3', title: 'Get your score + action items', desc: 'Personalized results comparing you to the 401k millionaire formula.' },
            ].map((item) => (
              <div key={item.step} style={{
                flex: 1,
                textAlign: 'center',
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: CHARCOAL,
                  color: '#fff',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                  fontSize: '22px',
                  marginBottom: '16px',
                }}>
                  {item.step}
                </div>
                <h3 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: '18px',
                  color: CHARCOAL,
                  marginBottom: '6px',
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '15px', color: '#9ca3af', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8: FAQ
      ═══════════════════════════════════════════════════════════ */}
      <section style={{ background: CREAM, padding: '72px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 style={{
            ...heading,
            fontSize: 'clamp(24px, 4vw, 34px)',
            color: CHARCOAL,
            textAlign: 'center',
            marginBottom: '48px',
          }}>
            Common Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {[
              {
                q: 'How long does the scorecard take?',
                a: "About 2 minutes. 8 questions. You get your score and action items immediately — no waiting, no \"we'll email you later.\"",
              },
              {
                q: 'Is it really free?',
                a: "Yes. No credit card. No upsell. The formula works and most people just need to see where they stand. The scorecard shows you that.",
              },
              {
                q: 'What happens after I submit my email?',
                a: "You go straight to the scorecard. Answer 8 questions, get your score, and see your personalized action items. We'll also send you the system breakdown so you have everything in one place.",
              },
            ].map((item, i) => (
              <div key={i} style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '24px 28px',
              }}>
                <h3 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: '17px',
                  color: CHARCOAL,
                  marginBottom: '8px',
                }}>
                  {item.q}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#6b7280' }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 9: FOOTER CTA — Orange gradient background
      ═══════════════════════════════════════════════════════════ */}
      <section style={{
        background: `linear-gradient(135deg, ${ORANGE_START} 0%, ${ORANGE_END} 100%)`,
        padding: '72px 24px',
      }}>
        <div style={{ maxWidth: '520px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            ...heading,
            fontSize: 'clamp(26px, 4vw, 38px)',
            color: '#FFFFFF',
            marginBottom: '16px',
          }}>
            654,000 people followed this formula and became millionaires.
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.5,
            marginBottom: '36px',
          }}>
            How does your system compare?
          </p>

          <LeadCaptureForm source="footer" variant="gradient" />
        </div>
      </section>
    </main>
  )
}
