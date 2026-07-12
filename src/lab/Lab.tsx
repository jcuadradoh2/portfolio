import { Player } from "@remotion/player";
import { SHOWREEL_CONFIG, Showreel } from "./Showreel";
import Lithos from "./Lithos";
import Pulse3D from "./Pulse3D";
import "./lab.css";

export default function Lab() {
  return (
    <div className="lab">
      {/* full-screen cursor-spotlight hero */}
      <Lithos />

      <a href="#/" className="lab-back">← Portafolio</a>

      <header className="lab-head">
        <p className="lab-eyebrow">Frontend Lab</p>
        <h1>Experimentos de interfaz</h1>
        <p className="lab-lead">
          Efectos avanzados construidos a mano: un hero con foco que sigue el cursor y revela una segunda imagen,
          video generado en la web con Remotion, y una esfera 3D reactiva al mouse. Todo en React + TypeScript.
        </p>
      </header>

      <section className="lab-section">
        <div className="lab-tag">01 · Video en la web · Remotion</div>
        <h2>Showreel animado</h2>
        <p className="lab-desc">
          Composición hecha con <a href="https://www.remotion.dev/" target="_blank" rel="noreferrer">Remotion</a> y
          embebida con <code>@remotion/player</code> — animación declarativa por frames (springs, interpolación),
          reproducible y exportable a MP4.
        </p>
        <div className="player-frame">
          <Player
            component={Showreel}
            durationInFrames={SHOWREEL_CONFIG.durationInFrames}
            fps={SHOWREEL_CONFIG.fps}
            compositionWidth={SHOWREEL_CONFIG.width}
            compositionHeight={SHOWREEL_CONFIG.height}
            style={{ width: "100%", borderRadius: 16 }}
            controls
            loop
            autoPlay
          />
        </div>
      </section>

      <section className="lab-section">
        <div className="lab-tag">02 · Interacción · Pulse 3D</div>
        <h2>Esfera reactiva</h2>
        <p className="lab-desc">
          Profundidad por capas, núcleo pulsante y anillos en órbita que se inclinan siguiendo el cursor —
          transformaciones 3D en CSS con <code>requestAnimationFrame</code>, sin librerías.
        </p>
        <Pulse3D />
      </section>

      <footer className="lab-foot">
        <a href="#/">← Volver al portafolio</a>
      </footer>
    </div>
  );
}
