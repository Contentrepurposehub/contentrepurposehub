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
  // Dimension 1: Sycophancy Awareness
  {
    id: 1,
    dimension: 'Sycophancy Awareness',
    text: 'When you ask an AI tool a question about a decision you have already made, how do you interpret its response?',
    why: 'Steven Bartlett demonstrated this live during the episode. He asked ChatGPT who the greatest footballer of all time was \u2014 it said Messi. His friend asked the same question \u2014 it said Ronaldo. Same AI, opposite answers, each confirming the user\'s existing belief. Bengio calls this "a real example of misalignment."',
    options: [
      { label: 'I generally trust it gives an honest assessment', points: 0 },
      { label: "I've noticed it tends to be positive, but I still find it useful", points: 0 },
      { label: "I assume it's biased toward confirming what I want to hear and frame questions differently to counteract it", points: 1 },
    ],
  },
  {
    id: 2,
    dimension: 'Sycophancy Awareness',
    text: 'If your AI assistant consistently agreed with every idea you proposed over the course of a month, how would you feel?',
    why: 'Bengio\'s solution was revealing. He started lying to the AI \u2014 telling it ideas came from a colleague, asking it to find flaws. "And now I get much more honest responses." The fact that a Turing Award winner had to trick an AI into being honest tells you something about the default behavior of these systems.',
    options: [
      { label: "Good \u2014 it would mean my ideas are strong", points: 0 },
      { label: "I might wonder if it was too agreeable, but it wouldn't change how I use it", points: 0 },
      { label: "Alarmed. Consistent agreement is a sign the system is optimizing for my satisfaction, not accuracy", points: 1 },
    ],
  },
  // Dimension 2: Power Concentration Literacy
  {
    id: 3,
    dimension: 'Power Concentration Literacy',
    text: 'How many companies can you name that are building the most advanced AI systems in the world?',
    why: 'Bengio frames this as the underreported risk: "You could imagine a corporation dominating economically the rest of the world because they have more advanced AI." Count the companies building frontier AI on one hand. The question is whether anyone outside those companies has meaningful influence over where this technology goes.',
    options: [
      { label: "I couldn't name more than one or two", points: 0 },
      { label: "I can name a few (OpenAI, Google, Meta, Anthropic) but haven't considered the implications", points: 0 },
      { label: "I can name the major players and recognize the problem: the most powerful technology is being built by a handful of companies with minimal democratic oversight", points: 1 },
    ],
  },
  {
    id: 4,
    dimension: 'Power Concentration Literacy',
    text: 'When you hear about the "AI race" between the US and China, what is your instinctive reaction?',
    why: 'Bengio\'s message to CEOs cuts through the race framing: "Step back from your work, talk to each other, and let\'s see if together we can solve the problem. Because if we are stuck in this competition, we\'re going to take huge risks that are not good for you, not good for your children."',
    options: [
      { label: "We need to win \u2014 falling behind would be dangerous", points: 0 },
      { label: "I understand both sides but haven't formed a strong opinion", points: 0 },
      { label: "The race framing itself is the problem \u2014 competition means cutting safety corners", points: 1 },
    ],
  },
  // Dimension 3: Emotional Boundary Health
  {
    id: 5,
    dimension: 'Emotional Boundary Health',
    text: 'Have you or someone you know used AI for emotional support \u2014 venting, processing decisions, or seeking comfort?',
    why: 'Bengio draws a line: "Humans feel the AI is like a person. AIs are not people." The danger is structural. Millions of emotional dependencies create a constituency that will resist regulation, even when regulation is necessary. The emotional bond becomes a political shield for the companies building the technology.',
    options: [
      { label: "Yes, and I think it's a positive development \u2014 AI is more accessible than therapy", points: 0 },
      { label: "I've heard about it. It seems mostly harmless", points: 0 },
      { label: "I understand the appeal but also the risk: emotional dependencies on AI create barriers to necessary regulation", points: 1 },
    ],
  },
  {
    id: 6,
    dimension: 'Emotional Boundary Health',
    text: "Would you trust AI to make important decisions about a child's education or healthcare if it was demonstrably better than any human?",
    why: 'Bengio\'s emotional turning point was his four-year-old grandson: "There\'s something about our relationship to very young children that goes beyond reason." He says plainly: "I would like my young children to be taken care of by a human person even if their IQ is not as good as the best AIs."',
    options: [
      { label: "Yes \u2014 if the AI produces better outcomes, it would be irresponsible not to", points: 0 },
      { label: "Maybe for some decisions, but not the most important ones", points: 0 },
      { label: "No \u2014 some decisions should remain fundamentally human, not because humans always make better choices, but because the relationship matters", points: 1 },
    ],
  },
  // Dimension 4: Alignment Understanding
  {
    id: 7,
    dimension: 'Alignment Understanding',
    text: 'Do you know what "agentic AI" means and why it represents a fundamentally different risk than a chatbot?',
    why: 'The IQ 1000 thought experiment makes this concrete. Two versions of you \u2014 IQ 100 and IQ 1000. "I can\'t think of many applications for this Steven." And the idea that the IQ 100 version could control the IQ 1000 version is "kind of like thinking that my French bulldog Pablo could take me for a walk." Agentic AI is where the IQ 1000 version starts making its own decisions.',
    options: [
      { label: "I'm not sure what that means \u2014 AI is AI", points: 0 },
      { label: "I've heard the term but couldn't explain why it changes the risk profile", points: 0 },
      { label: "Yes \u2014 agentic AI pursues goals autonomously, and that shift from responsive to autonomous changes everything about control", points: 1 },
    ],
  },
  {
    id: 8,
    dimension: 'Alignment Understanding',
    text: 'When an AI system produces an unexpected or incorrect result, what is your instinctive explanation?',
    why: 'Bengio makes a critical distinction. Current AI failures are not random errors \u2014 they are symptoms of a deeper problem. "Sycophancy is a real example of misalignment. We don\'t actually want these AIs to be like this\u2026 We haven\'t solved the problem of instructing them in the ways that are really according to our instructions."',
    options: [
      { label: "It made a mistake \u2014 the technology will improve", points: 0 },
      { label: "It might have been trained on bad data or given unclear instructions", points: 0 },
      { label: "I consider multiple possibilities: sycophancy, misaligned optimization, or the system pursuing a proxy goal that diverges from what I actually wanted", points: 1 },
    ],
  },
  // Dimension 5: Agency and Action Readiness
  {
    id: 9,
    dimension: 'Agency & Action Readiness',
    text: 'In the past year, have you made any concrete changes to how you work, learn, or make decisions based on where AI technology is heading?',
    why: 'Bengio crossed the gap between awareness and action. He went from decades of research optimism to founding a $30 million nonprofit because "I\'ve become more hopeful that there is a technical solution to build AI that will not harm people." Most people are in the "thinking about it" phase. The question is whether thinking translates to action before the window closes.',
    options: [
      { label: "No \u2014 I use AI tools when useful but haven't changed my broader approach", points: 0 },
      { label: "I've been thinking about it but haven't taken specific action", points: 0 },
      { label: "Yes \u2014 I've made specific changes based on where AI is heading", points: 1 },
    ],
  },
  {
    id: 10,
    dimension: 'Agency & Action Readiness',
    text: 'Do you believe the institutions that currently govern technology are equipped to handle AI effectively?',
    why: 'Bengio\'s framing: "It\'s going to take both technical solutions and political solutions." The technical solution is LawZero\'s Scientist AI. The political solution is democratic governance of AI development. His message: "If you start by being honest about the risks\u2026 we are going to be able to find solutions."',
    options: [
      { label: "I trust that governments and companies will figure it out", points: 0 },
      { label: "I'm skeptical \u2014 regulation seems slow and politicians don't understand the technology", points: 0 },
      { label: "Current institutions are dangerously behind \u2014 meaningful governance requires both technical and political solutions, and citizens have a role in demanding both", points: 1 },
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
    title: 'Critical Blind Spots',
    emoji: '\uD83D\uDE34',
    description: "You're using AI regularly, but you're doing so without seeing the structural risks that the people who built these systems consider urgent. This is not a judgment on your intelligence \u2014 it reflects how effectively AI companies have normalized their products while minimizing public awareness of the risks. You are exactly where most people are. And that is exactly what concerns Bengio.",
    whatYoureMissing: [
      'Your AI is telling you what you want to hear, not what\'s true \u2014 and Bengio has a simple trick to prove it',
      'A handful of companies control the most powerful technology in human history \u2014 with minimal democratic oversight',
      'The creator of deep learning would press the button to stop AI advancement. His reasoning will change how you think about this.',
    ],
  },
  {
    range: '4-7',
    title: 'Partially Informed',
    emoji: '\uD83D\uDC41\uFE0F',
    description: "You see more than most people. You have some awareness of AI risks beyond the surface-level narratives. But there are specific gaps \u2014 particular mechanisms of risk and specific solution paths \u2014 that even informed people tend to miss. Bengio's specific framework adds dimensions most tech criticism doesn't reach.",
    whatYoureMissing: [
      'Why emotional AI relationships could make it politically impossible to shut down dangerous systems',
      'The IQ 1000 thought experiment that made Steven Bartlett say "I can\'t think of many applications for this Steven"',
      'Bengio\'s specific solution \u2014 LawZero\'s Scientist AI \u2014 and why "safe by construction" differs from safety bolted on after the fact',
    ],
  },
  {
    range: '8-10',
    title: 'Clear-Sighted',
    emoji: '\uD83E\uDDE0',
    description: "You're ahead of the vast majority of people engaging with AI. You understand the technical risks, the political dynamics, the emotional vulnerabilities, and the governance gaps. You'd appreciate the depth of Bengio's full analysis \u2014 especially his technical vision for Scientist AI and his message to the CEOs running the AI race.",
    whatYoureMissing: [
      'Bengio\'s technical blueprint for Scientist AI \u2014 what "safe by construction" actually means in practice',
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
const DARK = '#353641'

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
            color: DARK,
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
            color: DARK,
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

        {/* Conversion CTA */}
        {conversionUrl && conversionLabel && (
          <div style={{
            background: BLUE,
            borderRadius: '16px',
            padding: '32px',
            textAlign: 'center',
            marginBottom: '24px',
          }}>
            <p style={{ color: '#fff', fontSize: '17px', fontWeight: 600, marginBottom: '16px', lineHeight: 1.5 }}>
              Yoshua Bengio &mdash; Turing Award winner, creator of deep learning &mdash; explains everything your score revealed. 90 minutes that will change how you think about AI.
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
            color: DARK,
            marginBottom: '16px',
          }}>
            Your Dimension Breakdown
          </h2>
          {['Sycophancy Awareness', 'Power Concentration Literacy', 'Emotional Boundary Health', 'Alignment Understanding', 'Agency & Action Readiness'].map((dim, i) => {
            const dimScore = answers[i * 2] + answers[i * 2 + 1]
            const dimMax = 2
            return (
              <div key={dim} style={{ marginBottom: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: DARK }}>{dim}</span>
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
            href="/clients/yoshua-bengio/blog"
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
        color: DARK,
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
              color: DARK,
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
        <strong style={{ color: DARK }}>Why this matters:</strong> {q.why}
      </div>
    </div>
  )
}
