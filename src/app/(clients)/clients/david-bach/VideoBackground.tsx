'use client'

import { useRef, useEffect, useState } from 'react'

interface VideoBackgroundProps {
  /** Path to the video file (e.g., /david-bach-bg-video.mp4) */
  src: string
  /** Fallback image to show if video can't play */
  fallbackImage?: string
  /** Overlay color/gradient — goes on top of the video */
  overlay?: string
  /** CSS filter to apply to the video (e.g., grayscale, brightness) */
  filter?: string
  /** Children rendered on top of the overlay */
  children: React.ReactNode
  /** Style passed to the outer container */
  style?: React.CSSProperties
}

export default function VideoBackground({
  src,
  fallbackImage,
  overlay = 'rgba(35,31,33,0.8)',
  filter = 'grayscale(40%) brightness(0.6)',
  children,
  style,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [canPlayVideo, setCanPlayVideo] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Attempt to play — may fail on some mobile browsers
    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Video autoplay blocked — fall back to image
        setCanPlayVideo(false)
      })
    }
  }, [])

  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      ...style,
    }}>
      {/* Video layer */}
      {canPlayVideo ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'cover',
            filter,
            zIndex: 0,
          }}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : fallbackImage ? (
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${fallbackImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter,
          zIndex: 0,
        }} />
      ) : null}

      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: overlay,
        zIndex: 1,
      }} />

      {/* Content on top */}
      <div style={{
        position: 'relative',
        zIndex: 2,
      }}>
        {children}
      </div>
    </section>
  )
}
