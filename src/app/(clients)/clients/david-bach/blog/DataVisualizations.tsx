'use client'

import { Player } from '@remotion/player'
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from 'remotion'

/* ─── Design tokens (brand match) ─── */
const BLUE = '#2729FE'
const CHARCOAL = '#231F21'
const CREAM = '#F3F0EC'
const ORANGE = '#D73A0F'

/* ═══════════════════════════════════════════════════════
   Composition 1: Compound Interest Growth Chart
   Shows $625/mo at 7% return growing over 30 years
   ═══════════════════════════════════════════════════════ */

function CompoundGrowthComposition() {
  const frame = useCurrentFrame()
  const { durationInFrames } = useVideoConfig()

  // Data: cumulative value at each 5-year mark
  const dataPoints = [
    { year: 0, value: 0 },
    { year: 5, value: 44800 },
    { year: 10, value: 108500 },
    { year: 15, value: 199600 },
    { year: 20, value: 329000 },
    { year: 25, value: 514000 },
    { year: 30, value: 780000 },
    { year: 35, value: 1130000 },
  ]

  const maxValue = 1130000
  const chartLeft = 70
  const chartRight = 540
  const chartTop = 60
  const chartBottom = 260
  const chartWidth = chartRight - chartLeft
  const chartHeight = chartBottom - chartTop

  // Animation progress 0-1
  const progress = interpolate(frame, [20, durationInFrames - 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  })

  // Build path
  const points = dataPoints.map((d) => ({
    x: chartLeft + (d.year / 35) * chartWidth,
    y: chartBottom - (d.value / maxValue) * chartHeight,
  }))

  // Animated path (clip based on progress)
  const visiblePoints = points.filter(
    (_, i) => i / (points.length - 1) <= progress + 0.01
  )

  const pathD =
    visiblePoints.length > 1
      ? `M ${visiblePoints.map((p) => `${p.x},${p.y}`).join(' L ')}`
      : ''

  // Fill area
  const fillD =
    visiblePoints.length > 1
      ? `${pathD} L ${visiblePoints[visiblePoints.length - 1].x},${chartBottom} L ${visiblePoints[0].x},${chartBottom} Z`
      : ''

  // Current value label
  const currentIdx = Math.min(
    Math.floor(progress * (dataPoints.length - 1)),
    dataPoints.length - 1
  )
  const currentValue = dataPoints[currentIdx].value
  const formattedValue =
    currentValue >= 1000000
      ? `$${(currentValue / 1000000).toFixed(1)}M`
      : `$${Math.round(currentValue / 1000).toLocaleString()}K`

  // Title fade
  const titleOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  })

  // Million marker
  const millionY = chartBottom - (1000000 / maxValue) * chartHeight
  const showMillion = progress > 0.85

  return (
    <AbsoluteFill
      style={{
        background: CHARCOAL,
        fontFamily: "'Inter', sans-serif",
        padding: '24px 28px',
      }}
    >
      {/* Title */}
      <div
        style={{
          opacity: titleOpacity,
          color: '#fff',
          fontSize: '16px',
          fontWeight: 700,
          marginBottom: '4px',
        }}
      >
        Compound Growth: $625/mo at 7% Annual Return
      </div>
      <div style={{ opacity: titleOpacity, color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginBottom: '16px' }}>
        The automatic millionaire formula in action
      </div>

      <svg viewBox="0 0 580 300" style={{ width: '100%', height: 'auto' }}>
        {/* Grid lines */}
        {[0, 250000, 500000, 750000, 1000000].map((v) => {
          const y = chartBottom - (v / maxValue) * chartHeight
          return (
            <g key={v}>
              <line x1={chartLeft} y1={y} x2={chartRight} y2={y} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <text x={chartLeft - 8} y={y + 4} textAnchor="end" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="Inter">
                {v === 0 ? '$0' : v === 1000000 ? '$1M' : `$${v / 1000}K`}
              </text>
            </g>
          )
        })}

        {/* X-axis labels */}
        {[0, 5, 10, 15, 20, 25, 30, 35].map((yr) => {
          const x = chartLeft + (yr / 35) * chartWidth
          return (
            <text key={yr} x={x} y={chartBottom + 18} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="Inter">
              {yr}yr
            </text>
          )
        })}

        {/* Fill area */}
        {fillD && <path d={fillD} fill={`${BLUE}25`} />}

        {/* Line */}
        {pathD && (
          <path d={pathD} fill="none" stroke={BLUE} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        )}

        {/* Current dot */}
        {visiblePoints.length > 0 && (
          <circle
            cx={visiblePoints[visiblePoints.length - 1].x}
            cy={visiblePoints[visiblePoints.length - 1].y}
            r="5"
            fill={BLUE}
            stroke="#fff"
            strokeWidth="2"
          />
        )}

        {/* Million marker line */}
        {showMillion && (
          <>
            <line x1={chartLeft} y1={millionY} x2={chartRight} y2={millionY} stroke={ORANGE} strokeWidth="1.5" strokeDasharray="6,4" opacity={0.7} />
            <text x={chartRight + 4} y={millionY + 4} fill={ORANGE} fontSize="11" fontWeight="700" fontFamily="Inter">
              $1M
            </text>
          </>
        )}
      </svg>

      {/* Value label */}
      <div
        style={{
          position: 'absolute',
          bottom: '28px',
          right: '28px',
          textAlign: 'right',
        }}
      >
        <div style={{ color: BLUE, fontSize: '28px', fontWeight: 900, lineHeight: 1 }}>
          {formattedValue}
        </div>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', marginTop: '2px' }}>
          Year {dataPoints[currentIdx].year}
        </div>
      </div>
    </AbsoluteFill>
  )
}

