'use client'

import { ReactNode } from 'react'

// Passthrough wrapper — animation components handle their own state
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <>{children}</>
}
