import Reveal from "./Reveal.jsx"

// Contenedor común: etiqueta en píldora, título y ancho máximo.
export default function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`scroll-mt-28 px-4 py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 md:mb-16">
          {eyebrow && (
            <p className="mb-4 inline-block rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-ink-soft">
              {eyebrow}
            </p>
          )}
          <h2 id={`${id}-title`} className="max-w-2xl text-4xl md:text-5xl">
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
