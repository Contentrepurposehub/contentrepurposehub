'use client'

import { useState } from 'react'

export default function CheckoutButton({
  plan,
  className,
  children,
}: {
  plan: 'starter' | 'growth' | 'scale'
  className?: string
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    setLoading(true)
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert('Something went wrong. Please try again or book a call instead.')
      }
    } catch {
      alert('Something went wrong. Please try again or book a call instead.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={className}
    >
      {loading ? 'Redirecting...' : children}
    </button>
  )
}
