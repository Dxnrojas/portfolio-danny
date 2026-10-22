import { useState } from "react"
import { useLang } from "../../i18n/language.jsx"
import { ui } from "../../content/ui.js"
import { profile } from "../../content/profile.js"
import Section from "../ui/Section.jsx"

// TODO (Home v1): botón de contacto con Morphing Popover de Morph UI.
export default function Contact() {
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

  return (
    <Section id="contacto" title={t(ui.sections.contact)}>
      <div className="flex flex-wrap items-center gap-3">
        <a href={`mailto:${profile.email}`} className="font-serif text-2xl underline-offset-4 hover:underline md:text-4xl">
          {profile.email}
        </a>
        <button
          type="button"
          onClick={copy}
          className="min-h-11 rounded-full bg-ink px-5 text-sm font-semibold text-surface"
        >
          {t(ui.contact.copy)}
        </button>
        <p aria-live="polite" className="text-sm font-semibold">
          {copied && <span className="rounded-full bg-sage px-3 py-1.5 text-ink">{t(ui.contact.copied)}</span>}
        </p>
      </div>
      <ul className="mt-8 flex gap-6 font-semibold">
        <li>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="min-h-11 content-center underline-offset-4 hover:underline">
            LinkedIn ↗
          </a>
        </li>
        <li>
          <a href={profile.links.behance} target="_blank" rel="noreferrer" className="min-h-11 content-center underline-offset-4 hover:underline">
            Behance ↗
          </a>
        </li>
      </ul>
    </Section>
  )
}
