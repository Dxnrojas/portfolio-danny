// Adaptado de Morph UI (https://github.com/AnmolSaini16/morph-ui), autor @anmold_s.
// Se renderiza una sola vez en la raíz.
import { useEffect } from "react"

const scrollKeys = new Set(["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"])

// Las capturas de una transición están fijas a la pantalla: si la persona
// hace scroll a mitad de una animación, se termina para que nada se desplace.
export function SkipOnScroll() {
  useEffect(() => {
    const skip = () => document.activeViewTransition?.skipTransition()
    const onKey = (e) => scrollKeys.has(e.key) && skip()
    const options = { capture: true, passive: true }
    addEventListener("wheel", skip, options)
    addEventListener("touchmove", skip, options)
    addEventListener("keydown", onKey, options)
    return () => {
      removeEventListener("wheel", skip, options)
      removeEventListener("touchmove", skip, options)
      removeEventListener("keydown", onKey, options)
    }
  }, [])
  return null
}
