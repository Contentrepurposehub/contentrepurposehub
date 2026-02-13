'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Question {
  id: number
  text: string
  why: string
  options: { label: string; points: number }[]
}

const questions: Question[] = [
  {
    id: 1,
    text: 'What percentage of your gross income do you save/invest each month?',
    why: 'The 654,000 401k millionaires at Fidelity save 14% of gross income. The average American saves 3-5%. This single number predicts millionaire status more than income does.',
    options: [
      { label: "I don't save regularly", points: 0 },
      { label: '1-5%', points: 1 },
      { label: '6-10%', points: 2 },
      { label: '11-14%', points: 3 },
      { label: '15% or more', points: 4 },
    ],
  },
  {
    id: 2,
    text: 'Is your savings/investing automated (moves on payday without you doing anything)?',
    why: "The government doesn't ask you to budget to pay taxes — they take them automatically. That's why taxes always get paid. Your wealth system needs to work the same way.",
    options: [
      { label: "No — I transfer manually when I remember", points: 0 },
      { label: "Some is automated, some isn't", points: 2 },
      { label: "Yes — everything moves automatically on payday", points: 4 },
    ],
  },
  {
    id: 3,
    text: 'What is your current investment allocation?',
    why: "The 401k millionaire allocation is 70% stocks / 30% bonds. The stock market has gone up 600% in the last 20 years. If you're sitting in cash or money market funds, you're missing the escalator.",
    options: [
      { label: "I don't invest / all cash", points: 0 },
      { label: "Mostly bonds or \"safe\" investments", points: 1 },
      { label: "Mix of stocks and bonds (not sure of ratio)", points: 2 },
      { label: "Roughly 70/30 stocks to bonds (or more aggressive)", points: 4 },
    ],
  },
  {
    id: 4,
    text: 'Do you have a retirement account (401k, IRA, or equivalent)?',
    why: "There are $45 trillion in retirement accounts in America. That's Escalator #1 to wealth. If you're not on it, you're missing where the majority of millionaires built their net worth.",
    options: [
      { label: "No", points: 0 },
      { label: "Yes, but I'm not contributing regularly", points: 1 },
      { label: "Yes, contributing but below employer match", points: 2 },
      { label: "Yes, contributing at least enough for full employer match", points: 3 },
      { label: "Yes, maxing out or contributing 14%+", points: 4 },
    ],
  },
  {
    id: 5,
    text: 'Do you own your home (or are you actively working toward it)?',
    why: "Homeowners are worth 40x more than renters. Average homeowner net worth: $400,000+. Average renter: $10,000. Home equity in America hit $34 trillion. That's Escalator #2.",
    options: [
      { label: "Renting with no homeownership plan", points: 0 },
      { label: "Renting but actively saving for a down payment", points: 2 },
      { label: "Own my home (still have a mortgage)", points: 3 },
      { label: "Own my home (paid off or nearly)", points: 4 },
    ],
  },
  {
    id: 6,
    text: 'How many months of expenses do you have in an emergency fund?',
    why: "The security account exists for one reason — so you never raid your retirement account when life happens. Without it, one car repair or medical bill can derail decades of compound interest.",
    options: [
      { label: "Less than 1 month", points: 0 },
      { label: "1-2 months", points: 1 },
      { label: "3-4 months", points: 3 },
      { label: "5-6+ months", points: 4 },
    ],
  },
  {
    id: 7,
    text: "Have you increased your savings rate in the past 12 months?",
    why: "Can't do 14% right now? Start at 3%. Set it to increase by 1% every six months. You won't feel the increases. Within 3-5 years, you'll be at the target. The key is the system ratchets UP, not stays flat.",
    options: [
      { label: "No — it's the same (or lower)", points: 0 },
      { label: "Yes — I increased it once", points: 2 },
      { label: "Yes — I have automatic annual increases set up", points: 4 },
    ],
  },
  {
    id: 8,
    text: 'Do you have a "dream account" — money set aside for goals beyond retirement?',
    why: "Wealth isn't just about the number. The dream account funds travel, a down payment, a sabbatical — whatever makes life worth living while you're building wealth. Most people skip this and save out of fear, not purpose.",
    options: [
      { label: "No — I haven't thought about this", points: 0 },
      { label: "I have goals but no dedicated account", points: 1 },
      { label: "Yes — I have a separate account I contribute to", points: 3 },
      { label: "Yes — automated monthly contributions", points: 4 },
    ],
  },
]

