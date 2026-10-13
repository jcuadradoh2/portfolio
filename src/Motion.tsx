import { useEffect, useRef } from "react";
import { tr, useLang, useVideoScrub } from "./hooks";

// Bundled same-origin, re-encoded to 720p all-keyframes (every frame an I-frame).
// The earlier lag was a 4K clip with sparse keyframes: each cursor-driven seek had
// to decode a whole GOP. All-intra + 720p makes every seek a single-frame decode,
// so scrubbing tracks the cursor fluidly. Source: tools re-encode of the original.
const ROBOT_MP4 = "/robot.mp4";
const SHOWREEL_MP4 = "/showreel.mp4";

const copy = {
  eyebrow: { es: "Motion & Interacción", en: "Motion & Interaction" },
  title: { es: "Interfaces que responden", en: "Interfaces that respond" },
  lead: {
    es: "Muevo el cursor de izquierda a derecha y el robot te sigue: el video se rebobina en tiempo real según la posición del mouse. Un detalle de movimiento que hace que un producto se sienta vivo.",
    en: "Move the cursor left and right and the robot follows you: the video scrubs in real time based on the pointer position. A motion detail that makes a product feel alive.",
  },
  hint: { es: "◂ mueve el cursor ▸", en: "◂ move your cursor ▸" },
  labcta: { es: "Más experimentos en el Lab", en: "More experiments in the Lab" },
  showEyebrow: { es: "Video en la web · Remotion", en: "In-browser video · Remotion" },
  showTitle: { es: "Showreel animado", en: "Animated showreel" },
  showLead: {
    es: "Composición hecha con Remotion y embebida con @remotion/player — animación declarativa por frames, reproducible y exportable a MP4.",
    en: "A composition built with Remotion and embedded via @remotion/player — declarative frame-based animation, replayable and exportable to MP4.",
  },
};

function RobotBand() {
  const { lang } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  useVideoScrub(sectionRef, videoRef);

  return (
    <section id="motion" className="robot-band" ref={sectionRef}>
      <video ref={videoRef} className="robot-bg" src={ROBOT_MP4} muted playsInline preload="auto" aria-hidden="true" />
      <div className="robot-scrim" aria-hidden="true" />
      <div className="container robot-content">
        <p className="eyebrow">{tr(copy.eyebrow, lang)}</p>
        <h2 className="section-title">{tr(copy.title, lang)}</h2>
        <p className="robot-lead">{tr(copy.lead, lang)}</p>
        <div className="robot-actions">
          <span className="robot-hint">{tr(copy.hint, lang)}</span>
          <a href="#/lab" className="robot-lab">{tr(copy.labcta, lang)} ✦</a>
        </div>
      </div>
    </section>
  );
}

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
    <section className="showreel-band">
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
      <RobotBand />
      <ShowreelBand />
    </>
  );
}
