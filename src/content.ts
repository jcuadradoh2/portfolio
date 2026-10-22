export type Lang = "es" | "en";

export const t = {
  nav: {
    work: { es: "Proyectos", en: "Work" },
    skills: { es: "Skills", en: "Skills" },
    trayectoria: { es: "Trayectoria", en: "Experience" },
    about: { es: "Sobre mí", en: "About me" },
    contact: { es: "Contacto", en: "Contact" },
    lab: { es: "Lab", en: "Lab" },
    cta: { es: "Hablemos", en: "Let's talk" },
  },
  hero: {
    titleA: { es: "Convierto procesos de negocio complejos en", en: "I turn complex business processes into" },
    titleB: { es: "plataformas mantenibles.", en: "maintainable platforms." },
    lead: {
      es: "He desarrollado plataformas para instituciones de educación superior donde la automatización, la inteligencia artificial y una arquitectura bien diseñada reducen el trabajo manual y permiten escalar procesos críticos. Mi experiencia combina backend, integración de IA, observabilidad y diseño de sistemas orientados a producción.",
      en: "I have built platforms for higher-education institutions where automation, artificial intelligence and well-designed architecture cut manual work and let critical processes scale. My experience combines backend engineering, AI integration, observability and production-oriented system design.",
    },
    ctaWork: { es: "Ver proyectos", en: "View projects" },
    ctaGithub: { es: "GitHub", en: "GitHub" },
    watch: { es: "Mírame en movimiento", en: "See it in motion" },
    watchSub: { es: "Showreel · Remotion", en: "Showreel · Remotion" },
    latest: { es: "Proyecto destacado", en: "Featured project" },
    scroll: { es: "Desliza", en: "Scroll down" },
    ribbon: { es: "Backend · IA Aplicada · Arquitectura · Data · Automatización · ", en: "Backend · Applied AI · Architecture · Data · Automation · " },
    services: [
      { title: { es: "Arquitectura Backend", en: "Backend Architecture" },
        body: { es: "APIs y servicios listos para producción.", en: "Production-ready APIs and services." } },
      { title: { es: "IA Aplicada", en: "Applied AI" },
        body: { es: "Agentes, RAG y OCR integrados al negocio.", en: "Agents, RAG and OCR wired into the business." } },
      { title: { es: "Datos & Automatización", en: "Data & Automation" },
        body: { es: "Menos trabajo manual. Más escala.", en: "Less manual work. More scale." } },
    ],
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
    search: { es: "Buscar por nombre o stack (ej. Django, React)", en: "Search by name or stack (e.g. Django, React)" },
    empty: { es: "Ningún proyecto coincide con la búsqueda.", en: "No project matches your search." },
    title: { es: "Código que puedes ejecutar y revisar", en: "Code you can run and read" },
    lead: {
      es: "Cada proyecto corre en local, tiene tests y deja las decisiones de arquitectura a la vista en el repositorio. AgentForge y el pipeline de OCR se muestran con código completo; el resto, con capturas del sistema en funcionamiento.",
      en: "Every project runs locally, has tests, and leaves its architectural decisions visible in the repository. AgentForge and the OCR pipeline ship with full source; the rest with screenshots of the working system.",
    },
    featured: { es: "Código completo", en: "Full source" },
    captures: { es: "Capturas", en: "Screenshots" },
    view: { es: "Ver repositorio", en: "View repo" },
    all: { es: "Ver todos los proyectos", en: "See all projects" },
    allTitle: { es: "Todos los proyectos", en: "All projects" },
    allLead: { es: "Busca por nombre o por tecnología: Python, Java, PHP, React, IA…", en: "Search by name or technology: Python, Java, PHP, React, AI…" },
    back: { es: "Volver al inicio", en: "Back to home" },
  },
  skills: {
    eyebrow: { es: "Especialización", en: "Expertise" },
    title: { es: "Áreas de especialización", en: "Areas of expertise" },
    search: { es: "Buscar tecnología (ej. Django, RAG, Docker)", en: "Search a technology (e.g. Django, RAG, Docker)" },
    clear: { es: "Limpiar búsqueda", en: "Clear search" },
    filter: { es: "Filtrar por área", en: "Filter by area" },
    all: { es: "Todas", en: "All" },
    count: { es: "tecnologías", en: "technologies" },
    count1: { es: "tecnología", en: "technology" },
    empty: { es: "Sin resultados para", en: "No results for" },
    lead: { es: "Tecnologías que utilizo habitualmente para diseñar, construir y operar sistemas de software en producción.",
            en: "The technologies I regularly use to design, build and operate software systems in production." },
  },
  about: {
    eyebrow: { es: "Sobre mí", en: "About me" },
    heading: { es: "Hola, soy Jefferson.", en: "Hi, I'm Jefferson." },
    title: { es: "Jefferson Cuadrado", en: "Jefferson Cuadrado" },
    facts: [
      { es: "Ingeniero en Sistemas Computacionales", en: "Computer Systems Engineer" },
      { es: "MSc en TI · Transformación Digital e Innovación", en: "MSc in IT · Digital Transformation & Innovation" },
      { es: "Arquitectura de software en producción", en: "Production software architecture" },
    ],
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
    timelineHeading: { es: "Experiencia profesional", en: "Professional experience" },
  },
  clients: { es: "Equipos e instituciones con los que he trabajado", en: "Teams and institutions I've worked with" },
  process: {
    eyebrow: { es: "Proceso", en: "Process" },
    title: { es: "Del problema a producción en cinco pasos", en: "From problem to production in five steps" },
    lead: { es: "Un flujo repetible que mantiene al cliente informado y al código listo para crecer.",
            en: "A repeatable flow that keeps the client informed and the code ready to grow." },
    steps: [
      { title: { es: "Descubrimiento", en: "Discovery" },
        body: { es: "Entiendo el proceso de negocio, los usuarios y las restricciones antes de proponer tecnología.",
                en: "I map the business process, the users and the constraints before proposing any technology." } },
      { title: { es: "Arquitectura", en: "Architecture" },
        body: { es: "Modelo de datos, límites del dominio e integraciones, con la arquitectura que el equipo puede sostener.",
                en: "Data model, domain boundaries and integrations, with the architecture the team can sustain." } },
      { title: { es: "Desarrollo", en: "Development" },
        body: { es: "Entregas incrementales con revisiones frecuentes y código legible para quien venga después.",
                en: "Incremental deliveries with frequent reviews and code that reads well for whoever comes next." } },
      { title: { es: "Pruebas y despliegue", en: "Testing & release" },
        body: { es: "Tests automatizados, CI/CD y despliegues sin sorpresas en producción.",
                en: "Automated tests, CI/CD and releases without surprises in production." } },
      { title: { es: "Soporte", en: "Support" },
        body: { es: "Monitoreo, mejoras continuas y documentación para que el sistema siga vivo.",
                en: "Monitoring, continuous improvements and documentation to keep the system alive." } },
    ],
  },
  cta: {
    eyebrow: { es: "¿Tienes un proyecto en mente?", en: "Got a project in mind?" },
    title: { es: "Convirtamos tu proceso en un sistema que funcione en producción.", en: "Let's turn your process into a system that works in production." },
    button: { es: "Hablemos", en: "Let's talk" },
  },
  faq: {
    eyebrow: { es: "Preguntas frecuentes", en: "FAQ" },
    title: { es: "Respuestas a lo que suelen preguntarme", en: "Answers to common questions" },
    items: [
      { q: { es: "¿Estás disponible para nuevos proyectos?", en: "Are you available for new projects?" },
        a: { es: "Sí. Tomo proyectos freelance y evalúo posiciones Backend, Full Stack o AI Engineering. Escríbeme con el contexto y coordinamos una llamada.",
             en: "Yes. I take freelance projects and consider Backend, Full Stack or AI Engineering roles. Send me the context and we'll set up a call." } },
      { q: { es: "¿Trabajas en remoto?", en: "Do you work remotely?" },
        a: { es: "Sí. Estoy en Ecuador (GMT-5) y coordino con equipos de otras zonas horarias.",
             en: "Yes. I'm based in Ecuador (GMT-5) and coordinate with teams across time zones." } },
      { q: { es: "¿Qué tipo de proyectos tomas?", en: "What kind of projects do you take on?" },
        a: { es: "Plataformas web completas, backends y APIs, sistemas internos (ERP, académicos) e integraciones con IA: agentes LLM, RAG y OCR.",
             en: "Full web platforms, backends and APIs, internal systems (ERP, academic) and AI integrations: LLM agents, RAG and OCR." } },
      { q: { es: "¿Con qué stack trabajas?", en: "Which stack do you use?" },
        a: { es: "Elijo según el problema: Python/Django, Java/Spring Boot, .NET y Laravel en backend; React, Angular y Vue en frontend; PostgreSQL como base de datos.",
             en: "It depends on the problem: Python/Django, Java/Spring Boot, .NET and Laravel on the backend; React, Angular and Vue on the frontend; PostgreSQL as the database." } },
      { q: { es: "¿Cómo empezamos?", en: "How do we get started?" },
        a: { es: "Una llamada corta para entender el problema y luego una propuesta con alcance, tiempos y entregables.",
             en: "A short call to understand the problem, then a proposal with scope, timeline and deliverables." } },
      { q: { es: "¿Entregas el código y la documentación?", en: "Do you hand over code and documentation?" },
        a: { es: "Sí: repositorio, documentación técnica y de uso, y traspaso al equipo que lo va a mantener.",
             en: "Yes: repository, technical and user documentation, and a handover to the team that will maintain it." } },
    ],
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
  keywords?: string[];
  featured: boolean;
  repo: string;
  shots: string[];
  private?: boolean;
  live?: string;
  doc?: { href: string; label: { es: string; en: string } };
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
    keywords: ["Java", "Spring", "LLM", "IA", "AI", "Anthropic", "Claude", "REST", "Backend"],
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
    keywords: ["Django REST", "IA", "AI", "PDF", "Backend", "REST"],
    featured: true,
    repo: "https://github.com/jcuadradoh2/academic-modules-showcase/tree/main/backend/ocr",
    shots: ["ocr-dark.webp"],
  },
  {
    key: "atlas",
    name: "Atlas",
    tagline: {
      es: "Asistente operativo con agentes de IA y RAG",
      en: "Operational assistant with AI agents and RAG",
    },
    description: {
      es: "Prueba de concepto pensada para llevarse a la implementación en sistemas de gestión académica: un agente LangGraph que decide si responder con datos vivos del ERP, con políticas internas (RAG con citas verificadas) o con ambos, y se abstiene cuando no hay evidencia. Los permisos los aplica el servidor, no el modelo. Incluye panel de administración con la traza completa de cada turno, gestión de documentos, evaluación con Ragas y notificaciones por Telegram con respaldo por correo.",
      en: "Proof of concept designed to be rolled out in academic management systems: a LangGraph agent that decides whether to answer from live ERP data, from internal policies (RAG with verified citations) or both, and abstains when there is no evidence. Permissions are enforced by the server, not the model. Includes an admin panel with the full trace of every turn, document management, Ragas evaluation and Telegram notifications with email fallback.",
    },
    tags: ["Python", "Django · DRF", "LangGraph", "Gemini", "pgvector", "React 19"],
    keywords: ["Django REST Framework", "LLM", "IA", "AI", "RAG", "Agentes", "PostgreSQL", "React", "JavaScript", "Full Stack"],
    featured: false,
    repo: "",
    private: true,
    doc: { href: "docs/atlas-instructivo.pdf", label: { es: "Ver instructivo (PDF)", en: "User guide (PDF, Spanish)" } },
    shots: ["chat-cliente.png", "chat-mixed.png", "traza.png", "panel-resumen.png", "conocimiento-visor.png"],
  },
  {
    key: "intermen",
    name: "Intermen",
    tagline: {
      es: "Cobranza y cortes de un ISP, conectados al router",
      en: "ISP billing and service cuts, wired to the router",
    },
    description: {
      es: "Sistema en producción para un proveedor de internet: sitio web con verificación de cobertura, panel de clientes, cobros, pagos y cortes con permisos por módulo, y app móvil para Android e iOS. Se conecta por SSH a un router Ubiquiti: cortar agrega la IP del cliente al grupo de firewall MOROSOS y registrar el pago la quita, con un solo commit por operación y ping previo a cada equipo. El corte automático corre cada noche al vencer el plazo de pago, cada pago genera una factura PDF por correo y la Gerencia recibe los avisos. Corre con Docker en Google Cloud, dentro de la capa gratuita.",
      en: "Production system for an internet service provider: public site with coverage lookup, an admin panel for customers, billing, payments and service cuts with per-module permissions, and an Android/iOS mobile app. It connects over SSH to a Ubiquiti router: cutting adds the customer's IP to the MOROSOS firewall group and recording the payment removes it, with a single commit per operation and a ping to each device first. Automatic cuts run nightly once the payment window closes, every payment emails a PDF invoice and management gets the alerts. Runs on Docker in Google Cloud, inside the free tier.",
    },
    tags: ["Django · DRF", "React 19", "Expo · React Native", "PostgreSQL", "Paramiko SSH", "Docker · GCP"],
    keywords: ["Python", "Django REST Framework", "React", "TypeScript", "React Native", "Expo", "Android", "iOS", "Móvil", "Mobile", "Redes", "Networking", "Router", "Ubiquiti", "SSH", "WeasyPrint", "PDF", "Caddy", "Google Cloud", "Full Stack", "ISP", "Facturación", "Billing"],
    featured: false,
    repo: "",
    private: true,
    live: "https://intermen.net",
    shots: ["panel-inicio.webp", "cortes.webp", "app-movil.webp", "cobros.webp", "sitio-web.webp"],
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
    keywords: ["Ciencia de datos", "Análisis de datos", "Data Analysis", "Estadística", "matplotlib", "NumPy"],
    featured: false,
    repo: "https://github.com/jcuadradoh2/telco-churn-eda",
    shots: ["tenure-densidad.png", "churn-categorias.png", "correlacion.png"],
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
    keywords: ["dotnet", "C Sharp", "Entity Framework", "Scraping", "Backend"],
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
    keywords: ["Python", "Django REST Framework", "JavaScript", "Firma electrónica", "PDF", "Full Stack"],
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
    keywords: ["Angular", "JavaScript", "Frontend", "Dashboard", "Accesibilidad"],
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
    keywords: ["Figma", "UI", "UX", "CSS", "Accesibilidad", "Accessibility", "JavaScript", "Frontend"],
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
    keywords: ["React", "JavaScript", "Frontend", "Animación", "Animation", "Three.js"],
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
    keywords: ["PHP", "Vue", "Vue.js", "JavaScript", "Postgres", "SQL", "Backend", "Full Stack", "ERP"],
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
    keywords: ["Android", "iOS", "Móvil", "App", "E-commerce"],
    featured: false,
    repo: "https://github.com/jcuadradoh2/flutter_tienda_virtual",
    shots: ["home-mock.png"],
  },
];