interface Tier {
  range: string
  title: string
  emoji: string
  description: string
  actions: string[]
}

const tiers: Tier[] = [
  {
    range: '0-8',
    title: 'Manual Mode',
    emoji: '🔴',
    description: "Your financial system is running on willpower — and willpower always loses. You're making decisions about money every day, which means the algorithms, the ads, and lifestyle creep are winning. The good news: you don't need to overhaul everything at once. You need to automate ONE thing today.",
    actions: [
      'Open a retirement account (401k or IRA) this week',
      'Set automatic contribution to 3% of gross income',
      'Schedule a 1% increase every 6 months',
      'Set up a high-yield savings account for emergencies',
    ],
  },
  {
    range: '9-16',
    title: 'Semi-Automatic',
    emoji: '🟡',
    description: "You've started — which puts you ahead of most people. But your system has gaps. Some things are automated, some aren't. Some accounts are funded, some are missing. The danger zone is thinking you're \"doing fine\" when the math says you're still 10-15 years behind where you could be.",
    actions: [
      'Increase savings rate to 12.5% (the first hour of your income)',
      'Automate everything that isn\'t automated yet',
      'Check your allocation — are you at 70/30 stocks/bonds?',
      'Start your security account if you don\'t have 3 months saved',
    ],
  },
  {
    range: '17-24',
    title: 'Mostly Automatic',
    emoji: '🟢',
    description: "Your system is running. You're on at least one escalator, your savings rate is solid, and most of it happens without you thinking about it. Now it's about optimization — getting on both escalators, maxing out the percentages, and making sure nothing disrupts the machine.",
    actions: [
      'Push toward 14%+ savings rate if not there yet',
      'Get on the second escalator (stocks AND real estate)',
      'Set up the dream account for life goals beyond retirement',
      'Review your allocation annually — stay at 70/30 or more aggressive',
    ],
  },
  {
    range: '25-32',
    title: 'Fully Automatic',
    emoji: '🏆',
    description: "You're running the full system. Both escalators. Automated. 14%+ savings rate. This is exactly what the 654,000 401k millionaires did. Your only job now is to not touch it. Let the machine run. Let compound interest do the heavy lifting for the next 20-30 years.",
    actions: [
      'Stay the course — don\'t reduce contributions during market drops',
      'Consider Roth conversions for tax-free growth',
      'Explore real estate as a second wealth engine if not already on that escalator',
      'Share the formula with someone who needs it',
    ],
  },
]

function getTier(score: number): Tier {
  if (score <= 8) return tiers[0]
  if (score <= 16) return tiers[1]
  if (score <= 24) return tiers[2]
  return tiers[3]
}

interface ScorecardClientProps {
  conversionUrl?: string
  conversionLabel?: string
}

