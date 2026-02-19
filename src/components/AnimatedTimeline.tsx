'use client'

import { useRef, useEffect } from 'react'

export default function AnimatedTimeline({
  children,
  index,
  className,
}: {
  children: React.ReactNode
  index: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Already in viewport? Don't animate
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight) return

    // Hide instantly (no transition yet)
    el.style.opacity = '0'
    el.style.transform = 'translateX(-50px) scale(0.95)'

    // Add transition on next frame
    const delay = index * 0.25
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
  }, [index])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
