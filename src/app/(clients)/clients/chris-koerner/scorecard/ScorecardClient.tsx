'use client'

import { useState, useMemo, useCallback } from 'react'

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface Structure {
  id: number
  name: string
  tagline: string
  howItWorks: string
  realExample: string
  whatToSay: string
  worstCase: string
  bestCase: string
  bestPairedWith: string
}

interface QuestionOption {
  label: string
  structures: number[] // IDs of structures this maps to
}

interface Question {
  id: string
  title: string
  subtitle: string
  options: QuestionOption[]
}

const STRUCTURES: Structure[] = [
  {
    id: 1,
    name: 'Balloon Payment',
    tagline: 'Small payments now, big payment later (that you plan to never actually pay)',
    howItWorks: 'Little or nothing down. Small monthly payments for a set period (2-5 years). One large "balloon" payment at the end \u2014 which you refinance, pay from profits, or handle by selling the asset before it comes due.',
    realExample: 'Landscaping business. Purchase price: $200,000. Pay $5,000/month from the business\u2019s own profits. Sold the business 2 years later for $600,000. The balloon payment never came due.',
    whatToSay: '"What if we structured this so I make monthly payments of $X from the business\u2019s cash flow, with the remaining balance due in 3 years? That gives me time to grow the business and gives you consistent monthly income starting day one."',
    worstCase: 'Asset underperforms, balloon comes due, you can\u2019t refinance or sell. You may lose the asset and payments made.',
    bestCase: 'Asset cash-flows easily, you sell or refinance before the balloon, and you\u2019ve bought a $200K business that you flipped for $600K without tying up your own capital.',
    bestPairedWith: 'Graduated Payments \u2014 start payments small, increase over time, balloon at the end.',
  },
  {
    id: 2,
    name: 'Interest-Only Payments',
    tagline: 'Maximum cash flow breathing room in the early months',
    howItWorks: 'You pay only the interest on the note for a set period. No principal reduction. Your monthly payment is significantly lower than a fully amortizing loan.',
    realExample: '$500,000 property at 6% interest = $2,500/month in interest-only payments. Compare to a fully amortizing payment of ~$3,300/month. You save $800/month in the early years.',
    whatToSay: '"I\u2019d like to propose interest-only payments for the first 12-24 months while I stabilize operations. After that, we transition to full principal and interest. You\u2019re earning a return from day one."',
    worstCase: 'Asset doesn\u2019t appreciate or stabilize. You\u2019ve been paying interest without reducing principal. You owe the same amount you started with.',
    bestCase: 'You use the cash flow savings to reinvest, grow the asset\u2019s value, and refinance at better terms.',
    bestPairedWith: 'Balloon Payment \u2014 interest-only for 2 years, then a balloon. Maximum flexibility upfront.',
  },
  {
    id: 3,
    name: 'Graduated Payments',
    tagline: 'Start paying something from day one \u2014 build trust and grow into the full payment',
    howItWorks: 'Payments start very small and increase on a set schedule. Month one: $500. Six months: $700. A year: $1,000. Two years: $2,000. Better than zero payments because the seller sees you\u2019re legitimate immediately.',
    realExample: 'Start at $500/month. Bump to $700, then $1,000, then $1,500, then $2,000. Seller sees money from month one. You get time to grow into the full payment.',
    whatToSay: '"I\u2019d rather start paying you something from day one than ask for a grace period. What if we start at $500/month and scale up to the full payment over 12-18 months? You\u2019ll see I\u2019m serious from the first check."',
    worstCase: 'Asset underperforms and you can\u2019t sustain increasing payments. But you\u2019ve built goodwill by paying from day one, which gives you room to renegotiate.',
    bestCase: 'Revenue growth outpaces the payment increases. By the time you\u2019re at full payment, the asset generates more than enough.',
    bestPairedWith: 'Balloon Payment \u2014 graduated payments leading to a balloon creates a smooth cash flow curve.',
  },
  {
    id: 4,
    name: 'Partial Seller Carryback',
    tagline: 'Layer bank + seller + your capital to close the gap',
    howItWorks: 'The seller finances part of the purchase price (usually as a second lien), a bank finances the majority, and you bring whatever\u2019s left. The seller "carries back" a portion so you don\u2019t need a massive down payment.',
    realExample: 'My best friend bought a $2.2M business. SBA loan: ~80%. Seller held 10% as a note. Put 10% down (~$200K) from savings, my investment, and friends/family. Three funding sources layered together.',
    whatToSay: '"The bank is willing to do X% of the purchase price. If you\u2019d carry 10-20% as a second lien note \u2014 at a fair interest rate, fully secured by the asset \u2014 I can make this work."',
    worstCase: 'Business underperforms, you default on both notes. Bank gets paid first, seller may not recover their carryback.',
    bestCase: 'Business performs, you service both notes, seller gets paid in full with interest \u2014 often better than the lump sum.',
    bestPairedWith: 'Graduated Payments on the seller carryback portion \u2014 standard bank payments on the first lien.',
  },
  {
    id: 5,
    name: 'Shared Appreciation Mortgage',
    tagline: 'Use the seller\u2019s own optimism to get better terms today',
    howItWorks: 'The seller gives you better terms today in exchange for a percentage of the future upside. Lower price or down payment now, a cut of the profits later.',
    realExample: 'Seller says the property could be worth $3M. Your counter: "Give me better terms today, and I\u2019ll cut you into those future profits. If you\u2019re right about $3M, you make more money than selling at full price today."',
    whatToSay: '"You\u2019ve built something with real upside. What if instead of negotiating hard on today\u2019s price, I give you X% of the appreciation above current value when I exit? Better terms now, bigger payday later."',
    worstCase: 'Asset doesn\u2019t appreciate. Seller got better terms but no upside payout.',
    bestCase: 'Asset appreciates significantly. Seller gets a piece. You got in with lower capital. Both sides win more than a simple sale.',
    bestPairedWith: 'Zero Down \u2014 no money down plus shared appreciation is a strong pitch for an optimistic seller.',
  },
  {
    id: 6,
    name: 'Master Lease / Lease to Own',
    tagline: 'Operate it before you own it \u2014 prove the concept, then buy',
    howItWorks: 'You lease the asset with an option to purchase at a predetermined price/time. You operate it and keep profits, but don\u2019t own it yet. The seller retains title until you exercise the option.',
    realExample: '$2M RV park in Louisiana. Listed for 2 years, no buyers, needed work. Negotiated: $7,000/month lease, 2-year option to buy at $3-4M. At 90% occupancy, the park could be worth $23M. Worst case for seller: $168K income and they get the property back.',
    whatToSay: '"I know this has been listed for a while. What if I lease it at $X/month \u2014 you get guaranteed income \u2014 and I have the option to purchase at $X within 2-3 years? If I don\u2019t buy, you get the property back and you\u2019ve collected $X."',
    worstCase: 'You operate the asset, it doesn\u2019t perform, you walk away. You\u2019ve lost lease payments and time. Seller got paid and gets asset back.',
    bestCase: 'You turn the asset around, exercise the option below market value, and own something worth significantly more.',
    bestPairedWith: 'Graduated Payments on the lease amount \u2014 start lower, increase as you stabilize operations.',
  },
  {
    id: 7,
    name: 'Zero Down / 100% Seller Financing',
    tagline: 'Trade a higher cost of capital for zero upfront cash',
    howItWorks: 'The seller finances the entire purchase price. You put nothing down. In exchange, you pay a higher interest rate, a higher purchase price, or both.',
    realExample: 'Seller wants 5% interest and 10% down? Offer 8% interest and 0% down. Run it in a spreadsheet: "At 8% with 0% down, you actually make $47,000 more over 7 years." When the math favors the seller, the conversation changes.',
    whatToSay: '"I can offer a higher interest rate \u2014 X% instead of Y% \u2014 in exchange for zero down. You earn more on the note over time. I can also offer collateral/personal guarantee to reduce your risk."',
    worstCase: 'You default. Seller takes the asset back (first lien position). You lose time and effort.',
    bestCase: 'You operate profitably, service the debt, and own something bought with zero capital out of pocket.',
    bestPairedWith: 'Graduated Payments and/or Interest-Only for the first period \u2014 zero down with a ramp-up.',
  },
  {
    id: 8,
    name: 'Asset Swap / Services in Lieu',
    tagline: 'Use skills or assets instead of cash for the down payment',
    howItWorks: 'Instead of cash, offer something else of value: consulting services, marketing, another asset (vehicle, equipment, real estate), or a combination.',
    realExample: 'You run a marketing agency. Seller needs marketing help. Offer 12 months of services (valued at $30-50K) as the down payment. Seller gets what they need. You get an asset without writing a check.',
    whatToSay: '"I noticed you mentioned [their need]. What if part of the deal included me providing [service/asset] as a portion of the down payment? You get something you need, and I\u2019m putting real value \u2014 just not cash \u2014 into the deal."',
    worstCase: 'Seller doesn\u2019t value what you\u2019re offering. No downside \u2014 just move to a different structure.',
    bestCase: 'You trade something you already have (or time, not cash) for equity in an asset. Highest-leverage play in the entire cheat sheet.',
    bestPairedWith: 'Partial Seller Carryback \u2014 services as part of down payment, seller carries the rest.',
  },
  {
    id: 9,
    name: 'Subject to Existing Debt (Sub-2)',
    tagline: 'Take over the seller\u2019s existing loan payments \u2014 no new financing needed',
    howItWorks: 'You take over the seller\u2019s existing loan payments. Debt stays in seller\u2019s name. You get control of the asset and make the payments.',
    realExample: 'Property has a low-interest loan the seller wants out from under. They\u2019re tired of managing it. You take over payments at a rate better than anything you could get today.',
    whatToSay: '"What if I took over your existing payments? The loan stays in your name, but I handle every payment going forward. You\u2019re free of the obligation, and I take over from here."',
    worstCase: 'Due-on-sale clause \u2014 the lender can technically call the loan if ownership changes. Rarely enforced if payments are current, but it\u2019s a real risk. If you miss payments, the seller\u2019s credit gets destroyed.',
    bestCase: 'You acquire an asset with no new financing, at an existing interest rate better than market, with minimal upfront capital.',
    bestPairedWith: 'Master Lease as a fallback \u2014 if sub-2 feels too risky for the seller, a master lease achieves similar results.',
  },
  {
    id: 10,
    name: 'Delayed Down Payment',
    tagline: 'Close today, pay the down payment 12-24 months from now',
    howItWorks: 'You close the deal now. Pay the down payment later (12-24 months). Seller has first lien \u2014 if the down payment never shows up, they take the asset back.',
    realExample: 'You\u2019re confident the business will generate enough cash flow to fund the down payment within 1-2 years. Seller gets monthly payments from day one plus a better asset when the deferred payment comes.',
    whatToSay: '"I\u2019d like to close now and defer the down payment for 12-24 months. During that time, I\u2019ll make full monthly payments. You hold first lien \u2014 if the down payment doesn\u2019t materialize, you take the property back and you\u2019ve collected months of payments."',
    worstCase: 'Asset underperforms, can\u2019t make deferred down payment. Seller takes asset back. You\u2019ve lost time and payments.',
    bestCase: 'Asset performs, you pay the deferred down payment from profits, and you\u2019ve bought something with zero cash at closing.',
    bestPairedWith: 'Graduated Payments \u2014 start with lower monthly payments while building toward the deferred down payment.',
  },
]

