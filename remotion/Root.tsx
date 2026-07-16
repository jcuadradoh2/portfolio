import { Composition } from "remotion";
import { loadFont } from "@remotion/google-fonts/SpaceGrotesk";
import { Showreel, SHOWREEL_CONFIG } from "../src/lab/Showreel";

loadFont("normal", { weights: ["400", "500", "600", "700"], subsets: ["latin"] });

export const RemotionRoot = () => (
  <Composition
    id="showreel"
    component={Showreel}
    durationInFrames={SHOWREEL_CONFIG.durationInFrames}
    fps={SHOWREEL_CONFIG.fps}
    width={SHOWREEL_CONFIG.width}
    height={SHOWREEL_CONFIG.height}
  />
);
