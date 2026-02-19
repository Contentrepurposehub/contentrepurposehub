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
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const shouldReduceMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const shouldAnimate = mounted && !shouldReduceMotion
  const isVisible = !shouldAnimate || isInView

  return (
    <div
      ref={ref}
      className={className}
      style={shouldAnimate ? {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateX(-30px)',
        transition: `opacity 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) ${index * 0.25}s, transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) ${index * 0.25}s`,
      } : undefined}
    >
      {children}
    </div>
  )
}
