import { useLang } from "../../i18n/language.jsx"
import { ui } from "../../content/ui.js"
import { focus } from "../../content/focus.js"
import Section from "../ui/Section.jsx"

// Bento: la primera tarjeta ocupa dos columnas.
export default function Focus() {
  const { t } = useLang()
  return (
    <Section id="enfoque" title={t(ui.sections.focus)}>
      <ul className="grid gap-4 md:grid-cols-3">
        {focus.map((f, i) => (
          <li key={f.id} className={`rounded-3xl bg-surface p-8 shadow-card ${i === 0 || i === 3 ? "md:col-span-2" : ""}`}>
            <h3 className="mb-2 text-2xl">{t(f.title)}</h3>
            <p className="text-ink-soft">{t(f.text)}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
