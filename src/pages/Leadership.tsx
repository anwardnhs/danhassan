import React, { useState, useEffect } from 'react';
import { ArrowUpRight, X, User } from 'lucide-react';
import Footer from '../components/Footer';

// --- IMAGE IMPORTS ---
import anwarImage from '../images/anwar.png';
import femiImage from '../images/femi.png';
import kabiruImage from '../images/kabiru.png';
import abdullahiImage from '../images/abdullahi.png';
import arjunImage from '../images/arjun.png';
import ahmedImage from '../images/ahmed.png';
import aminaImage from '../images/amina.png';
import emekaImage from '../images/emeka.png';
import mansurImage from '../images/mansur.png';
import sarahImage from '../images/sarah.png';
import basseyImage from '../images/bassey.png';
import adamuImage from '../images/adamu.png';
import blessingImage from '../images/blessing.png';
import chinweImage from '../images/chinwe.png';
import rajeshImage from '../images/rajesh.png';
import bayoImage from '../images/bayo.png';
import folakeImage from '../images/folake.png';
import obiImage from '../images/obi.png';
import peopleImage from '../images/people.jpg';

// --- DATA STRUCTURES ---

const executiveManagement = [
  {
    name: 'Anwar Alhassan',
    role: 'Group Chief Executive Officer',
    bio: 'As Group CEO, he leads corporate strategy, capital allocation, and overall performance of the Group and its operating companies. He has over 20 years of experience in infrastructure investment, project development, and operational management across Africa.  ',
    category: 'GCEO',
    image: anwarImage
  },
  {
    name: 'Femi Ayodeji',
    role: 'Group Chief Financial Officer',
    bio: 'As Group CFO, he oversees financial reporting, treasury, capital markets activity, and balance sheet discipline. He has over 15 years of experience in financial management and investor relations.',
    category: 'Executive',
    image: femiImage
  },
  {
    name: 'Kabiru Mohammed',
    role: 'Group Chief Investment Officer',
    bio: 'As Group CIO, he directs investment strategy, portfolio construction, and evaluation of new infrastructure opportunities across core sectors. He has over 10 years of experience in infrastructure investment and project finance.',
    category: 'Executive',
    image: kabiruImage
  },
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Group Chief Operating Officer',
    bio: 'As Group COO, he oversees operational excellence, project execution, and performance management across the Group’s infrastructure assets. He has over 15 years of experience in engineering, operations, and project management.  ',
    category: 'Executive',
    image: rajeshImage
  },
  {
    name: 'Mrs. Blessing Adeyemi',
    role: 'Chief Strategy Officer',
    bio: 'Leads corporate strategy, business development, and market intelligence to drive growth and innovation across the Group’s portfolio. She has over 12 years of experience in strategic planning and corporate development. ',
    category: 'Senior',
    image: blessingImage
  },
  {
    name: 'Adamu Galadima',
    role: 'Chief Legal Officer',
    bio: 'Leads legal affairs, corporate governance, and regulatory compliance across the Group’s operations. He has over 15 years of experience in corporate law and infrastructure project advisory.  ',
    category: 'Senior',
    image: adamuImage
  },
  {
    name: 'Chizoma Kalu',
    role: 'Chief Human Resources Officer',
    bio: 'Leads human capital strategy, talent management, and organizational development across the Group. She has over 10 years of experience in HR leadership and workforce planning.',
    category: 'Senior',
    image: chinweImage
  },
  {
    name: 'Engr. Bayo Adetunji',
    role: 'Managing Director/CEO, Ironwood Engineering Limited',
    bio: 'Leads Ironwood’s engineering, procurement, and construction services, ensuring delivery of high-quality infrastructure projects across the Group’s energy and industrial assets.',
    category: 'Segment CEO',
    image: bayoImage
  },
  {
    name: 'Arc. Folake Williams',
    role: 'Managing Director/CEO, Harbor & Hedge Properties Limited',
    bio: 'Leads Harbor & Hedge’s real estate development and property management operations, focusing on sustainable urban development and value creation across the Group’s real estate portfolio.',
    category: 'Segment CEO',
    image: folakeImage
  },
  {
    name: 'Engr. Dr. Obi Maduka',
    role: 'Group Managing Director/CEO, South Atlantic Energy Plc',
    bio: 'Leads South Atlantic Energy’s power generation and energy infrastructure operations, driving innovation and operational excellence across the Group’s energy assets.',
    category: 'Segment CEO',
    image: obiImage
  }
];

