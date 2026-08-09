import { Crown } from 'lucide-react';

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Crown className="w-6 h-6 text-red-900" />
            <span className="font-cinzel text-white text-sm sm:text-base md:text-lg font-semibold tracking-wider">
              THE COURT OF DRAGONSTONE
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('crown')}
              className="font-lato text-stone-300 hover:text-white transition-colors text-sm"
            >
              The Crown
            </button>
            <button
              onClick={() => scrollToSection('council')}
              className="font-lato text-stone-300 hover:text-white transition-colors text-sm"
            >
              The Small Council
            </button>
            <button
              onClick={() => scrollToSection('news')}
              className="font-lato text-stone-300 hover:text-white transition-colors text-sm"
            >
              News
            </button>
            <button
              onClick={() => scrollToSection('decrees')}
              className="font-lato text-stone-300 hover:text-white transition-colors text-sm"
            >
              Royal Decrees
            </button>
            <button
              onClick={() => scrollToSection('dragons')}
              className="font-lato text-stone-300 hover:text-white transition-colors text-sm"
            >
              Dragon Registry
            </button>
            <button className="bg-red-900 hover:bg-red-800 text-white font-lato px-4 py-2 text-sm font-semibold transition-colors">
              Pledge Fealty
            </button>
          </div>

          <button className="md:hidden bg-red-900 hover:bg-red-800 text-white font-lato px-3 py-1.5 text-xs font-semibold transition-colors">
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
}
