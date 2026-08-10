import React, { useState, useEffect, useMemo, useRef } from 'react';
import { ArrowUpRight, Download, Building2, Globe, FileText, CheckCircle2, TrendingUp, Users, Award, Zap, HardHat, Home } from 'lucide-react';
import Footer from '../components/Footer';

import portfolioHeroImage from '../images/portfolio-hero.jpg';

// Placeholder Component for structural visualization
const ImagePlaceholder = ({ label, className = "" }: { label: string, className?: string }) => (
  <div className={`relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 rounded-2xl ${className} group`}>
    <div className="absolute inset-0 flex items-center justify-center p-6 text-center z-10">
      <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold bg-white/90 px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
        {label}
      </span>
    </div>
  </div>
);

interface ProfileProps {
  onNavigate: (page: string) => void;
}

const useCountUp = (end: number, duration = 1800) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current || hasAnimated.current) return;
    const node = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(end * eased);
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return { ref, value };
};

const CountUpText = ({
  end,
  prefix = '',
  suffix = '',
  decimals = 0,
  formatter,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  formatter?: (v: number) => string;
}) => {
  const { ref, value } = useCountUp(end);
  const display = useMemo(() => {
    const base = formatter ? formatter(value) : value.toFixed(decimals);
    return `${prefix}${base}${suffix}`;
  }, [value, prefix, suffix, decimals, formatter]);

  return (
    <div ref={ref}>
      {display}
    </div>
  );
};

