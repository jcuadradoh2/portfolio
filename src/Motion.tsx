import { useEffect, useRef } from "react";
import { Player } from "@remotion/player";
import { SHOWREEL_CONFIG, Showreel } from "./lab/Showreel";
import { tr, useLang } from "./hooks";

const ROBOT_MP4 =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4";

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

// Cursor-driven video scrubbing via seek-chaining: on each 'seeked' we jump to
// the latest target only if it changed, so we never queue seeks faster than the
// decoder can serve them (the source of the earlier lag). Mobile / reduced-motion
// fall back to normal looped autoplay.
function useVideoScrub(sectionRef: React.RefObject<HTMLElement | null>, videoRef: React.RefObject<HTMLVideoElement | null>) {
  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (window.innerWidth < 1024 || reduced) {
      video.loop = true;
      video.muted = true;
      video.autoplay = true;
      video.play().catch(() => {});
      return;
    }

    let target = 0;
    let lastReq = -1;
    let ready = false;
    let seeking = false;

    const applySeek = () => {
      if (!ready || !video.duration) return;
      if (target === lastReq) { seeking = false; return; }
      lastReq = target;
      seeking = true;
      video.currentTime = target;
    };
    const onSeeked = () => applySeek();
    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
      target = p * (video.duration || 0);
      if (!seeking) applySeek();
    };
    const onReady = () => {
      ready = true;
      video.pause();
      target = (video.duration || 0) * 0.5;
      lastReq = -1;
      applySeek();
    };

    video.addEventListener("seeked", onSeeked);
    section.addEventListener("mousemove", onMove);
    if (video.readyState >= 2) onReady();
    else video.addEventListener("loadeddata", onReady, { once: true });

    return () => {
      video.removeEventListener("seeked", onSeeked);
      section.removeEventListener("mousemove", onMove);
    };
  }, [sectionRef, videoRef]);
}

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
  return (
    <section className="showreel-band">
      <div className="container">
        <p className="eyebrow">{tr(copy.showEyebrow, lang)}</p>
        <h2 className="section-title">{tr(copy.showTitle, lang)}</h2>
        <p className="section-lead">{tr(copy.showLead, lang)}</p>
        <div className="showreel-frame">
          <Player
            component={Showreel}
            durationInFrames={SHOWREEL_CONFIG.durationInFrames}
            fps={SHOWREEL_CONFIG.fps}
            compositionWidth={SHOWREEL_CONFIG.width}
            compositionHeight={SHOWREEL_CONFIG.height}
            style={{ width: "100%" }}
            initialFrame={45}
            controls
            loop
            autoPlay
          />
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
