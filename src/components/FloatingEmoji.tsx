'use client'

import { useRef, useEffect } from 'react'

export default function FloatingEmoji({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const rect = el.getBoundingClientRect()
    const belowFold = rect.top >= window.innerHeight

    if (belowFold) {
      // Start from nothing, Scale Pop in, then float
      el.style.opacity = '0'
      el.style.transform = 'scale(0)'

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect()

          const pop = el.animate([
            { opacity: '0', transform: 'scale(0)' },
            { opacity: '1', transform: 'scale(1.2)', offset: 0.6 },
            { opacity: '1', transform: 'scale(0.95)', offset: 0.8 },
            { opacity: '1', transform: 'scale(1)' },
          ], {
            duration: 600,
            delay,
            easing: 'ease-out',
            fill: 'both',
          })

          pop.onfinish = () => {
            el.style.opacity = '1'
            el.style.transform = 'scale(1)'
            pop.cancel()
            startFloat()
          }
        }
      }, { threshold: 0.08 })
      observer.observe(el)

      return () => observer.disconnect()
    } else {
      // Above fold: just float
      startFloat()
    }

    function startFloat() {
      if (!el) return
      el.animate(
        [
          { transform: 'translateY(0) rotate(0deg)' },
          { transform: 'translateY(-18px) rotate(6deg)' },
        ],
        {
          duration: 2000,
          iterations: Infinity,
          direction: 'alternate' as PlaybackDirection,
          easing: 'ease-in-out',
          delay: 0,
        }
      )
    }
  }, [delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
