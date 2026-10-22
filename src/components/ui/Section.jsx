// Contenedor común de sección: id para la nav, título y ancho máximo.
export default function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`scroll-mt-28 px-4 py-20 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {eyebrow && <p className="mb-3 text-sm font-semibold text-ink-soft">{eyebrow}</p>}
        <h2 id={`${id}-title`} className="mb-10 text-4xl md:text-5xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}
