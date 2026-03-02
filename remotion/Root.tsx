import { Composition } from "remotion";
import { QuoteCard } from "./Composition";
import { ContentMap } from "./ContentMap";

// ContentRepurposeHub — Remotion Root
// All video compositions are registered here.
// Run: npx remotion studio (preview)
// Render: npx remotion render <CompositionId> output.mp4

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* 1:1 square format — LinkedIn / Instagram */}
      <Composition
        id="QuoteCard"
        component={QuoteCard}
        durationInFrames={90}
        fps={30}
        width={1080}
        height={1080}
        defaultProps={{
          quote:
            "Your webinar recording contains 14 pieces of content. It's sitting in a Zoom folder.",
          author: "ContentRepurposeHub.com",
          primaryColor: "#00C4A0",
        }}
      />

      {/* 9:16 vertical format — LinkedIn video / Reels / Shorts */}
      <Composition
        id="QuoteCardVertical"
        component={QuoteCard}
        durationInFrames={90}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          quote:
            "Your webinar recording contains 14 pieces of content. It's sitting in a Zoom folder.",
          author: "ContentRepurposeHub.com",
          primaryColor: "#00C4A0",
        }}
      />
      {/* Post 1 — The Content Map (LinkedIn square, 25s) */}
      <Composition
        id="ContentMap"
        component={ContentMap}
        durationInFrames={750}
        fps={30}
        width={1080}
        height={1080}
      />
    </>
  );
};
