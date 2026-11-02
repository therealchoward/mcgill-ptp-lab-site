export interface Member {
  name: string;
  role: string;
  /** Leave out until a photo arrives — the tile shows the member's initials instead. */
  photo?: string;
  category: "leadership" | "faculty" | "postdoc" | "graduate" | "staff" | "undergraduate";
}

/** "Dax Hamouth" → "DH". Shown in place of a missing photo. */
export function initials(name: string): string {
  const parts = name.split(" ");
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export const members: Member[] = [
  {
    name: "Chris Howard",
    role: "Founding Director, Associate Professor @ McGill University",
    photo: "/images/members/howard.jpg",
    category: "leadership",
  },
  {
    name: "Ian Gold",
    role: "Co-Founder, Professor and Canada Research Chair in Philosophy & Psychiatry @ McGill University",
    photo: "/images/members/gold.jpg",
    category: "leadership",
  },
  {
    name: "Hazel Krauth",
    role: "Operations Manager",
    photo: "/images/members/krauth.jpg",
    category: "leadership",
  },
  {
    name: "Sofia Forlini",
    role: "Undergraduate Fellow Coordinator",
    photo: "/images/members/forlini.jpg",
    category: "leadership",
  },
  {
    name: "Iwao Hirose",
    role: "Professor and Canada Research Chair in Value Theory and the Philosophy of Public Policy @ McGill University",
    photo: "/images/members/hirose.jpg",
    category: "faculty",
  },
  {
    name: "Jocelyn Maclure",
    role: "Professor of Philosophy and Jarislowsky Chair in Human Nature and Technology @ McGill University",
    photo: "/images/members/maclure.jpg",
    category: "faculty",
  },
  {
    name: "Dirk Schlimm",
    role: "Associate Professor of Philosophy and Associate Member in the School of CS @ McGill University",
    photo: "/images/members/schlimm.jpg",
    category: "faculty",
  },
  {
    name: "Eran Tal",
    role: "Associate Professor of Philosophy and Canada Research Chair in Data Ethics @ McGill University",
    photo: "/images/members/tal.jpg",
    category: "faculty",
  },
  {
    name: "Vincent Paquin",
    role: "Assistant Professor in the Division of Social Psychiatry and Transcultural Psychiatry @ McGill University and Psychiatrist and Researcher at the Lady Davis Institute for Medical Research, Jewish General Hospital",
    photo: "/images/members/paquin.jpg",
    category: "faculty",
  },
  {
    name: "Zoey Lavallee",
    role: "Assistant Professor in the Department of Equity, Ethics and Policy @ McGill University",
    photo: "/images/members/lavallee.jpg",
    category: "faculty",
  },
  {
    name: "Martina Orlandi",
    role: "Assistant Professor in the Applied Artificial Intelligence Program @ Trent University Durham",
    photo: "/images/members/orlandi.jpg",
    category: "faculty",
  },
  {
    name: "Hugo Cossette-Lefebvre",
    role: "Postdoctoral Researcher @ McGill University",
    photo: "/images/members/hugo.png",
    category: "postdoc",
  },
  {
    name: "Alexis Morin-Martel",
    role: "Postdoctoral Researcher @ UNC-Chapel Hill",
    photo: "/images/members/morin-martel.jpg",
    category: "postdoc",
  },
  {
    name: "Robbie Dillon",
    role: "Graduate Fellow",
    photo: "/images/members/dillon.jpg",
    category: "graduate",
  },
  {
    name: "Jacob Hamel-Mottiez",
    role: "Graduate Fellow",
    photo: "/images/members/hamel-mottiez.jpg",
    category: "graduate",
  },
  {
    name: "Dax Hamouth",
    role: "Graduate Fellow",
    category: "graduate",
  },
  {
    name: "Olivia Railton",
    role: "Graduate Fellow",
    photo: "/images/members/railton.jpg",
    category: "graduate",
  },
  {
    name: "Alex Carty",
    role: "PhD Candidate in Philosophy @ McGill University",
    photo: "/images/members/carty.jpg",
    category: "graduate",
  },
  {
    name: "Mark Xiao",
    role: "Undergraduate in Philosophy @ McGill University",
    photo: "/images/members/xiao.jpeg",
    category: "undergraduate",
  },
  {
    name: "Benjamin Adelson",
    role: "Undergraduate Fellow",
    photo: "/images/members/adelson.jpg",
    category: "undergraduate",
  },
  {
    name: "Madeline Brown-Vega",
    role: "Undergraduate Fellow",
    photo: "/images/members/brown-vega.jpg",
    category: "undergraduate",
  },
  {
    name: "Bailey Curtin",
    role: "Undergraduate Fellow",
    photo: "/images/members/curtin.jpg",
    category: "undergraduate",
  },
  {
    name: "Danielle Oltman",
    role: "Undergraduate Fellow",
    photo: "/images/members/oltman.jpg",
    category: "undergraduate",
  },
];
