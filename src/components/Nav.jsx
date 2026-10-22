import { Link } from "react-router"
import { useLang } from "../i18n/language.jsx"
import { ui } from "../content/ui.js"
import { profile } from "../content/profile.js"

const items = [
  { id: "proyectos", label: ui.nav.projects },
  { id: "proceso", label: ui.nav.process },
  { id: "sobre-mi", label: ui.nav.about },
  { id: "contacto", label: ui.nav.contact },
]

// TODO (Home v1): indicador deslizante de la sección activa.
export default function Nav() {
  const { lang, toggle, t } = useLang()

  return (
    <header className="sticky top-4 z-40 px-4">
      <nav
        aria-label={lang === "es" ? "Principal" : "Main"}
        className="mx-auto flex max-w-4xl items-center justify-between gap-4 rounded-full bg-surface/90 py-2 pr-2 pl-5 shadow-card backdrop-blur"
      >
        <Link to="/" className="font-serif text-lg">
          {profile.shortName}
        </Link>
        <ul className="hidden items-center gap-1 text-sm md:flex">
          {items.map((item) => (
            <li key={item.id}>
              <Link to={`/#${item.id}`} className="rounded-full px-3 py-2 text-ink-soft hover:text-ink">
                {t(item.label)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={t(ui.nav.switchTo)}
            className="min-h-11 min-w-11 rounded-full text-sm font-semibold text-ink-soft hover:text-ink"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <Link
            to="/#contacto"
            className="inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm font-semibold text-surface"
          >
            {t(ui.nav.cta)}
          </Link>
        </div>
      </nav>
    </header>
  )
}