const boardOfDirectors = [
  {
    group: 'Executive Directors',
      members: [
        { 
          name: 'Anwar Alhassan', 
          role: 'Group CEO', 
          category: 'Executive', 
          image: anwarImage,
          bio: 'Anwar Alhassan is CEO of Danhassan & Co, Plc. He has over 20 years of experience in infrastructure investment, project development, and operational management across Africa. Board Committee: Strategy & Innovation. '
        },
        { 
          name: 'Femi Ayodeji', 
          role: 'Group CFO', 
          category: 'Executive', 
          image: femiImage,
          bio: 'Femi Ayodeji is the Group CFO of Danhassan & Co, Plc. He has over 15 years of experience in financial management and capital markets. Board Committee: Finance & Investment.'
        },
        { 
          name: 'Kabiru Mohammed', 
          role: 'Group CIO', 
          category: 'Executive', 
          image: kabiruImage,
          bio: 'Kabiru Mohammed is the Group CIO of Danhassan & Co, Plc. He has over 10 years of experience in investment strategy and portfolio management. Board Committee: Strategy & Innovation.'
        }
      ]
  },
    {
      group: 'Non-Executive Directors',
      members: [
        { 
          name: 'Alhaji Abdullahi Alhassan, CFR', 
          role: 'Chairman', 
          category: 'Non-Executive', 
          image: abdullahiImage,
          bio: 'Alhaji Abdullahi Alhassan is the Non-Executive Chairman of Danhassan & Co, Plc. He is a former Managing Director/CEO (1998–2007). Provides board stewardship and continuity of vision across strategy, capital allocation, and succession governance.'
        },
        { 
          name: 'Arjun Mehta', 
    
          category: 'Non-Executive', 
          image: arjunImage,
          bio: 'Arjun Mehta is a Non-Executive Director of Danhassan & Co, Plc. He is a seasoned investment banker and infrastructure investor with over 20 years of experience in capital markets and project finance. Serves on the Finance & Investment Committee, advising on capital structure, funding strategy, and risk management.'
        },
        { 
          name: 'Ahmed Al-Mansour', 
    
          category: 'Non-Executive', 
          image: ahmedImage,
          bio: 'Ahmed Al-Mansour is the Chief Executive Officer of Gulf Energy Holdings (UAE). He brings 15+ years of power sector leadership and serves as Chair of the Audit & Risk Committee, strengthening enterprise risk management and compliance.'
        },
        { 
          name: 'Mrs. Amina Bala, SAN', 
        
          category: 'Non-Executive', 
          image: aminaImage,
          bio: 'Amina Bala is a Senior Advocate of Nigeria and former Attorney General of Kaduna State. She serves on the Audit & Risk Committee, providing legal oversight and governance expertise.'
        },
        { 
          name: 'Henry Oboli', 
    
          category: 'Non-Executive', 
          image: emekaImage,
          bio: 'Henry Oboli is a Non-Executive Director of Danhassan & Co, Plc. He is a seasoned executive with extensive experience in infrastructure development and project management. Serves on the Strategy & Innovation Committee, driving growth and transformation initiatives.'
        }
      ]
    },
    {
      group: 'Independent Directors',
      members: [
        { 
          name: 'Dr. Mansur Bature', 
          
          category: 'Independent', 
          image: mansurImage,
          bio: 'Dr. Mansur Bature is an independent director of Danhassan & Co, Plc. He is a former Director-General of the Nigerian Investment Promotion Commission and brings extensive experience in investment promotion, policy development, and economic strategy. Serves on the Finance & Investment Committee, advising on investment strategy and capital allocation.'
        },
        { 
          name: 'Ms. Sarah Adebanjo', 
      
          category: 'Independent', 
          image: sarahImage,
          bio: 'Ms. Sarah Adebanjo is an independent director of Danhassan & Co, Plc. She is a former executive in the energy sector and brings expertise in corporate governance, sustainability, and stakeholder engagement. Serves on the Audit & Risk Committee, providing oversight on risk management and compliance. '
        },
        { 
          name: 'Engr. Bassey Effiong', 
    
          category: 'Independent', 
          image: basseyImage,
          bio: 'Engr. Bassey Effiong is an independent director of Danhassan & Co, Plc. He is a seasoned engineer with extensive experience in power systems and infrastructure development. Serves on the Technical & Operations Committee, advising on asset reliability and performance.'
        }
      ]
    }
  ];

