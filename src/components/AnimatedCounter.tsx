'use client'

import { useRef, useState, useEffect } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

export default function AnimatedCounter({
  target,
  prefix = '',
  suffix = '',
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
  const [display, setDisplay] = useState(`${prefix}${target}${suffix}`)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    if (shouldReduceMotion) {
      setDisplay(`${prefix}${target}${suffix}`)
      return
    }

    setDisplay(`${prefix}0${suffix}`)
    const startTime = performance.now()

    function tick(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutCubic(progress)
      const current = Math.round(eased * target)
      setDisplay(`${prefix}${current}${suffix}`)

      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        // Pop effect when counting finishes
        const el = ref.current
        if (el) {
          el.animate(
            [
              { transform: 'scale(1)' },
              { transform: 'scale(1.15)' },
              { transform: 'scale(1)' },
            ],
            {
              duration: 400,
              easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            }
          )
        }
      }
    }

    requestAnimationFrame(tick)
  }, [isInView, shouldReduceMotion, target, prefix, suffix, duration])

  return <span ref={ref} style={{ display: 'inline-block' }}>{display}</span>
}
