// Positionnement B2B construit à partir des pratiques courantes du secteur
// (prévention des risques psychosociaux, démarches QVCT) : aucune donnée
// propre au cabinet n'est inventée ici (formats, durées et tarifs restent
// à construire sur devis avec chaque entreprise).

export const BUSINESS_BENEFITS = [
  {
    title: "Prévention des risques psychosociaux",
    description:
      "Des outils concrets de gestion du stress pour accompagner votre démarche QVCT et limiter l'impact des tensions au travail.",
  },
  {
    title: "Concentration et performance",
    description:
      "Des techniques de respiration et de relaxation qui aident à mieux gérer les pics de charge et à retrouver de la clarté mentale.",
  },
  {
    title: "Cohésion d'équipe",
    description:
      "Des temps collectifs qui créent un espace commun, en dehors du cadre habituel du travail.",
  },
  {
    title: "Marque employeur",
    description:
      "Un signal concret de l'attention portée au bien-être des équipes, valorisable dans votre politique RH.",
  },
] as const;

export const BUSINESS_FORMATS = [
  {
    title: "Ateliers ponctuels",
    description:
      "Une découverte de la méthode sur un temps court : journée bien-être, séminaire, événement interne.",
  },
  {
    title: "Cycles de séances collectives",
    description:
      "Un accompagnement dans la durée, pour ancrer progressivement les outils auprès de vos équipes.",
  },
  {
    title: "Conférences de sensibilisation",
    description:
      "Une introduction à la sophrologie et à ses apports, pour vos équipes ou vos managers.",
  },
] as const;

export const BUSINESS_STEPS = [
  {
    title: "Premier échange",
    description: "Nous cernons ensemble vos besoins, vos objectifs et le contexte de vos équipes.",
  },
  {
    title: "Proposition sur mesure",
    description: "Format, durée, nombre de participants et tarif sont adaptés à votre situation.",
  },
  {
    title: "Intervention",
    description: "Sur site ou à distance, selon ce qui convient le mieux à votre organisation.",
  },
  {
    title: "Bilan",
    description: "Un temps d'échange en fin d'intervention, avec possibilité de reconduire le format.",
  },
] as const;
