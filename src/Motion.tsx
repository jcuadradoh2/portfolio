import { useEffect, useRef } from "react";
import { Player } from "@remotion/player";
import { SHOWREEL_CONFIG, Showreel } from "./lab/Showreel";
import { tr, useLang } from "./hooks";

const ROBOT_MP4 =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4";

// Cursor-driven video scrubbing: the horizontal cursor position maps to the
// video timeline, so the robot appears to turn its head following the cursor.
// Mobile / reduced-motion falls back to normal looped autoplay.
function RobotScrub() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.innerWidth < 1024;
    if (mobile || reduced) {
      video.loop = true;
      video.autoplay = true;
      video.play().catch(() => {});
      return;
    }

    let target = 0;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
      if (video.duration) target = p * video.duration;
    };
    wrap.addEventListener("mousemove", onMove);

    const loop = () => {
      if (video.duration && Math.abs(video.currentTime - target) > 0.01) {
        video.currentTime = target;
      }
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      video.pause();
      target = (video.duration || 0) * 0.5;
      video.currentTime = target;
      raf = requestAnimationFrame(loop);
    };
    if (video.readyState >= 1) start();
    else video.addEventListener("loadedmetadata", start, { once: true });

    return () => {
      wrap.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrapRef} className="robot-wrap">
      <video ref={videoRef} className="robot-video" src={ROBOT_MP4} muted playsInline preload="auto" />
      <div className="robot-badge">◂ mueve el cursor ▸</div>
    </div>
  );
}

const copy = {
  eyebrow: { es: "Motion & Interacción", en: "Motion & Interaction" },
  title: { es: "Interfaces que responden", en: "Interfaces that respond" },
  lead: {
    es: "Detalles de movimiento que hacen que un producto se sienta vivo — scrubbing de video con el cursor y video generado en la web con Remotion. Más experimentos en el ",
    en: "Motion details that make a product feel alive — cursor-driven video scrubbing and in-browser video with Remotion. More experiments in the ",
  },
  robot: { es: "El robot sigue tu cursor (scrubbing de video)", en: "The robot follows your cursor (video scrubbing)" },
  showreel: { es: "Showreel animado con Remotion", en: "Animated showreel with Remotion" },
};

export default function Motion() {
  const { lang } = useLang();
  return (
    <section id="motion" className="motion-section">
      <div className="container">
        <p className="eyebrow">{tr(copy.eyebrow, lang)}</p>
        <h2 className="section-title">{tr(copy.title, lang)}</h2>
        <p className="section-lead">
          {tr(copy.lead, lang)}<a href="#/lab" className="motion-lablink">Lab ✦</a>.
        </p>
        <div className="motion-grid">
          <figure className="motion-card">
            <RobotScrub />
            <figcaption>{tr(copy.robot, lang)}</figcaption>
          </figure>
          <figure className="motion-card">
            <div className="motion-player">
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
            <figcaption>{tr(copy.showreel, lang)}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
