import { ArrowDown, ArrowUpRight } from 'lucide-react';
import heroImage from '../images/portfolio-hero.jpg';
import energyImage from '../images/saep.jpg';
import engineeringImage from '../images/ironwood2.jpg';
import propertyImage from '../images/harbor.jpg';
import boardImage from '../images/people.jpg';
import portImage from '../images/port.jpg';
import signingImage from '../images/signing.jpg';
import impactImage from '../images/infographics/impacthero.jpg';

const sectors = [
  { title: 'Power & energy', image: energyImage, description: 'Reliable power. Lasting progress.', detail: 'Thermal and renewable generation supporting homes, industry, and opportunity across West Africa.' },
  { title: 'Infrastructure & engineering', image: engineeringImage, description: 'Connecting ambition to possibility.', detail: 'Engineering, procurement, and construction for the systems that move our economies forward.' },
  { title: 'Real estate & property', image: propertyImage, description: 'Places built for what comes next.', detail: 'Commercial, residential, and logistics developments designed to create enduring value.' },
];
const stories = [
  { category: 'Press release', title: 'Expanding power capacity across West Africa', image: signingImage },
  { category: 'Investor update', title: 'A year of disciplined growth. FY2025 in review.', image: portImage },
  { category: 'Our impact', title: 'Investing in communities, building shared prosperity', image: impactImage },
];

export default function Home({ onNavigate }: { onNavigate: (page: string) => void }) {
  const navigate = (page: string) => (e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); onNavigate(page); };
  return <div className="home-page">
    <section className="home-hero">
      <img className="hero-photograph" src={heroImage} alt="An aerial view of workers building essential infrastructure" fetchPriority="high" />
      <div className="hero-shade" />
      <div className="site-container hero-content">

        <h1>Building value.<br />Advancing <em>Africa.</em></h1>
        <div className="hero-bottom">
          <p>We invest in the essentials of progress.<br className="desktop-break" /> Power, infrastructure, and places to thrive.</p>
          <a className="button button-white" href="/portfolio" onClick={navigate('portfolio')}>Explore our portfolio <ArrowUpRight size={18} /></a>
        </div>
      </div>
      <div className="site-container hero-caption"><span>Danhassan & Co. / Investment holding company</span><a href="#introduction" aria-label="Discover Danhassan"><ArrowDown size={17} /><span>Discover our world</span></a></div>
    </section>
    <section id="introduction" className="intro-section site-container">
      <div className="intro-grid"><div><h2>Progress is built on<br /><em>strong foundations.</em></h2><div className="intro-copy"><p>From the power that lights a city to the infrastructure that connects it, we invest in what Africa needs to grow. We bring patient capital and operational expertise to businesses that make a lasting difference.</p><a className="text-link" href="/about" onClick={navigate('about')}>Get to know Danhassan & Co. <ArrowUpRight size={18} /></a></div></div></div>
      <div className="group-figures"><div><strong>₦27.3<span>T</span></strong><p>Market capitalisation</p></div><div><strong>₦11.8<span>T</span></strong><p>FY2025 revenue</p></div><div><strong>25,200<span>+</span></strong><p>People across the group</p></div><div><strong>03</strong><p>Essential business sectors</p></div></div>
      <p className="figure-note">Group figures as presented in FY2025 reporting.</p>
    </section>
    <section className="sectors-section"><div className="site-container"><div className="section-heading"><div><h2>Essential sectors.<br /><em>Extraordinary possibility.</em></h2></div><a className="text-link" href="/portfolio" onClick={navigate('portfolio')}>The full portfolio <ArrowUpRight size={18} /></a></div>
      <div className="sector-grid">{sectors.map((sector, index) => <a href="/portfolio" className="sector-card" key={sector.title} onClick={navigate('portfolio')}><div className="sector-image"><img src={sector.image} alt={sector.title} loading="lazy" /><span className="sector-number">0{index + 1}</span><span className="circle-arrow"><ArrowUpRight size={21} /></span></div><div className="sector-copy"><h3 className="sector-title">{sector.title}</h3><p className="sector-description">{sector.description}</p><p>{sector.detail}</p></div></a>)}</div>
    </div></section>
    <section className="leadership-feature site-container"><div className="leadership-photo"><img src={boardImage} alt="The people guiding Danhassan & Co." loading="lazy" /><span>Perspective. Experience. Conviction.</span></div><div className="leadership-copy"><h2>Lasting value starts<br />with <em>our people.</em></h2><p>Deep local understanding. A shared ambition for the continent. Meet the leaders bringing decades of experience to our next chapter.</p><a className="text-link" href="/leadership" onClick={navigate('leadership')}>Meet our leadership <ArrowUpRight size={18} /></a></div></section>
    <section className="news-section site-container"><div className="section-heading"><div><h2>The latest <em>perspectives.</em></h2></div><a className="text-link" href="/newsroom" onClick={navigate('newsroom')}>Visit the newsroom <ArrowUpRight size={18} /></a></div><div className="news-grid">{stories.map(story => <a href="/newsroom" key={story.title} className="news-card" onClick={navigate('newsroom')}><div className="news-image"><img src={story.image} alt={story.title} loading="lazy" /></div><p className="news-category">{story.category}</p><h3>{story.title}</h3><span className="news-read">Explore story <ArrowUpRight size={16} /></span></a>)}</div></section>
    <section className="investor-band"><div className="site-container"><div><h2>A clear vision.<br /><em>A disciplined approach.</em></h2></div><div><p>Explore the performance, reporting, and governance behind our long-term ambition.</p><a className="button button-white" href="/investors" onClick={navigate('investors')}>Investor centre <ArrowUpRight size={18} /></a></div></div></section>
  </div>;
}
