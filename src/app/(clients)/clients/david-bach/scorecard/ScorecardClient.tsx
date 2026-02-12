'use client'

import { useState, useMemo, useCallback } from 'react'

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface Question {
  id: string
  text: string
  options: [string, string, string] // 0, 1, 2
}

interface Category {
  name: string
  intro: string
  questions: [Question, Question, Question]
}

interface FixRow {
  category: string
  move: string
  time: string
}

const CATEGORIES: Category[] = [
  {
    name: 'Pay Yourself First',
    intro:
      "The government doesn\u2019t ask you to budget to pay your taxes. They take the money automatically. They know if they didn\u2019t, you\u2019d have nothing left to give. Your savings should work the same way.",
    questions: [
      {
        id: 'q1',
        text: 'Do you have an automatic transfer set up to move money into a retirement account (401k, IRA, pension, or equivalent) every time you get paid?',
        options: [
          "No automatic transfer. I save when I remember to (or I don\u2019t save at all).",
          "I have something set up, but it\u2019s less than 5% of my gross income.",
          'Yes. Money moves automatically into my retirement account at 10%+ of my gross income before I can touch it.',
        ],
      },
      {
        id: 'q2',
        text: 'Does the money move on the SAME DAY your paycheck hits \u2014 before you have a chance to spend it?',
        options: [
          "No. The money sits in my checking account and I transfer it later (if there\u2019s anything left).",
          "It moves within a few days, but not same-day.",
          'Same day. Paycheck arrives, money moves immediately. I never see it.',
        ],
      },
      {
        id: 'q3',
        text: 'Do you know the exact percentage of your gross income that goes to retirement savings right now?',
        options: [
          'I have no idea.',
          'I have a rough idea, maybe 3-5%.',
          'I know the exact number and it\u2019s 12% or higher (the Automatic Millionaire target).',
        ],
      },
    ],
  },
  {
    name: 'Emergency Protection',
    intro:
      "Four out of 10 Americans can\u2019t get their hands on $1,000 in case of emergency. The Federal Reserve says 37% can\u2019t cover a $400 surprise expense. When the government shut down for six weeks, that was three pay cycles \u2014 and the average American didn\u2019t have two weeks of expenses saved.",
    questions: [
      {
        id: 'q4',
        text: 'Do you have a separate emergency savings account (not your regular checking)?',
        options: [
          'No. Everything is in one account and I just hope nothing bad happens.',
          "I have something, but it\u2019s less than one month of expenses.",
          'Yes. I have a dedicated emergency account with 3+ months of living expenses.',
        ],
      },
      {
        id: 'q5',
        text: 'Is money automatically deposited into that emergency account every pay period?',
        options: [
          'No. I add money manually when I think about it (which is rarely).',
          "I add money sometimes, but it\u2019s not automatic.",
          "Yes. Automatic transfer every pay period. I don\u2019t have to think about it.",
        ],
      },
      {
        id: 'q6',
        text: 'If you lost your job tomorrow, how many months could you survive without borrowing money?',
        options: [
          "Less than one month. I\u2019d be in trouble immediately.",
          '1-2 months if I cut everything.',
          "3+ months. I\u2019d be stressed but not in a financial emergency.",
        ],
      },
    ],
  },
  {
    name: 'The Dream Account',
    intro:
      "You need to put money away for your dreams. That\u2019s how they become real. A dream account could be for buying a house, saving for college, taking the vacation you\u2019ve been talking about for three years, getting married, starting a business. Without a dedicated account, your dreams are just wishes.",
    questions: [
      {
        id: 'q7',
        text: 'Do you have a savings account specifically labeled for a goal or dream (house, wedding, vacation, business, education)?',
        options: [
          "No. I don\u2019t have any dedicated savings for future goals.",
          "I have something in mind but it\u2019s mixed in with my regular savings.",
          'Yes. I have a clearly labeled account for a specific dream with a target dollar amount.',
        ],
      },
      {
        id: 'q8',
        text: 'Is money automatically going into that dream account every month?',
        options: [
          'No. I\u2019ll start saving for it "someday."',
          "I put money in when I have extra (which isn\u2019t often).",
          "Yes. Automatic transfer. The dream is being funded whether I think about it or not.",
        ],
      },
      {
        id: 'q9',
        text: 'Could you write down right now the exact dollar amount you need for your biggest financial dream and the date you want it by?',
        options: [
          "No. I haven\u2019t thought about it that specifically.",
          'I have a vague number but no target date.',
          'Yes. I know the exact amount and I know when I want to hit it.',
        ],
      },
    ],
  },
  {
    name: 'Debt Elimination',
    intro:
      'Debt is like quicksand. When I came out of college with $12,000 in credit card debt, it felt like carrying a 50-pound backpack everywhere I went. I remember opening my bills and having the room spin. The way out isn\u2019t willpower \u2014 it\u2019s a system called DOLP (Dead On Last Payment).',
    questions: [
      {
        id: 'q10',
        text: 'Do you know exactly how much total debt you have right now (credit cards, loans, everything)?',
        options: [
          "No. I\u2019m afraid to add it up.",
          "I have a rough idea, but I haven\u2019t listed it all out recently.",
          'Yes. I have every debt listed with the exact balance and interest rate.',
        ],
      },
      {
        id: 'q11',
        text: 'Are ALL minimum payments on ALL debts set to automatic?',
        options: [
          'No. I pay manually and sometimes miss payments.',
          'Some are automatic, but not all.',
          'Every single minimum payment is automatic. I never miss one.',
        ],
      },
      {
        id: 'q12',
        text: 'Do you have a specific debt payoff strategy (like DOLP) where you\u2019re putting extra money toward your smallest balance first?',
        options: [
          'No strategy. I just pay minimums and hope for the best.',
          "I try to pay extra when I can, but there\u2019s no system.",
          "Yes. I have a written plan, I\u2019m attacking the smallest balance first, and I can see my progress.",
        ],
      },
    ],
  },
  {
    name: 'Homeownership Track',
    intro:
      "Homeowners in America are worth 40 times more than renters. The average homeowner: $400,000 in net worth. The average renter: $10,000. This isn\u2019t about buying a mansion. It\u2019s about getting on the wealth escalator. Even if you can\u2019t buy right now, you should have a plan to get there.",
    questions: [
      {
        id: 'q13',
        text: 'Do you currently own a home (or a share of a home)?',
        options: [
          "No, and I don\u2019t have a plan to buy one.",
          "No, but I\u2019m actively saving toward a down payment.",
          "Yes. I own a home and I\u2019m building equity.",
        ],
      },
      {
        id: 'q14',
        text: 'If you have a mortgage, are you making any extra payments to pay it off faster (bi-weekly payments, extra annual payment, or 10% added to monthly payment)?',
        options: [
          "No. Standard 30-year payments only. (Or: I don\u2019t have a mortgage.)",
          "I\u2019ve thought about it but haven\u2019t set it up.",
          'Yes. I have an accelerated payoff strategy in place (bi-weekly, extra payment, or principal add-on).',
        ],
      },
      {
        id: 'q15',
        text: 'Do you know roughly how much equity you have in your home right now? (Or if renting: do you know how much your rent will cost you over the next 10 years with no equity to show for it?)',
        options: [
          'No idea.',
          'Rough idea.',
          "Yes. I know my equity position (or I\u2019ve calculated my 10-year rent cost and it scared me into action).",
        ],
      },
    ],
  },
  {
    name: 'Investment Automation',
    intro:
      "Your investments should be boring. Your life should be interesting. If someone\u2019s at a cocktail party talking about their investments and it\u2019s exciting, something\u2019s wrong. The 654,000 people in Fidelity 401k plans who are now millionaires didn\u2019t pick hot stocks. They invested in index funds automatically, month after month, for decades.",
    questions: [
      {
        id: 'q16',
        text: 'Is money automatically invested every month into a diversified investment (index fund, target-date fund, or balanced fund)?',
        options: [
          "No. I don\u2019t invest regularly (or at all).",
          'I invest sometimes, but not on a set schedule.',
          'Yes. Money goes into investments automatically every month without me doing anything.',
        ],
      },
      {
        id: 'q17',
        text: 'Do you know what your money is invested in right now? (Could you name the funds or tell someone your stock/bond allocation?)',
        options: [
          "No clue. I just picked something when I signed up (or I haven\u2019t signed up).",
          "I have some idea but couldn\u2019t explain it to someone.",
          "Yes. I know my allocation, I know my funds, and it\u2019s roughly 70% stocks / 30% bonds (or age-appropriate).",
        ],
      },
      {
        id: 'q18',
        text: 'In the last 12 months, have you checked your investments and made sure you\u2019re still on track?',
        options: [
          "I haven\u2019t looked in over a year (or ever).",
          "I\u2019ve glanced at it but didn\u2019t really review anything.",
          "Yes. I\u2019ve reviewed my accounts, checked my allocation, and confirmed I\u2019m on track.",
        ],
      },
    ],
  },
  {
    name: 'Subscription & Spending Leak',
    intro:
      "These phones are designed to get you to spend everything. Today there\u2019s better technology than there\u2019s ever been to get you to spend more money. And nobody wants you to spend money once \u2014 they want you to spend money for a lifetime. That\u2019s a lifetime value of a customer. There\u2019s a battle for your income, and everyone wants a piece of it.",
    questions: [
      {
        id: 'q19',
        text: 'Have you audited your phone subscriptions in the last 90 days? (Settings > Your Name > Subscriptions)',
        options: [
          "I\u2019ve never done this. I don\u2019t even know where to look.",
          "I did it once a while ago, but I\u2019m probably paying for things I forgot about.",
          'Yes. I audited recently, cancelled what I don\u2019t use, and I check quarterly.',
        ],
      },
      {
        id: 'q20',
        text: 'Do you know how much you spend per month on subscriptions (apps, streaming, software, memberships)?',
        options: [
          "No idea. It\u2019s probably more than I think.",
          "Rough idea, but I\u2019ve never added it all up.",
          "I know the exact number and I\u2019ve made a conscious decision about each one.",
        ],
      },
      {
        id: 'q21',
        text: 'Could you find $50-$200 per month in spending you could cut without changing your lifestyle?',
        options: [
          "I doubt it. I feel like I need everything I\u2019m paying for.",
          "Probably, but I haven\u2019t looked.",
          "I\u2019ve already done this. I found the waste and redirected that money to saving/investing.",
        ],
      },
    ],
  },
  {
    name: 'Protection & Planning',
    intro:
      "Six out of 10 people don\u2019t have a will. 40% of couples can\u2019t identify how much their partner earns. If your partner died today, would you know where all the money is, the passwords to every account, and whether there\u2019s enough life insurance? I almost died four years ago from meningitis. When I woke up from a four-day coma, I couldn\u2019t remember my bank passwords. That experience changed everything about how I think about financial protection.",
    questions: [
      {
        id: 'q22',
        text: 'Do you have a will (at any age, especially if you have a partner or children)?',
        options: [
          'No will.',
          "I\u2019ve been meaning to do one but haven\u2019t gotten around to it.",
          'Yes. I have a current, signed will.',
        ],
      },
      {
        id: 'q23',
        text: 'If you\u2019re in a relationship: does your partner know where all the money is, the account passwords, and what to do if something happens to you?',
        options: [
          "No. They\u2019d be completely lost.",
          'They know some things, but there are gaps.',
          "Yes. We\u2019ve had the conversation, everything is documented, and we do an annual review.",
        ],
      },
      {
        id: 'q24',
        text: 'Do you have life insurance (especially if you have dependents)?',
        options: [
          'No life insurance.',
          "I have some through work, but I\u2019m not sure if it\u2019s enough.",
          'Yes. I have adequate term life insurance to protect my family.',
        ],
      },
    ],
  },
]

