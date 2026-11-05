import { Menu, Search, ArrowUpRight, X } from 'lucide-react';
import { useState, useEffect, useMemo, useRef } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { SiteLink } from './CorporateLayout';
import { allUpdates, featuredStory } from '../data/news';
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
  { id: 'sub-sae', title: 'South Atlantic Energy (SAE)', category: 'Subsidiary', description: 'Thermal & renewable power generation across Nigeria, Ghana, and Kenya (www.sae.com).', route: 'portfolio#power', keywords: ['south atlantic energy', 'sae', 'power', 'energy', 'thermal', 'solar', 'mw', 'electricity'] },
  { id: 'sub-ironwood', title: 'Ironwood Engineering', category: 'Subsidiary', description: 'EPC contractor for high-voltage transmission grids and civil works (www.ironwoodeng.com).', route: 'portfolio#engineering', keywords: ['ironwood engineering', 'ironwood', 'epc', 'construction', 'transmission', 'grid', 'infrastructure'] },
  { id: 'sub-harbor', title: 'Harbor & Hedge Property', category: 'Subsidiary', description: 'Commercial offices, logistics hubs, and residential estates (www.harborhedge.com).', route: 'portfolio#property', keywords: ['harbor', 'hedge', 'real estate', 'property', 'logistics', 'commercial', 'housing'] },

  // Financials & Performance
  { id: 'fin-market-cap', title: 'Market Capitalization — ₦27.3 Trillion', category: 'Financials', description: 'NGX listed market capitalization as of 2026.', route: 'investors', keywords: ['market cap', 'naira', 'ngx', '27.3t', 'valuation', 'capitalization'] },
  { id: 'fin-revenue', title: 'Audited Revenue — ₦11.8 Trillion', category: 'Financials', description: 'FY2025 audited revenue performance across operating verticals.', route: 'investors#financial-results', keywords: ['revenue', '11.8t', 'audited', 'financials', 'income', 'performance'] },
  { id: 'fin-ratings', title: 'Credit Ratings (BB- / Ba3)', category: 'Financials', description: 'Fitch, S&P, and Moody\'s stable and positive outlook credit ratings.', route: 'investors#market-performance', keywords: ['credit rating', 'fitch', 's&p', 'moodys', 'bb-', 'ba3', 'ratings'] },
  { id: 'fin-assets', title: 'Total Group Assets — ₦34.3 Trillion', category: 'Financials', description: 'Combined asset base across energy, EPC, and real estate portfolios.', route: 'portfolio', keywords: ['total assets', '34.3t', 'asset base', 'balance sheet'] },

  // News Items
  ...[{ ...featuredStory, id: 'featured-announcement' }, ...allUpdates].map(story => ({
    id: story.id,
    title: story.title,
    category: 'News' as const,
    description: story.summary,
    route: `newsroom#${story.id}`,
    keywords: [story.category],
  })),
  { id: 'financial-reports', title: 'Reports & disclosures', category: 'Financials', description: 'Annual reports, financial results, and governance documents.', route: 'investors#reports', keywords: ['financial reports', 'annual report', 'disclosures', 'investor documents'] },
];

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [panel, setPanel] = useState<'menu' | 'search' | null>(null);
  const [query, setQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 32);
  const pendingDestination = useRef<string | null>(null);
  const openingControl = useRef<HTMLElement | null>(null);
  const searchInput = useRef<HTMLInputElement>(null);
  const navItems = [['home', 'Home'], ['about', 'The group'], ['portfolio', 'Our portfolio'], ['investors', 'Investors'], ['leadership', 'Leadership'], ['newsroom', 'Newsroom']];

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 32);
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, [currentPage]);

  useEffect(() => {
    const shortcut = (event: KeyboardEvent) => {
      if (!(event.metaKey || event.ctrlKey) || event.key.toLowerCase() !== 'k' || panel === 'menu') return;
      event.preventDefault();
      if (!panel) openingControl.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      setPanel(panel ? null : 'search');
    };
    window.addEventListener('keydown', shortcut);
    return () => window.removeEventListener('keydown', shortcut);
  }, [panel]);

  const term = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (!term) return SEARCH_INDEX.filter(item => item.category === 'Page' && item.route !== 'home').slice(0, 5);
    const words = term.split(/\s+/);
    return SEARCH_INDEX.flatMap(item => {
      const title = item.title.toLowerCase();
      const keywords = item.keywords.join(' ').toLowerCase();
      const details = `${item.category} ${item.description}`.toLowerCase();
      const matches = words.map(word => title.includes(word) ? 3 : keywords.includes(word) ? 2 : details.includes(word) ? 1 : 0);
      if (matches.includes(0)) return [];
      const score = matches.reduce<number>((sum, match) => sum + match, 0) + (title.includes(term) ? 5 : 0);
      return [{ item, score }];
    }).sort((a, b) => b.score - a.score).map(({ item }) => item);
  }, [term]);

  function openPanel(nextPanel: 'menu' | 'search', control: HTMLElement) {
    openingControl.current = control;
    setPanel(nextPanel);
  }

  function chooseDestination(destination: string) {
    pendingDestination.current = destination;
    setPanel(null);
  }

  function restoreFocus(event: Event) {
    event.preventDefault();
    const destination = pendingDestination.current;
    pendingDestination.current = null;
    setQuery('');
    if (destination) onNavigate(destination);
    else openingControl.current?.focus();
  }

  const headerClass = currentPage === 'home' && !isScrolled ? 'site-header site-header--over-hero' : 'site-header';

  return (
    <>
      <header className={headerClass}>
        <div className="site-container header-inner">
          <SiteLink page="home" onNavigate={onNavigate} className="wordmark" aria-label="Danhassan & Co. home">
            DANHASSAN <span>&</span> CO<span className="brand-period">.</span>
          </SiteLink>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map(([page, label]) => (
              <SiteLink key={page} page={page} onNavigate={onNavigate} aria-current={currentPage === page ? 'page' : undefined}>{label}</SiteLink>
            ))}
          </nav>
          <div className="header-actions">
            <button className="icon-button" aria-label="Search the website" aria-haspopup="dialog" onClick={event => openPanel('search', event.currentTarget)}><Search size={18} /></button>
            <SiteLink page="contact" onNavigate={onNavigate} className="header-contact" aria-current={currentPage === 'contact' ? 'page' : undefined}>Let’s talk <ArrowUpRight size={16} /></SiteLink>
            <button className="icon-button menu-toggle" aria-label="Open navigation menu" aria-haspopup="dialog" aria-expanded={panel === 'menu'} onClick={event => openPanel('menu', event.currentTarget)}><Menu size={23} /></button>
          </div>
        </div>
      </header>
      <Dialog open={panel === 'menu'} onOpenChange={open => { if (!open) setPanel(null); }}>
        <DialogContent className="navigation-dialog" onCloseAutoFocus={restoreFocus}>
          <DialogTitle>Explore Danhassan & Co.</DialogTitle>
          <DialogDescription>Invested in Africa’s future.</DialogDescription>
          <nav aria-label="Mobile navigation">
            {[...navItems, ['contact', 'Contact us']].map(([page, label], index) => (
              <SiteLink key={page} page={page} onNavigate={chooseDestination} aria-current={currentPage === page ? 'page' : undefined}>
                <span aria-hidden="true">0{index + 1}</span>{label}<ArrowUpRight size={20} aria-hidden="true" />
              </SiteLink>
            ))}
          </nav>
        </DialogContent>
      </Dialog>
      <Dialog open={panel === 'search'} onOpenChange={open => { if (!open) setPanel(null); }}>
        <DialogContent className="search-dialog" onCloseAutoFocus={restoreFocus}>
          <DialogTitle>Search Danhassan & Co.</DialogTitle>
          <DialogDescription>Find businesses, announcements, and investor information.</DialogDescription>
          <form className="search-field" role="search" onSubmit={event => {
            event.preventDefault();
            if (term && results[0]) chooseDestination(results[0].route);
          }}>
            <Search size={19} aria-hidden="true" />
            <input ref={searchInput} aria-label="Search Danhassan" placeholder="Try ‘energy’ or ‘financial reports’" value={query} onChange={event => setQuery(event.target.value)} />
            {query && <button type="button" className="icon-button" aria-label="Clear search" onClick={() => { setQuery(''); searchInput.current?.focus(); }}><X size={18} /></button>}
          </form>
          <p className="search-summary" role="status">
            {term ? `${results.length} ${results.length === 1 ? 'result' : 'results'}` : 'Suggested destinations'}
          </p>
          <div className="search-results">
            {results.length ? results.map(item => (
              <SiteLink key={item.id} page={item.route} onNavigate={chooseDestination}>
                <span><small>{item.category}</small><strong>{item.title}</strong><span>{item.description}</span></span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </SiteLink>
            )) : <p className="search-empty">No matches for “{query}”. Try a sector name or <SiteLink page="contact" onNavigate={chooseDestination}>contact our team</SiteLink>.</p>}
          </div>
          <p className="search-hint">Enter opens the first match · Esc closes search</p>
        </DialogContent>
      </Dialog>
    </>
  );
}
