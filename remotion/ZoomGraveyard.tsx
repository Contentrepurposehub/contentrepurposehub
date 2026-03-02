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
const DIM = "#1A1A2E";
const TEXT = "#D0D8E0";
const WHITE = "#FFFFFF";
const MUTED = "#5A6475";
const FADE = 20;

// Scene timing
const S1_START = 0;   const S1_DUR = 160;  // 5.3s — Hook: the folder
const S2_START = 140; const S2_DUR = 200;  // 6.7s — The math: $36K
const S3_START = 320; const S3_DUR = 300;  // 10s  — Before/After split panel
const S4_START = 600; const S4_DUR = 210;  // 7s   — Payoff + CTA
// Total: 810 frames = 27s

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

// Dim stat row for left (dead) panel
const DeadStat: React.FC<{ text: string; frame: number; fps: number; startFrame: number }> = ({ text, frame, fps, startFrame }) => {
  const style = useReveal(frame, fps, startFrame, 25);
  return (
    <div style={{ ...style, color: MUTED, fontSize: 26, lineHeight: 1.5, fontWeight: 500 }}>{text}</div>
  );
};

// Bright stat row for right (alive) panel
const AliveStat: React.FC<{ text: string; frame: number; fps: number; startFrame: number }> = ({ text, frame, fps, startFrame }) => {
  const style = useReveal(frame, fps, startFrame, 25);
  return (
    <div style={{ ...style, color: WHITE, fontSize: 26, lineHeight: 1.5, fontWeight: 700 }}>{text}</div>
  );
};

