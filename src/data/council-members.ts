export interface CouncilMember {
  name: string;
  title: string;
  role: string;
  desc: string;
}

export const councilMembers: CouncilMember[] = [
  {
    name: "Queen Rhaenyra Targaryen",
    title: "The Queen",
    role: "Head of State",
    desc: "The First of Her Name. Rider of Syrax.",
  },
  {
    name: "Prince Daemon Targaryen",
    title: "Protector of the Realm",
    role: "War & Defense",
    desc: "Husband to the Queen. Rider of Caraxes.",
  },
  {
    name: "Lord Corlys Velaryon",
    title: "Lord of the Tides",
    role: "Hand of the Queen",
    desc: "Master of the Royal Fleet.",
  },
  {
    name: "Princess Rhaenys Targaryen",
    title: "The Queen Who Never Was",
    role: "Senior Advisor",
    desc: "Rider of Meleys. Diplomat.",
  },
  {
    name: "Prince Jacaerys Velaryon",
    title: "Prince of Dragonstone",
    role: "Heir Apparent",
    desc: "Envoy to the North & Vale.",
  },
  {
    name: "Lord Bartimos Celtigar",
    title: "Master of Coin",
    role: "Treasury",
    desc: "Funding the war effort.",
  },
  {
    name: "Lady Mysaria",
    title: "Mistress of Whisperers",
    role: "Intelligence",
    desc: "The eyes and ears of the city.",
  },
  {
    name: "Ser Steffon Darklyn",
    title: "Lord Commander",
    role: "Queensguard",
    desc: "Protector of the Royal Family.",
  },
];
