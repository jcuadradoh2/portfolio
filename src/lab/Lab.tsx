import { useEffect, type CSSProperties } from "react";
import { Player } from "@remotion/player";
import { ArrowLeft, ArrowRight, ArrowDown, Clapperboard, MousePointer2, Orbit } from "lucide-react";
import { useTheme } from "../hooks";
import { SHOWREEL_CONFIG, Showreel } from "./Showreel";
import Lithos from "./Lithos";
import Pulse3D from "./Pulse3D";
import "./lab.css";

const EXPERIMENTS = [
  {
    id: "lab-lithos", Icon: MousePointer2, kind: "Interacción · Máscaras CSS", title: "Hero con foco revelador",
    desc: "Un spotlight que sigue al cursor con inercia y revela una segunda imagen debajo de la primera. La máscara es un radial-gradient alimentado por variables CSS: sin canvas y sin re-renders de React por frame.",
    tags: ["React", "CSS mask", "requestAnimationFrame", "Tailwind"],
  },
  {
    id: "lab-showreel", Icon: Clapperboard, kind: "Video en la web · Remotion", title: "Showreel animado",
    desc: "Composición declarativa por frames con springs e interpolación, embebida con @remotion/player. El mismo código se reproduce en el navegador y se exporta a MP4.",
    tags: ["Remotion", "@remotion/player", "Springs", "MP4"],
  },
  {
    id: "lab-pulse", Icon: Orbit, kind: "3D en CSS", title: "Esfera reactiva",
    desc: "Profundidad por capas, núcleo pulsante y anillos en órbita que se inclinan siguiendo el cursor. Transformaciones 3D en CSS, sin librerías de 3D.",
    tags: ["CSS 3D", "Transforms", "Reduced motion"],
  },
];

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

function Demo({ id }: { id: string }) {
  if (id === "lab-lithos") return <Lithos />;
  if (id === "lab-pulse") return <Pulse3D />;
  return (
    <Player
      component={Showreel}
      durationInFrames={SHOWREEL_CONFIG.durationInFrames}
      fps={SHOWREEL_CONFIG.fps}
      compositionWidth={SHOWREEL_CONFIG.width}
      compositionHeight={SHOWREEL_CONFIG.height}
      style={{ width: "100%", aspectRatio: `${SHOWREEL_CONFIG.width} / ${SHOWREEL_CONFIG.height}`, display: "block" }}
      controls
      loop
      autoPlay
    />
  );
}

export default function Lab() {
  const [theme, toggleTheme] = useTheme();
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="lab">
      <header className="nav solid">
        <div className="container nav-inner">
          <a href="#/" className="brand">JC<span>.</span></a>
          <nav className="nav-links" aria-label="Experimentos">
            {EXPERIMENTS.map((e) => <button key={e.id} type="button" onClick={() => go(e.id)}>{e.title}</button>)}
          </nav>
          <div className="nav-actions">
            <a href="#/" className="btn"><ArrowLeft size={16} aria-hidden="true" />Portafolio</a>
            <button className="pill" onClick={toggleTheme} aria-label="Cambiar tema">{theme === "dark" ? "☀" : "☾"}</button>
          </div>
        </div>
      </header>

      <main>
        <section className="lab-head">
          <div className="container">
            <p className="eyebrow">Frontend Lab ✦</p>
            <h1 className="section-title">Experimentos de interfaz</h1>
            <p className="section-lead">
              Efectos construidos a mano en React + TypeScript para explorar interacción, video y 3D en la web.
              Cada uno es una pieza independiente que se puede llevar a un producto real.
            </p>
            <ol className="lab-index">
              {EXPERIMENTS.map((e, i) => (
                <li key={e.id}>
                  <button type="button" className="lab-index-item card" onClick={() => go(e.id)}>
                    <span className="lab-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="skill-badge" style={{ "--c": "var(--brand)" } as CSSProperties}><e.Icon size={20} aria-hidden="true" /></span>
                    <span className="lab-index-text">
                      <small>{e.kind}</small>
                      <strong>{e.title}</strong>
                    </span>
                    <ArrowDown size={18} className="lab-index-arrow" aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {EXPERIMENTS.map((e, i) => (
          <section key={e.id} id={e.id} className="lab-exp">
            <div className="container">
              <div className="lab-exp-head">
                <span className="lab-num lg">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="eyebrow">{e.kind}</p>
                  <h2>{e.title}</h2>
                </div>
                <div>
                  <p className="lab-desc">{e.desc}</p>
                  <div className="lab-tags">{e.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                </div>
              </div>
              <div className={`lab-demo card${e.id === "lab-pulse" ? "" : " bleed"}`}>
                <Demo id={e.id} />
              </div>
            </div>
          </section>
        ))}

        <section className="lab-cta">
          <div className="container">
            <div className="cta-band card">
              <div>
                <p className="cta-eyebrow">¿Algo así en tu producto?</p>
                <h2 className="cta-title">Llevo estas ideas a interfaces reales, rápidas y accesibles.</h2>
              </div>
              <div className="lab-cta-actions">
                <a href="#/contact" className="btn primary">Hablemos <ArrowRight size={16} aria-hidden="true" /></a>
                <a href="#/proyectos" className="btn">Ver proyectos</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
