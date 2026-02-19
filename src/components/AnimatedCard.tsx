'use client'

import { m, useReducedMotion } from 'framer-motion'

const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0]

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
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * staggerDelay,
        ease: easing,
      }}
    >
      {children}
    </m.div>
  )
}