export const skillGroups = [
  { title: { es: "Backend & APIs", en: "Backend & APIs" }, items: ["Python · Django · DRF", "FastAPI", "Java · Spring Boot", "PHP · Laravel", ".NET · C# · Entity Framework · ADO.NET", "Celery · Redis", "REST · JWT · SSE · WebSockets"] },
  { title: { es: "Ingeniería de Software", en: "Software Engineering" }, items: ["Arquitectura hexagonal · Clean Architecture", "SOLID", "DRY · KISS · YAGNI", "Patrones de diseño", "Clean Code · Code review", "Testing · JUnit · xUnit · pytest", "Concurrencia · Idempotencia"] },
  { title: { es: "IA Aplicada & LLMs", en: "Applied AI & LLMs" }, items: ["LLMs · Prompt engineering", "LangChain · LangGraph", "Agentes inteligentes · Tool use", "Anthropic · Gemini · OpenAI · Ollama", "RAG · pgvector · Ragas", "Visión multimodal", "Document AI · OCR · PaddleOCR"] },
  { title: { es: "Datos & Analítica", en: "Data & Analytics" }, items: ["PostgreSQL · SQLite", "SQL avanzado · ODBC", "Pandas · NumPy · seaborn", "EDA · scikit-learn", "Apache Superset", "Modelado de datos"] },
  { title: { es: "DevOps & Cloud", en: "DevOps & Cloud" }, items: ["Docker · Git", "CI/CD · Linux · Nginx", "GCP · Azure", "Sentry", "Gunicorn · Uvicorn"] },
  { title: { es: "Automatización & Integraciones", en: "Automation & Integrations" }, items: ["Telegram · webhooks", "Celery (async)", "Moodle", "Firma electrónica (PAdES)", "Pasarelas de pago (PlaceToPay)", "LDAP · Active Directory", "Scraping · Polly · AngleSharp"] },
  { title: { es: "Frontend, Móvil & Procesos", en: "Frontend, Mobile & Process" }, items: ["React · Angular · Vue · Svelte", "TypeScript · JS", "Flutter · Dart", "Three.js · WebGL · Remotion", "Figma · Design Systems · WCAG", "Bootstrap · CSS3", "BPMN · Scrum"] },
];

