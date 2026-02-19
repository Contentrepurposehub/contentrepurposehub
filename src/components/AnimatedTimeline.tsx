'use client'

import { m, useReducedMotion } from 'framer-motion'

const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0]

export default function AnimatedTimeline({
  children,
  index,
  className,
}: {
  children: React.ReactNode
  index: number
  className?: string
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.25,
        ease: easing,
      }}
    >
      {children}
    </m.div>
  )
}
