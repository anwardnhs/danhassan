import React, { useState, useEffect, useMemo, useRef } from 'react';
import { ArrowUpRight, ChevronRight, TrendingUp, ShieldCheck, Globe, ExternalLink, Download, BarChart3, Building2, CheckCircle2 } from 'lucide-react';
import Footer from '../components/Footer';
import saepImage from '../images/saep.jpg';
import ironwoodImage from '../images/atlas.jpg';
import harborImage from '../images/harbor.jpg';
import atlas2Image from '../images/atlas2.jpg';
import damImage from '../images/dam.jpg';
import pacificImage from '../images/pacifc.jpg';
import southBlueImage from '../images/south blue.jpg';

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
      description: 'Long-term compounding over short-term exits. Infinite investment horizon.',
      color: 'emerald'
    },
    {
      icon: ShieldCheck,
      title: 'Operational Control',
      description: 'Majority stakes ensure rigorous governance and operational excellence.',
      color: 'slate'
    },
    {
      icon: Globe,
      title: 'Essential Services',
      description: 'Non-cyclical industries providing critical services to African economies.',
      color: 'blue'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans antialiased selection:bg-emerald-100">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* HERO SECTION - Enhanced for clarity */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-28 bg-white border-b border-slate-200">
        <div className={`max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Breadcrumb */}
          <div className="mb-6 sm:mb-8 flex items-center gap-2 text-xs sm:text-sm text-slate-500">
            <button onClick={() => onNavigate('home')} className="hover:text-emerald-700 transition-colors">Home</button>
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-slate-900 font-medium">Portfolio</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Left: Content */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-slate-900 leading-[1.05] mb-6 sm:mb-8">
                Portfolio Overview
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-8 sm:mb-12">
                A concentrated portfolio of cash-generative assets across three essential infrastructure verticals: Power, Engineering, and Real Estate.
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-slate-50 border-2 border-slate-200 p-4 sm:p-6 rounded-lg">
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-slate-700 font-bold mb-2">Total Assets</div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                    <CountUpText end={24.5} prefix="$" suffix="B" decimals={1} />
                  </div>
                </div>
                <div className="bg-slate-50 border-2 border-slate-200 p-4 sm:p-6 rounded-lg">
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-slate-700 font-bold mb-2">Return on Equity</div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                    <CountUpText end={12.0} suffix="%" decimals={1} />
                  </div>
                </div>
                <div className="bg-slate-50 border-2 border-slate-200 p-4 sm:p-6 rounded-lg">
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-slate-700 font-bold mb-2">Core Sectors</div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                    <CountUpText end={3} />
                  </div>
                </div>
                <div className="bg-slate-50 border-2 border-slate-200 p-4 sm:p-6 rounded-lg">
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-slate-700 font-bold mb-2">Free Float</div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                    <CountUpText end={63.6} suffix="%" decimals={1} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="h-[350px] sm:h-[450px] lg:h-[600px] w-full rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={atlas2Image} 
                alt="Portfolio infrastructure" 
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-1000" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* INVESTMENT PHILOSOPHY - Simplified */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 mb-4 sm:mb-6">Investment Philosophy</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">Three core principles guide every investment decision</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {philosophies.map((item, idx) => {
              const Icon = item.icon;
              const colors = {
                emerald: 'bg-emerald-700 border-emerald-700',
                slate: 'bg-slate-700 border-slate-700',
                blue: 'bg-blue-700 border-blue-700'
              };

              return (
                <div 
                  key={idx}
                  className="bg-white border-2 border-slate-200 p-6 sm:p-8 rounded-lg hover:border-slate-400 hover:shadow-xl transition-all"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 ${colors[item.color as keyof typeof colors]} rounded-lg flex items-center justify-center mb-6`}>
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
  {/* Background decoration for a premium feel, inspired by modern minimal design */}
  <div className="absolute inset-0 z-0 opacity-40">
    <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-emerald-100 blur-3xl" />
    <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-100 blur-3xl" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
    {/* Section Header with improved hierarchy and clearer copy */}
    <div className="max-w-3xl mb-16 md:mb-20">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px w-8 bg-emerald-600" />
        <span className="text-sm font-semibold uppercase tracking-widest text-emerald-700">What We Do</span>
      </div>
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-950 mb-6 leading-tight">
        Core Operations Powering <span className="text-slate-500">Regional Growth</span>
      </h2>
      <p className="text-xl text-slate-700 leading-relaxed">
        Detailed operating profiles for each subsidiary — including installed capacity, revenue contribution, and project scope across our three core verticals.
      </p>
    </div>

    {/* Tab Navigation - Redesigned for a sleeker, more professional look */}
    <div className="mb-12 border-b border-slate-200">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 -mb-px" role="tablist">
        {[
          { id: 'power', label: 'Power & Energy', color: 'emerald' },
          { id: 'infra', label: 'Infrastructure', color: 'slate' },
          { id: 'realestate', label: 'Real Estate', color: 'blue' }
        ].map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeSegment === tab.id}
            onClick={() => setActiveSegment(tab.id)}
            className={`flex items-center justify-center gap-3 px-6 py-4 border-b-2 text-base font-semibold transition-all duration-300 whitespace-nowrap grow sm:grow-0 sm:pr-12 
              ${activeSegment === tab.id
                ? `border-${tab.color}-600 text-${tab.color}-700 bg-white sm:bg-transparent rounded-t-lg sm:rounded-none`
                : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
              }`}
          >
            {/* Visual indicator dot */}
            <span className={`h-2.5 w-2.5 rounded-full ${activeSegment === tab.id ? `bg-${tab.color}-600` : 'bg-slate-300'}`} />
            {tab.label}
          </button>
        ))}
      </div>
    </div>

    {/* Tab Content Display - Cleaned up layouts and positioning */}
    <div className="min-h-[450px]">
      
      {/* POWER CONTENT - Jargon reduced: "Vertically-integrated power sector platform" -> clear description */}
      {activeSegment === 'power' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center animate-in fade-in slide-in-from-right-8 duration-700">
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-950 mb-3">Reliable Energy Generation & Supply</h3>
              <h4 className="text-xl font-medium text-emerald-700 mb-5">South Atlantic Energy Plc</h4>
              <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
                We own and manage the complete energy lifecycle, from producing power using sun, water, and traditional fuels, to delivering it directly to homes and businesses across Nigeria, Ghana, and Kenya.
              </p>
            </div>
            
            {/* Simplified Key Financials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5">
                <TrendingUp className="w-10 h-10 text-emerald-600 shrink-0" />
                <div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Annual Revenue</div>
                  <div className="text-3xl font-bold text-slate-950">$6.30<span className="text-2xl font-medium text-slate-500">B</span></div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5">
                <BarChart3 className="w-10 h-10 text-emerald-600 shrink-0" />
                <div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Operating Profit</div>
                  <div className="text-3xl font-bold text-slate-950">$1.70<span className="text-2xl font-medium text-slate-500">B</span></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Highlight Card */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative bg-emerald-950 text-white rounded-3xl overflow-hidden p-8 lg:p-10 shadow-2xl aspect-[4/3] lg:aspect-auto min-h-[350px] flex flex-col">
            <div className="absolute inset-0 z-0">
              <img src={damImage} alt="Hydroelectric Dam" className="w-full h-full object-cover transition-transform duration-10000 hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/80 to-transparent"></div>
            </div>
            
            <div className="relative z-10 mt-auto space-y-6">
              <div className="h-px w-16 bg-emerald-400" />
              <h4 className="text-base font-semibold uppercase tracking-widest text-emerald-200">Scale of Operations</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-4xl font-extrabold">4,850</div>
                  <div className="text-xs font-medium uppercase tracking-wide text-emerald-200 mt-1">MW Capacity</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold">4.4<span className="text-3xl">M</span></div>
                  <div className="text-xs font-medium uppercase tracking-wide text-emerald-200 mt-1">Customers</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold">3</div>
                  <div className="text-xs font-medium uppercase tracking-wide text-emerald-200 mt-1">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* INFRA CONTENT - Jargon reduced: "Turnkey construction" -> clear description */}
      {activeSegment === 'infra' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center animate-in fade-in slide-in-from-right-8 duration-700">
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-950 mb-3">Major Infrastructure Development</h3>
              <h4 className="text-xl font-medium text-slate-700 mb-5">Ironwood Engineering Limited</h4>
              <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
                We handle the complete design, building, and fixing of large-scale projects, focusing on high-voltage power lines and essential concrete work needed for industrial growth.
              </p>
            </div>
            
            {/* Key Fact */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm inline-flex gap-5 items-center">
                <Building2 className="w-12 h-12 text-slate-600 shrink-0" />
                <div>
                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Annual Revenue</div>
                    <div className="text-4xl font-bold text-slate-950">$1.43<span className="text-3xl font-medium text-slate-500">B</span></div>
                </div>
            </div>
          </div>

          {/* List Style Highlight Card */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative bg-slate-950 text-white rounded-3xl overflow-hidden p-8 lg:p-10 shadow-2xl aspect-[4/3] lg:aspect-auto min-h-[350px]">
            <div className="absolute inset-0 z-0">
              <img src={pacificImage} alt="Infrastructure Project" className="w-full h-full object-cover transition-transform duration-10000 hover:scale-110" />
              <div className="absolute inset-0 bg-slate-950/90 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 flex flex-col h-full space-y-6">
              <h4 className="text-base font-semibold uppercase tracking-widest text-slate-300 pb-3 border-b border-slate-700">Core Capabilities</h4>
              <ul className="space-y-5 flex-grow justify-center flex flex-col">
                {[
                    { title: "High-Voltage Transmission", desc: "Building the main power grid (132kV - 330kV)" },
                    { title: "Large Civil Works", desc: "Roads, bridges, and industrial developments" },
                    { title: "Power Plant Construction", desc: "Building new and modernizing existing plants" }
                ].map(item => (
                  <li key={item.title} className="flex gap-4 items-start">
                    <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-lg text-white">{item.title}</span>
                      <span className="text-sm text-slate-300">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* REAL ESTATE CONTENT - Jargon reduced: "supports infrastructure nodes", "EBITDA Margin", "AUM" */}
      {activeSegment === 'realestate' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center animate-in fade-in slide-in-from-right-8 duration-700">
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-950 mb-3">Developing Strategic Property</h3>
              <h4 className="text-xl font-medium text-blue-700 mb-5">Harbor & Hedge Properties</h4>
              <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
                We develop and manage commercial spaces, industrial logistics hubs, and high-end residential areas located near our major infrastructure projects to maximize value and regional utility.
              </p>
            </div>
            
            {/* Simple Metrics Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-white p-6 rounded-2xl border border-blue-50 shadow-sm">
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Segment Revenue</div>
                <div className="text-3xl font-bold text-slate-950">$672<span className="text-2xl font-medium text-slate-500">M</span></div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-blue-50 shadow-sm">
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Operational Profitability</div>
                <div className="text-3xl font-bold text-slate-950">24<span className="text-2xl font-medium text-slate-500">%</span></div>
                <div className="text-xs text-slate-400 mt-1">Cash flow efficiency</div>
              </div>
            </div>
          </div>

          {/* Visual Progress Highlight Card */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative bg-blue-950 text-white rounded-3xl overflow-hidden p-8 lg:p-10 shadow-2xl aspect-[4/3] lg:aspect-auto min-h-[350px]">
            <div className="absolute inset-0 z-0">
              <img src={southBlueImage} alt="Real Estate Asset" className="w-full h-full object-cover transition-transform duration-10000 hover:scale-110" />
              <div className="absolute inset-0 bg-blue-950/80 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 flex flex-col h-full space-y-6">
                <div className="flex items-center justify-between gap-4">
                    <h4 className="text-base font-semibold uppercase tracking-widest text-blue-200">Total Portfolio Value</h4>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">Global Value</span>
                </div>
              
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-extrabold">$1.9<span className="text-5xl">B</span></span>
                <span className="text-sm text-blue-200 uppercase tracking-wider">Property Assets Managed</span>
              </div>
              
              <div className="space-y-4 pt-4 border-t border-blue-800 flex-grow justify-center flex flex-col">
                <h5 className="text-sm font-medium text-blue-200">Asset Distribution</h5>
                {[
                    { label: "Commercial & Office", value: 52, color: "bg-white" },
                    { label: "Industrial & Logistics", value: 31, color: "bg-blue-300" },
                    { label: "Residential Estates", value: 17, color: "bg-blue-500" }
                ].map(item => (
                  <div key={item.label} className="space-y-1.5">
                    <div className="flex justify-between text-sm font-medium">
                        <span className="text-white">{item.label}</span>
                        <span className="text-blue-200">{item.value}%</span>
                    </div>
                    <div className="h-2 w-full bg-blue-900 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.value}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  </div>
</section>

      {/* INVESTOR CTA */}
      <section className="py-16 sm:py-20 md:py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6">Portfolio Financial Data</h2>
          <p className="text-base sm:text-lg text-slate-100 mb-8 sm:mb-10 max-w-2xl mx-auto">
            For audited financials, credit ratings, stock data, and governance documents, visit our dedicated Investor Relations portal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => onNavigate('investors')}
              className="w-full sm:w-auto group px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-emerald-900 font-bold uppercase tracking-wider hover:bg-slate-100 transition-all rounded-lg shadow-xl flex items-center justify-center gap-3 touch-manipulation"
            >
              Investor Relations
              <ArrowUpRight className="h-5 w-5" />
            </button>
            <button className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-emerald-900 transition-all rounded-lg flex items-center justify-center gap-3 touch-manipulation">
              <Download className="h-5 w-5" />
              Portfolio PDF
            </button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
