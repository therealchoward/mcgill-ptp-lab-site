export interface Member {
  name: string;
  role: string;
  photo: string;
  category: "leadership" | "faculty" | "postdoc" | "graduate" | "staff" | "undergraduate";
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
    name: "Jessica Strachan",
    role: "Operations Manager",
    photo: "/images/members/strachan.jpeg",
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
    name: "Radheesh Ameresekere",
    role: "Graduate Fellow",
    photo: "/images/members/ameresekere.jpg",
    category: "graduate",
  },
  {
    name: "Alex Carty",
    role: "Graduate Fellow",
    photo: "/images/members/carty.jpg",
    category: "graduate",
  },
  {
    name: "Asya Ciftci",
    role: "Graduate Fellow",
    photo: "/images/members/ciftci.jpg",
    category: "graduate",
  },
  {
    name: "Maryna Nekrasova",
    role: "Graduate Fellow",
    photo: "/images/members/nekrasova.jpg",
    category: "graduate",
  },
  {
    name: "Robbie Dillon",
    role: "PhD Candidate in Philosophy @ McGill University",
    photo: "/images/members/dillon.jpg",
    category: "graduate",
  },
  {
    name: "Mark Xiao",
    role: "Undergraduate in Philosophy @ McGill University",
    photo: "/images/members/xiao.jpeg",
    category: "undergraduate",
  },
  {
    name: "John Bollinger",
    role: "Undergraduate Fellow",
    photo: "/images/members/bollinger.jpg",
    category: "undergraduate",
  },
  {
    name: "Warren Chen",
    role: "Undergraduate Fellow",
    photo: "/images/members/chen.jpg",
    category: "undergraduate",
  },
  {
    name: "Lindsay Cobb",
    role: "Undergraduate Fellow",
    photo: "/images/members/cobb.jpg",
    category: "undergraduate",
  },
];
