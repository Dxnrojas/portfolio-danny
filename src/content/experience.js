// Trayectoria: experiencia laboral primero, luego educación.

export const experience = [
  {
    id: "monitoria-dmi",
    title: { es: "Community manager del programa DMI", en: "Community manager, DMI program" },
    org: { es: "Monitoría · Universidad Icesi", en: "Teaching assistantship · Universidad Icesi" },
    period: { es: "ene 2024 – feb 2026", en: "Jan 2024 – Feb 2026" },
  },
  {
    id: "monitoria-interfaces",
    title: { es: "Monitora de Diseño de Interfaces II", en: "Teaching assistant, Interface Design II" },
    org: { es: "Monitoría · Universidad Icesi", en: "Teaching assistantship · Universidad Icesi" },
    period: { es: "jul 2024 – jun 2025", en: "Jul 2024 – Jun 2025" },
  },
  {
    id: "gdo",
    // SolarApp y Gases de Occidente son el mismo proyecto: una sola entrada.
    title: { es: "Diseñadora UX/UI · SolarApp", en: "UX/UI Designer · SolarApp" },
    org: { es: "Proyecto con Gases de Occidente", en: "Project with Gases de Occidente" },
    period: { es: "2025-1", en: "2025-1" },
  },
  {
    id: "mas-brownie",
    title: { es: "Branding para e-commerce", en: "E-commerce branding" },
    org: { es: "Freelance · Más Brownie", en: "Freelance · Más Brownie" },
    period: { es: "2025-1", en: "2025-1" },
  },
]

// Solo si cabe en una sección de «Otras experiencias».
export const otherExperience = [
  { id: "ecocampus", title: { es: "Ecocampus", en: "Ecocampus" }, period: { es: "2024-2", en: "2024-2" } },
  { id: "innlab", title: { es: "InnLab con ACH", en: "InnLab with ACH" }, period: null }, // TODO: fecha
  {
    id: "representante",
    title: { es: "Representante de carrera", en: "Program student representative" },
    period: null, // TODO: fecha
  },
]

export const education = [
  {
    id: "icesi",
    title: { es: "Diseño de Medios Interactivos", en: "Interactive Media Design" },
    org: { es: "Universidad Icesi, Cali", en: "Universidad Icesi, Cali" },
    period: { es: "Graduación 2027", en: "Graduating 2027" },
    note: { es: "Cuadro de honor 2024-1", en: "Honor roll 2024-1" },
  },
]
