/** Contenido estático — alineado al CV (CV_luis_collins2026.pdf). Edita y vuelve a desplegar. */

export interface SiteConfig {
  name: string
  role: string
  /** Una línea: qué resultado entregas (no lista de frameworks). */
  tagline: string
  bio: string
  contact: {
    email: string
    phone: string
    /** Dirección completa si quieres mostrarla */
    address: string
    /** Línea corta para cabeceras / pie */
    location: string
  }
  githubUsername: string
  social: {
    github: string
    linkedin?: string
    twitter?: string
  }
}

export const site: SiteConfig = {
  name: 'Luis Collins',
  role: 'Full Stack Developer',
  tagline:
    'Construyo sistemas web escalables: automatización, integraciones, datos e IA aplicada al negocio.',
  bio:
    'Priorizo el producto que resuelve un problema real: arquitectura clara, entregas iterativas y operación estable en la nube. Colaboro con equipos y negocio pensando en mantenimiento, coste y cómo evoluciona el sistema.',
  contact: {
    email: 'luiscollinscor@gmail.com',
    phone: '+51 916369840',
    address: 'Jr. Opalos 2151, La Huayrona, SJL — Lima, Perú',
    location: 'Lima, Perú',
  },
  githubUsername: 'foxcollins',
  social: {
    github: 'https://github.com/foxcollins',
  },
}

export type ProjectCategory = 'all' | 'fullstack' | 'ai' | 'infra'

export type Project = {
  id: string
  title: string
  /** Valor / problema que resuelve (visible y destacado en la tarjeta). */
  valueSummary: string
  description: string
  category: Exclude<ProjectCategory, 'all'>
  tags: string[]
  /** Texto alternativo obligatorio (accesibilidad). */
  imageAlt: string
  /**
   * Imagen de portada.
   * - Archivo en `public/`: por ejemplo `projects/mi-app.png` (sin barra inicial).
   * - O URL absoluta: `https://...`
   */
  image?: string
  href?: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Analytics para decisiones en tiempo real',
    valueSummary:
      'Centraliza métricas operativas y comerciales para que el negocio deje de depender de planillas y reportes manuales.',
    description:
      'Panel administrativo, APIs de agregación y despliegue tolerante a picos de uso; pensado para escalar lecturas y mantener costes controlados.',
    category: 'fullstack',
    tags: ['React', 'Node.js', 'AWS'],
    imageAlt: 'Captura de un dashboard de datos',
    image:
      'https://www.muycomputerpro.com/wp-content/uploads/2021/05/aws-finspace-analiticas-financieras.jpg',
    href: 'https://github.com/foxcollins/enterprise-analytics-dashboard',
  },
  {
    id: '2',
    title: 'Infraestructura repetible en la nube',
    valueSummary:
      'Entornos reproducibles y despliegues predecibles: menos sorpresas en producción y más velocidad al incorporar cambios.',
    description:
      'Infraestructura como código, contenedores y pipelines alineados a buenas prácticas para equipos que van a crecer.',
    category: 'infra',
    tags: ['Terraform', 'Docker', 'Azure'],
    imageAlt: 'Infraestructura en la nube',
    image:
      'https://cdn.craft.cloud/7afb4613-485e-4c7c-a2fa-5b9b6a02c869/assets/cloud-automation.webp',
  },
  {
    id: '3',
    title: 'Capa de IA en tu producto',
    valueSummary:
      'Expone capacidades de modelo (resumen, clasificación, asistencia) vía API segura para integrarlas en flujos existentes sin reescribir todo el sistema.',
    description:
      'Servicio FastAPI async, límites de uso, trazas básicas y patrones listos para evolucionar hacia multi-modelo o agentes cuando tenga sentido.',
    category: 'ai',
    tags: ['Python', 'OpenAI', 'FastAPI'],
    imageAlt: 'Representación de red neuronal',
    image:
      'https://cdn.digitalisationworld.com/uploads/images/81de4a5fe15de9e8af9f655bbf3df3df0450cefadf27350e.jpg',
  },
]

