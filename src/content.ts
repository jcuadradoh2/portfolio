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
    role: { es: "Ingeniero de Software · Arquitectura Backend · IA Aplicada",
            en: "Software Engineer · Backend Architecture · Applied AI" },
    title: { es: "Convierto procesos de negocio complejos en plataformas de software mantenibles.",
             en: "I turn complex business processes into maintainable software platforms." },
    lead: {
      es: "He desarrollado plataformas para instituciones de educación superior donde la automatización, la inteligencia artificial y una arquitectura bien diseñada reducen el trabajo manual y permiten escalar procesos críticos. Mi experiencia combina backend, integración de IA, observabilidad y diseño de sistemas orientados a producción.",
      en: "I have built platforms for higher-education institutions where automation, artificial intelligence and well-designed architecture cut manual work and let critical processes scale. My experience combines backend engineering, AI integration, observability and production-oriented system design.",
    },
    ctaWork: { es: "Ver proyectos", en: "View projects" },
    ctaGithub: { es: "GitHub", en: "GitHub" },
  },
  stats: [
    { value: { es: "10+", en: "10+" }, label: { es: "proyectos públicos", en: "public projects" } },
    { value: { es: "3", en: "3" }, label: { es: "arquitecturas reconstruidas", en: "rebuilt architectures" } },
    { value: { es: "IA", en: "AI" }, label: { es: "integrada en producción", en: "integrated in production" } },
    { value: { es: "MSc", en: "MSc" }, label: { es: "Transformación Digital", en: "Digital Transformation" } },
  ],
  how: {
    eyebrow: { es: "Cómo trabajo", en: "How I work" },
    title: { es: "Criterio antes que stack", en: "Judgment before stack" },
    lead: {
      es: "Cuatro cosas que hago igual sin importar el lenguaje o el framework del proyecto.",
      en: "Four things I do the same way regardless of the project's language or framework.",
    },
  },
  work: {
    eyebrow: { es: "Proyectos destacados", en: "Featured work" },
    title: { es: "Código que puedes ejecutar y revisar", en: "Code you can run and read" },
    lead: {
      es: "Cada proyecto corre en local, tiene tests y deja las decisiones de arquitectura a la vista en el repositorio. AgentForge y el pipeline de OCR se muestran con código completo; el resto, con capturas del sistema en funcionamiento.",
      en: "Every project runs locally, has tests, and leaves its architectural decisions visible in the repository. AgentForge and the OCR pipeline ship with full source; the rest with screenshots of the working system.",
    },
    featured: { es: "Código completo", en: "Full source" },
    captures: { es: "Capturas", en: "Screenshots" },
    view: { es: "Ver repositorio", en: "View repo" },
  },
  skills: {
    eyebrow: { es: "Especialización", en: "Expertise" },
    title: { es: "Áreas de especialización", en: "Areas of expertise" },
    lead: { es: "Tecnologías que utilizo habitualmente para diseñar, construir y operar sistemas de software en producción.",
            en: "The technologies I regularly use to design, build and operate software systems in production." },
  },
  about: {
    eyebrow: { es: "Perfil", en: "About" },
    title: { es: "Jefferson Cuadrado", en: "Jefferson Cuadrado" },
    role: { es: "Ingeniero de Software · Arquitectura Backend · IA Aplicada · Ecuador 🇪🇨",
            en: "Software Engineer · Backend Architecture · Applied AI · Ecuador 🇪🇨" },
    body: {
      es: [
        "Soy Ingeniero en Sistemas Computacionales y Magíster en Tecnologías de la Información con énfasis en Transformación Digital e Innovación.",
        "Durante los últimos años he desarrollado plataformas para instituciones de educación superior, participando en la automatización de procesos académicos, la digitalización documental, la integración de inteligencia artificial y la construcción de servicios backend utilizados en producción.",
        "Mi interés principal es la arquitectura de software. Disfruto diseñando sistemas que permanezcan simples a medida que crecen, donde la calidad, la observabilidad y las pruebas automatizadas permitan evolucionar el código con seguridad.",
        "Este portafolio reúne implementaciones reconstruidas desde cero que representan soluciones reales desarrolladas para producción, eliminando cualquier dependencia propietaria o información confidencial.",
      ],
      en: [
        "I am a Computer Systems Engineer with an MSc in Information Technology, focused on Digital Transformation and Innovation.",
        "Over the past few years I have built platforms for higher-education institutions, working on academic process automation, document digitization, artificial-intelligence integration and backend services running in production.",
        "Software architecture is my main interest. I enjoy designing systems that stay simple as they grow, where quality, observability and automated testing make it safe to keep evolving the code.",
        "This portfolio gathers implementations rebuilt from scratch that stand in for real solutions shipped to production, with every proprietary dependency and confidential detail removed.",
      ],
    },
    timelineTitle: { es: "Trayectoria", en: "Timeline" },
  },
  contact: {
    eyebrow: { es: "Contacto", en: "Get in touch" },
    title: { es: "Construyamos el próximo sistema.", en: "Let's build the next system." },
    lead: { es: "Estoy abierto a participar en equipos que desarrollen productos de software, plataformas empresariales o soluciones basadas en inteligencia artificial, especialmente en roles Backend, Full Stack o AI Engineering.",
            en: "I'm open to joining teams building software products, enterprise platforms or AI-based solutions, particularly in Backend, Full Stack or AI Engineering roles." },
    email: { es: "Escríbeme", en: "Email me" },
  },
  footer: {
    es: "Hecho con React, TypeScript y Framer Motion. Diseñado y construido por Jefferson Cuadrado.",
    en: "Built with React, TypeScript and Framer Motion. Designed and built by Jefferson Cuadrado.",
  },
};

