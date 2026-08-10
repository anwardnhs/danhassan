import { ArrowUpRight, ChevronDown, TrendingUp, Users, Globe, Award } from 'lucide-react';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
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
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
            <img 
              src={impactheroImage} 
              alt="Power infrastructure" 
              className="h-[110%] sm:h-[120%] w-full object-cover opacity-80" 
            />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        </div>

        {/* Content Container - Simplified for clarity */}
        <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
         

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.1] drop-shadow-2xl mb-6 sm:mb-8 px-4">
           Pioneering Sustainable Growth Across Africa
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 font-bold max-w-4xl mx-auto drop-shadow-lg leading-relaxed px-4 mb-8 sm:mb-12">
            From power stations lighting West Africa to logistics hubs reshaping continental trade — we build the infrastructure that economies are built on.
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

      

      {/* TRUST INDICATORS - Enhanced with icons and better mobile layout */}
      <section className="py-16 sm:py-20 md:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-slate-900 mb-4">Company Highlights</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">Key information for investors and stakeholders</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {/* Card 1 */}
            <div className="bg-white border-2 border-slate-200 p-6 sm:p-8 rounded-lg hover:border-emerald-500 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-emerald-700" />
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3">Ownership</div>
              <div className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Institutional Base</div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Strategic shareholders with strong institutional governance and broad public float on the Nigerian Exchange.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-2 border-slate-200 p-6 sm:p-8 rounded-lg hover:border-emerald-500 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-emerald-700" />
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3">Credit Ratings</div>
              <div className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">BB- / Ba3 / BB-</div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Fitch and S&P stable outlook, Moody's positive outlook as of January 2026.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border-2 border-slate-200 p-6 sm:p-8 rounded-lg hover:border-emerald-500 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-emerald-700" />
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3">Headquarters</div>
              <div className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Abuja, Nigeria</div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Regional offices in Lagos, Port Harcourt, Kano, Accra, Nairobi, and Johannesburg.</p>
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
        Three verticals, one mandate: building the critical systems that Africa's growing economies depend on.
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
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            Behind the grid that lights millions of homes across Nigeria, Ghana, and Kenya sits a fleet of thermal and renewable assets — quietly generating the baseload power that keeps industries running and cities growing.
          </p>
          
          <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-8 mt-4">
            <div>
              <div className="text-xs text-slate-500 mb-2 uppercase tracking-[0.15em] font-semibold">
                Thermal
              </div>
              <div className="text-4xl font-light text-slate-900">
                3,420 <span className="text-lg font-medium text-slate-400">MW</span>
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500 mb-2 uppercase tracking-[0.15em] font-semibold">
                Solar
              </div>
              <div className="text-4xl font-light text-slate-900">
                680 <span className="text-lg font-medium text-slate-400">MW</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 relative group">
          <div className="absolute inset-0 bg-slate-200 translate-x-4 translate-y-4 rounded-xl transition-transform duration-500 ease-out group-hover:translate-x-6 group-hover:translate-y-6"></div>
          <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 z-10 border border-black/5">
            <img
              src="https://plus.unsplash.com/premium_vector-1697729519978-e21fa714742f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvd2VyJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D"
              alt="Thermal and Solar Power Plant Operations"
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Segment 2 - Infrastructure */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-6 relative group">
          <div className="absolute inset-0 bg-slate-200 -translate-x-4 translate-y-4 rounded-xl transition-transform duration-500 ease-out group-hover:-translate-x-6 group-hover:translate-y-6"></div>
          <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 z-10 border border-black/5">
            <img
              src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVuZ2luZWVyfGVufDB8fDB8fHww"
              alt="Infrastructure and Engineering EPC Services"
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8 relative">
          <span className="text-[140px] leading-none font-bold text-slate-100 absolute -top-12 -left-6 -z-10 select-none">
            02
          </span>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Infrastructure & Engineering
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Every megawatt we generate needs a way to reach the people who use it. Our engineering arm designs and builds the high-voltage transmission lines, substations, and civil works that connect power generation to the communities and industries it serves.
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
            Where we build power plants, communities follow. Our property division develops the commercial offices, logistics hubs, and residential estates that turn infrastructure corridors into thriving economic zones across West Africa's fastest-growing cities.
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 relative group">
          <div className="absolute inset-0 bg-slate-200 translate-x-4 translate-y-4 rounded-xl transition-transform duration-500 ease-out group-hover:translate-x-6 group-hover:translate-y-6"></div>
          <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 z-10 border border-black/5">
            <img
              src="https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnNpb258ZW58MHx8MHx8fDA%3D"
              alt="Real Estate and Property Development"
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
          </div>
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
          Steered by leaders who have spent careers building Africa's energy and industrial landscape — from landmark privatisation deals to billion-dollar capital raises on international markets.
        </p>
        
        {/* Leadership Profile Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {/* Card 1 */}
          <div className="group relative bg-white p-6 rounded-xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-slate-900 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-[0.15em] mb-3">
              Group CEO
            </div>
            <div className="text-xl font-bold text-slate-900 mb-1">
              Anwar Alhassan
            </div>
            <div className="text-sm font-medium text-slate-500">
              Since 2007
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="group relative bg-white p-6 rounded-xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-slate-900 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-[0.15em] mb-3">
              Chairman
            </div>
            <div className="text-xl font-bold text-slate-900 mb-1">
              Abdullahi Alhassan
            </div>
            <div className="text-sm font-medium text-slate-500">
             Former GMD/CEO
            </div>
          </div>
        </div>

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
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Strategic investments across Ghana and Kenya strengthen grid reliability.</p>
              </div>
            </article>
            
            {/* Card 2 */}
            <article className="group bg-white border-2 border-slate-200 rounded-lg overflow-hidden hover:border-emerald-500 hover:shadow-2xl transition-all cursor-pointer">
              <div className="h-48 sm:h-56 overflow-hidden">
                <img src={lombardcapitalImage} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Financial results" />
              </div>
              <div className="p-5 sm:p-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Investor Update</div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors leading-snug">FY2025 performance highlights</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Revenue of $8.4B driven by South Atlantic Energy and Ironwood Engineering.</p>
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
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Annual budget $22M focused on education, healthcare, and environment.</p>
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
            Our latest annual report is now available. Explore the full financial picture — from segment performance and capital allocation to our long-term strategic priorities.
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
