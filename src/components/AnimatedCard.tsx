'use client'

import { useRef, useEffect } from 'react'

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
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight) return

    // Start invisible at scale 0
    el.style.opacity = '0'
    el.style.transform = 'scale(0)'

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect()
        // Scale Bounce: from nothing → overshoot → settle
        el.animate([
          { opacity: 0, transform: 'scale(0)' },
          { opacity: 1, transform: 'scale(1.35)', offset: 0.5 },
          { opacity: 1, transform: 'scale(0.85)', offset: 0.7 },
          { opacity: 1, transform: 'scale(1.1)', offset: 0.85 },
          { opacity: 1, transform: 'scale(1)' },
        ], {
          duration: 800,
          delay: index * (staggerDelay * 1000),
          easing: 'ease-out',
          fill: 'forwards',
        })
      }
    }, { threshold: 0.08 })
    observer.observe(el)

    return () => observer.disconnect()
  }, [index, staggerDelay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