export interface Principle {
  key: string;
  title: { es: string; en: string };
  subtitle: { es: string; en: string };
  body: { es: string; en: string };
}

export const principles: Principle[] = [
  {
    key: "arquitectura",
    title: { es: "Arquitectura", en: "Architecture" },
    subtitle: { es: "Simple hoy, evolutiva mañana", en: "Simple today, evolvable tomorrow" },
    body: {
      es: "Diseño sistemas utilizando principios SOLID, separación por capas y arquitectura hexagonal cuando aporta mantenibilidad. Prefiero soluciones simples que puedan evolucionar durante años, y evito las capas que solo agregan ceremonia.",
      en: "I design systems using SOLID principles, layered separation and hexagonal architecture where it actually buys maintainability. I favour simple solutions that can keep evolving for years, and avoid layers that only add ceremony.",
    },
  },
  {
    key: "automatizacion",
    title: { es: "Automatización", en: "Automation" },
    subtitle: { es: "Menos trabajo manual, más proceso", en: "Less manual work, more process" },
    body: {
      es: "Busco eliminar tareas repetitivas mediante pipelines, integración entre sistemas, procesamiento documental e IA aplicada. Un proceso automatizado tiene que ser confiable: asumo que va a fallar a la mitad y lo diseño para poder reanudarlo.",
      en: "I look to remove repetitive work through pipelines, system-to-system integration, document processing and applied AI. An automated process has to be dependable: I assume it will fail halfway and design it so it can be resumed.",
    },
  },
  {
    key: "calidad",
    title: { es: "Calidad", en: "Quality" },
    subtitle: { es: "Desde el diseño, no al final", en: "By design, not at the end" },
    body: {
      es: "La calidad no es una etapa posterior. Incorporo pruebas automatizadas, observabilidad, manejo de errores e idempotencia desde el diseño inicial, para que una regresión se detecte donde se produjo y no en la operación del cliente.",
      en: "Quality is not a later stage. I build in automated testing, observability, error handling and idempotency from the initial design, so a regression surfaces where it was introduced rather than in the customer's operation.",
    },
  },
  {
    key: "producto",
    title: { es: "Producto", en: "Product" },
    subtitle: { es: "El problema antes que la herramienta", en: "The problem before the tool" },
    body: {
      es: "Antes de escribir código intento comprender el problema de negocio y a quién le cambia el día. La tecnología es una herramienta; el objetivo es reducir fricción y aportar valor real, y eso se verifica entregando en cortes cortos junto al usuario del proceso.",
      en: "Before writing code I try to understand the business problem and whose day it changes. Technology is a tool; the goal is to reduce friction and deliver real value, and that gets verified by shipping in short increments next to the people who run the process.",
    },
  },
];

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
    key: "ocr",
    name: "OCR Documental EC",
    tagline: {
      es: "Réplica funcional de un pipeline OCR en producción",
      en: "Working replica of a production OCR pipeline",
    },
    description: {
      es: "Prototipo funcional que replica el pipeline de OCR documental que implementé en producción dentro del sistema de gestión académica de una IES (proceso de admisión). Reescrito desde cero y sanitizado: cero código propietario, cero secretos, datos ficticios. El motor OCR es un puerto hexagonal con escalado por capas —capa de texto nativo con pypdf, luego motor de visión tipo Google Document AI—, validación real del checksum de cédula ecuatoriana (módulo 10, provincias 01–24 y 30, regla del tercer dígito) y extracción/conciliación de montos en formato local (1.900,00) con tolerancia de 2 centavos.",
      en: "A working prototype that replicates the document-OCR pipeline I shipped to production inside the academic-management system of a higher-education institution (admissions intake). Rewritten from scratch and sanitized: no proprietary code, no secrets, synthetic data. The OCR engine is a hexagonal port with layer-by-layer escalation —native PDF text layer via pypdf, then a Google Document AI-style vision engine—, real Ecuadorian ID checksum validation (mod-10, provinces 01–24 and 30, third-digit rule) and local-format amount extraction/reconciliation (1.900,00) within a 2-cent tolerance.",
    },
    tags: ["Python", "Django", "OCR", "Document AI", "Hexagonal", "pypdf"],
    featured: true,
    repo: "https://github.com/jcuadradoh2/academic-modules-showcase/tree/main/backend/ocr",
    shots: ["ocr-dark.webp"],
  },
  {
    key: "telco",
    name: "Telco Churn EDA",
    tagline: { es: "Análisis exploratorio de datos (Data Science)", en: "Exploratory Data Analysis (Data Science)" },
    description: {
      es: "Pipeline EDA de punta a punta sobre 7,043 clientes de telecomunicaciones: detección de nulos disfrazados, imputación justificada, análisis univariado/bivariado, correlaciones y regla IQR. Hallazgos accionables de negocio (churn 52.9% en clientes nuevos vs 26.5% global) y README didáctico paso a paso. Base para modelo predictivo con scikit-learn.",
      en: "End-to-end EDA pipeline over 7,043 telco customers: hidden-null detection, justified imputation, univariate/bivariate analysis, correlations and IQR rule. Actionable business findings (52.9% churn in new customers vs 26.5% overall) and a step-by-step educational README. Groundwork for a scikit-learn predictive model.",
    },
    tags: ["Python", "pandas", "seaborn", "EDA", "Data Science"],
    featured: false,
    repo: "https://github.com/jcuadradoh2/telco-churn-eda",
    shots: ["churn-categorias.png", "tenure-densidad.png", "correlacion.png"],
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
    tagline: { es: "Firma electrónica y pagos de un ERP académico (réplica sanitizada)", en: "E-signature and payments from an academic ERP (sanitized replica)" },
    description: {
      es: "El resto de la réplica del ERP académico de la IES, junto al módulo de OCR: firma electrónica de PDFs con endesive (PAdES/CMS real con certificado .p12 formato Ecuador y firma masiva concurrente con ThreadPoolExecutor), y pasarela de pagos estilo PlaceToPay con webhook firmado verificado en tiempo constante, idempotencia y conciliación cabecera-detalle al centavo. Django + DRF + React, todo reescrito y sin datos reales.",
      en: "The rest of the sanitized replica of the institution's academic ERP, alongside the OCR module: PDF e-signature with endesive (real PAdES/CMS using an Ecuador-format .p12 cert and concurrent batch signing via ThreadPoolExecutor), and a PlaceToPay-style gateway with a constant-time signed-webhook check, idempotency and to-the-cent header/line reconciliation. Django + DRF + React, fully rewritten with no real data.",
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
    key: "site",
    name: "Este portafolio + Lab",
    tagline: { es: "Frontend de producto y motion en la web", en: "Product frontend and motion on the web" },
    description: {
      es: "El sitio que estás viendo y su /lab de experimentos. React 19 + Vite 8 + TypeScript, bilingüe ES/EN, tema claro/oscuro y accesibilidad. La ingeniería está en el rendimiento: Remotion sacado del bundle inicial por code-splitting (−40% de JS), showreel pre-renderizado a MP4 en bucle en vez de reconciliar la composición a 30fps en runtime, scrubbing de video dirigido por el cursor sobre un clip all-intra, y animaciones apagadas fuera del viewport con IntersectionObserver.",
      en: "The site you're looking at and its /lab of experiments. React 19 + Vite 8 + TypeScript, bilingual ES/EN, light/dark theme and accessibility. The engineering is in the performance: Remotion code-split out of the initial bundle (−40% JS), a showreel pre-rendered to a looping MP4 instead of reconciling the composition at 30fps at runtime, cursor-driven video scrubbing over an all-intra clip, and animations shut off outside the viewport via IntersectionObserver.",
    },
    tags: ["React 19", "Vite", "TypeScript", "Remotion", "WebGL", "Framer Motion"],
    featured: false,
    repo: "https://github.com/jcuadradoh2/portfolio",
    shots: ["hero.webp", "lab-remotion.webp", "lab-lithos.webp", "lab-pulse3d.webp"],
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
    body: { es: "Diseño y llevo a producción plataformas completas para clientes, desde el modelo de datos hasta el despliegue y el soporte posterior. La decisión recurrente es cuánta arquitectura sostiene un equipo pequeño: separo el dominio de la infraestructura donde el cliente va a cambiar de proveedor, y evito capas que solo agregarían mantenimiento. Nexo ERP nació de ese criterio y terminó sirviendo de base para proyectos posteriores. Django, Laravel, Vue, React, Angular y Flutter.", en: "I design and ship full platforms for clients, from the data model to deployment and ongoing support. The recurring decision is how much architecture a small team can sustain: I separate domain from infrastructure where the client will change providers, and avoid layers that would only add maintenance. Nexo ERP came out of that judgment and ended up as the base for later projects. Django, Laravel, Vue, React, Angular and Flutter." } },
  { period: "Feb 2026 — Actualidad", title: { es: "Programador Semi Senior — WhistleCorp S.A.S", en: "Semi-Senior Developer — WhistleCorp S.A.S" },
    body: { es: "Diseño y desarrollo de soluciones backend para procesos académicos críticos, integrando OCR, modelos LLM, agentes inteligentes y observabilidad para mejorar la operación institucional. Llevé la admisión de la revisión manual de documentos a un pipeline de OCR con escalado por capas, con validación real de cédula, reduciendo la verificación humana y los errores de digitación. Los proveedores de IA quedan detrás de puertos, para cambiarlos sin tocar el dominio. Python, Django, DRF, FastAPI, Document AI, Ollama, Sentry, GCP y Azure.", en: "Design and development of backend solutions for critical academic processes, integrating OCR, LLMs, intelligent agents and observability to improve institutional operations. I moved admissions from manual document review to a layered-escalation OCR pipeline with real national-ID validation, cutting human verification and data-entry errors. AI providers sit behind ports, so they can be swapped without touching the domain. Python, Django, DRF, FastAPI, Document AI, Ollama, Sentry, GCP and Azure." } },
  { period: "2023 — 2026", title: { es: "Desarrollador de Software — UNEMI", en: "Software Developer — UNEMI" },
    body: { es: "Automatización de procesos académicos sobre un sistema con años de historia y operación en curso: el distributivo docente, que se armaba a mano cada periodo, pasó a calcularse con reglas versionadas y auditables. Reportería para POA y acreditación, seguimiento académico e integración con Moodle. Buena parte del trabajo fue de criterio: decidir qué se podía refactorizar sin interrumpir la operación. Java (Spring Boot), Django, Svelte y React.", en: "Automating academic processes on a system with years of history and live operations: the teaching-load allocation, previously assembled by hand each term, moved to versioned, auditable rules. Reporting for institutional planning and accreditation, academic tracking and Moodle integration. Much of the work was judgment: deciding what could be refactored without interrupting operations. Java (Spring Boot), Django, Svelte and React." } },
  { period: "2022 — 2023", title: { es: "Desarrollador de Software — EPUNEMI", en: "Software Developer — EPUNEMI" },
    body: { es: "Digitalización de servicios de UNEMI Posgrados. Lideré el sistema de selección docente de posgrado: definí el modelo de datos, las reglas de puntuación y el flujo de aprobación junto a los usuarios del proceso, y lo sostuve durante convocatorias reales con plazos que no se movían. Python (Django, DRF), Svelte y PostgreSQL.", en: "Digitized UNEMI Graduate School services. I led the postgraduate faculty-selection system: I defined the data model, the scoring rules and the approval flow together with the people who run the process, and supported it through real application rounds with immovable deadlines. Python (Django, DRF), Svelte and PostgreSQL." } },
  { period: "2019 — 2021", title: { es: "Técnico de Soporte de Redes N2 — Interman", en: "Network Support Technician N2 — Interman" },
    body: { es: "Diseño y mantenimiento de redes LAN/WAN y soporte de segundo nivel con usuarios esperando del otro lado. De esa etapa viene el hábito de aislar la causa antes de tocar nada, que sigue siendo lo que más me sirve al diagnosticar sistemas en producción.", en: "LAN/WAN network design and maintenance and second-level support, with users waiting on the other end. That period is where the habit of isolating the cause before changing anything comes from — still the thing that helps me most when diagnosing production systems." } },
];
