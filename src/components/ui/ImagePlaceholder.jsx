// Marcador visible para las imágenes que Daniela sube después.
// Muestra el marco de ventana (3 puntos) y la ruta exacta del archivo esperado.
// Cuando la imagen exista, se reemplaza este componente por un <img> con alt real.
export default function ImagePlaceholder({ src, alt, aspect = "aspect-[16/10]", className = "" }) {
  return (
    <figure
      role="img"
      aria-label={alt}
      className={`overflow-hidden rounded-2xl border border-border bg-surface ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-rose" />
        <span className="size-2.5 rounded-full bg-butter" />
        <span className="size-2.5 rounded-full bg-sage" />
      </div>
      <div className={`grid ${aspect} place-items-center bg-canvas/70 p-4 text-center`}>
        <code className="text-xs break-all text-ink-soft">public{src}</code>
      </div>
    </figure>
  )
}
