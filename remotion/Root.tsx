import { Composition } from "remotion";
import { QuoteCard } from "./Composition";
import { ContentMap } from "./ContentMap";
import { Flywheel } from "./Flywheel";
import { DIYvsDFY } from "./DIYvsDFY";
import { Timeline } from "./Timeline";
import { ZoomGraveyard } from "./ZoomGraveyard";

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
      {/* Post 2 — The Webinar Content Flywheel (LinkedIn square, 30.7s) */}
      <Composition
        id="Flywheel"
        component={Flywheel}
        durationInFrames={920}
        fps={30}
        width={1080}
        height={1080}
      />
      {/* Post 3 — DIY vs Done-For-You (LinkedIn square, 27.7s) */}
      <Composition
        id="DIYvsDFY"
        component={DIYvsDFY}
        durationInFrames={830}
        fps={30}
        width={1080}
        height={1080}
      />
      {/* Post 4 — The 7-Day Timeline (LinkedIn square, 30s) */}
      <Composition
        id="Timeline"
        component={Timeline}
        durationInFrames={910}
        fps={30}
        width={1080}
        height={1080}
      />
      {/* Post 5 — The Zoom Graveyard (LinkedIn square, 27s) */}
      <Composition
        id="ZoomGraveyard"
        component={ZoomGraveyard}
        durationInFrames={810}
        fps={30}
        width={1080}
        height={1080}
      />
    </>
  );
};
