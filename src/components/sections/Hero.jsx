import { Link } from "react-router"
import { useLang } from "../../i18n/language.jsx"
import { ui } from "../../content/ui.js"
import { profile } from "../../content/profile.js"
import { projects } from "../../content/projects.js"
import { insightGroups, insights } from "../../content/insights.js"

const noteColor = { rose: "bg-rose", sage: "bg-sage", butter: "bg-butter" }

// Tarjetas flotantes: solo datos reales.
// TODO (Home v1): cifras con Number Flip de Morph UI.
const facts = [
  { value: String(projects.length), label: { es: "proyectos", en: "projects" } },
  { value: "2027", label: { es: "graduación", en: "graduation" } },
]

export default function Hero() {
  const { lang, t } = useLang()
  const h = profile.headline[lang]

  return (
    <section aria-labelledby="hero-title" className="px-4 pt-20 pb-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-6 inline-block rounded-full bg-surface px-4 py-1.5 text-sm text-ink-soft shadow-card">
          {t(profile.role)} · {profile.location}
        </p>
        <h1 id="hero-title" className="text-5xl leading-[1.05] md:text-7xl">
          {h.before} <em className="text-accent-deep">{h.accent}</em> {h.after}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft">{t(profile.intro)}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/#proyectos" className="inline-flex min-h-11 items-center rounded-full bg-ink px-6 font-semibold text-surface">
            {t(ui.hero.toProjects)}
          </Link>
          <Link
            to="/#contacto"
            className="inline-flex min-h-11 items-center rounded-full bg-surface px-6 font-semibold shadow-card"
          >
            {t(ui.hero.toContact)}
          </Link>
        </div>
        <ul className="mt-10 flex justify-center gap-4">
          {facts.map((f) => (
            <li key={f.value} className="rounded-2xl bg-surface px-5 py-3 text-left shadow-card">
              <span className="block font-serif text-3xl">{f.value}</span>
              <span className="text-sm text-ink-soft">{t(f.label)}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mapa de afinidad, versión estática (también es la alternativa accesible).
          TODO (Home v1): notas arrastrables con motion, snap a zonas y líneas con nodos. */}
      <div className="mx-auto mt-16 max-w-6xl">
        <h2 className="sr-only">{t(ui.hero.mapLabel)}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {insightGroups.map((g) => (
            <div key={g.id} className="rounded-3xl border border-border bg-surface/60 p-5">
              <h3 className="mb-4 font-sans text-sm font-semibold text-ink-soft">{t(g.label)}</h3>
              <ul className="grid gap-3">
                {insights
                  .filter((n) => n.group === g.id)
                  .map((n) => (
                    <li key={n.id} className={`rounded-lg p-4 text-sm text-ink shadow-card ${noteColor[g.color]}`}>
                      {t(n.text)}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
