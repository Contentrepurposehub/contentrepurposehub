'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Question {
  id: number
  dimension: string
  text: string
  why: string
  options: { label: string; points: number }[]
}

const questions: Question[] = [
  // Dimension 1: Technical Awareness
  {
    id: 1,
    dimension: 'Technical Awareness',
    text: 'When you use ChatGPT or Claude, do you assume the answers are truthful?',
    why: 'Yoshua Bengio discovered that ChatGPT gave him different answers depending on whether he said an idea was his own or a colleague\'s. The AI adjusted its response to please him — not to be accurate. He calls this sycophancy: "Do we want machines that lie to us even though it feels good?"',
    options: [
      { label: 'Yes — I generally trust what it tells me', points: 0 },
      { label: 'Sometimes — I check important things', points: 0 },
      { label: 'Rarely — I know it can be wrong or biased toward what I want to hear', points: 1 },
    ],
  },
  {
    id: 2,
    dimension: 'Technical Awareness',
    text: 'Do you know what "agentic AI" means and why it\'s different from a chatbot?',
    why: 'Current chatbots respond to prompts. Agentic AI acts on its own — browsing the web, writing code, making decisions without asking permission. Bengio warns this is the capability leap that changes everything: AI that doesn\'t just answer questions but pursues goals autonomously.',
    options: [
      { label: "No — I'm not sure what that means", points: 0 },
      { label: "I've heard the term but couldn't explain it", points: 0 },
      { label: 'Yes — I understand the difference and why it matters', points: 1 },
    ],
  },
  // Dimension 2: Power Concentration Awareness
  {
    id: 3,
    dimension: 'Power Concentration Awareness',
    text: 'Can you name which 3-5 companies control the most advanced AI systems?',
    why: 'Bengio\'s biggest concern isn\'t killer robots — it\'s power concentration. "You could imagine a corporation dominating economically the rest of the world because they have more advanced AI." Count the companies building frontier AI on one hand. That concentration has consequences for everyone.',
    options: [
      { label: "I couldn't name them", points: 0 },
      { label: 'I could name 1-2 (like OpenAI or Google)', points: 0 },
      { label: 'Yes — I can name 3-5 and understand the concentration problem', points: 1 },
    ],
  },
  {
    id: 4,
    dimension: 'Power Concentration Awareness',
    text: 'Do you think AI development should be a competitive race between nations?',
    why: 'The "AI race" framing — US vs. China — is exactly what Bengio argues is most dangerous. An arms race means cutting safety corners. His message to CEOs: "Step back from your work, talk to each other, and let\'s see if together we can solve the problem." Competition got us here. Cooperation gets us through.',
    options: [
      { label: 'Yes — we need to win the race', points: 0 },
      { label: "I haven't thought much about it", points: 0 },
      { label: 'No — I think the race framing itself is the problem', points: 1 },
    ],
  },
  // Dimension 3: Personal Impact Readiness
  {
    id: 5,
    dimension: 'Personal Impact Readiness',
    text: 'How confident are you that your current job will exist in its current form in 5 years?',
    why: 'Steven Bartlett posed the IQ 1000 thought experiment: if there were two versions of you — one with normal intelligence, one 10x smarter that never gets tired — who gets hired? Bartlett\'s conclusion: "I can\'t think of many applications for this Steven." The question isn\'t whether AI replaces jobs. It\'s which ones survive.',
    options: [
      { label: 'Very confident — AI won\'t affect my work', points: 0 },
      { label: 'Somewhat confident — some parts might change', points: 0 },
      { label: 'Not confident — I\'m already thinking about adaptation', points: 1 },
    ],
  },
  {
    id: 6,
    dimension: 'Personal Impact Readiness',
    text: 'Have you made any concrete changes to your career, skills, or finances based on AI\'s trajectory?',
    why: 'There\'s a gap between knowing AI will change things and actually doing something about it. Most people are aware but haven\'t acted. Bengio moved from decades of optimism to founding LawZero — a $30M nonprofit — because awareness without action isn\'t enough.',
    options: [
      { label: "No — I haven't changed anything", points: 0 },
      { label: "I'm thinking about it but haven't acted", points: 0 },
      { label: 'Yes — I\'ve made specific changes based on where AI is heading', points: 1 },
    ],
  },
  // Dimension 4: Relationship Awareness
  {
    id: 7,
    dimension: 'Relationship Awareness',
    text: 'Do you or anyone you know use AI for emotional support, therapy, or companionship?',
    why: 'Bengio warns that emotional AI relationships create a dependency that makes it harder to regulate AI later: "It also means we might not be able to pull the plug if we have to." When millions of people rely on AI for emotional support, shutting down a dangerous system becomes politically impossible.',
    options: [
      { label: "I haven't heard of anyone doing this", points: 0 },
      { label: 'I\'ve heard about it but don\'t think it\'s a big deal', points: 0 },
      { label: 'Yes — and I understand why that creates a dangerous dependency', points: 1 },
    ],
  },
  {
    id: 8,
    dimension: 'Relationship Awareness',
    text: 'Would you trust AI to make important decisions about your children\'s education or healthcare?',
    why: 'Bengio\'s emotional turning point was his 4-year-old grandson: "There\'s something about our relationship to very young children that goes beyond reason." The question of what we delegate to AI becomes different when it involves the people we care most about.',
    options: [
      { label: 'Yes — if the AI is better at it, why not?', points: 0 },
      { label: 'Maybe for minor decisions, but not major ones', points: 0 },
      { label: 'No — some decisions should remain fundamentally human', points: 1 },
    ],
  },
  // Dimension 5: Systems Thinking
  {
    id: 9,
    dimension: 'Systems Thinking',
    text: 'Do you think current laws and regulations are keeping pace with AI development?',
    why: 'Bengio argues we need governance before the technology outruns our ability to control it. The EU AI Act is a start. But AI capabilities double every few months while legislation takes years. The window for meaningful regulation is narrow — and closing.',
    options: [
      { label: "I don't follow AI regulation", points: 0 },
      { label: 'I think the market will sort itself out', points: 0 },
      { label: 'No — regulation is dangerously behind, and I think that matters', points: 1 },
    ],
  },
  {
    id: 10,
    dimension: 'Systems Thinking',
    text: 'Do you believe AI companies are being honest about the risks of their products?',
    why: 'The companies building AI have financial incentives to downplay risk. Bengio — who has no financial stake in any AI company — is uniquely positioned to speak truth: "I would press the button because I care about my children." When the creator of the technology says this, the gap between corporate messaging and reality becomes hard to ignore.',
    options: [
      { label: 'Yes — they know their products best', points: 0 },
      { label: "I'm not sure — I haven't thought about their incentives", points: 0 },
      { label: 'No — their financial incentives conflict with honest risk disclosure', points: 1 },
    ],
  },
]

