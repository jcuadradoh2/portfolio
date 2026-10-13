import { useEffect, useRef } from "react";
import { tr, useLang } from "./hooks";

const SHOWREEL_MP4 = "/showreel.mp4";

const copy = {
  showEyebrow: { es: "Video en la web · Remotion", en: "In-browser video · Remotion" },
  showTitle: { es: "Showreel animado", en: "Animated showreel" },
  showLead: {
    es: "Composición hecha con Remotion y embebida con @remotion/player — animación declarativa por frames, reproducible y exportable a MP4.",
    en: "A composition built with Remotion and embedded via @remotion/player — declarative frame-based animation, replayable and exportable to MP4.",
  },
};

function ShowreelBand() {
  const { lang } = useLang();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([e]) => (e.intersectionRatio >= 0.3 ? v.play().catch(() => {}) : v.pause()),
      { threshold: [0, 0.3] },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <section id="motion" className="showreel-band">
      <div className="container">
        <p className="eyebrow">{tr(copy.showEyebrow, lang)}</p>
        <h2 className="section-title">{tr(copy.showTitle, lang)}</h2>
        <p className="section-lead">{tr(copy.showLead, lang)}</p>
        <div className="showreel-frame">
          <video ref={videoRef} src={SHOWREEL_MP4} muted loop playsInline preload="metadata"
            aria-hidden="true" style={{ width: "100%", aspectRatio: "16 / 9" }} />
        </div>
      </div>
    </section>
  );
}

export default function Motion() {
  return (
    <>
      <ShowreelBand />
    </>
  );
}
