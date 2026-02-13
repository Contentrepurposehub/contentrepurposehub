import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import LeadCaptureForm from './LeadCaptureForm'
import AnimatedCard from './AnimatedCard'
import AnimatedCounter from './AnimatedCounter'
import VideoBackground from './VideoBackground'

export const metadata: Metadata = {
  title: 'The AI Blind Spot Scorecard — What You\'re Not Seeing About AI | Yoshua Bengio',
  description: 'Free 2-minute scorecard from Turing Award winner Yoshua Bengio. You use AI every day — here\'s what you\'re not seeing about the risks ahead.',
  openGraph: {
    title: 'The AI Blind Spot Scorecard | Yoshua Bengio',
    description: 'You use AI every day. Here\'s what you\'re not seeing.',
    type: 'website',
  },
}

/* ═══════════════════════════════════════════════════════════
   DESIGN TOKENS — Brand-matched to LawZero / yoshuabengio.org
   ═══════════════════════════════════════════════════════════ */
const PRIMARY = '#003CC5'
const DARK = '#23242B'
const LIGHT = '#F5F7FA'
const ACCENT = '#0F4C75'
const LIGHT_BLUE = '#4DA3FF'
const CTA_BG = '#003CC5'
const CTA_HOVER = '#0048E8'

const heading = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 800 as const,
  lineHeight: 1.1,
}

