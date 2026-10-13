import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { bind, play, setEnabled } from "cuelume";
import type { Lang } from "./content";

type Theme = "dark" | "light";

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "es", setLang: () => {} });

export function AppProviders({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem("lang") as Lang) || "es");
  useEffect(() => localStorage.setItem("lang", lang), [lang]);
  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);
export const tr = <T,>(obj: { es: T; en: T }, lang: Lang) => obj[lang];

// Cuelume interaction sounds — the app owns the on/off preference (the library
// itself doesn't persist). Default OFF so the site is silent until a visitor
// opts in via the nav toggle; enabling plays a confirmation cue.
export function useSound(): [boolean, () => void] {
  const [on, setOn] = useState<boolean>(() => localStorage.getItem("sound") === "on");
  useEffect(() => {
    try { bind(); } catch { /* SSR / unsupported — no-op */ }
  }, []);
  useEffect(() => {
    try { setEnabled(on); } catch { /* no-op */ }
  }, [on]);
  const toggle = () =>
    setOn((prev) => {
      const next = !prev;
      localStorage.setItem("sound", next ? "on" : "off");
      if (next) {
        try { setEnabled(true); play("toggle"); } catch { /* no-op */ }
      }
      return next;
    });
  return [on, toggle];
}

export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(prefersReducedMotion);
  useEffect(() => {
    if (prefersReducedMotion()) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal${visible ? " visible" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function useCountUp(target: string, run: boolean) {
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!run) return;
    const match = target.match(/(\d+)/);
    if (!match) {
      setDisplay(target);
      return;
    }
    const end = parseInt(match[1]);
    const suffix = target.slice(match.index! + match[1].length);
    const prefix = target.slice(0, match.index);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const dur = 1100;
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(`${prefix}${Math.round(end * eased)}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, run]);
  return display;
}

// Cursor-driven video scrubbing via seek-chaining: on each 'seeked' we jump to
// the latest target only if it changed, so we never queue seeks faster than the
// decoder can serve them. With the all-intra 720p clip each seek is a single-frame
// decode, so this stays fluid. Mobile / reduced-motion fall back to looped autoplay.
export function useVideoScrub(sectionRef: React.RefObject<HTMLElement | null>, videoRef: React.RefObject<HTMLVideoElement | null>) {
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
