import { useLang } from "../../i18n/language.jsx"
import { ui } from "../../content/ui.js"
import { education, experience, otherExperience } from "../../content/experience.js"
import Section from "../ui/Section.jsx"

function Entry({ item }) {
  const { t } = useLang()
  return (
    <li className="grid gap-1 border-t border-border py-5 md:grid-cols-[1fr_auto] md:gap-6">
      <div>
        <h4 className="font-semibold">{t(item.title)}</h4>
        {item.org && <p className="text-ink-soft">{t(item.org)}</p>}
        {item.note && <p className="mt-1 text-sm text-accent-deep">{t(item.note)}</p>}
      </div>
      {item.period && <p className="text-sm text-ink-soft md:text-right">{t(item.period)}</p>}
    </li>
  )
}

// Orden fijo: experiencia primero, luego educación.
export default function Experience() {
  const { t } = useLang()
  const groups = [
    { id: "work", items: experience },
    { id: "other", items: otherExperience },
    { id: "education", items: education },
  ]
  return (
    <Section id="trayectoria" title={t(ui.sections.experience)}>
      <div className="grid gap-12">
        {groups.map((g) => (
          <div key={g.id}>
            <h3 className="mb-2 font-sans text-sm font-semibold text-ink-soft">{t(ui.sections[g.id])}</h3>
            <ul>
              {g.items.map((item) => (
                <Entry key={item.id} item={item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
