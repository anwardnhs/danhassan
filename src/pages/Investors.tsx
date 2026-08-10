import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Download, FileText, TrendingUp, BarChart3, ExternalLink, ArrowUpRight, ShieldCheck, Mail, Phone, Calendar, ChevronRight } from 'lucide-react';
import Footer from '../components/Footer';

// --- COUNT UP ANIMATION HOOK & COMPONENT ---

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
      { threshold: 0.3 }
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
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) => {
  const { ref, value } = useCountUp(end);
  const display = useMemo(() => {
    const base = value.toFixed(decimals);
    return `${prefix}${base}${suffix}`;
  }, [value, prefix, suffix, decimals]);

  return <div ref={ref}>{display}</div>;
};

// --- DATA STRUCTURES ---

const keyMetrics = [
  { label: 'Market Cap', num: 27.3, prefix: '₦', suffix: 'T', decimals: 1, sub: 'NGX: DANHASSAN', trend: 'up', icon: TrendingUp },
  { label: 'Revenue (FY25)', num: 11.8, prefix: '₦', suffix: 'T', decimals: 1, sub: 'YoY Growth: +12%', trend: 'up', icon: BarChart3 },
  { label: 'EBITDA', num: 2.9, prefix: '₦', suffix: 'T', decimals: 1, sub: 'Margin: 25%', trend: 'neutral', icon: BarChart3 },
  { label: 'Net Income', num: 1.45, prefix: '₦', suffix: 'T', decimals: 2, sub: 'EPS: ₦170.00', trend: 'up', icon: TrendingUp },
  { label: 'ROE', num: 12.0, prefix: '', suffix: '%', decimals: 1, sub: 'Return on Equity', trend: 'neutral', icon: BarChart3 },
  { label: 'Debt/Equity', num: 0.58, prefix: '', suffix: 'x', decimals: 2, sub: 'Prudent Leverage', trend: 'neutral', icon: ShieldCheck }
];

const latestReports = [
  { 
    title: 'FY 2025 Audited Financial Results', 
    date: 'Jan 24, 2026', 
    type: 'Annual Report',
    size: '4.2 MB',
    priority: 'high'
  },
  { 
    title: 'Q4 2025 Investor Presentation', 
    date: 'Jan 15, 2026', 
    type: 'Presentation',
    size: '2.8 MB',
    priority: 'high'
  },
  { 
    title: '2025 Sustainability & ESG Report', 
    date: 'Dec 10, 2025', 
    type: 'ESG Report',
    size: '6.1 MB',
    priority: 'medium'
  },
  { 
    title: 'Notice of Annual General Meeting', 
    date: 'Nov 05, 2025', 
    type: 'Governance',
    size: '1.2 MB',
    priority: 'medium'
  }
];

const creditRatings = [
  { agency: 'Fitch Ratings', rating: 'BB-', outlook: 'Stable', updated: 'Dec 2025' },
  { agency: "Moody's", rating: 'Ba3', outlook: 'Positive', updated: 'Nov 2025' },
  { agency: "Standard & Poor's", rating: 'BB-', outlook: 'Stable', updated: 'Oct 2025' }
];

const quickLinks = [
  { title: 'AGM Information', description: 'Annual General Meeting details and voting' },
  { title: 'Dividend History', description: 'Historical dividend payments and dates' },
  { title: 'Stock Information', description: 'Real-time stock data and charts' },
  { title: 'Financial Calendar', description: 'Upcoming earnings and events' }
];

interface InvestorsProps {
  onNavigate: (page: string) => void;
}

