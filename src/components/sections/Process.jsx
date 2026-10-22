import { useLang } from "../../i18n/language.jsx"
import { ui } from "../../content/ui.js"
import { process } from "../../content/process.js"
import Section from "../ui/Section.jsx"

// TODO (Home v1): Tabs de Morph UI (subrayado deslizante, panel según dirección).
export default function Process() {
  const { t } = useLang()
  return (
    <Section id="proceso" title={t(ui.sections.process)}>
      <ol className="grid gap-4 md:grid-cols-5">
        {process.map((step, i) => (
          <li key={step.id} className="rounded-3xl bg-surface p-6 shadow-card">
            <span className="font-serif text-3xl text-accent-deep">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 mb-2 text-xl">{t(step.title)}</h3>
            <p className="text-sm text-ink-soft">{t(step.description)}</p>
            {step.example && <p className="mt-3 border-t border-border pt-3 text-sm">{t(step.example.text)}</p>}
          </li>
        ))}
      </ol>
    </Section>
  )
}