/* ═══════════════════════════════════════════════════════
   Composition 2: Savings Rate Comparison (3% vs 14%)
   Bar race showing the gap over time
   ═══════════════════════════════════════════════════════ */

function SavingsComparisonComposition() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const years = [5, 10, 15, 20, 25, 30]
  const low = [10700, 24600, 42400, 65200, 95000, 133500]     // 3% of $60K at 7%
  const high = [44800, 108500, 199600, 329000, 514000, 780000] // 14% of $60K at 7%

  const maxVal = 780000

  // Stagger each bar pair
  const barHeight = 28
  const barGap = 8
  const groupGap = 18
  const startY = 70

  const titleSpring = spring({ frame, fps, from: 0, to: 1, durationInFrames: 20 })

  return (
    <AbsoluteFill
      style={{
        background: CHARCOAL,
        fontFamily: "'Inter', sans-serif",
        padding: '24px 28px',
      }}
    >
      <div style={{ opacity: titleSpring, color: '#fff', fontSize: '16px', fontWeight: 700, marginBottom: '4px' }}>
        Why 3% Will Never Make You a Millionaire
      </div>
      <div style={{ opacity: titleSpring, color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>
        3% vs 14% savings rate on $60K income &middot; 7% annual return
      </div>

      <svg viewBox="0 0 580 300" style={{ width: '100%', height: 'auto' }}>
        {years.map((yr, i) => {
          const groupY = startY + i * (barHeight * 2 + barGap + groupGap)
          const delay = i * 8 + 15
          const barProgress = interpolate(frame, [delay, delay + 30], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.out(Easing.cubic),
          })

          const lowWidth = (low[i] / maxVal) * 420 * barProgress
          const highWidth = (high[i] / maxVal) * 420 * barProgress

          const formatVal = (v: number) =>
            v >= 1000000 ? `$${(v / 1000000).toFixed(1)}M` : `$${Math.round(v / 1000)}K`

          return (
            <g key={yr}>
              {/* Year label */}
              <text x={0} y={groupY + barHeight / 2 + 5} fill="rgba(255,255,255,0.6)" fontSize="12" fontWeight="600" fontFamily="Inter">
                {yr}yr
              </text>

              {/* Low bar (3%) */}
              <rect x={50} y={groupY} width={lowWidth} height={barHeight} rx={4} fill="rgba(255,255,255,0.15)" />
              {barProgress > 0.5 && (
                <text x={50 + lowWidth + 8} y={groupY + barHeight / 2 + 4} fill="rgba(255,255,255,0.4)" fontSize="11" fontFamily="Inter">
                  {formatVal(low[i])} (3%)
                </text>
              )}

              {/* High bar (14%) */}
              <rect x={50} y={groupY + barHeight + barGap} width={highWidth} height={barHeight} rx={4} fill={BLUE} />
              {barProgress > 0.5 && (
                <text x={50 + highWidth + 8} y={groupY + barHeight + barGap + barHeight / 2 + 4} fill={BLUE} fontSize="11" fontWeight="600" fontFamily="Inter">
                  {formatVal(high[i])} (14%)
                </text>
              )}
            </g>
          )
        })}
      </svg>
    </AbsoluteFill>
  )
}

