export type Lang = "es" | "en";

export const t = {
  nav: {
    work: { es: "Proyectos", en: "Work" },
    skills: { es: "Skills", en: "Skills" },
    about: { es: "Perfil", en: "About" },
    contact: { es: "Contacto", en: "Contact" },
    lab: { es: "Lab", en: "Lab" },
  },
  hero: {
    role: { es: "Ingeniero de Software Full-Stack · Senior", en: "Senior Full-Stack Software Engineer" },
    title: { es: "Construyo sistemas backend robustos e interfaces que se sienten bien.",
             en: "I build robust backend systems and interfaces that feel right." },
    lead: {
      es: "Más de una década construyendo un ERP académico real: OCR con IA, firma electrónica, pasarelas de pago, integraciones SOAP/Moodle y concurrencia a escala. Este portafolio consolida ese trabajo — reescrito, sanitizado y ejecutable.",
      en: "A decade building a real academic ERP: AI-driven OCR, electronic signatures, payment gateways, SOAP/Moodle integrations and concurrency at scale. This portfolio consolidates that work — rewritten, sanitized and runnable.",
    },
    ctaWork: { es: "Ver proyectos", en: "View projects" },
    ctaGithub: { es: "GitHub", en: "GitHub" },
  },
  stats: [
    { value: "10+", label: { es: "años construyendo software", en: "years shipping software" } },
    { value: "5", label: { es: "proyectos de portafolio", en: "portfolio projects" } },
    { value: "61", label: { es: "tests automatizados", en: "automated tests" } },
    { value: "4", label: { es: "lenguajes en producción", en: "languages in production" } },
  ],
  work: {
    eyebrow: { es: "Proyectos destacados", en: "Featured work" },
    title: { es: "Ingeniería real, no demos de juguete", en: "Real engineering, not toy demos" },
    lead: {
      es: "Cada proyecto corre, tiene tests y arquitectura pensada. AgentForge se muestra con código completo; el resto, con capturas del sistema en funcionamiento.",
      en: "Every project runs, has tests and deliberate architecture. AgentForge ships with full source; the rest with screenshots of the working system.",
    },
    featured: { es: "Código completo", en: "Full source" },
    captures: { es: "Capturas", en: "Screenshots" },
    view: { es: "Ver repositorio", en: "View repo" },
  },
  skills: {
    eyebrow: { es: "Stack técnico", en: "Tech stack" },
    title: { es: "Herramientas que uso bien", en: "Tools I use well" },
    lead: { es: "Backend fuerte, frontend cuidado, y las prácticas que sostienen ambos.",
            en: "Strong backend, careful frontend, and the practices that hold both together." },
  },
  about: {
    eyebrow: { es: "Perfil", en: "About" },
    title: { es: "Jefferson Cuadrado", en: "Jefferson Cuadrado" },
    body: {
      es: "Desarrollador full-stack de Ecuador. Durante años construí y mantuve el sistema de gestión académica de una universidad — decenas de módulos, integraciones con entidades del Estado, firma electrónica con HSM, pagos en línea y automatizaciones críticas. Me gusta la arquitectura limpia (hexagonal, DDD), la concurrencia bien hecha y las interfaces accesibles. Este portafolio recupera ese trabajo que nunca estuvo en un solo lugar.",
      en: "Full-stack developer from Ecuador. For years I built and maintained a university's academic-management system — dozens of modules, government integrations, HSM electronic signatures, online payments and critical automations. I care about clean architecture (hexagonal, DDD), concurrency done right, and accessible interfaces. This portfolio recovers work that was never in one place.",
    },
    timelineTitle: { es: "Trayectoria", en: "Timeline" },
  },
  contact: {
    eyebrow: { es: "Contacto", en: "Get in touch" },
    title: { es: "¿Trabajamos juntos?", en: "Let's work together" },
    lead: { es: "Abierto a roles senior full-stack / backend, remoto o híbrido.",
            en: "Open to senior full-stack / backend roles, remote or hybrid." },
    email: { es: "Escríbeme", en: "Email me" },
  },
  footer: {
    es: "Hecho con React, TypeScript y Framer Motion. Diseñado y construido por Jefferson Cuadrado.",
    en: "Built with React, TypeScript and Framer Motion. Designed and built by Jefferson Cuadrado.",
  },
};

