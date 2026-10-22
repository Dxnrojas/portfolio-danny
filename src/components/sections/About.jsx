import { useLang } from "../../i18n/language.jsx"
import { ui } from "../../content/ui.js"
import { profile } from "../../content/profile.js"
import Section from "../ui/Section.jsx"

export default function About() {
  const { lang, t } = useLang()
  return (
    <Section id="sobre-mi" title={t(ui.sections.about)}>
      <div className="grid gap-10 md:grid-cols-2">
        <p className="text-xl leading-relaxed">{t(profile.about)}</p>
        <div className="grid gap-6">
          <div>
            <h3 className="mb-3 font-sans text-sm font-semibold text-ink-soft">
              {lang === "es" ? "Competencias" : "Strengths"}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {profile.competencies.map((c) => (
                <li key={c.es} className="rounded-full bg-surface px-4 py-2 text-sm shadow-card">
                  {t(c)}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-sans text-sm font-semibold text-ink-soft">
              {lang === "es" ? "Herramientas e idiomas" : "Tools and languages"}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {[...profile.tools, ...profile.languages.map(t)].map((tool) => (
                <li key={tool} className="rounded-full border border-border px-4 py-2 text-sm">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
