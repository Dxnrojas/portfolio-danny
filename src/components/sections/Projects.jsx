import { Link } from "react-router"
import { useLang } from "../../i18n/language.jsx"
import { ui } from "../../content/ui.js"
import { projects } from "../../content/projects.js"
import Section from "../ui/Section.jsx"
import ImagePlaceholder from "../ui/ImagePlaceholder.jsx"

// TODO (Home v1): interruptor Lista / Tarjetas con List Switcher de Morph UI.
export default function Projects() {
  const { t } = useLang()
  return (
    <Section id="proyectos" title={t(ui.sections.projects)}>
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <li key={p.slug} className="rounded-3xl bg-surface p-4 shadow-card">
            <ImagePlaceholder src={p.cover} alt={`${p.title} — portada (provisional)`} className="shadow-none" />
            <div className="p-3">
              <h3 className="mt-3 text-2xl">{p.title}</h3>
              <p className="mt-1 text-sm text-ink-soft">
                {[t(p.role), p.client, p.year].filter(Boolean).join(" · ")}
              </p>
              {p.summary && <p className="mt-3 text-ink-soft">{t(p.summary)}</p>}
              <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
                {p.kind === "case" && (
                  <Link to={`/proyectos/${p.slug}`} className="min-h-11 content-center underline-offset-4 hover:underline">
                    {t(ui.projects.viewCase)} →
                  </Link>
                )}
                {p.behance && (
                  <a href={p.behance} target="_blank" rel="noreferrer" className="min-h-11 content-center underline-offset-4 hover:underline">
                    {t(ui.projects.behance)} ↗
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
