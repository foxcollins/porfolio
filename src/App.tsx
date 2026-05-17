import { useMemo, useState, type FormEvent } from 'react'
import profilePhoto from './assets/profile.png'
import { WEB3FORMS_ACCESS_KEY } from './config/web3forms'
import {
  type ProjectCategory,
  education,
  experience,
  languages,
  projects,
  site,
  skillPills,
} from './content/site'

const filters: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'ai', label: 'IA & datos' },
  { id: 'infra', label: 'Infraestructura' },
]

function projectCoverSrc(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl
  const base = import.meta.env.BASE_URL
  const path = pathOrUrl.replace(/^\//, '')
  return `${base}${path}`
}

function App() {
  const [active, setActive] = useState<ProjectCategory>('all')
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactMessage, setContactMessage] = useState('')
  const [contactState, setContactState] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle')
  const [contactError, setContactError] = useState<string | null>(null)

  const filtered = useMemo(() => {
    if (active === 'all') return projects
    return projects.filter((p) => p.category === active)
  }, [active])

  async function handleContactSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setContactError(null)
    setContactState('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: contactName.trim(),
          email: contactEmail.trim(),
          message: contactMessage.trim(),
          subject: `Contacto desde portafolio — ${site.name}`,
        }),
      })
      const data: { success?: boolean; message?: string } = await res.json()
      if (data.success) {
        setContactState('success')
        setContactName('')
        setContactEmail('')
        setContactMessage('')
      } else {
        setContactState('error')
        setContactError(data.message ?? 'No se pudo enviar el mensaje.')
      }
    } catch {
      setContactState('error')
      setContactError('Error de red. Inténtalo de nuevo.')
    }
  }

  return (
    <>
      {/* Capa fija: al hacer scroll el contenido se mueve y esto permanece (efecto profundo, sin JS). */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[linear-gradient(165deg,#e4e9f3_0%,#f5f7fc_38%,#dce3f0_100%)]" />
        <div className="absolute -left-[25%] -top-[20%] h-[min(85vw,42rem)] w-[min(85vw,42rem)] rounded-full bg-navy-900/[0.09] blur-3xl" />
        <div className="absolute -right-[20%] top-[15%] h-[min(70vw,36rem)] w-[min(70vw,36rem)] rounded-full bg-sky-300/35 blur-3xl" />
        <div className="absolute -bottom-[25%] left-[15%] h-[min(90vw,48rem)] w-[min(90vw,48rem)] rounded-full bg-navy-200/50 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_50%_0%,rgba(255,255,255,0.55),transparent_65%)]" />
      </div>

      <div className="relative min-h-svh text-navy-900">
      <header className="sticky top-0 z-20 border-b border-white/40 bg-white/65 backdrop-blur-xl supports-backdrop-filter:bg-white/55">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a
            href="#inicio"
            className="text-sm font-semibold tracking-[0.2em] text-navy-900"
          >
            {site.name.toUpperCase()}
          </a>
          <nav className="hidden items-center gap-6 text-sm text-navy-800 md:flex">
            <a className="hover:text-navy-900" href="#inicio">
              Inicio
            </a>
            <a className="hover:text-navy-900" href="#experiencia">
              Experiencia
            </a>
            <a className="hover:text-navy-900" href="#portfolio">
              Portafolio
            </a>
            <a className="hover:text-navy-900" href="#contacto">
              Contacto
            </a>
          </nav>
          <a
            href="CV_luis_collins2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-[var(--color-navy-900)] px-4 py-2 text-sm font-medium text-white hover:bg-navy-800"
          >
            CV
          </a>
        </div>
      </header>

      <main>
        <section
          id="inicio"
          className="border-b border-white/30 bg-white/45 backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-16 text-center sm:px-6 lg:py-24">
            <img
              src={profilePhoto}
              alt={`${site.name}, foto de perfil`}
              width={176}
              height={176}
              className="size-36 rounded-full object-cover shadow-xl ring-4 ring-white sm:size-44"
            />
            <p className="mt-8 text-xs font-semibold tracking-[0.25em] text-navy-800">
              {site.role.toUpperCase()}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
              {site.name}
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-navy-800">
              {site.bio}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#portfolio"
                className="rounded-md bg-[var(--color-navy-900)] px-5 py-2.5 text-sm font-medium text-white hover:bg-navy-800"
              >
                Ver trabajo
              </a>
              <a
                href="#contacto"
                className="rounded-md border border-navy-200 bg-white px-5 py-2.5 text-sm font-medium text-navy-900 hover:border-navy-300"
              >
                Contacto
              </a>
            </div>
          </div>
        </section>

        <section
          id="portfolio"
          className="border-y border-white/30 bg-white/40 backdrop-blur-md"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-semibold text-navy-900">Proyectos</h2>

            <div className="mt-8 flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActive(f.id)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                    active === f.id
                      ? 'bg-[var(--color-navy-900)] text-white'
                      : 'bg-white text-navy-900 ring-1 ring-navy-200 hover:ring-navy-300'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <li
                  key={p.id}
                  className="flex flex-col overflow-hidden rounded-xl border border-white/50 bg-white/75 shadow-sm shadow-navy-900/5 ring-1 ring-navy-900/5 backdrop-blur-sm"
                >
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-navy-100 to-navy-200">
                    {p.image ? (
                      <img
                        src={projectCoverSrc(p.image)}
                        alt={p.imageAlt}
                        className="size-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div
                        className="size-full"
                        role="img"
                        aria-label={p.imageAlt}
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-semibold text-navy-900">{p.title}</h3>
                    <p className="mt-1 text-sm text-navy-800">{p.description}</p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <li key={t}>
                          <span className="rounded bg-navy-100 px-2 py-0.5 text-xs text-navy-900">
                            {t}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {p.href ? (
                      <a
                        href={p.href}
                        className="mt-4 text-sm font-medium text-navy-900 underline-offset-4 hover:underline"
                      >
                        Ver proyecto
                      </a>
                    ) : (
                      <span className="mt-4 text-sm text-navy-800/70">
                        Añade <code className="text-xs">href</code> en el contenido
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="actividad-github"
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-800">
            Open source activity
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-navy-900">
            GitHub contributions
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-navy-800">
            Aquí conecta el mapa de calor (por ejemplo{' '}
            <code className="rounded bg-navy-100 px-1 py-0.5 text-xs">
              react-activity-calendar
            </code>
            ) con el usuario{' '}
            <span className="font-medium">{site.githubUsername}</span>.
          </p>
          <div className="mt-6 rounded-xl border border-dashed border-navy-300/50 bg-white/50 px-6 py-16 text-center text-sm text-navy-800 backdrop-blur-sm">
            Mapa de calor (placeholder)
          </div>
        </section>

        <section
          id="experiencia"
          className="border-t border-white/35 bg-white/35 backdrop-blur-md"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
            <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-20">
              <div className="space-y-14">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-800">
                    Technical stack
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-navy-900 sm:text-2xl">
                    Core Skills
                  </h2>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {skillPills.map((s) => (
                      <li key={s}>
                        <span className="inline-flex rounded-full bg-sky-100 px-3.5 py-1.5 text-xs font-medium text-sky-950">
                          {s}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-navy-900 sm:text-2xl">
                    Education
                  </h2>
                  <ul className="mt-6 space-y-6">
                    {education.map((ed) => (
                      <li key={`${ed.period}-${ed.institution}`}>
                        <p className="text-sm font-medium text-navy-900">
                          <span className="text-navy-800">{ed.period}</span>
                          <span className="mx-2 text-navy-300">|</span>
                          <span>{ed.institution}</span>
                        </p>
                        <p className="mt-1 text-sm text-navy-800">{ed.degree}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-800">
                    Languages
                  </p>
                  <h2 className="mt-1 text-lg font-semibold text-navy-900">
                    Idiomas
                  </h2>
                  <ul className="mt-4 space-y-2">
                    {languages.map((row) => (
                      <li
                        key={row.language}
                        className="flex justify-between gap-4 text-sm text-navy-800"
                      >
                        <span className="font-medium text-navy-900">
                          {row.language}
                        </span>
                        <span className="text-navy-800">{row.level}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-800">
                  Professional journey
                </p>
                <h2 className="mt-1 text-xl font-semibold text-navy-900 sm:text-2xl">
                  Work Experience
                </h2>
                <ul className="relative mt-10 space-y-10 border-l-2 border-navy-100 pl-8">
                  {experience.map((job) => (
                    <li key={`${job.company}-${job.period}`} className="relative">
                      <span
                        className="absolute -left-[25px] top-1.5 size-3 rounded-full border-2 border-[var(--color-navy-900)] bg-white"
                        aria-hidden
                      />
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                        <p className="text-sm font-semibold tracking-wide text-navy-900 uppercase">
                          {job.company},{' '}
                          <span className="text-navy-800">
                            {job.location.toUpperCase()}
                          </span>
                        </p>
                        <p className="shrink-0 text-xs font-medium tabular-nums text-navy-800 sm:text-right">
                          {job.period}
                        </p>
                      </div>
                      <p className="mt-2 text-xs font-semibold tracking-[0.15em] text-navy-800 uppercase">
                        {job.role}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-navy-800">
                        {job.summary}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        id="contacto"
        className="border-t border-white/20 bg-navy-900 text-navy-100"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Hablemos de tu próximo proyecto.
            </h2>
            <ul className="mt-6 space-y-2 text-sm">
              <li>{site.contact.phone}</li>
              <li>
                <a
                  className="underline-offset-4 hover:underline"
                  href={`mailto:${site.contact.email}`}
                >
                  {site.contact.email}
                </a>
              </li>
              <li className="max-w-md text-pretty">{site.contact.address}</li>
            </ul>
          </div>
          <form
            className="space-y-4 rounded-xl bg-navy-800/50 p-6 ring-1 ring-white/10"
            onSubmit={handleContactSubmit}
          >
            <div>
              <label className="block text-xs font-medium text-navy-200" htmlFor="name">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                value={contactName}
                onChange={(e) => {
                  setContactName(e.target.value)
                  if (contactState === 'success') setContactState('idle')
                }}
                disabled={contactState === 'sending'}
                className="mt-1 w-full rounded-md border border-white/10 bg-navy-900/80 px-3 py-2 text-sm text-white outline-none ring-white/20 focus:ring-2 disabled:opacity-60"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-navy-200" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={contactEmail}
                onChange={(e) => {
                  setContactEmail(e.target.value)
                  if (contactState === 'success') setContactState('idle')
                }}
                disabled={contactState === 'sending'}
                className="mt-1 w-full rounded-md border border-white/10 bg-navy-900/80 px-3 py-2 text-sm text-white outline-none ring-white/20 focus:ring-2 disabled:opacity-60"
              />
            </div>
            <div>
              <label
                className="block text-xs font-medium text-navy-200"
                htmlFor="message"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={contactMessage}
                onChange={(e) => {
                  setContactMessage(e.target.value)
                  if (contactState === 'success') setContactState('idle')
                }}
                disabled={contactState === 'sending'}
                className="mt-1 w-full rounded-md border border-white/10 bg-navy-900/80 px-3 py-2 text-sm text-white outline-none ring-white/20 focus:ring-2 disabled:opacity-60"
              />
            </div>
            {contactState === 'success' ? (
              <p className="text-sm font-medium text-emerald-300" role="status">
                Mensaje enviado. Te responderé pronto.
              </p>
            ) : null}
            {contactState === 'error' && contactError ? (
              <p className="text-sm font-medium text-red-300" role="alert">
                {contactError}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={contactState === 'sending'}
              className="w-full rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-navy-900 hover:bg-navy-100 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {contactState === 'sending' ? 'Enviando…' : 'Enviar'}
            </button>
          </form>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-navy-300 sm:flex-row sm:px-6">
            <p>© {new Date().getFullYear()} {site.name}</p>
            <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
              {site.social.linkedin ? (
                <a className="hover:text-white" href={site.social.linkedin}>
                  LinkedIn
                </a>
              ) : null}
              <a className="hover:text-white" href={site.social.github}>
                GitHub
              </a>
              {site.social.twitter ? (
                <a className="hover:text-white" href={site.social.twitter}>
                  Twitter
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

export default App
