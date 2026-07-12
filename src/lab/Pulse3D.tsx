import { useEffect, useRef, useState } from "react";

// Interactive "Pulse 3D" — a mouse-reactive orb with layered depth, a pulsing
// core and orbiting rings (a live, deterministic take on the motionsites Pulse 3D
// effect). Pure CSS 3D transforms + rAF; respects reduced-motion.
export default function Pulse3D() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      setTilt({ x: py * -26, y: px * 26 });
    };
    const onLeave = () => setTilt({ x: 0, y: 0 });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={wrapRef} className="pulse-stage">
      <div className="pulse-scene" style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}>
        <div className="pulse-glow" />
        <div className="pulse-core" />
        <div className="pulse-ring r1" />
        <div className="pulse-ring r2" />
        <div className="pulse-ring r3" />
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className="pulse-dot" style={{ ["--i" as string]: i } as React.CSSProperties} />
        ))}
      </div>
      <p className="pulse-hint">Mueve el cursor sobre la esfera</p>
    </div>
  );
}
