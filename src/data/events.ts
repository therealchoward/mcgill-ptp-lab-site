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
    series: "CAPAI Online Speaker Series",
    title:
      "\"Emotional Overreliance and the Case of AI Chatbots\" with Zoey Lavallee (McGill)",
    description:
      "The growing use of AI chatbots for emotionally significant purposes raises questions about how dependence on these systems may transform us as affective beings. This talk addresses one such concern: that some individuals may become <em>too</em> emotionally reliant on chatbots. Drawing on the situated affectivity literature, I adopt a descriptive account of chatbots as affective scaffolds, then develop a normative account of emotional overreliance that distinguishes it from benign or beneficial forms of deep affective dependence. Emotional overreliance, I argue, is a pattern of affective scaffolding that is self-undermining: the reliance itself erodes the agent's capacity to revise their scaffolding relations where their situation calls for it, and it can do so even while the reliance continues to feel beneficial. Because human life predictably calls for such revision, an agent whose capacity to enact it is compromised is exposed to foreseeable harm. I then apply this account to AI chatbots, focusing on psychotherapy chatbots. I argue that core features commonly marketed as advantages of these products are also features that promote the pattern of overreliance, such that current chatbots pose a particularly serious risk of this pattern by design.<br/><br/><em>Registration details are on the <a href=\"https://www.capai-acpia.ca/events\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-accent hover:underline\">CAPAI events page</a>.</em>",
    date: "November 20, 2026, 1:00–2:30 PM",
    location: "Online",
    access: "Registration required",
  },
  {
    title:
      "\"Digital Wisdom: Trade-offs, Honesty, and Judgment in the Age of Artificial Intelligence\" with Joshua Skorburg (University of Guelph)",
    description:
      "Nearly every AI policy, from course syllabi to national strategies, now invokes the \"ethical use\" of AI. Few can say what that looks like in practice. In this talk, drawn from a book in progress, I suggest part of the reason is that AI ethics has been doing only half its job. Borrowing from William James's reply to W.K. Clifford, I argue that the field has two duties: to identify where AI goes wrong, and to identify where it goes well. The first duty has been discharged thoroughly. But the second has been largely neglected, including esp. the question of what it costs not to use these systems. Most of the ethical questions people actually face about AI are trade-offs between plural goods. A clinician who lets AI draft her notes gains time for patients and relief from burnout, but she may lose the place where her clinical reasoning happens. No rule settles which good should win out. I propose that such cases call for digital wisdom: judgment about trade-offs, whose precondition is honesty with oneself. I close by responding to the objection that \"use it wisely\" makes individual users responsible for harms produced by design and market incentives.<br/><br/><em>Registration details are on the <a href=\"https://www.mcgill.ca/jarislowsky-chair/channels/event/seminar-joshua-skorburg-digital-wisdom-trade-offs-honesty-and-judgment-age-artificial-intelligence-375144\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-accent hover:underline\">Jarislowsky Chair event page</a>.</em>",
    date: "November 20, 2026, 3:30–5:30 PM",
    location: "Thomson House, Room 404",
    access: "Registration required",
    host: "Hosted by the Jarislowsky Chair",
  },
  {
    title: "AI Mini-Course",
    description:
      "Should an algorithm decide who gets a job, a loan, or bail? Who's in charge of the systems reshaping public life — and who should be? Over three evenings this winter, scholars from across McGill introduce the ethics and politics of AI, how these systems work, and how they're affecting us all. No technical background required — just curiosity and questions of your own.<br/><br/>Exact dates and location will be announced ahead of the first session.",
    date: "February–March 2027",
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
    series: "Jarislowsky Lecture Series in Human Nature and Technology",
    title:
      "\"Natural and Mechanical Conversations\" with Jennifer Nagel (University of Toronto)",
    description:
      "Conversation is a natural human activity, although no longer an exclusively human activity: we can now talk to chatbots, and they can talk to each other. In human conversations, intrinsic epistemic motivations drive participants towards states of shared knowledge, aided by addressee backchannel signals — <em>mhm, huh? yeah, no, okay, oh</em> — marking progress towards this goal. This lecture argues that conversations with currently deployed chatbots do not work to produce states of shared knowledge, both because these chatbots lack intrinsic epistemic motivation, and because they are incapable of genuine backchannel signaling. These limitations are subtly evident when chatbots are paired with human conversational partners, and more strikingly evident when chatbots talk to each other.",
    date: "October 22, 2026, 3:30–5:30 PM",
    location: "Thomson House, Ballroom",
  },
  {
    title:
      "\"Credulity, Imagination, and Interpersonal Understanding\" with Daniel Munro (Boston University)",
    /* The \u00A0 (non-breaking space) in "and AI generated" keeps those words
       together so the abstract's last line doesn't end up as a two-word stub.
       Don't replace them with ordinary spaces. */
    description:
      "Empirical research has uncovered various cognitive limitations and biases that make it difficult to detect deceptive testimony in real-time, as we receive it. While these limitations and biases might seem epistemically pernicious, some epistemologists have given optimistic takes, arguing that they're epistemically innocuous or even beneficial. I focus on a source of credulity about testimony that has been neglected in this literature. We often cognitively process other people's testimony by constructing mental imagery, or by imaginatively representing the contents of that testimony; empirical evidence suggests that, the more vivid and emotionally arousing this imagery, the more likely we are to believe the testimony without critically evaluating it. I first argue that prior, epistemically optimistic analyses of human credulity can't be applied to this specific form. I then offer an alternative explanation of its epistemic benefits: it enables deeper forms of interpersonal understanding that we couldn't achieve without it. While these benefits can be effectively accrued in ordinary face-to-face conversations, they're increasingly disrupted by phenomena like online misinformation and\u00A0AI\u00A0generated content.",
    date: "October 15, 2026, 12:00–1:30 PM",
    access: "Open to the public",
    host: "Hosted by the Centre de recherche en éthique",
  },
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
