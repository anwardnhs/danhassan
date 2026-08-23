import { ArrowUpRight, ChevronDown, TrendingUp, Users, Globe, Award, Building2 } from 'lucide-react';
import { useEffect, useState, useMemo, useRef } from 'react';
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
import heroImage from '../images/heroimg.jpg';
import saepImage from '../images/saep.jpg';
import ironwoodImage from '../images/ironwood2.jpg';
import harborImage from '../images/harbor.jpg';
import signingImage from '../images/signing.jpg';
import windmillImage from '../images/windmill.jpg';
import boarddanImage from '../images/infographics/boarddan.jpg';
import lombardcapitalImage from '../images/stock.jpg';
import impactheroImage from '../images/infographics/impacthero.jpg';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const PowerImageTransition = () => {
  const images = [
    {
      src: "https://media.istockphoto.com/id/1314056830/photo/aerial-view-of-coal-fired-power-plant-on-the-ohio-river.jpg?s=612x612&w=0&k=20&c=u460MmpBBt8mM9u1PWfj3MrlVkSkLd0V5UrPVLNmqlE=",
      alt: "Thermal Power Generation Plant"
    },
    {
      src: "https://media.istockphoto.com/id/1870890449/photo/electric-photovoltaic-solar-panels-installed-on-shopping-mall-building-rooftop-for-production.jpg?s=612x612&w=0&k=20&c=jgauKDM08guh8P4SGxXxC_9C9kya4sCG7LOb3MBGm3g=",
      alt: "Solar Photovoltaic Generation Installation"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-[380px] sm:h-[480px] md:h-[520px] w-full overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/80 shadow-xl">
      {images.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
        />
      ))}
    </div>
  );
};

const InfraImageTransition = () => {
  const images = [
    {
      src: "https://media.istockphoto.com/id/1420678520/photo/building-site-at-sunset.jpg?s=612x612&w=0&k=20&c=HoDUK1RxsH78Fj9D34nao_MUTbf-vR3G97zUWMtES4k=",
      alt: "Building Construction Site at Sunset"
    },
    {
      src: "https://media.istockphoto.com/id/2162566864/photo/aerial-view-of-busy-american-highway-road-under-construction-development-of-roundabout.jpg?s=612x612&w=0&k=20&c=EwrUjhrr02BB_9uJx25VL-dNZYzQ5K4WkcnOtGmJ538=",
      alt: "Highway and Transport Infrastructure Construction"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-[380px] sm:h-[480px] md:h-[520px] w-full overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/80 shadow-xl">
      {images.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
        />
      ))}
    </div>
  );
};

const RealEstateImageTransition = () => {
  const images = [
    {
      src: "https://media.istockphoto.com/id/2204417262/photo/modern-housing-dwelling-architectural-facade-design-real-estate-background.jpg?s=612x612&w=0&k=20&c=bhf-t9_5DtejliBEgkzjdJr9jWxfZTSnKamIBeBhlrk=",
      alt: "Modern Housing Dwelling Architectural Facade"
    },
    {
      src: "https://media.istockphoto.com/id/1644622448/photo/new-houses-construction-residential-house-development.jpg?s=612x612&w=0&k=20&c=toO5Hy1DE-VZcZfJsgVPEmoWVB7VcxBf99WbB_SP49Y=",
      alt: "Residential House Development Construction"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-[380px] sm:h-[480px] md:h-[520px] w-full overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/80 shadow-xl">
      {images.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
        />
      ))}
    </div>
  );
};

