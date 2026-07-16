import { lazy, Suspense, useEffect, useRef, useState, type CSSProperties } from "react";
import { Server, Sparkles, Database, Cloud, Zap, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";
import { projects, skillGroups, timeline, type Project } from "./content";
import { AppProviders, Reveal, tr, useCountUp, useLang, useSound, useTheme } from "./hooks";
import { t as strings } from "./content";
import { TextReveal } from "./TextReveal";
import "./app.css";

const Motion = lazy(() => import("./Motion"));

const BASE = import.meta.env.BASE_URL;
const GITHUB = "https://github.com/jcuadradoh2";

// Smooth-scroll to an in-page section WITHOUT changing the router hash — a bare
// "#contact" hash would be read by HashRouter as a route and unmount the app.
function scrollToId(e: React.MouseEvent, id: string) {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Per-category accent + icon (squoosh-style vivid palette) — index-aligned with skillGroups.
const SKILL_STYLE = [
  { c: "#4361ee", Icon: Server },
  { c: "#b5179e", Icon: Sparkles },
  { c: "#06b6d4", Icon: Database },
  { c: "#f59e0b", Icon: Cloud },
  { c: "#f72585", Icon: Zap },
  { c: "#10b981", Icon: LayoutGrid },
];

function AuroraBg() {
  return (
    <div className="aurora" aria-hidden="true">
      <span className="blob b1" />
      <span className="blob b2" />
      <span className="blob b3" />
      <div className="grid-overlay" />
    </div>
  );
}

function Nav() {
  const [theme, toggleTheme] = useTheme();
  const { lang, setLang } = useLang();
  const [soundOn, toggleSound] = useSound();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`nav${scrolled ? " solid" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand" data-cuelume-hover="tick" onClick={(e) => scrollToId(e, "top")}>JC<span>.</span></a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#work" data-cuelume-hover="tick" onClick={(e) => scrollToId(e, "work")}>{tr(strings.nav.work, lang)}</a>
          <a href="#skills" data-cuelume-hover="tick" onClick={(e) => scrollToId(e, "skills")}>{tr(strings.nav.skills, lang)}</a>
          <a href="#about" data-cuelume-hover="tick" onClick={(e) => scrollToId(e, "about")}>{tr(strings.nav.about, lang)}</a>
          <a href="#contact" data-cuelume-hover="tick" onClick={(e) => scrollToId(e, "contact")}>{tr(strings.nav.contact, lang)}</a>
          <a href="#/lab" className="nav-lab" data-cuelume-hover="sparkle">{tr(strings.nav.lab, lang)} ✦</a>
        </nav>
        <div className="nav-actions">
          <button className={`pill${soundOn ? " on" : ""}`} onClick={toggleSound}
            aria-label={lang === "es" ? "Alternar sonido" : "Toggle sound"} aria-pressed={soundOn}
            title={lang === "es" ? "Sonidos de interacción (cuelume)" : "Interaction sounds (cuelume)"}>
            {soundOn ? "🔊" : "🔇"}</button>
          <button className="pill" onClick={() => setLang(lang === "es" ? "en" : "es")}
            aria-label="Toggle language" data-cuelume-toggle>{lang === "es" ? "EN" : "ES"}</button>
          <button className="pill" onClick={toggleTheme} aria-label="Toggle theme" data-cuelume-toggle>
            {theme === "dark" ? "☀" : "☾"}</button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { lang } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const spot = spotRef.current;
    if (!section || !spot) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const target = { x: -999, y: -999 };
    const cur = { x: -999, y: -999 };
    let active = false;
    let raf = 0;
    let running = false;
    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      target.x = e.clientX - r.left;
      target.y = e.clientY - r.top;
      active = true;
    };
    const onLeave = () => { active = false; };
    const loop = () => {
      cur.x += (target.x - cur.x) * 0.14;
      cur.y += (target.y - cur.y) * 0.14;
      spot.style.setProperty("--mx", `${cur.x}px`);
      spot.style.setProperty("--my", `${cur.y}px`);
      spot.style.opacity = active ? "1" : "0";
      raf = requestAnimationFrame(loop);
    };
    const start = () => { if (!running) { running = true; raf = requestAnimationFrame(loop); } };
    const stop = () => { running = false; cancelAnimationFrame(raf); };
    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), { threshold: 0 });
    io.observe(section);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" className="hero" ref={sectionRef}>
      <AuroraBg />
      <div className="hero-spotlight" ref={spotRef} aria-hidden="true" />
      <div className="container hero-inner">
        <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>{tr(strings.hero.role, lang)}</motion.p>
        <TextReveal key={lang} as="h1" className="hero-title" per="word" preset="fade-in-blur"
          speedReveal={1.1} delay={0.12}>{tr(strings.hero.title, lang)}</TextReveal>
        <motion.p className="hero-lead" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}>{tr(strings.hero.lead, lang)}</motion.p>
        <motion.div className="hero-cta" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}>
          <a className="btn primary" href="#work" data-cuelume-press data-cuelume-release>{tr(strings.hero.ctaWork, lang)} →</a>
          <a className="btn" href={GITHUB} target="_blank" rel="noreferrer" data-cuelume-press data-cuelume-release>{tr(strings.hero.ctaGithub, lang)}</a>
        </motion.div>
        <Stats />
      </div>
    </section>
  );
}

function Stats() {
  const { lang } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setRun(true), { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div className="stats" ref={ref}>
      {strings.stats.map((s, i) => <Stat key={i} value={s.value} label={tr(s.label, lang)} run={run} />)}
    </div>
  );
}

function Stat({ value, label, run }: { value: string; label: string; run: boolean }) {
  const display = useCountUp(value, run);
  return (
    <div className="stat">
      <div className="stat-value">{display}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { lang } = useLang();
  const [active, setActive] = useState(0);
  const shot = `${BASE}screenshots/${project.key}/${project.shots[active]}`;
  return (
    <Reveal delay={index * 60}>
      <article className={`project card${project.featured ? " featured" : ""}`} data-cuelume-hover="chime">
        <div className="project-media">
          <img src={shot} alt={`${project.name} screenshot`} loading="lazy"
            onError={(e) => ((e.target as HTMLImageElement).style.opacity = "0.12")} />
          {project.shots.length > 1 && (
            <div className="dots">
              {project.shots.map((_, i) => (
                <button key={i} className={i === active ? "on" : ""} onClick={() => setActive(i)}
                  aria-label={`Screenshot ${i + 1}`} />
              ))}
            </div>
          )}
        </div>
        <div className="project-body">
          <div className="project-head">
            <div>
              <h3>{project.name}</h3>
              <p className="project-tagline">{tr(project.tagline, lang)}</p>
            </div>
            <span className={`badge${project.featured ? " gold" : ""}`}>
              {project.featured ? tr(strings.work.featured, lang) : tr(strings.work.captures, lang)}
            </span>
          </div>
          <p className="project-desc">{tr(project.description, lang)}</p>
          <div className="project-tags">
            {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
          </div>
          {project.private ? (
            <span className="project-link project-private">🔒 {lang === "es" ? "Repositorio privado" : "Private repository"}</span>
          ) : (
            <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">
              {tr(strings.work.view, lang)} ↗
            </a>
          )}
        </div>
      </article>
    </Reveal>
  );
}

function Work() {
  const { lang } = useLang();
  return (
    <section id="work">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{tr(strings.work.eyebrow, lang)}</p>
          <h2 className="section-title">{tr(strings.work.title, lang)}</h2>
          <p className="section-lead">{tr(strings.work.lead, lang)}</p>
        </Reveal>
        <div className="projects">
          {projects.map((p, i) => <ProjectCard key={p.key} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const { lang } = useLang();
  return (
    <section id="skills">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{tr(strings.skills.eyebrow, lang)}</p>
          <h2 className="section-title">{tr(strings.skills.title, lang)}</h2>
          <p className="section-lead">{tr(strings.skills.lead, lang)}</p>
        </Reveal>
        <div className="skills">
          {skillGroups.map((g, i) => {
            const { c, Icon } = SKILL_STYLE[i % SKILL_STYLE.length];
            return (
              <Reveal key={i} delay={i * 50}>
                <div className="skill-card card" style={{ "--c": c } as CSSProperties}>
                  <div className="skill-head">
                    <span className="skill-badge"><Icon size={18} strokeWidth={2.2} aria-hidden="true" /></span>
                    <h4>{tr(g.title, lang)}</h4>
                  </div>
                  <div className="skill-chips">
                    {g.items.map((it) => <span className="skill-chip" key={it}>{it}</span>)}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Avatar() {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div className="about-photo about-photo--fallback" aria-hidden="true">JC</div>;
  }
  return (
    <img
      className="about-photo"
      src={`${BASE}jefferson.webp`}
      alt="Jefferson Cuadrado"
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
}

function About() {
  const { lang } = useLang();
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <Reveal>
          <div>
            <div className="about-head">
              <Avatar />
              <div>
                <p className="eyebrow">{tr(strings.about.eyebrow, lang)}</p>
                <h2 className="section-title" style={{ marginBottom: 0 }}>{tr(strings.about.title, lang)}</h2>
                <p className="about-role">{tr(strings.about.role, lang)}</p>
              </div>
            </div>
            <p className="about-body">{tr(strings.about.body, lang)}</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="timeline">
            <h4 className="timeline-title">{tr(strings.about.timelineTitle, lang)}</h4>
            {timeline.map((item, i) => (
              <div className="tl-item" key={i}>
                <span className="tl-dot" />
                <div className="tl-period">{item.period}</div>
                <div className="tl-role">{tr(item.title, lang)}</div>
                <p className="tl-body">{tr(item.body, lang)}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const { lang } = useLang();
  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal>
          <div className="contact-card card">
            <p className="eyebrow">{tr(strings.contact.eyebrow, lang)}</p>
            <h2 className="section-title">{tr(strings.contact.title, lang)}</h2>
            <p className="section-lead">{tr(strings.contact.lead, lang)}</p>
            <div className="contact-actions">
              <a className="btn primary" href="mailto:jcuadradoh2@unemi.edu.ec" data-cuelume-press data-cuelume-release>{tr(strings.contact.email, lang)} →</a>
              <a className="btn" href={GITHUB} target="_blank" rel="noreferrer" data-cuelume-press data-cuelume-release>GitHub</a>
              <a className="btn" href="https://www.linkedin.com/in/jcuadradoh2" target="_blank" rel="noreferrer" data-cuelume-press data-cuelume-release>LinkedIn</a>
            </div>
          </div>
        </Reveal>
      </div>
      <footer className="footer">
        <div className="container">{tr(strings.footer, lang)} · © 2026</div>
      </footer>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    const id = window.location.hash.replace(/^#\/?/, "");
    if (id && id !== "lab") {
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 120);
    }
  }, []);
  return (
    <AppProviders>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Suspense fallback={<div style={{ minHeight: 900 }} />}>
          <Motion />
        </Suspense>
        <Skills />
        <About />
        <Contact />
      </main>
    </AppProviders>
  );
}
