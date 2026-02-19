'use client'

import { m, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

export default function AnimatedCounter({
  target,
  prefix = '',
  suffix = '',
  className,
  duration = 1500,
}: {
  target: number
  prefix?: string
  suffix?: string
  className?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const shouldReduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(`${prefix}0${suffix}`)

  useEffect(() => {
    if (!isInView) return

    if (shouldReduceMotion) {
      setDisplay(`${prefix}${target}${suffix}`)
      return
    }

    const startTime = performance.now()

    function tick(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutCubic(progress)
      const current = Math.round(eased * target)
      setDisplay(`${prefix}${current}${suffix}`)

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }, [isInView, shouldReduceMotion, target, prefix, suffix, duration])

  return (
    <m.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      {display}
    </m.span>
  )
}
