import { ArrowUpRight } from 'lucide-react';
import { NextChapter, PageLink, type CorporatePageProps } from '../components/CorporateLayout';
import constructionImage from '../images/portfolio-hero.jpg';
import peopleImage from '../images/people.jpg';

const history = [
  ['1967–1987', 'A trading beginning', 'Established as SB Trading Limited in Kano, moving from general merchandise into electrical equipment for public infrastructure.'],
  ['1988–2002', 'Building industrial expertise', 'Expanded into engineering and construction, developing a strong presence in Nigerian infrastructure.'],
  ['2003–2010', 'A new group structure', 'Restructured as a diversified investment holding company with a focus on sustainable growth and value creation.'],
  ['2011–2020', 'Investing in power', 'Grew our position in the Nigerian power sector through strategic investment and project development.'],
  ['2021–2026', 'A broader African ambition', 'Expanded into new African markets, renewable energy, and infrastructure opportunities.'],
];

export default function About({ onNavigate }: CorporatePageProps) {
  return <div className="redesign group-redesign">
    <section className="group-opening site-container">
      <div className="group-opening-title"><h1>A long view.<br />A lasting <em>impact.</em></h1><p>We are Danhassan & Co. A Nigerian investment holding company building businesses that support Africa’s everyday progress.</p></div>
      <div className="group-opening-image"><img src={constructionImage} alt="An aerial view of infrastructure under construction" fetchPriority="high" /><div className="group-image-note"><strong>Since 1967</strong><span>Growing with the continent.</span></div></div>
    </section>

    <section className="group-purpose site-container">
      <h2>The essentials of progress.<br /><em>Built for the long term.</em></h2>
      <div><p>Electricity that keeps businesses running. Infrastructure that connects communities. Places where people can live and work. Our portfolio is grounded in the things a growing economy depends on.</p><p>We combine patient capital with hands-on operational expertise across power, engineering, and real estate. Our responsibility is to create lasting value for shareholders, employees, and the communities we serve.</p><PageLink page="portfolio" onNavigate={onNavigate}>Explore our businesses</PageLink></div>
    </section>

    <section className="group-facts"><div className="site-container facts-row"><div><strong>₦27.3T</strong><span>Market capitalisation</span></div><div><strong>₦11.8T</strong><span>FY2025 revenue</span></div><div><strong>25,200+</strong><span>People across the group</span></div><div><strong>Abuja</strong><span>Our headquarters</span></div></div></section>

    <section className="group-history site-container"><div className="history-intro"><h2>Our story keeps<br /><em>moving forward.</em></h2><p>From trading in Kano to investing across the continent, each chapter has built on the experience of the last.</p><a className="action-link" href="mailto:ir@danhassan.co?subject=Corporate%20profile%20request">Request our company profile <ArrowUpRight size={20} /></a></div><ol className="history-list">{history.map(([year, title, copy]) => <li key={year}><span>{year}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></section>

    <section className="group-people"><div className="site-container group-people-inner"><img src={peopleImage} alt="Colleagues working together in a meeting" loading="lazy" /><div><h2>Good judgement.<br /><em>Shared responsibility.</em></h2><p>Our board brings together experience in energy, infrastructure, and finance, with a commitment to accountable leadership.</p><dl className="governance-numbers"><div><dt>3</dt><dd>Executive directors</dd></div><div><dt>5</dt><dd>Non-executive directors</dd></div><div><dt>3</dt><dd>Independent directors</dd></div></dl><PageLink page="leadership" onNavigate={onNavigate}>Meet our leadership</PageLink></div></div></section>
    <NextChapter title="See what we’re building." copy="Discover the businesses turning our long-term perspective into everyday progress." page="portfolio" label="Explore the portfolio" onNavigate={onNavigate} />
  </div>;
}
