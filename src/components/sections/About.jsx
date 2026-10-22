import { motion } from "motion/react"
import { useLang } from "../../i18n/language.jsx"
import { ui } from "../../content/ui.js"
import { profile } from "../../content/profile.js"
import Reveal from "../ui/Reveal.jsx"

// La foto ya trae la estrella y el degradado rosa; nunca se recorta ni se deforma (solo se escala).
function Photo({ className = "", style }) {
  const { t } = useLang()
  const { photo } = profile
  return (
    <motion.picture
      className={`pointer-events-none block select-none ${className}`}
      style={style}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
    >
      <source srcSet={photo.webp} type="image/webp" />
      <img
        src={photo.png}
        alt={t(photo.alt)}
        width={photo.width}
        height={photo.height}
        loading="lazy"
        decoding="async"
        className="h-auto w-full"
      />
    </motion.picture>
  )
}

export default function About() {
  const { lang, t } = useLang()
  const hello = ui.sections.aboutHello[lang]
  const facts = [
    [lang === "es" ? "Estudio" : "Studying", t({ es: "Diseño de Medios Interactivos", en: "Interactive Media Design" })],
    [lang === "es" ? "Universidad" : "University", "Icesi, Cali"],
    [t(ui.hero.grad), "2027"],
    [lang === "es" ? "Ubicación" : "Location", profile.location],
  ]

  return (
    <section
      id="sobre-mi"
      aria-labelledby="sobre-mi-title"
      // --photo: ancho de la foto en escritorio; el texto empieza a la derecha de ella
      className="relative scroll-mt-28 overflow-x-clip pt-24 [--photo:min(54vw,880px)] xl:min-h-[56rem] xl:pt-36 xl:pb-24"
    >
      {/* Escritorio: foto anclada abajo a la izquierda; el borde recto del cuerpo queda fuera de pantalla, como en la referencia */}
      <Photo
        className="absolute bottom-0 hidden xl:block"
        style={{ width: "var(--photo)", left: "calc(var(--photo) * -0.2)" }}
      />

      <div className="relative z-10 px-4 xl:pr-[max(1rem,calc((100vw-80rem)/2))] xl:pl-[calc(var(--photo)*0.65)]">
        <Reveal>
          <h2 id="sobre-mi-title" className="text-[clamp(2.75rem,5.4vw,4.75rem)] leading-[1.02]">
            {hello.hello}
            <span className="block font-serif font-normal tracking-normal text-accent-deep italic">{hello.accent}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.05} className="mt-8">
          <p className="mb-3 inline-block rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-ink-soft">
            {t(ui.sections.about)}
          </p>
          <h3 className="text-3xl font-medium md:text-4xl">{t(ui.sections.aboutTitle)}</h3>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto]">
          <Reveal delay={0.1}>
            <p className="text-xl leading-relaxed">{t(profile.about)}</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {profile.competencies.map((c) => (
                <li key={c.es} className="rounded-full border border-border bg-surface px-4 py-2 text-sm">
                  {t(c)}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <dl className="rounded-3xl border border-border bg-surface p-2 shadow-card">
              {facts.map(([label, value], i) => (
                <div key={label} className={`flex items-baseline justify-between gap-4 px-5 py-4 ${i ? "border-t border-border" : ""}`}>
                  <dt className="text-sm text-ink-soft">{label}</dt>
                  <dd className="text-right font-semibold md:whitespace-nowrap">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      {/* Celular, tableta y portátil pequeño: la foto va debajo del texto, anclada a la izquierda
          para que el borde recto del cuerpo quede fuera de pantalla */}
      <Photo className="-mt-4 -ml-[19%] w-full md:mt-4 md:-ml-[6.5rem] md:w-[34rem] xl:hidden" />
    </section>
  )
}
