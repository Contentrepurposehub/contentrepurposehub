'use client'

import { useRef, useEffect } from 'react'

export default function PopHeading({
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
    if (rect.top < window.innerHeight) return

    // Start flipped up and invisible
    el.style.opacity = '0'
    el.style.transform = 'perspective(600px) rotateX(90deg)'

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect()
        // Flip In: rotates down into place with a subtle bounce
        el.animate([
          { opacity: 0, transform: 'perspective(600px) rotateX(90deg)' },
          { opacity: 1, transform: 'perspective(600px) rotateX(-10deg)', offset: 0.6 },
          { opacity: 1, transform: 'perspective(600px) rotateX(5deg)', offset: 0.8 },
          { opacity: 1, transform: 'perspective(600px) rotateX(0deg)' },
        ], {
          duration: 700,
          delay,
          easing: 'ease-out',
          fill: 'forwards',
        })
      }
    }, { threshold: 0.1 })
    observer.observe(el)

    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
