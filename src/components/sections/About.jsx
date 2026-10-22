import { useLang } from "../../i18n/language.jsx"
import { ui } from "../../content/ui.js"
import { profile } from "../../content/profile.js"
import Section from "../ui/Section.jsx"
import Reveal from "../ui/Reveal.jsx"

export default function About() {
  const { lang, t } = useLang()
  const facts = [
    [lang === "es" ? "Estudio" : "Studying", t({ es: "Diseño de Medios Interactivos", en: "Interactive Media Design" })],
    [lang === "es" ? "Universidad" : "University", "Icesi, Cali"],
    [t(ui.hero.grad), "2027"],
    [lang === "es" ? "Ubicación" : "Location", profile.location],
  ]

  return (
    <Section id="sobre-mi" eyebrow={t(ui.sections.about)} title={t(ui.sections.aboutTitle)}>
      <div className="grid gap-8 md:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <p className="text-xl leading-relaxed md:text-2xl">{t(profile.about)}</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {profile.competencies.map((c) => (
              <li key={c.es} className="rounded-full border border-border bg-surface px-4 py-2 text-sm">
                {t(c)}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="rounded-3xl border border-border bg-surface p-2 shadow-card">
            {facts.map(([label, value], i) => (
              <div key={label} className={`flex items-baseline justify-between gap-4 px-5 py-4 ${i ? "border-t border-border" : ""}`}>
                <dt className="text-sm text-ink-soft">{label}</dt>
                <dd className="text-right font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