// --- REUSABLE COMPONENTS ---

const ImagePlaceholder = ({ initials }: { initials: string }) => (
  <div className="w-full h-full bg-[#F0F2F5] flex flex-col items-center justify-center text-slate-300">
    <User className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 mb-2 sm:mb-3 opacity-20" />
    <span className="font-serif text-xl sm:text-2xl font-bold opacity-30 tracking-widest">{initials}</span>
  </div>
);

const LeaderCard = ({ leader, onClick }: { leader: any, onClick: () => void }) => {
  const initials = leader.name.split(' ').map((n: string) => n[0]).join('');
  
  return (
    <div 
      className="group cursor-pointer flex flex-col h-full touch-manipulation"
      onClick={onClick}
    >
      {/* Strict Oando Aspect Ratio */}
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-50 mb-3 sm:mb-4 md:mb-5">
        {leader.image ? (
          <img 
            src={leader.image} 
            alt={leader.name} 
            className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
          />
        ) : (
          <ImagePlaceholder initials={initials} />
        )}
        <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/5 transition-colors duration-500"></div>
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="text-base sm:text-lg md:text-[19px] font-serif text-slate-900 mb-1 sm:mb-1.5 leading-tight group-hover:text-emerald-800 transition-colors">
          {leader.name}
        </h3>
        <p className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-[0.1em] leading-relaxed">
          {leader.role}
        </p>
      </div>
    </div>
  );
};

interface LeadershipProps {
  onNavigate: (page: string) => void;
}