export default function Investors({ onNavigate }: InvestorsProps) {
  const [emailSubscribe, setEmailSubscribe] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'reports' | 'governance'>('reports');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeStatus('submitting');
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmailSubscribe('');
      setTimeout(() => setSubscribeStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-emerald-100">
      
      {/* TYPOGRAPHY INJECTION */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-white border-b border-slate-200">
        <div className={`max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Breadcrumb */}
          <div className="mb-6 sm:mb-8 flex items-center gap-2 text-xs sm:text-sm text-slate-500">
            <button onClick={() => onNavigate('home')} className="hover:text-emerald-700 transition-colors">Home</button>
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-slate-900 font-medium">Investor Relations</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-start">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 leading-tight mb-4 sm:mb-6">
                Investor Relations
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 font-light max-w-3xl leading-relaxed mb-8">
                Transparent financial reporting and consistent, long-term returns through our diversified infrastructure portfolio.
              </p>
              
              {/* KEY ACTIONS - REFINED BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative w-full sm:w-auto min-w-[220px] px-8 py-4 bg-slate-800 text-white font-bold text-sm tracking-widest uppercase overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  <div className="absolute inset-0 w-0 bg-slate-700 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    <Download className="h-5 w-5" />
                    Latest Annual Report
                  </span>
                </button>
                <button className="group relative w-full sm:w-auto min-w-[220px] px-8 py-4 bg-white border-2 border-slate-900 text-slate-900 font-bold text-sm tracking-widest uppercase overflow-hidden hover:bg-slate-50 transition-all">
                   <span className="relative flex items-center justify-center gap-3">
                    <Calendar className="h-5 w-5" />
                    Financial Calendar
                  </span>
                </button>
              </div>
            </div>

            {/* Last Updated Badge */}
            <div className="bg-slate-50 border-l-4 border-slate-600 p-6 rounded-r-lg shadow-sm">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-800 mb-2">Last Updated</div>
              <div className="text-3xl font-poppins text-slate-900">Jan 24, 2026</div>
              <div className="text-sm font-medium text-slate-600 mt-1">FY 2025 Results Published</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEY METRICS */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8">Financial Highlights</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {keyMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white border border-slate-200 p-6 hover:border-emerald-500 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">{metric.label}</div>
                    <Icon className="h-5 w-5 text-slate-300 group-hover:text-emerald-600 transition-colors" />
                  </div>
                  <div className="text-3xl font-poppins text-slate-900 mb-2">
                    <CountUpText end={metric.num} prefix={metric.prefix} suffix={metric.suffix} decimals={metric.decimals} />
                  </div>
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">{metric.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. STOCK SNAPSHOT */}
      <section className="py-12 sm:py-16 md:py-20 bg-white border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
            
            {/* Stock Price Card */}
            <div className="bg-slate-900 text-white p-8 md:p-12 shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Stock Price</h3>
                  <div className="text-xs text-slate-500">NGX: DANHASSAN</div>
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-bold bg-slate-800 px-4 py-2 rounded-full text-slate-400 border border-slate-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  Delayed 15 min
                </div>
              </div>
              
              <div className="mb-10">
                <div className="flex items-baseline gap-4 mb-2">
                  <div className="text-6xl md:text-7xl font-poppins">₦3,200</div>
                  <div className="text-l font-bold text-emerald-400 flex items-center gap-1 bg-emerald-400/10 px-1 py-1 rounded">
                    <TrendingUp className="h-5 w-5" />
                    +1.2%
                  </div>
                </div>
                <div className="text-sm text-slate-400">As of Jan 24, 2026 16:00 WAT</div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 border-t border-slate-800">
                <div><div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Day Range</div><div className="text-lg font-poppins">₦3,180 - ₦3,245</div></div>
                <div><div className="text-xs text-slate-500 uppercase tracking-wider mb-1">52 Week</div><div className="text-lg font-poppins">₦2,800 - ₦3,400</div></div>
                <div><div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Volume</div><div className="text-lg font-poppins">12.4M</div></div>
                <div><div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Shares Out.</div><div className="text-lg font-poppins">8.52B</div></div>
                <div><div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Free Float</div><div className="text-lg poppins">63.6%</div></div>
                <div><div className="text-xs text-slate-500 uppercase tracking-wider mb-1">P/E Ratio</div><div className="text-lg poppins">18.8x</div></div>
              </div>

              <button className="mt-10 w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold uppercase tracking-widest text-xs hover:bg-emerald-50 transition-colors flex items-center justify-center gap-3">
                <ExternalLink className="h-4 w-4" />
                View Full Stock Data
              </button>
            </div>

            {/* Credit Ratings */}
            <div className="bg-white border border-slate-200 p-8 h-full flex flex-col justify-center">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mb-8 pb-4 border-b border-slate-100">Credit Ratings</h3>
              <div className="space-y-8">
                {creditRatings.map((rating, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-end mb-1">
                      <div className="text-slate-600 font-medium">{rating.agency}</div>
                      <div className="text-3xl font-serif text-slate-900">{rating.rating}</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-400">Updated {rating.updated}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-1 rounded-sm">
                        {rating.outlook}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. QUICK LINKS */}
      <section className="py-16 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <button
                key={index}
                className="group bg-white border border-slate-200 p-6 hover:border-emerald-600 hover:shadow-lg transition-all text-left"
              >
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">{link.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{link.description}</p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 group-hover:gap-3 transition-all">
                  Access <ArrowUpRight className="h-3 w-3" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 5. REPORTS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* Tab Navigation */}
          <div className="flex border-b border-slate-200 mb-10 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setActiveTab('reports')}
              className={`px-8 py-4 font-bold text-sm uppercase tracking-widest transition-all border-b-2 -mb-px whitespace-nowrap ${
                activeTab === 'reports'
                  ? 'border-emerald-800 text-emerald-800'
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              Financial Reports
            </button>
            <button
              onClick={() => setActiveTab('governance')}
              className={`px-8 py-4 font-bold text-sm uppercase tracking-widest transition-all border-b-2 -mb-px whitespace-nowrap ${
                activeTab === 'governance'
                  ? 'border-emerald-800 text-emerald-800'
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              Governance Documents
            </button>
          </div>

          {/* Reports Content */}
          {activeTab === 'reports' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-serif text-slate-900">Latest Filings</h2>
                <button className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 hover:text-emerald-700 hover:border-emerald-700 transition-all">
                  View Archive
                </button>
              </div>

              <div className="space-y-4">
                {latestReports.map((report, index) => (
                  <div 
                    key={index} 
                    className="group bg-white border border-slate-200 p-6 hover:border-emerald-500 transition-all flex flex-col sm:flex-row items-center justify-between gap-6"
                  >
                    <div className="flex items-start gap-4 w-full">
                      <div className="p-4 bg-slate-50 text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border border-slate-200 px-2 py-0.5 rounded">{report.type}</span>
                          {report.priority === 'high' && (
                            <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-emerald-600 px-2 py-0.5 rounded">New</span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors mb-1">
                          {report.title}
                        </h3>
                        <div className="text-sm text-slate-500">
                          {report.date} • {report.size}
                        </div>
                      </div>
                    </div>
                    <button className="w-full sm:w-auto px-6 py-3 border-2 border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-xs hover:border-emerald-600 hover:text-emerald-700 transition-all flex items-center justify-center gap-2 whitespace-nowrap">
                      <Download className="h-4 w-4" /> PDF
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Governance Content */}
          {activeTab === 'governance' && (
            <div>
              <h2 className="text-3xl font-serif text-slate-900 mb-8">Governance Policies & Charters</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['Code of Business Ethics', 'Board Charter', 'Risk Management Framework', 'Whistleblowing Policy', 'Sustainability Policy', 'Audit Committee Charter'].map((policy, i) => (
                  <button
                    key={i}
                    className="group flex justify-between items-center p-6 border border-slate-200 hover:border-emerald-600 hover:shadow-md transition-all text-left bg-white"
                  >
                    <span className="font-serif text-lg text-slate-900 group-hover:text-emerald-800 transition-colors">{policy}</span>
                    <div className="p-2 bg-slate-50 rounded-full group-hover:bg-emerald-50 transition-colors">
                      <Download className="h-5 w-5 text-slate-400 group-hover:text-emerald-700" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Investor Relations Contact */}
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-serif text-slate-900 mb-4">Investor Relations Team</h3>
              <p className="text-slate-600 mb-8">For institutional investors, analysts, and financial queries.</p>
              
              <div className="space-y-4">
                <a href="mailto:ir@danhassan.co" className="flex items-center gap-4 p-4 border border-slate-100 hover:border-emerald-400 hover:bg-emerald-50/30 transition-all group">
                  <div className="p-3 bg-slate-100 text-slate-500 rounded-full group-hover:bg-emerald-100 group-hover:text-emerald-700">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</div>
                    <div className="font-semibold text-slate-900">ir@danhassan.co</div>
                  </div>
                </a>
                <a href="tel:+2349461410" className="flex items-center gap-4 p-4 border border-slate-100 hover:border-emerald-400 hover:bg-emerald-50/30 transition-all group">
                  <div className="p-3 bg-slate-100 text-slate-500 rounded-full group-hover:bg-emerald-100 group-hover:text-emerald-700">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone</div>
                    <div className="font-semibold text-slate-900">+234 9 461 4100</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Registrar Services */}
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-serif text-slate-900 mb-4">Registrar Services</h3>
              <p className="text-slate-600 mb-8">For share certificates, dividend payments, and account updates.</p>
              
              <div className="space-y-4">
                <a href="mailto:registrars@danhassan.co" className="flex items-center gap-4 p-4 border border-slate-100 hover:border-emerald-400 hover:bg-emerald-50/30 transition-all group">
                  <div className="p-3 bg-slate-100 text-slate-500 rounded-full group-hover:bg-emerald-100 group-hover:text-emerald-700">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</div>
                    <div className="font-semibold text-slate-900">registrars@danhassan.co</div>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. EMAIL SUBSCRIPTION */}
      <section className="bg-slate-900 py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">Stay Informed</h2>
          <p className="text-slate-100 text-lg mb-10 max-w-xl mx-auto">
            Stay up to date with regulatory filings, financial results, and corporate announcements through our Newsroom.
          </p>
          
          <button 
            onClick={() => onNavigate('newsroom')}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-slate-800 transition-all"
          >
            Visit the Newsroom
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}