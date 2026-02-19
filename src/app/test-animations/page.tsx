'use client'

import { useRef, useEffect } from 'react'

function PopElement({
  children,
  style,
  label,
  delay = 0,
}: {
  children: React.ReactNode
  style: string
  label: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight) return

    // Start from nothing
    switch (style) {
      case 'scale-pop':
        el.style.opacity = '0'
        el.style.transform = 'scale(0)'
        break
      case 'scale-bounce':
        el.style.opacity = '0'
        el.style.transform = 'scale(0)'
        break
      case 'scale-rotate':
        el.style.opacity = '0'
        el.style.transform = 'scale(0) rotate(-180deg)'
        break
      case 'drop-bounce':
        el.style.opacity = '0'
        el.style.transform = 'translateY(-80px) scale(0.3)'
        break
      case 'explode-in':
        el.style.opacity = '0'
        el.style.transform = 'scale(2.5)'
        el.style.filter = 'blur(20px)'
        break
      case 'flip-in':
        el.style.opacity = '0'
        el.style.transform = 'perspective(600px) rotateX(90deg)'
        break
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect()

        // Use Web Animations API for spring-like effects
        switch (style) {
          case 'scale-pop':
            el.animate([
              { opacity: 0, transform: 'scale(0)' },
              { opacity: 1, transform: 'scale(1.2)', offset: 0.6 },
              { opacity: 1, transform: 'scale(0.95)', offset: 0.8 },
              { opacity: 1, transform: 'scale(1)' },
            ], {
              duration: 600,
              delay: delay,
              easing: 'ease-out',
              fill: 'forwards',
            })
            break

          case 'scale-bounce':
            el.animate([
              { opacity: 0, transform: 'scale(0)' },
              { opacity: 1, transform: 'scale(1.35)', offset: 0.5 },
              { opacity: 1, transform: 'scale(0.85)', offset: 0.7 },
              { opacity: 1, transform: 'scale(1.1)', offset: 0.85 },
              { opacity: 1, transform: 'scale(1)' },
            ], {
              duration: 800,
              delay: delay,
              easing: 'ease-out',
              fill: 'forwards',
            })
            break

          case 'scale-rotate':
            el.animate([
              { opacity: 0, transform: 'scale(0) rotate(-180deg)' },
              { opacity: 1, transform: 'scale(1.15) rotate(10deg)', offset: 0.6 },
              { opacity: 1, transform: 'scale(0.95) rotate(-3deg)', offset: 0.8 },
              { opacity: 1, transform: 'scale(1) rotate(0deg)' },
            ], {
              duration: 700,
              delay: delay,
              easing: 'ease-out',
              fill: 'forwards',
            })
            break

          case 'drop-bounce':
            el.animate([
              { opacity: 0, transform: 'translateY(-80px) scale(0.3)' },
              { opacity: 1, transform: 'translateY(10px) scale(1.05)', offset: 0.5 },
              { opacity: 1, transform: 'translateY(-5px) scale(0.98)', offset: 0.7 },
              { opacity: 1, transform: 'translateY(2px) scale(1.01)', offset: 0.85 },
              { opacity: 1, transform: 'translateY(0) scale(1)' },
            ], {
              duration: 800,
              delay: delay,
              easing: 'ease-out',
              fill: 'forwards',
            })
            break

          case 'explode-in':
            el.animate([
              { opacity: 0, transform: 'scale(2.5)', filter: 'blur(20px)' },
              { opacity: 1, transform: 'scale(0.9)', filter: 'blur(0px)', offset: 0.6 },
              { opacity: 1, transform: 'scale(1.05)', filter: 'blur(0px)', offset: 0.8 },
              { opacity: 1, transform: 'scale(1)', filter: 'blur(0px)' },
            ], {
              duration: 700,
              delay: delay,
              easing: 'ease-out',
              fill: 'forwards',
            })
            break

          case 'flip-in':
            el.animate([
              { opacity: 0, transform: 'perspective(600px) rotateX(90deg)' },
              { opacity: 1, transform: 'perspective(600px) rotateX(-10deg)', offset: 0.6 },
              { opacity: 1, transform: 'perspective(600px) rotateX(5deg)', offset: 0.8 },
              { opacity: 1, transform: 'perspective(600px) rotateX(0deg)' },
            ], {
              duration: 700,
              delay: delay,
              easing: 'ease-out',
              fill: 'forwards',
            })
            break
        }
      }
    }, { threshold: 0.1 })
    observer.observe(el)

    return () => observer.disconnect()
  }, [style, delay])

  return (
    <div className="mb-4">
      <p className="text-xs text-gray-500 mb-2 font-mono">{label}</p>
      <div ref={ref}>{children}</div>
    </div>
  )
}

export default function TestAnimations() {
  const styles = [
    { id: 'scale-pop', label: 'Scale Pop — from nothing, overshoots slightly, settles' },
    { id: 'scale-bounce', label: 'Scale Bounce — from nothing, big overshoot, bounces to rest' },
    { id: 'scale-rotate', label: 'Scale + Rotate — spins in from nothing' },
    { id: 'drop-bounce', label: 'Drop Bounce — drops from above, bounces on landing' },
    { id: 'explode-in', label: 'Explode In — starts huge and blurred, snaps into focus' },
    { id: 'flip-in', label: 'Flip In — flips down from top edge like a card' },
  ]

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Animation Test Page</h1>
        <p className="text-gray-600 text-lg mb-4">Scroll down to see each pop-in style.</p>
        <p className="text-gray-400">Keep scrolling...</p>
      </div>

      <div className="h-[60vh]" />

      {styles.map((s) => (
        <section key={s.id} className="max-w-5xl mx-auto px-4 mb-32">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">{s.label}</h2>
          <p className="text-gray-400 text-sm text-center mb-10">Cards pop in one by one with stagger</p>

          {/* Card row */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {['Lead Magnets', 'Blog Posts', 'LinkedIn Posts'].map((title, i) => (
              <PopElement key={i} style={s.id} label="" delay={i * 150}>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <div className="text-3xl mb-3">{['📚', '📝', '💼'][i]}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">Your webinar content repurposed into this format with your voice and stories.</p>
                </div>
              </PopElement>
            ))}
          </div>

          {/* Heading + text pop */}
          <div className="text-center mb-10">
            <PopElement style={s.id} label="Heading pop">
              <h3 className="text-3xl font-bold text-gray-900">This Heading Pops In</h3>
            </PopElement>
            <PopElement style={s.id} label="Subtext pop" delay={200}>
              <p className="text-gray-600 text-lg mt-2">And the supporting text follows right after.</p>
            </PopElement>
          </div>

          {/* Icon + stat pop */}
          <div className="flex justify-center gap-12">
            {[
              { emoji: '🎯', stat: '75+', label: 'Content Pieces' },
              { emoji: '⚡', stat: '7 Days', label: 'First Delivery' },
              { emoji: '📈', stat: '$54', label: 'Per Piece' },
            ].map((item, i) => (
              <PopElement key={i} style={s.id} label="" delay={i * 120}>
                <div className="text-center">
                  <div className="text-4xl mb-2">{item.emoji}</div>
                  <div className="text-2xl font-bold text-blue-600">{item.stat}</div>
                  <div className="text-sm text-gray-500">{item.label}</div>
                </div>
              </PopElement>
            ))}
          </div>

          <hr className="mt-16 border-gray-200" />
        </section>
      ))}

      <div className="py-20 text-center text-gray-400">
        <p>End of test page</p>
      </div>
    </main>
  )
}
