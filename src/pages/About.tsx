import React, { useState, useEffect, useMemo, useRef } from 'react';
import { ArrowUpRight, Download, Building2, Users, Award, TrendingUp } from 'lucide-react';
import Footer from '../components/Footer';

import portfolioHeroImage from '../images/portfolio-hero.jpg';

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
    <div className="bg-[#FAF9F6] text-slate-900 font-sans antialiased selection:bg-emerald-100/50">
      
      {/* HERO / PAGE INTRO */}
      <section className="relative pt-40 pb-20 sm:pb-32 bg-[#FAF9F6] overflow-hidden">
        <div className={`relative max-w-[1200px] mx-auto px-6 lg:px-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-12 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
            <button onClick={() => onNavigate('home')} className="hover:text-slate-900 transition-colors">Home</button>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900">Corporate Profile</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-serif text-slate-900 leading-[1.05] tracking-tight mb-8 sm:mb-12 max-w-5xl">
            Building the foundation<br className="hidden md:block"/> for Africa's future.
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-24">
            <div className="lg:col-span-8">
              <p className="text-xl sm:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl">
                Danhassan & Co. is a Nigerian Investment Holding Company with a diversified portfolio of subsidiaries across power, energy, and infrastructure sectors. We are committed to delivering sustainable growth and value creation for our shareholders, employees, and the communities we serve. 
              </p>
            </div>
            
          </div>

          {/* HERO IMAGE */}
          <div className="w-full aspect-[21/9] sm:h-[600px] rounded-2xl sm:rounded-[32px] overflow-hidden relative group">
            <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-1000 z-10"></div>
            <img 
              src={portfolioHeroImage} 
              alt="Foundation of Infrastructure" 
              className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-out group-hover:scale-105" 
            />
          </div>

          {/* METRICS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 pt-24 mt-24 border-t border-slate-200/60">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-slate-400" />
                Market Cap
              </div>
              <div className="text-4xl sm:text-5xl font-light text-slate-900 font-sans tracking-tight">
                <CountUpText end={27.3} prefix="₦" suffix="T" decimals={1} />
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold mb-3 flex items-center gap-2">
                <Award className="h-4 w-4 text-slate-400" />
                Revenue (FY25)
              </div>
              <div className="text-4xl sm:text-5xl font-light text-slate-900 font-sans tracking-tight">
                <CountUpText end={11.8} prefix="₦" suffix="T" decimals={1} />
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold mb-3 flex items-center gap-2">
                <Users className="h-4 w-4 text-slate-400" />
                Employees
              </div>
              <div className="text-4xl sm:text-5xl font-light text-slate-900 font-sans tracking-tight">
                <CountUpText
                  end={25200}
                  suffix="+"
                  formatter={(v) => new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(Math.round(v))}
                />
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold mb-3 flex items-center gap-2">
                <Building2 className="h-4 w-4 text-slate-400" />
                Headquarters
              </div>
              <div className="text-2xl sm:text-3xl font-light text-slate-900 font-sans tracking-tight pt-1.5">
                Abuja, NG
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP / GOVERNANCE */}
      <section className="py-24 sm:py-32 bg-white border-t border-slate-200/60">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 className="text-4xl sm:text-5xl font-serif text-slate-900 mb-6 leading-tight">Governance</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our board of directors combines deep industry expertise with a commitment to ethical leadership, ensuring that our strategic vision is executed with integrity and accountability.  
              </p>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Director Cards */}
                <div className="bg-[#FAF9F6] p-8 rounded-2xl border border-slate-200/60 group hover:bg-slate-50 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-8">
                    <Users className="h-6 w-6 text-slate-400 group-hover:text-slate-900 transition-colors" />
                    <div className="text-4xl font-light text-slate-900">3</div>
                  </div>
                  <h4 className="font-sans font-semibold text-lg text-slate-900 mb-2">Executive Directors</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Directing day-to-day strategic execution and operational delivery across all subsidiaries.</p>
                </div>

                <div className="bg-[#FAF9F6] p-8 rounded-2xl border border-slate-200/60 group hover:bg-slate-50 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-8">
                    <Building2 className="h-6 w-6 text-slate-400 group-hover:text-slate-900 transition-colors" />
                    <div className="text-4xl font-light text-slate-900">5</div>
                  </div>
                  <h4 className="font-sans font-semibold text-lg text-slate-900 mb-2">Non-Executive</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Industry-specific oversight drawn from global infrastructure, energy, and finance sectors.</p>
                </div>

                <div className="bg-[#FAF9F6] p-8 rounded-2xl border border-slate-200/60 group hover:bg-slate-50 transition-colors duration-300 sm:col-span-2">
                  <div className="flex items-center justify-between mb-8">
                    <Award className="h-6 w-6 text-slate-400 group-hover:text-slate-900 transition-colors" />
                    <div className="text-4xl font-light text-slate-900">3</div>
                  </div>
                  <h4 className="font-sans font-semibold text-lg text-slate-900 mb-2">Independent</h4>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-xl">Ensuring strict adherence to ESG mandates, rigorous audit processes, and the unwavering protection of minority shareholder interests.</p>
                </div>
              </div>

              {/* CEO Quote */}
              <div className="mt-12 pt-12 border-t border-slate-200/60">
                <blockquote className="text-xl sm:text-2xl font-serif text-slate-900 leading-relaxed mb-6">
                  "We believe in creating value not just for our shareholders, but for the communities we serve. Our focus on operational excellence drives every decision we make." 
                </blockquote>
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                  — Anwar Alhassan, Chief Executive Officer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORY TIMELINE */}
      <section className="py-24 sm:py-32 bg-[#FAF9F6] border-t border-slate-200/60">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h2 className="text-4xl sm:text-5xl font-serif text-slate-900 mb-6 leading-tight">Strategic<br/>Evolution</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  From humble beginnings in general trading to becoming a powerhouse in power and infrastructure, our journey reflects a commitment to innovation, resilience, and sustainable growth. Each phase of our history has been marked by strategic pivots that have positioned us as leaders in the African investment landscape.  
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-8 lg:pl-12">
              <div className="space-y-16">
                
                {/* Timeline Item */}
                <div className="group relative border-l border-slate-200 pl-8 pb-4 transition-colors hover:border-slate-900">
                  <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-slate-200 group-hover:bg-slate-900 transition-colors"></div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-2">1967 – 1987</div>
                  <h3 className="text-2xl font-serif text-slate-900 mb-4">Trading Origins</h3>
                  <p className="text-base text-slate-600 leading-relaxed">Establishment of SB Trading Limited in Kano, evolving from general merchandise to supplying electrical equipment for government infrastructure projects.</p>
                </div>

                {/* Timeline Item */}
                <div className="group relative border-l border-slate-200 pl-8 pb-4 transition-colors hover:border-slate-900">
                  <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-slate-200 group-hover:bg-slate-900 transition-colors"></div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-2">1988 – 2002</div>
                  <h3 className="text-2xl font-serif text-slate-900 mb-4">The Industrial Pivot</h3>
                  <p className="text-base text-slate-600 leading-relaxed">Expanded into engineering and construction, establishing a strong presence in the Nigerian infrastructure market. </p>
                </div>

                {/* Timeline Item */}
                <div className="group relative border-l border-slate-200 pl-8 pb-4 transition-colors hover:border-slate-900">
                  <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-slate-200 group-hover:bg-slate-900 transition-colors"></div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-2">2003 – 2010</div>
                  <h3 className="text-2xl font-serif text-slate-900 mb-4">Corporate Restructuring</h3>
                  <p className="text-base text-slate-600 leading-relaxed">Transformed into a modern, diversified investment holding company with a focus on sustainable growth and value creation.  </p>
                </div>

                {/* Timeline Item */}
                <div className="group relative border-l border-slate-200 pl-8 pb-4 transition-colors hover:border-slate-900">
                  <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-slate-200 group-hover:bg-slate-900 transition-colors"></div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-2">2011 – 2020</div>
                  <h3 className="text-2xl font-serif text-slate-900 mb-4">Strategic Growth</h3>
                  <p className="text-base text-slate-600 leading-relaxed">Established ourselves as a leading player in the Nigerian power sector through strategic investments and project development. </p>
                </div>

                {/* Timeline Item */}
                <div className="group relative border-l border-slate-200 pl-8 pb-4 transition-colors hover:border-slate-900">
                  <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-slate-200 group-hover:bg-slate-900 transition-colors"></div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-2">2021 – 2026</div>
                  <h3 className="text-2xl font-serif text-slate-900 mb-4">Pan-African Expansion</h3>
                  <p className="text-base text-slate-600 leading-relaxed">Extended our operations across Africa, establishing a strong presence in key markets and diversifying our portfolio with strategic investments in renewable energy and infrastructure projects.   </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-slate-900 py-24 sm:py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">See Where the Capital Goes</h2>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto font-light">
            Our portfolio page breaks down every subsidiary — capacity figures, revenue splits, and the operating metrics behind the headlines.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button onClick={() => onNavigate('portfolio')} className="group w-full sm:w-auto px-8 py-4 bg-white text-slate-900 text-xs font-bold uppercase tracking-[0.15em] hover:bg-slate-100 transition-colors rounded-full flex items-center justify-center gap-2">
              Explore the Portfolio <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button className="group w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-700 text-white text-xs font-bold uppercase tracking-[0.15em] hover:bg-slate-800 transition-colors rounded-full flex items-center justify-center gap-2">
              <Download className="h-4 w-4" /> Download PDF Profile
            </button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
