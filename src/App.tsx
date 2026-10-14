import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Server, Sparkles, Database, Cloud, Zap, LayoutGrid, Boxes, Workflow, ShieldCheck, Target, ArrowRight, ArrowUpRight, Play, BarChart3, Search, Plus, ArrowLeft, Mail, X, GraduationCap, Award, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { principles, projects, skillGroups, timeline, type Principle, type Project } from "./content";
import { AppProviders, Reveal, tr, useCountUp, useLang, useSound, useTheme, useVideoScrub } from "./hooks";
import { t as strings } from "./content";
import { useLocation } from "react-router-dom";
import { TextReveal } from "./TextReveal";
import "./app.css";


const BASE = import.meta.env.BASE_URL;
const GITHUB = "https://github.com/jcuadradoh2";
const LINKEDIN = "https://www.linkedin.com/in/jcuadradoh2";
const WHATSAPP = "https://wa.me/593984923400";

const BRAND_PATHS = {
  github: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  linkedin: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  whatsapp: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
};

function Brand({ name }: { name: keyof typeof BRAND_PATHS }) {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={BRAND_PATHS[name]} /></svg>;
}
const latest = projects.find((p) => p.key === "atlas") ?? projects[0];
const HOME_PROJECTS = ["atlas", "agentforge", "ocr"].map((k) => projects.find((p) => p.key === k)!);

// Smooth-scroll to an in-page section WITHOUT changing the router hash — a bare
// "#contact" hash would be read by HashRouter as a route and unmount the app.
function scrollToId(e: React.MouseEvent, id: string) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  else window.location.hash = `#/${id}`;
}

