import portImage from "../images/rim-containers.jpg";
import retailImage from "../images/rim-retail.jpg";
import logisticsImage from "../images/rim-logistics.jpg";
import capitalImage from "../images/rim-capital-planning.jpg";

export const rimBusinesses = [
  {
    id: "rimco",
    name: "RIMCO",
    legalName: "RIMCO Limited",
    category: "Shipping & logistics",
    line: "A clearer route to market.",
    image: portImage,
    alt: "Container terminal with cranes and a cargo vessel",
    summary:
      "Maritime services, port operations, and inland freight connecting African businesses to the world.",
    description:
      "RIMCO brings the movement of goods into one coordinated network. Its teams work across coastal shipping, terminal services, freight forwarding, and inland distribution, helping customers navigate the journey from arrival to final delivery.",
    capabilities: [
      "RIM Lines · Coastal and container shipping",
      "RM Services · Terminals and ship agency",
      "RM Logistics · Freight and inland distribution",
      "RIM Express · Parcel and last-mile services",
    ],
    approach:
      "Dependable handovers matter as much as the voyage. RIMCO focuses on clear schedules, practical route planning, and visibility between the port gate and the customer’s door.",
  },
  {
    id: "rim-plc",
    name: "RIM Plc",
    legalName: "RIM Plc",
    category: "Retail & distribution",
    line: "Closer to everyday life.",
    image: retailImage,
    alt: "Fresh produce displayed in a grocery market",
    summary:
      "Supermarkets, cash-and-carry wholesale, and digital retail built around the needs of everyday customers.",
    description:
      "RIM Plc serves households, independent retailers, and small businesses through a connected retail and distribution platform. Its combination of neighbourhood stores, wholesale formats, and e-commerce makes everyday goods more accessible.",
    capabilities: [
      "RIM Supermarkets · Everyday essentials",
      "RIM Cash & Carry · Business and wholesale",
      "RIM.com · Digital retail",
      "Supplier development · Local sourcing",
    ],
    approach:
      "A good retail business earns trust one basket at a time. RIM Plc prioritises consistent availability, straightforward value, and relationships with the local producers and suppliers behind its shelves.",
  },
  {
    id: "overland",
    name: "Overland",
    legalName: "Overland Limited",
    category: "Warehousing & property",
    line: "Space for businesses to grow.",
    image: logisticsImage,
    alt: "Warehouse distribution space with organised freight storage",
    summary:
      "Warehousing and commercial assets that support the movement, storage, and distribution of goods.",
    description:
      "Overland develops and manages practical spaces for trade. Its focus is on warehouses, distribution facilities, and commercial property that help businesses operate closer to their customers and supply networks.",
    capabilities: [
      "Warehousing and distribution space",
      "Commercial property management",
      "Facility planning and development",
      "Long-term tenant partnerships",
    ],
    approach:
      "Location is only the beginning. Overland considers access, utility reliability, adaptable layouts, and the everyday requirements of the businesses using each space.",
  },
  {
    id: "rim-capital",
    name: "RIM Capital",
    legalName: "RIM Capital Limited",
    category: "Investment & growth",
    line: "Capital with a commercial perspective.",
    image: capitalImage,
    alt: "Financial planning documents and a calculator on a desk",
    summary:
      "Investment expertise for businesses across retail, distribution, and the wider commerce economy.",
    description:
      "RIM Capital evaluates investment opportunities around the way goods reach businesses and households. It brings a disciplined view of capital, commercial fundamentals, and the practical work required to build a stronger company.",
    capabilities: [
      "Investment evaluation",
      "Retail and distribution opportunities",
      "Capital allocation support",
      "Portfolio development",
    ],
    approach:
      "Investment begins with understanding a business. RIM Capital looks at its customers, cash generation, operating risks, and the quality of its leadership before considering the next stage of growth.",
  },
];

export const rimHistory = [
  [
    "1974",
    "A business built around trade.",
    "RIMCO begins in Lagos as a freight-forwarding and ship-agency business, helping manufacturers move materials between the coast and the Nigerian interior.",
  ],
  [
    "1996",
    "Beyond the port gate.",
    "The business broadens into inland transport and distribution, connecting maritime services with the warehouses and markets behind them.",
  ],
  [
    "2004",
    "A new connection to the customer.",
    "The first RIM Cash & Carry format opens, bringing organised wholesale to independent retailers and local businesses.",
  ],
  [
    "2013",
    "A platform for the long view.",
    "RIM Holdings is established as a separate investment company. Overland and RIM Capital give the portfolio dedicated property and investment capabilities.",
  ],
  [
    "2018",
    "A shared commercial ambition.",
    "Danhassan & Co. joins the shareholder base, bringing investment experience across infrastructure and the essential economy.",
  ],
  [
    "2026",
    "One perspective. Many possibilities.",
    "RIM Holdings continues to develop its investments across shipping, logistics, retail, property, and capital, with Fatai Imrani as Chairman & CEO.",
  ],
];

