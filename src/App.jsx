import { MotionConfig } from "motion/react"
import { BrowserRouter, Route, Routes } from "react-router"
import { LanguageProvider } from "./i18n/language.jsx"
import { SkipOnScroll } from "./components/morph/skip-on-scroll.jsx"
import Layout from "./components/Layout.jsx"
import Home from "./pages/Home.jsx"
import NotFound from "./pages/NotFound.jsx"

export default function App() {
  return (
    <LanguageProvider>
      {/* Con movimiento reducido, motion quita los desplazamientos y deja fundidos */}
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <SkipOnScroll />
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MotionConfig>
    </LanguageProvider>
  )
}