export const ZoomGraveyard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const f1 = frame - S1_START;
  const f2 = frame - S2_START;
  const f3 = frame - S3_START;
  const f4 = frame - S4_START;

  // Split panel: left fades in first, right slides in after
  const leftOpacity  = interpolate(f3, [10, 40],  [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const rightSlide   = interpolate(f3, [80, 130], [120, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const rightOpacity = interpolate(f3, [80, 130], [0, 1],   { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const arrowScale   = spring({ frame: f3 - 140, fps, config: { damping: 14, stiffness: 180, mass: 0.5 } });
  const arrowOpacity = interpolate(f3, [140, 165], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: DARK, fontFamily: "'Inter', sans-serif", overflow: "hidden" }}>

      {/* SCENE 1 — Hook: the folder */}
      <Sequence from={S1_START} durationInFrames={S1_DUR}>
        <AbsoluteFill style={{ opacity: useFade(f1, S1_DUR), justifyContent: "center", alignItems: "center", padding: 70 }}>
          <div style={{ maxWidth: 940, textAlign: "center" }}>
            <p style={{ ...useReveal(f1, fps, 0), color: WHITE, fontSize: 54, fontWeight: 900, lineHeight: 1.2, margin: 0, marginBottom: 24 }}>
              You have 12 webinar recordings you will never watch again.
            </p>
            <p style={{ ...useReveal(f1, fps, 20), color: MUTED, fontSize: 36, fontWeight: 500, margin: 0, marginBottom: 24 }}>
              Sitting in a folder labeled "Zoom Recordings."
            </p>
            <p style={{ ...useReveal(f1, fps, 38), color: PRIMARY, fontSize: 40, fontWeight: 800, margin: 0 }}>
              Here is what is actually in there.
            </p>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 2 — The math */}
      <Sequence from={S2_START} durationInFrames={S2_DUR}>
        <AbsoluteFill style={{ opacity: useFade(f2, S2_DUR), justifyContent: "center", alignItems: "center", padding: 70 }}>
          <div style={{ maxWidth: 940, textAlign: "center" }}>
            <p style={{ ...useReveal(f2, fps, 0), color: TEXT, fontSize: 34, lineHeight: 1.5, margin: 0, marginBottom: 28 }}>
              Each one-hour recording contains enough material for:
            </p>
            <p style={{ ...useReveal(f2, fps, 18), color: WHITE, fontSize: 36, fontWeight: 700, lineHeight: 1.6, margin: 0, marginBottom: 32 }}>
              10 LinkedIn posts · 1 blog post · 1 email sequence · 1 lead magnet
            </p>
            <p style={{ ...useReveal(f2, fps, 36), color: PRIMARY, fontSize: 52, fontWeight: 900, margin: 0, marginBottom: 16 }}>
              120+ pieces of content.
            </p>
            <p style={{ ...useReveal(f2, fps, 50), color: TEXT, fontSize: 32, margin: 0 }}>
              Gathering dust. Worth $36,000 in opportunity cost.
            </p>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 3 — Before/After split panel */}
      <Sequence from={S3_START} durationInFrames={S3_DUR}>
        <AbsoluteFill style={{ opacity: useFade(f3, S3_DUR), display: "flex", flexDirection: "column" }}>

          {/* Header */}
          <div style={{
            backgroundColor: DARK, padding: "28px 0", textAlign: "center",
            color: WHITE, fontSize: 26, fontWeight: 900, letterSpacing: 2,
            opacity: leftOpacity,
          }}>
            THE ZOOM GRAVEYARD
          </div>

          {/* Split panels */}
          <div style={{ display: "flex", flex: 1 }}>

            {/* LEFT — Dead */}
            <div style={{
              flex: 1, backgroundColor: DIM, padding: "36px 44px",
              display: "flex", flexDirection: "column", justifyContent: "center",
              opacity: leftOpacity,
            }}>
              <div style={{ color: MUTED, fontSize: 18, fontWeight: 700, letterSpacing: 2, marginBottom: 20 }}>
                SITTING UNUSED
              </div>
              <div style={{ color: MUTED, fontSize: 64, fontWeight: 900, marginBottom: 20 }}>📁</div>
              <DeadStat text="12 recordings" frame={f3} fps={fps} startFrame={30} />
              <DeadStat text="540 minutes" frame={f3} fps={fps} startFrame={44} />
              <DeadStat text="0 posts published" frame={f3} fps={fps} startFrame={58} />
              <DeadStat text="0 leads captured" frame={f3} fps={fps} startFrame={72} />
              <DeadStat text="0 emails sent" frame={f3} fps={fps} startFrame={86} />
              <div style={{
                ...useReveal(f3, fps, 100, 25),
                color: MUTED, fontSize: 26, fontWeight: 700, marginTop: 12,
                borderTop: `1px solid ${MUTED}44`, paddingTop: 12,
              }}>
                Sounds like: nobody
              </div>
            </div>

            {/* CENTER arrow */}
            <div style={{
              width: 64, display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              backgroundColor: DARK, zIndex: 10,
              opacity: arrowOpacity,
              transform: `scale(${Math.max(0.01, arrowScale)})`,
            }}>
              <div style={{ width: 2, flex: 1, backgroundColor: `${WHITE}22` }} />
              <div style={{ color: PRIMARY, fontSize: 36, fontWeight: 900, margin: "8px 0" }}>→</div>
              <div style={{ color: TEXT, fontSize: 14, fontWeight: 700, writingMode: "vertical-rl", marginBottom: 8 }}>7 DAYS</div>
              <div style={{ width: 2, flex: 1, backgroundColor: `${WHITE}22` }} />
            </div>

            {/* RIGHT — Alive */}
            <div style={{
              flex: 1, backgroundColor: `${PRIMARY}18`,
              borderLeft: `3px solid ${PRIMARY}`,
              padding: "36px 44px",
              display: "flex", flexDirection: "column", justifyContent: "center",
              opacity: rightOpacity,
              transform: `translateX(${rightSlide}px)`,
            }}>
              <div style={{ color: PRIMARY, fontSize: 18, fontWeight: 700, letterSpacing: 2, marginBottom: 20 }}>
                AFTER EXTRACTION
              </div>
              <div style={{ fontSize: 64, marginBottom: 20 }}>⚡</div>
              <AliveStat text="120+ content pieces" frame={f3} fps={fps} startFrame={100} />
              <AliveStat text="12 months of content" frame={f3} fps={fps} startFrame={114} />
              <AliveStat text="Leads captured 24/7" frame={f3} fps={fps} startFrame={128} />
              <AliveStat text="Email list growing" frame={f3} fps={fps} startFrame={142} />
              <AliveStat text="Google rankings building" frame={f3} fps={fps} startFrame={156} />
              <div style={{
                ...useReveal(f3, fps, 170, 25),
                color: PRIMARY, fontSize: 26, fontWeight: 900, marginTop: 12,
                borderTop: `1px solid ${PRIMARY}44`, paddingTop: 12,
              }}>
                Sounds like: YOU
              </div>
            </div>

          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 4 — Payoff + CTA */}
      <Sequence from={S4_START} durationInFrames={S4_DUR}>
        <AbsoluteFill style={{ opacity: useFade(f4, S4_DUR), justifyContent: "center", alignItems: "center", padding: 70 }}>
          <div style={{ maxWidth: 940, textAlign: "center" }}>
            <p style={{ ...useReveal(f4, fps, 0), color: TEXT, fontSize: 34, lineHeight: 1.4, margin: 0, marginBottom: 24 }}>
              Your recordings contain the one thing AI cannot replicate.
            </p>
            <p style={{ ...useReveal(f4, fps, 16), color: WHITE, fontSize: 40, fontWeight: 800, lineHeight: 1.3, margin: 0, marginBottom: 32 }}>
              Your actual voice explaining real client transformations.
            </p>
            <p style={{ ...useReveal(f4, fps, 32), color: PRIMARY, fontSize: 36, fontWeight: 700, lineHeight: 1.3, margin: 0, marginBottom: 36 }}>
              The coaches winning in 2026 are not creating more content. They are extracting what they already recorded.
            </p>
            <p style={{ ...useReveal(f4, fps, 48), color: WHITE, fontSize: 34, fontWeight: 600, margin: 0, marginBottom: 36 }}>
              How many recordings are in your graveyard?
            </p>
            <div style={{ ...useReveal(f4, fps, 60), display: "inline-block", backgroundColor: PRIMARY, borderRadius: 50, padding: "14px 40px" }}>
              <span style={{ color: DARK, fontSize: 26, fontWeight: 700 }}>ContentRepurposeHub.com</span>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

    </AbsoluteFill>
  );
};