export interface Project {
  key: string;
  name: string;
  tagline: { es: string; en: string };
  description: { es: string; en: string };
  tags: string[];
  featured: boolean;
  repo: string;
  shots: string[];
}

export const projects: Project[] = [
  {
    key: "agentforge",
    name: "AgentForge",
    tagline: { es: "Plataforma de agentes inteligentes", en: "Intelligent-agent platform" },
    description: {
      es: "Spring Boot 3 con arquitectura hexagonal estricta: crea agentes LLM, tool-use loop, orquestación concurrente (secuencial/paralela con CompletableFuture), streaming por SSE y seguridad JWT. Proveedor Anthropic real + mock determinista.",
      en: "Spring Boot 3 with strict hexagonal architecture: build LLM agents, a tool-use loop, concurrent orchestration (sequential/parallel via CompletableFuture), SSE streaming and JWT security. Real Anthropic provider + a deterministic mock.",
    },
    tags: ["Java 17", "Spring Boot", "Hexagonal", "JWT", "SSE", "JUnit"],
    featured: true,
    repo: "https://github.com/jcuadradoh2/agentforge",
    shots: ["chat-dark.png", "pipeline-dark.png", "login-dark.png"],
  },
  {
    key: "jobradar",
    name: "JobRadar EC",
    tagline: { es: "Búsqueda de empleo en Ecuador", en: "Ecuador job-search backend" },
    description: {
      es: ".NET 10 hexagonal: fan-out concurrente sobre múltiples portales (Computrabajo, LinkedIn, Multitrabajos…), resiliencia con Polly, rate limiting por host, normalización del mercado local y deduplicación en SQLite. 27 tests offline sobre fixtures reales.",
      en: ".NET 10 hexagonal: concurrent fan-out across job portals (Computrabajo, LinkedIn, Multitrabajos…), Polly resilience, per-host rate limiting, local-market normalization and SQLite dedup. 27 offline tests over real fixtures.",
    },
    tags: [".NET 10", "C#", "Polly", "EF Core", "AngleSharp", "xUnit"],
    featured: false,
    repo: "https://github.com/jcuadradoh2/jobradar-ec",
    shots: ["swagger-overview-dark.png", "swagger-search-dark.png"],
  },
  {
    key: "academic",
    name: "Academic Modules",
    tagline: { es: "Módulos de un ERP académico (sanitizados)", en: "Academic-ERP modules (sanitized)" },
    description: {
      es: "Reescritura sanitizada de los módulos con más ingeniería: OCR multi-motor con validación real de cédula ecuatoriana, firma electrónica de PDFs con endesive (certificado .p12 + firma masiva concurrente), y pasarela de pagos estilo PlaceToPay con webhook firmado, idempotencia y conciliación. Django + DRF + React.",
      en: "Sanitized rewrite of the most engineering-heavy modules: multi-engine OCR with real Ecuadorian ID validation, endesive PDF e-signature (.p12 cert + concurrent batch signing), and a PlaceToPay-style gateway with a signed webhook, idempotency and reconciliation. Django + DRF + React.",
    },
    tags: ["Django", "DRF", "endesive", "React", "Cryptography", "SimpleJWT"],
    featured: false,
    repo: "https://github.com/jcuadradoh2/academic-modules-showcase",
    shots: ["dashboard-dark.png", "firma-dark.png", "pagos-dark.png"],
  },
  {
    key: "angular",
    name: "Insight Dashboard",
    tagline: { es: "Dashboard analítico en Angular", en: "Angular analytics dashboard" },
    description: {
      es: "Frontend puro con Angular 20 moderno: standalone components, signals, nuevo control-flow (@if/@for), gráficos animados, tema claro/oscuro, i18n ES/EN y accesibilidad AA. Skeleton loaders y micro-interacciones.",
      en: "Pure frontend with modern Angular 20: standalone components, signals, new control flow (@if/@for), animated charts, light/dark theme, ES/EN i18n and AA accessibility. Skeleton loaders and micro-interactions.",
    },
    tags: ["Angular 20", "Signals", "TypeScript", "Charts", "a11y"],
    featured: false,
    repo: "https://github.com/jcuadradoh2/angular-insight-dashboard",
    shots: ["dashboard-dark.png"],
  },
  {
    key: "figma",
    name: "Aurora Design System",
    tagline: { es: "Design system con IA (Figma + IA)", en: "AI-assisted design system (Figma + AI)" },
    description: {
      es: "Case study y style guide viva: tokens (color/tipografía/espaciado/elevación), psicología del color, biblioteca de componentes en claro/oscuro, proceso de diseño asistido por IA y verificación de contraste WCAG en tiempo de ejecución.",
      en: "Case study and living style guide: tokens (color/type/spacing/elevation), color psychology, a component library in light/dark, an AI-assisted design process and runtime WCAG contrast verification.",
    },
    tags: ["Design System", "Figma + IA", "WCAG AA", "Vite", "TypeScript"],
    featured: false,
    repo: "https://github.com/jcuadradoh2/aurora-design-system",
    shots: ["hero-dark.png", "tokens-dark.png", "components-dark.png"],
  },
];