const QUESTIONS: Question[] = [
  {
    id: 'seller-need',
    title: 'What does the seller actually need?',
    subtitle: 'This is the single most important question. Figuring out what they really want changes everything.',
    options: [
      { label: 'Monthly income / cash flow', structures: [1, 2, 3, 7] },
      { label: 'A lump sum (but flexible on timing)', structures: [10, 4] },
      { label: 'To get out / stop dealing with the asset', structures: [9, 6] },
      { label: 'Maximum total return (willing to wait)', structures: [5, 7] },
      { label: 'Help with something besides money', structures: [8] },
    ],
  },
  {
    id: 'your-situation',
    title: 'What do YOU have to work with?',
    subtitle: 'Be honest. The right structure depends on your actual starting position.',
    options: [
      { label: 'Zero cash, but I can operate the asset', structures: [6, 7, 8] },
      { label: 'Some cash, not enough for full down payment', structures: [4, 10] },
      { label: 'Strong cash flow projections on the asset', structures: [1, 2, 3] },
      { label: 'Assets or skills to trade', structures: [8, 4] },
      { label: 'Good relationship with the seller already', structures: [7, 5, 9] },
    ],
  },
  {
    id: 'asset-condition',
    title: 'What\u2019s the asset\u2019s condition?',
    subtitle: 'The state of the asset determines which structures make sense.',
    options: [
      { label: 'Cash-flowing and stable', structures: [1, 4, 7] },
      { label: 'Underperforming but fixable', structures: [6, 3, 5] },
      { label: 'Needs significant work', structures: [6, 10] },
      { label: 'Seller is tired / burned out on it', structures: [9, 6] },
    ],
  },
  {
    id: 'trust-level',
    title: 'How strong is your relationship with the seller?',
    subtitle: 'Remember the Mom vs. Stranger Spectrum. Where are you right now?',
    options: [
      { label: 'Stranger (just met)', structures: [4, 6] },
      { label: 'Acquaintance (some rapport)', structures: [3, 1, 10] },
      { label: 'Trusted (real relationship built)', structures: [7, 5, 9] },
    ],
  },
]

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface ScorecardClientProps {
  conversionUrl?: string
  conversionLabel?: string
}

