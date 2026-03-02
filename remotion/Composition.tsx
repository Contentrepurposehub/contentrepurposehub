import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

// Example: Animated quote card for social media
// Replace text/colors per use case

export const QuoteCard: React.FC<{
  quote: string;
  author: string;
  primaryColor?: string;
}> = ({ quote, author, primaryColor = "#00C4A0" }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(frame, [0, 20], [20, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0A0E1A",
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          opacity,
          transform: `translateY(${translateY}px)`,
          borderLeft: `6px solid ${primaryColor}`,
          paddingLeft: 40,
          maxWidth: 900,
        }}
      >
        <p
          style={{
            color: "#FFFFFF",
            fontSize: 52,
            fontWeight: 700,
            lineHeight: 1.3,
            margin: 0,
            marginBottom: 32,
          }}
        >
          {quote}
        </p>
        <p
          style={{
            color: primaryColor,
            fontSize: 32,
            fontWeight: 600,
            margin: 0,
          }}
        >
          {author}
        </p>
      </div>
    </AbsoluteFill>
  );
};
