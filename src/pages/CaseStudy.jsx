import { Link, useParams } from "react-router"
import { useLang } from "../i18n/language.jsx"
import { ui } from "../content/ui.js"
import { caseStudies, getProject } from "../content/projects.js"
import ImagePlaceholder from "../components/ui/ImagePlaceholder.jsx"
import Todo from "../components/ui/Todo.jsx"
import NotFound from "./NotFound.jsx"

// Bloque de la plantilla de 10. Si no hay contenido, se marca TODO.
function Block({ title, children, empty }) {
  return (
    <section className="border-t border-border py-12">
      <h2 className="mb-6 text-3xl">{title}</h2>
      {empty ? <Todo /> : children}
    </section>
  )
}

export default function CaseStudy() {
  const { slug } = useParams()
  const { t } = useLang()
  const p = getProject(slug)
  if (!p || p.kind !== "case") return <NotFound />

  const c = p.caseStudy
  const L = ui.caseStudy
  const next = caseStudies[(caseStudies.indexOf(p) + 1) % caseStudies.length]
  const meta = [
    [L.role, t(p.role)],
    [L.year, p.year],
    [L.client, p.client],
    [L.team, t(p.team)],
    [L.tools, p.tools?.join(", ")],
  ]

  return (
    <article className="px-4 pt-16">
      <div className="mx-auto max-w-4xl">
        <Link to="/#proyectos" className="inline-flex min-h-11 items-center text-sm font-semibold text-ink-soft hover:text-ink">
          ← {t(L.back)}
        </Link>

        {/* 1. Portada */}
        <header className="py-10">
          <h1 className="text-5xl md:text-7xl">{p.title}</h1>
          <dl className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-5">
            {meta.map(([label, value]) => (
              <div key={label.es}>
                <dt className="text-sm text-ink-soft">{t(label)}</dt>
                <dd className="font-semibold">{value ?? "TODO"}</dd>
              </div>
            ))}
          </dl>
          <ImagePlaceholder src={p.cover} alt={`${p.title} — portada (provisional)`} className="mt-10" />
        </header>

        {/* 2. Resumen y resultado */}
        <Block title={t(L.summary)}>
          <p className="text-xl leading-relaxed">{t(p.summary)}</p>
          {c.result ? <p className="mt-4">{t(c.result)}</p> : <div className="mt-4"><Todo note="resultado" /></div>}
        </Block>

        {/* 3–4. Contexto y objetivos */}
        <Block title={t(L.context)} empty={!c.context}>{t(c.context)}</Block>
        <Block title={t(L.objectives)} empty={!c.objectives}>{t(c.objectives)}</Block>

        {/* 5. Rol y equipo: siempre diseñadora UX/UI */}
        <Block title={t(L.roleTeam)}>
          <p>{[t(p.role), t(p.team)].filter(Boolean).join(" · ")}</p>
        </Block>

        {/* 6. Investigación */}
        <Block title={t(L.research)} empty={!c.research}>
          {c.research?.title && <p className="font-semibold">{t(c.research.title)}</p>}
          {c.research && !c.research.findings && <div className="mt-4"><Todo note="hallazgos y tamaño de muestra" /></div>}
        </Block>

        {/* 7. Insights */}
        <Block title={t(L.insights)} empty={!c.insights}>{t(c.insights)}</Block>

        {/* 8. Ideación y diseño. TODO (Home v1): Carousel de Morph UI */}
        <Block title={t(L.design)}>
          <div className="grid gap-6 md:grid-cols-2">
            {c.screens.map((s) => (
              <ImagePlaceholder key={s.src} src={s.src} alt={t(s.alt)} />
            ))}
          </div>
        </Block>

        {/* 9–10. Validación y aprendizajes */}
        <Block title={t(L.validation)} empty={!c.validation}>{t(c.validation)}</Block>
        <Block title={t(L.learnings)} empty={!c.learnings}>{t(c.learnings)}</Block>

        <nav className="border-t border-border py-12">
          <p className="text-sm text-ink-soft">{t(L.next)}</p>
          <Link to={`/proyectos/${next.slug}`} className="font-serif text-4xl underline-offset-4 hover:underline">
            {next.title} →
          </Link>
        </nav>
      </div>
    </article>
  )
}
