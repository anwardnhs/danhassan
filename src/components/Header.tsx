import { Menu, X, ChevronRight, Search, ArrowRight, FileText, Building2, TrendingUp, Users, Newspaper } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

interface SearchItem {
  id: string;
  title: string;
  category: 'Page' | 'Subsidiary' | 'Financials' | 'Leadership' | 'News';
  description: string;
  route: string;
  keywords: string[];
}

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut listener (Cmd+K / Ctrl+K & ESC)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  const navItems = [
    { id: 'home', label: 'Home', route: 'home' },
    { id: 'about', label: 'Corporate Profile', route: 'about' },
    { id: 'portfolio', label: 'Our Portfolio', route: 'portfolio' },
    { id: 'investors', label: 'Investor Relations', route: 'investors' },
    { id: 'leadership', label: 'Leadership', route: 'leadership' },
    { id: 'newsroom', label: 'Newsroom', route: 'newsroom' },
  ];

  const handleNavClick = (route: string) => {
    onNavigate(route);
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return SEARCH_INDEX.slice(0, 5); // Default top suggestions
    return SEARCH_INDEX.filter((item) =>
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.keywords.some((k) => k.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Page': return <FileText className="h-4 w-4 text-slate-400" />;
      case 'Subsidiary': return <Building2 className="h-4 w-4 text-emerald-600" />;
      case 'Financials': return <TrendingUp className="h-4 w-4 text-amber-500" />;
      case 'Leadership': return <Users className="h-4 w-4 text-blue-500" />;
      case 'News': return <Newspaper className="h-4 w-4 text-slate-400" />;
      default: return <FileText className="h-4 w-4 text-slate-400" />;
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b ${
          isScrolled 
            ? 'bg-[#1E293B] backdrop-blur-md py-4 shadow-lg border-slate-900' 
            : 'bg-[#1E293B] py-6 border-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">

            {/* Logo Section - White Text */}
            <div 
              onClick={() => handleNavClick('home')}
              className="cursor-pointer z-50 relative group flex items-center"
            >
              <span className="font-poppins text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-slate-400 transition-colors">
                DANHASSAN & CO.
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = currentPage === item.route;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.route)}
                    className={`text-xs font-bold uppercase tracking-widest transition-all duration-200 relative py-2 
                      ${isActive 
                        ? 'text-white' 
                        : 'text-slate-400 hover:text-white'
                      }
                      after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] 
                      after:bg-emerald-500 after:scale-x-0 after:origin-right after:transition-transform after:duration-300
                      ${isActive ? 'after:scale-x-100 after:origin-left' : 'hover:after:scale-x-100 hover:after:origin-left'}
                    `}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-6">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-slate-400 hover:text-white transition-colors p-1"
                aria-label="Open search"
              >
                <Search className="h-4 w-4" />
              </button>
              
              {/* Divider */}
              <div className="h-4 w-px bg-slate-600"></div>
              
              {/* CTA Button */}
              <button 
                onClick={() => handleNavClick('contact')}
                className="bg-white text-[#1E293B] px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-emerald-50 transition-colors"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Actions & Menu Toggle */}
            <div className="flex items-center gap-3 lg:hidden">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-slate-300 hover:text-white"
                aria-label="Open search"
              >
                <Search className="h-5 w-5" />
              </button>

              <button 
                className="p-2 text-white z-50 relative"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6 text-[#1E293B]" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 lg:hidden flex flex-col pt-24 px-6 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6">
          {navItems.map((item) => {
            const isActive = currentPage === item.route;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.route)}
                className={`flex items-center justify-between text-lg font-serif border-b border-slate-100 pb-4 ${
                  isActive ? 'text-[#1E293B] font-semibold' : 'text-slate-600'
                }`}
              >
                {item.label}
                <ChevronRight className={`h-4 w-4 ${isActive ? 'text-[#1E293B]' : 'text-slate-300'}`} />
              </button>
            );
          })}
        </div>

        {/* Mobile Footer */}
        <div className="mt-auto pb-10">
          <button 
            onClick={() => handleNavClick('contact')}
            className="w-full bg-[#1E293B] text-white py-4 text-sm font-bold uppercase tracking-widest mb-6 hover:bg-slate-800 transition-colors"
          >
            Contact Us
          </button>
          
          <div className="flex items-center justify-between text-slate-500 text-xs">
            <span className="uppercase tracking-wider">NGX: DANHASSAN</span>
            <span>₦27.3T Market Cap</span>
          </div>
        </div>
      </div>

      {/* SEARCH MODAL OVERLAY */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
          <div 
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Header Input */}
            <div className="flex items-center px-6 py-4 border-b border-slate-100 bg-slate-50/50">
              <Search className="h-5 w-5 text-slate-400 mr-3 shrink-0" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search subsidiaries, financial metrics, press, or pages..."
                className="w-full bg-transparent text-slate-900 text-base sm:text-lg focus:outline-none placeholder-slate-400 font-sans"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="p-1 text-slate-400 hover:text-slate-600 mr-2 text-xs font-semibold uppercase tracking-wider"
                >
                  Clear
                </button>
              )}
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/60 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-2">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-3 mb-2 flex items-center justify-between">
                <span>{searchQuery ? `Search Results (${filteredResults.length})` : 'Popular Searches & Quick Links'}</span>
                <span className="hidden sm:inline text-slate-400 font-normal">Press ESC to exit</span>
              </div>

              {filteredResults.length > 0 ? (
                filteredResults.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleNavClick(item.route)}
                    className="group flex items-start gap-4 p-3.5 rounded-xl hover:bg-slate-100/80 transition-all cursor-pointer border border-transparent hover:border-slate-200"
                  >
                    <div className="p-2.5 bg-slate-100 rounded-xl group-hover:bg-white group-hover:shadow-sm transition-all shrink-0">
                      {getCategoryIcon(item.category)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors truncate">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded-full shrink-0">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all self-center shrink-0" />
                  </div>
                ))
              ) : (
                <div className="py-12 text-center">
                  <p className="text-slate-500 text-sm font-medium">No matches found for "{searchQuery}"</p>
                  <p className="text-slate-400 text-xs mt-1">Try searching for 'energy', 'revenue', 'investors', or 'leadership'</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span className="font-medium">Danhassan & Co. Search Index</span>
              <span className="hidden sm:inline">Use <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-mono text-slate-600 shadow-2xs">Ctrl+K</kbd> to search anytime</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

