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
const FADE = 20;

// Scene timing
const S1_START = 0;   const S1_DUR = 150;  // 5s  — Hook
const S2_START = 130; const S2_DUR = 360;  // 12s — Flywheel diagram
const S3_START = 470; const S3_DUR = 270;  // 9s  — 4 layers breakdown
const S4_START = 720; const S4_DUR = 200;  // 6.7s — $3,000 payoff + CTA
// Total: 920 frames ≈ 30.7s

const useFade = (localFrame: number, totalFrames: number) =>
  interpolate(localFrame, [0, FADE, totalFrames - FADE, totalFrames], [0, 1, 1, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

const useReveal = (frame: number, fps: number, startFrame: number, distance = 50) => {
  const f = frame - startFrame;
  const progress = spring({ frame: f, fps, config: { damping: 20, stiffness: 130, mass: 0.7 } });
  const opacity = interpolate(f, [0, 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return { opacity, transform: `translateY(${(1 - progress) * distance}px)` };
};

// Bullet for layer boxes
const Bullet: React.FC<{ text: string; frame: number; fps: number; startFrame: number }> = ({
  text, frame, fps, startFrame,
}) => {
  const style = useReveal(frame, fps, startFrame, 25);
  return (
    <div style={{ ...style, display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 7 }}>
      <span style={{ color: PRIMARY, fontWeight: 700, fontSize: 18, lineHeight: 1.4 }}>•</span>
      <span style={{ color: TEXT, fontSize: 18, lineHeight: 1.4 }}>{text}</span>
    </div>
  );
};

// Layer box
const Layer: React.FC<{ label: string; bullets: string[]; frame: number; fps: number; startFrame: number }> = ({
  label, bullets, frame, fps, startFrame,
}) => (
  <div style={{ backgroundColor: BOX_BG, border: `1.5px solid ${PRIMARY}33`, borderRadius: 8, padding: 22, flex: 1 }}>
    <div style={{ ...useReveal(frame, fps, startFrame, 25), color: PRIMARY, fontSize: 14, fontWeight: 700, letterSpacing: 2, marginBottom: 12, textTransform: "uppercase" }}>
      {label}
    </div>
    {bullets.map((b, i) => (
      <Bullet key={i} text={b} frame={frame} fps={fps} startFrame={startFrame + 10 + i * 9} />
    ))}
  </div>
);

// Flywheel diagram
const CX = 540, CY = 510, R = 295;
const steps = [
  { label: "RUN\nWEBINAR",          angle: -90  },
  { label: "EXTRACT\nCONTENT",      angle: -18  },
  { label: "PUBLISH +\nDISTRIBUTE", angle: 54   },
  { label: "GROW\nEMAIL LIST",      angle: 126  },
  { label: "FILL NEXT\nWEBINAR",    angle: 198  },
];
const toRad = (deg: number) => (deg * Math.PI) / 180;
const stepPos = (angle: number, r = R) => ({ x: CX + r * Math.cos(toRad(angle)), y: CY + r * Math.sin(toRad(angle)) });
const arcPath = (fromAngle: number, toAngle: number) => {
  const arcR = R - 10;
  const start = stepPos(fromAngle + 12, arcR);
  const end   = stepPos(toAngle - 12, arcR);
  return `M ${start.x} ${start.y} A ${arcR} ${arcR} 0 0 1 ${end.x} ${end.y}`;
};

const FlywheelDiagram: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const stepOpacity = (i: number) =>
    interpolate(frame, [i * 50, i * 50 + 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const stepScale = (i: number) => {
    const s = spring({ frame: frame - i * 50, fps, config: { damping: 18, stiffness: 160, mass: 0.6 } });
    return interpolate(s, [0, 1], [0.3, 1]);
  };
  const arcOpacity = (i: number) =>
    interpolate(frame, [i * 50 + 20, i * 50 + 45], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const centerOpacity = interpolate(frame, [270, 300], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const centerScale = spring({ frame: frame - 270, fps, config: { damping: 18, stiffness: 140, mass: 0.7 } });

  return (
    <svg width={1080} height={1080} viewBox="0 0 1080 1080">
      {steps.map((step, i) => {
        const next = steps[(i + 1) % steps.length];
        return (
          <g key={`arc-${i}`} opacity={arcOpacity(i)}>
            <path d={arcPath(step.angle, next.angle)} fill="none" stroke={PRIMARY} strokeWidth={3} strokeDasharray="6 4" />
          </g>
        );
      })}
      {steps.map((step, i) => {
        const pos = stepPos(step.angle);
        const lx = CX + (R + 70) * Math.cos(toRad(step.angle));
        const ly = CY + (R + 70) * Math.sin(toRad(step.angle));
        const lines = step.label.split("\n");
        return (
          <g key={i} opacity={stepOpacity(i)} transform={`translate(${pos.x},${pos.y}) scale(${stepScale(i)}) translate(${-pos.x},${-pos.y})`}>
            <circle cx={pos.x} cy={pos.y} r={50} fill={PRIMARY} />
            <text x={pos.x} y={pos.y + 8} textAnchor="middle" fill={DARK} fontSize={22} fontWeight={900}>{i + 1}</text>
            {lines.map((line, li) => (
              <text key={li} x={lx} y={ly - (lines.length - 1) * 11 + li * 24} textAnchor="middle" fill={WHITE} fontSize={19} fontWeight={700}>{line}</text>
            ))}
          </g>
        );
      })}
      <g opacity={centerOpacity} transform={`translate(${CX},${CY}) scale(${Math.max(0.01, centerScale)}) translate(${-CX},${-CY})`}>
        <circle cx={CX} cy={CY} r={86} fill={BOX_BG} stroke={PRIMARY} strokeWidth={2} />
        <text x={CX} y={CY - 10} textAnchor="middle" fill={WHITE} fontSize={20} fontWeight={800}>YOUR VOICE</text>
        <text x={CX} y={CY + 16} textAnchor="middle" fill={PRIMARY} fontSize={17} fontWeight={700}>NOT AI SLOP</text>
      </g>
    </svg>
  );
};

export const Flywheel: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

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
            <p style={{ ...useReveal(f1, fps, 0), color: WHITE, fontSize: 52, fontWeight: 800, lineHeight: 1.25, margin: 0, marginBottom: 28 }}>
              The coaches who are always posting are not creating more content.
            </p>
            <p style={{ ...useReveal(f1, fps, 22), color: PRIMARY, fontSize: 44, fontWeight: 900, margin: 0 }}>
              They are running a flywheel.
            </p>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 2 — Flywheel diagram */}
      <Sequence from={S2_START} durationInFrames={S2_DUR}>
        <AbsoluteFill style={{ opacity: useFade(f2, S2_DUR) }}>
          <div style={{
            ...useReveal(f2, fps, 0, 20),
            position: "absolute", top: 44, width: "100%",
            textAlign: "center", color: WHITE, fontSize: 26, fontWeight: 800, letterSpacing: 2,
          }}>
            THE WEBINAR CONTENT FLYWHEEL
          </div>
          <FlywheelDiagram frame={f2} fps={fps} />
          <div style={{
            position: "absolute", bottom: 32, width: "100%",
            textAlign: "center", color: TEXT, fontSize: 17,
            opacity: interpolate(f2, [290, 320], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          }}>
            Marius Galatan | ContentRepurposeHub.com
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 3 — 4 layers breakdown */}
      <Sequence from={S3_START} durationInFrames={S3_DUR}>
        <AbsoluteFill style={{ opacity: useFade(f3, S3_DUR), justifyContent: "center", alignItems: "center", padding: "0 50px" }}>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ ...useReveal(f3, fps, 0, 20), color: WHITE, fontSize: 22, fontWeight: 800, letterSpacing: 1, textAlign: "center" }}>
              HERE IS WHAT ONE WEBINAR ACTUALLY CONTAINS
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              <Layer label="Written" bullets={["SEO blog post (1,500–2,500 words)", "10 LinkedIn posts", "Newsletter edition", "Email welcome sequence"]} frame={f3} fps={fps} startFrame={10} />
              <Layer label="Video" bullets={["3–5 short clips for LinkedIn", "Your voice, your stories", "Captions for mute scrolling"]} frame={f3} fps={fps} startFrame={40} />
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              <Layer label="Capture" bullets={["1 lead magnet concept", "Landing page capturing emails 24/7"]} frame={f3} fps={fps} startFrame={70} />
              <Layer label="SEO" bullets={["Blog ranks on Google for months", "FAQ cited by ChatGPT", "Internal links build authority"]} frame={f3} fps={fps} startFrame={100} />
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 4 — $3,000 payoff + CTA */}
      <Sequence from={S4_START} durationInFrames={S4_DUR}>
        <AbsoluteFill style={{ opacity: useFade(f4, S4_DUR), justifyContent: "center", alignItems: "center", padding: 90 }}>
          <div style={{ maxWidth: 860, textAlign: "center" }}>
            <p style={{ ...useReveal(f4, fps, 0), color: PRIMARY, fontSize: 52, fontWeight: 900, lineHeight: 1.1, margin: 0, marginBottom: 24 }}>
              14+ strategic pieces.
            </p>
            <p style={{ ...useReveal(f4, fps, 16), color: WHITE, fontSize: 30, lineHeight: 1.4, margin: 0, marginBottom: 24 }}>
              You bill $300+ an hour. That recording is $3,000 sitting in a folder doing nothing.
            </p>
            <p style={{ ...useReveal(f4, fps, 32), color: TEXT, fontSize: 26, fontWeight: 600, margin: 0, marginBottom: 36 }}>
              How many times have you run a webinar without repurposing it?
            </p>
            <div style={{ ...useReveal(f4, fps, 48), display: "inline-block", backgroundColor: PRIMARY, borderRadius: 50, padding: "12px 32px" }}>
              <span style={{ color: DARK, fontSize: 20, fontWeight: 700 }}>ContentRepurposeHub.com</span>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

    </AbsoluteFill>
  );
};
