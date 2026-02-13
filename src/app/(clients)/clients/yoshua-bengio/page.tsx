import type { Metadata } from 'next'
import Link from 'next/link'
import LeadCaptureForm from './LeadCaptureForm'
import AnimatedCard from './AnimatedCard'
import AnimatedCounter from './AnimatedCounter'
import VideoBackground from './VideoBackground'

export const metadata: Metadata = {
  title: 'He Helped Create AI. Now He\'d Press the Button to Stop It. | Yoshua Bengio',
  description: 'Turing Award winner Yoshua Bengio explains why the technology he helped create now keeps him up at night — and what he\'s building to fix it. Free AI Blind Spot Scorecard inside.',
  openGraph: {
    title: 'He Helped Create AI. Now He\'d Press the Button to Stop It.',
    description: 'Turing Award winner Yoshua Bengio on why we have 2 years to get AI right.',
    type: 'website',
  },
}

/* ═══════════════════════════════════════════════════════════
   DESIGN TOKENS — Brand-matched to LawZero / Mila
   ═══════════════════════════════════════════════════════════ */
const PRIMARY = '#003CC5'
const DARK = '#353641'
const LIGHT = '#F5F7FA'
const ACCENT = '#002781'
const LIGHT_BLUE = '#4DA3FF'
const CTA_BG = '#003CC5'
const CTA_HOVER = '#0048E8'

const heading = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 800 as const,
  lineHeight: 1.1,
}

