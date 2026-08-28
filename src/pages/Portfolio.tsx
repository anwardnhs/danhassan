import React, { useState, useEffect, useMemo, useRef } from 'react';
import { ArrowUpRight, ChevronRight, TrendingUp, ShieldCheck, Globe, ExternalLink, Download } from 'lucide-react';
import Footer from '../components/Footer';
import atlas2Image from '../images/atlas2.jpg';
import damImage from '../images/dam.jpg';
const pacificImage = 'https://media.istockphoto.com/id/1340900748/photo/high-angle-shot-of-cars-travelling-on-a-freeway.jpg?s=612x612&w=0&k=20&c=WRdV9Aen2sD_9fodRWgS-_iNxZ68M1cErYcXiyfcyYI=';
const southBlueImage = 'https://media.istockphoto.com/id/2209675907/photo/modern-apartment-houses.jpg?s=612x612&w=0&k=20&c=E3_ZHISZ_nT_T4_tyxoDTCM9qKhkJYEYyqZpJJRhZaI=';

interface PortfolioProps {
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

  return <div ref={ref}>{display}</div>;
};

export default function Portfolio({ onNavigate }: PortfolioProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSegment, setActiveSegment] = useState<'power' | 'infra' | 'realestate'>('power');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const philosophies = [
    {
      icon: TrendingUp,
      title: 'Patient Capital',
      description: 'Long-term investments in essential infrastructure with a focus on sustainable growth and value creation.',
      bgImage: 'https://images.unsplash.com/photo-1554755229-ca4470e07232?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRleHR1cmV8ZW58MHx8MHx8fDA%3D'
    },
    {
      icon: ShieldCheck,
      title: 'Operational Control',
      description: 'Hands-on management of assets to ensure operational efficiency, risk mitigation, and consistent performance.',
      bgImage: 'https://images.unsplash.com/photo-1604147706283-d7119b5b822c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGV4dHVyZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      icon: Globe,
      title: 'Essential Services',
      description: 'Investing in sectors that provide critical services to communities, driving economic development and societal benefit.',
      bgImage: 'https://images.unsplash.com/photo-1528459105426-b9548367069b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGV4dHVyZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D'
    }
  ];

  return (
    <div className="bg-[#FAF9F6] text-slate-900 font-sans antialiased selection:bg-emerald-100/50">

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 sm:pb-32 bg-[#FAF9F6] border-b border-slate-200/60 overflow-hidden">
        <div className={`relative max-w-[1200px] mx-auto px-6 lg:px-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <div className="mb-12 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
            <button onClick={() => onNavigate('home')} className="hover:text-slate-900 transition-colors">Home</button>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900">Portfolio</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start mb-24">
            
            <div className="lg:col-span-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-serif text-slate-900 leading-[1.05] tracking-tight mb-8">
                Portfolio<br />Overview
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 font-light leading-relaxed max-w-xl mb-16">
                A concentrated portfolio of cash-generative assets across three essential infrastructure verticals: Power, Engineering, and Real Estate.
              </p>
              
              <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">Total Assets</div>
                  <div className="text-4xl sm:text-5xl font-light text-slate-900 font-sans tracking-tight">
                    <CountUpText end={34.3} prefix="₦" suffix="T" decimals={1} />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">Return on Equity</div>
                  <div className="text-4xl sm:text-5xl font-light text-slate-900 font-sans tracking-tight">
                    <CountUpText end={12.0} suffix="%" decimals={1} />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">Core Sectors</div>
                  <div className="text-4xl sm:text-5xl font-light text-slate-900 font-sans tracking-tight">
                    <CountUpText end={3} />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">Free Float</div>
                  <div className="text-4xl sm:text-5xl font-light text-slate-900 font-sans tracking-tight">
                    <CountUpText end={63.6} suffix="%" decimals={1} />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="w-full aspect-[4/5] sm:h-[700px] rounded-2xl sm:rounded-[32px] overflow-hidden relative group">
                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-1000 z-10"></div>
                <img 
                  src={atlas2Image} 
                  alt="Portfolio infrastructure" 
                  className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-out group-hover:scale-105" 
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* INVESTMENT PHILOSOPHY */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16 md:mb-24">
            <h2 className="text-4xl sm:text-5xl font-serif text-slate-900 mb-6 leading-tight">Investment Philosophy</h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              Three core principles guide every capital allocation decision. We focus on long-term sustainability rather than short-term market fluctuations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {philosophies.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="group relative border border-slate-200/60 p-8 sm:p-12 rounded-[32px] hover:shadow-2xl hover:shadow-slate-900/20 transition-all duration-700 overflow-hidden min-h-[440px] sm:min-h-[500px] flex flex-col justify-end"
                >
                  <img 
                    src={item.bgImage} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-[2000ms] ease-out group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/60 to-slate-900/95 transition-opacity duration-700 group-hover:opacity-90"></div>
                  
                  <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-500 pointer-events-none">
                    <Icon className="w-32 h-32 text-white transform translate-x-4 -translate-y-4" />
                  </div>

                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center mb-auto relative z-10 group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                    <Icon className="h-5 w-5 text-white group-hover:text-slate-900 transition-colors" />
                  </div>
                  
                  <div className="relative z-10 mt-12">
                    <h3 className="text-2xl font-serif text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-base text-slate-200 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE OPERATIONS TABS */}
      <section className="py-24 md:py-32 bg-[#FAF9F6] border-t border-slate-200/60">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl font-serif text-slate-900 mb-6 leading-tight">
              Core Operations
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              Our diversified portfolio spans three essential sectors, each contributing to the economic resilience and development of West Africa. 
            </p>
          </div>

          <div className="mb-12 border-b border-slate-200/60">
            <div className="flex flex-col sm:flex-row gap-6 -mb-px" role="tablist">
              {[
                { id: 'power', label: 'Power & Energy' },
                { id: 'infra', label: 'Infrastructure' },
                { id: 'realestate', label: 'Real Estate' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeSegment === tab.id}
                  onClick={() => setActiveSegment(tab.id as any)}
                  className={`pb-4 text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 whitespace-nowrap border-b-2
                    ${activeSegment === tab.id
                      ? `border-slate-900 text-slate-900`
                      : 'border-transparent text-slate-400 hover:text-slate-700'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-[500px]">
            {/* POWER CONTENT */}
            {activeSegment === 'power' && (
              <div className="animate-in fade-in duration-700">
                <div className="relative rounded-2xl sm:rounded-[32px] overflow-hidden aspect-[21/9] mb-12 group">
                  <img src={damImage} alt="Hydroelectric Dam" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-1000" />
                  <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 flex flex-col items-start gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Subsidiary</span>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mt-2">South Atlantic Energy Plc</h3>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8">
                    <h4 className="text-2xl font-serif text-slate-900 mb-4">Reliable Energy Generation & Supply</h4>
                    <p className="text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
                      We develop and operate power generation facilities, including hydroelectric and renewable energy plants, ensuring a stable and sustainable electricity supply to support regional growth and industrial development.  
                    </p>
                  </div>
                  <div className="lg:col-span-4 lg:justify-self-end">
                    <button className="group px-6 py-3 border border-slate-300 text-slate-900 text-xs font-bold uppercase tracking-[0.15em] hover:bg-slate-900 hover:text-white transition-colors rounded-full flex items-center justify-center gap-2">
                      Visit sae.com <ExternalLink className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* INFRASTRUCTURE CONTENT */}
            {activeSegment === 'infra' && (
              <div className="animate-in fade-in duration-700">
                <div className="relative rounded-2xl sm:rounded-[32px] overflow-hidden aspect-[21/9] mb-12 group">
                  <img src={pacificImage} alt="Infrastructure Project" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-1000" />
                  <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 flex flex-col items-start gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Subsidiary</span>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mt-2">Ironwood Engineering Limited</h3>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8">
                    <h4 className="text-2xl font-serif text-slate-900 mb-4">Major Infrastructure Development</h4>
                    <p className="text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
                      We specialize in the construction and rehabilitation of critical infrastructure, including high-voltage transmission lines, roads, bridges, and power plants, ensuring long-term operational efficiency and regional connectivity.  
                    </p>
                  </div>
                  <div className="lg:col-span-4 lg:justify-self-end">
                    <button className="group px-6 py-3 border border-slate-300 text-slate-900 text-xs font-bold uppercase tracking-[0.15em] hover:bg-slate-900 hover:text-white transition-colors rounded-full flex items-center justify-center gap-2">
                      Visit ironwoodeng.com <ExternalLink className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* REAL ESTATE CONTENT */}
            {activeSegment === 'realestate' && (
              <div className="animate-in fade-in duration-700">
                <div className="relative rounded-2xl sm:rounded-[32px] overflow-hidden aspect-[21/9] mb-12 group">
                  <img src={southBlueImage} alt="Real Estate Development" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-1000" />
                  <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 flex flex-col items-start gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Subsidiary</span>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mt-2">Harbor & Hedge Properties</h3>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8">
                    <h4 className="text-2xl font-serif text-slate-900 mb-4">Developing Strategic Property</h4>
                    <p className="text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
                      We focus on the development and management of commercial, industrial, and residential properties, creating sustainable communities and business hubs that drive economic growth and enhance quality of life.  
                    </p>
                  </div>
                  <div className="lg:col-span-4 lg:justify-self-end">
                    <button className="group px-6 py-3 border border-slate-300 text-slate-900 text-xs font-bold uppercase tracking-[0.15em] hover:bg-slate-900 hover:text-white transition-colors rounded-full flex items-center justify-center gap-2">
                      Visit harborhedge.com <ExternalLink className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* INVESTOR CTA */}
      <section className="bg-slate-900 py-24 sm:py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">Portfolio Financial Data</h2>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto font-light">
            For audited financials, credit ratings, stock data, and governance documents, visit our dedicated Investor Relations portal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button 
              onClick={() => onNavigate('investors')} 
              className="group w-full sm:w-auto px-8 py-4 bg-white text-slate-900 text-xs font-bold uppercase tracking-[0.15em] hover:bg-slate-100 transition-colors rounded-full flex items-center justify-center gap-2"
            >
              Investor Relations <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button className="group w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-700 text-white text-xs font-bold uppercase tracking-[0.15em] hover:bg-slate-800 transition-colors rounded-full flex items-center justify-center gap-2">
              <Download className="h-4 w-4" /> Download PDF
            </button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
