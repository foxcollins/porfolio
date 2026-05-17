/** Contenido estático — alineado al CV (CV_luis_collins2026.pdf). Edita y vuelve a desplegar. */

export interface SiteConfig {
  name: string
  role: string
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
  bio:
    'Desarrollador Full Stack enfocado en crear productos digitales escalables, combinando arquitectura en la nube, ingeniería de datos, automatización e Inteligencia Artificial para impulsar eficiencia y transformación digital.',
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
    title: 'Enterprise Analytics Dashboard',
    description: 'Panel analítico para métricas en tiempo real.',
    category: 'fullstack',
    tags: ['React', 'Node.js', 'AWS'],
    imageAlt: 'Captura de un dashboard de datos',
    image:
      'https://www.muycomputerpro.com/wp-content/uploads/2021/05/aws-finspace-analiticas-financieras.jpg',
    href: 'https://github.com/foxcollins/enterprise-analytics-dashboard',
  },
  {
    id: '2',
    title: 'Cloud Infrastructure Automation',
    description: 'IaC y despliegue reproducible en la nube.',
    category: 'infra',
    tags: ['Terraform', 'Docker', 'Azure'],
    imageAlt: 'Infraestructura en la nube',
    image: 'https://cdn.craft.cloud/7afb4613-485e-4c7c-a2fa-5b9b6a02c869/assets/cloud-automation.webp',
  },
  {
    id: '3',
    title: 'AI Integration Service',
    description: 'API para integrar modelos de lenguaje en productos.',
    category: 'ai',
    tags: ['Python', 'OpenAI', 'FastAPI'],
    imageAlt: 'Representación de red neuronal',
    image: 'https://cdn.digitalisationworld.com/uploads/images/81de4a5fe15de9e8af9f655bbf3df3df0450cefadf27350e.jpg'
  },
]

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
