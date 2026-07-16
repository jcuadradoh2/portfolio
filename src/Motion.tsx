import { useEffect, useRef } from "react";
import { Player, type PlayerRef } from "@remotion/player";
import { SHOWREEL_CONFIG, Showreel } from "./lab/Showreel";
import { tr, useLang } from "./hooks";

// Bundled same-origin, re-encoded to 720p all-keyframes (every frame an I-frame).
// The earlier lag was a 4K clip with sparse keyframes: each cursor-driven seek had
// to decode a whole GOP. All-intra + 720p makes every seek a single-frame decode,
// so scrubbing tracks the cursor fluidly. Source: tools re-encode of the original.
const ROBOT_MP4 = "/robot.mp4";

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
// decoder can serve them. With the all-intra 720p clip each seek is a single-frame
// decode, so this stays fluid. Mobile / reduced-motion fall back to looped autoplay.
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
    let raf = 0;
    let rafPending = false;

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
      if (rafPending) return;
      rafPending = true;
      raf = requestAnimationFrame(() => { rafPending = false; if (!seeking) applySeek(); });
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
      cancelAnimationFrame(raf);
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
  const playerRef = useRef<PlayerRef>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = frameRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const set = (visible: boolean) => {
      const player = playerRef.current;
      if (!player) return false;
      try { if (visible) player.play(); else player.pause(); } catch { return false; }
      return true;
    };
    const io = new IntersectionObserver(([e]) => set(e.intersectionRatio >= 0.35), { threshold: [0, 0.35] });
    io.observe(el);
    let tries = 0;
    const poll = setInterval(() => {
      const r = el.getBoundingClientRect();
      if (set(r.top < innerHeight && r.bottom > 0) || ++tries > 30) clearInterval(poll);
    }, 100);
    return () => { io.disconnect(); clearInterval(poll); };
  }, []);

  return (
    <section className="showreel-band">
      <div className="container">
        <p className="eyebrow">{tr(copy.showEyebrow, lang)}</p>
        <h2 className="section-title">{tr(copy.showTitle, lang)}</h2>
        <p className="section-lead">{tr(copy.showLead, lang)}</p>
        <div className="showreel-frame" ref={frameRef}>
          <Player
            ref={playerRef}
            component={Showreel}
            durationInFrames={SHOWREEL_CONFIG.durationInFrames}
            fps={SHOWREEL_CONFIG.fps}
            compositionWidth={SHOWREEL_CONFIG.width}
            compositionHeight={SHOWREEL_CONFIG.height}
            style={{ width: "100%" }}
            initialFrame={45}
            loop
            clickToPlay={false}
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
