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
    role: { es: "Desarrollador de Software · Backend Python/Django · IA Aplicada",
            en: "Software Developer · Python/Django Backend · Applied AI" },
    title: { es: "Construyo sistemas backend robustos e interfaces que se sienten bien.",
             en: "I build robust backend systems and interfaces that feel right." },
    lead: {
      es: "Más de 4 años construyendo backends con Python, Django y FastAPI para instituciones de educación superior: IA aplicada (LLMs, agentes, OCR con Document AI), automatización de procesos, observabilidad con Sentry e integraciones. Este portafolio consolida y demuestra ese trabajo — reescrito, sanitizado y ejecutable.",
      en: "4+ years building backends with Python, Django and FastAPI for higher-education institutions: applied AI (LLMs, agents, Document AI OCR), process automation, Sentry observability and integrations. This portfolio consolidates and demonstrates that work — rewritten, sanitized and runnable.",
    },
    ctaWork: { es: "Ver proyectos", en: "View projects" },
    ctaGithub: { es: "GitHub", en: "GitHub" },
  },
  stats: [
    { value: "4+", label: { es: "años de experiencia", en: "years of experience" } },
    { value: "7", label: { es: "proyectos de portafolio", en: "portfolio projects" } },
    { value: "61", label: { es: "tests automatizados", en: "automated tests" } },
    { value: "MSc", label: { es: "Magíster en TI", en: "MSc in IT" } },
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
    role: { es: "Desarrollador de Software · Backend Python/Django · IA Aplicada · Ecuador 🇪🇨",
            en: "Software Developer · Python/Django Backend · Applied AI · Ecuador 🇪🇨" },
    body: {
      es: "Ingeniero en Sistemas Computacionales y Magíster en Tecnologías de la Información (mención Transformación Digital e Innovación) por la UNEMI. Más de 4 años en desarrollo backend y automatización de procesos institucionales: módulos de gestión académica, pipelines de OCR con Google Document AI para admisión, integración de LLMs y agentes inteligentes, notificaciones automatizadas y observabilidad con Sentry. Me enfocan la arquitectura por capas, la calidad y la entrega iterativa. Este portafolio consolida ese trabajo — reescrito y sanitizado.",
      en: "Computer Systems Engineer and MSc in Information Technology (Digital Transformation & Innovation) from UNEMI. 4+ years in backend development and institutional process automation: academic-management modules, OCR pipelines with Google Document AI for admissions, LLM integration and intelligent agents, automated notifications and Sentry observability. I focus on layered architecture, quality and iterative delivery. This portfolio consolidates that work — rewritten and sanitized.",
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
  private?: boolean;
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
  {
    key: "nexo",
    name: "Nexo ERP",
    tagline: { es: "Plataforma ERP empresarial (proyecto base)", en: "Enterprise ERP platform (base project)" },
    description: {
      es: "Plataforma de administración empresarial (Laravel + Vue SPA) con módulo de Seguridad —RBAC completo: usuarios, roles, permisos, módulos, grupos y departamentos— y módulo de Contabilidad —flujo de caja, mantenimientos (productos, clientes, proveedores) y transacciones—. Autenticación JWT y LDAP/Active Directory, notificaciones en tiempo real con WebSockets, generación de PDF/códigos de barra e impresión térmica (POS), exportación a Excel e integración vía ODBC. Sirvió como base para proyectos posteriores.",
      en: "Enterprise administration platform (Laravel + Vue SPA) with a Security module —full RBAC: users, roles, permissions, modules, groups, departments— and an Accounting module —cash flow, master-data CRUD (products, clients, suppliers) and transactions—. JWT + LDAP/Active Directory auth, real-time notifications over WebSockets, PDF/barcode generation and thermal (POS) printing, Excel export and ODBC integration. Served as the base for later projects.",
    },
    tags: ["Laravel", "Vue 2 · Vuex", "PostgreSQL", "JWT", "WebSockets", "RBAC"],
    featured: false,
    repo: "https://github.com/jcuadradoh2/nexo-erp",
    private: true,
    shots: ["dashboard-mock.png"],
  },
  {
    key: "flutter",
    name: "Tienda Virtual",
    tagline: { es: "App móvil de e-commerce (Flutter)", en: "E-commerce mobile app (Flutter)" },
    description: {
      es: "Aplicación móvil de comercio para una tienda de ropa construida con Flutter (Dart · Material Design): catálogo por categorías, carrusel de ofertas, detalle de producto, carrito con checkout y login. Arquitectura por pantallas y componentes reutilizables (horizontal list, product grid, cart).",
      en: "Mobile shopping app for a clothing store built with Flutter (Dart · Material Design): category browsing, promo carousel, product details, cart with checkout and login. Screen-and-component architecture (horizontal list, product grid, cart).",
    },
    tags: ["Flutter", "Dart", "Material Design", "Mobile"],
    featured: false,
    repo: "https://github.com/jcuadradoh2/flutter_tienda_virtual",
    shots: ["home-mock.png"],
  },
];

export const skillGroups = [
  { title: { es: "Backend & APIs", en: "Backend & APIs" }, items: ["Python · Django · DRF", "FastAPI", "Java · Spring Boot", "Celery · Redis", "REST · SOLID"] },
  { title: { es: "IA Aplicada & LLMs", en: "Applied AI & LLMs" }, items: ["OpenAI API · Ollama", "Agentes inteligentes", "Visión multimodal", "Document AI · OCR", "PaddleOCR"] },
  { title: { es: "Datos & Analítica", en: "Data & Analytics" }, items: ["PostgreSQL", "SQL avanzado", "Pandas", "Apache Superset", "Modelado de datos"] },
  { title: { es: "DevOps & Cloud", en: "DevOps & Cloud" }, items: ["Docker · Git", "CI/CD · Linux · Nginx", "GCP · Azure", "Sentry", "Gunicorn · Uvicorn"] },
  { title: { es: "Automatización", en: "Automation" }, items: ["Telegram · webhooks", "Celery (async)", "Moodle", "Integración de sistemas"] },
  { title: { es: "Frontend & Procesos", en: "Frontend & Process" }, items: ["React · Svelte", "TypeScript · JS", "Bootstrap · CSS3", "BPMN · Scrum"] },
];

export const timeline = [
  { period: "2024 — Actualidad", title: { es: "Programador Full-Stack Senior — Freelance", en: "Senior Full-Stack Developer — Freelance" },
    body: { es: "Diseño y desarrollo de plataformas web y apps móviles para clientes: backends con Django/Laravel, frontends en React/Vue/Angular/Flutter, IA aplicada y despliegue en la nube. Proyectos como Nexo ERP, dashboards analíticos y apps de comercio.", en: "Design and development of web platforms and mobile apps for clients: Django/Laravel backends, React/Vue/Angular/Flutter frontends, applied AI and cloud deployment. Projects such as Nexo ERP, analytics dashboards and e-commerce apps." } },
  { period: "Feb 2026 — Actualidad", title: { es: "Programador Semi Senior — WhistleCorp S.A.S", en: "Semi-Senior Developer — WhistleCorp S.A.S" },
    body: { es: "Backend a medida con Python, Django, DRF y FastAPI para gestión académica. Pipeline de OCR con Document AI (admisión), integración de LLMs y Ollama con visión multimodal, agentes inteligentes, observabilidad con Sentry y despliegue en GCP/Azure.", en: "Custom backends with Python, Django, DRF and FastAPI for academic management. Document AI OCR pipeline (admissions), LLM + Ollama multimodal integration, intelligent agents, Sentry observability and GCP/Azure deployment." } },
  { period: "2023 — 2026", title: { es: "Desarrollador de Software — UNEMI", en: "Software Developer — UNEMI" },
    body: { es: "Módulos de seguimiento académico y reportería, automatización de distributivos docentes, integración con Moodle, IA aplicada a procesos educativos, reportes para POA y acreditación. Java (Spring Boot), Django, Svelte, React.", en: "Academic-tracking and reporting modules, teaching-load automation, Moodle integration, applied AI for education, accreditation reports. Java (Spring Boot), Django, Svelte, React." } },
  { period: "2022 — 2023", title: { es: "Desarrollador de Software — EPUNEMI", en: "Software Developer — EPUNEMI" },
    body: { es: "Digitalización de servicios de UNEMI Posgrados; lideré el sistema de selección docente de posgrado. Python (Django, DRF), Svelte, PostgreSQL.", en: "Digitized UNEMI Graduate School services; led the postgraduate faculty-selection system. Python (Django, DRF), Svelte, PostgreSQL." } },
  { period: "2019 — 2021", title: { es: "Técnico de Soporte de Redes N2 — Interman", en: "Network Support Technician N2 — Interman" },
    body: { es: "Diseño y mantenimiento de redes LAN/WAN, configuración de equipos CISCO y soporte de segundo nivel.", en: "LAN/WAN network design and maintenance, CISCO device configuration and second-level support." } },
];
