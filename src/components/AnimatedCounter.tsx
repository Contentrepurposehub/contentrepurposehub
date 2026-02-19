'use client'

import { useRef, useEffect, useState } from 'react'

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
  const hasAnimated = useRef(false)
  const [display, setDisplay] = useState(`${prefix}${target}${suffix}`)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Already in viewport? Show final value immediately
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight) return

    // Set initial display to 0
    setDisplay(`${prefix}0${suffix}`)

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true
        observer.disconnect()

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
      }
    }, { threshold: 0.1 })
    observer.observe(el)

    return () => observer.disconnect()
  }, [target, prefix, suffix, duration])

  return <span ref={ref} style={{ display: 'inline-block' }}>{display}</span>
}
