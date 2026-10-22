// Imagen de proyecto dentro del marco de ventana (3 puntos), con el mismo formato que ImagePlaceholder.
export default function ProjectImage({ src, alt }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-rose" />
        <span className="size-2.5 rounded-full bg-butter" />
        <span className="size-2.5 rounded-full bg-sage" />
      </div>
      <div className="aspect-[4/3] overflow-hidden bg-canvas">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    </figure>
  )
}
