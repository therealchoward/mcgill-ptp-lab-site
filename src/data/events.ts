export interface Event {
  title: string;
  description: string;
  date: string;
  note?: string;
}

export const events: Event[] = [
  {
    title: "Digital Technologies & Mental Health Workshop",
    description:
      "The Lab's flagship workshop brings together leading researchers from philosophy, psychology, technology studies, and policy to examine how digital technologies are reshaping mental health. Sessions explore the practical challenges and psychological implications of social media, AI, virtual environments, and other digital technologies.",
    date: "June 25–26, 2026",
    note: "By invitation only.",
  },
  {
    title: "\"Next Steps for AI Welfare Research and Policy\" with Jeff Sebo (NYU)",
    description:
      "This talk examines why AI welfare matters, how societies will react to AI welfare, and how societal reactions should factor into AI development. It first argues that there is a realistic possibility that some near-future AI systems will be conscious and/or robustly agentic, making AI welfare and moral status a pressing issue. It then examines how society is likely to respond to this possibility, drawing lessons from historical and ongoing attitudes toward animal consciousness, agency, welfare, and moral status. Finally, it considers implications for AI design, proposing that systems should be engineered to elicit emotional responses that appropriately track their capacities and moral status, while navigating uncertainty, disagreement, and user autonomy.<br/><br/><strong>Open to the public, no registration required.</strong>",
    date: "April 23, 2026, 4:00–6:00 PM",
    note: "Leacock Building, Room 26, 855 Sherbrooke Street West",
  },
  {
    title: "PTP Lab Undergraduate Fellows Workshop",
    description:
      "The Undergraduate Fellows Workshop features presentations from the Lab's undergraduate fellows on issues in technology and policy, with commentary and feedback from our graduate fellows. Presented papers will be published, pending final review, in the McGill undergraduate philosophy journal <em>Fragments</em>.",
    date: "April 10, 2026",
    note: "By invitation only.",
  },
];
