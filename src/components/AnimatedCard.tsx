'use client'

import { useRef, useEffect } from 'react'

export default function AnimatedCard({
  children,
  index,
  className,
  staggerDelay = 0.18,
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

    // Already in viewport? Don't animate
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight) return

    const delay = index * staggerDelay

    // Start state: far below, blurred, rotated, scaled down, invisible
    el.style.opacity = '0'
    el.style.transform = 'translateY(100px) scale(0.8) rotate(3deg)'
    el.style.filter = 'blur(8px)'

    // Enable transitions on next frame
    requestAnimationFrame(() => {
      el.style.transition = [
        `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        `transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        `filter 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        `box-shadow 0.4s ease ${delay + 0.85}s`,
      ].join(', ')
    })

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Animate to final state
        el.style.opacity = '1'
        el.style.transform = 'translateY(0) scale(1) rotate(0deg)'
        el.style.filter = 'blur(0px)'
        // Glow flash on landing
        el.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.35)'

        // Remove glow after it flashes
        setTimeout(() => {
          el.style.transition = 'box-shadow 0.8s ease'
          el.style.boxShadow = ''
        }, (delay + 1.2) * 1000)

        observer.disconnect()
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
