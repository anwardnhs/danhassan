import { Menu, X, ChevronRight, Search } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
              className="cursor-pointer z-50 relative group flex items-center gap-3"
            >
              <img src="/favicon.png" alt="Danhassan Logo" className="h-8 w-8 object-contain brightness-0 invert" />
              <span className="font-poppins text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-slate-200 transition-colors">
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
              <button className="text-slate-400 hover:text-white transition-colors">
                <Search className="h-4 w-4" />
              </button>
              
              {/* Divider is now Slate-600 to match the BG */}
              <div className="h-4 w-px bg-slate-600"></div>
              
              {/* CTA: White Button, Slate-900 Text */}
              <button 
                onClick={() => handleNavClick('contact')}
                className="bg-white text-[#1E293B] px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-emerald-50 transition-colors"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-white z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6 text-[#1E293B]" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu - Keeps White BG for Readability */}
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
            <span>₦3,200</span>
          </div>
        </div>
      </div>
    </>
  );
}

