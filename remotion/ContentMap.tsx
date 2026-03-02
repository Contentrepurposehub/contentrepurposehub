import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
} from "remotion";

const PRIMARY = "#00C4A0";
const DARK = "#0A0E1A";
const BOX_BG = "#141D2E";
const TEXT = "#D0D8E0";
const WHITE = "#FFFFFF";
const FADE = 20; // crossfade duration in frames

// Scene timing
const S1_START = 0;   const S1_DUR = 150;
const S2_START = 130; const S2_DUR = 230;  // overlaps S1 by FADE frames
const S3_START = 340; const S3_DUR = 230;  // overlaps S2 by FADE frames
const S4_START = 550; const S4_DUR = 200;  // overlaps S3 by FADE frames
// Total: 750 frames = 25s

// Fade in + fade out per scene
const useFade = (localFrame: number, totalFrames: number) =>
  interpolate(
    localFrame,
    [0, FADE, totalFrames - FADE, totalFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

// Spring slide-up + fade in
const useReveal = (frame: number, fps: number, startFrame: number, distance = 50) => {
  const f = frame - startFrame;
  const progress = spring({ frame: f, fps, config: { damping: 20, stiffness: 130, mass: 0.7 } });
  const opacity = interpolate(f, [0, 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return { opacity, transform: `translateY(${(1 - progress) * distance}px)` };
};

// Single bullet line
const Bullet: React.FC<{ text: string; frame: number; fps: number; startFrame: number }> = ({
  text, frame, fps, startFrame,
}) => {
  const style = useReveal(frame, fps, startFrame, 30);
  return (
    <div style={{ ...style, display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
      <span style={{ color: PRIMARY, fontWeight: 700, fontSize: 22, lineHeight: 1.4 }}>→</span>
      <span style={{ color: TEXT, fontSize: 22, lineHeight: 1.4 }}>{text}</span>
    </div>
  );
};

// Layer box: label + staggered bullets
const Layer: React.FC<{
  label: string;
  bullets: string[];
  frame: number;
  fps: number;
  startFrame: number;
}> = ({ label, bullets, frame, fps, startFrame }) => {
  const labelStyle = useReveal(frame, fps, startFrame, 30);
  return (
    <div style={{ backgroundColor: BOX_BG, border: `1.5px solid ${PRIMARY}33`, borderRadius: 8, padding: 28, flex: 1 }}>
      <div style={{ ...labelStyle, color: PRIMARY, fontSize: 16, fontWeight: 700, letterSpacing: 2, marginBottom: 16, textTransform: "uppercase" }}>
        {label}
      </div>
      {bullets.map((b, i) => (
        <Bullet key={i} text={b} frame={frame} fps={fps} startFrame={startFrame + 10 + i * 10} />
      ))}
    </div>
  );
};

export const ContentMap: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Local frames per scene (for fade + reveal calculations)
  const f1 = frame - S1_START;
  const f2 = frame - S2_START;
  const f3 = frame - S3_START;
  const f4 = frame - S4_START;

  return (
    <AbsoluteFill style={{ backgroundColor: DARK, fontFamily: "'Inter', sans-serif", overflow: "hidden" }}>

      {/* SCENE 1 — Hook */}
      <Sequence from={S1_START} durationInFrames={S1_DUR}>
        <AbsoluteFill style={{ opacity: useFade(f1, S1_DUR), justifyContent: "center", alignItems: "center", padding: 100 }}>
          <div style={{ maxWidth: 860, textAlign: "center" }}>
            <p style={{ ...useReveal(f1, fps, 0), color: WHITE, fontSize: 54, fontWeight: 800, lineHeight: 1.2, margin: 0, marginBottom: 24 }}>
              You spent 10+ hours preparing that webinar.
            </p>
            <p style={{ ...useReveal(f1, fps, 18), color: PRIMARY, fontSize: 34, fontWeight: 600, margin: 0, marginBottom: 20 }}>
              Here is everything that recording contains.
            </p>
            <p style={{ ...useReveal(f1, fps, 36), color: TEXT, fontSize: 28, margin: 0 }}>
              One 60-minute session. Four layers.
            </p>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 2 — Written + Video layers */}
      <Sequence from={S2_START} durationInFrames={S2_DUR}>
        <AbsoluteFill style={{ opacity: useFade(f2, S2_DUR), justifyContent: "center", alignItems: "center", padding: "0 60px" }}>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ ...useReveal(f2, fps, 0, 20), color: PRIMARY, fontSize: 15, fontWeight: 700, letterSpacing: 3 }}>
              LAYERS 1 &amp; 2 OF 4
            </div>
            <div style={{ display: "flex", gap: 20 }}>
              <Layer
                label="Written Layer"
                bullets={["SEO blog post (1,500–2,500 words)", "10 LinkedIn posts", "Newsletter edition", "Email welcome sequence"]}
                frame={f2} fps={fps} startFrame={0}
              />
              <Layer
                label="Video Layer"
                bullets={["3–5 short-form clips with captions", "YouTube Shorts scripts"]}
                frame={f2} fps={fps} startFrame={50}
              />
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 3 — Capture + SEO layers */}
      <Sequence from={S3_START} durationInFrames={S3_DUR}>
        <AbsoluteFill style={{ opacity: useFade(f3, S3_DUR), justifyContent: "center", alignItems: "center", padding: "0 60px" }}>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ ...useReveal(f3, fps, 0, 20), color: PRIMARY, fontSize: 15, fontWeight: 700, letterSpacing: 3 }}>
              LAYERS 3 &amp; 4 OF 4
            </div>
            <div style={{ display: "flex", gap: 20 }}>
              <Layer
                label="Capture Layer"
                bullets={["Lead magnet concept", "Landing page that captures emails 24/7"]}
                frame={f3} fps={fps} startFrame={0}
              />
              <Layer
                label="SEO Layer"
                bullets={["Blog ranks on Google for months", "FAQ cited by ChatGPT and Perplexity"]}
                frame={f3} fps={fps} startFrame={50}
              />
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 4 — Payoff */}
      <Sequence from={S4_START} durationInFrames={S4_DUR}>
        <AbsoluteFill style={{ opacity: useFade(f4, S4_DUR), justifyContent: "center", alignItems: "center", padding: 100 }}>
          <div style={{ maxWidth: 860, textAlign: "center" }}>
            <p style={{ ...useReveal(f4, fps, 0), color: WHITE, fontSize: 72, fontWeight: 900, lineHeight: 1.1, margin: 0, marginBottom: 24 }}>
              14+ pieces.
            </p>
            <p style={{ ...useReveal(f4, fps, 18), color: PRIMARY, fontSize: 44, fontWeight: 700, margin: 0, marginBottom: 24 }}>
              All in your voice. None of it generic.
            </p>
            <p style={{ ...useReveal(f4, fps, 36), color: TEXT, fontSize: 26, margin: 0, marginBottom: 40 }}>
              It is sitting in your Zoom folder right now.
            </p>
            <div style={{ ...useReveal(f4, fps, 54), display: "inline-block", backgroundColor: PRIMARY, borderRadius: 50, padding: "12px 32px" }}>
              <span style={{ color: DARK, fontSize: 20, fontWeight: 700 }}>ContentRepurposeHub.com</span>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

    </AbsoluteFill>
  );
};
