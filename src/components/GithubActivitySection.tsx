import { motion, useReducedMotion } from 'framer-motion'
import { GitHubCalendar } from 'react-github-calendar'
import 'react-github-calendar/tooltips.css'

type GithubActivitySectionProps = {
  username: string
  eyebrow: string
  title: string
  lead: string
  buildingChips: readonly string[]
  profileUrl: string
}

const calendarTheme = {
  light: [
    'rgba(0,0,0,0.06)',
    'rgba(56,189,248,0.22)',
    'rgba(56,189,248,0.42)',
    'rgba(96,165,250,0.62)',
    'rgba(147,197,253,0.85)',
  ],
  dark: [
    'rgba(255,255,255,0.06)',
    'rgba(56,189,248,0.22)',
    'rgba(56,189,248,0.42)',
    'rgba(96,165,250,0.62)',
    'rgba(147,197,253,0.85)',
  ],
}

export function GithubActivitySection({
  username,
  eyebrow,
  title,
  lead,
  buildingChips,
  profileUrl,
}: GithubActivitySectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      id="actividad-github"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16"
      aria-labelledby="github-activity-heading"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-navy-800">
        {eyebrow}
      </p>
      <h2
        id="github-activity-heading"
        className="mt-2 text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl"
      >
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-navy-800">
        {lead}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {buildingChips.map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-navy-200/80 bg-white/55 px-3 py-1 text-xs font-medium text-navy-900 backdrop-blur-sm"
          >
            {chip}
          </span>
        ))}
      </div>

      <div className="mt-8 max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#080910] to-[#05060a] p-5 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.45)] sm:p-7">
          <div
            className="pointer-events-none absolute inset-0 opacity-90"
            style={{
              background:
                'radial-gradient(ellipse 55% 40% at 80% -10%, rgba(56,189,248,0.08), transparent 50%)',
            }}
          />
          <p className="relative text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
            Actividad en GitHub · último año
          </p>
          <div className="relative mt-4 overflow-x-auto pb-1 [-webkit-overflow-scrolling:touch]">
            <div className="inline-block min-w-min max-w-full [&_svg]:max-w-none">
              <GitHubCalendar
                username={username}
                colorScheme="dark"
                fontSize={12}
                blockSize={11}
                blockMargin={4}
                blockRadius={2}
                theme={calendarTheme}
                labels={{
                  totalCount: '{{count}} contribuciones en {{year}}',
                }}
                errorMessage={`No se pudo cargar el calendario de ${username}.`}
              />
            </div>
          </div>
          <p className="relative mt-4 text-center text-[11px] text-white/35 sm:text-left">
            Solo contribuciones públicas.{' '}
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400/90 underline-offset-2 hover:underline"
            >
              Ver perfil completo →
            </a>
          </p>
        </div>
      </div>
    </motion.section>
  )
}