/* ═══════════════════════════════════════════════════════
   Composition 3: 40x Wealth Gap (Homeowners vs Renters)
   ═══════════════════════════════════════════════════════ */

function WealthGapComposition() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const ownerSpring = spring({ frame, fps, from: 0, to: 1, durationInFrames: 45, delay: 15 })
  const renterSpring = spring({ frame, fps, from: 0, to: 1, durationInFrames: 45, delay: 25 })
  const labelSpring = spring({ frame, fps, from: 0, to: 1, durationInFrames: 20, delay: 50 })

  const ownerHeight = 220 * ownerSpring // $400K
  const renterHeight = 5.5 * renterSpring // $10K (proportional)

  const ownerValue = Math.round(400000 * ownerSpring)
  const renterValue = Math.round(10000 * renterSpring)

  const formatCurrency = (v: number) => {
    if (v >= 1000) return `$${Math.round(v / 1000).toLocaleString()}K`
    return `$${v.toLocaleString()}`
  }

  return (
    <AbsoluteFill
      style={{
        background: CHARCOAL,
        fontFamily: "'Inter', sans-serif",
        padding: '24px 28px',
      }}
    >
      <div style={{ color: '#fff', fontSize: '16px', fontWeight: 700, marginBottom: '4px' }}>
        The Wealth Gap: Homeowners vs. Renters
      </div>
      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginBottom: '20px' }}>
        Average net worth comparison
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          gap: '60px',
          height: '260px',
          paddingBottom: '0',
        }}
      >
        {/* Homeowner bar */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              fontSize: '22px',
              fontWeight: 900,
              color: BLUE,
              marginBottom: '8px',
            }}
          >
            {formatCurrency(ownerValue)}
          </div>
          <div
            style={{
              width: '120px',
              height: `${ownerHeight}px`,
              background: `linear-gradient(180deg, ${BLUE} 0%, ${BLUE}80 100%)`,
              borderRadius: '8px 8px 0 0',
              transition: 'height 0.1s',
            }}
          />
          <div
            style={{
              marginTop: '12px',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            Homeowners
          </div>
        </div>

        {/* Renter bar */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              fontSize: '22px',
              fontWeight: 900,
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '8px',
            }}
          >
            {formatCurrency(renterValue)}
          </div>
          <div
            style={{
              width: '120px',
              height: `${renterHeight}px`,
              minHeight: '4px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '8px 8px 0 0',
              transition: 'height 0.1s',
            }}
          />
          <div
            style={{
              marginTop: '12px',
              color: 'rgba(255,255,255,0.5)',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            Renters
          </div>
        </div>
      </div>

      {/* 40x label */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '16px',
          opacity: labelSpring,
          transform: `scale(${0.8 + labelSpring * 0.2})`,
        }}
      >
        <span
          style={{
            display: 'inline-block',
            background: ORANGE,
            color: '#fff',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: 800,
          }}
        >
          40&times; wealth gap
        </span>
      </div>
    </AbsoluteFill>
  )
}

/* ═══════════════════════════════════════════════════════
   Player Wrappers — exported for use in blog
   ═══════════════════════════════════════════════════════ */

const playerStyle: React.CSSProperties = {
  width: '100%',
  borderRadius: '16px',
  overflow: 'hidden',
  margin: '32px 0',
}

export function CompoundGrowthChart() {
  return (
    <div style={playerStyle}>
      <Player
        component={CompoundGrowthComposition}
        durationInFrames={180}
        fps={30}
        compositionWidth={580}
        compositionHeight={340}
        style={{ width: '100%' }}
        autoPlay
        loop
        controls={false}
      />
    </div>
  )
}

export function SavingsComparisonChart() {
  return (
    <div style={playerStyle}>
      <Player
        component={SavingsComparisonComposition}
        durationInFrames={150}
        fps={30}
        compositionWidth={580}
        compositionHeight={340}
        style={{ width: '100%' }}
        autoPlay
        loop
        controls={false}
      />
    </div>
  )
}

export function WealthGapChart() {
  return (
    <div style={playerStyle}>
      <Player
        component={WealthGapComposition}
        durationInFrames={120}
        fps={30}
        compositionWidth={580}
        compositionHeight={340}
        style={{ width: '100%' }}
        autoPlay
        loop
        controls={false}
      />
    </div>
  )
}
