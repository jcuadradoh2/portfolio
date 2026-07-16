import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition, ensureBrowser } from "@remotion/renderer";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const entry = join(root, "remotion", "index.ts");
const out = join(root, "public", "showreel.mp4");

await ensureBrowser();
const serveUrl = await bundle({ entryPoint: entry });
const composition = await selectComposition({ serveUrl, id: "showreel" });
await renderMedia({
  serveUrl,
  composition,
  codec: "h264",
  outputLocation: out,
  crf: 20,
  x264Preset: "slow",
  muted: true,
  chromiumOptions: { gl: "angle" },
});
console.log("rendered ->", out);