export const rimArticles = [
  {
    id: "the-last-mile",
    category: "Logistics",
    date: "06 November 2026",
    image: logisticsImage,
    title: "The last mile begins long before the doorstep.",
    intro:
      "Better distribution depends on the decisions made between the port, the warehouse, and the customer.",
    paragraphs: [
      "The final delivery is the most visible part of a supply chain. It is also the result of many earlier choices. A missed handover, an unsuitable warehouse location, or a late dispatch can travel through the network long before a customer sees the effect.",
      "Our perspective starts with the connections. Ports need reliable inland links. Warehouses need to reflect the markets they serve. Distribution teams need clear information about what is arriving and what should leave next.",
      "Across the RIM portfolio, these questions inform how we assess operations and investment opportunities. The goal is practical. Help a business make the next delivery more predictable, then build the systems that allow it to repeat that result.",
    ],
  },
  {
    id: "local-supply",
    category: "Retail",
    date: "19 October 2026",
    image: retailImage,
    title: "Stronger shelves start with stronger local suppliers.",
    intro:
      "The relationship between a retailer and a producer is a foundation for lasting commercial growth.",
    paragraphs: [
      "For a local producer, reaching an organised retail shelf can open a new market. Keeping a place on that shelf requires consistency in quality, packaging, planning, and delivery.",
      "Retailers benefit when those relationships work. A dependable supplier base improves availability and creates room for products that reflect the preferences of the communities around a store.",
      "RIM’s investment perspective recognises the commercial value of these relationships. Good sourcing is an operating discipline, built through realistic expectations, regular communication, and a shared understanding of the customer.",
    ],
  },
  {
    id: "patient-capital",
    category: "Investment",
    date: "28 September 2026",
    image: portImage,
    title: "Taking the long view of African commerce.",
    intro:
      "Investment discipline starts with understanding how an economy works every day.",
    paragraphs: [
      "Shipping, distribution, and retail are often discussed as separate sectors. In practice, they are connected parts of the same commercial journey. The movement of goods links an importer to a warehouse, a producer to a retailer, and a shopkeeper to a household.",
      "That connection shapes the RIM investment approach. We look for businesses with a clear role in their markets, leaders who understand execution, and opportunities to improve the systems customers depend on.",
      "The long view also requires restraint. A compelling growth story needs cash discipline, appropriate governance, and a realistic assessment of operating risk. These are the foundations of durable commercial value.",
    ],
  },
];

export const rimBoard = [
  {
    name: "Fatai Imrani",
    role: "Chairman & Chief Executive Officer",
    bio: "Leads investment strategy and the development of the holding company, with responsibility for execution and long-term performance.",
  },
  {
    name: "Anwar Alhassan",
    role: "Non-Executive Director",
    bio: "Brings investment and infrastructure experience to board deliberations on strategy, capital allocation, and governance.",
  },
  {
    name: "Ovie Ejere",
    role: "Non-Executive Director",
    bio: "Contributes operating experience in maritime services, port development, and inland freight networks.",
  },
  {
    name: "Tope Majeakunmi",
    role: "Non-Executive Director",
    bio: "Brings a customer-led perspective on retail, wholesale distribution, and supplier development.",
  },
  {
    name: "Dr. Teni Akinwale",
    role: "Independent Non-Executive Director",
    bio: "Chairs the Audit & Risk Committee, with a focus on financial stewardship, internal controls, and enterprise resilience.",
  },
  {
    name: "Kelechi Okafor",
    role: "Independent Non-Executive Director",
    bio: "Chairs the People & Remuneration Committee, supporting leadership development and succession planning.",
  },
  {
    name: "Aisha Bello",
    role: "Independent Non-Executive Director",
    bio: "Brings legal and regulatory experience to corporate governance, business conduct, and responsible investment.",
  },
  {
    name: "Julius Danquah",
    role: "Independent Non-Executive Director",
    bio: "Contributes regional experience in terminal operations, logistics infrastructure, and cross-border trade.",
  },
  {
    name: "Prof. Sani Mohammed",
    role: "Independent Non-Executive Director",
    bio: "Chairs the Investment Committee, bringing economic and capital-market perspectives to investment decisions.",
  },
];

export const rimExecutives = [
  {
    name: "Fatai Imrani",
    role: "Chairman & Chief Executive Officer",
    bio: "Sets the commercial direction of the holding company and leads the executive team.",
  },
  {
    name: "Nneka Eze",
    role: "EVP, Finance & Treasury",
    bio: "Oversees financial planning, portfolio reporting, treasury, and capital discipline.",
  },
  {
    name: "Ibrahim Sulaiman",
    role: "EVP, Operations",
    bio: "Works with company leadership on operating performance, resilience, and delivery.",
  },
  {
    name: "Amara Nwosu",
    role: "EVP, Strategy & Corporate Development",
    bio: "Leads strategic planning, commercial partnerships, and portfolio development.",
  },
  {
    name: "Adana Okemini",
    role: "EVP, Investments",
    bio: "Directs investment evaluation, transaction execution, and the monitoring of investment performance.",
  },
  {
    name: "Yewande Balogun",
    role: "EVP, Legal & Risk",
    bio: "Oversees legal affairs, enterprise risk, compliance, and governance standards.",
  },
  {
    name: "Bolanle Adebayo",
    role: "EVP, People & Culture",
    bio: "Leads talent development, succession planning, and the organisation’s people strategy.",
  },
  {
    name: "Daniel Asiedu",
    role: "EVP, Technology & Transformation",
    bio: "Supports digital capability, information security, and business transformation across the investment platform.",
  },
];
