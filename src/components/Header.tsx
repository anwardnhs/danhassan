import { Menu, Search, ArrowUpRight } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
interface HeaderProps { currentPage: string; onNavigate: (page: string) => void; }
interface SearchItem { id: string; title: string; category: string; description: string; route: string; keywords: string[]; }
const SEARCH_INDEX: SearchItem[] = [
  // Pages
  { id: 'p-home', title: 'Home Page', category: 'Page', description: 'Danhassan & Co holding company overview, core verticals, and group scale.', route: 'home', keywords: ['home', 'danhassan', 'main', 'landing', 'overview'] },
  { id: 'p-about', title: 'Corporate Profile', category: 'Page', description: 'Group history, operating philosophy, and six-decade track record.', route: 'about', keywords: ['about', 'history', 'corporate profile', 'philosophy', 'track record', 'overview'] },
  { id: 'p-portfolio', title: 'Our Portfolio', category: 'Page', description: 'Operating subsidiaries across Power & Energy, Infrastructure, and Real Estate.', route: 'portfolio', keywords: ['portfolio', 'subsidiaries', 'businesses', 'operating segments', 'assets'] },
  { id: 'p-investors', title: 'Investor Relations', category: 'Page', description: 'Financial highlights, market capitalization, credit ratings, and reports.', route: 'investors', keywords: ['investors', 'financials', 'annual report', 'market cap', 'credit rating', 'naira', 'stocks'] },
  { id: 'p-leadership', title: 'Leadership & Governance', category: 'Page', description: 'Executive leadership team, Board of Directors, and governance committees.', route: 'leadership', keywords: ['leadership', 'board', 'directors', 'governance', 'executives', 'anwar', 'abdullahi'] },
  { id: 'p-newsroom', title: 'Newsroom & Media', category: 'Page', description: 'Press releases, regulatory filings, impact reports, and media contacts.', route: 'newsroom', keywords: ['news', 'newsroom', 'press', 'media', 'announcements', 'reports'] },
  { id: 'p-contact', title: 'Contact Us', category: 'Page', description: 'Headquarters directory in Abuja, regional office contacts, and press inquiries.', route: 'contact', keywords: ['contact', 'abuja', 'lagos', 'office', 'email', 'phone', 'address'] },

  // Subsidiaries
  { id: 'sub-sae', title: 'South Atlantic Energy (SAE)', category: 'Subsidiary', description: 'Thermal & renewable power generation across Nigeria, Ghana, and Kenya (www.sae.com).', route: 'portfolio', keywords: ['south atlantic energy', 'sae', 'power', 'energy', 'thermal', 'solar', 'mw', 'electricity'] },
  { id: 'sub-ironwood', title: 'Ironwood Engineering', category: 'Subsidiary', description: 'EPC contractor for high-voltage transmission grids and civil works (www.ironwoodeng.com).', route: 'portfolio', keywords: ['ironwood engineering', 'ironwood', 'epc', 'construction', 'transmission', 'grid', 'infrastructure'] },
  { id: 'sub-harbor', title: 'Harbor & Hedge Property', category: 'Subsidiary', description: 'Commercial offices, logistics hubs, and residential estates (www.harborhedge.com).', route: 'portfolio', keywords: ['harbor', 'hedge', 'real estate', 'property', 'logistics', 'commercial', 'housing'] },

  // Financials & Performance
  { id: 'fin-market-cap', title: 'Market Capitalization — ₦27.3 Trillion', category: 'Financials', description: 'NGX listed market capitalization as of 2026.', route: 'investors', keywords: ['market cap', 'naira', 'ngx', '27.3t', 'valuation', 'capitalization'] },
  { id: 'fin-revenue', title: 'Audited Revenue — ₦11.8 Trillion', category: 'Financials', description: 'FY2025 audited revenue performance across operating verticals.', route: 'investors', keywords: ['revenue', '11.8t', 'audited', 'financials', 'income', 'performance'] },
  { id: 'fin-ratings', title: 'Credit Ratings (BB- / Ba3)', category: 'Financials', description: 'Fitch, S&P, and Moody\'s stable and positive outlook credit ratings.', route: 'investors', keywords: ['credit rating', 'fitch', 's&p', 'moodys', 'bb-', 'ba3', 'ratings'] },
  { id: 'fin-assets', title: 'Total Group Assets — ₦34.3 Trillion', category: 'Financials', description: 'Combined asset base across energy, EPC, and real estate portfolios.', route: 'portfolio', keywords: ['total assets', '34.3t', 'asset base', 'balance sheet'] },

  // News Items
  { id: 'news-power', title: 'Power Capacity Expansion in West Africa', category: 'News', description: 'Danhassan & Co expands generation capacity in key West African energy markets.', route: 'newsroom', keywords: ['expansion', 'power capacity', 'press release', 'west africa'] },
  { id: 'news-fy25', title: 'FY2025 Performance Highlights', category: 'News', description: 'Strong operational execution and financial strength across all business segments.', route: 'newsroom', keywords: ['fy2025', 'performance', 'highlights', 'investor update'] },
  { id: 'news-foundation', title: 'Danhassan Foundation Impact Report', category: 'News', description: 'Sustainability initiatives and community impact programs across West Africa.', route: 'newsroom', keywords: ['foundation', 'impact', 'sustainability', 'esg', 'community'] },
];

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 32);
  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 32);
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, [currentPage]);
  const navItems = [['home', 'Home'], ['about', 'The group'], ['portfolio', 'Our portfolio'], ['investors', 'Investors'], ['leadership', 'Leadership'], ['newsroom', 'Newsroom']];
  useEffect(() => {
    const shortcut = (e: KeyboardEvent) => { if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setSearchOpen(value => !value); } };
    window.addEventListener('keydown', shortcut);
    return () => window.removeEventListener('keydown', shortcut);
  }, []);
  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    return term ? SEARCH_INDEX.filter(item => `${item.title} ${item.description} ${item.keywords.join(' ')}`.toLowerCase().includes(term)) : SEARCH_INDEX.slice(0, 5);
  }, [query]);
  const go = (page: string) => { setMenuOpen(false); setSearchOpen(false); setQuery(''); onNavigate(page); };
  return <>
    <header className={`site-header${currentPage === 'home' && !isScrolled ? ' site-header--over-hero' : ''}`}><div className="site-container header-inner">
      <a href="/" className="wordmark" aria-label="Danhassan & Co. home" onClick={e => { e.preventDefault(); go('home'); }}>DANHASSAN <span>&</span> CO<span className="brand-period">.</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{navItems.map(([page, label]) => <a key={page} href={page === 'home' ? '/' : `/${page}`} aria-current={currentPage === page ? 'page' : undefined} onClick={e => { e.preventDefault(); go(page); }}>{label}</a>)}</nav>
      <div className="header-actions"><button className="icon-button" aria-label="Search the website" onClick={() => setSearchOpen(true)}><Search size={18} /></button><a href="/contact" className="header-contact" onClick={e => { e.preventDefault(); go('contact'); }}>Let’s talk <ArrowUpRight size={16} /></a><button className="icon-button menu-toggle" aria-label="Open navigation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}><Menu size={23} /></button></div>
    </div></header>
    <Dialog open={menuOpen} onOpenChange={setMenuOpen}><DialogContent className="navigation-dialog"><DialogTitle>Explore Danhassan & Co.</DialogTitle><DialogDescription>Invested in Africa’s future.</DialogDescription><nav aria-label="Mobile navigation">{[...navItems, ['contact', 'Contact us']].map(([page, label], i) => <a key={page} href={page === 'home' ? '/' : `/${page}`} aria-current={currentPage === page ? 'page' : undefined} onClick={e => { e.preventDefault(); go(page); }}><span>0{i + 1}</span>{label}<ArrowUpRight size={20} /></a>)}</nav></DialogContent></Dialog>
    <Dialog open={searchOpen} onOpenChange={setSearchOpen}><DialogContent className="search-dialog"><DialogTitle>What are you looking for?</DialogTitle><DialogDescription>Search the group, our businesses, and investor information.</DialogDescription><div className="search-field"><Search size={19} /><input aria-label="Search Danhassan" placeholder="Try ‘energy’ or ‘financial reports’" value={query} onChange={e => setQuery(e.target.value)} /></div><div className="search-results" aria-live="polite">{results.length ? results.map(item => <a key={item.id} href={`/${item.route}`} onClick={e => { e.preventDefault(); go(item.route); }}><span><small>{item.category}</small><strong>{item.title}</strong><span>{item.description}</span></span><ArrowUpRight size={18} /></a>) : <p className="search-empty">No results for “{query}”. Try a sector name, or <a href="/contact" onClick={e => { e.preventDefault(); go('contact'); }}>contact our team</a>.</p>}</div><p className="search-hint">Ctrl / ⌘ K to search · Esc to close</p></DialogContent></Dialog>
  </>;
}
