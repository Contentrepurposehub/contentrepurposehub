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
  const isInView = useInView(ref, { once: true, amount: 0.15 })
  const shouldReduceMotion = useReducedMotion()
  // 'ssr' = server render (no style), 'hidden' = invisible no transition, 'ready' = invisible with transition, 'visible' = animate in
  const [phase, setPhase] = useState<'ssr' | 'hidden' | 'ready' | 'visible'>('ssr')

  useEffect(() => {
    if (shouldReduceMotion) {
      setPhase('visible')
      return
    }
    // If already in view (above fold), skip animation
    if (isInView) {
      setPhase('visible')
      return
    }
    // Hide instantly (no transition)
    setPhase('hidden')
    // Next frame: enable transitions
    const raf = requestAnimationFrame(() => {
      setPhase(prev => prev === 'hidden' ? 'ready' : prev)
    })
    return () => cancelAnimationFrame(raf)
  }, [shouldReduceMotion, isInView])

  // When element scrolls into view and we're ready, animate in
  useEffect(() => {
    if (isInView && phase === 'ready') {
      setPhase('visible')
    }
  }, [isInView, phase])

  const delay = index * staggerDelay

  const getStyle = (): React.CSSProperties | undefined => {
    switch (phase) {
      case 'ssr':
        return undefined
      case 'hidden':
        return {
          opacity: 0,
          transform: 'translateY(70px) scale(0.92)',
        }
      case 'ready':
        return {
          opacity: 0,
          transform: 'translateY(70px) scale(0.92)',
          transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        }
      case 'visible':
        return {
          opacity: 1,
          transform: 'none',
          transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        }
    }
  }

  return (
    <div ref={ref} className={className} style={getStyle()}>
      {children}
    </div>
  )
}
