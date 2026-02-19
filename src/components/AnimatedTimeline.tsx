'use client'

import { useRef, useState, useEffect } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

export default function AnimatedTimeline({
  children,
  index,
  className,
}: {
  children: React.ReactNode
  index: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })
  const shouldReduceMotion = useReducedMotion()
  const [phase, setPhase] = useState<'ssr' | 'hidden' | 'ready' | 'visible'>('ssr')

  useEffect(() => {
    if (shouldReduceMotion) {
      setPhase('visible')
      return
    }
    if (isInView) {
      setPhase('visible')
      return
    }
    setPhase('hidden')
    const raf = requestAnimationFrame(() => {
      setPhase(prev => prev === 'hidden' ? 'ready' : prev)
    })
    return () => cancelAnimationFrame(raf)
  }, [shouldReduceMotion, isInView])

  useEffect(() => {
    if (isInView && phase === 'ready') {
      setPhase('visible')
    }
  }, [isInView, phase])

  const delay = index * 0.25

  const getStyle = (): React.CSSProperties | undefined => {
    switch (phase) {
      case 'ssr':
        return undefined
      case 'hidden':
        return {
          opacity: 0,
          transform: 'translateX(-50px) scale(0.92)',
        }
      case 'ready':
        return {
          opacity: 0,
          transform: 'translateX(-50px) scale(0.92)',
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
