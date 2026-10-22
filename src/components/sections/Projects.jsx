import { useLayoutEffect, useRef, useState } from "react"
import { Link } from "react-router"
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "motion/react"
import { useLang } from "../../i18n/language.jsx"
import { ui } from "../../content/ui.js"
import { profile } from "../../content/profile.js"
import { projects } from "../../content/projects.js"
import { useMediaQuery } from "../../lib/useMediaQuery.js"
import ImagePlaceholder from "../ui/ImagePlaceholder.jsx"
import Reveal from "../ui/Reveal.jsx"

const pad = "px-[max(1rem,calc((100%-72rem)/2))]"

function ProjectCard({ p, index, onFocus }) {
  const { t } = useLang()
  return (
    <motion.li
      className="group w-[82vw] max-w-[26rem] shrink-0 snap-start"
      initial={{ opacity: 0, y: 48, rotate: 1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      onFocus={onFocus}
    >
      <article className="h-full rounded-3xl border border-border bg-surface p-3 shadow-card transition-transform duration-300 group-focus-within:-translate-y-1 group-hover:-translate-y-1">
        <ImagePlaceholder src={p.cover} alt={`${p.title} — portada (provisional)`} aspect="aspect-[4/3]" />
        <div className="p-3 pt-5">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-2xl">{p.title}</h3>
            <span className="text-sm text-ink-soft tabular-nums">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <p className="mt-1 text-sm text-ink-soft">{[t(p.role), p.client, p.year].filter(Boolean).join(" · ")}</p>
          {p.summary && <p className="mt-3 line-clamp-3 text-ink-soft">{t(p.summary)}</p>}
          <div className="mt-4 flex flex-wrap gap-x-5 text-sm font-semibold">
            {p.kind === "case" && (
              <Link to={`/proyectos/${p.slug}`} className="link-draw min-h-11 content-center">
                {t(ui.projects.viewCase)} →
              </Link>
            )}
            {p.behance && (
              <a href={p.behance} target="_blank" rel="noreferrer" className="link-draw min-h-11 content-center text-ink-soft hover:text-ink">
                Behance ↗
              </a>
            )}
          </div>
        </div>
      </article>
    </motion.li>
  )
}

function MoreCard() {
  const { t } = useLang()
  return (
    <li className="flex w-[60vw] max-w-[18rem] shrink-0 snap-start">
      <a
        href={profile.links.behance}
        target="_blank"
        rel="noreferrer"
        className="flex w-full flex-col justify-end rounded-3xl border border-dashed border-ink/20 p-6 transition-colors hover:bg-surface"
      >
        <span className="text-sm text-ink-soft">{t({ es: "Más trabajos en", en: "More work on" })}</span>
        <span className="text-2xl font-semibold tracking-tight">Behance ↗</span>
      </a>
    </li>
  )
}

function Heading({ children }) {
  const { t } = useLang()
  return (
    <div className={`flex flex-wrap items-end justify-between gap-6 ${pad}`}>
      <div>
        <p className="mb-4 inline-block rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-ink-soft">
          {t(ui.sections.projects)}
        </p>
        <h2 id="proyectos-title" className="text-4xl md:text-5xl">
          {t(ui.sections.projectsTitle)}
        </h2>
      </div>
      {children}
    </div>
  )
}

// Escritorio: la sección queda fija y el scroll vertical desplaza el carrusel en horizontal.
// Los proyectos aparecen uno a uno a medida que entran en pantalla.
function ScrollSlider() {
  const { t } = useLang()
  const section = useRef(null)
  const viewport = useRef(null)
  const track = useRef(null)
  const [distance, setDistance] = useState(0)
  const [active, setActive] = useState(0)

  useLayoutEffect(() => {
    const measure = () => setDistance(Math.max(0, track.current.scrollWidth - viewport.current.clientWidth))
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(track.current)
    ro.observe(viewport.current)
    return () => ro.disconnect()
  }, [])

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] })
  const x = useTransform(scrollYProgress, (v) => -v * distance)
  useMotionValueEvent(scrollYProgress, "change", (v) => setActive(Math.round(v * (projects.length - 1))))

  // Con teclado: al enfocar una tarjeta, llevar el scroll hasta ella.
  // overflow-clip (no hidden) evita que el navegador desplace el contenedor por su cuenta.
  const focusCard = (e) => {
    const li = e.currentTarget
    const top = section.current.getBoundingClientRect().top + window.scrollY
    const offset = li.offsetLeft - track.current.firstElementChild.offsetLeft
    const progress = distance ? Math.min(1, offset / distance) : 0
    window.scrollTo({ top: top + progress * distance, behavior: "instant" })
  }

  return (
    <section id="proyectos" ref={section} aria-labelledby="proyectos-title" style={{ height: `calc(100vh + ${distance}px)` }}>
      <div ref={viewport} className="sticky top-0 flex h-screen flex-col justify-center gap-10 overflow-clip pt-16">
        <Heading>
          <div className="flex items-center gap-4 text-sm text-ink-soft">
            <span className="tabular-nums" aria-hidden="true">
              {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
            <span className="relative h-px w-32 bg-ink/15">
              <motion.span className="absolute inset-0 origin-left bg-accent-deep" style={{ scaleX: scrollYProgress }} />
            </span>
            <span>{t(ui.projects.hint)}</span>
          </div>
        </Heading>
        <motion.ul ref={track} style={{ x }} className={`flex w-max gap-6 ${pad}`}>
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} p={p} index={i} onFocus={focusCard} />
          ))}
          <MoreCard />
        </motion.ul>
      </div>
    </section>
  )
}

// Celular o movimiento reducido: carrusel nativo con desplazamiento horizontal.
function SwipeSlider() {
  return (
    <section id="proyectos" aria-labelledby="proyectos-title" className="scroll-mt-28 py-24">
      <Reveal>
        <Heading />
      </Reveal>
      <ul className={`mt-10 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto pb-6 ${pad}`}>
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} p={p} index={i} />
        ))}
        <MoreCard />
      </ul>
    </section>
  )
}

export default function Projects() {
  const wide = useMediaQuery("(min-width: 768px)")
  const reduce = useReducedMotion()
  return wide && !reduce ? <ScrollSlider /> : <SwipeSlider />
}
