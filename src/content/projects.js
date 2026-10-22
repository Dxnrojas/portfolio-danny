// Proyectos. Los resúmenes en español son el texto de Daniela, sin cambios.
// Todos los proyectos enlazan directamente a Behance (no hay páginas de caso).
// Rol: diseñadora UX/UI. No agregar roles ni datos que ella no dio.
// cover: null = aún sin imagen (se muestra el marcador con la ruta esperada).

const ROLE = { es: "Diseñadora UX/UI", en: "UX/UI Designer" }

export const projects = [
  {
    slug: "solarapp",
    title: "SolarApp",
    // SolarApp y Gases de Occidente son el mismo proyecto y el mismo cliente.
    client: "Gases de Occidente",
    year: "2025-1",
    role: ROLE,
    summary: {
      es: "Diseño UX/UI de una aplicación que traduce datos técnicos de paneles solares en información clara, dándole a los usuarios autonomía y confianza en su consumo de energía.",
      en: "UX/UI design of an app that translates technical solar panel data into clear information, giving users autonomy and confidence in their energy use.",
    },
    behance: "https://www.behance.net/gallery/250429999/SolarApp-GDO",
    cover: {
      src: "/images/solarapp/portada.webp",
      alt: {
        es: "Portada de SolarApp: celular con gráficas de consumo y producción de energía solar sobre fondo azul.",
        en: "SolarApp cover: phone showing solar energy consumption and production charts on a blue background.",
      },
    },
  },
  {
    slug: "moshoo",
    title: "MOSHOO",
    year: "2025",
    role: ROLE,
    team: { es: "Equipo de 3 personas", en: "Team of 3" },
    summary: {
      es: "Plataforma centralizada (\"All-In-One\") diseñada para eliminar el estrés y la desorganización al comprar entradas de conciertos en grupo, priorizando la coordinación fluida y la seguridad contra fraudes.",
      en: "A centralized (\"All-In-One\") platform designed to remove the stress and disorganization of buying concert tickets as a group, prioritizing smooth coordination and protection against fraud.",
    },
    behance: "https://www.behance.net/gallery/224957839/APP-MOSHOO-UX-UI-Design",
    cover: {
      src: "/images/moshoo/portada.webp",
      alt: {
        es: "Portada de MOSHOO: dos celulares con un mapa de amigos y una lista de conciertos sobre fondo morado.",
        en: "MOSHOO cover: two phones with a friends map and a concert list on a purple background.",
      },
    },
  },
  {
    slug: "tripmatch",
    title: "TripMatch",
    year: null, // TODO
    role: ROLE,
    summary: {
      es: "Sistema con Inteligencia Artificial que facilita la planificación de viajes grupales, analizando las preferencias de todos para recomendar destinos justos y sin discusiones.",
      en: "An AI-powered system that makes group trip planning easier, analyzing everyone's preferences to recommend fair destinations without arguments.",
    },
    behance: "https://www.behance.net/gallery/250950525/TripMatch-Recomendation-system",
    cover: {
      src: "/images/tripmatch/portada.webp",
      alt: {
        es: "Portada de TripMatch: portátil con la página de inicio para crear viajes en grupo, sobre un cielo con nubes.",
        en: "TripMatch cover: laptop showing the landing page for planning group trips, over a cloudy sky.",
      },
    },
  },
  {
    slug: "crack-the-code",
    title: "Crack The Code",
    // No nombrar a las organizaciones aliadas: ella no lo autorizó.
    year: null, // TODO
    role: ROLE,
    summary: {
      es: "Estrategia de experiencia de usuario enfocada en construir y medir la confianza en una plataforma EdTech, impulsando el aprendizaje de habilidades digitales en Latinoamérica.",
      en: "A user experience strategy focused on building and measuring trust in an EdTech platform, driving digital skills learning across Latin America.",
    },
    behance: null, // TODO: enlace de Behance
    cover: {
      src: "/images/crack-the-code/portada.webp",
      alt: {
        es: "Portada de Crack The Code: niño sonriente con un lápiz, rodeado de íconos de código, gráficas y útiles escolares.",
        en: "Crack The Code cover: smiling boy holding a pencil, surrounded by code, chart and school supply icons.",
      },
    },
  },
  {
    slug: "sizzle",
    title: "Sizzle",
    year: null, // TODO
    role: ROLE,
    summary: {
      es: "Solución UX/UI interactiva y gamificada que ayuda a estudiantes universitarios a organizar sus comidas diarias, ahorrando tiempo y fomentando hábitos saludables.",
      en: "An interactive, gamified UX/UI solution that helps university students plan their daily meals, saving time and encouraging healthy habits.",
    },
    behance: "https://www.behance.net/gallery/239412793/SIZZLE-Gamified-Cooking-Experience",
    cover: {
      src: "/images/sizzle/portada.webp",
      alt: {
        es: "Portada de Sizzle: mano sosteniendo un celular con retos de cocina, sobre fondo naranja.",
        en: "Sizzle cover: hand holding a phone with cooking challenges, on an orange background.",
      },
    },
  },
  {
    slug: "oaki",
    title: "OAKI",
    year: "2025",
    role: ROLE,
    summary: {
      es: "App de educación ambiental que transforma la sostenibilidad en un juego, motivando a niños y adolescentes a cumplir retos ecológicos físicos en el mundo real.",
      en: "An environmental education app that turns sustainability into a game, motivating children and teens to complete physical eco-challenges in the real world.",
    },
    behance: "https://www.behance.net/gallery/228073667/APP-OAKI-UX-UI-Design",
    cover: {
      src: "/images/oaki/portada.webp",
      alt: {
        es: "Portada de OAKI: dos celulares con retos ecológicos y una mascota morada en un paisaje verde.",
        en: "OAKI cover: two phones with eco-challenges and a purple mascot in a green landscape.",
      },
    },
  },
  {
    slug: "magazine-flvsh",
    title: "MAGAZINE FLVSH",
    year: null, // TODO
    role: null, // Diseño editorial: sin rol UX/UI
    summary: {
      es: "Diseño editorial y dirección de arte para Flash, una revista trimestral de lujo en formato impreso y digital enfocada en arte y diseño. El proyecto emplea una estética urbana tipo collage, desarrollando identidades visuales y paletas de colores únicas para explorar el panorama creativo y cultural de tres ciudades: Seúl, Lille y Valencia.",
      en: "Editorial design and art direction for Flash, a quarterly luxury magazine in print and digital formats focused on art and design. The project uses an urban collage aesthetic, developing unique visual identities and color palettes to explore the creative and cultural scene of three cities: Seoul, Lille and Valencia.",
    },
    behance: "https://www.behance.net/gallery/200457339/MAGAZINE-FLVSH",
    cover: {
      src: "/images/magazine-flvsh/portada.webp",
      alt: {
        es: "Portada de MAGAZINE FLVSH: logotipo FLASH! en un globo de diálogo crema sobre fondo negro.",
        en: "MAGAZINE FLVSH cover: FLASH! logo in a cream speech bubble on a black background.",
      },
    },
  },
]
