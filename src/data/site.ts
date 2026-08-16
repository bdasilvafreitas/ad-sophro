// Toute valeur "__A_COMPLETER__" correspond à une information réelle
// non fournie à ce jour : ne pas la remplacer par une valeur inventée.

export const SITE = {
  businessName: "AD Sophrologie",
  practitionerName: "Amandine Dabrowski",
  tagline: "Sophrologue en Haute-Savoie & à Genève",
  zone: "Haute-Savoie & Genève",
  graduationYear: 2026,
  certifications: [
    "Académie franco-suisse de sophrologie",
    "Hypsos France — Certification RNCP",
    "Formation TDAH — HyperSupers TDAH France (2025)",
  ],
  contact: {
    email: "__A_COMPLETER__",
    phone: "__A_COMPLETER__",
    address: "__A_COMPLETER__",
    hours: "__A_COMPLETER__",
  },
  social: {
    instagram: "__A_COMPLETER__",
    facebook: "__A_COMPLETER__",
    linkedin: "__A_COMPLETER__",
  },
  // Utilisée pour les données structurées et les balises Open Graph.
  siteUrl: "https://ad-sophrologie.fr", // __A_COMPLETER__ : nom de domaine définitif
} as const;

export const NAV_LINKS = [
  { href: "/#a-propos", label: "Qui suis-je" },
  { href: "/#sophrologie", label: "La sophrologie" },
  { href: "/#accompagnements", label: "Séances" },
  { href: "/#tarifs", label: "Tarifs" },
  { href: "/#faq", label: "FAQ" },
  { href: "/entreprises", label: "Entreprises" },
] as const;