export default function ScorecardClient({ conversionUrl, conversionLabel }: ScorecardClientProps) {
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [currentQuestion, setCurrentQuestion] = useState(-1) // -1 = intro
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = useCallback((questionId: string, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }))
  }, [])

  // Calculate structure scores based on answers
  const structureScores = useMemo(() => {
    const scores: Record<number, number> = {}
    STRUCTURES.forEach((s) => { scores[s.id] = 0 })

    Object.entries(answers).forEach(([questionId, optionIndex]) => {
      const question = QUESTIONS.find((q) => q.id === questionId)
      if (!question) return
      const option = question.options[optionIndex]
      if (!option) return
      option.structures.forEach((structureId) => {
        scores[structureId] = (scores[structureId] || 0) + 1
      })
    })

    return scores
  }, [answers])

  // Get top structures (sorted by score, take top 3)
  const topStructures = useMemo(() => {
    return [...STRUCTURES]
      .sort((a, b) => (structureScores[b.id] || 0) - (structureScores[a.id] || 0))
      .slice(0, 3)
  }, [structureScores])

  const answeredCount = Object.keys(answers).length

  const goNext = () => {
    if (currentQuestion < 3) {
      setCurrentQuestion((prev) => prev + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setShowResults(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const goPrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const startFinder = () => {
    setCurrentQuestion(0)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const resetFinder = () => {
    setAnswers({})
    setCurrentQuestion(-1)
    setShowResults(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // ---------------------------------------------------------------------------
  // Render: Intro
  // ---------------------------------------------------------------------------
  if (currentQuestion === -1 && !showResults) {
    return (
      <main className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 bg-[#1e3a5f]/5 text-[#1e3a5f] text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                2-Minute Deal Matcher
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-3 leading-tight">
              The Deal Structure Finder
            </h1>
            <p className="text-lg md:text-xl text-[#1e3a5f] font-medium text-center mb-6">
              Which Seller Financing Structure Fits Your Deal?
            </p>

            <p className="text-gray-600 text-center text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed">
              You don&apos;t need to memorize all 10 structures. You need to know which 2-3 fit YOUR situation. Answer 4 questions. Get matched to the structures most likely to work for your next deal.
            </p>

            <p className="text-xs text-gray-400 text-center mb-10">
              By Chris Koerner &mdash; 17 years buying real estate | 5 companies built &amp; sold (7-8 figures each) | $800K business for $50K down
            </p>

            <div className="border-t border-gray-100 mb-8" />

            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Before You Start
            </h2>
            <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4 mb-8">
              <p>
                One of the questions I get most often is: &ldquo;Chris, I want to buy a business but I don&apos;t have any money.&rdquo;
              </p>
              <p>
                Good. Because constraints equal creativity.
              </p>
              <p>
                The 10 structures in this tool are the exact methods I&apos;ve used to buy an $800,000 business for $50,000 down, structure a master lease on a $2 million RV park for $7,000 a month, and buy my first house making $2.13 an hour.
              </p>
              <p>
                But you don&apos;t pitch all 10 to a seller. You pitch the 2-3 that solve THEIR problem. This tool helps you figure out which ones those are.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                How It Works
              </h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#1e3a5f] font-semibold mt-px">1.</span>
                  Answer 4 questions about your deal situation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1e3a5f] font-semibold mt-px">2.</span>
                  Get matched to your top 3 structures
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1e3a5f] font-semibold mt-px">3.</span>
                  Each match includes: how it works, real example, what to say, and risk bracket
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1e3a5f] font-semibold mt-px">4.</span>
                  Takes about 2 minutes
                </li>
              </ul>
              <p className="text-sm text-gray-900 font-semibold mt-4">
                Think about a specific deal you&apos;re looking at. The more real the situation, the better the match.
              </p>
            </div>

            <button
              onClick={startFinder}
              className="w-full bg-[#1e3a5f] text-white font-semibold py-4 px-6 rounded-xl hover:bg-[#162d4a] transition-colors text-base cursor-pointer"
            >
              Find My Deal Structures
            </button>
          </div>
        </div>
      </main>
    )
  }

  // ---------------------------------------------------------------------------
  // Render: Results
  // ---------------------------------------------------------------------------
  if (showResults) {
    return (
      <main className="py-12 px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Header */}
          <div className="bg-white border-2 border-[#1e3a5f]/20 rounded-2xl p-8 md:p-12 text-center shadow-sm">
            <p className="text-sm text-gray-500 uppercase tracking-wider font-medium mb-2">
              Your Top 3 Deal Structures
            </p>
            <p className="text-gray-600 text-sm md:text-base mb-4">
              Based on your answers, these are the structures most likely to work for your situation. Don&apos;t pitch all 10 &mdash; pitch these.
            </p>
          </div>

          {/* Top 3 Structures */}
          {topStructures.map((structure, idx) => (
            <div key={structure.id} className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
              {/* Structure Header */}
              <div className={`px-6 md:px-8 py-5 ${idx === 0 ? 'bg-[#1e3a5f] text-white' : 'bg-gray-50 border-b border-gray-200'}`}>
                <div className="flex items-center gap-3">
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${idx === 0 ? 'bg-white/20 text-white' : 'bg-[#1e3a5f]/10 text-[#1e3a5f]'}`}>
                    #{idx + 1}
                  </span>
                  <div>
                    <h3 className={`text-lg font-bold ${idx === 0 ? 'text-white' : 'text-gray-900'}`}>
                      {structure.name}
                    </h3>
                    <p className={`text-sm ${idx === 0 ? 'text-white/70' : 'text-gray-500'}`}>
                      {structure.tagline}
                    </p>
                  </div>
                </div>
                <div className="mt-2 ml-11">
                  <span className={`text-xs font-medium ${idx === 0 ? 'text-white/50' : 'text-gray-400'}`}>
                    Match strength: {structureScores[structure.id]}/4
                  </span>
                </div>
              </div>

              {/* Structure Details */}
              <div className="px-6 md:px-8 py-6 space-y-5">
                <div>
                  <p className="text-xs font-semibold text-[#1e3a5f] uppercase tracking-wider mb-2">How It Works</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{structure.howItWorks}</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs font-semibold text-[#1e3a5f] uppercase tracking-wider mb-2">Real Example</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{structure.realExample}</p>
                </div>

                <div className="bg-[#1e3a5f]/5 rounded-xl p-4">
                  <p className="text-xs font-semibold text-[#1e3a5f] uppercase tracking-wider mb-2">What to Say to the Seller</p>
                  <p className="text-gray-800 text-sm leading-relaxed italic">{structure.whatToSay}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded-xl p-4">
                    <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-2">Worst Case</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{structure.worstCase}</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-2">Best Case</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{structure.bestCase}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Best Paired With</p>
                  <p className="text-gray-600 text-sm">{structure.bestPairedWith}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Negotiation Framework */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              The Negotiation Principle That Ties It All Together
            </h2>
            <div className="bg-[#1e3a5f]/5 border border-[#1e3a5f]/10 rounded-xl p-5 mb-4">
              <p className="text-[#1e3a5f] font-bold text-lg mb-2">
                My price, your terms. Or your price, my terms.
              </p>
              <p className="text-gray-600 text-sm">
                If the seller won&apos;t move on price &mdash; negotiate terms. If they won&apos;t move on terms &mdash; negotiate price.
              </p>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              And the rule underneath: <strong>it should only be math to you.</strong> Don&apos;t get emotionally attached. Be willing to walk from any deal at any time. Fall in love with an asset class, not a specific asset.
            </p>
          </div>

          {/* Conversion CTA — shown when client has a conversion URL (replay or webinar) */}
          {conversionUrl && conversionLabel && (
            <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] rounded-2xl p-8 md:p-10 text-center shadow-sm border-2 border-white/10">
              <p className="text-sm text-white/60 uppercase tracking-wider font-medium mb-3">
                Go Deeper
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                Watch Chris Break Down These Structures Live
              </h2>
              <p className="text-blue-100 text-sm md:text-base mb-6 max-w-lg mx-auto leading-relaxed">
                You&apos;ve got your top 3 structures. Now watch Chris walk through real deals using these exact methods &mdash; with the numbers, the conversations, and the mistakes to avoid.
              </p>
              <a
                href={conversionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#1e3a5f] font-semibold py-3.5 px-8 rounded-xl hover:bg-gray-100 transition-colors text-sm md:text-base"
              >
                {conversionLabel}
              </a>
            </div>
          )}

          {/* CTA */}
          <div className="bg-[#1e3a5f] rounded-2xl p-8 md:p-10 text-center shadow-sm">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              Want the Full Playbook?
            </h2>
            <p className="text-blue-100 text-sm md:text-base mb-4 max-w-lg mx-auto leading-relaxed">
              Chris breaks down one real deal structure with actual numbers every week in his free newsletter. No theory. No fluff. Just the playbook.
            </p>
            <a
              href="https://tkopod.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#1e3a5f] font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors text-sm md:text-base mb-4"
            >
              Subscribe Free at tkopod.com
            </a>
            <p className="text-blue-200 text-xs">
              750+ operators sharing real deals at TKOwners.com &mdash; $99/month
            </p>
          </div>

          {/* Retake */}
          <div className="text-center space-y-4 pb-4">
            <button
              onClick={resetFinder}
              className="text-sm text-[#1e3a5f] font-medium hover:underline cursor-pointer"
            >
              Start Over With a Different Deal
            </button>
            <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
              Chris Koerner has started and sold five 7-8 figure companies across five industries.
              He&apos;s been buying real estate for 17 years and runs the TKOwners community of
              750+ operators. He produces 40,000+ words of free business content monthly.
            </p>
          </div>
        </div>
      </main>
    )
  }

  // ---------------------------------------------------------------------------
  // Render: Questions
  // ---------------------------------------------------------------------------
  const question = QUESTIONS[currentQuestion]
  const currentAnswer = answers[question.id]
  const canAdvance = currentAnswer !== undefined

  return (
    <main className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
            <span>Question {currentQuestion + 1} of 4</span>
            <span>{answeredCount}/4 answered</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className="h-2 rounded-full bg-[#1e3a5f] transition-all duration-500"
              style={{ width: `${((currentQuestion + (canAdvance ? 1 : 0)) / 4) * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-3">
            {QUESTIONS.map((q, idx) => {
              const done = answers[q.id] !== undefined
              const active = idx === currentQuestion
              return (
                <button
                  key={q.id}
                  onClick={() => {
                    setCurrentQuestion(idx)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className={`w-10 h-10 rounded-full text-xs font-semibold transition-all cursor-pointer
                    ${active
                      ? 'bg-[#1e3a5f] text-white ring-2 ring-[#1e3a5f]/30 ring-offset-2'
                      : done
                        ? 'bg-[#1e3a5f]/10 text-[#1e3a5f]'
                        : 'bg-gray-100 text-gray-400'
                    }
                  `}
                  title={q.title}
                  aria-label={`Go to question ${idx + 1}`}
                >
                  {idx + 1}
                </button>
              )
            })}
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 px-6 md:px-8 py-5">
            <p className="text-xs text-[#1e3a5f] font-semibold uppercase tracking-wider mb-1">
              Question {currentQuestion + 1}
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              {question.title}
            </h2>
          </div>

          <div className="px-6 md:px-8 pt-6 pb-4">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed italic">
              {question.subtitle}
            </p>
          </div>

          <div className="px-6 md:px-8 pb-8 space-y-3">
            {question.options.map((option, optIdx) => {
              const isSelected = currentAnswer === optIdx
              return (
                <label
                  key={optIdx}
                  className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all
                    ${isSelected
                      ? 'border-[#1e3a5f] bg-[#1e3a5f]/5'
                      : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50'
                    }
                  `}
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                      ${isSelected ? 'border-[#1e3a5f] bg-[#1e3a5f]' : 'border-gray-300'}
                    `}>
                      {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </div>
                  <input
                    type="radio"
                    name={question.id}
                    value={optIdx}
                    checked={isSelected}
                    onChange={() => handleAnswer(question.id, optIdx)}
                    className="sr-only"
                    aria-label={option.label}
                  />
                  <span className={`text-sm ${isSelected ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
                    {option.label}
                  </span>
                </label>
              )
            })}
          </div>

          {/* Navigation */}
          <div className="border-t border-gray-200 px-6 md:px-8 py-5 bg-gray-50">
            <div className="flex gap-3">
              {currentQuestion > 0 && (
                <button
                  onClick={goPrev}
                  className="flex-1 border border-gray-300 text-gray-700 font-medium py-3 px-5 rounded-xl hover:bg-gray-100 transition-colors text-sm cursor-pointer"
                >
                  Previous
                </button>
              )}
              <button
                onClick={goNext}
                disabled={!canAdvance}
                className={`flex-1 font-semibold py-3 px-5 rounded-xl text-sm transition-colors cursor-pointer
                  ${canAdvance
                    ? 'bg-[#1e3a5f] text-white hover:bg-[#162d4a]'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }
                `}
              >
                {currentQuestion === 3 ? 'See My Results' : 'Next Question'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
