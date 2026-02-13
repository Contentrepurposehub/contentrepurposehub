'use client'

import dynamic from 'next/dynamic'

const CompoundGrowthChart = dynamic(
  () => import('./DataVisualizations').then((m) => m.CompoundGrowthChart),
  { ssr: false, loading: () => <div style={{ height: 340, background: '#231F21', borderRadius: 16, margin: '32px 0' }} /> }
)

const SavingsComparisonChart = dynamic(
  () => import('./DataVisualizations').then((m) => m.SavingsComparisonChart),
  { ssr: false, loading: () => <div style={{ height: 340, background: '#231F21', borderRadius: 16, margin: '32px 0' }} /> }
)

const WealthGapChart = dynamic(
  () => import('./DataVisualizations').then((m) => m.WealthGapChart),
  { ssr: false, loading: () => <div style={{ height: 340, background: '#231F21', borderRadius: 16, margin: '32px 0' }} /> }
)

export { CompoundGrowthChart, SavingsComparisonChart, WealthGapChart }
