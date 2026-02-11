'use client'

import { useState } from 'react'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type PostType = 'Thought Leadership' | 'Story' | 'Framework' | 'Contrarian'

interface LinkedInPost {
  id: number
  title: string
  type: PostType
  hookLine: string
  content: string
  schedule: { day: string; date: string }
}

/* ------------------------------------------------------------------ */
/*  Badge colours per type                                             */
/* ------------------------------------------------------------------ */

const badgeStyles: Record<PostType, string> = {
  'Thought Leadership': 'bg-blue-100 text-blue-700',
  Story: 'bg-amber-100 text-amber-700',
  Framework: 'bg-green-100 text-green-700',
  Contrarian: 'bg-red-100 text-red-700',
}

/* ------------------------------------------------------------------ */
/*  All 10 posts -- complete text from the deliverable                 */
/* ------------------------------------------------------------------ */

const posts: LinkedInPost[] = [
  {
    id: 1,
    title: 'The $27.40 Math',
    type: 'Thought Leadership',
    hookLine:
      '$27.40 a day.\n\nThat\'s the difference between retiring broke and retiring with $4.4 million.',
    content: `$27.40 a day.

That's the difference between retiring broke and retiring with $4.4 million.

I've been teaching this for 30 years and people still don't believe me until they see the math:

$27.40 a day = $10,000 a year.

$10,000 a year invested at 10% for 40 years = $4,424,000.

That's one lunch out. One cocktail. One subscription you forgot to cancel.

When I sat down with Steven Bartlett on his podcast, he pulled up his phone and found 11 active subscriptions. He'd keep 3. The other 8 had been draining money for months.

Right now, open your phone. Go to Settings > Subscriptions.

I guarantee you'll find $50-$200 a month you didn't know you were spending.

The question isn't whether you can afford to save $27.40 a day.

The question is whether you can afford not to.

The updated Automatic Millionaire has the full system. Link in comments.`,
    schedule: { day: 'Mon', date: 'Week 1' },
  },
  {
    id: 2,
    title: "Grandma Rose's Decision at 30",
    type: 'Story',
    hookLine:
      'My grandmother made a decision at 30 years old that changed the entire destiny of our family.',
    content: `My grandmother made a decision at 30 years old that changed the entire destiny of our family.

She turned to my grandfather on her birthday and said:

"We don't have any money. We're living paycheck to paycheck. I don't want to retire here."

My grandfather asked what she wanted to do about it.

She said: "We need to change what we're doing, or nothing will change."

She didn't have a college degree. My grandfather worked in a plant. She worked in retail. They were ordinary people.

She started saving 50 cents a week.

Over her lifetime, she became a self-made millionaire. She retired to California.

But here's what most people miss about her story:

Her decision created a ripple effect that's still going.

She taught my father \u2192 he became a financial adviser for 45 years.
My sister \u2192 became a financial adviser.
Me \u2192 spent 33 years teaching millions about money.

One woman. 50 cents a week. A family transformed.

When you make a financial decision today, you're not just deciding for yourself.

You're deciding for your kids. Your grandkids. Generations you'll never meet.

What decision are you going to make today?`,
    schedule: { day: 'Wed', date: 'Week 1' },
  },
  {
    id: 3,
    title: 'Homeowners vs. Renters',
    type: 'Thought Leadership',
    hookLine:
      'Homeowners in America are worth 40 times more than renters.\n\nAverage homeowner: $400,000 in net worth.\nAverage renter: $10,000.',
    content: `Homeowners in America are worth 40 times more than renters.

Average homeowner: $400,000 in net worth.
Average renter: $10,000.

"But David, that doesn't prove buying a home made them rich."

It actually does. Here's why:

When you buy a $200,000 home with 20% down, you put in $40,000. Home doubles in 10 years (this has happened all over the US since COVID). You made $200,000 on a $40,000 investment.

That's a 5x return.

Then you sell. If you've owned for 2+ years: $250,000 in tax-free gains if single. $500,000+ if married.

Try getting that deal in the stock market.

I know what you've heard. "Renting is smarter. Put the difference in index funds."

Here's what happens in the real world: people rent an apartment nicer than they can afford, spend all their money, and turn around at 35 with no equity and no savings.

It is an absolute freaking myth that people take the extra money and invest it. They don't.

I lived in New York for 18 years. My apartment went up $3 million in value. My friends who rented for 20 years built zero net worth.

Somebody's getting rich in every rental transaction. If you're the renter, you're not the one.

$34 trillion in US home equity right now. Up 90% since pre-COVID.

That's where the breadcrumbs are.`,
    schedule: { day: 'Fri', date: 'Week 1' },
  },
  {
    id: 4,
    title: 'The McIntyres (The Couple Who Changed My Life)',
    type: 'Story',
    hookLine:
      "I was 26 years old. A financial adviser at Morgan Stanley. Making over $100,000 a year.\n\nAnd I was broke.",
    content: `I was 26 years old. A financial adviser at Morgan Stanley. Making over $100,000 a year.

And I was broke.

Then Jim and Sue McIntyre walked into my office.

They were 52. Average lifetime income: $40,000 a year. Ordinary jobs. No fancy investments.

Jim put their statements on the table. I added them up.

Net worth: $1.8 million.

I sat back and asked: "How did you do this?"

Sue said: "We didn't have a budget because budgets don't work. We put everything on autopilot."

Here's what they did:

\u2192 Automatic retirement savings from every paycheck
\u2192 Bought a home in San Leandro, CA. Paid it off.
\u2192 Bought a second home on the same street. Paid that off.
\u2192 Rented the first house for income
\u2192 Never stopped saving. Never stopped automating.

Jim retired at 52. On $40,000 a year.

I was making double their income and had nothing to show for it.

That meeting changed my life. Not because I suddenly found discipline. Because I finally understood that discipline was never the answer.

Automation was.

That's why I wrote The Automatic Millionaire. And it's why I just updated it for a new generation.

If a couple on $40K/year can do it, what's stopping you?`,
    schedule: { day: 'Mon', date: 'Week 2' },
  },
  {
    id: 5,
    title: 'The Three Bucket System',
    type: 'Framework',
    hookLine:
      "Here's the exact system that built 24 million millionaires.\n\n3 accounts. Automated on payday. Takes 10 minutes to set up.",
    content: `Here's the exact system that built 24 million millionaires.

3 accounts. Automated on payday. Takes 10 minutes to set up.

BUCKET 1: FUTURE (12.5% of gross income)
\u21b3 Retirement account (401k, IRA, or pension equivalent)
\u21b3 This is one hour of your daily pay
\u21b3 Money moves the same day your paycheck hits

BUCKET 2: SAFETY (5% of gross income)
\u21b3 High-yield savings account
\u21b3 This is your emergency fund
\u21b3 Target: 3+ months of expenses

BUCKET 3: DREAMS (5% of gross income)
\u21b3 Dedicated savings account
\u21b3 For your house, wedding, education, vacation, or business
\u21b3 Label the account so you know what you're building toward

Total: 22.5% of gross income.

"David, I can't save 22.5% right now."

Then start at 1%.

If you save 1% this month and increase by 1% each month, in 12 months you'll be saving 12% \u2014 four times what the average American saves.

And you won't even notice the difference.

The government doesn't ask you to budget to pay your taxes. They take them automatically.

Your savings should work the same way.

The full system is in The Automatic Millionaire (just updated). Link in comments.`,
    schedule: { day: 'Wed', date: 'Week 2' },
  },
  {
    id: 6,
    title: "Making More Money Doesn't Make You Rich",
    type: 'Thought Leadership',
    hookLine:
      "Making more money doesn't make you rich.\n\nI watched it happen to myself.",
    content: `Making more money doesn't make you rich.

I watched it happen to myself.

$50,000 a year \u2192 broke.
$75,000 a year \u2192 still broke. Spending more.
$100,000 a year \u2192 still spending more than I was making.

I was a financial adviser at Morgan Stanley. Helping OTHER people plan for retirement. And I couldn't save a dollar for myself.

Here's what the data shows:

When you take US households making $150,000 a year, 1 out of 3 of them are still broke.

Why? Lifestyle creep.

You get a raise, you upgrade your apartment. You get a bonus, you celebrate with a vacation. You start making real money, you start hanging around people spending real money.

And these phones are designed to get every dollar out of you. Better algorithms, one-click buying, subscription auto-renewals.

The battle for your income has never been more sophisticated.

The people who actually build wealth don't earn more than everyone else.

They automate before they can spend.

That's the difference between the McIntyres (net worth $1.8 million on $40K/year) and the six-figure earner with nothing in the bank.

It's never about income. It's always about the system.`,
    schedule: { day: 'Fri', date: 'Week 2' },
  },
  {
    id: 7,
    title: 'The DOLP Debt Elimination System',
    type: 'Framework',
    hookLine:
      "If you're in credit card debt right now, here's the exact formula to get out.\n\nIt's called DOLP: Dead On Last Payment.",
    content: `If you're in credit card debt right now, here's the exact formula to get out.

It's called DOLP: Dead On Last Payment.

I used it myself when I was $12,000 in credit card debt out of college. I remember opening my bills and having the room spin.

Here's how it works:

STEP 1: List every debt, smallest balance to largest
(Don't worry about interest rates yet)

STEP 2: Set ALL minimum payments to automatic
Go online right now. Make every minimum payment automatic. You never miss a payment again.

STEP 3: Put ALL extra money toward the smallest debt
Every spare dollar attacks that smallest balance.

STEP 4: When smallest is paid off, don't close the account
(Closing it hurts your credit score)
Roll that entire payment to the next smallest debt.

STEP 5: Repeat until debt-free

Why smallest first instead of highest interest rate?

Because you need to see progress. When that first card hits zero, you feel it. That momentum carries you through the rest.

Then attack the interest rates. Negotiate lower rates. Look into balance transfers.

One more thing: when you finally get out of debt, DO NOT celebrate on the credit cards.

I did that. Got myself right back in the hole. Most people fall back at least twice.

After I got out the second time, I didn't carry a credit card for 30 years. Debit card only.

The full DOLP system (with worksheets) is in the updated Automatic Millionaire.`,
    schedule: { day: 'Mon', date: 'Week 3' },
  },
  {
    id: 8,
    title: "David's Near-Death Wake-Up Call",
    type: 'Story',
    hookLine:
      'Four years ago, my wife found me face down on the floor. Unconscious.',
    content: `Four years ago, my wife found me face down on the floor. Unconscious.

I was rushed to a hospital in Florence. Meningitis. I was in a coma for 4 days. Hospitalized for 17.

When I finally opened my eyes, the doctor asked if I knew my name.

"David."

"Your last name?"

"Bach."

"Do you know where you are?"

"Milan. I just had ankle surgery."

"No. You're in the ICU. We're treating you for meningitis."

They brought my wife in. "Do you know her name?"

I made a joke: "Rebecca?"

She screamed: "Who?!"

"Honey, I can still be a smartass in the hospital. It's Alatia."

But the truth is, I wasn't okay. The brain swelling meant I couldn't remember my passwords. My bank accounts. My phone. Nothing.

And I'd always been the one managing all our money.

When I got out, I did two things immediately:

1. Hired a financial adviser
2. Made sure my wife was involved in everything

Here's what I want you to hear:

If your partner died today, would they know where all the money is? The passwords? The accounts? The will?

6 out of 10 people don't have a will.
40% of couples can't identify how much their partner earns.

Run the fire drill. This weekend. Before there's a reason to.

The Automatic Millionaire has a full couples financial plan for exactly this.`,
    schedule: { day: 'Wed', date: 'Week 3' },
  },
  {
    id: 9,
    title: 'The 10-Year Window',
    type: 'Thought Leadership',
    hookLine:
      'I believe the next 10 years will be the greatest opportunity to build wealth in our lifetime.\n\nAnd I also believe a lot of people are going to be left behind.',
    content: `I believe the next 10 years will be the greatest opportunity to build wealth in our lifetime.

And I also believe a lot of people are going to be left behind.

Here's why both things are true:

THE OPPORTUNITY:
\u2192 AI is making companies more profitable than ever
\u2192 Stock market up 600% in 20 years
\u2192 Housing up 400% in 20 years
\u2192 24 million millionaires in the US (up 8 million in just 20 years)
\u2192 VTI returned 14% annually over the last decade
\u2192 QQQ returned 19% annually

THE DANGER:
\u2192 7 out of 10 Americans live paycheck to paycheck
\u2192 37% can't cover a $400 emergency
\u2192 41.5 million Americans receive food assistance at $6/day
\u2192 Social Security is projected to be cut 20% by 2033
\u2192 60 million people depend on that $1,900/month check

Wealth is being created at a pace we've never seen.

The safety nets people are counting on are buckling.

No one is coming to save you. You're going to have to save yourself.

The question is: on which side of this divide will you be in 10 years?

The system to get on the right side takes 10 minutes to set up. It's in The Automatic Millionaire.`,
    schedule: { day: 'Fri', date: 'Week 3' },
  },
  {
    id: 10,
    title: 'Boring Is Beautiful',
    type: 'Contrarian',
    hookLine:
      "Your TikTok feed is full of people trading meme coins and options.\n\nThey're going to be broke forever.",
    content: `Your TikTok feed is full of people trading meme coins and options.

They're going to be broke forever.

I know that sounds harsh. After 33 years in finance, I've earned the right to say it.

People who try to get rich quick stay broke forever.

My son asked me last week: "Dad, why aren't you trading Tesla stock?"

"Because you can't make money trading. You've got to figure out when to buy, when to sell. I want you in index funds."

Here's what actually builds wealth:

\u2192 VTI (Vanguard Total Stock Market): 14% annual returns, 10 years
\u2192 QQQ (NASDAQ 100): 19% annual returns, 480% total in 10 years
\u2192 Vanguard Balanced Fund: 8%+ annually since inception

Boring. Automatic. Monthly. For decades.

That's how 654,000 Fidelity 401k participants became millionaires.

Not from trading. Not from timing the market. Not from a hot tip on social media.

From setting up an automatic transfer and never touching it.

Your investments should be boring. Your life should be interesting.

If someone's at a cocktail party talking about their investments and it's exciting, something's wrong.

Sexy is how you go broke. Boring is how you build wealth.

The Automatic Millionaire is the boring system that works. Updated for 2026 with current fund recommendations and 20 years of proof.`,
    schedule: { day: 'Mon', date: 'Week 4' },
  },
]