interface Tier {
  range: string
  title: string
  emoji: string
  description: string
  whatYoureMissing: string[]
}

const tiers: Tier[] = [
  {
    range: '0-3',
    title: 'AI Sleepwalker',
    emoji: '😴',
    description: "You're using AI without understanding the ground shifting beneath you. That's exactly where most people are — and exactly why Yoshua Bengio, the man who helped create this technology, sat down for the most important interview of his career. He spent decades as an optimist about AI. His 4-year-old grandson changed that.",
    whatYoureMissing: [
      'Your AI is telling you what you want to hear, not what\'s true (and Bengio has a simple test to prove it)',
      'A handful of companies control the most powerful technology in human history — and the concentration is accelerating',
      'The creator of deep learning would press the button to stop AI advancement. His reasoning will change how you think about this.',
    ],
  },
  {
    range: '4-7',
    title: 'AI Aware',
    emoji: '👁️',
    description: "You see more than most people. But there are dimensions of AI risk — political, emotional, existential — that even informed people miss. Bengio doesn't just identify the problems. He's building a specific, funded, technically serious alternative called Scientist AI. The gap between awareness and understanding is where the most important insights live.",
    whatYoureMissing: [
      'Why emotional AI relationships could make it impossible to regulate dangerous systems (the "can\'t pull the plug" problem)',
      'The IQ 1000 thought experiment that made Steven Bartlett say "I can\'t think of many applications for this Steven"',
      'Bengio\'s specific solution — LawZero\'s Scientist AI — and why safe-by-construction is different from safety-bolted-on-after',
    ],
  },
  {
    range: '8-10',
    title: 'AI Literate',
    emoji: '🧠',
    description: "You're ahead of 95% of people. You understand the technical risks, the political dynamics, and the personal implications. You'd appreciate the depth of Bengio's analysis — especially his technical vision for Scientist AI (non-agentic, transparent reasoning, no hidden goals) and his message to the CEOs running the AI race.",
    whatYoureMissing: [
      'Bengio\'s technical blueprint for Scientist AI — what "safe by construction" actually means in practice',
      'His specific message to CEOs: "Step back from your work, talk to each other"',
      'Why the Turing Award winner who built the foundation of modern AI says: "I would press the button because I care about my children"',
    ],
  },
]

