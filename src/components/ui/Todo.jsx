import { useLang } from "../../i18n/language.jsx"
import { ui } from "../../content/ui.js"

// Marca visible de contenido pendiente. Nunca se rellena con texto inventado.
export default function Todo({ note }) {
  const { t } = useLang()
  return (
    <p className="rounded-xl border border-dashed border-accent-deep/40 px-4 py-3 text-sm text-ink-soft">
      TODO · {t(ui.caseStudy.pending)}
      {note ? ` — ${note}` : ""}
    </p>
  )
}
