export interface Publication {
  authors: string;
  year: string;
  title: string;
  venue: string;
  url?: string;
  clusters: string[];
}

export const publications: Publication[] = [
  {
    authors: "Howard, C.",
    year: "2026",
    title: "Rational feelings for virtual things?",
    venue: "Philosophical Issues",
    url: "https://onlinelibrary.wiley.com/doi/10.1111/phis.70007",
    clusters: ["AI Ethics & Policy"],
  },
  {
    authors: "Paquin, V., Lavallee, Z., Huot-Lavoie, M., Ku, B. S., Díaz-Caneja, C. M., & Gülöksüz, S.",
    year: "2026",
    title:
      "Situating problematic gaming and psychotic-like experiences in the adolescent landscape of affordances",
    venue: "Journal of Behavioral Addictions",
    url: "https://doi.org/10.1101/2025.03.24.25324546",
    clusters: ["Mental Health & Technology"],
  },
  {
    authors: "Maclure, J., & Morin-Martel, A.",
    year: "2025",
    title: "AI ethics' institutional turn",
    venue: "Digital Society, 4, 18",
    url: "https://doi.org/10.1007/s44206-025-00174-x",
    clusters: ["AI Ethics & Policy"],
  },
  {
    authors: "Petropoulos, G., Copoeru, I., Kemp, R., Lavallee, Z., Moskalewicz, M., Westin, A., & Messas, G.",
    year: "2025",
    title:
      "The unrealized potential of phenomenology in understanding addiction",
    venue: "Philosophy, Psychiatry, & Psychology",
    url: "https://doi.org/10.1353/ppp.0.a973599",
    clusters: ["Mental Health & Technology"],
  },
  {
    authors: "Lavallee, Z., & Osler, L.",
    year: "2024",
    title: "Affordances and the shape of addiction",
    venue: "Philosophy, Psychiatry, & Psychology, 31(4), 379–395",
    clusters: ["Mental Health & Technology"],
  },
  {
    authors: "Rodriguez Duque, S., Tal, E., & Barbic, S.",
    year: "2024",
    title:
      "The role of ethical and social values in psychosocial measurement",
    venue: "Measurement, 225, 113993",
    url: "https://doi.org/10.1016/j.measurement.2023.113993",
    clusters: ["Data Ethics & Measurement"],
  },
  {
    authors: "Cossette-Lefebvre, H., & Maclure, J.",
    year: "2023",
    title:
      "AI's fairness problem: Understanding wrongful discrimination in the context of automated decision-making",
    venue: "AI & Ethics, 3(4), 1255–1269",
    url: "https://doi.org/10.1007/s43681-022-00233-w",
    clusters: ["AI Ethics & Policy"],
  },
  {
    authors: "Lavallee, Z.",
    year: "2023",
    title: "Affective scaffolding in addiction",
    venue: "Inquiry, 1–29",
    clusters: ["Mental Health & Technology"],
  },
  {
    authors: "Tal, E.",
    year: "2023",
    title:
      "Target specification bias, counterfactual prediction, and algorithmic fairness in healthcare",
    venue:
      "In Proceedings of the 2023 AAAI/ACM Conference on AI, Ethics, and Society (AIES '23) (pp. 312–321). ACM",
    url: "https://doi.org/10.1145/3600211.3604678",
    clusters: ["Data Ethics & Measurement"],
  },
  {
    authors: "Hirose, I.",
    year: "2022",
    title: "The Ethics of Pandemics: An Introduction",
    venue: "Routledge",
    clusters: ["Mental Health & Technology"],
  },
  {
    authors: "Maclure, J.",
    year: "2021",
    title:
      "AI, explainability and public reason: The argument from the limitations of the human mind",
    venue: "Minds and Machines, 31(3), 421–438",
    url: "https://doi.org/10.1007/s11023-021-09570-x",
    clusters: ["AI Ethics & Policy"],
  },
  {
    authors: "Maclure, J., & Russell, S.",
    year: "2021",
    title: "AI for humanity: The global challenges",
    venue:
      "In B. Braunschweig & M. Ghallab (Eds.), Reflections on Artificial Intelligence for Humanity (Lecture Notes in Computer Science, Vol. 12600, pp. 116–126). Springer",
    url: "https://doi.org/10.1007/978-3-030-69128-8_8",
    clusters: ["AI Ethics & Policy"],
  },
  {
    authors: "Lavallee, Z.",
    year: "2020",
    title: "Addictive craving: There's more to wanting more",
    venue: "Philosophy, Psychiatry, & Psychology, 27(3), 227–238",
    clusters: ["Mental Health & Technology"],
  },
  {
    authors: "Maclure, J.",
    year: "2020",
    title: "The new AI spring: A deflationary view",
    venue: "AI & Society, 35, 747–750",
    url: "https://doi.org/10.1007/s00146-019-00912-z",
    clusters: ["AI Ethics & Policy"],
  },
  {
    authors: "Tal, E.",
    year: "2020",
    title: "Measurement in science",
    venue:
      "In E. N. Zalta (Ed.), Stanford Encyclopedia of Philosophy",
    url: "https://plato.stanford.edu/entries/measurement-science/",
    clusters: ["Data Ethics & Measurement"],
  },
  {
    authors: "Choudhury, S., Gold, I., & Kirmayer, L.",
    year: "2010",
    title:
      "From brain image to the Bush Doctrine: Critical neuroscience and the political uses of neurotechnology",
    venue:
      "American Journal of Bioethics Neuroscience, 1(2), 17–19",
    clusters: ["Mental Health & Technology"],
  },
];
