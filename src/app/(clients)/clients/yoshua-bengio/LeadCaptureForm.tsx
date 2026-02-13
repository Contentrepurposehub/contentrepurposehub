'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface LeadCaptureFormProps {
  source: 'hero' | 'footer'
  redirectUrl?: string
  /** Visual variant: 'light' (white bg), 'dark' (charcoal bg), 'gradient' (blue gradient bg) */
  variant?: 'light' | 'dark' | 'gradient'
}

export default function LeadCaptureForm({
  source,
  redirectUrl = '/clients/yoshua-bengio/scorecard',
  variant = 'light',
}: LeadCaptureFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, client: 'yoshua-bengio', source }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong')
      }

      if (redirectUrl.startsWith('http')) {
        window.location.href = redirectUrl
      } else {
        router.push(redirectUrl)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  const isDark = variant === 'dark' || variant === 'gradient'

  const inputStyle: React.CSSProperties = {
    padding: '14px 18px',
    borderRadius: '12px',
    border: isDark ? '2px solid rgba(255,255,255,0.25)' : '2px solid #e5e7eb',
    fontSize: '16px',
    outline: 'none',
    background: isDark ? 'rgba(255,255,255,0.1)' : '#fff',
    color: isDark ? '#fff' : '#231F21',
    width: '100%',
    boxSizing: 'border-box' as const,
  }

  const buttonBg = variant === 'dark'
    ? '#003CC5'
    : variant === 'gradient'
      ? '#fff'
      : '#003CC5'

  const buttonColor = variant === 'gradient' ? '#003CC5' : '#fff'

  return (
    <form onSubmit={handleSubmit} suppressHydrationWarning>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <input
          type="text"
          placeholder="Your first name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          suppressHydrationWarning
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          suppressHydrationWarning
          style={inputStyle}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '16px 32px',
            borderRadius: '30px',
            border: 'none',
            background: buttonBg,
            color: buttonColor,
            fontSize: '17px',
            fontWeight: 700,
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1,
            width: '100%',
            transition: 'opacity 0.15s',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {loading ? 'Submitting...' : 'Get Your Score'}
        </button>
      </div>
      {error && (
        <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '8px' }}>{error}</p>
      )}
      <p style={{
        fontSize: '13px',
        color: isDark ? 'rgba(255,255,255,0.6)' : '#9ca3af',
        marginTop: '12px',
        textAlign: 'center',
      }}>
        Your information stays private. No spam, no sharing. Unsubscribe anytime.
      </p>
    </form>
  )
}