const FIX_TABLE: FixRow[] = [
  {
    category: 'Pay Yourself First',
    move: 'Open or increase automatic retirement contribution to at least 1% of gross income',
    time: '10 minutes',
  },
  {
    category: 'Emergency Protection',
    move: 'Open a separate high-yield savings account and set up $10/day automatic transfer',
    time: '10 minutes',
  },
  {
    category: 'Dream Account',
    move: 'Name your #1 financial dream, set a dollar target, open a dedicated account, automate a monthly transfer',
    time: '15 minutes',
  },
  {
    category: 'Debt Elimination',
    move: 'List every debt smallest to largest, set all minimums to automatic, put all extra cash toward the smallest one',
    time: '20 minutes',
  },
  {
    category: 'Homeownership Track',
    move: 'Calculate your 10-year rent cost, start a "down payment" automatic savings, look into first-time buyer programs',
    time: '30 minutes',
  },
  {
    category: 'Investment Automation',
    move: 'Open an account at Fidelity/Schwab/Vanguard, pick a target-date fund or VTI, set up automatic monthly investment',
    time: '10 minutes',
  },
  {
    category: 'Subscription & Spending Leak',
    move: 'Go to phone Settings > Subscriptions right now, cancel everything you don\u2019t use, redirect that money to investing',
    time: '5 minutes',
  },
  {
    category: 'Protection & Planning',
    move: 'Make a will (online services make it easy), have "the financial conversation" with your partner this weekend',
    time: '1 hour',
  },
]

