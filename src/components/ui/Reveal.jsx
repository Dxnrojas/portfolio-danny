import { motion } from "motion/react"

// Aparición suave al entrar en pantalla, una sola vez.
// Con movimiento reducido, MotionConfig (en App) deja solo el fundido.
export default function Reveal({ as = "div", delay = 0, children, ...props }) {
  const M = motion[as]
  return (
    <M
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.33, 1, 0.68, 1] }}
      {...props}
    >
      {children}
    </M>
  )
}