export default function CorporateProfile({ onNavigate }: ProfileProps) {
  const [isVisible, setIsVisible] = useState(false);
  


  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-[#FAF9F6] text-slate-900 font-sans antialiased selection:bg-emerald-100">
      
      {/* HERO / PAGE INTRO */}
      <section className="relative pt-40 pb-28 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>
        
        <div className={`relative max-w-[1200px] mx-auto px-6 lg:px-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-8 flex items-center gap-2 text-xs sm:text-sm text-slate-500">
            <button onClick={() => onNavigate('home')} className="hover:text-emerald-700 transition-colors">Home</button>
            <span className="text-slate-300">&gt;</span>
            <span className="text-slate-900 font-medium">Corporate Profile</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-slate-900 leading-[1.05] mb-10">
            Building the foundation <br className="hidden md:block"/> for Africa's future.
          </h1>
          
          <p className="text-2xl text-slate-600 font-light max-w-4xl leading-relaxed mb-16">
            Pioneering a new era of infrastructure development across West Africa, we combine strategic investment, operational excellence, and sustainable practices to deliver long-term value for communities and stakeholders alike.  
          </p>

          {/* NEW FOUNDATION IMAGE */}
          <div className="w-full h-[550px] rounded-3xl overflow-hidden shadow-2xl mb-20 relative group">
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
            <img 
              src={portfolioHeroImage} 
              alt="Foundation of Infrastructure" 
              className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105" 
            />
            {/* Optional: Subtle caption overlay */}
            <div className="absolute bottom-8 left-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest text-slate-800">
                Strategic Foundation
              </div>
            </div>
          </div>

          <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mt-16 mb-16">
            We pursue disciplined growth through operational rigour, sustainable investment, and strategic partnerships that deliver measurable value for stakeholders across the continent. Our approach is straightforward: acquire essential assets, operate them to world-class standards, and hold for the long term.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-12 border-t border-slate-200">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold mb-3">Market Cap</div>
              <div className="text-4xl font-poppins text-slate-900">
                <CountUpText end={27.3} prefix="₦" suffix="T" decimals={1} />
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold mb-3">Revenue (FY25)</div>
              <div className="text-4xl font-poppins text-slate-900">
                <CountUpText end={11.8} prefix="₦" suffix="T" decimals={1} />
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold mb-3">Employees</div>
              <div className="text-4xl font-poppins text-slate-900">
                <CountUpText
                  end={25200}
                  suffix="+"
                  formatter={(v) => new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(Math.round(v))}
                />
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold mb-3">Headquarters</div>
              <div className="text-3xl font-poppins text-slate-900 pt-1">Abuja, NG</div>
            </div>
          </div>
        </div>
      </section>



      {/* LEADERSHIP */}
      <section className="py-32 bg-gradient-to-b from-white to-[#FAF9F6]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-serif text-slate-900 mb-6 leading-tight">Governance</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Eleven directors. Four independent committees. A board built to challenge management, protect minority shareholders, and hold every capital allocation decision to account.</p>
          </div>
          
          <div className="mb-20">
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-10 md:p-12 shadow-xl">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Message from the Group CEO</div>
              <blockquote className="text-2xl md:text-3xl font-serif text-slate-900 leading-relaxed">
                "At Danhassan & Co, we are committed to building a sustainable future for West Africa. Our focus on strategic investments, operational excellence, and community impact drives every decision we make. We believe in creating value not just for our shareholders, but for the communities we serve." 
              </blockquote>
              <div className="mt-8 text-sm text-slate-600 font-semibold">Anwar Alhassan, Chief Executive Officer</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 rounded-3xl border-4 border-slate-900 hover:border-emerald-600 transition-all duration-500 hover:scale-105 cursor-pointer group">
              <div className="flex items-center gap-4 mb-6">
                <Users className="h-10 w-10 text-emerald-400 group-hover:scale-110 transition-transform" />
                <h4 className="font-serif text-2xl">Executive Directors</h4>
              </div>
              <div className="text-5xl font-bold mb-4">3</div>
              <p className="text-sm text-slate-300 leading-relaxed">Directing day-to-day strategic execution and operational delivery.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-100 to-white p-10 rounded-3xl border-4 border-slate-300 hover:border-slate-600 transition-all duration-500 hover:scale-105 cursor-pointer group">
              <div className="flex items-center gap-4 mb-6">
                <Building2 className="h-10 w-10 text-slate-600 group-hover:scale-110 transition-transform" />
                <h4 className="font-serif text-2xl text-slate-900">Non-Executive</h4>
              </div>
              <div className="text-5xl font-bold text-slate-900 mb-4">5</div>
              <p className="text-sm text-slate-600 leading-relaxed">Industry-specific oversight from global infrastructure and finance sectors.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-600 to-slate-900 text-white p-10 rounded-3xl border-4 border-slate-600 hover:border-emerald-400 transition-all duration-500 hover:scale-105 cursor-pointer group">
              <div className="flex items-center gap-4 mb-6">
                <Award className="h-10 w-10 text-white group-hover:scale-110 transition-transform" />
                <h4 className="font-serif text-2xl">Independent</h4>
              </div>
              <div className="text-5xl font-bold mb-4">3</div>
              <p className="text-sm text-emerald-50 leading-relaxed">Ensuring strict adherence to ESG, audit, and minority shareholder protections.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORY TIMELINE */}
      <section className="py-32 bg-white border-y border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-5xl font-serif text-slate-900 mb-6 text-center leading-tight">Strategic Evolution</h2>
          <p className="text-xl text-slate-600 text-center mb-20 max-w-3xl mx-auto">Six decades of transformation from regional trading to pan-African infrastructure leadership.</p>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-slate-300 via-emerald-500 to-emerald-600 md:transform md:-translate-x-1/2"></div>
              
              <div className="space-y-16">
                {/* Block 1 */}
                <div className="relative md:w-1/2 md:pr-16 md:ml-0 ml-16">
                  <div className="absolute top-2 -left-[41px] md:-right-4 md:left-auto w-12 h-12 rounded-full bg-slate-300 border-4 border-white shadow-lg flex items-center justify-center"><span className="text-xs font-bold text-slate-700">1967</span></div>
                  <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-slate-400 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">1967 – 1987</div>
                    <h3 className="text-2xl font-serif text-slate-900 mb-4">Trading Origins</h3>
                    <p className="text-base text-slate-700 leading-relaxed">Establishment of SB Trading Limited in Kano, evolving from general merchandise to supplying electrical equipment for government infrastructure projects.</p>
                  </div>
                </div>
                {/* Block 2 */}
                <div className="relative md:w-1/2 md:pl-16 md:ml-auto ml-16">
                  <div className="absolute top-2 -left-[41px] md:-left-4 w-12 h-12 rounded-full bg-slate-400 border-4 border-white shadow-lg flex items-center justify-center"><span className="text-xs font-bold text-white">1988</span></div>
                  <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-slate-400 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">1988 – 2002</div>
                    <h3 className="text-2xl font-serif text-slate-900 mb-4">The Industrial Pivot</h3>
                    <p className="text-base text-slate-700 leading-relaxed">Rebranded to Sambo Group. Established Ironwood Engineering Division to shift from procurement to EPC contracting, taking early equity stakes in power projects.</p>
                  </div>
                </div>
                {/* Block 3 */}
                <div className="relative md:w-1/2 md:pr-16 md:ml-0 ml-16">
                   <div className="absolute top-2 -left-[41px] md:-right-4 md:left-auto w-12 h-12 rounded-full bg-slate-600 border-4 border-white shadow-lg flex items-center justify-center"><span className="text-xs font-bold text-white">2003</span></div>
                  <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-slate-400 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">2003 – 2010</div>
                    <h3 className="text-2xl font-serif text-slate-900 mb-4">Consolidation & IPO</h3>
                    <p className="text-base text-slate-700 leading-relaxed">Corporate restructuring into Danhassan & Co. Successful 2009 listing on the Nigerian Stock Exchange, raising capital to fund heavy infrastructure expansion.</p>
                  </div>
                </div>
                {/* Block 4 */}
                <div className="relative md:w-1/2 md:pl-16 md:ml-auto ml-16">
                   <div className="absolute top-2 -left-[41px] md:-left-4 w-12 h-12 rounded-full bg-emerald-600 border-4 border-white shadow-lg flex items-center justify-center"><span className="text-xs font-bold text-white">2011</span></div>
                  <div className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-300 rounded-2xl p-8 hover:border-emerald-500 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 mb-3">2011 – 2020</div>
                    <h3 className="text-2xl font-serif text-slate-900 mb-4">Power Sector Dominance</h3>
                    <p className="text-base text-slate-700 leading-relaxed">Creation of South Atlantic Energy. Won massive assets during Nigeria's 2013 power privatization. Commissioned Ikorodu (750MW) and Calabar (630MW) IPPs.</p>
                  </div>
                </div>
                {/* Block 5 */}
                <div className="relative md:w-1/2 md:pr-16 md:ml-0 ml-16">
                   <div className="absolute top-2 -left-[41px] md:-right-4 md:left-auto w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-700 border-4 border-white shadow-xl flex items-center justify-center animate-pulse"><span className="text-xs font-bold text-white">2021</span></div>
                  <div className="bg-gradient-to-br from-slate-600 to-slate-900 text-white border-2 border-emerald-600 rounded-2xl p-8 hover:border-emerald-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:scale-105">
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200 mb-3">2021 – 2026</div>
                    <h3 className="text-2xl font-serif mb-4">Pan-African Expansion</h3>
                    <p className="text-base text-emerald-50 leading-relaxed">Acquisition of Volta Distribution (Ghana), $500M Eurobond issuance, and formation of a $285M Gas-to-Power Joint Venture with TotalEnergies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-gradient-to-br from-slate-900  to-slate-900 py-28 text-white text-center border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">See Where the Capital Goes</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">Our portfolio page breaks down every subsidiary — capacity figures, revenue splits, and the operating metrics behind the headlines.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={() => onNavigate('portfolio')} className="group w-full sm:w-auto px-10 py-5 bg-white text-slate-900 text-sm font-bold uppercase tracking-[0.15em] hover:bg-emerald-600 hover:text-white transition-all duration-300 rounded-full hover:scale-105 shadow-2xl flex items-center justify-center gap-3">
              Explore the Portfolio <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button className="group w-full sm:w-auto px-10 py-5 border-2 border-slate-600 text-white text-sm font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-300 rounded-full hover:scale-105 flex items-center justify-center gap-3">
              <Download className="h-5 w-5" /> Download PDF Profile
            </button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
