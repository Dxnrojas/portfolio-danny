import { Link } from "react-router"
import { useLang } from "../i18n/language.jsx"
import { ui } from "../content/ui.js"
import { profile } from "../content/profile.js"

const items = [
  { id: "sobre-mi", label: ui.nav.about },
  { id: "trayectoria", label: ui.nav.experience },
  { id: "proyectos", label: ui.nav.projects },
  { id: "habilidades", label: ui.nav.skills },
]

export default function Nav() {
  const { lang, toggle, t } = useLang()

  return (
    <header className="sticky top-4 z-40 px-4">
      <nav
        aria-label={lang === "es" ? "Principal" : "Main"}
        className="mx-auto flex max-w-4xl items-center justify-between gap-4 rounded-full border border-border bg-surface/85 py-1.5 pr-1.5 pl-5 shadow-card backdrop-blur-md"
      >
        <Link to="/" className="font-semibold tracking-tight">
          {profile.shortName}
        </Link>
        <ul className="hidden items-center text-sm md:flex">
          {items.map((item) => (
            <li key={item.id}>
              <Link to={`/#${item.id}`} className="link-draw mx-3 py-2 text-ink-soft hover:text-ink">
                {t(item.label)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggle}
            aria-label={t(ui.nav.switchTo)}
            className="min-h-11 min-w-11 rounded-full text-xs font-bold text-ink-soft hover:text-ink"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <Link
            to="/#contacto"
            className="inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm font-semibold text-surface transition-transform hover:-translate-y-px"
          >
            {t(ui.nav.cta)}
          </Link>
        </div>
      </nav>
    </header>
  )
}