/** Bloque de posicionamiento: qué construyes y para qué (edítalo con tu voz). */
export const whatIBuild = {
  eyebrow: 'Enfoque',
  headline: 'Qué tipo de sistemas construyo',
  intro:
    'No me limito a pantallas: diseño soluciones que integren procesos, datos y automatización, pensando en propiedad del código y en cómo el sistema convive con el negocio día a día.',
  bullets: [
    'Plataformas con panel administrativo, roles y flujos reales (más allá de landings).',
    'Integraciones entre APIs de terceros, colas y trabajos en segundo plano.',
    'Automatización de procesos repetitivos y piezas de IA aplicada donde aporta ROI.',
    'Arquitectura lista para crecer: límites claros entre capas, observabilidad básica y despliegue en la nube.',
  ],
} as const

/** Franja tipo “arquitectura mental” — editable; puedes sustituir por un diagrama tuyo en `public/`. */
export const architectureStrip = [
  { label: 'Experiencia / cliente' },
  { label: 'API & reglas de negocio' },
  { label: 'Colas & jobs' },
  { label: 'IA / automatización' },
  { label: 'Datos' },
] as const

export const currentExplorations = [
  'IA aplicada a procesos de negocio',
  'Arquitectura SaaS y multi-tenant',
  'Automatización con orquestadores (p. ej. n8n)',
  'Pipelines ETL ligeros',
  'Integraciones tipo MCP / copilots sobre datos internos',
] as const

/** Skills del CV (sección Skills). */
export const skillPills = [
  'Desarrollo Full Stack',
  'Diseño y consumo de APIs REST',
  'Arquitectura de aplicaciones web',
  'Integración de servicios cloud',
  'Automatización de procesos',
  'Ingeniería y procesamiento de datos',
  'Integración de Inteligencia Artificial',
  'Desarrollo de aplicaciones móviles',
] as const

export type EducationEntry = {
  period: string
  institution: string
  degree: string
}

export const education: EducationEntry[] = [
  {
    period: '2012 — 2015',
    institution: 'UPTNM Ludovico Silva',
    degree: 'Ingeniero en Informática',
  },
  {
    period: '2009 — 2012',
    institution: 'IUT Cúmana',
    degree: 'TSU en Informática',
  },
]

export type LanguageEntry = {
  language: string
  level: string
}

export const languages: LanguageEntry[] = [
  { language: 'Español', level: 'Nativo' },
  { language: 'Inglés', level: 'Básico' },
]

export type ExperienceEntry = {
  company: string
  location: string
  role: string
  period: string
  summary: string
}

/**
 * Experiencia laboral según el CV (orden aproximado reciente → antiguo).
 * En el PDF algunas fechas aparecen desalineadas respecto al nombre de la empresa;
 * revisa y ajusta periodos si tu versión final del CV difiere.
 */
export const experience: ExperienceEntry[] = [
  {
    company: 'FLUXUS',
    location: 'Perú',
    role: 'Programador Full Stack',
    period: '2024 — 2026',
    summary:
      'Desarrollo full stack para productos digitales: APIs, integraciones y despliegues en entornos cloud.',
  },
  {
    company: 'NATIVAPPS',
    location: 'Colombia',
    role: 'Programador Full Stack',
    period: '2023 — 2024',
    summary:
      'Desarrollo web full stack, automatización de procesos y trabajo en equipo bajo metodologías ágiles.',
  },
  {
    company: 'BLEND STUDIO',
    location: 'Perú',
    role: 'Programador Full Stack',
    period: '2018 — 2022',
    summary:
      'Implementación y mantenimiento de aplicaciones web, APIs y entregas continuas en cliente.',
  },
  {
    company: 'MOVLIM',
    location: 'Perú',
    role: 'Programador (freelance)',
    period: '2018',
    summary: 'Desarrollo por proyecto como freelance.',
  },
  {
    company: 'OPTIMOUS',
    location: 'Argentina',
    role: 'Programador (freelance)',
    period: '2018',
    summary: 'Desarrollo por proyecto como freelance.',
  },
  {
    company: 'IMAGINA COLOMBIA',
    location: 'Colombia',
    role: 'Programador Web (freelance)',
    period: '2016',
    summary: 'Desarrollo web freelance para clientes en Colombia.',
  },
  {
    company: 'EVA WEB',
    location: 'Venezuela',
    role: 'Programador Web',
    period: '2016',
    summary: 'Desarrollo y soporte de sitios y aplicaciones web.',
  },
]
