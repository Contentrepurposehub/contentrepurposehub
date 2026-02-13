import type { Metadata } from 'next'
import Image from 'next/image'
import LeadCaptureForm from './LeadCaptureForm'

export const metadata: Metadata = {
  title: 'Wealth Automation Scorecard — How Automatic Is Your Financial Life? | David Bach',
  description: 'Free 2-minute scorecard based on the system used by 654,000 401k millionaires. Find out if your wealth system is running on autopilot or still relying on willpower.',
  openGraph: {
    title: 'Wealth Automation Scorecard | David Bach',
    description: 'Free 2-minute scorecard based on the system used by 654,000 401k millionaires.',
    type: 'website',
  },
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

      {/* ─── Section 1: Hero ─── */}
      <section style={{ background: '#FFFFFF', padding: '64px 24px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }}>
          <style>{`
            @media (min-width: 768px) {
              .db-hero-grid { grid-template-columns: 1fr 1fr !important; }
              .db-hero-image { display: block !important; }
            }
          `}</style>
          <div className="db-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }}>
            {/* Left Column: Copy + Form */}
            <div>
              {/* Author identity badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <Image
                  src="/david-bach-headshot.png"
                  alt="David Bach"
                  width={48}
                  height={48}
                  style={{ borderRadius: '50%', objectFit: 'cover' }}
                />
                <span style={{ fontSize: '14px', color: '#6b7280', fontWeight: 500 }}>
                  David Bach — 10x New York Times Bestselling Author
                </span>
              </div>

              <h1 style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: 1.1,
                color: '#231F21',
                marginBottom: '20px',
              }}>
                How Automatic Is Your Financial Life?
              </h1>

              <p style={{
                fontSize: '18px',
                lineHeight: 1.6,
                color: '#4b5563',
                marginBottom: '32px',
              }}>
                The system behind 654,000 401k millionaires comes down to 3 numbers. This free scorecard tells you if your system is running — or if you&apos;re still relying on willpower.
              </p>

              <LeadCaptureForm source="hero" />
            </div>

            {/* Right Column: Headshot (hidden on mobile) */}
            <div className="db-hero-image" style={{ display: 'none', justifyContent: 'center' }}>
              <Image
                src="/david-bach-headshot.png"
                alt="David Bach"
                width={400}
                height={400}
                priority
                style={{
                  borderRadius: '24px',
                  objectFit: 'cover',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                  width: '100%',
                  maxWidth: '400px',
                  height: 'auto',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 2: What the Scorecard Reveals ─── */}
      <section style={{ background: '#F3F0EC', padding: '64px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(24px, 4vw, 36px)',
            color: '#231F21',
            textAlign: 'center',
            marginBottom: '48px',
          }}>
            What the Scorecard Reveals
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              {
                title: 'Your Savings Rate vs. the Formula',
                desc: 'Are you saving 14% like the 654,000 Fidelity millionaires — or the 3-5% that keeps most Americans broke? Your score shows exactly where you stand.',
              },
              {
                title: 'Your Automation Level',
                desc: "The government takes taxes automatically. That's why taxes always get paid. Is your wealth system running the same way — or are you still relying on willpower?",
              },
              {
                title: 'Which Escalators You\'re On',
                desc: "$45 trillion in stocks. $34 trillion in real estate. That's where wealth lives. The scorecard shows which escalators you're riding — and which ones you're missing.",
              },
              {
                title: 'Your 3 Biggest Gaps',
                desc: 'Most people are closer than they think. The scorecard identifies the specific gaps between where you are and the automatic millionaire formula — with action items to close them.',
              },
            ].map((item, i) => (
              <div key={i} style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}>
                <h3 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: '18px',
                  color: '#231F21',
                  marginBottom: '12px',
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#6b7280' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 3: Signature Quote ─── */}
      <section style={{ background: '#2729FE', padding: '56px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(18px, 3vw, 24px)',
            fontStyle: 'italic',
            color: '#FFFFFF',
            lineHeight: 1.6,
            marginBottom: '16px',
          }}>
            &ldquo;The government doesn&apos;t ask you to budget to pay taxes. They take your taxes from you automatically. Your wealth system needs to work the same way.&rdquo;
          </p>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>
            — David Bach, <em>The Automatic Millionaire</em>
          </p>
        </div>
      </section>

      {/* ─── Section 4: Who Made This? ─── */}
      <section style={{ background: '#FFFFFF', padding: '64px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(24px, 4vw, 36px)',
            color: '#231F21',
            marginBottom: '32px',
          }}>
            Who Made This?
          </h2>

          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#4b5563', marginBottom: '28px' }}>
            I came out of college with $12,000 in credit card debt. I remember opening my bills and having the room spin. That was 25 years ago. Since then, I&apos;ve written 12 books (10 of them New York Times bestsellers), taught millions of people the system that works, and watched 654,000 people become 401k millionaires using the exact formula in this scorecard. I built this because the formula is simple — but most people don&apos;t know if they&apos;re actually following it.
          </p>

          {/* Social Links */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '32px' }}>
            <a href="https://x.com/AuthorDavidBach" target="_blank" rel="noopener noreferrer"
              style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.instagram.com/davidlbach/" target="_blank" rel="noopener noreferrer"
              style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.youtube.com/user/DavidBachTV" target="_blank" rel="noopener noreferrer"
              style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://davidbach.com" target="_blank" rel="noopener noreferrer"
              style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            </a>
          </div>

          {/* 3 Key Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '24px' }}>
            {[
              { value: '12+', label: 'Books in 19 Languages' },
              { value: '10x', label: 'New York Times Bestseller' },
              { value: '654,000+', label: '401k Millionaires Using the Formula' },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(24px, 4vw, 36px)',
                  color: '#2729FE',
                  marginBottom: '4px',
                }}>
                  {stat.value}
                </p>
                <p style={{ fontSize: '13px', color: '#9ca3af', fontWeight: 500 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Credibility bar */}
          <p style={{ fontSize: '13px', color: '#9ca3af', fontWeight: 500, letterSpacing: '0.05em' }}>
            As seen on CNBC &middot; Oprah &middot; Forbes &middot; Wall Street Journal &middot; Good Morning America
          </p>
        </div>
      </section>

      {/* ─── Section 5: How It Works ─── */}
      <section style={{ background: '#F3F0EC', padding: '64px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(24px, 4vw, 36px)',
            color: '#231F21',
            textAlign: 'center',
            marginBottom: '48px',
          }}>
            How It Works
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              { step: '1', title: 'Enter your name and email above' },
              { step: '2', title: 'Answer 8 quick questions about your financial system (takes 2 minutes)' },
              { step: '3', title: 'Get your Wealth Automation Score with personalized action items — plus access to the full system breakdown' },
            ].map((item) => (
              <div key={item.step} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{
                  minWidth: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: '#2729FE',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                  fontSize: '20px',
                }}>
                  {item.step}
                </div>
                <p style={{ fontSize: '17px', lineHeight: 1.6, color: '#4b5563', paddingTop: '10px' }}>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 6: FAQ ─── */}
      <section style={{ background: '#FFFFFF', padding: '64px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(24px, 4vw, 36px)',
            color: '#231F21',
            textAlign: 'center',
            marginBottom: '48px',
          }}>
            Common Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              {
                q: 'How long does the scorecard take?',
                a: 'About 2 minutes. 8 questions. You get your score and action items immediately — no waiting, no "we\'ll email you later."',
              },
              {
                q: 'Is it really free?',
                a: 'Yes. No credit card. No upsell. I built this because the formula works and most people just need to see where they stand. The scorecard shows you that.',
              },
              {
                q: 'What happens after I submit my email?',
                a: "You go straight to the scorecard. Answer 8 questions, get your score, and see your personalized action items. We'll also send you the system breakdown so you have everything in one place.",
              },
            ].map((item, i) => (
              <div key={i}>
                <h3 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: '18px',
                  color: '#231F21',
                  marginBottom: '8px',
                }}>
                  {item.q}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6b7280' }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 7: Footer CTA ─── */}
      <section style={{ background: '#2729FE', padding: '64px 24px' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(24px, 4vw, 36px)',
            color: '#FFFFFF',
            marginBottom: '32px',
            lineHeight: 1.2,
          }}>
            654,000 people followed this formula and became millionaires. How does your system compare?
          </h2>

          <LeadCaptureForm source="footer" />
        </div>
      </section>
    </main>
  )
}