// Per-category accent + icon (warm orange palette) — index-aligned with skillGroups.
const SKILL_STYLE = [
  { c: "#ff5a1f", Icon: Server },
  { c: "#ea580c", Icon: Code2 },
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
            <a className="hero-watch" href="#/lab">
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

const fold = (s: string) => s.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();

function Work({ all = false }: { all?: boolean }) {
  const { lang } = useLang();
  const [q, setQ] = useState("");
  const needle = fold(q.trim());
  const list = !all ? HOME_PROJECTS : projects.filter((p) => [p.name, ...p.tags, ...(p.keywords ?? [])].some((s) => fold(s).includes(needle)));
  return (
    <section id={all ? "projects" : "work"} className={all ? "page-top" : undefined}>
      <div className="container">
        {all ? (
          <Reveal>
            <a className="back-link" href="#/work"><ArrowLeft size={16} aria-hidden="true" />{tr(strings.work.back, lang)}</a>
            <p className="eyebrow">{tr(strings.nav.work, lang)}</p>
            <h1 className="section-title">{tr(strings.work.allTitle, lang)}</h1>
            <p className="section-lead">{tr(strings.work.allLead, lang)}</p>
          </Reveal>
        ) : (
          <Reveal>
            <p className="eyebrow">{tr(strings.work.eyebrow, lang)}</p>
            <h2 className="section-title">{tr(strings.work.title, lang)}</h2>
            <p className="section-lead">{tr(strings.work.lead, lang)}</p>
          </Reveal>
        )}
        {all && (
          <label className="project-search card">
            <Search size={18} aria-hidden="true" />
            <input type="search" value={q} onChange={(e) => setQ(e.target.value)}
              placeholder={tr(strings.work.search, lang)} aria-label={tr(strings.work.search, lang)} />
          </label>
        )}
        <div className="projects">
          {list.map((p, i) => <ProjectCard key={p.key} project={p} index={i} />)}
        </div>
        {!list.length && <p className="project-empty">{tr(strings.work.empty, lang)}</p>}
        {!all && (
          <div className="work-more">
            <a className="btn" href="#/proyectos" data-cuelume-press>
              {tr(strings.work.all, lang)} ({projects.length}) <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
        )}
      </div>
    </section>
  );
}

const SKILLS = skillGroups.map((g, i) => ({ ...g, ...SKILL_STYLE[i % SKILL_STYLE.length], chips: g.items.flatMap((it) => it.split(" · ")) }));

function Skills() {
  const { lang } = useLang();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState(-1);
  const needle = fold(q.trim());
  const shown = SKILLS.map((g, i) => {
    if (cat >= 0 && cat !== i) return null;
    const chips = !needle || fold(tr(g.title, lang)).includes(needle) ? g.chips : g.chips.filter((s) => fold(s).includes(needle));
    return chips.length ? { ...g, i, chips } : null;
  }).filter((g) => g !== null);
  const n = new Set(shown.flatMap((g) => g.chips)).size;
  return (
    <section id="skills">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{tr(strings.skills.eyebrow, lang)}</p>
          <h2 className="section-title">{tr(strings.skills.title, lang)}</h2>
          <p className="section-lead">{tr(strings.skills.lead, lang)}</p>
        </Reveal>
        <Reveal>
          <div className="skills-bar">
            <label className="project-search card">
              <Search size={18} aria-hidden="true" />
              <input type="search" value={q} onChange={(e) => setQ(e.target.value)}
                placeholder={tr(strings.skills.search, lang)} aria-label={tr(strings.skills.search, lang)} />
              {q && <button type="button" className="search-clear" onClick={() => setQ("")} aria-label={tr(strings.skills.clear, lang)}><X size={16} /></button>}
            </label>
            <p className="skills-count" aria-live="polite"><b>{n}</b> {tr(n === 1 ? strings.skills.count1 : strings.skills.count, lang)}</p>
          </div>
          <div className="skills-tabs" role="group" aria-label={tr(strings.skills.filter, lang)}>
            <button type="button" className={cat < 0 ? "on" : undefined} aria-pressed={cat < 0} onClick={() => setCat(-1)}>{tr(strings.skills.all, lang)}</button>
            {SKILLS.map((g, i) => (
              <button type="button" key={i} className={cat === i ? "on" : undefined} aria-pressed={cat === i}
                style={{ "--c": g.c } as CSSProperties} onClick={() => setCat(cat === i ? -1 : i)}>
                <g.Icon size={15} aria-hidden="true" />{tr(g.title, lang)}<span>{g.chips.length}</span>
              </button>
            ))}
          </div>
          <ul className="skills-list">
            {shown.map((g) => (
              <li key={g.i} className="skill-row card" style={{ "--c": g.c } as CSSProperties}>
                <span className="skill-badge"><g.Icon size={20} strokeWidth={2.2} aria-hidden="true" /></span>
                <div className="skill-body">
                  <div className="skill-head">
                    <h3>{tr(g.title, lang)}</h3>
                    <span className="skill-n">{g.chips.length}</span>
                  </div>
                  <ul className="skill-chips">
                    {g.chips.map((s) => <li className="skill-chip" key={s}>{s}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
          {!shown.length && <p className="project-empty">{tr(strings.skills.empty, lang)} “{q}”</p>}
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
                <a className="btn sm" href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={14} aria-hidden="true" /></a>
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

const CLIENTS = [
  { name: "WhistleCorp", src: "firma/logo-transparente.png" },
  { name: "Universidad Casa Grande", src: "logos/ucg.png" },
  { name: "UPSE", src: "logos/upse.jpg", tall: true },
  { name: "Exducere", src: "logos/exducere.svg" },
  { name: "Elevra", src: "logos/elevra.png" },
  { name: "UNEMI", src: "logos/unemi.png" },
  { name: "EPUNEMI", src: "logos/epunemi.svg" },
];

function Clients() {
  const { lang } = useLang();
  return (
    <section className="clients" aria-labelledby="clients-title">
      <div className="container">
        <p className="clients-title" id="clients-title">{tr(strings.clients, lang)}</p>
        <div className="clients-marquee">
          <ul className="clients-row">
            {[0, 1, 2, 3].flatMap((k) => CLIENTS.map((c) => (
              <li key={`${k}-${c.name}`} aria-hidden={k > 0 || undefined}>
                <img className={c.tall ? "tall" : undefined} src={`${BASE}${c.src}`} alt={k ? "" : c.name} loading="lazy" />
              </li>
            )))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const { lang } = useLang();
  return (
    <section id="process">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{tr(strings.process.eyebrow, lang)}</p>
          <h2 className="section-title">{tr(strings.process.title, lang)}</h2>
          <p className="section-lead">{tr(strings.process.lead, lang)}</p>
        </Reveal>
        <ol className="process">
          {strings.process.steps.map((s, i) => (
            <li key={i} className="process-step card" style={{ "--i": i } as CSSProperties}>
              <span className="process-num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{tr(s.title, lang)}</h3>
                <p>{tr(s.body, lang)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CtaBand() {
  const { lang } = useLang();
  return (
    <section className="cta-sec">
      <div className="container">
        <Reveal>
          <div className="cta-band card">
            <svg className="cta-curve" viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true">
              <path d="M150 200 C 220 130 270 118 400 118 L400 200 Z" className="cta-leaf" />
              <path d="M110 200 C 190 120 240 104 400 104" fill="none" className="cta-line" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              <path d="M88 200 C 170 112 222 92 400 92" fill="none" className="cta-line2" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
            </svg>
            <div>
              <p className="cta-eyebrow">{tr(strings.cta.eyebrow, lang)}</p>
              <h2 className="cta-title">{tr(strings.cta.title, lang)}</h2>
            </div>
            <a className="btn primary" href="#contact" data-cuelume-press onClick={(e) => scrollToId(e, "contact")}>
              {tr(strings.cta.button, lang)} <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Faq() {
  const { lang } = useLang();
  return (
    <section id="faq">
      <div className="container tray-grid">
        <Reveal>
          <div className="tray-head">
            <p className="eyebrow">{tr(strings.faq.eyebrow, lang)}</p>
            <h2 className="section-title">{tr(strings.faq.title, lang)}</h2>
            <a className="btn" href="#contact" onClick={(e) => scrollToId(e, "contact")}>
              {tr(strings.nav.cta, lang)} <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="faq-list">
            {strings.faq.items.map((it, i) => (
              <details key={i} className="faq-item card">
                <summary>{tr(it.q, lang)}<Plus size={18} aria-hidden="true" /></summary>
                <p>{tr(it.a, lang)}</p>
              </details>
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
              <a className="btn primary" href="mailto:jcuadradoh2@unemi.edu.ec" data-cuelume-press data-cuelume-release><Mail size={17} aria-hidden="true" />{tr(strings.contact.email, lang)}</a>
              <a className="btn" href={GITHUB} target="_blank" rel="noreferrer" data-cuelume-press data-cuelume-release><Brand name="github" />GitHub</a>
              <a className="btn" href={LINKEDIN} target="_blank" rel="noreferrer" data-cuelume-press data-cuelume-release><Brand name="linkedin" />LinkedIn</a>
              <a className="btn" href={WHATSAPP} target="_blank" rel="noreferrer" data-cuelume-press data-cuelume-release><Brand name="whatsapp" />WhatsApp</a>
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
  const { pathname } = useLocation();
  const page = pathname === "/proyectos";
  useEffect(() => {
    if (page) { window.scrollTo(0, 0); return; }
    const id = pathname.slice(1);
    if (!id) return;
    const t = setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 120);
    return () => clearTimeout(t);
  }, [pathname, page]);
  return (
    <AppProviders>
      <Nav />
      <main>
        {page ? (
          <>
            <Work all />
            <Contact />
          </>
        ) : (
          <>
            <Hero />
            <Clients />
            <About />
            <HowIWork />
            <Process />
            <Work />
            <CtaBand />
            <Skills />
            <Timeline />
            <Faq />
            <Contact />
          </>
        )}
      </main>
    </AppProviders>
  );
}