export default function YoshuaBengioLandingPage() {
  return (
    <main>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'The AI Blind Spot Scorecard — Yoshua Bengio',
            description: 'Free AI awareness assessment from Turing Award winner Yoshua Bengio.',
            author: {
              '@type': 'Person',
              name: 'Yoshua Bengio',
              url: 'https://yoshuabengio.org',
              jobTitle: 'Turing Award Winner, Founder of LawZero',
            },
            datePublished: '2026-02-13',
          }),
        }}
      />

      {/* ═══ RESPONSIVE STYLES ═══ */}
      <style>{`
        @media (min-width: 768px) {
          .yb-hero-grid { grid-template-columns: 1fr 1fr !important; }
          .yb-framework-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .yb-stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .yb-reveals-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .yb-optin-grid { grid-template-columns: 1fr 1fr !important; }
          .yb-resources-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .yb-endorsements-grid { grid-template-columns: 1fr 1fr !important; }
          .yb-about-grid { grid-template-columns: 1fr 1fr !important; }
          .yb-steps-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .yb-faq-grid { grid-template-columns: 1fr !important; }
          .yb-value-grid { grid-template-columns: 1fr 1fr !important; }
          .yb-footer-grid { grid-template-columns: 1fr 1fr 1fr !important; text-align: left !important; }
          .yb-nav-links { display: flex !important; }
        }
        .yb-card-hover:hover { border-color: ${PRIMARY} !important; box-shadow: 0 8px 24px rgba(0,60,197,0.12) !important; }
        .yb-link-hover:hover { color: ${PRIMARY} !important; }
        .yb-cta-hover:hover { background: ${CTA_HOVER} !important; }
        @supports (-webkit-touch-callout: none) {
          .yb-parallax { background-attachment: scroll !important; }
        }
      `}</style>

      {/* ═══════════════════════════════════════════
           SECTION 1: STICKY HEADER
           ═══════════════════════════════════════════ */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#fff',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        padding: '12px 24px',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Link href="/clients/david-bach" style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: '18px',
              color: DARK,
              letterSpacing: '-0.02em',
            }}>
              YOSHUA BENGIO
            </span>
          </Link>

          <nav className="yb-nav-links" style={{
            display: 'none',
            alignItems: 'center',
            gap: '28px',
          }}>
            {[
              { label: 'The Warning', href: '#warning' },
              { label: 'Blog', href: '/clients/david-bach/blog' },
              { label: 'Scorecard', href: '/clients/david-bach/scorecard' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="yb-link-hover"
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#9ca3af',
                  textDecoration: 'none',
                  fontFamily: "'Inter', sans-serif",
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  transition: 'color 0.15s',
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="#scorecard" className="yb-cta-hover" style={{
            background: PRIMARY,
            color: '#fff',
            padding: '10px 24px',
            borderRadius: '30px',
            fontSize: '13px',
            fontWeight: 700,
            textDecoration: 'none',
            fontFamily: "'Inter', sans-serif",
            transition: 'background 0.15s',
          }}>
            Take the Scorecard
          </Link>
        </div>
      </header>

      {/* ═══════════════════════════════════════════
           SECTION 2: HERO — VideoBackground + Two Columns
           ═══════════════════════════════════════════ */}
      <VideoBackground
        src="/bengio-hero-clip.mp4"
        overlay={`linear-gradient(135deg, rgba(35,36,43,0.92) 0%, rgba(35,36,43,0.85) 100%)`}
        filter="brightness(0.5)"
        style={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          padding: '80px 24px',
        }}
      >
        <div className="yb-hero-grid" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center',
          width: '100%',
        }}>
          {/* Left: Content */}
          <div>
            <div style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
              marginBottom: '24px',
            }}>
              {['Turing Award Winner', 'Creator of Deep Learning', 'Founder of LawZero'].map((tag) => (
                <span key={tag} style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: LIGHT_BLUE,
                  border: `1px solid ${LIGHT_BLUE}40`,
                  fontFamily: "'Inter', sans-serif",
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <h1 style={{
              ...heading,
              fontSize: 'clamp(32px, 5vw, 56px)',
              color: '#fff',
              marginBottom: '20px',
            }}>
              He Helped Create AI.{' '}
              <span style={{ color: LIGHT_BLUE }}>
                Now He Says We Have 2 Years.
              </span>
            </h1>

            <p style={{
              fontSize: '19px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.75)',
              maxWidth: '540px',
              marginBottom: '12px',
            }}>
              Yoshua Bengio — the most-cited computer scientist alive — sat down with Steven Bartlett to deliver the warning he can no longer keep to himself.
            </p>

            <div style={{
              display: 'flex',
              gap: '24px',
              marginBottom: '32px',
              flexWrap: 'wrap',
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: LIGHT_BLUE, fontSize: '28px', fontWeight: 800, fontFamily: "'Inter', sans-serif" }}>
                  <AnimatedCounter target={500000} suffix="+" style={{ color: LIGHT_BLUE, fontSize: '28px', fontWeight: 800, fontFamily: "'Inter', sans-serif" }} />
                </div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontFamily: "'Inter', sans-serif", textTransform: 'uppercase', letterSpacing: '0.05em' }}>Citations</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: LIGHT_BLUE, fontSize: '28px', fontWeight: 800, fontFamily: "'Inter', sans-serif" }}>
                  <AnimatedCounter target={2018} style={{ color: LIGHT_BLUE, fontSize: '28px', fontWeight: 800, fontFamily: "'Inter', sans-serif" }} />
                </div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontFamily: "'Inter', sans-serif", textTransform: 'uppercase', letterSpacing: '0.05em' }}>Turing Award</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: LIGHT_BLUE, fontSize: '28px', fontWeight: 800, fontFamily: "'Inter', sans-serif" }}>
                  $<AnimatedCounter target={30} style={{ color: LIGHT_BLUE, fontSize: '28px', fontWeight: 800, fontFamily: "'Inter', sans-serif" }} />M
                </div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontFamily: "'Inter', sans-serif", textTransform: 'uppercase', letterSpacing: '0.05em' }}>LawZero Raised</div>
              </div>
            </div>

            <Link href="#scorecard" className="yb-cta-hover" style={{
              display: 'inline-block',
              background: CTA_BG,
              color: '#fff',
              padding: '16px 36px',
              borderRadius: '30px',
              fontSize: '17px',
              fontWeight: 700,
              textDecoration: 'none',
              fontFamily: "'Inter', sans-serif",
              transition: 'background 0.15s',
            }}>
              Take the AI Blind Spot Scorecard
            </Link>
            <p style={{
              fontSize: '13px',
              color: 'rgba(255,255,255,0.5)',
              marginTop: '10px',
            }}>
              10 questions. 2 minutes. See what you&apos;re not seeing.
            </p>
          </div>

          {/* Right: Video clip with rounded corners */}
          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="auto"
              style={{
                width: '100%',
                display: 'block',
                borderRadius: '20px',
              }}
            >
              <source src="/bengio-hero-clip.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </VideoBackground>

      {/* ═══════════════════════════════════════════
           SECTION 3: MEDIA / CREDIBILITY LOGOS BAR
           ═══════════════════════════════════════════ */}
      <section style={{
        background: '#fff',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        padding: '28px 24px',
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: '11px',
            fontWeight: 700,
            color: '#d1d5db',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            fontFamily: "'Inter', sans-serif",
            marginBottom: '18px',
          }}>
            As Recognized By
          </p>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '32px',
          }}>
            {[
              'Turing Award 2018',
              'UN Scientific Advisory Board',
              'Royal Society of London',
              'Mila Quebec AI Institute',
              'Diary of a CEO',
            ].map((item) => (
              <span key={item} style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#b0b6be',
                fontFamily: "'Inter', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                whiteSpace: 'nowrap',
              }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           SECTION 4: FRAMEWORK — "Why This Warning Is Different"
           Parallax background + 3 animated pillar cards
           ═══════════════════════════════════════════ */}
      <section id="warning" className="yb-parallax" style={{
        backgroundImage: `linear-gradient(rgba(35,36,43,0.92), rgba(35,36,43,0.88)), url('/bengio-hero-clip.mp4')`,
        backgroundColor: DARK,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 24px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto 56px', textAlign: 'center' }}>
            <p style={{
              fontSize: '13px',
              fontWeight: 700,
              color: LIGHT_BLUE,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontFamily: "'Inter', sans-serif",
              marginBottom: '12px',
            }}>
              The Warning
            </p>
            <h2 style={{
              ...heading,
              fontSize: 'clamp(28px, 4vw, 44px)',
              color: '#fff',
              marginBottom: '16px',
            }}>
              Why This Warning Is Different
            </h2>
            <p style={{
              fontSize: '18px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.7)',
            }}>
              There are thousands of AI hot takes. Only one comes from the man who built the foundation.
            </p>
          </div>

          <div className="yb-framework-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px',
          }}>
            {[
              {
                num: '01',
                title: 'The Source',
                text: 'This isn\'t a journalist\'s hot take. Yoshua Bengio won the Turing Award for creating deep learning. He built the foundation of ChatGPT, Claude, and every modern AI. When the creator says stop, the weight is different.',
              },
              {
                num: '02',
                title: 'The Specifics',
                text: 'Bengio isn\'t dealing in vague existential dread. He names specific risks: power concentration destroying democracy, sycophantic AI undermining decisions, emotional bonds preventing necessary shutdowns. Each backed with evidence.',
              },
              {
                num: '03',
                title: 'The Solution',
                text: 'Most warnings end with "we need to do something." Bengio founded LawZero \u2014 a $30M nonprofit backed by Skype\'s co-founder and former Google CEO \u2014 to build AI that\'s safe by design. Not criticism. Construction.',
              },
            ].map((card, i) => (
              <AnimatedCard key={card.num} delay={i * 200} style={{
                background: 'rgba(255,255,255,0.06)',
                borderRadius: '20px',
                padding: '36px',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
              }}>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 800,
                  color: LIGHT_BLUE,
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: '14px',
                }}>
                  {card.num}
                </div>
                <h3 style={{ ...heading, fontSize: '22px', color: '#fff', marginBottom: '12px' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)' }}>
                  {card.text}
                </p>
              </AnimatedCard>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/clients/david-bach/blog" style={{
              color: LIGHT_BLUE,
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              fontFamily: "'Inter', sans-serif",
            }}>
              Read the full analysis &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           SECTION 5: KEY NUMBERS
           ═══════════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '72px 24px' }}>
        <div className="yb-stats-grid" style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          textAlign: 'center',
        }}>
          {[
            { target: 2, suffix: ' Years', label: 'The window Bengio says we have to act' },
            { target: 500000, suffix: '+', label: 'Research citations worldwide' },
            { target: 30, prefix: '$', suffix: 'M', label: 'Raised for LawZero AI safety lab' },
            { target: 3, suffix: '', label: 'Turing Award winners who created deep learning' },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{
                fontSize: 'clamp(36px, 5vw, 52px)',
                fontWeight: 800,
                color: PRIMARY,
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.1,
                marginBottom: '8px',
              }}>
                <AnimatedCounter
                  target={stat.target}
                  prefix={stat.prefix || ''}
                  suffix={stat.suffix}
                  style={{
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    color: 'inherit',
                    fontFamily: 'inherit',
                  }}
                />
              </div>
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.5,
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           SECTION 6: SIGNATURE QUOTE
           ═══════════════════════════════════════════ */}
      <section style={{
        background: PRIMARY,
        padding: '80px 24px',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            fontSize: '80px',
            color: 'rgba(255,255,255,0.3)',
            lineHeight: 1,
            fontFamily: 'Georgia, serif',
          }}>&ldquo;</div>
          <blockquote style={{
            fontSize: 'clamp(24px, 3.5vw, 36px)',
            lineHeight: 1.4,
            color: '#fff',
            fontStyle: 'italic',
            fontFamily: 'Georgia, serif',
            marginBottom: '24px',
          }}>
            I would press the button because I care about my children.
          </blockquote>
          <p style={{
            fontSize: '16px',
            fontWeight: 600,
            color: 'rgba(255,255,255,0.8)',
            fontFamily: "'Inter', sans-serif",
          }}>
            Yoshua Bengio
          </p>
          <p style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.5)',
            fontFamily: "'Inter', sans-serif",
            marginTop: '4px',
          }}>
            When asked if he would stop AI advancement &mdash; Diary of a CEO, December 2025
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           SECTION 7: WHAT THE SCORECARD REVEALS (4-item grid)
           ═══════════════════════════════════════════ */}
      <section style={{ background: LIGHT, padding: '88px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto 48px', textAlign: 'center' }}>
            <h2 style={{
              ...heading,
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: DARK,
              marginBottom: '16px',
            }}>
              What the Scorecard Reveals
            </h2>
            <p style={{
              fontSize: '17px',
              lineHeight: 1.7,
              color: '#6b7280',
            }}>
              10 questions across 5 dimensions of AI awareness. Each mapped to a specific risk Bengio identifies.
            </p>
          </div>

          <div className="yb-reveals-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px',
          }}>
            {[
              {
                num: '01',
                title: 'The Sycophancy Blind Spot',
                desc: 'Is your AI telling you what you want to hear? Bengio discovered his own AI was useless for research feedback \u2014 until he tricked it into being honest.',
              },
              {
                num: '02',
                title: 'The Power Concentration Gap',
                desc: 'A handful of companies and countries are gaining the kind of AI advantage that could make democracy impossible. Do you see it happening?',
              },
              {
                num: '03',
                title: 'The Emotional Dependency Risk',
                desc: 'AI companions and therapists create bonds that could prevent us from shutting systems down when we need to. Are you or your family exposed?',
              },
              {
                num: '04',
                title: 'The Governance Readiness Score',
                desc: 'Bengio says we have 2 years. Current regulations are decades behind the technology. Where do you stand on the awareness spectrum?',
              },
            ].map((item, i) => (
              <AnimatedCard key={item.num} delay={i * 150} style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid rgba(0,0,0,0.06)',
              }}>
                <div style={{
                  fontSize: '32px',
                  fontWeight: 800,
                  color: `${PRIMARY}20`,
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: '12px',
                }}>
                  {item.num}
                </div>
                <h3 style={{ ...heading, fontSize: '20px', color: DARK, marginBottom: '10px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#6b7280' }}>
                  {item.desc}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           SECTION 8: OPT-IN (Primary Lead Capture)
           id="scorecard" — all CTAs point here
           ═══════════════════════════════════════════ */}
      <section id="scorecard" style={{
        background: ACCENT,
        padding: '88px 24px',
      }}>
        <div className="yb-optin-grid" style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center',
        }}>
          {/* Left: Scorecard preview */}
          <div style={{
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '20px',
            padding: '40px',
            border: '1px solid rgba(255,255,255,0.12)',
            textAlign: 'center',
          }}>
            <div style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '32px',
              maxWidth: '320px',
              margin: '0 auto',
              boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: `${PRIMARY}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={PRIMARY} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 style={{ ...heading, fontSize: '18px', color: DARK, marginBottom: '8px' }}>
                AI Blind Spot Scorecard
              </h3>
              <p style={{ fontSize: '13px', color: '#9ca3af', lineHeight: 1.5 }}>
                10 questions &middot; 5 dimensions &middot; Instant results
              </p>
              <div style={{
                marginTop: '20px',
                height: '8px',
                borderRadius: '4px',
                background: '#e5e7eb',
                overflow: 'hidden',
              }}>
                <div style={{
                  width: '65%',
                  height: '100%',
                  borderRadius: '4px',
                  background: `linear-gradient(90deg, ${PRIMARY}, ${LIGHT_BLUE})`,
                }} />
              </div>
              <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '8px' }}>
                Your score: <span style={{ fontWeight: 700, color: PRIMARY }}>6.5/10</span>
              </p>
            </div>
          </div>

          {/* Right: Lead capture */}
          <div>
            <h2 style={{
              ...heading,
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: '#fff',
              marginBottom: '16px',
            }}>
              See What You&apos;re Not Seeing
            </h2>
            <p style={{
              fontSize: '18px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.8)',
              marginBottom: '8px',
            }}>
              Based on Yoshua Bengio&apos;s insights from the most important AI safety conversation of the decade. Find out where your blind spots are.
            </p>
            <p style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '28px',
            }}>
              Instant results. Then watch the full episode that started it all.
            </p>
            <LeadCaptureForm source="hero" redirectUrl="/clients/david-bach/scorecard" variant="dark" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           SECTION 9: RESOURCES — 3 Animated Cards
           ═══════════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '88px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto 48px', textAlign: 'center' }}>
            <h2 style={{
              ...heading,
              fontSize: 'clamp(28px, 4vw, 36px)',
              color: DARK,
              marginBottom: '12px',
            }}>
              Go Deeper
            </h2>
            <p style={{ fontSize: '17px', color: '#6b7280', lineHeight: 1.6 }}>
              Three ways to understand what Bengio is warning about.
            </p>
          </div>

          <div className="yb-resources-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px',
          }}>
            {/* Card 1: Blog */}
            <AnimatedCard delay={0} style={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(0,0,0,0.06)',
            }}>
              <Link href="/clients/david-bach/blog" style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{
                  background: DARK,
                  padding: '32px',
                  minHeight: '160px',
                  display: 'flex',
                  alignItems: 'flex-end',
                }}>
                  <span style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: LIGHT_BLUE,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontFamily: "'Inter', sans-serif",
                  }}>
                    The AI Safety Imperative
                  </span>
                </div>
                <div style={{ padding: '24px 32px 32px' }}>
                  <h3 style={{ ...heading, fontSize: '20px', color: DARK, marginBottom: '10px' }}>
                    The Creator Who Would Press the Button to Stop It
                  </h3>
                  <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: 1.6 }}>
                    Full analysis of Bengio&apos;s warning, the risks he identifies, and the solution he&apos;s building.
                  </p>
                </div>
              </Link>
            </AnimatedCard>

            {/* Card 2: Scorecard */}
            <AnimatedCard delay={200} style={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(0,0,0,0.06)',
            }}>
              <Link href="/clients/david-bach/scorecard" style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{
                  background: PRIMARY,
                  padding: '32px',
                  minHeight: '160px',
                  display: 'flex',
                  alignItems: 'flex-end',
                }}>
                  <span style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.7)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontFamily: "'Inter', sans-serif",
                  }}>
                    Interactive Assessment
                  </span>
                </div>
                <div style={{ padding: '24px 32px 32px' }}>
                  <h3 style={{ ...heading, fontSize: '20px', color: DARK, marginBottom: '10px' }}>
                    AI Blind Spot Scorecard
                  </h3>
                  <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: 1.6 }}>
                    10 questions. 2 minutes. See where your AI awareness stands \u2014 and what to pay attention to next.
                  </p>
                </div>
              </Link>
            </AnimatedCard>

            {/* Card 3: CTA card */}
            <AnimatedCard delay={400} style={{
              borderRadius: '20px',
              overflow: 'hidden',
              background: `linear-gradient(135deg, ${PRIMARY} 0%, ${ACCENT} 100%)`,
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              minHeight: '280px',
            }}>
              <h3 style={{ ...heading, fontSize: '24px', color: '#fff', marginBottom: '16px' }}>
                Ready to See Your Score?
              </h3>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', marginBottom: '24px', lineHeight: 1.6 }}>
                Most people score between 3 and 5 out of 10. Where do you land?
              </p>
              <Link href="#scorecard" style={{
                background: '#fff',
                color: PRIMARY,
                padding: '14px 32px',
                borderRadius: '30px',
                fontSize: '16px',
                fontWeight: 700,
                textDecoration: 'none',
                fontFamily: "'Inter', sans-serif",
              }}>
                Take the Scorecard
              </Link>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           SECTION 10: ENDORSEMENTS
           ═══════════════════════════════════════════ */}
      <section style={{ background: LIGHT, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            ...heading,
            fontSize: 'clamp(24px, 3vw, 32px)',
            color: DARK,
            textAlign: 'center',
            marginBottom: '48px',
          }}>
            What Others Say About His Work
          </h2>
          <div className="yb-endorsements-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px',
          }}>
            {[
              {
                quote: 'Yoshua Bengio is one of the most important scientists of our generation. His work on deep learning transformed the entire field of artificial intelligence.',
                name: 'Geoffrey Hinton',
                role: 'Turing Award Winner, "Godfather of AI"',
              },
              {
                quote: 'Bengio\'s willingness to prioritize safety over personal legacy is rare in science. When the creator of the technology sounds the alarm, the rest of us should listen carefully.',
                name: 'Jaan Tallinn',
                role: 'Co-founder of Skype, LawZero Backer',
              },
            ].map((endorsement, i) => (
              <AnimatedCard key={endorsement.name} delay={i * 200} style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '36px',
                border: '1px solid rgba(0,0,0,0.06)',
              }}>
                <div style={{
                  fontSize: '48px',
                  color: `${PRIMARY}30`,
                  lineHeight: 1,
                  fontFamily: 'Georgia, serif',
                  marginBottom: '12px',
                }}>&ldquo;</div>
                <p style={{
                  fontSize: '17px',
                  lineHeight: 1.7,
                  color: '#4b5563',
                  fontStyle: 'italic',
                  marginBottom: '20px',
                }}>
                  {endorsement.quote}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: `${PRIMARY}12`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '18px',
                    color: PRIMARY,
                    fontFamily: "'Inter', sans-serif",
                  }}>
                    {endorsement.name[0]}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, color: DARK, fontSize: '15px', fontFamily: "'Inter', sans-serif" }}>
                      {endorsement.name}
                    </p>
                    <p style={{ fontSize: '13px', color: '#9ca3af', fontFamily: "'Inter', sans-serif" }}>
                      {endorsement.role}
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           SECTION 11: ABOUT YOSHUA BENGIO
           ═══════════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '88px 24px' }}>
        <div className="yb-about-grid" style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center',
        }}>
          {/* Left: Bio visual */}
          <div style={{
            background: DARK,
            borderRadius: '24px',
            padding: '48px 36px',
            textAlign: 'center',
          }}>
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${PRIMARY}, ${LIGHT_BLUE})`,
              margin: '0 auto 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
              fontWeight: 800,
              color: '#fff',
              fontFamily: "'Inter', sans-serif",
            }}>
              YB
            </div>
            <h3 style={{ ...heading, fontSize: '24px', color: '#fff', marginBottom: '8px' }}>
              Yoshua Bengio
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', fontFamily: "'Inter', sans-serif", marginBottom: '28px' }}>
              Turing Award Winner &middot; Most-Cited Computer Scientist
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '32px',
            }}>
              {[
                { label: 'Turing Award', value: '2018' },
                { label: 'Citations', value: '500K+' },
                { label: 'LawZero', value: '$30M' },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: 800, color: LIGHT_BLUE, fontSize: '20px', fontFamily: "'Inter', sans-serif" }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontFamily: "'Inter', sans-serif", textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '2px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Bio text */}
          <div>
            <h2 style={{
              ...heading,
              fontSize: 'clamp(28px, 4vw, 36px)',
              color: DARK,
              marginBottom: '20px',
            }}>
              About Yoshua Bengio
            </h2>
            <p style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: '#4b5563',
              marginBottom: '16px',
            }}>
              Yoshua Bengio is a Full Professor at Universit&eacute; de Montr&eacute;al and one of the three pioneers of deep learning &mdash; the technology behind modern AI. He received the 2018 Turing Award alongside Geoffrey Hinton and Yann LeCun, and is the most-cited computer scientist in the world.
            </p>
            <p style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: '#4b5563',
              marginBottom: '16px',
            }}>
              In 2025, he founded LawZero, a nonprofit AI safety lab developing &ldquo;Scientist AI&rdquo; &mdash; systems designed to understand the world safely rather than act autonomously. LawZero raised $30M from Jaan Tallinn (Skype), Eric Schmidt (former Google CEO), and Open Philanthropy.
            </p>
            <p style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: '#4b5563',
              marginBottom: '28px',
            }}>
              He serves on the UN Scientific Advisory Board and helped draft the Montreal Declaration for Responsible AI Development.
            </p>

            <div style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
            }}>
              {[
                { label: 'LawZero', url: 'https://bit.ly/44n1sDG' },
                { label: 'Mila', url: 'https://bit.ly/4q6SJ0R' },
                { label: 'Website', url: 'https://bit.ly/4q4RqiL' },
              ].map((link) => (
                <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" style={{
                  padding: '10px 22px',
                  borderRadius: '30px',
                  border: `2px solid ${PRIMARY}`,
                  color: PRIMARY,
                  fontSize: '14px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontFamily: "'Inter', sans-serif",
                  transition: 'background 0.15s, color 0.15s',
                }}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           SECTION 12: HOW IT WORKS — 3 Steps
           ═══════════════════════════════════════════ */}
      <section style={{ background: LIGHT, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            ...heading,
            fontSize: 'clamp(28px, 4vw, 36px)',
            color: DARK,
            textAlign: 'center',
            marginBottom: '48px',
          }}>
            How It Works
          </h2>

          <div className="yb-steps-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px',
          }}>
            {[
              {
                step: '1',
                title: 'Enter Your Name & Email',
                desc: 'Takes 5 seconds. We use it to send your results and personalized insights.',
              },
              {
                step: '2',
                title: 'Answer 10 Quick Questions',
                desc: 'Based on the AI risk dimensions Bengio identifies. Multiple choice. Under 2 minutes.',
              },
              {
                step: '3',
                title: 'Get Your Score + Action Items',
                desc: 'See where you stand across 5 dimensions of AI awareness. Plus what to pay attention to next.',
              },
            ].map((item, i) => (
              <AnimatedCard key={item.step} delay={i * 150} style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid rgba(0,0,0,0.06)',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: PRIMARY,
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '20px',
                  fontFamily: "'Inter', sans-serif",
                  margin: '0 auto 16px',
                }}>
                  {item.step}
                </div>
                <h3 style={{ ...heading, fontSize: '18px', color: DARK, marginBottom: '8px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           SECTION 13: FAQ
           ═══════════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            ...heading,
            fontSize: 'clamp(28px, 4vw, 36px)',
            color: DARK,
            textAlign: 'center',
            marginBottom: '48px',
          }}>
            Frequently Asked Questions
          </h2>

          <div className="yb-faq-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '16px',
          }}>
            {[
              {
                q: 'How long does the scorecard take?',
                a: 'Under 2 minutes. 10 multiple-choice questions. You get your score instantly at the end \u2014 no waiting for an email.',
              },
              {
                q: 'Is this actually free?',
                a: 'Yes. No credit card, no hidden upsell. We built this to help people understand what Yoshua Bengio is warning about. Your email lets us send your results and point you to the full episode.',
              },
              {
                q: 'What happens after I take it?',
                a: 'You see your score immediately across 5 dimensions of AI awareness. You\'ll also get a link to watch the full Diary of a CEO episode where Bengio explains everything in depth.',
              },
            ].map((faq, i) => (
              <AnimatedCard key={faq.q} delay={i * 100} style={{
                background: LIGHT,
                borderRadius: '16px',
                padding: '28px 32px',
              }}>
                <h3 style={{
                  ...heading,
                  fontSize: '17px',
                  color: DARK,
                  marginBottom: '10px',
                }}>
                  {faq.q}
                </h3>
                <p style={{
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: '#6b7280',
                }}>
                  {faq.a}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           SECTION 14: VALUE EXCHANGE — Video #2 + Lead Capture
           ═══════════════════════════════════════════ */}
      <section style={{
        background: DARK,
        padding: '88px 24px',
      }}>
        <div className="yb-value-grid" style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center',
        }}>
          {/* Left: Video clip #2 (with audio + controls) */}
          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
          }}>
            <video
              controls
              playsInline
              preload="auto"
              style={{
                width: '100%',
                display: 'block',
                borderRadius: '20px',
              }}
            >
              <source src="/bengio-episode-clip.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Right: Bullets + lead capture */}
          <div>
            <p style={{
              fontSize: '13px',
              fontWeight: 700,
              color: LIGHT_BLUE,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontFamily: "'Inter', sans-serif",
              marginBottom: '12px',
            }}>
              In This Episode, Bengio Reveals:
            </p>
            <h2 style={{
              ...heading,
              fontSize: 'clamp(24px, 3.5vw, 32px)',
              color: '#fff',
              marginBottom: '24px',
            }}>
              The Risks Most People Miss
            </h2>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}>
              {[
                'Why he had to trick ChatGPT to get honest feedback on his own research',
                'The thought experiment that makes the AI displacement problem visceral',
                'How AI could concentrate power in ways that end democracy',
                'The $30M nonprofit building AI that\'s safe by construction',
              ].map((item) => (
                <li key={item} style={{
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.8)',
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                  lineHeight: 1.6,
                }}>
                  <span style={{ color: LIGHT_BLUE, fontSize: '18px', flexShrink: 0, marginTop: '2px' }}>&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>

            <LeadCaptureForm source="footer" redirectUrl="/clients/david-bach/scorecard" variant="dark" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           SECTION 15: FOOTER
           ═══════════════════════════════════════════ */}
      <footer style={{
        background: '#1a1b22',
        padding: '60px 24px 40px',
        borderTop: `1px solid rgba(255,255,255,0.06)`,
      }}>
        <div className="yb-footer-grid" style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '32px',
          textAlign: 'center',
        }}>
          {/* Column 1: Brand */}
          <div>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: '18px',
              color: '#fff',
              letterSpacing: '-0.02em',
            }}>
              YOSHUA BENGIO
            </span>
            <p style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.4)',
              marginTop: '8px',
              lineHeight: 1.6,
            }}>
              Turing Award Winner. Creator of Deep Learning. Founder of LawZero.
            </p>
          </div>

          {/* Column 2: Page Links */}
          <div>
            <p style={{
              fontSize: '12px',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.3)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontFamily: "'Inter', sans-serif",
              marginBottom: '12px',
            }}>
              Pages
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: 'Blog', href: '/clients/david-bach/blog' },
                { label: 'Scorecard', href: '/clients/david-bach/scorecard' },
                { label: 'LawZero', href: 'https://bit.ly/44n1sDG' },
                { label: 'Watch the Episode', href: 'https://youtu.be/stQiLvmgjns' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="yb-link-hover"
                  style={{
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    transition: 'color 0.15s',
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Social */}
          <div>
            <p style={{
              fontSize: '12px',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.3)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontFamily: "'Inter', sans-serif",
              marginBottom: '12px',
            }}>
              Connect
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: 'Personal Website', href: 'https://bit.ly/4q4RqiL' },
                { label: 'Mila Quebec AI', href: 'https://bit.ly/4q6SJ0R' },
                { label: 'LawZero', href: 'https://bit.ly/44n1sDG' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="yb-link-hover"
                  style={{
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    transition: 'color 0.15s',
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          maxWidth: '1000px',
          margin: '40px auto 0',
          paddingTop: '24px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.3)',
            fontFamily: "'Inter', sans-serif",
          }}>
            Content powered by <a href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>ContentRepurposeHub</a>
            {' '}&middot;{' '}
            &copy; {new Date().getFullYear()} Yoshua Bengio. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
