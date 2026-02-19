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

    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight) return

    // Start scaled down and blurred
    setDisplay(`${prefix}0${suffix}`)
    el.style.filter = 'blur(4px)'
    el.style.transform = 'scale(0.6)'
    el.style.opacity = '0.3'

    requestAnimationFrame(() => {
      el.style.transition = 'filter 0.6s ease, transform 0.6s ease, opacity 0.6s ease'
    })

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true
        observer.disconnect()

        // Unblur and scale up as counting starts
        el.style.filter = 'blur(0px)'
        el.style.transform = 'scale(1)'
        el.style.opacity = '1'

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
            // Big pop + glow when counting finishes
            if (el) {
              el.animate(
                [
                  { transform: 'scale(1)', textShadow: '0 0 0px transparent' },
                  { transform: 'scale(1.25)', textShadow: '0 0 20px rgba(59, 130, 246, 0.6)' },
                  { transform: 'scale(1)', textShadow: '0 0 0px transparent' },
                ],
                {
                  duration: 500,
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