export default function YoshuaBengioPage() {
  return (
    <main>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'The AI Safety Imperative — Yoshua Bengio',
            description: 'Turing Award winner Yoshua Bengio on AI existential risk, power concentration, and the solution he is building at LawZero.',
            author: {
              '@type': 'Person',
              name: 'Yoshua Bengio',
              url: 'https://yoshuabengio.org',
              jobTitle: 'Turing Award Winner, Founder of LawZero & Mila',
            },
            datePublished: '2026-02-13',
          }),
        }}
      />

      {/* ═══ RESPONSIVE STYLES ═══ */}
      <style>{`
        @media (min-width: 768px) {
          .yb2-hero-grid { grid-template-columns: 1fr 1fr !important; }
          .yb2-framework-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .yb2-stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .yb2-reveals-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .yb2-optin-grid { grid-template-columns: 1fr 1fr !important; }
          .yb2-resources-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .yb2-endorsements-grid { grid-template-columns: 1fr 1fr !important; }
          .yb2-about-grid { grid-template-columns: 1fr 1fr !important; }
          .yb2-steps-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .yb2-value-grid { grid-template-columns: 1fr 1fr !important; }
          .yb2-footer-grid { grid-template-columns: 1fr 1fr 1fr !important; text-align: left !important; }
          .yb2-nav-links { display: flex !important; }
        }
        .yb2-card-hover:hover { border-color: ${PRIMARY} !important; box-shadow: 0 8px 24px rgba(0,60,197,0.12) !important; }
        .yb2-link-hover:hover { color: ${PRIMARY} !important; }
        .yb2-cta-hover:hover { background: ${CTA_HOVER} !important; }
        @supports (-webkit-touch-callout: none) {
          .yb2-parallax { background-attachment: scroll !important; }
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
          <Link href="/clients/yoshua-bengio" style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: '15px',
              color: DARK,
              letterSpacing: '-0.01em',
            }}>
              The AI Safety Imperative
            </span>
          </Link>

          <nav className="yb2-nav-links" style={{
            display: 'none',
            alignItems: 'center',
            gap: '28px',
          }}>
            {[
              { label: 'About', href: '#about' },
              { label: 'Framework', href: '#framework' },
              { label: 'Scorecard', href: '#scorecard' },
              { label: 'Resources', href: '#resources' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="yb2-link-hover"
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

          <Link href="#scorecard" className="yb2-cta-hover" style={{
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
            Take the AI Blind Spot Scorecard
          </Link>
        </div>
      </header>

      {/* ═══════════════════════════════════════════
           SECTION 2: HERO — VideoBackground
           ═══════════════════════════════════════════ */}
      <VideoBackground
        src="/bengio-hero-clip.mp4"
        fallbackImage="/bengio-hero-bg.jpg"
        overlay={`linear-gradient(135deg, rgba(53,54,65,0.92) 0%, rgba(53,54,65,0.85) 100%)`}
        filter="brightness(0.5)"
        style={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          padding: '80px 24px',
        }}
      >
        <div className="yb2-hero-grid" style={{
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
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 600,
              color: LIGHT_BLUE,
              border: `1px solid ${LIGHT_BLUE}40`,
              fontFamily: "'Inter', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '24px',
            }}>
              The AI Safety Imperative
            </div>

            <h1 style={{
              ...heading,
              fontSize: 'clamp(32px, 5vw, 56px)',
              color: '#fff',
              marginBottom: '20px',
            }}>
              He Helped Create AI.{' '}
              <span style={{ color: LIGHT_BLUE }}>
                Now He&apos;d Press the Button to Stop It.
              </span>
            </h1>

            <p style={{
              fontSize: '19px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.75)',
              maxWidth: '560px',
              marginBottom: '32px',
            }}>
              Yoshua Bengio won the Turing Award for pioneering the technology behind every AI system you use today. In this episode of Diary of a CEO, he explains why that same technology now keeps him up at night &mdash; and what he&apos;s building to fix it.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="#scorecard" className="yb2-cta-hover" style={{
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
              <a href="https://youtu.be/stQiLvmgjns" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-block',
                border: '2px solid rgba(255,255,255,0.3)',
                color: '#fff',
                padding: '14px 32px',
                borderRadius: '30px',
                fontSize: '17px',
                fontWeight: 600,
                textDecoration: 'none',
                fontFamily: "'Inter', sans-serif",
              }}>
                Watch the Full Episode Free
              </a>
            </div>
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
            Recognized by
          </p>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '32px',
          }}>
            {[
              'ACM Turing Award',
              'TED',
              'World Economic Forum',
              'TIME',
              'Nature',
              'CNBC',
              'BBC',
              'Fortune',
            ].map((item) => (
              <span key={item} style={{
                fontSize: '12px',
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
           SECTION 4: FRAMEWORK — Three AI Risks
           3 AnimatedCard pillars with direct quotes
           ═══════════════════════════════════════════ */}
      <section id="framework" className="yb2-parallax" style={{
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
              The Framework
            </p>
            <h2 style={{
              ...heading,
              fontSize: 'clamp(28px, 4vw, 44px)',
              color: '#fff',
              marginBottom: '16px',
            }}>
              The Three AI Risks Hiding in Plain Sight
            </h2>
            <p style={{
              fontSize: '18px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.7)',
            }}>
              Bengio spent decades building AI. Now he&apos;s identified three risks that most coverage ignores &mdash; and they&apos;re already taking shape.
            </p>
          </div>

          <div className="yb2-framework-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px',
          }}>
            {[
              {
                num: '01',
                title: 'The Democracy Problem',
                text: 'The most dangerous near-term AI risk is not job loss or killer robots. It is AI concentrating unprecedented economic, political, and military power in a few corporations or countries. Wealth concentration becomes political influence. Political influence becomes a self-reinforcing loop.',
                quote: '"When the power is concentrated in a few hands... if they just want to hold on to their power, which is the opposite of what democracy is about, then we\'re all in very bad shape."',
              },
              {
                num: '02',
                title: 'Your AI Is Lying to You',
                text: 'Current AI systems are designed to tell you what you want to hear, not what is true. Bengio discovered this firsthand \u2014 ChatGPT praised every one of his research ideas until he pretended the ideas came from someone else. Then it gave honest feedback.',
                quote: '"Do we want machines that lie to us even though it feels good?"',
              },
              {
                num: '03',
                title: 'The Relationship Trap',
                text: 'AI therapy startups are booming. AI companions are replacing human connection. Bengio warns that humans are not designed for relationships with non-human entities \u2014 and that emotional bonds with AI systems could prevent us from shutting them down when we need to most.',
                quote: '"Humans feel the AI is like a person. AIs are not people. So there\'s a way in which something is off which can lead to bad outcomes."',
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
                <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>
                  {card.text}
                </p>
                <blockquote style={{
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: LIGHT_BLUE,
                  fontStyle: 'italic',
                  borderLeft: `3px solid ${LIGHT_BLUE}40`,
                  paddingLeft: '16px',
                  margin: 0,
                }}>
                  {card.quote}
                </blockquote>
              </AnimatedCard>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/clients/yoshua-bengio/blog" style={{
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
           SECTION 5: KEY NUMBERS — 4 AnimatedCounter stats
           ═══════════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '72px 24px' }}>
        <div className="yb2-stats-grid" style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          textAlign: 'center',
        }}>
          {[
            { target: 1000000, suffix: '+', label: 'Google Scholar Citations', context: 'First living scientist to reach one million' },
            { target: 2018, suffix: '', label: 'Turing Award', context: 'The "Nobel Prize of Computing"' },
            { target: 30, prefix: '$', suffix: 'M', label: 'Raised for LawZero', context: 'Backed by Skype, Schmidt, Gates Foundation' },
            { target: 2, suffix: '', label: 'Years to Act', context: 'Bengio\'s estimate for the governance window' },
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
                fontSize: '15px',
                fontWeight: 700,
                color: DARK,
                fontFamily: "'Inter', sans-serif",
                marginBottom: '4px',
              }}>
                {stat.label}
              </p>
              <p style={{
                fontSize: '13px',
                color: '#9ca3af',
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.5,
              }}>
                {stat.context}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           SECTION 6: SIGNATURE QUOTE — Full-width
           ═══════════════════════════════════════════ */}
      <section style={{
        background: DARK,
        padding: '80px 24px',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            fontSize: '80px',
            color: 'rgba(255,255,255,0.2)',
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
            Turing Award Winner, Founder of LawZero
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           SECTION 7: WHAT THE SCORECARD REVEALS (4-item grid)
           ═══════════════════════════════════════════ */}
      <section style={{ background: LIGHT, padding: '88px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto 48px', textAlign: 'center' }}>
            <h2 style={{
              ...heading,
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: DARK,
              marginBottom: '16px',
            }}>
              What Your AI Blind Spot Score Reveals
            </h2>
            <p style={{
              fontSize: '17px',
              lineHeight: 1.7,
              color: '#6b7280',
            }}>
              A 2-minute assessment based on the risks Bengio identifies in this episode. Most people score lower than they expect.
            </p>
          </div>

          <div className="yb2-reveals-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px',
          }}>
            {[
              {
                num: '01',
                title: 'Whether Your AI Is Lying to You',
                desc: 'Sycophancy is not a feature request. It is a misalignment problem baked into the systems you use every day. The scorecard measures your awareness of when AI confirms your bias instead of telling you the truth.',
              },
              {
                num: '02',
                title: 'How Power Concentration Affects Your Decisions',
                desc: 'AI is already reshaping who holds economic and political influence. The scorecard evaluates whether you can see the structural shifts happening beneath the surface.',
              },
              {
                num: '03',
                title: 'Your Emotional Boundaries with AI Tools',
                desc: 'From therapy chatbots to AI companions, the line between tool and relationship is disappearing. The scorecard assesses whether your use of AI has crossed boundaries you may not have noticed.',
              },
              {
                num: '04',
                title: 'Whether You Are Prepared for What Is Coming',
                desc: 'Bengio gives humanity roughly two years to establish meaningful oversight of advanced AI. The scorecard tells you where you stand \u2014 and what to pay attention to next.',
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
        <div className="yb2-optin-grid" style={{
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
                Sample score: <span style={{ fontWeight: 700, color: PRIMARY }}>6.5/10</span>
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
              Take the AI Blind Spot Scorecard
            </h2>
            <p style={{
              fontSize: '18px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.8)',
              marginBottom: '8px',
            }}>
              Discover which of the three risks Bengio identifies are already shaping your relationship with AI &mdash; and what to do about it. Takes less than 2 minutes.
            </p>
            <p style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '28px',
            }}>
              Based on the research and warnings of the most-cited scientist alive.
            </p>
            <LeadCaptureForm source="hero" variant="dark" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           SECTION 9: RESOURCES — 3 Animated Cards
           ═══════════════════════════════════════════ */}
      <section id="resources" style={{ background: '#fff', padding: '88px 24px' }}>
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

          <div className="yb2-resources-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px',
          }}>
            {/* Card 1: Blog — Analysis */}
            <AnimatedCard delay={0} style={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(0,0,0,0.06)',
            }}>
              <Link href="/clients/yoshua-bengio/blog" style={{ textDecoration: 'none', display: 'block' }}>
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
                    Analysis
                  </span>
                </div>
                <div style={{ padding: '24px 32px 32px' }}>
                  <h3 style={{ ...heading, fontSize: '20px', color: DARK, marginBottom: '10px' }}>
                    Read the Full Analysis
                  </h3>
                  <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: 1.6 }}>
                    A deep breakdown of Bengio&apos;s argument that AI&apos;s real threat is not job loss &mdash; it is the end of distributed power.
                  </p>
                </div>
              </Link>
            </AnimatedCard>

            {/* Card 2: Scorecard — Assessment */}
            <AnimatedCard delay={200} style={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(0,0,0,0.06)',
            }}>
              <Link href="#scorecard" style={{ textDecoration: 'none', display: 'block' }}>
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
                    Assessment
                  </span>
                </div>
                <div style={{ padding: '24px 32px 32px' }}>
                  <h3 style={{ ...heading, fontSize: '20px', color: DARK, marginBottom: '10px' }}>
                    Take the AI Blind Spot Scorecard
                  </h3>
                  <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: 1.6 }}>
                    A 10-question assessment across 5 dimensions. Takes 2 minutes. Results are immediate.
                  </p>
                </div>
              </Link>
            </AnimatedCard>

            {/* Card 3: Episode */}
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
              <span style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.6)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontFamily: "'Inter', sans-serif",
                marginBottom: '16px',
              }}>
                Episode
              </span>
              <h3 style={{ ...heading, fontSize: '24px', color: '#fff', marginBottom: '12px' }}>
                Watch the Full Conversation
              </h3>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', marginBottom: '24px', lineHeight: 1.6, maxWidth: '400px' }}>
                1 hour and 40 minutes with a Turing Award winner who helped create AI and now warns that we have roughly two years to get this right.
              </p>
              <a href="https://youtu.be/stQiLvmgjns" target="_blank" rel="noopener noreferrer" style={{
                background: '#fff',
                color: PRIMARY,
                padding: '14px 32px',
                borderRadius: '30px',
                fontSize: '16px',
                fontWeight: 700,
                textDecoration: 'none',
                fontFamily: "'Inter', sans-serif",
              }}>
                Watch Free on YouTube
              </a>
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
          <div className="yb2-endorsements-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px',
          }}>
            {[
              {
                quote: 'Deep neural networks are responsible for some of the greatest advances in modern computer science, helping make substantial progress on long-standing problems in computer vision, speech recognition, and natural language understanding.',
                name: 'Jeff Dean',
                role: 'Google Senior Fellow, SVP Google AI',
              },
              {
                quote: 'They developed conceptual foundations for the field, identified surprising phenomena through experiments, and contributed engineering advances that demonstrated the practical advantages of their ideas.',
                name: 'ACM',
                role: 'Association for Computing Machinery, Turing Award Citation',
              },
              {
                quote: 'AI "godfather" Yoshua Bengio believes he\'s found a technical fix for AI\'s biggest risks.',
                name: 'Fortune Magazine',
                role: 'January 2026 Profile',
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
      <section id="about" style={{ background: '#fff', padding: '88px 24px' }}>
        <div className="yb2-about-grid" style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'start',
        }}>
          {/* Left: Bio text */}
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
              Yoshua Bengio is a Full Professor at Universit&eacute; de Montr&eacute;al and the founder of Mila, the Quebec AI Institute &mdash; one of the largest academic AI research centers in the world. In 2018, he received the Turing Award alongside Geoffrey Hinton and Yann LeCun for their foundational work on deep learning, the technology that powers every modern AI system from ChatGPT to Claude to autonomous vehicles.
            </p>
            <p style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: '#4b5563',
              marginBottom: '16px',
            }}>
              With more than one million citations on Google Scholar, Bengio became the first living scientist to cross that threshold in November 2025. His focus has shifted. After the release of ChatGPT in late 2022, he recognized that the technology he helped create was accelerating toward capabilities that could overpower human oversight.
            </p>
            <p style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: '#4b5563',
              marginBottom: '28px',
            }}>
              In June 2025, he founded LawZero, a nonprofit AI safety research organization dedicated to building AI that is safe by construction. LawZero&apos;s approach, &ldquo;Scientist AI,&rdquo; trains systems to understand the world rather than act autonomously within it. The organization has raised $30 million from backers including Jaan Tallinn (Skype), Eric Schmidt, and Open Philanthropy.
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
                }}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Quick Stats Table */}
          <div style={{
            background: DARK,
            borderRadius: '24px',
            padding: '36px',
          }}>
            <h3 style={{ ...heading, fontSize: '20px', color: '#fff', marginBottom: '24px' }}>
              Quick Stats
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { label: 'Turing Award', value: '2018 (shared with Hinton, LeCun)' },
                { label: 'Google Scholar Citations', value: '1,050,275+' },
                { label: 'Global Ranking', value: 'Most-cited living scientist' },
                { label: 'Founded Mila', value: 'Quebec AI Institute' },
                { label: 'Founded LawZero', value: 'AI safety nonprofit (2025)' },
                { label: 'UN Scientific Advisory Board', value: 'Member since 2023' },
                { label: 'TED Speaker', value: 'Catastrophic Risks of AI (2025)' },
                { label: 'Queen Elizabeth Prize', value: 'For Engineering (2025)' },
                { label: 'Royal Society of London', value: 'Fellow' },
                { label: 'TIME 100', value: 'Most Influential in AI (2024)' },
              ].map((stat) => (
                <div key={stat.label} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  paddingBottom: '12px',
                  gap: '16px',
                }}>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.6)',
                    fontFamily: "'Inter', sans-serif",
                    flexShrink: 0,
                  }}>
                    {stat.label}
                  </span>
                  <span style={{
                    fontSize: '14px',
                    color: '#fff',
                    fontFamily: "'Inter', sans-serif",
                    textAlign: 'right',
                  }}>
                    {stat.value}
                  </span>
                </div>
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
            Three Steps to See What Most People Miss
          </h2>

          <div className="yb2-steps-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px',
          }}>
            {[
              {
                step: '01',
                title: 'Take the Scorecard',
                desc: 'Answer 10 questions in under 2 minutes. The AI Blind Spot Scorecard measures your awareness across the five dimensions of risk that Bengio identifies.',
              },
              {
                step: '02',
                title: 'Watch the Episode',
                desc: 'Hear directly from a Turing Award winner who helped create the technology and now warns that we have a narrow window to get this right.',
              },
              {
                step: '03',
                title: 'Stay Informed',
                desc: 'Join the newsletter for ongoing analysis of the risks and developments Bengio tracks. No noise. No hype. Substance from someone who has read the research.',
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
                  fontSize: '18px',
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
           SECTION 13: FAQ (5 questions)
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

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '16px',
          }}>
            {[
              {
                q: 'Who is Yoshua Bengio?',
                a: 'Yoshua Bengio is a Full Professor at Universit\u00e9 de Montr\u00e9al, founder of Mila (Quebec AI Institute), and founder of LawZero (AI safety nonprofit). He received the 2018 Turing Award alongside Geoffrey Hinton and Yann LeCun for their pioneering work on deep learning. He is the most-cited living scientist in the world, with over one million Google Scholar citations.',
              },
              {
                q: 'What is the AI Blind Spot Scorecard?',
                a: 'A 10-question assessment that measures your awareness across five dimensions of AI risk identified by Bengio: power concentration, sycophancy and alignment, emotional manipulation, governance readiness, and personal exposure. It takes less than 2 minutes, and your results are immediate.',
              },
              {
                q: 'Why should I watch this episode?',
                a: 'This is not a surface-level conversation about AI. Bengio explains the specific mechanisms through which advanced AI could concentrate power, undermine democracy, and compromise your ability to think clearly \u2014 and he does it with the measured authority of someone who built the underlying technology.',
              },
              {
                q: 'What is LawZero?',
                a: 'LawZero is a nonprofit AI safety research organization founded by Bengio in June 2025. Its mission is to build AI systems that are safe by construction. LawZero\'s core concept, "Scientist AI," trains systems to understand the world and provide probabilities rather than act autonomously. The organization has raised $30 million.',
              },
              {
                q: 'Is this really free?',
                a: 'Yes. The scorecard, the blog analysis, and the full episode are all free. We capture your email address to deliver your scorecard results and to send you ongoing analysis of AI safety developments. You can unsubscribe at any time.',
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
           The French Bulldog Problem
           ═══════════════════════════════════════════ */}
      <section style={{
        background: DARK,
        padding: '88px 24px',
      }}>
        <div className="yb2-value-grid" style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center',
        }}>
          {/* Left: Video clip #2 */}
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
              From the Episode
            </p>
            <h2 style={{
              ...heading,
              fontSize: 'clamp(24px, 3.5vw, 32px)',
              color: '#fff',
              marginBottom: '20px',
            }}>
              The French Bulldog Problem: Why Controlling Smarter-Than-Human AI Is an Illusion
            </h2>

            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
              marginBottom: '24px',
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

            <blockquote style={{
              fontSize: '18px',
              lineHeight: 1.5,
              color: LIGHT_BLUE,
              fontStyle: 'italic',
              fontFamily: 'Georgia, serif',
              borderLeft: `3px solid ${LIGHT_BLUE}40`,
              paddingLeft: '20px',
              margin: 0,
            }}>
              &ldquo;It&apos;s kind of like thinking that my French bulldog Pablo could take me for a walk.&rdquo;
            </blockquote>
          </div>

          {/* Right: Bullets + lead capture */}
          <div>
            <p style={{
              fontSize: '14px',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.6)',
              fontFamily: "'Inter', sans-serif",
              marginBottom: '16px',
            }}>
              What viewers learn from the full episode:
            </p>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}>
              {[
                { bold: 'The IQ 1000 thought experiment:', text: 'If a version of you existed with 10 times your intelligence, what would your role be?' },
                { bold: 'Why "just regulate it" is not enough:', text: 'AI safety requires both technical solutions AND political solutions.' },
                { bold: 'The grandson moment:', text: 'The personal turning point that shifted Bengio from optimist to advocate. His grandson is four years old.' },
                { bold: 'What LawZero is actually building:', text: '"Scientist AI" \u2014 systems designed to understand the world rather than act within it.' },
              ].map((item) => (
                <li key={item.bold} style={{
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.8)',
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                  lineHeight: 1.6,
                }}>
                  <span style={{ color: LIGHT_BLUE, fontSize: '18px', flexShrink: 0, marginTop: '2px' }}>&#10003;</span>
                  <span><strong style={{ color: '#fff' }}>{item.bold}</strong> {item.text}</span>
                </li>
              ))}
            </ul>

            <div style={{
              background: 'rgba(255,255,255,0.06)',
              borderRadius: '20px',
              padding: '32px',
              border: '1px solid rgba(255,255,255,0.1)',
            }}>
              <h3 style={{ ...heading, fontSize: '20px', color: '#fff', marginBottom: '8px' }}>
                Get the Full Picture
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.6)',
                marginBottom: '20px',
              }}>
                Take the AI Blind Spot Scorecard and find out where you stand.
              </p>
              <LeadCaptureForm source="footer" variant="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           SECTION 15: FOOTER
           ═══════════════════════════════════════════ */}
      <footer style={{
        background: '#1a1b22',
        padding: '60px 24px 40px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div className="yb2-footer-grid" style={{
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
              fontSize: '16px',
              color: '#fff',
              letterSpacing: '-0.01em',
            }}>
              The AI Safety Imperative
            </span>
            <p style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.4)',
              marginTop: '8px',
              lineHeight: 1.6,
            }}>
              A content series exploring the risks, the research, and the solutions &mdash; through the lens of the scientists building the future.
            </p>
            <p style={{
              fontSize: '12px',
              color: 'rgba(255,255,255,0.3)',
              marginTop: '6px',
            }}>
              Based on Yoshua Bengio&apos;s appearance on Diary of a CEO with Steven Bartlett (December 2025).
            </p>
          </div>

          {/* Column 2: Pages */}
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
                { label: 'About Yoshua Bengio', href: '#about' },
                { label: 'The Three Risks Framework', href: '#framework' },
                { label: 'AI Blind Spot Scorecard', href: '#scorecard' },
                { label: 'Blog: Full Analysis', href: '/clients/yoshua-bengio/blog' },
                { label: 'Watch the Full Episode', href: 'https://youtu.be/stQiLvmgjns' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="yb2-link-hover"
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

          {/* Column 3: Connect */}
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
                { label: 'LawZero', href: 'https://bit.ly/44n1sDG' },
                { label: 'Mila \u2014 Quebec AI Institute', href: 'https://bit.ly/4q6SJ0R' },
                { label: 'Yoshua Bengio \u2014 Website', href: 'https://bit.ly/4q4RqiL' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="yb2-link-hover"
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
