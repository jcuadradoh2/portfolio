import { AbsoluteFill, interpolate, Sequence, spring, useCurrentFrame, useVideoConfig } from "remotion";

const PROJECTS = ["AgentForge", "JobRadar EC", "Academic Modules", "Insight Dashboard", "Aurora DS"];

function Background() {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const hue = interpolate(frame, [0, durationInFrames], [220, 300]);
  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 30% 20%, hsl(${hue} 80% 22%), #0a0d18 60%),
                     radial-gradient(circle at 80% 90%, hsl(${hue + 40} 70% 18%), transparent 55%)`,
      }}
    />
  );
}

function Grid() {
  const frame = useCurrentFrame();
  const y = interpolate(frame, [0, 200], [0, 54]);
  return (
    <AbsoluteFill
      style={{
        backgroundImage:
          "linear-gradient(rgba(120,140,220,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(120,140,220,.08) 1px, transparent 1px)",
        backgroundSize: "54px 54px",
        backgroundPosition: `0 ${y}px`,
        maskImage: "radial-gradient(circle at 50% 45%, #000, transparent 78%)",
      }}
    />
  );
}

function Intro() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const rise = spring({ frame, fps, config: { damping: 200 } });
  const y = interpolate(rise, [0, 1], [50, 0]);
  const sub = interpolate(frame, [18, 40], [0, 1], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <div style={{ transform: `translateY(${y}px)`, opacity: rise }}>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 90, color: "#fff", letterSpacing: "-0.03em" }}>
          Jefferson Cuadrado
        </div>
        <div style={{ marginTop: 10, fontSize: 30, color: "#17c8b4", opacity: sub, fontWeight: 600 }}>
          Senior Full-Stack Engineer
        </div>
      </div>
    </AbsoluteFill>
  );
}

function Projects() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, color: "#99a2c2", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 34 }}>
        {(() => {
          const o = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });
          return <span style={{ opacity: o }}>Proyectos</span>;
        })()}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", maxWidth: 900 }}>
        {PROJECTS.map((name, i) => {
          const enter = spring({ frame: frame - 8 - i * 7, fps, config: { damping: 14 } });
          return (
            <div
              key={name}
              style={{
                transform: `translateY(${interpolate(enter, [0, 1], [40, 0])}px) scale(${interpolate(enter, [0, 1], [0.7, 1])})`,
                opacity: enter,
                padding: "16px 30px",
                borderRadius: 16,
                background: "linear-gradient(135deg, rgba(91,140,255,.28), rgba(200,107,255,.22))",
                border: "1px solid rgba(140,160,255,.35)",
                color: "#fff",
                fontSize: 30,
                fontWeight: 600,
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              {name}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
}

function Outro() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame, fps, config: { damping: 200 } });
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <div style={{ opacity: s, transform: `scale(${interpolate(s, [0, 1], [0.9, 1])})` }}>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 64, color: "#fff", fontWeight: 700, letterSpacing: "-0.03em" }}>
          Código + criterio
        </div>
        <div style={{ marginTop: 14, fontSize: 26, color: "#99a2c2" }}>
          github.com/jcuadradoh2
        </div>
      </div>
    </AbsoluteFill>
  );
}

export function Showreel() {
  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      <Background />
      <Grid />
      <Sequence durationInFrames={70}>
        <Intro />
      </Sequence>
      <Sequence from={70} durationInFrames={80}>
        <Projects />
      </Sequence>
      <Sequence from={150} durationInFrames={60}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
}

export const SHOWREEL_CONFIG = { durationInFrames: 210, fps: 30, width: 1280, height: 720 };
