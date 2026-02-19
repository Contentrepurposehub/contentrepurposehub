'use client'

export default function AnimatedSection({
  children,
  className,
  hero = false,
}: {
  children: React.ReactNode
  className?: string
  hero?: boolean
}) {
  if (hero) {
    return (
      <div className={`${className || ''} animate-hero`}>
        {children}
      </div>
    )
  }

  return <div className={className}>{children}</div>
}
