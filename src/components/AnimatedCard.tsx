'use client'

import { useRef, useState, useEffect } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

export default function AnimatedCard({
  children,
  index,
  className,
  staggerDelay = 0.15,
}: {
  children: React.ReactNode
  index: number
  className?: string
  staggerDelay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const shouldReduceMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Before JS hydration: fully visible (no blank pages)
  // After hydration, below fold: hidden, then animate on scroll
  // After hydration, above fold: isInView is already true, stays visible
  const shouldAnimate = mounted && !shouldReduceMotion
  const isVisible = !shouldAnimate || isInView

  return (
    <div
      ref={ref}
      className={className}
      style={shouldAnimate ? {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateY(60px) scale(0.95)',
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * staggerDelay}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * staggerDelay}s`,
      } : undefined}
    >
      {children}
    </div>
  )
}
