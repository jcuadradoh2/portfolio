import { lazy, Suspense, useEffect, useRef, useState, type CSSProperties } from "react";
import { Server, Sparkles, Database, Cloud, Zap, LayoutGrid, Boxes, Workflow, ShieldCheck, Target, ArrowRight, ArrowUpRight, Play, BarChart3, Search, GraduationCap, Award, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { principles, projects, skillGroups, timeline, type Principle, type Project } from "./content";
import { AppProviders, Reveal, tr, useCountUp, useLang, useSound, useTheme, useVideoScrub } from "./hooks";
import { t as strings } from "./content";
import { TextReveal } from "./TextReveal";
import "./app.css";

const Motion = lazy(() => import("./Motion"));

const BASE = import.meta.env.BASE_URL;
const GITHUB = "https://github.com/jcuadradoh2";
const LINKEDIN = "https://www.linkedin.com/in/jcuadradoh2";
const latest = projects.find((p) => p.key === "atlas") ?? projects[0];

// Smooth-scroll to an in-page section WITHOUT changing the router hash — a bare
// "#contact" hash would be read by HashRouter as a route and unmount the app.
function scrollToId(e: React.MouseEvent, id: string) {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Per-category accent + icon (warm orange palette) — index-aligned with skillGroups.
const SKILL_STYLE = [
  { c: "#ff5a1f", Icon: Server },
  { c: "#f97316", Icon: Sparkles },
  { c: "#e8590c", Icon: Database },
  { c: "#f59e0b", Icon: Cloud },
  { c: "#ef4444", Icon: Zap },
  { c: "#fb923c", Icon: LayoutGrid },
];

const HOW_STYLE = [
  { c: "#ff5a1f", Icon: Boxes },
  { c: "#f59e0b", Icon: Workflow },
  { c: "#e8590c", Icon: ShieldCheck },
  { c: "#fb923c", Icon: Target },
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
          <a href="#about" data-cuelume-hover="tick" onClick={(e) => scrollToId(e, "about")}>{tr(strings.nav.about, lang)}</a>
          <a href="#work" data-cuelume-hover="tick" onClick={(e) => scrollToId(e, "work")}>{tr(strings.nav.work, lang)}</a>
          <a href="#skills" data-cuelume-hover="tick" onClick={(e) => scrollToId(e, "skills")}>{tr(strings.nav.skills, lang)}</a>
          <a href="#trayectoria" data-cuelume-hover="tick" onClick={(e) => scrollToId(e, "trayectoria")}>{tr(strings.nav.trayectoria, lang)}</a>
          <a href="#contact" data-cuelume-hover="tick" onClick={(e) => scrollToId(e, "contact")}>{tr(strings.nav.contact, lang)}</a>
          <a href="#/lab" className="nav-lab" data-cuelume-hover="sparkle">{tr(strings.nav.lab, lang)} ✦</a>
        </nav>
        <div className="nav-actions">
          <a href="#contact" className="btn primary nav-cta" data-cuelume-press onClick={(e) => scrollToId(e, "contact")}>
            {tr(strings.nav.cta, lang)} <ArrowRight size={16} aria-hidden="true" /></a>
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
        <div className="hero-copy">
          <h1 className="hero-title" key={lang}>
            <TextReveal as="span" per="word" preset="fade-in-blur" speedReveal={1.1} delay={0.12}>
              {tr(strings.hero.titleA, lang)}</TextReveal>{" "}
            <TextReveal as="span" className="hero-accent" per="word" preset="fade-in-blur" speedReveal={1.1} delay={0.5}>
              {tr(strings.hero.titleB, lang)}</TextReveal>
          </h1>
          <motion.p className="hero-lead" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}>{tr(strings.hero.lead, lang)}</motion.p>
          <motion.div className="hero-cta" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}>
            <a className="btn primary" href="#work" data-cuelume-press data-cuelume-release onClick={(e) => scrollToId(e, "work")}>
              {tr(strings.hero.ctaWork, lang)} <ArrowRight size={16} aria-hidden="true" /></a>
            <a className="btn" href={GITHUB} target="_blank" rel="noreferrer" data-cuelume-press data-cuelume-release>{tr(strings.hero.ctaGithub, lang)}</a>
            <a className="hero-watch" href="#motion" onClick={(e) => scrollToId(e, "motion")}>
              <span className="hero-play"><Play size={14} fill="currentColor" aria-hidden="true" /></span>
              <span><b>{tr(strings.hero.watch, lang)}</b><small>{tr(strings.hero.watchSub, lang)}</small></span>
            </a>
          </motion.div>
          <Stats />
          <a className="latest card" href="#work" onClick={(e) => scrollToId(e, "work")}>
            <img src={`${BASE}screenshots/${latest.key}/${latest.shots[0]}`} alt="" loading="lazy" />
            <span className="latest-text">
              <small>{tr(strings.hero.latest, lang)}</small>
              <b>{latest.name}</b>
              <span>{tr(latest.tagline, lang)}</span>
            </span>
            <span className="round-arrow"><ArrowRight size={16} aria-hidden="true" /></span>
          </a>
        </div>
        <HeroVisual sectionRef={sectionRef} />
      </div>
      <div className="scroll-cue" aria-hidden="true"><span>{tr(strings.hero.scroll, lang)}</span><i /></div>
    </section>
  );
}

