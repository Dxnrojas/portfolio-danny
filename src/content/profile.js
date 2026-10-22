// Perfil de Daniela. Todo el texto visible del sitio sale de src/content/*.js.
// Cada texto bilingüe es { es, en }.

export const profile = {
  name: "Daniela Rojas Aristizábal",
  shortName: "Daniela Rojas",
  wordmark: "Daniela Rojas",
  role: { es: "Diseñadora UX/UI", en: "UX/UI Designer" },
  location: "Cali - Medellín",
  email: "drojasaristi19@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/danielarojasuxuidesign/",
    behance: "https://www.behance.net/danielarojasa19",
  },
  // Frase del hero. TODO: que Daniela apruebe la redacción final.
  // Las palabras en accent se muestran en Playfair cursiva.
  headline: {
    es: { before: "Diseño que empieza por", accent: "entender", after: "a las personas" },
    en: { before: "Design that starts by", accent: "understanding", after: "people" },
  },
  intro: {
    es: "Diseñadora UX/UI enfocada en investigación de usuarios, análisis de datos e insights. Busco práctica en UX/UI, con especial interés en banca y fintech.",
    en: "UX/UI designer focused on user research, data analysis and insights. Looking for a UX/UI internship, with a special interest in banking and fintech.",
  },
  // Sobre mí. TODO: Daniela puede reemplazar este párrafo por uno escrito por ella.
  about: {
    es: "Estudio Diseño de Medios Interactivos en la Universidad Icesi (Cali) y me gradúo en 2027. Me interesa convertir lo que dicen y hacen las personas en decisiones de diseño claras, apoyadas en investigación y datos.",
    en: "I study Interactive Media Design at Universidad Icesi (Cali) and graduate in 2027. I care about turning what people say and do into clear design decisions, backed by research and data.",
  },
  competencies: [
    { es: "Pensamiento crítico", en: "Critical thinking" },
    { es: "Creatividad e iniciativa", en: "Creativity and initiative" },
    { es: "Liderazgo e influencia social", en: "Leadership and social influence" },
    { es: "Diseño y programación de tecnología", en: "Technology design and programming" },
  ],
  tools: [{ es: "Suite de Adobe", en: "Adobe Suite" }, { es: "Figma", en: "Figma" }, { es: "Next.js", en: "Next.js" }],
  languages: [{ es: "Inglés B1", en: "English B1" }],
  showPhoto: false,
}
