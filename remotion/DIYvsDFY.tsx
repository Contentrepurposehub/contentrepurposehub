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
const RED = "#FF6B6B";
const FADE = 20;

// Scene timing
const S1_START = 0;   const S1_DUR = 150;  // 5s  — Hook
const S2_START = 130; const S2_DUR = 270;  // 9s  — DIY reality
const S3_START = 380; const S3_DUR = 270;  // 9s  — DFY delivery
const S4_START = 630; const S4_DUR = 200;  // 6.7s — Real question + CTA
// Total: 830 frames ≈ 27.7s

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

// Step row for DIY / DFY lists
const Step: React.FC<{
  icon: string;
  text: string;
  sub?: string;
  iconColor: string;
  frame: number;
  fps: number;
  startFrame: number;
}> = ({ icon, text, sub, iconColor, frame, fps, startFrame }) => {
  const style = useReveal(frame, fps, startFrame, 35);
  return (
    <div style={{ ...style, display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 18 }}>
      <div style={{
        width: 44, height: 44, borderRadius: "50%",
        backgroundColor: `${iconColor}22`, border: `2px solid ${iconColor}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0, fontSize: 20,
      }}>
        {icon}
      </div>
      <div>
        <div style={{ color: WHITE, fontSize: 22, fontWeight: 700, lineHeight: 1.3 }}>{text}</div>
        {sub && <div style={{ color: TEXT, fontSize: 18, marginTop: 4, lineHeight: 1.3 }}>{sub}</div>}
      </div>
    </div>
  );
};

export const DIYvsDFY: React.FC = () => {
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
        <AbsoluteFill style={{ opacity: useFade(f1, S1_DUR), justifyContent: "center", alignItems: "center", padding: 90 }}>
          <div style={{ maxWidth: 860, textAlign: "center" }}>
            <p style={{ ...useReveal(f1, fps, 0), color: WHITE, fontSize: 50, fontWeight: 800, lineHeight: 1.25, margin: 0, marginBottom: 28 }}>
              You can repurpose your own webinar.
            </p>
            <p style={{ ...useReveal(f1, fps, 20), color: PRIMARY, fontSize: 38, fontWeight: 700, margin: 0, marginBottom: 20 }}>
              Here is what that actually costs.
            </p>
            <p style={{ ...useReveal(f1, fps, 38), color: TEXT, fontSize: 26, margin: 0 }}>
              Not the tool price. Your time.
            </p>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 2 — DIY reality */}
      <Sequence from={S2_START} durationInFrames={S2_DUR}>
        <AbsoluteFill style={{ opacity: useFade(f2, S2_DUR), justifyContent: "center", alignItems: "center", padding: "0 60px" }}>
          <div style={{ width: "100%", maxWidth: 860, display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ ...useReveal(f2, fps, 0, 20), display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
              <div style={{ height: 3, flex: 1, backgroundColor: RED, borderRadius: 2 }} />
              <span style={{ color: RED, fontSize: 16, fontWeight: 800, letterSpacing: 2 }}>THE DIY REALITY</span>
              <div style={{ height: 3, flex: 1, backgroundColor: RED, borderRadius: 2 }} />
            </div>
            <Step icon="⬆" text="Upload recording to an AI tool" sub="$40-100/month" iconColor={TEXT} frame={f2} fps={fps} startFrame={15} />
            <Step icon="⏱" text="2-3 hours learning the tool" sub="Getting prompts right, configuring outputs" iconColor={TEXT} frame={f2} fps={fps} startFrame={35} />
            <Step icon="🤖" text="30+ AI-generated pieces" sub="Technically your topic. Doesn't sound like you." iconColor={RED} frame={f2} fps={fps} startFrame={55} />
            <Step icon="✏️" text="4-6 hours editing to sound human" sub="The part the tool can't do" iconColor={RED} frame={f2} fps={fps} startFrame={75} />
            <div style={{
              ...useReveal(f2, fps, 100, 20),
              backgroundColor: `${RED}18`, border: `1.5px solid ${RED}55`,
              borderRadius: 8, padding: "14px 20px", marginTop: 4,
            }}>
              <span style={{ color: RED, fontSize: 22, fontWeight: 800 }}>$2,100+ in billable time. </span>
              <span style={{ color: TEXT, fontSize: 20 }}>Content that still might not land.</span>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 3 — DFY delivery */}
      <Sequence from={S3_START} durationInFrames={S3_DUR}>
        <AbsoluteFill style={{ opacity: useFade(f3, S3_DUR), justifyContent: "center", alignItems: "center", padding: "0 60px" }}>
          <div style={{ width: "100%", maxWidth: 860, display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ ...useReveal(f3, fps, 0, 20), display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
              <div style={{ height: 3, flex: 1, backgroundColor: PRIMARY, borderRadius: 2 }} />
              <span style={{ color: PRIMARY, fontSize: 16, fontWeight: 800, letterSpacing: 2 }}>DONE-FOR-YOU</span>
              <div style={{ height: 3, flex: 1, backgroundColor: PRIMARY, borderRadius: 2 }} />
            </div>
            <Step icon="📤" text="Send the recording" sub="That is all you do" iconColor={PRIMARY} frame={f3} fps={fps} startFrame={15} />
            <Step icon="🎯" text="Human writers study your voice" sub="Your vocabulary, rhythm, specific examples" iconColor={PRIMARY} frame={f3} fps={fps} startFrame={35} />
            <Step icon="📦" text="14 strategic pieces back in 7 days" sub="Blog, LinkedIn posts, newsletter, lead magnet, landing page, video clips" iconColor={PRIMARY} frame={f3} fps={fps} startFrame={55} />
            <Step icon="🔄" text="Full funnel. Connected. Live." sub="Landing page capturing emails 24/7" iconColor={PRIMARY} frame={f3} fps={fps} startFrame={75} />
            <div style={{
              ...useReveal(f3, fps, 100, 20),
              backgroundColor: `${PRIMARY}18`, border: `1.5px solid ${PRIMARY}55`,
              borderRadius: 8, padding: "14px 20px", marginTop: 4,
            }}>
              <span style={{ color: PRIMARY, fontSize: 22, fontWeight: 800 }}>$750/month. </span>
              <span style={{ color: TEXT, fontSize: 20 }}>Content that sounds exactly like you.</span>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 4 — Real question + CTA */}
      <Sequence from={S4_START} durationInFrames={S4_DUR}>
        <AbsoluteFill style={{ opacity: useFade(f4, S4_DUR), justifyContent: "center", alignItems: "center", padding: 90 }}>
          <div style={{ maxWidth: 860, textAlign: "center" }}>
            <p style={{ ...useReveal(f4, fps, 0), color: WHITE, fontSize: 36, fontWeight: 700, lineHeight: 1.35, margin: 0, marginBottom: 24 }}>
              The question is not whether you can afford done-for-you.
            </p>
            <p style={{ ...useReveal(f4, fps, 18), color: PRIMARY, fontSize: 40, fontWeight: 900, lineHeight: 1.2, margin: 0, marginBottom: 36 }}>
              It is what you are actually buying with the cheaper option.
            </p>
            <div style={{ ...useReveal(f4, fps, 36), display: "inline-block", backgroundColor: PRIMARY, borderRadius: 50, padding: "14px 36px" }}>
              <span style={{ color: DARK, fontSize: 20, fontWeight: 700 }}>ContentRepurposeHub.com</span>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

    </AbsoluteFill>
  );
};
