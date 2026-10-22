import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
// Playfair solo se usa en cursiva, para palabras puntuales del banner
import "@fontsource/playfair-display/400-italic.css"
import "@fontsource-variable/manrope"
import "./styles/index.css"
import App from "./App.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
