import { useLang } from "../i18n/language.jsx"
import { ui } from "../content/ui.js"
import { profile } from "../content/profile.js"

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="relative mt-24 overflow-hidden px-4 pt-16 pb-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between text-sm text-ink-soft">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0 })
            document.getElementById("contenido")?.focus({ preventScroll: true })
          }}
          className="min-h-11 content-center hover:text-ink">
          {t(ui.footer.top)} ↑
        </a>
      </div>
      {/* Wordmark fantasma: decorativo */}
      <p
        aria-hidden="true"
        className="pointer-events-none mt-8 text-center font-serif text-[clamp(3rem,14vw,12rem)] leading-none text-ink/5 select-none"
      >
        {profile.wordmark}
      </p>
    </footer>
  )
}
