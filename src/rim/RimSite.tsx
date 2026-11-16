import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Menu,
  X,
  Plus,
  Minus,
  MapPin,
  Mail,
} from "lucide-react";
import { rimBusinesses, rimHistory, rimArticles } from "./content";
import { rimLeader } from "../data/leadership";
import portImage from "../images/port.jpg";
import peopleImage from "../images/people.jpg";
import "./rim.css";

const base = "/rim";
const href = (page = "") => `${base}${page ? `/${page}` : ""}`;
const navigation = [
  ["about", "The group"],
  ["portfolio", "Our portfolio"],
  ["leadership", "Our people"],
  ["perspectives", "Perspectives"],
];
const titles: Record<string, string> = {
  "": "Investing in the way Africa moves",
  about: "The group",
  portfolio: "Our portfolio",
  leadership: "Our people",
  perspectives: "Perspectives",
  governance: "Ownership & governance",
  contact: "Let’s connect",
};

function Link({
  page = "",
  children,
  className = "",
}: {
  page?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a className={className} href={href(page)}>
      {children}
    </a>
  );
}
function Action({
  page,
  children,
  light = false,
}: {
  page: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      page={page}
      className={`rim-action ${light ? "rim-action-light" : ""}`}
    >
      {children}
      <ArrowUpRight size={20} aria-hidden="true" />
    </Link>
  );
}
function PageIntro({
  label,
  title,
  copy,
}: {
  label: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="rim-page-intro rim-wrap">
      <p className="rim-kicker">{label}</p>
      <h1>{title}</h1>
      <p className="rim-intro-copy">{copy}</p>
    </section>
  );
}
function Connect() {
  return (
    <section className="rim-connect">
      <div className="rim-wrap">
        <p className="rim-kicker">The next conversation</p>
        <div>
          <h2>
            There’s more
            <br />
            ahead of us.
          </h2>
          <div>
            <p>
              Investment, partnership, or a new perspective.
              <br />
              Let’s explore what comes next.
            </p>
            <Action page="contact" light>
              Start a conversation
            </Action>
          </div>
        </div>
      </div>
    </section>
  );
}
function BusinessCards() {
  return (
    <div className="rim-business-grid">
      {rimBusinesses.map((business, index) => (
        <Link
          key={business.id}
          page={`portfolio/${business.id}`}
          className="rim-business-card"
        >
          <div className="rim-card-image">
            <img src={business.image} alt={business.alt} loading="lazy" />
            <span className="rim-card-arrow">
              <ArrowUpRight size={26} aria-hidden="true" />
            </span>
          </div>
          <div className="rim-card-label">
            <span>
              0{index + 1} / {business.category}
            </span>
            <h3>{business.name}</h3>
            <p>{business.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
function Home() {
  return (
    <>
      <section className="rim-hero">
        <img
          src={portImage}
          alt="Aerial view of a cargo vessel, container cranes, and a busy trading port"
          fetchPriority="high"
        />
        <div className="rim-hero-wash" />
        <div className="rim-wrap rim-hero-content">
          <p className="rim-kicker">A connected perspective.</p>
          <h1>
            Investing in
            <br />
            the way Africa
            <br />
            <span>moves.</span>
          </h1>
          <div className="rim-hero-bottom">
            <p>
              Across trade, distribution, and everyday commerce.
              <br />
              We see the connections that create lasting value.
            </p>
            <Action page="portfolio" light>
              Discover our portfolio
            </Action>
          </div>
        </div>
        <a
          className="rim-hero-scroll"
          href="#rim-introduction"
          aria-label="Discover RIM Holdings"
        >
          <ArrowDown size={20} />
        </a>
        <div className="rim-hero-index" aria-hidden="true">
          01 — A wider horizon
        </div>
      </section>
      <section className="rim-introduction rim-wrap" id="rim-introduction">
        <p className="rim-kicker">We are RIM Holdings</p>
        <div className="rim-split">
          <h2>
            Where commerce
            <br />
            finds its <em>momentum.</em>
          </h2>
          <div>
            <p className="rim-large-copy">
              An investment company with a practical understanding of the
              businesses that keep an economy moving.
            </p>
            <p>
              From the arrival of a vessel to the goods on a neighbourhood
              shelf, our portfolio follows the connections behind everyday life.
              We bring capital, commercial judgement, and a long-term
              perspective to those connections.
            </p>
            <Action page="about">Get to know RIM</Action>
          </div>
        </div>
        <div className="rim-home-facts">
          <div>
            <strong>04</strong>
            <span>Portfolio companies</span>
          </div>
          <div>
            <strong>One</strong>
            <span>Connected commercial perspective</span>
          </div>
          <div>
            <strong>Lagos</strong>
            <span>Our home. Africa, our outlook.</span>
          </div>
        </div>
      </section>
      <section className="rim-portfolio-section">
        <div className="rim-wrap">
          <div className="rim-section-heading">
            <div>
              <p className="rim-kicker">Our portfolio</p>
              <h2>
                Different businesses.
                <br />
                Shared <em>possibility.</em>
              </h2>
            </div>
            <Action page="portfolio">Explore the companies</Action>
          </div>
          <BusinessCards />
        </div>
      </section>
      <section className="rim-editorial">
        <div className="rim-editorial-image">
          <img
            src={peopleImage}
            alt="Colleagues reviewing a business plan together"
            loading="lazy"
          />
        </div>
        <div className="rim-editorial-copy">
          <p className="rim-kicker">The RIM perspective</p>
          <h2>
            Close to business.
            <br />
            Open to possibility.
          </h2>
          <p>
            We believe the strongest investment decisions begin with an
            understanding of the work. The routes, the facilities, the
            customers, and the people making it happen.
          </p>
          <Action page="leadership" light>
            Meet our people
          </Action>
        </div>
      </section>
      <section className="rim-wrap rim-section">
        <div className="rim-section-heading">
          <div>
            <p className="rim-kicker">Ideas in motion</p>
            <h2>
              A view from <em>here.</em>
            </h2>
          </div>
          <Action page="perspectives">All perspectives</Action>
        </div>
        <div className="rim-stories">
          {rimArticles.map((article) => (
            <Link page={`perspectives/${article.id}`} key={article.id}>
              <div className="rim-story-image">
                <img src={article.image} alt="" loading="lazy" />
              </div>
              <p className="rim-kicker">
                {article.category} / {article.date}
              </p>
              <h3>{article.title}</h3>
              <span className="rim-story-link">
                Read the perspective <ArrowUpRight size={18} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <Connect />
    </>
  );
}
function About() {
  return (
    <>
      <PageIntro
        label="The group"
        title="Commercial roots. A wider horizon."
        copy="RIM Holdings is a Lagos-based investment company connecting capital with the businesses behind African trade and everyday commerce."
      />
      <div className="rim-wrap rim-wide-photo">
        <img src={portImage} alt="A cargo vessel and container terminal" />
      </div>
      <section className="rim-wrap rim-section rim-split">
        <h2>
          A perspective
          <br />
          earned <em>on the ground.</em>
        </h2>
        <div>
          <p className="rim-large-copy">
            Our story begins with trade. Our ambition follows the connections it
            creates.
          </p>
          <p>
            RIM’s commercial roots lie in the freight-forwarding and ship-agency
            business that became RIMCO. As supply networks developed, the
            opportunity extended beyond the coast into distribution, retail, and
            the spaces that support them.
          </p>
          <p>
            Established in 2013, RIM Holdings gives that wider perspective a
            dedicated investment platform. Today, its portfolio comprises
            interests in RIMCO and RIM Plc, alongside Overland and RIM Capital.
          </p>
          <p>
            Danhassan & Co. is part of RIM’s shareholder base. The relationship
            brings together RIM’s commercial perspective and Danhassan’s
            experience in infrastructure and long-term investment.
          </p>
        </div>
      </section>
      <section className="rim-history">
        <div className="rim-wrap">
          <div className="rim-section-heading">
            <p className="rim-kicker">How we got here</p>
            <h2>
              Every connection
              <br />
              opens another.
            </h2>
          </div>
          <ol>
            {rimHistory.map(([year, title, copy]) => (
              <li key={year}>
                <span>{year}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="rim-wrap rim-section">
        <p className="rim-kicker">How we think</p>
        <div className="rim-principles">
          {[
            [
              "Understand the work",
              "Know the customer, the operation, and the economics behind a business.",
            ],
            [
              "Invest with discipline",
              "Balance opportunity with cash generation, risk, and the time needed to build value.",
            ],
            [
              "Respect the people",
              "Support the leadership teams, employees, and partners doing the everyday work.",
            ],
          ].map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <Connect />
    </>
  );
}
function Portfolio({ businessId }: { businessId?: string }) {
  if (businessId) {
    const business = rimBusinesses.find((item) => item.id === businessId);
    if (!business) return <NotFound />;
    return (
      <>
        <PageIntro
          label={business.category}
          title={business.name}
          copy={business.line}
        />
        <div className="rim-wrap rim-wide-photo">
          <img src={business.image} alt={business.alt} />
        </div>
        <section className="rim-wrap rim-section rim-split">
          <h2>{business.line}</h2>
          <div>
            <p className="rim-large-copy">{business.description}</p>
            <p>{business.approach}</p>
            <ul className="rim-capabilities">
              {business.capabilities.map((item) => (
                <li key={item}>
                  {item}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </li>
              ))}
            </ul>
            <Action page={`contact?business=${business.id}`}>
              Talk to us about {business.name}
            </Action>
          </div>
        </section>
        <section className="rim-wrap rim-related">
          <Action page="portfolio">Back to our portfolio</Action>
        </section>
        <Connect />
      </>
    );
  }
  return (
    <>
      <PageIntro
        label="Our portfolio"
        title="The connections behind commerce."
        copy="Four companies. A shared understanding of trade, distribution, and the businesses that serve everyday life."
      />
      <section className="rim-wrap rim-portfolio-list">
        <BusinessCards />
      </section>
      <section className="rim-wrap rim-section rim-split">
        <h2>
          Invested in
          <br />
          <em>lasting progress.</em>
        </h2>
        <div>
          <p className="rim-large-copy">
            Each company has its own leadership, customers, and commercial
            identity.
          </p>
          <p>
            RIM’s role is to bring perspective to capital allocation, support
            thoughtful governance, and work with management teams on the next
            stage of growth.
          </p>
          <Action page="governance">Our ownership & governance</Action>
        </div>
      </section>
      <Connect />
    </>
  );
}
function Leadership() {
  const [tab, setTab] = useState("board");
  const members =
    tab === "board"
      ? [
          [
            "Fatai Imrani",
            "Chair & Chief Executive Officer",
            "Leads RIM Holdings’ investment direction and the development of its portfolio. A Non-Executive Director of Danhassan & Co., he connects commercial experience with disciplined capital allocation.",
          ],
          [
            "Anwar Alhassan",
            "Non-Executive Director",
            "Brings Danhassan & Co.’s investment perspective to the RIM board, with a focus on strategy, governance, and long-term value.",
          ],
          [
            "Dr. Teni Akinwale",
            "Independent Non-Executive Director",
            "Brings an independent perspective on enterprise risk, financial stewardship, and board accountability.",
          ],
          [
            "Kelechi Okafor",
            "Independent Non-Executive Director",
            "Supports the board’s work on commercial strategy, operational resilience, and the development of leadership talent.",
          ],
        ]
      : [
          [
            "Fatai Imrani",
            "Chair & CEO · RIM Holdings",
            "Responsible for the investment platform and its long-term commercial direction.",
          ],
          [
            "Nneka Eze",
            "Chief Financial Officer · RIM Holdings",
            "Oversees financial planning, portfolio reporting, treasury, and capital discipline.",
          ],
          [
            "Ovie Ejere",
            "Chief Executive Officer · RIMCO",
            "Leads RIMCO’s shipping, port-services, and inland logistics businesses.",
          ],
          [
            "Tope Majeakunmi",
            "Chief Executive Officer · RIM Plc",
            "Leads the retail and distribution platform across stores, wholesale, and digital channels.",
          ],
        ];
  return (
    <>
      <PageIntro
        label="Our people"
        title="Perspective comes from people."
        copy="Commercial understanding, independent judgement, and a shared responsibility for the long term."
      />
      <section className="rim-chair rim-wrap">
        <div>
          <img
            src={rimLeader.image}
            alt="Fatai Imrani, Chair and Chief Executive Officer of RIM Holdings"
          />
        </div>
        <article>
          <p className="rim-kicker">A word from our Chair & CEO</p>
          <h2>“The opportunity is in understanding what connects us.”</h2>
          <p>
            Behind every trading route and every retail shelf is a business
            meeting a real need. Our job is to understand that business, support
            its people, and invest with the patience and discipline to help it
            grow.
          </p>
          <h3>Fatai Imrani</h3>
          <span>Chair & Chief Executive Officer</span>
        </article>
      </section>
      <section className="rim-wrap rim-section">
        <div className="rim-section-heading">
          <h2>Our leadership.</h2>
          <div
            className="rim-tabs"
            role="group"
            aria-label="Choose leadership team"
          >
            <button
              aria-pressed={tab === "board"}
              onClick={() => setTab("board")}
            >
              Board of directors
            </button>
            <button
              aria-pressed={tab === "management"}
              onClick={() => setTab("management")}
            >
              Executive leadership
            </button>
          </div>
        </div>
        <div className="rim-leaders" aria-live="polite">
          {members.map(([name, role, bio]) => (
            <article key={name}>
              <span className="rim-person-initials" aria-hidden="true">
                {name
                  .split(" ")
                  .slice(-2)
                  .map((part) => part[0])
                  .join("")}
              </span>
              <h3>{name}</h3>
              <p className="rim-leader-role">{role}</p>
              <p>{bio}</p>
            </article>
          ))}
        </div>
      </section>
      <Connect />
    </>
  );
}
function Governance() {
  const [open, setOpen] = useState<number | null>(0);
  const policies = [
    [
      "Investment discipline",
      "Every investment is considered in the context of commercial fundamentals, cash requirements, operating risks, and the quality of management. Proposals are reviewed before capital is committed, with clear responsibilities for monitoring performance.",
    ],
    [
      "Board oversight",
      "The board oversees strategy, investment decisions, financial stewardship, and succession. Independent directors contribute outside judgement. Directors disclose potential conflicts and step back from decisions where their interests could affect impartiality.",
    ],
    [
      "Responsible business",
      "We expect ethical conduct, respect for people, and attention to environmental and community impacts across our investments. Those expectations inform both investment assessment and our engagement with company leadership.",
    ],
    [
      "Reporting and accountability",
      "The investment platform reviews financial and operating information with the leadership of its portfolio companies. Shareholder communications distinguish the holding company’s investment interests from the operations of individual companies.",
    ],
  ];
  return (
    <>
      <PageIntro
        label="Ownership & governance"
        title="A clear view. A considered approach."
        copy="Defined responsibilities, thoughtful investment decisions, and accountability to the people who place their trust in us."
      />
      <section className="rim-wrap rim-section rim-split">
        <div>
          <h2>
            Our investment
            <br />
            <em>structure.</em>
          </h2>
          <p className="rim-ownership-note">
            RIM Holdings Limited and RIMCO Limited are privately held. RIM Plc
            is listed on the Nigerian Exchange.
          </p>
        </div>
        <div>
          <p>Our shareholder base brings together long-term investment experience and a shared commercial outlook. Danhassan & Co. is an investment partner in the holding company.</p>
          <p>We participate in shipping and retail through established businesses with their own management teams. Property and investment activities complement the wider portfolio.</p>
          <p>
            Each company has its own operating leadership, with board oversight and reporting appropriate to its business.
          </p>
          <a className="rim-action" href="/portfolio#rim">
            Explore Danhassan & Co.
            <ArrowUpRight size={20} />
          </a>
        </div>
      </section>
      <section className="rim-policy">
        <div className="rim-wrap rim-split">
          <h2>
            The principles
            <br />
            behind the decisions.
          </h2>
          <div>
            {policies.map(([title, copy], index) => (
              <article key={title}>
                <h3>
                  <button
                    aria-expanded={open === index}
                    aria-controls={`rim-policy-${index}`}
                    onClick={() => setOpen(open === index ? null : index)}
                  >
                    {title}
                    {open === index ? <Minus size={20} /> : <Plus size={20} />}
                  </button>
                </h3>
                <div id={`rim-policy-${index}`} hidden={open !== index}>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Connect />
    </>
  );
}
function Perspectives({ articleId }: { articleId?: string }) {
  const [filter, setFilter] = useState("All");
  if (articleId) {
    const article = rimArticles.find((item) => item.id === articleId);
    if (!article) return <NotFound />;
    return (
      <>
        <PageIntro
          label={`${article.category} / ${article.date}`}
          title={article.title}
          copy={article.intro}
        />
        <div className="rim-wrap rim-wide-photo">
          <img src={article.image} alt="" />
        </div>
        <article className="rim-article-body">
          {article.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Action page="perspectives">All perspectives</Action>
        </article>
        <Connect />
      </>
    );
  }
  return (
    <>
      <PageIntro
        label="Perspectives"
        title="Ideas. Experience. Forward thinking."
        copy="A closer look at the connections shaping trade, investment, and everyday commerce."
      />
      <section className="rim-wrap rim-section">
        <div
          className="rim-tabs rim-story-filters"
          role="group"
          aria-label="Filter perspectives"
        >
          {["All", "Logistics", "Retail", "Investment"].map((category) => (
            <button
              key={category}
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="rim-stories" aria-live="polite">
          {rimArticles
            .filter(
              (article) => filter === "All" || article.category === filter,
            )
            .map((article) => (
              <Link key={article.id} page={`perspectives/${article.id}`}>
                <div className="rim-story-image">
                  <img src={article.image} alt="" loading="lazy" />
                </div>
                <p className="rim-kicker">
                  {article.category} / {article.date}
                </p>
                <h3>{article.title}</h3>
                <p>{article.intro}</p>
                <span className="rim-story-link">
                  Read the perspective <ArrowUpRight size={18} />
                </span>
              </Link>
            ))}
        </div>
      </section>
      <Connect />
    </>
  );
}
function Contact() {
  const initialBusiness = new URLSearchParams(window.location.search).get(
    "business",
  );
  const [topic, setTopic] = useState(
    rimBusinesses.some((item) => item.id === initialBusiness)
      ? initialBusiness!
      : "general",
  );
  const [status, setStatus] = useState("");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const selectedTopic =
      rimBusinesses.find((item) => item.id === topic)?.name ||
      "General enquiry";
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nOrganisation: ${data.get("organisation")}\nTopic: ${selectedTopic}\n\n${data.get("message")}`;
    window.location.href = `mailto:hello@rimholdco.com?subject=${encodeURIComponent(`${selectedTopic} — ${data.get("name")}`)}&body=${encodeURIComponent(body)}`;
    setStatus(
      "Review and send the draft in your email app to complete your enquiry. If no app opened, email hello@rimholdco.com directly.",
    );
  };
  return (
    <>
      <PageIntro
        label="Contact"
        title="Good things start with a conversation."
        copy="Talk to us about investment, partnerships, or the businesses in our portfolio."
      />
      <section className="rim-wrap rim-contact-layout">
        <aside>
          <p className="rim-kicker">Find us</p>
          <h2>
            Lagos.
            <br />
            <em>Looking outward.</em>
          </h2>
          <p>
            <MapPin size={20} aria-hidden="true" />
            Waterfront House
            <br />
            Marina, Lagos, Nigeria
          </p>
          <a className="rim-contact-email" href="mailto:hello@rimholdco.com">
            <Mail size={20} />
            hello@rimholdco.com
          </a>
          <p className="rim-fine-print">
            For a specific portfolio company, select the relevant business in
            your enquiry.
          </p>
        </aside>
        <form onSubmit={handleSubmit}>
          <div className="rim-form-grid">
            <label>
              Your name
              <input name="name" autoComplete="name" required maxLength={120} />
            </label>
            <label>
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
              />
            </label>
          </div>
          <label>
            Organisation
            <input
              name="organisation"
              autoComplete="organization"
              maxLength={160}
            />
          </label>
          <label>
            I’d like to talk about
            <select
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
            >
              <option value="general">General enquiry</option>
              {rimBusinesses.map((business) => (
                <option value={business.id} key={business.id}>
                  {business.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Your message
            <textarea name="message" required rows={5} maxLength={5000} />
          </label>
          <p className="rim-fine-print">
            This form opens a draft in your email app. You choose when to send
            it.
          </p>
          <button className="rim-submit" type="submit">
            Prepare email enquiry <ArrowUpRight size={20} />
          </button>
          <p role="status">{status}</p>
        </form>
      </section>
    </>
  );
}
function NotFound() {
  return (
    <section className="rim-wrap rim-section">
      <p className="rim-kicker">404</p>
      <h1>A different route.</h1>
      <p>This page could not be found.</p>
      <Action page="">Return to RIM Holdings</Action>
    </section>
  );
}
export default function RimSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = window.location.pathname
    .replace(/^\/rim\/?/, "")
    .replace(/\/$/, "");
  const [page, detail] = path.split("/");
  const validPage =
    Object.prototype.hasOwnProperty.call(titles, page) &&
    path.split("/").length <= 2;
  useEffect(() => {
    const business = rimBusinesses.find(
      (item) => page === "portfolio" && item.id === detail,
    );
    const article = rimArticles.find(
      (item) => page === "perspectives" && item.id === detail,
    );
    document.title = `${business?.name || article?.title || titles[page] || "Page not found"} | RIM Holdings`;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute(
      "content",
      "RIM Holdings is a Lagos-based investment company with interests across shipping, logistics, retail, property, and capital.",
    );
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", "#00171f");
    document
      .querySelectorAll(
        'link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]',
      )
      .forEach((link) => {
        link.setAttribute("href", "/rim-favicon.svg");
        link.setAttribute("type", "image/svg+xml");
        link.removeAttribute("sizes");
      });
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [page, detail]);
  let content: ReactNode = <NotFound />;
  if (validPage && !detail)
    content = (
      {
        "": <Home />,
        about: <About />,
        portfolio: <Portfolio />,
        leadership: <Leadership />,
        governance: <Governance />,
        perspectives: <Perspectives />,
        contact: <Contact />,
      } as Record<string, ReactNode>
    )[page];
  if (validPage && page === "portfolio" && detail)
    content = <Portfolio businessId={detail} />;
  if (validPage && page === "perspectives" && detail)
    content = <Perspectives articleId={detail} />;
  return (
    <div
      className={`rim-site ${page === "" ? "rim-home" : "rim-inner"}`}
      id="rim-top"
    >
      <a className="rim-skip" href="#rim-main">
        Skip to content
      </a>
      <header className="rim-header">
        <div className="rim-wrap">
          <Link className="rim-brand">
            <span className="rim-brand-mark">
              RIM<span>↗</span>
            </span>
            <span className="rim-brand-subtitle">HOLDINGS</span>
          </Link>
          <nav
            aria-label="RIM main navigation"
            className={menuOpen ? "rim-nav rim-nav-open" : "rim-nav"}
            id="rim-menu"
          >
            {navigation.map(([id, label]) => (
              <Link
                page={id}
                key={id}
                className={page === id ? "rim-nav-active" : ""}
              >
                {label}
              </Link>
            ))}
            <Link page="contact" className="rim-nav-contact">
              Let’s connect <ArrowUpRight size={18} />
            </Link>
          </nav>
          <button
            className="rim-menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="rim-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="rim-main">{content}</main>
      <footer className="rim-footer">
        <div className="rim-wrap">
          <div className="rim-footer-top">
            <Link className="rim-footer-brand">
              RIM<span>↗</span>
            </Link>
            <p>
              Investing in the way
              <br />
              Africa moves.
            </p>
          </div>
          <div className="rim-footer-grid">
            <div>
              <p className="rim-kicker">A connected perspective</p>
              <p>
                Waterfront House
                <br />
                Marina, Lagos, Nigeria
              </p>
              <a href="mailto:hello@rimholdco.com">hello@rimholdco.com</a>
            </div>
            <nav aria-label="RIM company links">
              <p>The group</p>
              <Link page="about">About RIM</Link>
              <Link page="leadership">Our people</Link>
              <Link page="governance">Ownership & governance</Link>
              <Link page="contact">Contact</Link>
            </nav>
            <nav aria-label="RIM portfolio links">
              <p>Our portfolio</p>
              {rimBusinesses.map((business) => (
                <Link page={`portfolio/${business.id}`} key={business.id}>
                  {business.name}
                </Link>
              ))}
            </nav>
            <div>
              <p>Stay connected</p>
              <Link page="perspectives">
                Perspectives <ArrowUpRight size={16} />
              </Link>
              <a href="/portfolio#rim">
                Danhassan & Co. <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="rim-footer-bottom">
            <p>© {new Date().getFullYear()} RIM Holdings Limited.</p>
            <span>Lagos, Nigeria · A wider horizon.</span>
            <a href="#rim-top">
              Back to top <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