export const skillGroups = [
  { title: { es: "Backend", en: "Backend" }, items: ["Java · Spring Boot", ".NET · C#", "Python · Django · DRF", "Node.js", "PHP · Laravel"] },
  { title: { es: "Frontend", en: "Frontend" }, items: ["React", "Angular", "Vue", "TypeScript", "Tailwind · SCSS"] },
  { title: { es: "Datos", en: "Data" }, items: ["PostgreSQL", "MySQL", "SQLite", "Redis", "ORM · optimización"] },
  { title: { es: "Arquitectura", en: "Architecture" }, items: ["Hexagonal · DDD", "Concurrencia", "JWT · OAuth2", "REST · SOAP", "KISS · DRY"] },
  { title: { es: "IA & Cloud", en: "AI & Cloud" }, items: ["Claude API · agentes", "OCR · Document AI", "Docker", "GCP", "CI/CD"] },
  { title: { es: "Prácticas", en: "Practices" }, items: ["Testing", "Web scraping", "Firma electrónica", "Accesibilidad", "UX/UI"] },
];

export const timeline = [
  { period: "2015 — 2018", title: { es: "Desarrollador Full-Stack", en: "Full-Stack Developer" },
    body: { es: "Aplicaciones web, móviles e integraciones. PHP/Laravel, Django, Vue.", en: "Web & mobile apps and integrations. PHP/Laravel, Django, Vue." } },
  { period: "2018 — 2024", title: { es: "Ingeniero SGA — ERP académico", en: "SGA Engineer — Academic ERP" },
    body: { es: "Construcción y mantenimiento de un sistema de gestión académica: matrícula, finanzas, pagos en línea, firma electrónica con HSM, integraciones estatales (Senescyt), Moodle y reportería.", en: "Built and maintained an academic-management system: enrollment, finance, online payments, HSM e-signatures, government integrations (Senescyt), Moodle and reporting." } },
  { period: "2024 — hoy", title: { es: "Senior Full-Stack", en: "Senior Full-Stack" },
    body: { es: "Arquitectura hexagonal, IA aplicada (OCR, agentes), concurrencia y consolidación de este portafolio.", en: "Hexagonal architecture, applied AI (OCR, agents), concurrency, and consolidating this portfolio." } },
];
