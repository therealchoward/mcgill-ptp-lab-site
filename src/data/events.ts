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
      "The Digital Technologies & Mental Health Workshop brings together leading researchers from philosophy, technology studies, and policy to examine the complex relationships between digital technologies and mental health. Featuring structured sessions exploring the practical challenges and mental health implications of social media, AI, virtual environments, and other emerging technologies.",
    date: "June 25–26, 2026",
    note: "By invitation only.",
  },
  {
    title: "Next Steps for AI Welfare Research and Policy",
    description:
      "A lecture by Jeff Sebo exploring the future of AI welfare research and policy. Open to the public, no registration required.",
    date: "April 23, 2026, 4:00–6:00 PM",
    note: "Leacock Building, Room 26, 855 Sherbrooke Street West.",
  },
  {
    title: "PTP Lab Undergraduate Fellows Workshop",
    description:
      "The Undergraduate Fellows Workshop features presentations from the Lab's undergraduate fellows on issues in technology and policy, with commentary and feedback from our graduate fellows. Presented papers will be published, pending final review, in the McGill undergraduate philosophy journal <em>Fragments</em>.",
    date: "April 10, 2026",
    note: "By invitation only.",
  },
];
