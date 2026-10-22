import { BrowserRouter, Route, Routes } from "react-router"
import { LanguageProvider } from "./i18n/language.jsx"
import { SkipOnScroll } from "./components/morph/skip-on-scroll.jsx"
import Layout from "./components/Layout.jsx"
import Home from "./pages/Home.jsx"
import CaseStudy from "./pages/CaseStudy.jsx"
import NotFound from "./pages/NotFound.jsx"

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <SkipOnScroll />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="proyectos/:slug" element={<CaseStudy />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