export default function ScorecardClient({ conversionUrl, conversionLabel }: ScorecardClientProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (points: number) => {
    const newAnswers = [...answers, points]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const totalScore = answers.reduce((sum, a) => sum + a, 0)
  const maxScore = 32
  const tier = getTier(totalScore)
  const q = questions[currentQuestion]

  if (showResults) {
    return (
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ fontSize: '48px', marginBottom: '8px' }}>{tier.emoji}</p>
          <h1 style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontSize: '32px',
            color: '#231F21',
            marginBottom: '8px',
          }}>
            Your Score: {totalScore}/{maxScore}
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: '22px',
            color: '#2729FE',
            marginBottom: '20px',
          }}>
            {tier.title}
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#4b5563' }}>
            {tier.description}
          </p>
        </div>

        {/* Action Items */}
        <div style={{
          background: '#F3F0EC',
          borderRadius: '16px',
          padding: '28px',
          marginBottom: '32px',
        }}>
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: '18px',
            color: '#231F21',
            marginBottom: '16px',
          }}>
            Your Action Items
          </h2>
          <ol style={{ paddingLeft: '20px' }}>
            {tier.actions.map((action, i) => (
              <li key={i} style={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#4b5563',
                marginBottom: '10px',
              }}>
                {action}
              </li>
            ))}
          </ol>
        </div>

        {/* Conversion CTA */}
        {conversionUrl && conversionUrl !== 'REPLAY_URL' && conversionLabel && (
          <div style={{
            background: '#2729FE',
            borderRadius: '16px',
            padding: '32px',
            textAlign: 'center',
            marginBottom: '24px',
          }}>
            <p style={{ color: '#fff', fontSize: '17px', fontWeight: 600, marginBottom: '16px' }}>
              Want the complete system breakdown? David Bach explains every piece of the formula — every percentage, every account, every step.
            </p>
            <a
              href={conversionUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#fff',
                color: '#2729FE',
                padding: '14px 32px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '17px',
              }}
            >
              {conversionLabel} &rarr;
            </a>
          </div>
        )}

        {/* Blog + Retake */}
        <div style={{ textAlign: 'center' }}>
          <Link
            href="/clients/david-bach/blog"
            style={{
              display: 'inline-block',
              color: '#2729FE',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'underline',
              marginRight: '24px',
            }}
          >
            Read the Full System Breakdown
          </Link>
          <button
            onClick={() => {
              setCurrentQuestion(0)
              setAnswers([])
              setShowResults(false)
            }}
            style={{
              background: 'none',
              border: 'none',
              color: '#9ca3af',
              fontSize: '14px',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            Retake Scorecard
          </button>
        </div>
      </div>
    )
  }

  // Question view
  return (
    <div style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 24px' }}>
      {/* Progress */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '13px',
          color: '#9ca3af',
          marginBottom: '8px',
        }}>
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round(((currentQuestion) / questions.length) * 100)}%</span>
        </div>
        <div style={{
          width: '100%',
          height: '6px',
          background: '#e5e7eb',
          borderRadius: '3px',
          overflow: 'hidden',
        }}>
          <div style={{
            width: `${(currentQuestion / questions.length) * 100}%`,
            height: '100%',
            background: '#2729FE',
            borderRadius: '3px',
            transition: 'width 0.3s ease',
          }} />
        </div>
      </div>

      {/* Question */}
      <h2 style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 700,
        fontSize: '22px',
        color: '#231F21',
        lineHeight: 1.3,
        marginBottom: '24px',
      }}>
        {q.text}
      </h2>

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
        {q.options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(option.points)}
            style={{
              display: 'block',
              width: '100%',
              padding: '16px 20px',
              borderRadius: '12px',
              border: '2px solid #e5e7eb',
              background: '#fff',
              textAlign: 'left',
              fontSize: '16px',
              color: '#231F21',
              cursor: 'pointer',
              transition: 'border-color 0.15s, background 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#2729FE'
              e.currentTarget.style.background = '#f8f8ff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e5e7eb'
              e.currentTarget.style.background = '#fff'
            }}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Why This Matters */}
      <div style={{
        background: '#F3F0EC',
        borderRadius: '12px',
        padding: '20px',
        fontSize: '14px',
        lineHeight: 1.6,
        color: '#6b7280',
      }}>
        <strong style={{ color: '#231F21' }}>Why this matters:</strong> {q.why}
      </div>
    </div>
  )
}
