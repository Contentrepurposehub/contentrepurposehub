export default function ParallaxBand({
  imageUrl,
  headline,
  subtext,
  fallbackGradient = 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)',
}: {
  imageUrl: string
  headline: string
  subtext?: string
  fallbackGradient?: string
}) {
  return (
    <section
      style={{
        backgroundImage: `${fallbackGradient}, url(${imageUrl})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div style={{ background: 'rgba(15, 23, 42, 0.68)' }}>
        <div className="py-24 px-4 text-center max-w-3xl mx-auto">
          <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight">
            {headline}
          </h2>
          {subtext && (
            <p className="text-gray-300 mt-4 text-lg">
              {subtext}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
