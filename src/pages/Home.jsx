import Hero from "../components/sections/Hero.jsx"
import About from "../components/sections/About.jsx"
import Experience from "../components/sections/Experience.jsx"
import Projects from "../components/sections/Projects.jsx"
import Skills from "../components/sections/Skills.jsx"

// El contacto vive en el footer (Layout).
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
    </>
  )
}
