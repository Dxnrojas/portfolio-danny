import { motion } from "motion/react"
import { useLang } from "../../i18n/language.jsx"
import { ui } from "../../content/ui.js"
import { education, experience, otherExperience } from "../../content/experience.js"
import Section from "../ui/Section.jsx"
import Reveal from "../ui/Reveal.jsx"

const tones = ["bg-rose", "bg-butter", "bg-sage"]

// Línea fina con nodos (motivo de mapa de afinidad). La línea se dibuja con el scroll.
function Timeline({ items }) {
  const { t } = useLang()
  return (
    <ol className="relative">
      <motion.span
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-[5px] w-px origin-top bg-ink/15"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
      />
      {items.map((item, i) => (
        <Reveal as="li" key={item.id} delay={i * 0.06} className="relative pb-8 pl-8 last:pb-0">
          <span
            aria-hidden="true"
            className={`absolute top-1.5 left-0 size-[11px] rounded-full border-2 border-surface ring-1 ring-ink/20 ${tones[i % 3]}`}
          />
          <p className="text-sm text-ink-soft">{t(item.period) ?? "—"}</p>
          <h4 className="mt-1 text-lg font-semibold tracking-tight">{t(item.title)}</h4>
          {item.org && <p className="text-ink-soft">{t(item.org)}</p>}
          {item.note && (
            <p className="mt-2 inline-block rounded-full bg-butter px-3 py-1 text-xs font-semibold">{t(item.note)}</p>
          )}
        </Reveal>
      ))}
    </ol>
  )
}

// Orden fijo: experiencia primero, luego educación.
export default function Experience() {
  const { t } = useLang()
  return (
    <Section id="trayectoria" eyebrow={t(ui.sections.experience)} title={t(ui.sections.experienceTitle)}>
      <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
        <div className="rounded-3xl border border-border bg-surface p-6 shadow-card md:p-8">
          <h3 className="mb-6 text-sm font-semibold tracking-normal text-ink-soft">{t(ui.sections.work)}</h3>
          <Timeline items={experience} />
        </div>
        <div className="grid content-start gap-6">
          <div className="rounded-3xl border border-border bg-surface p-6 shadow-card md:p-8">
            <h3 className="mb-6 text-sm font-semibold tracking-normal text-ink-soft">{t(ui.sections.education)}</h3>
            <Timeline items={education} />
          </div>
          <div className="rounded-3xl border border-border bg-surface/60 p-6 md:p-8">
            <h3 className="mb-6 text-sm font-semibold tracking-normal text-ink-soft">{t(ui.sections.other)}</h3>
            <Timeline items={otherExperience} />
          </div>
        </div>
      </div>
    </Section>
  )
}