export default function Home({ onNavigate }: HomeProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    const offset = 100;
    window.scrollTo({ top: window.innerHeight - offset, behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-slate-900 font-sans antialiased">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* HERO SECTION - Enhanced with better mobile responsiveness */}
      <section className="relative h-screen min-h-[600px] sm:min-h-[700px] flex items-center justify-center overflow-hidden">
        
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute -top-[15%] inset-x-0 h-[135%] z-0 pointer-events-none will-change-transform"
          style={{ transform: `translate3d(0, ${scrollY * 0.35}px, 0)` }}
        >
          <img 
            src={impactheroImage} 
            alt="Power infrastructure" 
            className="h-full w-full object-cover opacity-80" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60" />
        </div>

        {/* Content Container - Smooth Text Parallax & Fade */}
        <div 
          className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ 
            transform: `translate3d(0, ${scrollY * 0.15}px, 0)`,
            opacity: Math.max(0, 1 - scrollY / 600)
          }}
        >
          
         

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.1] drop-shadow-2xl mb-6 sm:mb-8 px-4">
           Pioneering Sustainable Growth Across Africa
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 font-bold max-w-4xl mx-auto drop-shadow-lg leading-relaxed px-4 mb-8 sm:mb-12">
            Building the critical systems that power Africa's economies from energy and infrastructure to real estate and community development.  
          </p>
          
          {/* Simplified CTAs - Hick's Law: 2 clear choices */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <button 
              onClick={() => onNavigate('about')} 
              className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-white px-8 sm:px-10 py-3.5 sm:py-4 text-sm font-bold uppercase tracking-wider text-slate-900 transition-all hover:bg-slate-100 hover:scale-105 shadow-2xl touch-manipulation"
            >
              Corporate Profile 
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button 
              onClick={() => onNavigate('investors')} 
              className="group inline-flex items-center justify-center gap-2.5 rounded-lg border-2 border-white/90 bg-white/10 backdrop-blur-md px-8 sm:px-10 py-3.5 sm:py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-slate-900 hover:scale-105 shadow-2xl touch-manipulation"
            >
              Investor Relations
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToContent}
          className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 text-white/80 hover:text-white transition-all animate-bounce cursor-pointer p-2 touch-manipulation"
          aria-label="Scroll to content"
        >
          <ChevronDown className="h-7 w-7 sm:h-8 sm:w-8" />
        </button>
      </section>

      

      {/* GROUP AT A GLANCE - Minimalist animated metrics strip */}
      <section className="relative py-16 sm:py-24 border-b border-slate-200/80 overflow-hidden">
        {/* Background Image with elegant overlay for high contrast and readability */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdoaXRlJTIwdGV4dHVyZXxlbnwwfHwwfHx8MA%3D%3D')",
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-50/90 via-white/80 to-slate-50/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 block mb-2">
              Group at a Glance
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-slate-900 font-bold tracking-tight">
              Scale & Impact Across West Africa
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Metric 1 */}
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200/80 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-emerald-600" />
                Market Cap
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mb-2 font-sans tracking-tight">
                <CountUpText end={27.3} prefix="₦" suffix="T" decimals={1} />
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">Nigerian Exchange (NGX)</p>
            </div>

            {/* Metric 2 */}
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200/80 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-3 flex items-center gap-2">
                <Award className="h-4 w-4 text-emerald-600" />
                Annual Revenue
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mb-2 font-sans tracking-tight">
                <CountUpText end={11.8} prefix="₦" suffix="T" decimals={1} />
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">FY2025 Audited</p>
            </div>

            {/* Metric 3 */}
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200/80 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-3 flex items-center gap-2">
                <Users className="h-4 w-4 text-emerald-600" />
                Workforce
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mb-2 font-sans tracking-tight">
                <CountUpText end={25200} formatter={(v) => Math.round(v).toLocaleString()} suffix="+" />
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">Across West Africa</p>
            </div>

            {/* Metric 4 */}
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200/80 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-3 flex items-center gap-2">
                <Building2 className="h-4 w-4 text-emerald-600" />
                Operating History
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mb-2 font-sans tracking-tight">
                <CountUpText end={60} suffix="+" />
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">Years of Operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS SEGMENTS - Enhanced clarity with revenue percentages */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-white">
  {/* Background Image with carefully balanced overlay for text contrast */}
  <div
    className="absolute inset-0 z-0 bg-cover bg-center opacity-50"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFic3RyYWN0JTIwd2hpdGV8ZW58MHx8MHx8fDA%3D')",
    }}
  />
  <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/95 via-white/80 to-white/95" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="max-w-3xl mb-24 md:mb-32">
      <div className="flex items-center gap-4 mb-6">
        <span className="w-12 h-[2px] bg-slate-900"></span>
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
          Business Segments
        </span>
      </div>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-slate-900 mb-8 leading-tight">
        Three Core <br className="hidden sm:block" />
        <span className="font-bold">Business Lines</span>
      </h2>
      <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
        Three essential pillars powering growth and urban development in West Africa.
      </p>
    </div>

    <div className="space-y-32 md:space-y-40">
      {/* Segment 1 - Power & Energy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1 relative">
          <span className="text-[140px] leading-none font-bold text-slate-100 absolute -top-12 -left-6 -z-10 select-none">
            01
          </span>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Power & Energy
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            We generate electricity from a mix of thermal and solar sources, powering homes, businesses, and industries across West Africa. Our energy segment is the backbone of our operations, ensuring reliable and sustainable power supply to meet the region's growing demand. 
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
          <PowerImageTransition />
        </div>
      </div>

      {/* Segment 2 - Infrastructure */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-6">
          <InfraImageTransition />
        </div>

        <div className="lg:col-span-5 lg:col-start-8 relative">
          <span className="text-[140px] leading-none font-bold text-slate-100 absolute -top-12 -left-6 -z-10 select-none">
            02
          </span>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Infrastructure & Engineering
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
           We deliver end-to-end engineering, procurement, and construction (EPC) services for critical infrastructure projects. From roads and bridges to industrial facilities, our expertise ensures that West Africa's infrastructure is built to last, supporting economic growth and regional connectivity. 
          </p>
        </div>
      </div>

      {/* Segment 3 - Real Estate */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1 relative">
          <span className="text-[140px] leading-none font-bold text-slate-100 absolute -top-12 -left-6 -z-10 select-none">
            03
          </span>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Real Estate & Property
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Providing sustainable residential, commercial, and mixed-use developments that enhance urban living. Our real estate projects are designed with a focus on community impact, environmental responsibility, and long-term value creation for investors and residents alike.  
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
          <RealEstateImageTransition />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* GOVERNANCE - Streamlined */}
      <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
      
      {/* Text Content */}
      <div className="lg:col-span-5 order-2 lg:order-1">
        <div className="flex items-center gap-4 mb-6">
          <span className="w-12 h-[2px] bg-slate-900"></span>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
            Governance
          </span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-slate-900 mb-6 leading-tight">
          Experienced <br className="hidden sm:block" />
          <span className="font-bold">Leadership</span>
        </h2>
        
        <p className="text-lg text-slate-600 leading-relaxed mb-10">
          Guided by veteran leadership with decades of experience in African energy, infrastructure, and capital markets.
        </p>
        

        {/* Action Button */}
        <button 
          onClick={() => onNavigate('leadership')}
          className="group inline-flex items-center gap-4 px-8 py-4 bg-slate-900 text-white text-sm font-medium uppercase tracking-wider rounded-full hover:bg-slate-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span>View Full Team</span>
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </button>
      </div>
      
      {/* Image Content */}
      <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 relative group mt-8 lg:mt-0">
        {/* Decorative Offset Backdrop */}
        <div className="absolute inset-0 bg-slate-200 translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 rounded-2xl transition-transform duration-500 ease-out group-hover:translate-x-8 group-hover:translate-y-8 hidden sm:block"></div>
        
        {/* Main Image Wrapper */}
        <div className="relative aspect-[4/5] sm:aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 z-10 border border-black/5 shadow-xl">
          <img 
            src={boarddanImage} 
            alt="Board of Directors" 
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
          />
          {/* Subtle inner shadow for depth */}
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none"></div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* LATEST NEWS - Simplified grid */}
      <section className="py-16 sm:py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 sm:mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900">Latest News</h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">Updates and announcements</p>
            </div>
            <button 
              onClick={() => onNavigate('newsroom')}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-800 flex items-center gap-2 touch-manipulation"
            >
              View All News
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <article className="group bg-white border-2 border-slate-200 rounded-lg overflow-hidden hover:border-emerald-500 hover:shadow-2xl transition-all cursor-pointer">
              <div className="h-48 sm:h-56 overflow-hidden">
                <img src={signingImage} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="News" />
              </div>
              <div className="p-5 sm:p-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Press Release</div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors leading-snug">Danhassan & Co expands power capacity in West Africa</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">We are pleased to announce the expansion of our power generation capacity in key markets across West Africa. </p>
              </div>
            </article>
            
            {/* Card 2 */}
            <article className="group bg-white border-2 border-slate-200 rounded-lg overflow-hidden hover:border-emerald-500 hover:shadow-2xl transition-all cursor-pointer">
              <div className="h-48 sm:h-56 overflow-hidden">
                <img src="https://media.istockphoto.com/id/1484126874/photo/five-cowrie-creek.jpg?s=612x612&w=0&k=20&c=hzTp7Q2MmTHMrHwc9eDGKqyG03Nx6HIlafoJvpJZtQ0=" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="FY2025 performance highlights - Five Cowrie Creek" />
              </div>
              <div className="p-5 sm:p-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Investor Update</div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors leading-snug">FY2025 performance highlights</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Our financial performance reflects strong execution across all segments, with particular strength in Power & Energy and Infrastructure & Engineering.</p>
              </div>
            </article>

            {/* Card 3 */}
            <article className="group bg-white border-2 border-slate-200 rounded-lg overflow-hidden hover:border-emerald-500 hover:shadow-2xl transition-all cursor-pointer">
              <div className="h-48 sm:h-56 overflow-hidden">
                <img src={impactheroImage} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Community impact" />
              </div>
              <div className="p-5 sm:p-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Sustainability</div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors leading-snug">Danhassan Foundation impact report</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Explore the positive change we're creating in communities across West Africa through our sustainability initiatives.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* INVESTOR CTA - Prominent, clear action */}
      <section className="py-16 sm:py-20 md:py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6">The Numbers Behind the Mission</h2>
          <p className="text-base sm:text-lg text-slate-100 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Explore our annual report and investor relations materials to understand how we are driving sustainable growth and delivering value to our stakeholders across West Africa. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('investors')}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-900 font-bold uppercase tracking-wide rounded-lg hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl touch-manipulation"
            >
              Read the Annual Report
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wide rounded-lg hover:bg-white hover:text-emerald-900 transition-all shadow-xl touch-manipulation"
            >
              Investor Relations
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
