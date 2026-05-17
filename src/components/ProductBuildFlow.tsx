import { motion, useReducedMotion } from 'framer-motion'

export type ProductFlowStep = {
  label: string
  hint: string
}

type ProductBuildFlowProps = {
  eyebrow: string
  title: string
  subtitle: string
  steps: readonly ProductFlowStep[]
}

const flowPulseTransition = {
  duration: 4.8,
  repeat: Infinity,
  ease: 'linear' as const,
}

export function ProductBuildFlow({
  eyebrow,
  title,
  subtitle,
  steps,
}: ProductBuildFlowProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className="relative mx-auto mt-10 max-w-lg overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-b from-[#080910] to-[#05060a] px-5 py-7 shadow-[0_28px_90px_-20px_rgba(0,0,0,0.55)] sm:px-8 sm:py-8"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[1.75rem] opacity-90"
        style={{
          background:
            'radial-gradient(ellipse 70% 45% at 20% -10%, rgba(99,102,241,0.14), transparent 55%), radial-gradient(ellipse 50% 40% at 100% 110%, rgba(56,189,248,0.1), transparent 45%)',
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative">
        <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/38">
          {eyebrow}
        </p>
        <h3 className="mt-2.5 text-xl font-semibold tracking-tight text-white sm:text-2xl">
          {title}
        </h3>
        <p className="mt-2 max-w-md text-sm font-normal leading-relaxed text-white/45">
          {subtitle}
        </p>

        <div className="relative mt-7 sm:mt-8">
          <div
            className="pointer-events-none absolute bottom-8 left-[9px] top-8 w-px overflow-hidden rounded-full bg-gradient-to-b from-white/[0.04] via-white/[0.14] to-white/[0.04] sm:left-[10px]"
            aria-hidden
          >
            {!reduceMotion ? (
              <motion.div
                className="absolute left-1/2 h-12 w-10 -translate-x-1/2 bg-gradient-to-b from-transparent via-sky-400/45 to-transparent blur-md"
                animate={{ y: ['-30%', '280%'] }}
                transition={flowPulseTransition}
              />
            ) : null}
          </div>

          <ol className="relative m-0 list-none p-0">
            {steps.map((step, i) => (
              <motion.li
                key={`${step.label}-${i}`}
                initial={reduceMotion ? false : { opacity: 0, filter: 'blur(4px)' }}
                whileInView={
                  reduceMotion ? undefined : { opacity: 1, filter: 'blur(0px)' }
                }
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex gap-3.5 sm:gap-4"
              >
                <div className="relative z-10 flex w-5 shrink-0 justify-center sm:w-5">
                  <motion.span
                    layout={false}
                    className="mt-1 size-2.5 shrink-0 rounded-full border border-white/22 bg-[#0b0d12] shadow-[0_0_0_3px_rgba(255,255,255,0.03),0_0_22px_rgba(125,211,252,0.12)] transition-[box-shadow,border-color,transform] duration-300 ease-out group-hover:border-cyan-200/35 group-hover:shadow-[0_0_0_3px_rgba(56,189,248,0.08),0_0_32px_rgba(125,211,252,0.35)]"
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { scale: 1.12, transition: { duration: 0.2 } }
                    }
                    whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                  />
                </div>

                <div
                  className={`min-w-0 flex-1 ${i === steps.length - 1 ? 'pb-0' : 'pb-6 sm:pb-7'}`}
                >
                  <p className="text-[0.9375rem] font-medium tracking-[-0.01em] text-white/[0.96]">
                    {step.label}
                  </p>
                  <p className="mt-1 text-[11.5px] leading-snug tracking-wide text-white/36">
                    {step.hint}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </motion.div>
  )
}
