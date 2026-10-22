import { Link } from "react-router"
import { motion, useReducedMotion } from "motion/react"
import { useLang } from "../../i18n/language.jsx"
import { ui } from "../../content/ui.js"
import { profile } from "../../content/profile.js"
import { projects } from "../../content/projects.js"
import { insights } from "../../content/insights.js"

// Tarjeta flotante que se puede tomar y mover; al soltarla vuelve a su lugar.
function Floating({ className, rotate = 0, delay = 0, children }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={`absolute hidden cursor-grab touch-none active:cursor-grabbing xl:block ${className}`}
      initial={{ opacity: 0, y: 16, rotate }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 0.6, delay, ease: [0.33, 1, 0.68, 1] }}
      drag={!reduce}
      dragSnapToOrigin
      dragTransition={{ bounceStiffness: 260, bounceDamping: 22 }}
      whileDrag={{ scale: 1.04, rotate: 0 }}
    >
      {children}
    </motion.div>
  )
}

const card = "rounded-2xl border border-border bg-surface p-4 shadow-card"

export default function Hero() {
  const { lang, t } = useLang()
  const reduce = useReducedMotion()
  const h = profile.headline[lang]
  const note = insights.find((n) => n.id === "moshoo-estres")
  const featured = projects.slice(0, 3)

  return (
    <section aria-labelledby="hero-title" className="px-3 pt-6 md:px-4">
      <div className="relative mx-auto min-h-[calc(100svh-6rem)] max-w-7xl overflow-hidden rounded-[2rem] border border-border bg-surface/50 bg-dots">
        {/* Líneas finas con nodos: unen las tarjetas con el titular (decorativo) */}
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 hidden size-full xl:block"
        >
          {["M17 32 C 22 36, 22 44, 26 46", "M83 32 C 78 36, 78 44, 74 46", "M24 80 C 27 84, 29 86, 33 86", "M78 82 C 75 85, 72 86, 67 86"].map((d) => (
            <path key={d} d={d} fill="none" stroke="var(--ink)" strokeOpacity="0.18" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          ))}
        </svg>
        {[["26%", "46%"], ["74%", "46%"], ["33%", "86%"], ["67%", "86%"]].map(([left, top]) => (
          <span
            key={left + top}
            aria-hidden="true"
            className="absolute hidden size-2 -translate-1/2 rounded-full border border-ink/30 bg-surface xl:block"
            style={{ left, top }}
          />
        ))}

        {/* Tarjetas flotantes: solo datos reales */}
        <Floating className="top-[10%] left-[3%] w-52" rotate={-5} delay={0.3}>
          <div className="rounded-md bg-butter p-4 shadow-card">
            <p className="text-sm leading-snug">{t(note.text)}</p>
            <p className="mt-3 text-xs font-semibold text-ink-soft">Insight · MOSHOO</p>
          </div>
        </Floating>
        <Floating className="top-[12%] right-[3%] w-44" rotate={3} delay={0.4}>
          <div className={card}>
            <p className="text-xs text-ink-soft">{t(ui.hero.grad)}</p>
            <p className="text-3xl font-semibold tracking-tight">2027</p>
            <p className="mt-1 text-xs text-ink-soft">Universidad Icesi</p>
          </div>
        </Floating>
        <Floating className="bottom-[12%] left-[6%] w-60" rotate={2} delay={0.5}>
          <div className={card}>
            <p className="mb-3 text-xs text-ink-soft">{t(ui.sections.projects)}</p>
            <ul className="grid gap-2">
              {featured.map((p, i) => (
                <li key={p.slug} className="flex items-center gap-2 text-sm font-semibold">
                  <span className={`size-2 rounded-full ${["bg-rose", "bg-butter", "bg-sage"][i % 3]}`} />
                  {p.title}
                </li>
              ))}
            </ul>
          </div>
        </Floating>
        <Floating className="right-[7%] bottom-[14%] w-56" rotate={-3} delay={0.6}>
          <div className={card}>
            <p className="text-xs text-ink-soft">{t(ui.hero.interest)}</p>
            <p className="mt-1 flex items-center gap-2 font-semibold">
              <span className="size-2.5 rounded-full bg-sage" />
              {t(ui.hero.interestValue)}
            </p>
          </div>
        </Floating>

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] max-w-4xl flex-col items-center justify-center px-5 py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          >
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-ink-soft">
              <span className="size-1.5 rounded-full bg-sage" />
              {t(profile.role)} · {profile.location}
            </p>
            <h1 id="hero-title" className="text-[clamp(2.6rem,5.6vw,4.75rem)] leading-[1.02]">
              {h.before}
              <br className="hidden sm:block" />{" "}
              <em className="font-serif font-normal tracking-normal text-accent-deep">{h.accent}</em>
              <br className="hidden sm:block" /> {h.after}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">{t(profile.intro)}</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                to="/#proyectos"
                className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-ink py-1.5 pr-1.5 pl-6 font-semibold text-surface"
              >
                {t(ui.hero.toProjects)}
                <span className="grid size-9 place-items-center rounded-full bg-rose text-ink transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                to="/#contacto"
                className="inline-flex min-h-12 items-center rounded-full border border-border bg-surface px-6 font-semibold transition-transform hover:-translate-y-px"
              >
                {t(ui.hero.toContact)}
              </Link>
            </div>
            {!reduce && (
              <p className="mt-10 hidden text-xs text-ink-soft xl:block [@media(pointer:coarse)]:hidden">{t(ui.hero.drag)}</p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