const SERVICE_ICONS = [Server, Sparkles, BarChart3];
const RIBBON_PATH = "M40 330 a260 92 0 1 0 520 0 a260 92 0 1 0 -520 0";
const RIBBON_REPEAT = 5;

function HeroVisual({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  const { lang } = useLang();
  const videoRef = useRef<HTMLVideoElement>(null);
  useVideoScrub(sectionRef, videoRef);
  const visualRef = useRef<HTMLDivElement>(null);
  const ribbon = tr(strings.hero.ribbon, lang).repeat(RIBBON_REPEAT);
  // Slide the text by exactly one phrase so the loop is seamless; re-measure once webfonts land.
  useEffect(() => {
    const fit = () => visualRef.current?.querySelectorAll<SVGTextElement>(".ribbon text").forEach((t) => {
      t.querySelector("animate")?.setAttribute("to", String(-t.getComputedTextLength() / RIBBON_REPEAT));
    });
    fit();
    document.fonts.ready.then(fit);
  }, [lang]);
  const band = (id: string) => (
    <svg className={`ribbon ribbon-${id}`} viewBox="0 0 600 600" aria-hidden="true">
      <defs>
        <linearGradient id={`rg-${id}`} x1="0" x2="1">
          <stop offset="0" stopColor="#ff9a4d" /><stop offset=".5" stopColor="#ff5a1f" /><stop offset="1" stopColor="#ff8a3d" />
        </linearGradient>
        <path id={`rp-${id}`} d={RIBBON_PATH} />
        <clipPath id={`rc-${id}`}><rect x="-20" y="330" width="600" height="300" /></clipPath>
      </defs>
      <g transform="rotate(-9 300 330)">
        <g clipPath={id === "front" ? `url(#rc-${id})` : undefined}>
          <use href={`#rp-${id}`} fill="none" stroke={`url(#rg-${id})`} strokeWidth="30" />
          <text><textPath href={`#rp-${id}`} dominantBaseline="central">{ribbon}
            <animate attributeName="startOffset" from="0" to="0" dur="14s" repeatCount="indefinite" /></textPath></text>
        </g>
      </g>
    </svg>
  );
  return (
    <div className="hero-visual" ref={visualRef}>
      <div className="hero-stage">
        <div className="hero-halo" aria-hidden="true" />
        {band("back")}
        <video ref={videoRef} className="hero-robot" src={`${BASE}robot.mp4`} poster={`${BASE}robot-poster.webp`} muted playsInline preload="auto" aria-hidden="true" />
        {band("front")}
      </div>
      <ul className="services">
        {strings.hero.services.map((s, i) => {
          const Icon = SERVICE_ICONS[i];
          return (
            <li key={i} className={`service card s${i + 1}`}>
              <span className="service-icon"><Icon size={18} aria-hidden="true" /></span>
              <span><b>{tr(s.title, lang)}</b><small>{tr(s.body, lang)}</small></span>
              <span className="round-arrow"><ArrowRight size={14} aria-hidden="true" /></span>
            </li>
          );
        })}
      </ul>
    </div>
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
      {strings.stats.map((s, i) => <Stat key={i} value={tr(s.value, lang)} label={tr(s.label, lang)} run={run} />)}
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

function HowIWork() {
  const { lang } = useLang();
  return (
    <section id="how">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{tr(strings.how.eyebrow, lang)}</p>
          <h2 className="section-title">{tr(strings.how.title, lang)}</h2>
          <p className="section-lead">{tr(strings.how.lead, lang)}</p>
        </Reveal>
        <Reveal>
          <ul className="skills-list">
            {principles.map((pr: Principle, i) => {
              const { c, Icon } = HOW_STYLE[i % HOW_STYLE.length];
              return (
                <li key={pr.key} className="skill-row card" style={{ "--c": c } as CSSProperties}>
                  <span className="skill-badge"><Icon size={20} strokeWidth={2.2} aria-hidden="true" /></span>
                  <div className="skill-body">
                    <div className="row-title">
                      <h4>{tr(pr.title, lang)}</h4>
                      <span className="row-sub">{tr(pr.subtitle, lang)}</span>
                    </div>
                    <p className="row-text">{tr(pr.body, lang)}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { lang } = useLang();
  const [active, setActive] = useState(0);
  const shot = `${BASE}screenshots/${project.key}/${project.shots[active]}`;
  const extra = project.tags.length - 3;
  return (
    <Reveal delay={(index % 3) * 60}>
      <article className="project card" data-cuelume-hover="chime">
        <div className="project-media">
          <img src={shot} alt={`${project.name} screenshot`} loading="lazy"
            onError={(e) => ((e.target as HTMLImageElement).style.opacity = "0.12")} />
          <span className={`badge${project.featured ? " gold" : ""}`}>
            {project.featured ? tr(strings.work.featured, lang) : tr(strings.work.captures, lang)}
          </span>
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
          <h3>{project.name}</h3>
          <p className="project-tagline" title={tr(project.tagline, lang)}>{tr(project.tagline, lang)}</p>
          <p className="project-desc">{tr(project.description, lang)}</p>
          <div className="project-tags">
            {project.tags.slice(0, 3).map((tag) => <span key={tag} className="tag">{tag}</span>)}
            {extra > 0 && <span className="tag tag-more" title={project.tags.slice(3).join(" · ")}>+{extra}</span>}
          </div>
          <div className="project-foot">
            {project.private ? (
              <span className="project-link project-private">🔒 {lang === "es" ? "Repositorio privado" : "Private repository"}</span>
            ) : (
              <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">
                {tr(strings.work.view, lang)} <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            )}
            {project.doc && (
              <a className="project-link" href={`${BASE}${project.doc.href}`} target="_blank" rel="noreferrer">
                {tr(project.doc.label, lang)} <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Work() {
  const { lang } = useLang();
  const [q, setQ] = useState("");
  const needle = q.trim().toLowerCase();
  const list = projects.filter((p) => [p.name, ...p.tags].some((s) => s.toLowerCase().includes(needle)));
  return (
    <section id="work">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{tr(strings.work.eyebrow, lang)}</p>
          <h2 className="section-title">{tr(strings.work.title, lang)}</h2>
          <p className="section-lead">{tr(strings.work.lead, lang)}</p>
        </Reveal>
        <label className="project-search card">
          <Search size={18} aria-hidden="true" />
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)}
            placeholder={tr(strings.work.search, lang)} aria-label={tr(strings.work.search, lang)} />
        </label>
        <div className="projects">
          {list.map((p, i) => <ProjectCard key={p.key} project={p} index={i} />)}
        </div>
        {!list.length && <p className="project-empty">{tr(strings.work.empty, lang)}</p>}
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
        <Reveal>
          <ul className="skills-list">
            {skillGroups.map((g, i) => {
              const { c, Icon } = SKILL_STYLE[i % SKILL_STYLE.length];
              return (
                <li key={i} className="skill-row card" style={{ "--c": c } as CSSProperties}>
                  <span className="skill-badge"><Icon size={20} strokeWidth={2.2} aria-hidden="true" /></span>
                  <div className="skill-body">
                    <h4>{tr(g.title, lang)}</h4>
                    <div className="skill-chips">
                      {g.items.map((it) => <span className="skill-chip" key={it}>{it}</span>)}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
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

const ABOUT_FACT_ICONS = [GraduationCap, Award, Code2];

function About() {
  const { lang } = useLang();
  const [lead, ...rest] = tr(strings.about.body, lang);
  return (
    <section id="about" className="about">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{tr(strings.about.eyebrow, lang)}</p>
          <h2 className="section-title">{tr(strings.about.heading, lang)}</h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="about-card card">
            <aside className="about-id">
              <Avatar />
              <h3>{tr(strings.about.title, lang)}</h3>
              <p className="about-role">{tr(strings.about.role, lang)}</p>
              <ul className="about-facts">
                {strings.about.facts.map((f, i) => {
                  const Icon = ABOUT_FACT_ICONS[i];
                  return <li key={i}><Icon size={16} aria-hidden="true" />{tr(f, lang)}</li>;
                })}
              </ul>
              <div className="about-social">
                <a className="btn sm" href={GITHUB} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
                <a className="btn sm" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
              </div>
            </aside>
            <div className="about-bio">
              <p className="about-lead">{lead}</p>
              {rest.map((p, i) => <p className="about-body" key={i}>{p}</p>)}
              <a className="btn primary about-cta" href="#contact" onClick={(e) => scrollToId(e, "contact")}>
                {tr(strings.nav.cta, lang)} <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Timeline() {
  const { lang } = useLang();
  return (
    <section id="trayectoria" className="trayectoria">
      <div className="container tray-grid">
        <Reveal>
          <div className="tray-head">
            <p className="eyebrow">{tr(strings.about.timelineTitle, lang)}</p>
            <h2 className="section-title">{tr(strings.about.timelineHeading, lang)}</h2>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="timeline" role="region" aria-labelledby="timeline-title" tabIndex={0}>
            <h4 className="sr-only" id="timeline-title">{tr(strings.about.timelineTitle, lang)}</h4>
            {timeline.map((item, i) => (
              <div className="tl-item" key={i}>
                <span className="tl-dot" />
                <div className="tl-period">{item.period}</div>
                <div className="tl-role">{tr(item.title, lang)}</div>
                <p className="tl-body">{tr(item.body, lang)}</p>
                {item.link && (
                  <a className="btn sm tl-link" href={`${BASE}${item.link.href}`} target="_blank" rel="noreferrer">
                    {tr(item.link.label, lang)} ↗
                  </a>
                )}
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
              <a className="btn" href={LINKEDIN} target="_blank" rel="noreferrer" data-cuelume-press data-cuelume-release>LinkedIn</a>
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
        <About />
        <HowIWork />
        <Work />
        <Suspense fallback={<div style={{ minHeight: 900 }} />}>
          <Motion />
        </Suspense>
        <Skills />
        <Timeline />
        <Contact />
      </main>
    </AppProviders>
  );
}
