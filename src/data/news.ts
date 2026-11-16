import { groupEstimates } from "./financials";

export const featuredStory = {
  category: "Corporate",
  date: "Nov 16, 2026",
  title: "A broader outlook for African commerce",
  summary:
    "The group’s investments now connect essential infrastructure with shipping, logistics, and retail, supported by experienced leadership and a shared focus on long-term value.",
  readTime: "3 min read",
};

export const allUpdates = [
  {
    category: "Investor Update",
    date: "Nov 16, 2026",
    id: "fy2026-financial-outlook",
    title: "FY2026 Financial Outlook Published",
    href: "/investors#financial-results",
    linkLabel: "View the financial outlook",
    summary: `The outlook estimates net income of ₦${groupEstimates.netIncomeTrillions.toFixed(2)} trillion and an equity valuation of ₦${groupEstimates.marketCapTrillions.toFixed(1)} trillion. The investor centre includes the model and its assumptions.`,
    type: "Financials",
  },
  {
    category: "Corporate",
    date: "Nov 16, 2026",
    id: "rim-holdings-website",
    title: "RIM Holdings introduces its new corporate website",
    href: "/rim",
    linkLabel: "Visit RIM Holdings",
    summary:
      "The new website brings together the company’s story, investment portfolio, leadership, and perspectives on trade and distribution.",
    type: "News",
  },
  {
    category: "Corporate",
    date: "Nov 12, 2026",
    id: "fatai-imrani-board",
    title: "Fatai Imrani joins the board",
    summary:
      "Appointed as a Non-Executive Director, he brings experience in trade, distribution, and commercial investment to the group’s board.",
    type: "News",
  },
  {
    category: "Press Release",
    date: "Feb 12, 2026",
    id: "lekki-logistics-hub",
    title: "Harbor & Hedge Advances Lekki Port Logistics Hub Development",
    summary:
      "The development supports industrial distribution through warehousing and port-adjacent infrastructure.",
    type: "News",
  },
  {
    category: "Investor Update",
    date: "Jan 24, 2026",
    id: "fy2025-audited-results",
    title: "FY2025 Audited Results Released",
    summary:
      "Full-year results show resilient cash flow and disciplined capital allocation across core assets.",
    type: "Financials",
  },
  {
    category: "ESG",
    date: "Jan 15, 2026",
    id: "green-horizon-impact-report",
    title: "Project Green Horizon: 2025 Impact Report",
    summary:
      "Progress across emissions intensity, community investment, and workforce development initiatives.",
    type: "Report",
  },
  {
    category: "Corporate",
    date: "Dec 12, 2025",
    id: "gas-to-power-partnership",
    title: "TotalEnergies Gas-to-Power Partnership Announced",
    summary:
      "Joint venture targets 400 MW of new capacity and improved gas supply stability in Nigeria.",
    type: "News",
  },
  {
    category: "Press Release",
    date: "Sep 20, 2025",
    id: "rwanda-grid-solutions",
    title: "Rwanda Grid Solutions Stake Completed",
    summary:
      "Strategic investment accelerates smart grid modernization across Kigali and four provinces.",
    type: "News",
  },
  {
    category: "Investor Update",
    date: "Jun 30, 2025",
    id: "eurobond-issuance",
    title: "Eurobond Issuance Successfully Priced",
    summary:
      "The $500M issuance supports long-term expansion and asset rehabilitation programs.",
    type: "Financials",
  },
  {
    category: "Corporate",
    date: "Feb 18, 2025",
    id: "southern-nigeria-thermal-plant",
    title: "200 MW Thermal Plant Awarded in Southern Nigeria",
    summary:
      "New capacity enhances baseload reliability and regional industrial productivity.",
    type: "News",
  },
];

export const categories = [
  "All",
  "Press Release",
  "Investor Update",
  "ESG",
  "Corporate",
];
