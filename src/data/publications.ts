export interface Publication {
  authors: string;
  year: string;
  title: string;
  /** BCP 47 tag for non-English titles/venues, e.g. "fr". Keeps browser
   *  translation from misreading the page's language, and lets screen
   *  readers switch pronunciation. */
  lang?: string;
  italicTitle?: boolean;
  venuePrefix?: string;
  venue: string;
  venueExtra?: string;
  url?: string;
  note?: string;
  clusters: string[];
}

export const publications: Publication[] = [
  {
    authors: "Morin-Martel, A.",
    year: "Forthcoming",
    title:
      "Are you even a person? Agency-directed distrust and artificial interlocutors",
    venue: "Ergo",
    clusters: ["Platform Ethics & Governance"],
  },
  {
    authors: "Howard, C., & Cofone, I.",
    year: "Forthcoming",
    title: "AI personhood has no bearer",
    venuePrefix: "In V. Kurki & E. Leshem (Eds.), ",
    venue: "Philosophical Foundations of Legal Personhood",
    venueExtra: ". Oxford University Press",
    clusters: ["AI Ethics & Policy"],
  },
  {
    authors: "Cossette-Lefebvre, H.",
    year: "Forthcoming",
    lang: "fr",
    title:
      "Le contenu généré par l'IA a-t-il de la valeur? IA génératives, le statut d'auteur, et autonomie personnelle",
    venuePrefix: "In L. Langlois (Ed.), ",
    venue: "IA générative, culture et médias",
    venueExtra: ". Presses de l'Université Laval",
    clusters: ["AI Ethics & Policy"],
  },
  {
    authors: "Cossette-Lefebvre, H.",
    year: "Forthcoming",
    lang: "fr",
    title:
      "Dépendance épistémique et liberté d'expression dans la sphère publique numérique",
    venuePrefix:
      "In M. Potvin, M. Lacroix, & J.-F. Gaudreault-Desbiens (Eds.), ",
    venue:
      "Savoirs, science, liberté académique, et liberté d'expression au Canada",
    venueExtra: ". Presses de l'Université de Montréal",
    clusters: ["Platform Ethics & Governance"],
  },
  {
    authors: "Howard, C.",
    year: "n.d.",
    title: "Decentralizing the digital public sphere",
    venue: "",
    venueExtra: "Working paper",
    clusters: ["Platform Ethics & Governance"],
  },
  {
    authors: "Howard, C.",
    year: "n.d.",
    title: "Power diffusion through pluralism: The case for decentralized AI",
    venue: "",
    venueExtra: "Working paper",
    clusters: ["AI Ethics & Policy"],
  },
  {
    authors: "Cossette-Lefebvre, H., & Stoljar, N.",
    year: "2026",
    title: "Automated gatekeepers: How recommender systems shape and constrain autonomy",
    venuePrefix:
      "In M. Anzalone, S. Achella, F. Battaglia, & A. Donise (Eds.), ",
    venue:
      "Reconfiguring Human Autonomy: Conceptual Challenges and Ethical Implications in the Age of AI",
    venueExtra: " (Integrated Science, Vol. 40). Springer Nature",
    url: "https://doi.org/10.1007/978-3-032-14537-6_4",
    clusters: ["Platform Ethics & Governance"],
  },
  {
    authors: "Howard, C.",
    year: "2026",
    title: "Rational feelings for virtual things?",
    venue: "Philosophical Issues, 35",
    venueExtra: "(1), 85–92",
    url: "https://onlinelibrary.wiley.com/doi/10.1111/phis.70007",
    clusters: ["Platform Ethics & Governance"],
  },
  {
    authors:
      "Paquin, V., Lavallee, Z., Huot-Lavoie, M., Ku, B. S., Díaz-Caneja, C. M., & Gülöksüz, S.",
    year: "2026",
    title:
      "Situating problematic gaming and psychotic-like experiences in the adolescent landscape of affordances",
    venue: "Journal of Behavioral Addictions, 15",
    venueExtra: "(1), 320–331",
    url: "https://doi.org/10.1556/2006.2025.00094",
    clusters: ["Mental Health & Biotech"],
  },
  {
    authors:
      "Paquin, V., Jiang, R., Shah, J. L., Jarvis, G. E., Nickrenz, E., Ferrari, M., & Park, M.",
    year: "2026",
    title:
      "Knowing how to ask about digital culture in youth mental health care: A co-designed tool",
    venue: "Early Intervention in Psychiatry, 20",
    venueExtra: "(7), e70203",
    url: "https://doi.org/10.1111/eip.70203",
    clusters: ["Mental Health & Biotech"],
  },
  {
    authors: "Lavallee, Z.",
    year: "2026",
    title: "Affective scaffolding in addiction",
    venue: "Inquiry, 69",
    venueExtra: "(4), 2286–2314",
    url: "https://doi.org/10.1080/0020174X.2023.2194321",
    clusters: ["Mental Health & Biotech"],
  },
  {
    authors: "Cossette-Lefebvre, H., & Lippert-Rasmussen, K.",
    year: "2025",
    title:
      "Neither direct, nor indirect: Understanding proxy-based algorithmic discrimination",
    venue: "The Journal of Ethics, 29",
    venueExtra: ", 719–745",
    url: "https://doi.org/10.1007/s10892-025-09520-0",
    clusters: ["AI Ethics & Policy"],
  },
  {
    authors: "Cossette-Lefebvre, H.",
    year: "2025",
    title:
      "The social turn in the ethics of AI: Between deliberation and relational justice",
    venuePrefix: "In M. Hähnel & R. Müller (Eds.), ",
    venue: "A Companion to Applied Philosophy of AI",
    venueExtra: " (pp. 295–309). Wiley-Blackwell",
    url: "https://doi.org/10.1002/9781394238651.ch21",
    clusters: ["AI Ethics & Policy"],
  },
  {
    authors:
      "Cossette-Lefebvre, H., Maclure, J., Vold, K., Facal, C., & Dumont, I.",
    year: "2025",
    lang: "fr",
    title:
      "Avatars numériques post-mortem et deuil: Un point de vue éthique",
    venue: "Psychologie Québec",
    url: "https://www.ordrepsy.qc.ca/-/avatars-numeriques-post-mortem-et-deuil-un-point-de-vue-ethique",
    clusters: ["Mental Health & Biotech"],
  },
  {
    authors: "Maclure, J., & Morin-Martel, A.",
    year: "2025",
    title: "AI ethics' institutional turn",
    venue: "Digital Society, 4",
    venueExtra: ", 18",
    url: "https://doi.org/10.1007/s44206-025-00174-x",
    clusters: ["AI Ethics & Policy"],
  },
  {
    authors:
      "Petropoulos, G., Copoeru, I., Kemp, R., Lavallee, Z., Moskalewicz, M., Westin, A., & Messas, G.",
    year: "2025",
    title:
      "The unrealized potential of phenomenology in understanding addiction",
    venue: "Philosophy, Psychiatry, & Psychology",
    url: "https://doi.org/10.1353/ppp.0.a973599",
    clusters: ["Mental Health & Biotech"],
  },
  {
    authors: "Paquin, V.",
    year: "2025",
    title:
      "Taking the long view on digital culture and mental health: Principles from critical realism",
    venue: "Qualitative Health Research",
    note: "Advance online publication.",
    url: "https://doi.org/10.1177/10497323251389814",
    clusters: ["Mental Health & Biotech"],
  },
  {
    authors: "Lavallee, Z., & Osler, L.",
    year: "2024",
    title: "Affordances and the shape of addiction",
    venue: "Philosophy, Psychiatry, & Psychology, 31",
    venueExtra: "(4), 379–395",
    url: "https://doi.org/10.1353/ppp.2024.a948895",
    clusters: ["Mental Health & Biotech"],
  },
  {
    authors: "Rodriguez Duque, S., Tal, E., & Barbic, S.",
    year: "2024",
    title:
      "The role of ethical and social values in psychosocial measurement",
    venue: "Measurement, 225",
    venueExtra: ", 113993",
    url: "https://doi.org/10.1016/j.measurement.2023.113993",
    clusters: ["Data Ethics & Measurement"],
  },
  {
    authors: "Morin-Martel, A.",
    year: "2024",
    title:
      "Machine learning in bail decisions and judges' trustworthiness",
    venue: "AI & Society, 39",
    venueExtra: "(4), 2033–2044",
    url: "https://doi.org/10.1007/s00146-023-01673-6",
    clusters: ["AI Ethics & Policy"],
  },
  {
    authors: "Cossette-Lefebvre, H., & Maclure, J.",
    year: "2023",
    title:
      "AI's fairness problem: Understanding wrongful discrimination in the context of automated decision-making",
    venue: "AI & Ethics, 3",
    venueExtra: "(4), 1255–1269",
    url: "https://doi.org/10.1007/s43681-022-00233-w",
    clusters: ["AI Ethics & Policy"],
  },
  {
    authors: "Tal, E.",
    year: "2023",
    title:
      "Target specification bias, counterfactual prediction, and algorithmic fairness in healthcare",
    venuePrefix: "In ",
    venue:
      "Proceedings of the 2023 AAAI/ACM Conference on AI, Ethics, and Society (AIES '23)",
    venueExtra: " (pp. 312–321). ACM",
    url: "https://doi.org/10.1145/3600211.3604678",
    clusters: ["Data Ethics & Measurement"],
  },
  {
    authors: "Hirose, I.",
    year: "2022",
    title: "The Ethics of Pandemics: An Introduction",
    italicTitle: true,
    venue: "",
    venueExtra: "Routledge",
    url: "https://doi.org/10.4324/9781003203759",
    clusters: ["Mental Health & Biotech"],
  },
  {
    authors: "Maclure, J.",
    year: "2021",
    title:
      "AI, explainability and public reason: The argument from the limitations of the human mind",
    venue: "Minds and Machines, 31",
    venueExtra: "(3), 421–438",
    url: "https://doi.org/10.1007/s11023-021-09570-x",
    clusters: ["AI Ethics & Policy"],
  },
  {
    authors: "Maclure, J., & Russell, S.",
    year: "2021",
    title: "AI for humanity: The global challenges",
    venuePrefix: "In B. Braunschweig & M. Ghallab (Eds.), ",
    venue: "Reflections on Artificial Intelligence for Humanity",
    venueExtra:
      " (Lecture Notes in Computer Science, Vol. 12600, pp. 116–126)",
    url: "https://doi.org/10.1007/978-3-030-69128-8_8",
    clusters: ["AI Ethics & Policy"],
  },
  {
    authors: "Lavallee, Z.",
    year: "2020",
    title: "Addictive craving: There's more to wanting more",
    venue: "Philosophy, Psychiatry, & Psychology, 27",
    venueExtra: "(3), 227–238",
    url: "https://doi.org/10.1353/ppp.2020.0028",
    clusters: ["Mental Health & Biotech"],
  },
  {
    authors: "Maclure, J.",
    year: "2020",
    title: "The new AI spring: A deflationary view",
    venue: "AI & Society, 35",
    venueExtra: ", 747–750",
    url: "https://doi.org/10.1007/s00146-019-00912-z",
    clusters: ["AI Ethics & Policy"],
  },
  {
    authors: "Tal, E.",
    year: "2020",
    title: "Measurement in science",
    venuePrefix: "In E. N. Zalta (Ed.), ",
    venue: "Stanford Encyclopedia of Philosophy",
    url: "https://plato.stanford.edu/entries/measurement-science/",
    clusters: ["Data Ethics & Measurement"],
  },
];
