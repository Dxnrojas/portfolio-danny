// Notas del mapa de afinidad del hero.
// Regla: cada nota sale de un texto real de Daniela. Nunca inventar cifras ni citas.
// status "draft": reformulación del resumen del proyecto que ella escribió.
//   TODO: reemplazar por hallazgos de investigación reales cuando los comparta.

export const insightGroups = [
  { id: "grupo", label: { es: "Decidir en grupo", en: "Deciding as a group" }, color: "rose" },
  { id: "confianza", label: { es: "Confianza", en: "Trust" }, color: "sage" },
  { id: "claridad", label: { es: "Claridad y hábitos", en: "Clarity and habits" }, color: "butter" },
]

export const insights = [
  {
    id: "moshoo-estres",
    project: "moshoo",
    group: "grupo",
    status: "draft",
    text: {
      es: "Comprar entradas de conciertos en grupo genera estrés y desorganización.",
      en: "Buying concert tickets as a group causes stress and disorganization.",
    },
  },
  {
    id: "tripmatch-discusiones",
    project: "tripmatch",
    group: "grupo",
    status: "draft",
    text: {
      es: "Planear un viaje grupal exige tener en cuenta las preferencias de todos para evitar discusiones.",
      en: "Planning a group trip means weighing everyone's preferences to avoid arguments.",
    },
  },
  {
    id: "moshoo-fraude",
    project: "moshoo",
    group: "confianza",
    status: "draft",
    text: {
      es: "La seguridad contra fraudes es prioritaria al comprar entradas.",
      en: "Protection against fraud is a priority when buying tickets.",
    },
  },
  {
    id: "ctc-confianza",
    project: "crack-the-code",
    group: "confianza",
    status: "draft",
    text: {
      es: "En una plataforma EdTech, la confianza se construye y también se mide.",
      en: "On an EdTech platform, trust has to be built and also measured.",
    },
  },
  {
    id: "solarapp-datos",
    project: "solarapp",
    group: "claridad",
    status: "draft",
    text: {
      es: "Los datos técnicos de los paneles solares no son claros para quien los usa.",
      en: "Technical solar panel data isn't clear to the people who use it.",
    },
  },
  {
    id: "sizzle-tiempo",
    project: "sizzle",
    group: "claridad",
    status: "draft",
    text: {
      es: "Los estudiantes universitarios necesitan organizar sus comidas diarias y ahorrar tiempo.",
      en: "University students need to plan their daily meals and save time.",
    },
  },
  {
    id: "oaki-juego",
    project: "oaki",
    group: "claridad",
    status: "draft",
    text: {
      es: "Convertir la sostenibilidad en juego motiva a niños y adolescentes a actuar.",
      en: "Turning sustainability into a game motivates children and teens to act.",
    },
  },
]
