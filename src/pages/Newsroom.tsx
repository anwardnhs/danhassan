import React, { useState } from 'react';
import { ArrowUpRight, Mail, Phone, Calendar, Tag, ChevronRight, FileText, Download } from 'lucide-react';
import Footer from '../components/Footer';
import portImage from '../images/port.jpg';

// --- DATA STRUCTURES ---

const featuredStory = {
  category: 'Press Release',
  date: 'Feb 12, 2026',
  title: 'Harbor & Hedge Advances Lekki Port Logistics Hub Development',
  summary: 'The project expands the Group’s industrial logistics footprint and strengthens export capacity across West Africa through integrated warehousing and port‑adjacent infrastructure.',
  readTime: '4 min read'
};

const allUpdates = [
  {
    category: 'Investor Update',
    date: 'Jan 24, 2026',
    title: 'FY2025 Audited Results Released',
    summary: 'Full-year results show resilient cash flow and disciplined capital allocation across core assets.',
    type: 'Financials'
  },
  {
    category: 'ESG',
    date: 'Jan 15, 2026',
    title: 'Project Green Horizon: 2025 Impact Report',
    summary: 'Progress across emissions intensity, community investment, and workforce development initiatives.',
    type: 'Report'
  },
  {
    category: 'Corporate',
    date: 'Dec 12, 2025',
    title: 'TotalEnergies Gas-to-Power Partnership Announced',
    summary: 'Joint venture targets 400 MW of new capacity and improved gas supply stability in Nigeria.',
    type: 'News'
  },
  {
    category: 'Press Release',
    date: 'Sep 20, 2025',
    title: 'Rwanda Grid Solutions Stake Completed',
    summary: 'Strategic investment accelerates smart grid modernization across Kigali and four provinces.',
    type: 'News'
  },
  {
    category: 'Investor Update',
    date: 'Jun 30, 2025',
    title: 'Eurobond Issuance Successfully Priced',
    summary: 'The $500M issuance supports long-term expansion and asset rehabilitation programs.',
    type: 'Financials'
  },
  {
    category: 'Corporate',
    date: 'Feb 18, 2025',
    title: '200 MW Thermal Plant Awarded in Southern Nigeria',
    summary: 'New capacity enhances baseload reliability and regional industrial productivity.',
    type: 'News'
  },
];

const categories = ['All', 'Press Release', 'Investor Update', 'ESG', 'Corporate'];

interface NewsroomProps {
  onNavigate: (page: string) => void;
}

export default function Newsroom({ onNavigate }: NewsroomProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');

  const filteredUpdates = activeCategory === 'All' 
    ? allUpdates 
    : allUpdates.filter(item => item.category === activeCategory);

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-emerald-100">
      
      {/* TYPOGRAPHY INJECTION */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 bg-[#FAF9F6] border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-slate-500">
            <button onClick={() => onNavigate('home')} className="hover:text-emerald-700 transition-colors">Home</button>
            <span className="text-slate-300">&gt;</span>
            <span className="text-slate-900 font-medium">Newsroom</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-poppins text-slate-900 leading-tight mb-6">
            Updates, disclosures, <br/> and corporate news.
          </h1>
          <p className="text-xl text-slate-600 font-light max-w-2xl leading-relaxed mb-8">
            Official releases and updates from Danhassan & Co, Plc. Stay informed about our strategic initiatives and operational milestones.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold uppercase tracking-widest rounded-sm">
            <span className="w-2 h-2 bg-slate-900 rounded-full"></span>
            Latest Update: Feb 12, 2026
          </div>
        </div>
      </section>

      {/* 2. FEATURED STORY */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">Featured Story</h2>
          
          <div className="group grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center cursor-pointer">
            <div className="order-2 lg:order-1 max-w-[560px]">
              <div className="flex items-center gap-4 text-sm mb-4">
                <span className="font-bold text-emerald-800 uppercase tracking-wider">{featuredStory.category}</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500">{featuredStory.date}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif text-slate-900 leading-tight mb-6 group-hover:text-emerald-900 transition-colors">
                {featuredStory.title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {featuredStory.summary}
              </p>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 w-fit group-hover:text-emerald-800 group-hover:border-emerald-800 transition-all">
                Read Full Release <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
            
            <div className="order-1 lg:order-2 h-[360px] sm:h-[420px] lg:h-[560px] bg-slate-100 relative overflow-hidden rounded-sm">
              <img
                src={portImage}
                alt="Featured newsroom"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. LATEST UPDATES (List View) */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-slate-200 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-sm font-bold uppercase tracking-widest transition-all rounded-sm ${
                  activeCategory === cat 
                    ? 'bg-slate-900 text-white' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUpdates.map((item, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all cursor-pointer flex flex-col h-full"
              >
                <div className="mb-6 flex justify-between items-start">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm bg-slate-50 text-slate-900 border border-slate-200">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-400">{item.date}</span>
                </div>
                
                <h4 className="text-xl font-serif text-slate-900 mb-3 group-hover:text-emerald-900 transition-colors">
                  {item.title}
                </h4>
                
                <p className="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                  {item.summary}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-emerald-700 transition-colors">Read More</span>
                  <ArrowUpRight className="h-4 w-4 text-slate-300 group-hover:text-emerald-700 transition-colors" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="px-8 py-4 border-2 border-slate-900 text-slate-900 text-sm font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
              Load More Updates
            </button>
          </div>
        </div>
      </section>

      {/* 4. MEDIA CONTACTS & SUBSCRIBE */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Media Contacts */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Media Inquiries</h3>
            <h2 className="text-3xl font-serif text-slate-900 mb-6">Corporate Communications</h2>
            <p className="text-slate-600 mb-8">
              For press inquiries, interview requests, and official statements from Danhassan & Co.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:media@danhassan.co" className="flex items-center gap-4 p-5 border border-slate-200 hover:border-emerald-500 transition-all group">
                <div className="p-3 bg-slate-50 text-slate-500 rounded-full group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</div>
                  <div className="font-semibold text-slate-900">media@danhassan.co</div>
                </div>
              </a>
              <a href="tel:+23494614200" className="flex items-center gap-4 p-5 border border-slate-200 hover:border-emerald-500 transition-all group">
                <div className="p-3 bg-slate-50 text-slate-500 rounded-full group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone</div>
                  <div className="font-semibold text-slate-900">+234 9 461 4200</div>
                </div>
              </a>
            </div>
          </div>

          {/* Subscribe */}
          <div className="bg-slate-900 text-white p-10 flex flex-col justify-center">
            <h3 className="text-2xl font-serif mb-4">Subscribe to News Updates</h3>
            <p className="text-slate-400 mb-8">Get the latest press releases and corporate announcements delivered to your inbox.</p>
            
            <form className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-emerald-500 transition-all"
              />
              <button className="w-full px-6 py-4 bg-white text-slate-900 font-bold uppercase tracking-widest text-sm hover:bg-emerald-50 transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 5. FOOTER CTA */}
      <section className="py-12 bg-[#F8F9FA] border-t border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-slate-600 text-sm font-medium">
            Looking for financial reports? Visit Investor Relations.
          </div>
          <button 
            onClick={() => onNavigate('investors')}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-emerald-800 transition-colors"
          >
            Investor Relations <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
