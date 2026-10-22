import { useLang } from "../../i18n/language.jsx"
import { ui } from "../../content/ui.js"
import { profile } from "../../content/profile.js"
import { interests, skills } from "../../content/skills.js"
import Section from "../ui/Section.jsx"
import Reveal from "../ui/Reveal.jsx"

const dot = { rose: "bg-rose", sage: "bg-sage", butter: "bg-butter" }

export default function Skills() {
  const { t } = useLang()
  return (
    <Section id="habilidades" eyebrow={t(ui.sections.skills)} title={t(ui.sections.skillsTitle)}>
      <ul className="grid gap-4 md:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal
            as="li"
            key={s.id}
            delay={i * 0.05}
            className={`rounded-3xl border border-border bg-surface p-7 shadow-card transition-transform duration-300 hover:-translate-y-1 ${s.wide ? "md:col-span-2" : ""}`}
          >
            <span className={`mb-8 block size-3 rounded-full ${dot[s.tone]}`} aria-hidden="true" />
            <h3 className="text-2xl">{t(s.title)}</h3>
            <p className="mt-2 text-ink-soft">{t(s.text)}</p>
          </Reveal>
        ))}
        {interests.map((s) => (
          <Reveal
            as="li"
            key={s.id}
            className="rounded-3xl border border-rose bg-surface p-7 shadow-card md:col-span-3 md:flex md:items-end md:justify-between md:gap-10"
          >
            <div>
              <p className="mb-6 inline-block rounded-full bg-rose/40 px-3 py-1 text-xs font-semibold">{t(ui.sections.interests)}</p>
              <h3 className="text-3xl md:text-4xl">{t(s.title)}</h3>
            </div>
            <p className="mt-3 max-w-md text-ink-soft md:mt-0">{t(s.text)}</p>
          </Reveal>
        ))}
      </ul>
      <Reveal className="mt-10">
        <h3 className="mb-4 text-sm font-semibold tracking-normal text-ink-soft">{t(ui.sections.tools)}</h3>
        <ul className="flex flex-wrap gap-2">
          {[...profile.tools, ...profile.languages.map(t)].map((tool) => (
            <li key={tool} className="rounded-full border border-border bg-surface px-4 py-2 text-sm">
              {tool}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
