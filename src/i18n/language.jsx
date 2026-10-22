import { createContext, useCallback, useContext, useEffect, useState } from "react"

const LanguageContext = createContext(null)
const KEY = "lang"

function readStored() {
  try {
    const v = localStorage.getItem(KEY)
    return v === "en" || v === "es" ? v : "es"
  } catch {
    return "es"
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readStored)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(KEY, lang)
    } catch {
      // Sin almacenamiento: el idioma vale solo para esta visita
    }
  }, [lang])

  const toggle = useCallback(() => setLang((l) => (l === "es" ? "en" : "es")), [])
  // t() recibe un texto bilingüe { es, en } y devuelve el del idioma activo
  const t = useCallback((value) => (value == null ? null : (value[lang] ?? value.es)), [lang])

  return <LanguageContext value={{ lang, toggle, t }}>{children}</LanguageContext>
}

export function useLang() {
  return useContext(LanguageContext)
}
