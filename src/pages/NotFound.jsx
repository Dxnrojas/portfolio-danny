import { Link } from "react-router"
import { useLang } from "../i18n/language.jsx"
import { ui } from "../content/ui.js"

export default function NotFound() {
  const { t } = useLang()
  return (
    <div className="px-4 py-32 text-center">
      <h1 className="text-5xl">404</h1>
      <p className="mt-4 text-ink-soft">{t(ui.notFound)}</p>
      <Link to="/" className="mt-8 inline-flex min-h-11 items-center rounded-full bg-ink px-6 font-semibold text-surface">
        {t(ui.backHome)}
      </Link>
    </div>
  )
}
