export interface Event {
  title: string;
  /** Optional series name, shown above the title. */
  series?: string;
  description?: string;
  /** Coarsest date that is actually known, e.g. "June 2027" or "October 22, 2026, 3:30–5:30 PM EST". */
  date?: string;
  /** Omitted entirely when unknown — never rendered as "TBA". */
  location?: string;
  /** e.g. "By invitation only", "Registration required", "Open to the public". */
  access?: string;
  /** e.g. "Hosted by the Lab for the Future of Citizenship". */
  host?: string;
}

/** Displayed in array order — chronological, with undated events last. */
export const upcomingEvents: Event[] = [
  {
    series: "Jarislowsky Lecture Series in Human Nature and Technology",
    title:
      "\"Natural and Mechanical Conversations\" with Jennifer Nagel (University of Toronto)",
    description:
      "Conversation is a natural human activity, although no longer an exclusively human activity: we can now talk to chatbots, and they can talk to each other. In human conversations, intrinsic epistemic motivations drive participants towards states of shared knowledge, aided by addressee backchannel signals — <em>mhm, huh? yeah, no, okay, oh</em> — marking progress towards this goal. This lecture argues that conversations with currently deployed chatbots do not work to produce states of shared knowledge, both because these chatbots lack intrinsic epistemic motivation, and because they are incapable of genuine backchannel signaling. These limitations are subtly evident when chatbots are paired with human conversational partners, and more strikingly evident when chatbots talk to each other.",
    date: "October 22, 2026, 3:30–5:30 PM",
    location: "Thomson House, Ballroom",
  },
  {
    title: "AI Mini-Course",
    description:
      "Should an algorithm decide who gets a job, a loan, or bail? Who's in charge of the systems reshaping public life — and who should be? Over three evenings this fall, scholars from across McGill introduce the ethics and politics of AI, how these systems work, and how they're affecting us all. No technical background required — just curiosity and questions of your own.<br/><br/>Exact dates and location will be announced ahead of the first session.",
    date: "October–November 2026",
    access: "Open to the public",
  },
  {
    title: "PTP Lab Undergraduate Fellows Workshop",
    description:
      "The Undergraduate Fellows Workshop features presentations from the Lab's undergraduate fellows on issues in technology and policy, with commentary and feedback from our graduate fellows. Presented papers will be published, pending final review, in the McGill undergraduate philosophy journal <em>Fragments</em>.",
    date: "April 9, 2027",
    access: "By invitation only",
  },
  {
    title: "Content Moderation and Freedom of Speech Workshop",
    description:
      "This workshop examines platform governance and content moderation policy, and the difficulty of balancing user safety and the integrity of the information environment against the value of free expression.<br/><br/>Registration details will be announced closer to the date.",
    date: "May 2027",
    access: "Registration required",
    host: "Hosted by the Jarislowsky Chair",
  },
  {
    title: "Workshop on the Ethics and Politics of AI Alignment",
    description:
      "This two-day workshop brings together researchers in philosophy, computer science, and policy to examine the ethics and politics of AI alignment. The first day takes up alignment and values — what it means for a system to be aligned, and to whose values. The second turns to governance and power: who sets those values, through what institutions, and with what accountability.",
    date: "June 2027",
    access: "By invitation only",
  },
  {
    title:
      "AI Personhood: Legal, Philosophical, and Computational Perspectives",
    description:
      "This workshop asks whether AI personhood is feasible or desirable, bringing legal, philosophical, and computational perspectives to bear on the question.",
    host: "Hosted by the Lab for the Future of Citizenship",
  },
];

/** Most recent first. */
export const pastEvents: Event[] = [
  {
    title: "Digital Technologies & Mental Health Workshop",
    description:
      "This workshop brings together researchers from philosophy, psychology, psychiatry, and policy to examine how digital technologies are reshaping mental health. Sessions explore the practical challenges and psychological implications of social media, AI, virtual environments, and other digital technologies.",
    date: "June 25–26, 2026",
    access: "By invitation only",
  },
  {
    title: "\"Next Steps for AI Welfare Research and Policy\" with Jeff Sebo (NYU)",
    description:
      "This talk examines why AI welfare matters, how societies will react to AI welfare, and how societal reactions should factor into AI development. It first argues that there is a realistic possibility that some near-future AI systems will be conscious and/or robustly agentic, making AI welfare and moral status a pressing issue. It then examines how society is likely to respond to this possibility, drawing lessons from historical and ongoing attitudes toward animal consciousness, agency, welfare, and moral status. Finally, it considers implications for AI design, proposing that systems should be engineered to elicit emotional responses that appropriately track their capacities and moral status, while navigating uncertainty, disagreement, and user autonomy.",
    date: "April 23, 2026, 4:00–6:00 PM",
    location: "Leacock Building, Room 26, 855 Sherbrooke Street West",
    access: "Open to the public",
  },
  {
    title: "PTP Lab Undergraduate Fellows Workshop",
    description:
      "The Undergraduate Fellows Workshop features presentations from the Lab's undergraduate fellows on issues in technology and policy, with commentary and feedback from our graduate fellows. Presented papers will be published, pending final review, in the McGill undergraduate philosophy journal <em>Fragments</em>.",
    date: "April 10, 2026",
    access: "By invitation only",
  },
];