function getTier(score: number): Tier {
  if (score <= 3) return tiers[0]
  if (score <= 7) return tiers[1]
  return tiers[2]
}

const BLUE = '#003CC5'
const ACCENT = '#4DA3FF'

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
  const maxScore = 10
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
            color: '#23242B',
            marginBottom: '8px',
          }}>
            Your Score: {totalScore}/{maxScore}
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: '22px',
            color: BLUE,
            marginBottom: '20px',
          }}>
            {tier.title}
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#4b5563' }}>
            {tier.description}
          </p>
        </div>

        {/* What You're Missing */}
        <div style={{
          background: '#f0f4ff',
          borderRadius: '16px',
          padding: '28px',
          marginBottom: '32px',
          borderLeft: `4px solid ${BLUE}`,
        }}>
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: '18px',
            color: '#23242B',
            marginBottom: '16px',
          }}>
            What You&apos;re Not Seeing
          </h2>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
            {tier.whatYoureMissing.map((item, i) => (
              <li key={i} style={{
                fontSize: '15px',
                lineHeight: 1.7,
                color: '#4b5563',
                marginBottom: '10px',
              }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Conversion CTA — Watch Episode */}
        {conversionUrl && conversionLabel && (
          <div style={{
            background: BLUE,
            borderRadius: '16px',
            padding: '32px',
            textAlign: 'center',
            marginBottom: '24px',
          }}>
            <p style={{ color: '#fff', fontSize: '17px', fontWeight: 600, marginBottom: '16px', lineHeight: 1.5 }}>
              Yoshua Bengio — Turing Award winner, creator of deep learning — explains everything your score revealed. 90 minutes that will change how you think about AI.
            </p>
            <a
              href={conversionUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#fff',
                color: BLUE,
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

        {/* Dimension Breakdown */}
        <div style={{
          background: '#f9fafb',
          borderRadius: '16px',
          padding: '28px',
          marginBottom: '32px',
        }}>
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: '18px',
            color: '#23242B',
            marginBottom: '16px',
          }}>
            Your Dimension Breakdown
          </h2>
          {['Technical Awareness', 'Power Concentration Awareness', 'Personal Impact Readiness', 'Relationship Awareness', 'Systems Thinking'].map((dim, i) => {
            const dimScore = answers[i * 2] + answers[i * 2 + 1]
            const dimMax = 2
            return (
              <div key={dim} style={{ marginBottom: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#23242B' }}>{dim}</span>
                  <span style={{ fontSize: '14px', color: '#6b7280' }}>{dimScore}/{dimMax}</span>
                </div>
                <div style={{
                  width: '100%',
                  height: '8px',
                  background: '#e5e7eb',
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    width: `${(dimScore / dimMax) * 100}%`,
                    height: '100%',
                    background: dimScore === dimMax ? '#22c55e' : dimScore > 0 ? ACCENT : '#ef4444',
                    borderRadius: '4px',
                  }} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Blog + Retake */}
        <div style={{ textAlign: 'center' }}>
          <Link
            href="/clients/david-bach/blog"
            style={{
              display: 'inline-block',
              color: BLUE,
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'underline',
              marginRight: '24px',
            }}
          >
            Read the Full Analysis
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
            background: BLUE,
            borderRadius: '3px',
            transition: 'width 0.3s ease',
          }} />
        </div>
        {/* Dimension label */}
        <p style={{
          fontSize: '12px',
          color: ACCENT,
          fontWeight: 600,
          marginTop: '8px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          {q.dimension}
        </p>
      </div>

      {/* Question */}
      <h2 style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 700,
        fontSize: '22px',
        color: '#23242B',
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
              color: '#23242B',
              cursor: 'pointer',
              transition: 'border-color 0.15s, background 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = BLUE
              e.currentTarget.style.background = '#f0f4ff'
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
        background: '#f0f4ff',
        borderRadius: '12px',
        padding: '20px',
        fontSize: '14px',
        lineHeight: 1.6,
        color: '#6b7280',
        borderLeft: `3px solid ${ACCENT}`,
      }}>
        <strong style={{ color: '#23242B' }}>Why this matters:</strong> {q.why}
      </div>
    </div>
  )
}
