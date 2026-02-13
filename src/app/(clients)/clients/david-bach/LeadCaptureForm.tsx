'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface LeadCaptureFormProps {
  source: 'hero' | 'footer'
  redirectUrl?: string
}

export default function LeadCaptureForm({ source, redirectUrl = '/clients/david-bach/scorecard' }: LeadCaptureFormProps) {
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
        body: JSON.stringify({ name, email, client: 'david-bach', source }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong')
      }

      // Redirect: internal paths use router.push, external URLs use window.location
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

  const isFooter = source === 'footer'

  return (
    <form onSubmit={handleSubmit} suppressHydrationWarning>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <input
          type="text"
          placeholder="First Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          suppressHydrationWarning
          style={{
            padding: '14px 18px',
            borderRadius: '12px',
            border: isFooter ? '2px solid rgba(255,255,255,0.3)' : '2px solid #e5e7eb',
            fontSize: '16px',
            outline: 'none',
            background: isFooter ? 'rgba(255,255,255,0.15)' : '#fff',
            color: isFooter ? '#fff' : '#231F21',
            width: '100%',
            boxSizing: 'border-box',
          }}
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          suppressHydrationWarning
          style={{
            padding: '14px 18px',
            borderRadius: '12px',
            border: isFooter ? '2px solid rgba(255,255,255,0.3)' : '2px solid #e5e7eb',
            fontSize: '16px',
            outline: 'none',
            background: isFooter ? 'rgba(255,255,255,0.15)' : '#fff',
            color: isFooter ? '#fff' : '#231F21',
            width: '100%',
            boxSizing: 'border-box',
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '16px 32px',
            borderRadius: '30px',
            border: 'none',
            background: isFooter ? '#fff' : '#2729FE',
            color: isFooter ? '#2729FE' : '#fff',
            fontSize: '17px',
            fontWeight: 700,
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1,
            width: '100%',
            transition: 'opacity 0.15s',
          }}
        >
          {loading ? 'Submitting...' : 'Get My Free Score'}
        </button>
      </div>
      {error && (
        <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '8px' }}>{error}</p>
      )}
      <p style={{
        fontSize: '13px',
        color: isFooter ? 'rgba(255,255,255,0.7)' : '#9ca3af',
        marginTop: '12px',
        textAlign: 'center',
      }}>
        Free. Takes 2 minutes. No spam — just your score and what to do about it.
      </p>
    </form>
  )
}
