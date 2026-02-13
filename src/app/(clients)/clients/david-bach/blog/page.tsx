import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SeriesNav from '@/components/SeriesNav'
import { CompoundGrowthChart, SavingsComparisonChart, WealthGapChart } from './ChartWrapper'

export const metadata: Metadata = {
  title: 'The Automatic Millionaire Formula: The Exact System Behind 654,000 New Millionaires | David Bach',
  description: 'The automatic millionaire formula that created 654,000 401k millionaires at Fidelity. Save 14% of gross income, invest 70/30 stocks/bonds, automate everything. Here\'s the step-by-step system.',
}

/* ─── Design tokens (matches landing page) ─── */
const BLUE = '#2729FE'
const CHARCOAL = '#231F21'
const CREAM = '#F3F0EC'

const heading = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 800 as const,
  lineHeight: 1.15,
  color: CHARCOAL,
}

const body = {
  fontSize: '18px',
  lineHeight: 1.8,
  color: '#4b5563',
}

export default function DavidBachBlogPost() {
  return (
    <main style={{ background: '#fff' }}>
      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'The Automatic Millionaire Formula: The Exact System Behind 654,000 New Millionaires',
            description: 'The automatic millionaire formula that created 654,000 401k millionaires at Fidelity.',
            author: { '@type': 'Person', name: 'David Bach', url: 'https://davidbach.com' },
            datePublished: '2026-02-13',
            dateModified: '2026-02-13',
          }),
        }}
      />
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'What is the automatic millionaire formula?', acceptedAnswer: { '@type': 'Answer', text: 'The automatic millionaire formula is a wealth-building system where you save 14% of your gross income (plus any employer match), invest it in a 70% stocks / 30% bonds allocation, and automate the transfer so money moves on payday before you can spend it. This formula was used by 654,000 Fidelity 401k millionaires.' } },
              { '@type': 'Question', name: 'How much do I need to save to become a millionaire?', acceptedAnswer: { '@type': 'Answer', text: 'The 401k millionaire formula requires saving 14% of your gross income with an employer match, invested in a 70/30 stock-to-bond allocation. At a median household income of roughly $60,000, saving 14% ($8,400/year) with consistent 7-8% annual returns reaches $1 million in approximately 25-30 years.' } },
              { '@type': 'Question', name: 'Can I become a millionaire on a $40,000 salary?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Jim and Sue McIntyre earned an average of $40,000/year and retired at 52 with $1.8 million in net worth. They combined consistent 401k contributions with homeownership and let compound interest work over 25+ years.' } },
            ],
          }),
        }}
      />

      {/* ═══════ Article Hero (charcoal) ═══════ */}
      <section style={{
        background: CHARCOAL,
        padding: '56px 24px 48px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse at 70% 0%, ${BLUE}15 0%, transparent 60%)`,
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative' }}>
          {/* Series Nav */}
          <SeriesNav
            clientSlug="david-bach"
            seriesName="The Automatic Wealth System"
            currentOrder={1}
            totalPosts={1}
            position="top"
          />

          {/* Author byline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', marginTop: '16px' }}>
            <Image
              src="/david-bach-headshot.jpg"
              alt="David Bach"
              width={44}
              height={44}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <div>
              <p style={{ color: '#fff', fontWeight: 600, fontSize: '15px', margin: 0, fontFamily: "'Inter', sans-serif" }}>
                David Bach
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', margin: 0 }}>
                February 2026 &middot; 10 min read
              </p>
            </div>
          </div>

          {/* Title */}
          <h1 style={{
            ...heading,
            color: '#fff',
            fontSize: 'clamp(28px, 5vw, 42px)',
            marginBottom: '20px',
          }}>
            The Automatic Millionaire Formula: The Exact System Behind 654,000 New Millionaires
          </h1>

          {/* Subtitle */}
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '18px', lineHeight: 1.6, maxWidth: '600px', margin: 0 }}>
            The formula isn&apos;t complicated. Save 14%. Invest 70/30. Automate everything. Here&apos;s the step-by-step system.
          </p>
        </div>
      </section>

      {/* ═══════ Article Body ═══════ */}
      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '48px 24px 64px' }}>

        {/* Updated tag */}
        <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '32px', borderLeft: `3px solid ${BLUE}`, paddingLeft: '12px' }}>
          Based on David Bach&apos;s teachings &middot; 10x NYT Bestselling Author &middot; Diary of a CEO
        </p>

        {/* Intro */}
        <div style={body}>
          <p style={{ marginBottom: '20px' }}>
            There are now 654,000 people in Fidelity 401k plans who are millionaires. An all-time record. They didn&apos;t win the lottery. They didn&apos;t start tech companies. Most of them never earned six figures. They followed one formula — the automatic millionaire formula — and they followed it long enough for the math to work.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Here&apos;s the formula: Save 14% of your gross income. Invest it in a 70% stocks / 30% bonds allocation. Automate the transfer so the money moves the day your paycheck hits. That&apos;s it. No budgeting. No willpower. No &ldquo;I&apos;ll start next month.&rdquo;
          </p>
          <p style={{ marginBottom: '20px' }}>
            This is Part 1 of The Automatic Wealth System series. In this post, I&apos;m breaking down the exact formula — every percentage, every account, every step — so you can set it up and stop thinking about it.
          </p>
        </div>

        {/* ── CTA 1 ── */}
        <div style={{
          background: CHARCOAL,
          borderRadius: '16px',
          padding: '28px 32px',
          margin: '40px 0',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '16px', color: '#fff', fontWeight: 600, marginBottom: '12px', fontFamily: "'Inter', sans-serif" }}>
            How automatic is YOUR financial life?
          </p>
          <Link href="/clients/david-bach" style={{
            display: 'inline-block',
            background: BLUE,
            color: '#fff',
            padding: '14px 28px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '16px',
            fontFamily: "'Inter', sans-serif",
          }}>
            Take the Free Wealth Automation Scorecard
          </Link>
        </div>

        {/* ── Quick Version ── */}
        <h2 style={{ ...heading, fontSize: '28px', marginTop: '48px', marginBottom: '20px' }}>
          The Quick Version (For People Who Want the Formula Now)
        </h2>

        <div style={{
          background: CREAM,
          borderRadius: '16px',
          padding: '24px 28px',
          marginBottom: '24px',
        }}>
          <ul style={{ ...body, margin: 0, paddingLeft: '20px' }}>
            <li style={{ marginBottom: '10px' }}><strong style={{ color: CHARCOAL }}>Savings rate:</strong> 14% of gross income + any employer match</li>
            <li style={{ marginBottom: '10px' }}><strong style={{ color: CHARCOAL }}>Allocation:</strong> 70% stocks / 30% bonds</li>
            <li style={{ marginBottom: '10px' }}><strong style={{ color: CHARCOAL }}>Method:</strong> Automatic transfer on payday — money moves before you see it</li>
            <li style={{ marginBottom: '10px' }}><strong style={{ color: CHARCOAL }}>Accounts:</strong> Retirement first (401k/IRA), then security fund, then dream account</li>
            <li style={{ marginBottom: '10px' }}><strong style={{ color: CHARCOAL }}>Timeline:</strong> The formula works over decades, not days</li>
            <li style={{ marginBottom: '0' }}><strong style={{ color: CHARCOAL }}>Proof:</strong> 654,000 Fidelity 401k millionaires and counting</li>
          </ul>
        </div>

        <p style={{ ...body, marginBottom: '20px' }}>
          Now here&apos;s why each piece matters — and why the average American saving 3-5% will never get there.
        </p>

        {/* ── Animated: Compound Growth Chart ── */}
        <CompoundGrowthChart />

        {/* ── Making More Money ── */}
        <h2 style={{ ...heading, fontSize: '28px', marginTop: '48px', marginBottom: '20px' }}>
          Making More Money Doesn&apos;t Make You Rich
        </h2>
        <div style={body}>
          <p style={{ marginBottom: '20px' }}>
            We know this for a fact. One in three households earning $150,000 a year are still broke. Not &ldquo;a little tight.&rdquo; Broke. Living paycheck to paycheck at $150K.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Most people assume the path to wealth is earning more. Get the raise. Land the promotion. Start the side business. Then — once the bigger paychecks hit — start building wealth.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Here&apos;s the problem with that logic: it never happens. You get a raise and your lifestyle expands to match it. New apartment. Better restaurants. A nicer car. That&apos;s lifestyle creep. And it destroys wealth faster than a bad investment ever could.
          </p>
          <p style={{ marginBottom: '20px' }}>
            There are 24 million millionaires in the United States right now. That&apos;s up 8 million in the last 20 years. And here&apos;s what the data tells us about how they got there — it wasn&apos;t income. It was a system.
          </p>
          <p style={{ marginBottom: '20px' }}>
            The automatic millionaire formula works whether you earn $40,000 or $400,000. The McIntyres — a couple featured in <em>The Automatic Millionaire</em> — earned an average of $40,000 a year their entire working lives. They retired at 52 with $1.8 million in net worth. No inheritance. No stock options. No luck. A system.
          </p>
        </div>

        {/* ── Pay Yourself First ── */}
        <h2 style={{ ...heading, fontSize: '28px', marginTop: '48px', marginBottom: '20px' }}>
          The Pay Yourself First Strategy: Why the First Hour Matters
        </h2>
        <div style={body}>
          <p style={{ marginBottom: '20px' }}>
            Here&apos;s an insight that changes everything once you see it.
          </p>
          <p style={{ marginBottom: '20px' }}>
            The government doesn&apos;t ask you to budget to pay taxes. They don&apos;t send you a bill at the end of the month and hope you have enough left over. They take your taxes from you automatically, before you ever see the money. That&apos;s why taxes always get paid.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Your wealth system needs to work the same way.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Whatever you earn, the first hour of your income has to go to you. Not the landlord. Not Amazon. Not the credit card company. You. You&apos;re the first person who gets paid.
          </p>
          <p style={{ marginBottom: '20px' }}>
            The first hour of an 8-hour workday equals 12.5% of your gross income. That&apos;s the starting number. The 401k millionaires at Fidelity? They save 14% plus whatever their employer matches. But 12.5% is where you start — the first hour of your income, moved automatically to your investment accounts on payday.
          </p>
          <p style={{ marginBottom: '20px' }}>
            The average American saves 3-5% of their income. Follow this for one second — that&apos;s about 24 minutes of an 8-hour workday going to their future. Then they wonder why they can&apos;t retire. The math was never going to work at 3%.
          </p>
        </div>

        {/* Callout box */}
        <div style={{
          borderLeft: `4px solid ${BLUE}`,
          background: `${BLUE}08`,
          padding: '20px 24px',
          borderRadius: '0 12px 12px 0',
          margin: '32px 0',
        }}>
          <p style={{ ...body, margin: 0, fontWeight: 600, color: CHARCOAL }}>
            The first hour of an 8-hour workday = 12.5% of gross income. That&apos;s the minimum. The 654,000 Fidelity millionaires averaged 14%.
          </p>
        </div>

        {/* ── Animated: Savings Rate Comparison ── */}
        <SavingsComparisonChart />

        <h3 style={{ ...heading, fontSize: '22px', marginTop: '32px', marginBottom: '16px' }}>
          How to Set Up the Pay Yourself First System
        </h3>
        <ol style={{ ...body, paddingLeft: '24px', marginBottom: '20px' }}>
          <li style={{ marginBottom: '12px' }}><strong style={{ color: CHARCOAL }}>Calculate 12.5% of your gross income.</strong> If you earn $60,000/year, that&apos;s $7,500/year or $625/month.</li>
          <li style={{ marginBottom: '12px' }}><strong style={{ color: CHARCOAL }}>Open a retirement account</strong> if you don&apos;t have one. 401k through your employer (pre-tax) or an IRA if your employer doesn&apos;t offer one.</li>
          <li style={{ marginBottom: '12px' }}><strong style={{ color: CHARCOAL }}>Set the contribution to automatic</strong> on payday. The money should move the same day your paycheck hits.</li>
          <li style={{ marginBottom: '12px' }}><strong style={{ color: CHARCOAL }}>If your employer matches,</strong> contribute at least enough to capture the full match. That&apos;s free money.</li>
          <li style={{ marginBottom: '12px' }}><strong style={{ color: CHARCOAL }}>Increase by 1% every six months</strong> until you reach 14% or higher.</li>
        </ol>

        {/* ── CTA 2 ── */}
        <div style={{
          background: CHARCOAL,
          borderRadius: '16px',
          padding: '28px 32px',
          margin: '40px 0',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '16px', color: '#fff', fontWeight: 600, marginBottom: '12px', fontFamily: "'Inter', sans-serif" }}>
            How automatic is your financial life?
          </p>
          <Link href="/clients/david-bach" style={{
            display: 'inline-block',
            background: BLUE,
            color: '#fff',
            padding: '14px 28px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '16px',
            fontFamily: "'Inter', sans-serif",
          }}>
            Take the Free Scorecard
          </Link>
        </div>

        {/* ── 401k Millionaire Formula ── */}
        <h2 style={{ ...heading, fontSize: '28px', marginTop: '48px', marginBottom: '20px' }}>
          The 401k Millionaire Formula: What 654,000 People Did
        </h2>
        <div style={body}>
          <p style={{ marginBottom: '20px' }}>
            Fidelity manages retirement accounts for tens of millions of Americans. They have the data on what actually works — not what should work in theory, but what people actually did to hit seven figures in their 401k.
          </p>
        </div>

        {/* Formula breakdown cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '32px 0' }}>
          {[
            { num: '01', title: 'Save 14% of Gross Income', subtitle: 'Plus Employer Match', detail: 'Not 3%. Not 5%. Not "whatever\'s left at the end of the month." Fourteen percent, moved automatically, before you make a single spending decision. At a 7-8% average annual return, 14% of a median income — saved consistently for 25-30 years — crosses the million-dollar mark.' },
            { num: '02', title: 'Invest 70% Stocks / 30% Bonds', subtitle: 'The Proven Allocation', detail: 'Not 100% stocks (too volatile for most people to stomach during a crash). Not 50/50 (too conservative to build real wealth over decades). The stock market has gone up 600% in the last 20 years. If you parked your retirement savings in a money market fund earning 2-3%, you missed one of the greatest wealth-creation periods in history.' },
            { num: '03', title: 'Automate and Never Touch It', subtitle: '26+ Year Average Tenure', detail: 'The money moves on payday. It goes directly into the 401k. It\'s invested in your 70/30 allocation. And then you leave it alone. The 654,000 Fidelity millionaires have an average account tenure of over 26 years. They stayed in. That\'s the hardest part — not the saving, not the allocation, but the patience.' },
          ].map((card) => (
            <div key={card.num} style={{
              background: CREAM,
              borderRadius: '16px',
              padding: '28px 28px 24px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Faded number */}
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '16px',
                fontSize: '72px',
                fontWeight: 900,
                color: `${BLUE}10`,
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1,
                pointerEvents: 'none',
              }}>
                {card.num}
              </span>
              <p style={{
                fontSize: '12px',
                fontWeight: 700,
                color: BLUE,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                margin: '0 0 6px',
                fontFamily: "'Inter', sans-serif",
              }}>
                Step {card.num}
              </p>
              <h3 style={{
                ...heading,
                fontSize: '20px',
                marginBottom: '4px',
              }}>
                {card.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '12px' }}>
                {card.subtitle}
              </p>
              <p style={{ ...body, fontSize: '16px', margin: 0 }}>
                {card.detail}
              </p>
            </div>
          ))}
        </div>

        {/* ── Two Escalators ── */}
        <h2 style={{ ...heading, fontSize: '28px', marginTop: '48px', marginBottom: '20px' }}>
          The Two Escalators to Wealth
        </h2>
        <div style={body}>
          <p style={{ marginBottom: '20px' }}>
            There are $45 trillion sitting in retirement accounts in America. There are $34 trillion in home equity. That&apos;s nearly $80 trillion — and it lives in exactly two places: stocks and real estate.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Those are the two escalators to wealth. If you&apos;re not on at least one, you are being left behind.
          </p>
        </div>

        {/* ── Animated: Wealth Gap Chart ── */}
        <WealthGapChart />

        <div style={body}>
          <p style={{ marginBottom: '20px' }}>
            Somebody&apos;s getting rich in the transaction of renting. If you&apos;re the renter, you&apos;re not the one.
          </p>
        </div>

        {/* ── Three Accounts ── */}
        <h2 style={{ ...heading, fontSize: '28px', marginTop: '48px', marginBottom: '20px' }}>
          The Three Accounts Every Automatic Millionaire Needs
        </h2>
        <div style={body}>
          <p style={{ marginBottom: '16px' }}>The formula runs on three accounts, funded in this order:</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '24px 0 32px' }}>
          {[
            { emoji: '1', label: 'Retirement (The Wealth Engine)', desc: 'Your 401k or IRA. Gets funded first — 12.5% to 14% of gross income, automatically.' },
            { emoji: '2', label: 'Security (The Emergency Fund)', desc: 'Three to six months of expenses in a high-yield savings account. So you never raid your retirement account when life happens.' },
            { emoji: '3', label: 'Dream (The Life Account)', desc: 'Funds your goals — travel, a down payment, a sabbatical. Wealth isn\'t just about the number. It\'s about living.' },
          ].map((item) => (
            <div key={item.emoji} style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'flex-start',
              background: CREAM,
              borderRadius: '12px',
              padding: '20px 24px',
            }}>
              <span style={{
                minWidth: '36px',
                height: '36px',
                borderRadius: '50%',
                background: CHARCOAL,
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '16px',
                fontFamily: "'Inter', sans-serif",
              }}>
                {item.emoji}
              </span>
              <div>
                <p style={{ fontWeight: 700, color: CHARCOAL, marginBottom: '4px', fontFamily: "'Inter', sans-serif" }}>
                  {item.label}
                </p>
                <p style={{ ...body, fontSize: '16px', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA 3 ── */}
        <div style={{
          background: CHARCOAL,
          borderRadius: '16px',
          padding: '28px 32px',
          margin: '40px 0',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '16px', color: '#fff', fontWeight: 600, marginBottom: '12px', fontFamily: "'Inter', sans-serif" }}>
            Find out which accounts you&apos;re missing
          </p>
          <Link href="/clients/david-bach" style={{
            display: 'inline-block',
            background: BLUE,
            color: '#fff',
            padding: '14px 28px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '16px',
            fontFamily: "'Inter', sans-serif",
          }}>
            Take the Free Scorecard
          </Link>
        </div>

        {/* ── Why This Works ── */}
        <h2 style={{ ...heading, fontSize: '28px', marginTop: '48px', marginBottom: '20px' }}>
          Why This Works When Budgeting Doesn&apos;t
        </h2>
        <div style={body}>
          <p style={{ marginBottom: '20px' }}>
            Your phone is an algorithm-powered spending machine. Every app, every ad, every notification is designed to separate you from your money. There&apos;s a reason people who earn $150K are still broke — the spending infrastructure around them has gotten more sophisticated than their saving system.
          </p>
          <p style={{ marginBottom: '20px' }}>
            The automatic millionaire formula takes willpower out of the equation entirely. The money moves on payday. It&apos;s invested before you make a single decision. You live on what&apos;s left. Not budgeting. Not discipline. A machine.
          </p>
        </div>

        {/* ── Real World Proof ── */}
        <h2 style={{ ...heading, fontSize: '28px', marginTop: '48px', marginBottom: '20px' }}>
          The Real-World Proof
        </h2>
        <div style={body}>
          <p style={{ marginBottom: '20px' }}>
            The McIntyres earned $40,000 a year. They bought two houses on the same street in San Leandro, California. Paid both off. One to live in, one for rental income. Combined that with consistent 401k contributions. At 52, they had $1.8 million.
          </p>
          <p style={{ marginBottom: '20px' }}>
            That&apos;s the formula working in the real world for real people with real incomes. Not hedge fund managers. Not tech founders. A couple who made the same money as a teacher and never earned a raise that changed their lives. The system changed their lives.
          </p>
        </div>

        {/* ── How to Start ── */}
        <h2 style={{ ...heading, fontSize: '28px', marginTop: '48px', marginBottom: '20px' }}>
          How to Start (Even If You&apos;re in Debt)
        </h2>
        <div style={body}>
          <p style={{ marginBottom: '20px' }}>
            I came out of college with $12,000 in credit card debt. I didn&apos;t wait until the debt was gone to start building wealth. I did both — automated my debt payments AND automated my savings.
          </p>
        </div>

        <h3 style={{ ...heading, fontSize: '20px', marginTop: '24px', marginBottom: '16px' }}>If You&apos;re Starting From Zero:</h3>
        <ol style={{ ...body, paddingLeft: '24px', marginBottom: '20px' }}>
          <li style={{ marginBottom: '8px' }}>Start at whatever percentage you can — even 3%</li>
          <li style={{ marginBottom: '8px' }}>Set it to increase by 1% every six months</li>
          <li style={{ marginBottom: '8px' }}>You won&apos;t feel the 1% increases. Your lifestyle adjusts.</li>
          <li style={{ marginBottom: '8px' }}>Within 3-5 years, you&apos;ll hit the 14% target.</li>
          <li style={{ marginBottom: '8px' }}>Automate everything from day one.</li>
        </ol>
        <div style={body}>
          <p style={{ marginBottom: '20px' }}>
            The best time to start was 10 years ago. The second best time is today. But only if you automate it today — not &ldquo;plan to start next month.&rdquo;
          </p>
        </div>

        {/* ── FAQ ── */}
        <h2 style={{ ...heading, fontSize: '28px', marginTop: '48px', marginBottom: '24px' }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
          {[
            { q: 'What is the automatic millionaire formula?', a: 'The automatic millionaire formula is a wealth-building system where you save 14% of your gross income (plus any employer match), invest it in a 70% stocks / 30% bonds allocation, and automate the transfer so money moves on payday before you can spend it. This formula was used by 654,000 Fidelity 401k millionaires and is based on David Bach\'s The Automatic Millionaire framework.' },
            { q: 'How much do I need to save to become a millionaire?', a: 'The 401k millionaire formula requires saving 14% of your gross income with an employer match, invested in a 70/30 stock-to-bond allocation. At a median household income of roughly $60,000, saving 14% ($8,400/year) with consistent 7-8% annual returns reaches $1 million in approximately 25-30 years.' },
            { q: 'Does the pay yourself first strategy actually work?', a: 'Yes. The pay yourself first strategy is the principle behind 654,000 documented 401k millionaires at Fidelity alone. It works because it removes willpower from the equation — your savings are automated like tax withholding.' },
            { q: 'Can I become a millionaire on a $40,000 salary?', a: 'Yes. Jim and Sue McIntyre earned an average of $40,000/year and retired at 52 with $1.8 million in net worth. They combined consistent 401k contributions with homeownership and let compound interest work over 25+ years.' },
            { q: 'What\'s the difference between the automatic millionaire formula and regular budgeting?', a: 'Budgeting requires daily willpower. The automatic millionaire formula removes willpower entirely. Money moves from your paycheck to your investment accounts automatically on payday, before you see it or can spend it. You live on what\'s left.' },
            { q: 'Is it better to rent or buy a home for building wealth?', a: 'Data shows homeowners are worth 40 times more than renters ($400,000+ average net worth vs. $10,000). Home equity in America totals $34 trillion, up 90% since before COVID.' },
          ].map((item, i) => (
            <div key={i} style={{
              background: CREAM,
              borderRadius: '12px',
              padding: '20px 24px',
            }}>
              <h3 style={{ fontWeight: 700, color: CHARCOAL, fontSize: '17px', marginBottom: '8px', fontFamily: "'Inter', sans-serif" }}>
                {item.q}
              </h3>
              <p style={{ color: '#6b7280', lineHeight: 1.7, margin: 0, fontSize: '16px' }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* ── What's Next ── */}
        <h2 style={{ ...heading, fontSize: '28px', marginTop: '48px', marginBottom: '20px' }}>What&apos;s Next</h2>
        <div style={body}>
          <p style={{ marginBottom: '20px' }}>
            This is Part 1 of The Automatic Wealth System series. You now have the formula — the exact percentages, the exact allocation, and the exact system that created 654,000 401k millionaires.
          </p>
          <p style={{ marginBottom: '20px' }}>
            In Part 2, we&apos;ll get into the homeownership math — why the 40x wealth gap between owners and renters exists, how leverage actually works in real estate, and the specific steps to get on the second escalator even if you think you can&apos;t afford it.
          </p>
          <p style={{ marginBottom: '20px' }}>
            For now, do one thing: <strong>automate your first hour.</strong> Set up the automatic transfer today. Not tomorrow. Not &ldquo;when I get around to it.&rdquo; The system only works if it&apos;s running.
          </p>
        </div>

        {/* ── Final CTA ── */}
        <div style={{
          background: `linear-gradient(135deg, #D73A0F 0%, #ED8345 100%)`,
          borderRadius: '16px',
          padding: '36px 32px',
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: '20px',
            color: '#fff',
            fontWeight: 800,
            marginBottom: '8px',
            fontFamily: "'Inter', sans-serif",
          }}>
            Take the free Wealth Automation Scorecard
          </p>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)', marginBottom: '16px' }}>
            Find out exactly where your system stands — takes 2 minutes
          </p>
          <Link href="/clients/david-bach" style={{
            display: 'inline-block',
            background: '#fff',
            color: '#D73A0F',
            padding: '14px 28px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '16px',
            fontFamily: "'Inter', sans-serif",
          }}>
            Get My Free Score
          </Link>
        </div>

        {/* Series Nav — Bottom */}
        <SeriesNav
          clientSlug="david-bach"
          seriesName="The Automatic Wealth System"
          currentOrder={1}
          totalPosts={1}
          position="bottom"
        />
      </article>

      {/* ═══════ Back to Landing Page strip ═══════ */}
      <section style={{
        background: CHARCOAL,
        padding: '24px',
        textAlign: 'center',
      }}>
        <Link href="/clients/david-bach" style={{
          color: 'rgba(255,255,255,0.7)',
          textDecoration: 'none',
          fontSize: '14px',
          fontFamily: "'Inter', sans-serif",
        }}>
          &larr; Back to David Bach&apos;s Wealth Automation Scorecard
        </Link>
      </section>
    </main>
  )
}
