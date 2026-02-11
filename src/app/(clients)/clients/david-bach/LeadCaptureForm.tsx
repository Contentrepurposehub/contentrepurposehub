'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LeadCaptureForm({ source = 'landing-page' }: { source?: string }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          client: 'david-bach',
          source,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong')
      }

      // Redirect to scorecard after successful submission
      router.push('/clients/david-bach/scorecard')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" suppressHydrationWarning>
      <div>
        <input
          type="text"
          placeholder="Your first name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          suppressHydrationWarning
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          suppressHydrationWarning
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-[#1e3a5f] text-white font-semibold py-3.5 px-6 rounded-lg hover:bg-[#162d4a] transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Getting Your Score...' : 'Get My Score →'}
      </button>
      {status === 'error' && (
        <p className="text-red-600 text-sm text-center">{errorMsg}</p>
      )}
      <p className="text-gray-400 text-xs text-center">
        Free. Takes 5 minutes. No spam — just your results.
      </p>
    </form>
  )
}