/* ------------------------------------------------------------------ */
/*  Schedule data                                                      */
/* ------------------------------------------------------------------ */

const schedule = [
  { day: 'Mon', week: 'Week 1', postNum: 1, type: 'Thought Leadership' as PostType, angle: '$27.40 Math' },
  { day: 'Wed', week: 'Week 1', postNum: 2, type: 'Story' as PostType, angle: 'Grandma Rose' },
  { day: 'Fri', week: 'Week 1', postNum: 3, type: 'Thought Leadership' as PostType, angle: 'Homeowners vs Renters' },
  { day: 'Mon', week: 'Week 2', postNum: 4, type: 'Story' as PostType, angle: 'McIntyres' },
  { day: 'Wed', week: 'Week 2', postNum: 5, type: 'Framework' as PostType, angle: 'Three Bucket System' },
  { day: 'Fri', week: 'Week 2', postNum: 6, type: 'Thought Leadership' as PostType, angle: 'Income \u2260 Wealth' },
  { day: 'Mon', week: 'Week 3', postNum: 7, type: 'Framework' as PostType, angle: 'DOLP Debt System' },
  { day: 'Wed', week: 'Week 3', postNum: 8, type: 'Story' as PostType, angle: 'Near-Death Wake-Up' },
  { day: 'Fri', week: 'Week 3', postNum: 9, type: 'Thought Leadership' as PostType, angle: '10-Year Window' },
  { day: 'Mon', week: 'Week 4', postNum: 10, type: 'Contrarian' as PostType, angle: 'Boring Is Beautiful' },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function LinkedInClient() {
  const [expandedPost, setExpandedPost] = useState<number | null>(null)
  const [copiedId, setCopiedId] = useState<number | null>(null)

  const handleCopy = async (post: LinkedInPost) => {
    try {
      await navigator.clipboard.writeText(post.content)
      setCopiedId(post.id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea')
      textarea.value = post.content
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopiedId(post.id)
      setTimeout(() => setCopiedId(null), 2000)
    }
  }

  const toggleExpand = (id: number) => {
    setExpandedPost(expandedPost === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
        {/* -------------------------------------------------------- */}
        {/*  Header                                                   */}
        {/* -------------------------------------------------------- */}
        <header className="mb-10">
          <p className="text-sm font-semibold tracking-wide uppercase text-[#1e3a5f] mb-2">
            David Bach -- The Automatic Millionaire
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            LinkedIn Posts
          </h1>
          <p className="text-gray-500 text-lg">
            10 posts, 3x per week for 3.5 weeks
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {(['Thought Leadership', 'Story', 'Framework', 'Contrarian'] as PostType[]).map(
              (t) => (
                <span
                  key={t}
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${badgeStyles[t]}`}
                >
                  {t}
                </span>
              ),
            )}
          </div>
        </header>

        {/* -------------------------------------------------------- */}
        {/*  Post cards                                               */}
        {/* -------------------------------------------------------- */}
        <div className="space-y-4">
          {posts.map((post) => {
            const isExpanded = expandedPost === post.id
            const isCopied = copiedId === post.id

            return (
              <article
                key={post.id}
                className="bg-white border border-gray-200 rounded-xl shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Card header -- always visible */}
                <button
                  type="button"
                  onClick={() => toggleExpand(post.id)}
                  className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    {/* Post number */}
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1e3a5f] text-white text-sm font-bold flex items-center justify-center mt-0.5">
                      {post.id}
                    </span>

                    <div className="flex-1 min-w-0">
                      {/* Type badge + title row */}
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span
                          className={`text-xs font-medium px-2 py-0.5 rounded-full ${badgeStyles[post.type]}`}
                        >
                          {post.type}
                        </span>
                        <span className="text-xs text-gray-400">
                          {post.schedule.day} -- {post.schedule.date}
                        </span>
                      </div>
                      <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5">
                        {post.title}
                      </h2>

                      {/* Hook preview (shown only when collapsed) */}
                      {!isExpanded && (
                        <p className="text-sm text-gray-500 whitespace-pre-line line-clamp-2">
                          {post.hookLine}
                          <span className="inline-block ml-1 text-[#1e3a5f] font-medium">
                            ... Read more
                          </span>
                        </p>
                      )}
                    </div>

                    {/* Chevron */}
                    <svg
                      className={`flex-shrink-0 w-5 h-5 text-gray-400 transition-transform duration-200 mt-1 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 border-t border-gray-100">
                    <div className="relative mt-4">
                      {/* Copy button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCopy(post)
                        }}
                        className={`absolute top-0 right-0 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                          isCopied
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {isCopied ? 'Copied!' : 'Copy'}
                      </button>

                      {/* Full post text */}
                      <div className="pr-16 sm:pr-20 text-sm sm:text-[15px] leading-relaxed text-gray-800 whitespace-pre-line font-[system-ui]">
                        {post.content}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            )
          })}
        </div>

        {/* -------------------------------------------------------- */}
        {/*  Posting schedule                                         */}
        {/* -------------------------------------------------------- */}
        <section className="mt-14">
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            Posting Schedule
          </h2>
          <p className="text-sm text-gray-500 mb-5">
            Mon / Wed / Fri -- 3x per week for maximum reach without
            oversaturation
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left text-gray-500">
                  <th className="px-4 py-3 font-medium">Week</th>
                  <th className="px-4 py-3 font-medium">Day</th>
                  <th className="px-4 py-3 font-medium">Post #</th>
                  <th className="px-4 py-3 font-medium">Type</th>
                  <th className="px-4 py-3 font-medium">Angle</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, i) => (
                  <tr
                    key={row.postNum}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
                  >
                    <td className="px-4 py-2.5 text-gray-600">{row.week}</td>
                    <td className="px-4 py-2.5 font-medium text-gray-800">
                      {row.day}
                    </td>
                    <td className="px-4 py-2.5">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#1e3a5f] text-white text-xs font-bold">
                        {row.postNum}
                      </span>
                    </td>
                    <td className="px-4 py-2.5">
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${badgeStyles[row.type]}`}
                      >
                        {row.type}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 text-gray-700">{row.angle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            Each post has a different hook style to avoid pattern fatigue. CTA
            varies between direct book promotion and engagement-first.
          </p>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  Footer                                                   */}
        {/* -------------------------------------------------------- */}
        <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-xs text-gray-400">
          Prepared by ContentRepurposeHub -- David Bach Starter Tier
        </footer>
      </div>
    </div>
  )
}