export default function Leadership({ onNavigate }: LeadershipProps) {
  const [selectedLeader, setSelectedLeader] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'management' | 'board'>('management');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Prevent body scroll when modal is open
    if (selectedLeader) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedLeader]);

  const handleTabChange = (tab: 'management' | 'board') => {
    setActiveTab(tab);
    const element = document.getElementById('team-grid');
    if (element) {
      const offset = 80; // Reduced for mobile
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white text-slate-900 font-sans antialiased selection:bg-emerald-100">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        
        /* Smooth scrolling for iOS */
        html {
          -webkit-overflow-scrolling: touch;
        }
      `}</style>

      {/* 1. HERO SECTION - Mobile Responsive */}
      <section className="pt-24 sm:pt-32 md:pt-36 lg:pt-40 pb-12 sm:pb-16 md:pb-20 bg-white">
        <div className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-slate-500">
            <button onClick={() => onNavigate('home')} className="hover:text-emerald-700 transition-colors">Home</button>
            <span className="text-slate-300">&gt;</span>
            <span className="text-slate-900 font-medium">Leadership</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-slate-900 leading-[1.1] mb-4 sm:mb-6 md:mb-8 tracking-tight">
            Our People
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 font-light max-w-4xl leading-relaxed italic font-serif">
            "Investment in our people is founded on our belief that success is built around a strong gathering of minds."
          </p>
        </div>
      </section>

      {/* 2. FEATURE IMAGE - Mobile Responsive */}
      <section className="px-4 sm:px-6 lg:px-16">
        <div className="max-w-[1440px] mx-auto h-[220px] sm:h-[280px] md:h-[360px] lg:h-[440px] overflow-hidden rounded-lg relative">
          <img 
            src={peopleImage} 
            alt="Leadership" 
            className="w-full h-full object-cover object-center grayscale-[10%]" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent" />
        </div>
      </section>

      {/* 3. INTRO TEXT - Mobile Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-slate-900 leading-tight">
              A collective of diverse people, rich in knowledge and skills.
            </h2>
            <div className="space-y-4 sm:space-y-6 md:space-y-8 text-base sm:text-lg text-slate-700 font-light leading-relaxed sm:leading-loose">
              <p>
                Our team thrives on challenging conventional thinking, developing "made for Africa" solutions, and through collaboration, changing the regional narrative.
              </p>
              <p>
                Danhassan & Co is guided by a distinguished Board of Directors and an experienced Executive Management team focused on operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NAVIGATION TABS - Mobile Responsive & Sticky */}
      <section id="team-grid" className="sticky top-0 z-40 bg-white border-y border-slate-100 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 flex overflow-x-auto scrollbar-hide">
          <button
            onClick={() => handleTabChange('management')}
            className={`flex-shrink-0 px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 lg:py-8 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-all duration-300 border-b-2 whitespace-nowrap ${
              activeTab === 'management' ? 'border-emerald-700 text-slate-900' : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            Management Team
          </button>
          <button
            onClick={() => handleTabChange('board')}
            className={`flex-shrink-0 px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 lg:py-8 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-all duration-300 border-b-2 whitespace-nowrap ${
              activeTab === 'board' ? 'border-emerald-700 text-slate-900' : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            Board of Directors
          </button>
        </div>
      </section>

      {/* 5. CONTENT GRID - Mobile Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          {activeTab === 'management' ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-10 sm:gap-y-12 md:gap-y-16">
              {executiveManagement.map((leader, index) => (
                <LeaderCard key={index} leader={leader} onClick={() => setSelectedLeader(leader)} />
              ))}
            </div>
          ) : (
            <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
              {boardOfDirectors.map((group, idx) => (
                <div key={idx}>
                  <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-emerald-800 mb-6 sm:mb-8 md:mb-12 flex items-center gap-3 sm:gap-4">
                    {group.group} <span className="h-px bg-slate-100 flex-grow"></span>
                  </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-10 sm:gap-y-12 md:gap-y-16">
                      {group.members.map((member, mIndex) => (
                        <LeaderCard 
                          key={mIndex} 
                          leader={member} 
                          onClick={() => setSelectedLeader({ 
                            ...member, 
                            bio: member.bio || 'A distinguished member of the Board of Directors with extensive experience in governance and strategic oversight.' 
                          })} 
                        />
                      ))}
                    </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 6. MODAL OVERLAY - Fully Mobile Responsive */}
      {selectedLeader && (
        <div 
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-slate-900/95 backdrop-blur-sm animate-in fade-in duration-300 p-0 sm:p-4 md:p-10"
          onClick={() => setSelectedLeader(null)}
        >
          <div 
            className="bg-white w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl flex flex-col md:flex-row overflow-hidden sm:rounded-lg md:rounded-sm shadow-2xl max-h-[95vh] sm:max-h-[90vh] animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 duration-300"
            onClick={e => e.stopPropagation()}
          >
            {/* Left: Fixed Image - Mobile Adjusted */}
            <div className="md:w-[40%] bg-slate-100 h-[280px] sm:h-[320px] md:h-auto relative flex-shrink-0">
              {selectedLeader.image ? (
                <img 
                  src={selectedLeader.image} 
                  alt={selectedLeader.name} 
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              ) : (
                <ImagePlaceholder initials={selectedLeader.name.split(' ').map((n: string) => n[0]).join('')} />
              )}
            </div>

            {/* Right: Scrollable Text Content - Mobile Optimized */}
            <div className="md:w-[60%] p-6 sm:p-8 md:p-12 lg:p-16 overflow-y-auto bg-white flex flex-col">
              <button 
                onClick={() => setSelectedLeader(null)}
                className="self-end mb-2 sm:mb-4 p-2 hover:bg-slate-50 rounded-full transition-colors touch-manipulation"
                aria-label="Close modal"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6 text-slate-400" />
              </button>
              
              <div className="mt-2 sm:mt-4">
                <p className="text-[9px] sm:text-[10px] font-bold text-emerald-700 uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-3 sm:mb-4">
                  {selectedLeader.role}
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 mb-6 sm:mb-8 md:mb-10 leading-tight">
                  {selectedLeader.name}
                </h2>
                
                <div className="w-12 sm:w-14 md:w-16 h-0.5 sm:h-1 bg-emerald-800 mb-6 sm:mb-8 md:mb-10"></div>
                
                <div className="text-base sm:text-lg text-slate-600 leading-relaxed sm:leading-loose font-light space-y-4 sm:space-y-6">
                  {selectedLeader.bio.split('\n').map((para: string, i: number) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