const COMPOUND_TABLE = [
  { age: 25, years: 40, amount: '$4,424,000' },
  { age: 30, years: 35, amount: '$2,635,000' },
  { age: 35, years: 30, amount: '$1,555,000' },
  { age: 40, years: 25, amount: '$902,000' },
  { age: 45, years: 20, amount: '$505,000' },
  { age: 50, years: 15, amount: '$266,000' },
]

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getTier(total: number) {
  if (total <= 12)
    return {
      label: 'Code Red',
      sublabel: 'Your Financial Life Is on Manual',
      color: 'text-red-600',
      bg: 'bg-red-50',
      border: 'border-red-200',
      ring: 'ring-red-500',
      barColor: 'bg-red-500',
      description:
        'You\u2019re flying blind. Money comes in, money goes out, and you don\u2019t know where it all went. David calls this a "no plan." The good news? You\u2019re exactly who The Automatic Millionaire was written for. Every single fix is in the book, and most can be set up in 10 minutes. You don\u2019t need discipline. You need automation. Start with one thing: open your phone, go to your retirement account (or open one at Fidelity, Schwab, or Vanguard), and set up an automatic transfer of 1% of your income. Just 1%. You won\u2019t notice it. Do that today.',
    }
  if (total <= 24)
    return {
      label: 'Yellow Zone',
      sublabel: 'You\u2019ve Started, But the System Has Holes',
      color: 'text-yellow-600',
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      ring: 'ring-yellow-500',
      barColor: 'bg-yellow-500',
      description:
        'You\u2019re doing some things right, but the gaps are where your wealth is leaking. Look at which categories scored lowest \u2014 those are your highest-leverage fixes. Most people in this range have a retirement account but aren\u2019t contributing enough, have some savings but no automation, and are bleeding money through forgotten subscriptions. The Automatic Millionaire shows you how to close every gap and get the whole system running automatically. Your #1 move: increase your retirement contribution by 1% this month and set up automatic transfers for emergency and dream accounts.',
    }
  if (total <= 36)
    return {
      label: 'Green Zone',
      sublabel: 'Your System Is Working, Time to Optimize',
      color: 'text-green-600',
      bg: 'bg-green-50',
      border: 'border-green-200',
      ring: 'ring-green-500',
      barColor: 'bg-green-500',
      description:
        'You\u2019re ahead of most Americans. Your finances are mostly automated, you\u2019re saving, and you have some protection in place. Now it\u2019s about optimization: Are you saving enough? (The millionaire formula is 14% of gross income plus employer match, invested 70/30 stocks/bonds.) Is your mortgage being paid off early? Are you maximizing tax advantages? The Automatic Millionaire\u2019s updated edition has new strategies for this exact stage \u2014 including which index funds to consider (VTI, QQQ, Vanguard Balanced) and how to build generational wealth.',
    }
  return {
    label: 'Automatic Millionaire',
    sublabel: 'You\u2019re Living the System',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    ring: 'ring-blue-500',
    barColor: 'bg-blue-600',
    description:
      'You\u2019ve built what David teaches. Your financial life runs on autopilot. You\u2019re paying yourself first, your debt has a payoff plan, your investments are automated, and your family is protected. At this point, your job is to maintain the system, teach it to the next generation, and focus on what money is actually for: health, love, gratitude, friendship, and fun. As Grandma Rose said: "Dream it, design it, and do it." You\u2019ve earned the right to focus on the dreams.',
  }
}