type Texto = { es: string; en: string };
export type TimelineItem = { period: string; title: Texto; body: Texto; link?: { href: string; label: Texto } };
export const timeline: TimelineItem[] = [
  { period: "2024 — Actualidad", title: { es: "Programador Full-Stack Senior — Freelance", en: "Senior Full-Stack Developer — Freelance" },
    body: { es: "Diseño y llevo a producción plataformas completas para clientes, desde el modelo de datos hasta el despliegue y el soporte posterior. La decisión recurrente es cuánta arquitectura sostiene un equipo pequeño: separo el dominio de la infraestructura donde el cliente va a cambiar de proveedor, y evito capas que solo agregarían mantenimiento. Nexo ERP nació de ese criterio y terminó sirviendo de base para proyectos posteriores. Django, Laravel, Vue, React, Angular y Flutter.", en: "I design and ship full platforms for clients, from the data model to deployment and ongoing support. The recurring decision is how much architecture a small team can sustain: I separate domain from infrastructure where the client will change providers, and avoid layers that would only add maintenance. Nexo ERP came out of that judgment and ended up as the base for later projects. Django, Laravel, Vue, React, Angular and Flutter." } },
  { period: "Feb 2026 — Actualidad", title: { es: "Programador Semi Senior — WhistleCorp S.A.S", en: "Semi-Senior Developer — WhistleCorp S.A.S" },
    link: { href: "firma/", label: { es: "Firma de correo", en: "Email signature" } },
    body: { es: "Diseño y desarrollo de soluciones backend para procesos académicos críticos, integrando OCR, modelos LLM, agentes inteligentes y observabilidad para mejorar la operación institucional. Llevé la admisión de la revisión manual de documentos a un pipeline de OCR con escalado por capas, con validación real de cédula, reduciendo la verificación humana y los errores de digitación. Los proveedores de IA quedan detrás de puertos, para cambiarlos sin tocar el dominio. Python, Django, DRF, FastAPI, Document AI, Ollama, Sentry, GCP y Azure.", en: "Design and development of backend solutions for critical academic processes, integrating OCR, LLMs, intelligent agents and observability to improve institutional operations. I moved admissions from manual document review to a layered-escalation OCR pipeline with real national-ID validation, cutting human verification and data-entry errors. AI providers sit behind ports, so they can be swapped without touching the domain. Python, Django, DRF, FastAPI, Document AI, Ollama, Sentry, GCP and Azure." } },
  { period: "2023 — 2026", title: { es: "Desarrollador de Software — UNEMI", en: "Software Developer — UNEMI" },
    body: { es: "Automatización de procesos académicos sobre un sistema con años de historia y operación en curso: el distributivo docente, que se armaba a mano cada periodo, pasó a calcularse con reglas versionadas y auditables. Reportería para POA y acreditación, seguimiento académico e integración con Moodle. Buena parte del trabajo fue de criterio: decidir qué se podía refactorizar sin interrumpir la operación. Java (Spring Boot), Django, Svelte y React.", en: "Automating academic processes on a system with years of history and live operations: the teaching-load allocation, previously assembled by hand each term, moved to versioned, auditable rules. Reporting for institutional planning and accreditation, academic tracking and Moodle integration. Much of the work was judgment: deciding what could be refactored without interrupting operations. Java (Spring Boot), Django, Svelte and React." } },
  { period: "2022 — 2023", title: { es: "Desarrollador de Software — EPUNEMI", en: "Software Developer — EPUNEMI" },
    body: { es: "Digitalización de servicios de UNEMI Posgrados. Lideré el sistema de selección docente de posgrado: definí el modelo de datos, las reglas de puntuación y el flujo de aprobación junto a los usuarios del proceso, y lo sostuve durante convocatorias reales con plazos que no se movían. Python (Django, DRF), Svelte y PostgreSQL.", en: "Digitized UNEMI Graduate School services. I led the postgraduate faculty-selection system: I defined the data model, the scoring rules and the approval flow together with the people who run the process, and supported it through real application rounds with immovable deadlines. Python (Django, DRF), Svelte and PostgreSQL." } },
  { period: "2019 — 2021", title: { es: "Técnico de Soporte de Redes N2 — Interman", en: "Network Support Technician N2 — Interman" },
    body: { es: "Diseño y mantenimiento de redes LAN/WAN y soporte de segundo nivel con usuarios esperando del otro lado. De esa etapa viene el hábito de aislar la causa antes de tocar nada, que sigue siendo lo que más me sirve al diagnosticar sistemas en producción.", en: "LAN/WAN network design and maintenance and second-level support, with users waiting on the other end. That period is where the habit of isolating the cause before changing anything comes from — still the thing that helps me most when diagnosing production systems." } },
];
