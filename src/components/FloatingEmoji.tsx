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

    const animation = el.animate(
      [
        { transform: 'translateY(0) rotate(0deg)' },
        { transform: 'translateY(-18px) rotate(6deg)' },
      ],
      {
        duration: 2000,
        iterations: Infinity,
        direction: 'alternate' as PlaybackDirection,
        easing: 'ease-in-out',
        delay,
      }
    )

    return () => animation.cancel()
  }, [delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
