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

    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight) return

    const delay = index * 0.2

    // Start state: far left, blurred, rotated, invisible
    el.style.opacity = '0'
    el.style.transform = 'translateX(-120px) scale(0.85) rotate(-4deg)'
    el.style.filter = 'blur(6px)'

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
        el.style.opacity = '1'
        el.style.transform = 'translateX(0) scale(1) rotate(0deg)'
        el.style.filter = 'blur(0px)'
        el.style.boxShadow = '0 0 25px rgba(59, 130, 246, 0.3)'

        setTimeout(() => {
          el.style.transition = 'box-shadow 0.8s ease'
          el.style.boxShadow = ''
        }, (delay + 1.2) * 1000)

        observer.disconnect()
      }
    }, { threshold: 0.08 })
    observer.observe(el)

    return () => observer.disconnect()
  }, [index])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
