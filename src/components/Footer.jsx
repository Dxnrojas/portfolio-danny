import { useState } from "react"
import { useLang } from "../i18n/language.jsx"
import { ui } from "../content/ui.js"
import { profile } from "../content/profile.js"
import Reveal from "./ui/Reveal.jsx"

// Footer con el contacto: correo con botón copiar, LinkedIn, Behance y wordmark fantasma.
export default function Footer() {
  const { t } = useLang()
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Sin portapapeles: el correo sigue visible y enlazado
    }
  }

  const toTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0 })
    document.getElementById("contenido")?.focus({ preventScroll: true })
  }

  return (
    <footer id="contacto" aria-labelledby="contacto-title" className="scroll-mt-28 px-3 pt-16 pb-3 md:px-4">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-border bg-surface px-6 pt-16 pb-6 shadow-card md:px-12">
        <Reveal className="relative z-10">
          <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-semibold text-ink-soft">
            {t(ui.sections.contact)}
          </p>
          <h2 id="contacto-title" className="text-5xl md:text-7xl">
            {t(ui.contact.title)}
          </h2>
          <p className="mt-4 max-w-md text-lg text-ink-soft">{t(ui.contact.text)}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href={`mailto:${profile.email}`} className="link-draw text-xl font-semibold tracking-tight md:text-3xl">
              {profile.email}
            </a>
            <button
              type="button"
              onClick={copy}
              className="min-h-11 rounded-full bg-ink px-5 text-sm font-semibold text-surface transition-transform hover:-translate-y-px"
            >
              {t(ui.contact.copy)}
            </button>
            <p aria-live="polite" className="text-sm font-semibold">
              {copied && <span className="rounded-full bg-sage px-3 py-1.5 text-ink">✓ {t(ui.contact.copied)}</span>}
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-3">
            {[
              ["LinkedIn", profile.links.linkedin],
              ["Behance", profile.links.behance],
            ].map(([name, href]) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full border border-border px-5 text-sm font-semibold transition-colors hover:bg-canvas"
                >
                  {name} ↗
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="relative z-10 mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5 text-sm text-ink-soft">
          <span>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </span>
          <a href="#" onClick={toTop} className="link-draw min-h-11 content-center hover:text-ink">
            {t(ui.footer.top)} ↑
          </a>
        </div>

        {/* Wordmark fantasma: decorativo */}
        <p
          aria-hidden="true"
          className="pointer-events-none -mb-[0.2em] text-center text-[clamp(3rem,13vw,11rem)] leading-none font-semibold tracking-tighter whitespace-nowrap text-ink/[0.04] select-none"
        >
          {profile.wordmark}
        </p>
      </div>
    </footer>
  )
}
