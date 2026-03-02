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
const TEXT = "#D0D8E0";
const WHITE = "#FFFFFF";
const FADE = 20;

// Scene timing
const S1_START = 0;   const S1_DUR = 160;  // 5.3s — Hook
const S2_START = 140; const S2_DUR = 160;  // 5.3s — Story
const S3_START = 280; const S3_DUR = 230;  // 7.7s — Days 1-3
const S4_START = 490; const S4_DUR = 230;  // 7.7s — Days 4-7
const S5_START = 700; const S5_DUR = 210;  // 7s   — Payoff
// Total: 910 frames = 30.3s

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

const DayRow: React.FC<{
  day: string;
  title: string;
  desc: string;
  isLast?: boolean;
  frame: number;
  fps: number;
  startFrame: number;
}> = ({ day, title, desc, isLast, frame, fps, startFrame }) => {
  const style = useReveal(frame, fps, startFrame, 40);
  return (
    <div style={{ ...style, display: "flex", gap: 28, alignItems: "flex-start", marginBottom: 8 }}>
      {/* Circle + connector */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div style={{
          width: 72, height: 72, borderRadius: "50%",
          backgroundColor: isLast ? PRIMARY : `${PRIMARY}33`,
          border: `3px solid ${PRIMARY}`,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span style={{ color: isLast ? DARK : PRIMARY, fontSize: 28, fontWeight: 900 }}>
            {isLast ? "✓" : day.replace("Day ", "").split("-")[0]}
          </span>
        </div>
        {!isLast && (
          <div style={{ width: 3, height: 22, backgroundColor: `${PRIMARY}44`, marginTop: 4 }} />
        )}
      </div>
      {/* Text */}
      <div style={{ paddingTop: 6 }}>
        <div style={{ color: PRIMARY, fontSize: 24, fontWeight: 700, letterSpacing: 1, marginBottom: 4 }}>
          {day.toUpperCase()}
        </div>
        <div style={{ color: WHITE, fontSize: 34, fontWeight: 800, lineHeight: 1.2, marginBottom: 6 }}>
          {title}
        </div>
        <div style={{ color: TEXT, fontSize: 24, lineHeight: 1.4 }}>
          {desc}
        </div>
      </div>
    </div>
  );
};

export const Timeline: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const f1 = frame - S1_START;
  const f2 = frame - S2_START;
  const f3 = frame - S3_START;
  const f4 = frame - S4_START;
  const f5 = frame - S5_START;

  return (
    <AbsoluteFill style={{ backgroundColor: DARK, fontFamily: "'Inter', sans-serif", overflow: "hidden" }}>

      {/* SCENE 1 — Hook */}
      <Sequence from={S1_START} durationInFrames={S1_DUR}>
        <AbsoluteFill style={{ opacity: useFade(f1, S1_DUR), justifyContent: "center", alignItems: "center", padding: 70 }}>
          <div style={{ maxWidth: 940, textAlign: "center" }}>
            <p style={{ ...useReveal(f1, fps, 0), color: WHITE, fontSize: 54, fontWeight: 900, lineHeight: 1.2, margin: 0, marginBottom: 28 }}>
              Most $300/hour consultants lose $3,000 every time they repurpose their own webinar.
            </p>
            <p style={{ ...useReveal(f1, fps, 22), color: PRIMARY, fontSize: 42, fontWeight: 700, margin: 0 }}>
              DIY content is not free. It is the most expensive content you will ever create.
            </p>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 2 — Story */}
      <Sequence from={S2_START} durationInFrames={S2_DUR}>
        <AbsoluteFill style={{ opacity: useFade(f2, S2_DUR), justifyContent: "center", alignItems: "center", padding: 70 }}>
          <div style={{ maxWidth: 940, textAlign: "center" }}>
            <p style={{ ...useReveal(f2, fps, 0), color: TEXT, fontSize: 42, lineHeight: 1.4, margin: 0, marginBottom: 32 }}>
              Your competitor sent their recording to someone else and booked two new clients.
            </p>
            <p style={{ ...useReveal(f2, fps, 18), color: WHITE, fontSize: 48, fontWeight: 900, lineHeight: 1.2, margin: 0 }}>
              While you were editing Canva templates.
            </p>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 3 — Days 1-3 */}
      <Sequence from={S3_START} durationInFrames={S3_DUR}>
        <AbsoluteFill style={{ opacity: useFade(f3, S3_DUR), justifyContent: "center", alignItems: "center", padding: "0 70px" }}>
          <div style={{ width: "100%", maxWidth: 940 }}>
            <div style={{ ...useReveal(f3, fps, 0, 20), color: PRIMARY, fontSize: 24, fontWeight: 800, letterSpacing: 3, marginBottom: 28, textAlign: "center" }}>
              WHAT HAPPENS WHEN YOU HAND OFF THE RECORDING
            </div>
            <DayRow day="Day 1-2" title="Research & extraction" desc="Every insight, story, framework, and audience question pulled." frame={f3} fps={fps} startFrame={15} />
            <DayRow day="Day 2-3" title="Voice mapping" desc="Your vocabulary, rhythm, examples. Sounds like you, not a template." frame={f3} fps={fps} startFrame={55} />
            <DayRow day="Day 3-4" title="Positioning" desc="Mapped against what your audience searches for. Angles competitors haven't written." frame={f3} fps={fps} startFrame={95} />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 4 — Days 4-7 */}
      <Sequence from={S4_START} durationInFrames={S4_DUR}>
        <AbsoluteFill style={{ opacity: useFade(f4, S4_DUR), justifyContent: "center", alignItems: "center", padding: "0 70px" }}>
          <div style={{ width: "100%", maxWidth: 940 }}>
            <DayRow day="Day 4-5" title="Content creation" desc="Blog, newsletter, lead magnet, landing page, 10 LinkedIn posts, video clips." frame={f4} fps={fps} startFrame={10} />
            <DayRow day="Day 5-6" title="Live pages" desc="Landing page, blog, and email capture go live. Ready for traffic." frame={f4} fps={fps} startFrame={50} />
            <DayRow day="Day 7" title="Delivered" desc="Google Sheet. Every piece, every link, every caption. Nothing to edit." isLast frame={f4} fps={fps} startFrame={90} />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 5 — Payoff */}
      <Sequence from={S5_START} durationInFrames={S5_DUR}>
        <AbsoluteFill style={{ opacity: useFade(f5, S5_DUR), justifyContent: "center", alignItems: "center", padding: 70 }}>
          <div style={{ maxWidth: 940, textAlign: "center" }}>
            <p style={{ ...useReveal(f5, fps, 0), color: PRIMARY, fontSize: 84, fontWeight: 900, lineHeight: 1.0, margin: 0, marginBottom: 16 }}>
              Seven days.
            </p>
            <p style={{ ...useReveal(f5, fps, 14), color: WHITE, fontSize: 66, fontWeight: 800, margin: 0, marginBottom: 28 }}>
              Zero hours from you.
            </p>
            <p style={{ ...useReveal(f5, fps, 28), color: TEXT, fontSize: 36, lineHeight: 1.4, margin: 0, marginBottom: 32 }}>
              Done-for-you is not a luxury. It is basic economics.
            </p>
            <p style={{ ...useReveal(f5, fps, 42), color: WHITE, fontSize: 36, fontWeight: 600, margin: 0, marginBottom: 36 }}>
              What would you do with 10 extra hours per week?
            </p>
            <div style={{ ...useReveal(f5, fps, 56), display: "inline-block", backgroundColor: PRIMARY, borderRadius: 50, padding: "14px 40px" }}>
              <span style={{ color: DARK, fontSize: 28, fontWeight: 700 }}>ContentRepurposeHub.com</span>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

    </AbsoluteFill>
  );
};
