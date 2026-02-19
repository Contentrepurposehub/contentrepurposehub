'use client'

import { useRef, useEffect } from 'react'

export default function PulsingCTA({
  href,
  children,
  className,
  target,
  rel,
}: {
  href: string
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
}) {
  const ref = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const animation = el.animate(
      [
        {
          boxShadow: '0 0 20px rgba(37, 99, 235, 0.35), 0 4px 15px rgba(124, 58, 237, 0.2)',
          transform: 'scale(1)',
        },
        {
          boxShadow: '0 0 45px rgba(37, 99, 235, 0.65), 0 0 90px rgba(124, 58, 237, 0.35), 0 8px 30px rgba(0, 0, 0, 0.12)',
          transform: 'scale(1.03)',
        },
      ],
      {
        duration: 2000,
        iterations: Infinity,
        direction: 'alternate' as PlaybackDirection,
        easing: 'ease-in-out',
      }
    )

    return () => animation.cancel()
  }, [])

  return (
    <a ref={ref} href={href} className={className} target={target} rel={rel}>
      {children}
    </a>
  )
}
