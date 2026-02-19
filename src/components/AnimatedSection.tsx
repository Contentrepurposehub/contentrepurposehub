'use client'

import { m, useReducedMotion } from 'framer-motion'

const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0]

export default function AnimatedSection({
  children,
  className,
  hero = false,
}: {
  children: React.ReactNode
  className?: string
  hero?: boolean
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  if (hero) {
    return (
      <m.div
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: easing }}
      >
        {children}
      </m.div>
    )
  }

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: easing }}
    >
      {children}
    </m.div>
  )
}
