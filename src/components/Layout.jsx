import { useEffect } from "react"
import { Outlet, useLocation } from "react-router"
import { useLang } from "../i18n/language.jsx"
import { ui } from "../content/ui.js"
import Nav from "./Nav.jsx"
import Footer from "./Footer.jsx"

export default function Layout() {
  const { t } = useLang()
  const { pathname, hash } = useLocation()

  // Al cambiar de página, empezar arriba; con #seccion, ir a esa sección
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [pathname, hash])

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-3 focus:text-surface"
      >
        {t(ui.skip)}
      </a>
      <Nav />
      <main id="contenido" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
