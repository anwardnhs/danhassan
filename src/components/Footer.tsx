import React, { useState } from 'react';
import { ArrowUp, ArrowUpRight, Linkedin, Twitter, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Routing Data Structure
  const footerLinks = {
    company: [
      { label: 'Corporate Profile', route: 'about' },
      { label: 'Leadership Team', route: 'leadership' },
      { label: 'Newsroom', route: 'newsroom' },
      { label: 'Careers', route: 'careers' },
    ],
    business: [
      { label: 'Power & Energy', route: 'portfolio' },
      { label: 'Infrastructure', route: 'portfolio' },
      { label: 'Real Estate', route: 'portfolio' },
    ],
    investors: [
      { label: 'Financial Reports', route: 'investors' },
      { label: 'Stock Information', route: 'investors' },
      { label: 'Governance', route: 'governance' },
      { label: 'ESG Framework', route: 'esg' },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-[#F8F9FA] to-[#F1F3F5] text-slate-900 border-t border-slate-200 font-sans">
      
      {/* 1. CTA BAND - Enhanced */}
      <div className="border-b border-slate-200 bg-white/50 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="font-serif text-3xl md:text-4xl text-slate-900 leading-tight max-w-xl">
            Invest in Africa's infrastructure backbone.
          </h3>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => onNavigate('about')}
              className="group px-8 py-4 border-2 border-slate-300 text-xs font-bold uppercase tracking-[0.15em] hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Corporate Profile
            </button>
            <button 
              onClick={() => onNavigate('investors')}
              className="group px-8 py-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-[0.15em] hover:bg-emerald-800 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2.5"
            >
              Investor Relations 
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN GRID - Enhanced spacing and hover states */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
          
          {/* Column 1: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500 mb-8">Company</h4>
            <ul className="space-y-5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => onNavigate(link.route)}
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="group text-base text-slate-700 hover:text-emerald-800 transition-all duration-300 text-left flex items-center gap-2"
                  >
                    <span className={`transition-transform duration-300 ${hoveredLink === link.label ? 'translate-x-1' : ''}`}>
                      {link.label}
                    </span>
                    <ArrowUpRight className={`h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 ${hoveredLink === link.label ? 'translate-x-0.5 -translate-y-0.5' : ''}`} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Business Units */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500 mb-8">Business Segments</h4>
            <ul className="space-y-5">
              {footerLinks.business.map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => onNavigate(link.route)}
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="group text-base text-slate-700 hover:text-emerald-800 transition-all duration-300 text-left flex items-center gap-2"
                  >
                    <span className={`transition-transform duration-300 ${hoveredLink === link.label ? 'translate-x-1' : ''}`}>
                      {link.label}
                    </span>
                    <ArrowUpRight className={`h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 ${hoveredLink === link.label ? 'translate-x-0.5 -translate-y-0.5' : ''}`} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Investors */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500 mb-8">Investors</h4>
            <ul className="space-y-5">
              {footerLinks.investors.map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => onNavigate(link.route)}
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="group text-base text-slate-700 hover:text-emerald-800 transition-all duration-300 text-left flex items-center gap-2"
                  >
                    <span className={`transition-transform duration-300 ${hoveredLink === link.label ? 'translate-x-1' : ''}`}>
                      {link.label}
                    </span>
                    <ArrowUpRight className={`h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 ${hoveredLink === link.label ? 'translate-x-0.5 -translate-y-0.5' : ''}`} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact - Enhanced with better visual hierarchy */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500 mb-8">Headquarters</h4>
            <div className="space-y-7">
              <div className="group flex items-start gap-4 hover:bg-white/80 -ml-2 pl-2 pr-2 py-2 rounded-lg transition-all duration-300">
                <MapPin className="h-5 w-5 text-emerald-700 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-slate-700 leading-relaxed">
                  Danhassan House,<br />
                  Plot 1275 Cadastral Zone,<br />
                  Central Business District, Abuja.
                </p>
              </div>
              <div className="group flex items-center gap-4 hover:bg-white/80 -ml-2 pl-2 pr-2 py-2 rounded-lg transition-all duration-300">
                <Mail className="h-5 w-5 text-emerald-700 shrink-0 group-hover:scale-110 transition-transform" />
                <a 
                  href="mailto:ir@danhassan.com" 
                  className="text-sm text-slate-700 hover:text-emerald-800 transition-colors font-medium"
                >
                  ir@danhassan.com
                </a>
              </div>
              <div className="group flex items-center gap-4 hover:bg-white/80 -ml-2 pl-2 pr-2 py-2 rounded-lg transition-all duration-300">
                <Phone className="h-5 w-5 text-emerald-700 shrink-0 group-hover:scale-110 transition-transform" />
                <a 
                  href="tel:+2349461200" 
                  className="text-sm text-slate-700 hover:text-emerald-800 transition-colors font-medium"
                >
                  +234 (0) 9 461 2000
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. BOTTOM BAR - Enhanced */}
      <div className="border-t border-slate-300 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
            <span className="font-poppins text-xl font-bold text-slate-900 tracking-tight">DANHASSAN & CO.</span>
            <span className="hidden md:inline-block h-5 w-px bg-slate-300"></span>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <span className="text-xs text-slate-600">© {currentYear} Danhassan & Co, Plc. All rights reserved.</span>
              <div className="flex items-center gap-4 text-xs">
                <button className="text-slate-600 hover:text-slate-900 transition-colors hover:underline underline-offset-4">
                  Privacy Policy
                </button>
                <span className="text-slate-300">|</span>
                <button className="text-slate-600 hover:text-slate-900 transition-colors hover:underline underline-offset-4">
                  Terms of Use
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            
            
            {/* Social Icons - Enhanced */}
            <div className="flex items-center gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center h-10 w-10 rounded-full bg-slate-100 text-slate-600 hover:bg-[#0077B5] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center h-10 w-10 rounded-full bg-slate-100 text-slate-600 hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Twitter"
              >
                <Twitter className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Optional: Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 h-12 w-12 rounded-full bg-slate-900 text-white shadow-2xl hover:bg-emerald-800 transition-all duration-300 hover:scale-110 flex items-center justify-center group z-50 opacity-0 hover:opacity-100 focus:opacity-100"
        aria-label="Back to top"
        style={{ opacity: 0.9 }}
      >
        <ArrowUp className="h-5 w-5 rotate-45 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </footer>
  );
}