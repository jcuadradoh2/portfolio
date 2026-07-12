import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { projects, skillGroups, timeline, type Project } from "./content";
import { AppProviders, Reveal, tr, useCountUp, useLang, useTheme } from "./hooks";
import { t as strings } from "./content";
import "./app.css";

const BASE = import.meta.env.BASE_URL;
const GITHUB = "https://github.com/jcuadradoh2";

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
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`nav${scrolled ? " solid" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand">JC<span>.</span></a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#work">{tr(strings.nav.work, lang)}</a>
          <a href="#skills">{tr(strings.nav.skills, lang)}</a>
          <a href="#about">{tr(strings.nav.about, lang)}</a>
          <a href="#contact">{tr(strings.nav.contact, lang)}</a>
        </nav>
        <div className="nav-actions">
          <button className="pill" onClick={() => setLang(lang === "es" ? "en" : "es")}
            aria-label="Toggle language">{lang === "es" ? "EN" : "ES"}</button>
          <button className="pill" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? "☀" : "☾"}</button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { lang } = useLang();
  return (
    <section id="top" className="hero">
      <AuroraBg />
      <div className="container hero-inner">
        <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>{tr(strings.hero.role, lang)}</motion.p>
        <motion.h1 className="hero-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}>{tr(strings.hero.title, lang)}</motion.h1>
        <motion.p className="hero-lead" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}>{tr(strings.hero.lead, lang)}</motion.p>
        <motion.div className="hero-cta" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}>
          <a className="btn primary" href="#work">{tr(strings.hero.ctaWork, lang)} →</a>
          <a className="btn" href={GITHUB} target="_blank" rel="noreferrer">{tr(strings.hero.ctaGithub, lang)}</a>
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
      <article className={`project card${project.featured ? " featured" : ""}`}>
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
          <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">
            {tr(strings.work.view, lang)} ↗
          </a>
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
          {skillGroups.map((g, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="skill-card card">
                <h4>{tr(g.title, lang)}</h4>
                <ul>{g.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const { lang } = useLang();
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <Reveal>
          <div>
            <p className="eyebrow">{tr(strings.about.eyebrow, lang)}</p>
            <h2 className="section-title">{tr(strings.about.title, lang)}</h2>
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
              <a className="btn primary" href="mailto:jcuadradoh6@gmail.com">{tr(strings.contact.email, lang)} →</a>
              <a className="btn" href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn" href="https://www.linkedin.com/in/jefferson-cuadrado" target="_blank" rel="noreferrer">LinkedIn</a>
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
  return (
    <AppProviders>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Skills />
        <About />
        <Contact />
      </main>
    </AppProviders>
  );
}
