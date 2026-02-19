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

    // Already in viewport? Don't animate (above-fold content stays visible)
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight) return

    // Hide instantly (no transition yet)
    el.style.opacity = '0'
    el.style.transform = 'translateY(60px) scale(0.95)'

    // Add transition on next frame (prevents flash)
    const delay = index * staggerDelay
    requestAnimationFrame(() => {
      el.style.transition = `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`
    })

    // Animate in when scrolled into view
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1'
        el.style.transform = 'none'
        observer.disconnect()
      }
    }, { threshold: 0.1 })
    observer.observe(el)

    return () => observer.disconnect()
  }, [index, staggerDelay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
