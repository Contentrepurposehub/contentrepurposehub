import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

// Slide-up helper: each element gets its own start frame
const useSlideUp = (frame: number, fps: number, startFrame: number, distance = 60) => {
  const progress = spring({
    frame: frame - startFrame,
    fps,
    config: { damping: 18, stiffness: 120, mass: 0.8 },
  });

  const opacity = interpolate(frame - startFrame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return {
    opacity,
    transform: `translateY(${(1 - progress) * distance}px)`,
  };
};

export const QuoteCard: React.FC<{
  quote: string;
  author: string;
  primaryColor?: string;
}> = ({ quote, author, primaryColor = "#00C4A0" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Accent bar slides up first
  const accentBar = useSlideUp(frame, fps, 0, 40);
  // Quote text slides up slightly after
  const quoteStyle = useSlideUp(frame, fps, 8, 60);
  // Author line slides up last
  const authorStyle = useSlideUp(frame, fps, 18, 60);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0A0E1A",
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
        fontFamily: "sans-serif",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 900, width: "100%", display: "flex", gap: 40 }}>
        {/* Accent bar */}
        <div
          style={{
            ...accentBar,
            width: 6,
            flexShrink: 0,
            backgroundColor: primaryColor,
            borderRadius: 3,
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {/* Quote text */}
          <p
            style={{
              ...quoteStyle,
              color: "#FFFFFF",
              fontSize: 52,
              fontWeight: 700,
              lineHeight: 1.35,
              margin: 0,
            }}
          >
            {quote}
          </p>

          {/* Author */}
          <p
            style={{
              ...authorStyle,
              color: primaryColor,
              fontSize: 32,
              fontWeight: 600,
              margin: 0,
            }}
          >
            {author}
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};
