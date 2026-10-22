// Proyectos. Los resúmenes en español son el texto de Daniela, sin cambios.
// kind: "case" = caso completo con página propia · "card" = tarjeta con enlace a Behance.
// Rol en todos los proyectos: diseñadora UX/UI. No agregar roles ni datos que ella no dio.
// Cualquier valor null se trata como TODO: el sitio lo omite o lo marca, nunca lo inventa.

const ROLE = { es: "Diseñadora UX/UI", en: "UX/UI Designer" }

const screens = (slug, n) =>
  Array.from({ length: n }, (_, i) => ({
    src: `/images/${slug}/pantalla-${i + 1}.jpg`,
    alt: { es: `Pantalla ${i + 1} de ${slug} (provisional)`, en: `${slug} screen ${i + 1} (placeholder)` },
  }))

export const projects = [
  {
    slug: "solarapp",
    kind: "case",
    title: "SolarApp",
    // SolarApp y Gases de Occidente son el mismo proyecto y el mismo cliente.
    client: "Gases de Occidente",
    year: "2025-1",
    role: ROLE,
    team: null, // TODO: tamaño del equipo
    tools: null, // TODO: herramientas usadas
    summary: {
      es: "Diseño UX/UI de una aplicación que traduce datos técnicos de paneles solares en información clara, dándole a los usuarios autonomía y confianza en su consumo de energía.",
      en: "UX/UI design of an app that translates technical solar panel data into clear information, giving users autonomy and confidence in their energy use.",
    },
    behance: "https://www.behance.net/gallery/250429999/SolarApp-GDO",
    cover: "/images/solarapp/portada.jpg",
    caseStudy: {
      result: null, // TODO
      context: null, // TODO
      objectives: null, // TODO
      research: null, // TODO: métodos, hallazgos, evidencia
      insights: null, // TODO
      screens: screens("solarapp", 4),
      validation: null, // TODO
      learnings: null, // TODO
    },
  },
  {
    slug: "moshoo",
    kind: "case",
    title: "MOSHOO",
    client: null,
    year: null, // TODO
    role: ROLE,
    team: { es: "Equipo de 3 personas", en: "Team of 3" },
    tools: null, // TODO
    summary: {
      es: "Plataforma centralizada (\"All-In-One\") diseñada para eliminar el estrés y la desorganización al comprar entradas de conciertos en grupo, priorizando la coordinación fluida y la seguridad contra fraudes.",
      en: "A centralized (\"All-In-One\") platform designed to remove the stress and disorganization of buying concert tickets as a group, prioritizing smooth coordination and protection against fraud.",
    },
    behance: "https://www.behance.net/gallery/224957839/APP-MOSHOO-UX-UI-Design",
    cover: "/images/moshoo/portada.jpg",
    caseStudy: {
      result: null, // TODO
      context: null, // TODO
      objectives: null, // TODO
      // El «Estudio de Caso UX: Adquisición y Reventa de Entradas para Conciertos»
      // es la investigación que dio origen a MOSHOO: va aquí como evidencia.
      research: {
        title: {
          es: "Estudio de Caso UX: Adquisición y Reventa de Entradas para Conciertos",
          en: "UX Case Study: Buying and Reselling Concert Tickets",
        },
        sampleSize: null, // TODO: tamaño real de la muestra. No afirmar uno.
        findings: null, // TODO: pegar hallazgos y porcentajes del estudio
      },
      insights: null, // TODO
      screens: screens("moshoo", 4),
      validation: null, // TODO
      learnings: null, // TODO
    },
  },
  {
    slug: "tripmatch",
    kind: "case",
    title: "TripMatch",
    client: null,
    year: null, // TODO
    role: ROLE,
    team: null, // TODO
    tools: null, // TODO
    summary: {
      es: "Sistema con Inteligencia Artificial que facilita la planificación de viajes grupales, analizando las preferencias de todos para recomendar destinos justos y sin discusiones.",
      en: "An AI-powered system that makes group trip planning easier, analyzing everyone's preferences to recommend fair destinations without arguments.",
    },
    behance: "https://www.behance.net/gallery/250950525/TripMatch-Recomendation-system",
    cover: "/images/tripmatch/portada.jpg",
    caseStudy: {
      result: null, // TODO
      context: null, // TODO
      objectives: null, // TODO
      research: null, // TODO
      insights: null, // TODO
      screens: screens("tripmatch", 4),
      validation: null, // TODO
      learnings: null, // TODO
    },
  },
  {
    slug: "crack-the-code",
    kind: "card",
    title: "Crack The Code",
    // No nombrar a las organizaciones aliadas: ella no lo autorizó.
    year: null, // TODO
    role: ROLE,
    summary: {
      es: "Estrategia de experiencia de usuario enfocada en construir y medir la confianza en una plataforma EdTech, impulsando el aprendizaje de habilidades digitales en Latinoamérica.",
      en: "A user experience strategy focused on building and measuring trust in an EdTech platform, driving digital skills learning across Latin America.",
    },
    behance: null, // TODO: enlace de Behance (no está en la lista)
    cover: "/images/crack-the-code/portada.jpg",
  },
  {
    slug: "sizzle",
    kind: "card",
    title: "Sizzle",
    year: null, // TODO
    role: ROLE,
    summary: {
      es: "Solución UX/UI interactiva y gamificada que ayuda a estudiantes universitarios a organizar sus comidas diarias, ahorrando tiempo y fomentando hábitos saludables.",
      en: "An interactive, gamified UX/UI solution that helps university students plan their daily meals, saving time and encouraging healthy habits.",
    },
    behance: "https://www.behance.net/gallery/239412793/SIZZLE-Gamified-Cooking-Experience",
    cover: "/images/sizzle/portada.jpg",
  },
  {
    slug: "oaki",
    kind: "card",
    title: "OAKI",
    year: null, // TODO
    role: ROLE,
    summary: {
      es: "App de educación ambiental que transforma la sostenibilidad en un juego, motivando a niños y adolescentes a cumplir retos ecológicos físicos en el mundo real.",
      en: "An environmental education app that turns sustainability into a game, motivating children and teens to complete physical eco-challenges in the real world.",
    },
    behance: "https://www.behance.net/gallery/228073667/APP-OAKI-UX-UI-Design",
    cover: "/images/oaki/portada.jpg",
  },
  {
    slug: "magazine-flvsh",
    kind: "card",
    title: "MAGAZINE FLVSH",
    year: null, // TODO
    role: null, // Trabajo de diseño visual: sin texto de caso
    summary: null,
    behance: "https://www.behance.net/gallery/200457339/MAGAZINE-FLVSH",
    cover: "/images/magazine-flvsh/portada.jpg",
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
export const caseStudies = projects.filter((p) => p.kind === "case")