function categoryScore(
  scores: Record<string, number>,
  category: Category
): number {
  return category.questions.reduce(
    (sum, q) => sum + (scores[q.id] ?? 0),
    0
  )
}

function allCategoryAnswered(
  scores: Record<string, number>,
  category: Category
): boolean {
  return category.questions.every((q) => scores[q.id] !== undefined)
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface ScorecardClientProps {
  conversionUrl?: string
  conversionLabel?: string
}

export default function ScorecardClient({ conversionUrl, conversionLabel }: ScorecardClientProps) {
  const [scores, setScores] = useState<Record<string, number>>({})
  const [currentCategory, setCurrentCategory] = useState(-1) // -1 = intro
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = useCallback((questionId: string, value: number) => {
    setScores((prev) => ({ ...prev, [questionId]: value }))
  }, [])

  const totalScore = useMemo(
    () => CATEGORIES.reduce((sum, cat) => sum + categoryScore(scores, cat), 0),
    [scores]
  )

  const categoryScores = useMemo(
    () => CATEGORIES.map((cat) => categoryScore(scores, cat)),
    [scores]
  )

  const lowestCategoryIndex = useMemo(() => {
    let minIdx = 0
    let minVal = categoryScores[0]
    categoryScores.forEach((val, idx) => {
      if (val < minVal) {
        minVal = val
        minIdx = idx
      }
    })
    return minIdx
  }, [categoryScores])

  const answeredCount = Object.keys(scores).length

  // Navigation
  const goNext = () => {
    if (currentCategory < 7) {
      setCurrentCategory((prev) => prev + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setShowResults(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const goPrev = () => {
    if (currentCategory > 0) {
      setCurrentCategory((prev) => prev - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const startScorecard = () => {
    setCurrentCategory(0)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const resetScorecard = () => {
    setScores({})
    setCurrentCategory(-1)
    setShowResults(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // -----------------------------------------------------------------------
  // Render: Intro
  // -----------------------------------------------------------------------
  if (currentCategory === -1 && !showResults) {
    return (
      <main className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 bg-[#1e3a5f]/5 text-[#1e3a5f] text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
                5-Minute Assessment
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-3 leading-tight">
              The Automatic Millionaire Scorecard
            </h1>
            <p className="text-lg md:text-xl text-[#1e3a5f] font-medium text-center mb-6">
              How Automatic Is Your Financial Life?
            </p>

            {/* Subtitle */}
            <p className="text-gray-600 text-center text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed">
              The system that built 24 million millionaires isn&apos;t about discipline.
              It&apos;s about automation. Score yourself to find out if your money is working for
              you &mdash; or disappearing without a trace.
            </p>

            {/* Author line */}
            <p className="text-xs text-gray-400 text-center mb-10">
              By David Bach &mdash; Author of{' '}
              <em>The Automatic Millionaire</em> (10 million+ copies sold) |
              33 Years in Financial Services | Former Senior VP, Morgan Stanley
            </p>

            {/* Divider */}
            <div className="border-t border-gray-100 mb-8" />

            {/* Before You Start */}
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Before You Start
            </h2>
            <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4 mb-8">
              <p>
                Here&apos;s something I learned after 9 years at Morgan Stanley and 33 years
                helping ordinary people build wealth:
              </p>
              <p>
                The people who became millionaires on ordinary incomes didn&apos;t have more
                discipline than you. They didn&apos;t have a budget. They didn&apos;t make a lot
                of money.
              </p>
              <p>
                They had one thing: <strong>an automatic system.</strong>
              </p>
              <p>
                When I met Jim and Sue McIntyre, they walked into my office at age 52 with a net
                worth of $1.8 million. Their average income over their lifetime? $40,000 a year.
                I was making more than double that and was broke.
              </p>
              <p>
                The difference wasn&apos;t income. It wasn&apos;t willpower. It was that
                everything in their financial life was automatic. Money moved before they could
                spend it. Debt got paid without them thinking about it. Wealth built in the
                background while they lived their lives.
              </p>
              <p>
                This scorecard measures one thing:{' '}
                <strong>how automatic is your financial life?</strong>
              </p>
              <p>
                Your score isn&apos;t a judgment of your character. It&apos;s a diagnosis of your
                system. A low score doesn&apos;t mean you&apos;re bad with money &mdash; it means
                your setup is designed to fail.
              </p>
              <p>
                The good news? Every gap this scorecard reveals can be fixed in less than 10
                minutes.
              </p>
            </div>

            {/* How It Works */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                How It Works
              </h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#1e3a5f] font-semibold mt-px">1.</span>
                  8 categories, 3 questions each (24 questions total)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1e3a5f] font-semibold mt-px">2.</span>
                  Each question: score yourself 0, 1, or 2
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1e3a5f] font-semibold mt-px">3.</span>
                  Add up your total at the end
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1e3a5f] font-semibold mt-px">4.</span>
                  Your score tells you exactly where to focus first
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1e3a5f] font-semibold mt-px">5.</span>
                  Takes about 5 minutes
                </li>
              </ul>
              <p className="text-sm text-gray-900 font-semibold mt-4">
                Be brutally honest. This only works if you tell the truth.
              </p>
            </div>

            {/* Start Button */}
            <button
              onClick={startScorecard}
              className="w-full bg-[#1e3a5f] text-white font-semibold py-4 px-6 rounded-xl hover:bg-[#162d4a] transition-colors text-base cursor-pointer"
            >
              Start Scorecard
            </button>
          </div>
        </div>
      </main>
    )
  }

  // -----------------------------------------------------------------------
  // Render: Results
  // -----------------------------------------------------------------------
  if (showResults) {
    const tier = getTier(totalScore)
    const fix = FIX_TABLE[lowestCategoryIndex]

    return (
      <main className="py-12 px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Total Score Card */}
          <div
            className={`bg-white border-2 ${tier.border} rounded-2xl p-8 md:p-12 text-center shadow-sm`}
          >
            <p className="text-sm text-gray-500 uppercase tracking-wider font-medium mb-2">
              Your Total Score
            </p>
            <p className="text-6xl md:text-7xl font-bold text-gray-900 mb-1">
              {totalScore}
              <span className="text-2xl md:text-3xl text-gray-400 font-normal">
                /48
              </span>
            </p>
            <div className="mt-4 mb-6">
              <span
                className={`inline-block text-lg md:text-xl font-bold ${tier.color}`}
              >
                {tier.label}
              </span>
              <p className="text-sm text-gray-500 mt-1">{tier.sublabel}</p>
            </div>

            {/* Score bar */}
            <div className="w-full bg-gray-100 rounded-full h-3 mb-6">
              <div
                className={`h-3 rounded-full transition-all duration-700 ${tier.barColor}`}
                style={{ width: `${(totalScore / 48) * 100}%` }}
              />
            </div>

            {/* Tier description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed text-left">
              {tier.description}
            </p>
          </div>

          {/* Category Breakdown */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Category Breakdown
            </h2>
            <div className="space-y-4">
              {CATEGORIES.map((cat, idx) => {
                const score = categoryScores[idx]
                const isLowest = idx === lowestCategoryIndex
                return (
                  <div
                    key={cat.name}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      isLowest ? 'bg-red-50 border border-red-100' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-400 font-mono w-4">
                        {idx + 1}
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          isLowest ? 'text-red-700' : 'text-gray-700'
                        }`}
                      >
                        {cat.name}
                        {isLowest && (
                          <span className="ml-2 text-xs text-red-500 font-normal">
                            Lowest
                          </span>
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      {/* Dot indicators */}
                      <div className="flex gap-1">
                        {[0, 1, 2, 3, 4, 5].map((dot) => (
                          <div
                            key={dot}
                            className={`w-2.5 h-2.5 rounded-full ${
                              dot < score
                                ? isLowest
                                  ? 'bg-red-400'
                                  : 'bg-[#1e3a5f]'
                                : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                      <span
                        className={`text-sm font-semibold tabular-nums w-8 text-right ${
                          isLowest ? 'text-red-600' : 'text-gray-700'
                        }`}
                      >
                        {score}/6
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* #1 Fix */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Your #1 Fix
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Based on your lowest-scoring category:{' '}
              <strong className="text-gray-700">{fix.category}</strong>
            </p>
            <div className="bg-[#1e3a5f]/5 border border-[#1e3a5f]/10 rounded-xl p-5">
              <p className="text-[#1e3a5f] font-medium text-sm md:text-base mb-2">
                {fix.move}
              </p>
              <p className="text-xs text-gray-500">
                Time to set up: <strong>{fix.time}</strong>
              </p>
            </div>
          </div>

          {/* Compound Math Table */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              The Math That Changes Everything
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Here&apos;s what happens when you find just $27.40 a day and invest
              it:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-3 text-gray-500 font-medium text-xs uppercase tracking-wider">
                      Start Age
                    </th>
                    <th className="text-left py-3 px-3 text-gray-500 font-medium text-xs uppercase tracking-wider">
                      Years Investing
                    </th>
                    <th className="text-right py-3 px-3 text-gray-500 font-medium text-xs uppercase tracking-wider">
                      You&apos;ll Have
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPOUND_TABLE.map((row) => (
                    <tr
                      key={row.age}
                      className="border-b border-gray-100 last:border-0"
                    >
                      <td className="py-3 px-3 text-gray-700">{row.age}</td>
                      <td className="py-3 px-3 text-gray-700">
                        {row.years} years
                      </td>
                      <td className="py-3 px-3 text-right font-semibold text-[#1e3a5f]">
                        {row.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Can&apos;t find $27.40 a day? Start with $10. Start with $5.
              Start with $1.
            </p>
            <p className="text-sm text-gray-900 font-medium mt-2">
              The only number that guarantees you&apos;ll have nothing at
              retirement is zero.
            </p>
          </div>

          {/* Conversion CTA — shown when client has a conversion URL (replay or webinar) */}
          {conversionUrl && conversionLabel && (
            <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] rounded-2xl p-8 md:p-10 text-center shadow-sm border-2 border-white/10">
              <p className="text-sm text-white/60 uppercase tracking-wider font-medium mb-3">
                Want the Complete Breakdown?
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                Watch David Bach&apos;s Full Training
              </h2>
              <p className="text-blue-100 text-sm md:text-base mb-6 max-w-lg mx-auto leading-relaxed">
                This scorecard showed you where the gaps are. The training shows you exactly how to close them &mdash; with the same system that&apos;s created millions of automatic millionaires.
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
              Fix Every Gap This Scorecard Revealed
            </h2>
            <p className="text-blue-100 text-sm md:text-base mb-6 max-w-lg mx-auto leading-relaxed">
              <em>The Automatic Millionaire</em> shows you exactly how to fix
              every single gap &mdash; step by step, in plain English, with real
              stories of ordinary people who did it on ordinary incomes. Updated
              20th anniversary edition with new strategies for the AI economy.
            </p>
            <p className="text-blue-200 text-xs mb-6 italic">
              As Grandma Rose used to say: &ldquo;We need to change what
              we&apos;re doing, or nothing will change.&rdquo;
            </p>
            <a
              href="#"
              className="inline-block bg-white text-[#1e3a5f] font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors text-sm md:text-base"
            >
              Get The Automatic Millionaire
            </a>
          </div>

          {/* Retake / Author */}
          <div className="text-center space-y-4 pb-4">
            <button
              onClick={resetScorecard}
              className="text-sm text-[#1e3a5f] font-medium hover:underline cursor-pointer"
            >
              Retake Scorecard
            </button>
            <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
              David Bach is a 9-time New York Times bestselling author who has
              helped millions of ordinary people become financially free. He spent
              9 years as Senior Vice President at Morgan Stanley and has appeared
              on Oprah, Today, and The Diary of a CEO. His books have sold nearly
              10 million copies worldwide.
            </p>
          </div>
        </div>
      </main>
    )
  }

  // -----------------------------------------------------------------------
  // Render: Category Questions
  // -----------------------------------------------------------------------
  const category = CATEGORIES[currentCategory]
  const catScore = categoryScore(scores, category)
  const canAdvance = allCategoryAnswered(scores, category)

  return (
    <main className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
            <span>
              Category {currentCategory + 1} of 8
            </span>
            <span>{answeredCount}/24 questions answered</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className="h-2 rounded-full bg-[#1e3a5f] transition-all duration-500"
              style={{
                width: `${((currentCategory + (canAdvance ? 1 : 0)) / 8) * 100}%`,
              }}
            />
          </div>
          {/* Category dots */}
          <div className="flex justify-between mt-3">
            {CATEGORIES.map((cat, idx) => {
              const done = allCategoryAnswered(scores, cat)
              const active = idx === currentCategory
              return (
                <button
                  key={cat.name}
                  onClick={() => {
                    setCurrentCategory(idx)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className={`w-8 h-8 rounded-full text-xs font-semibold transition-all cursor-pointer
                    ${
                      active
                        ? 'bg-[#1e3a5f] text-white ring-2 ring-[#1e3a5f]/30 ring-offset-2'
                        : done
                          ? 'bg-[#1e3a5f]/10 text-[#1e3a5f]'
                          : 'bg-gray-100 text-gray-400'
                    }
                  `}
                  title={cat.name}
                  aria-label={`Go to category ${idx + 1}: ${cat.name}`}
                >
                  {idx + 1}
                </button>
              )
            })}
          </div>
        </div>

        {/* Category Card */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          {/* Category Header */}
          <div className="bg-gray-50 border-b border-gray-200 px-6 md:px-8 py-5">
            <p className="text-xs text-[#1e3a5f] font-semibold uppercase tracking-wider mb-1">
              Category {currentCategory + 1}
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              {category.name}
            </h2>
          </div>

          {/* Category Intro */}
          <div className="px-6 md:px-8 pt-6 pb-4">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed italic">
              &ldquo;{category.intro}&rdquo;
            </p>
          </div>

          {/* Questions */}
          <div className="px-6 md:px-8 pb-8 space-y-8">
            {category.questions.map((question, qIdx) => {
              const selectedValue = scores[question.id]
              return (
                <div key={question.id}>
                  {/* Question text */}
                  <p className="text-sm md:text-base font-medium text-gray-900 mb-4">
                    <span className="text-[#1e3a5f] font-semibold">
                      Q{currentCategory * 3 + qIdx + 1}.
                    </span>{' '}
                    {question.text}
                  </p>

                  {/* Options */}
                  <div className="space-y-3">
                    {question.options.map((optionText, optionValue) => {
                      const isSelected = selectedValue === optionValue
                      return (
                        <label
                          key={optionValue}
                          className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all
                            ${
                              isSelected
                                ? 'border-[#1e3a5f] bg-[#1e3a5f]/5'
                                : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50'
                            }
                          `}
                        >
                          {/* Custom radio */}
                          <div className="flex-shrink-0 mt-0.5">
                            <div
                              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                                ${
                                  isSelected
                                    ? 'border-[#1e3a5f] bg-[#1e3a5f]'
                                    : 'border-gray-300'
                                }
                              `}
                            >
                              {isSelected && (
                                <div className="w-2 h-2 rounded-full bg-white" />
                              )}
                            </div>
                          </div>
                          <input
                            type="radio"
                            name={question.id}
                            value={optionValue}
                            checked={isSelected}
                            onChange={() =>
                              handleAnswer(question.id, optionValue)
                            }
                            className="sr-only"
                            aria-label={`Score ${optionValue}: ${optionText}`}
                          />
                          <div className="flex-1 min-w-0">
                            <span
                              className={`inline-flex items-center justify-center w-5 h-5 rounded text-xs font-bold mr-2 flex-shrink-0
                                ${
                                  isSelected
                                    ? 'bg-[#1e3a5f] text-white'
                                    : 'bg-gray-100 text-gray-500'
                                }
                              `}
                            >
                              {optionValue}
                            </span>
                            <span
                              className={`text-sm ${
                                isSelected
                                  ? 'text-gray-900 font-medium'
                                  : 'text-gray-600'
                              }`}
                            >
                              {optionText}
                            </span>
                          </div>
                        </label>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Category Score & Navigation */}
          <div className="border-t border-gray-200 px-6 md:px-8 py-5 bg-gray-50">
            {/* Category score display */}
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm text-gray-500">
                Category Score
              </p>
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4, 5].map((dot) => (
                    <div
                      key={dot}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        dot < catScore ? 'bg-[#1e3a5f]' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700 tabular-nums">
                  {catScore}/6
                </span>
              </div>
            </div>

            {/* Nav buttons */}
            <div className="flex gap-3">
              {currentCategory > 0 && (
                <button
                  onClick={goPrev}
                  className="flex-1 border border-gray-300 text-gray-700 font-medium py-3 px-5 rounded-xl hover:bg-gray-100 transition-colors text-sm cursor-pointer"
                >
                  Previous Category
                </button>
              )}
              <button
                onClick={goNext}
                disabled={!canAdvance}
                className={`flex-1 font-semibold py-3 px-5 rounded-xl text-sm transition-colors cursor-pointer
                  ${
                    canAdvance
                      ? 'bg-[#1e3a5f] text-white hover:bg-[#162d4a]'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }
                `}
              >
                {currentCategory === 7 ? 'See My Results' : 'Next Category'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
