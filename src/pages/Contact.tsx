import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowUpRight, CheckCircle2, MessageSquare, Globe, Building2 } from 'lucide-react';
import Footer from '../components/Footer';
import officeImage from '../images/dh.png'; 

// --- DATA STRUCTURES ---

const contactDepartments = [
  {
    title: 'General Inquiries',
    role: 'Corporate Secretariat',
    description: 'For general correspondence, governance requests, and administrative matters.',
    email: 'info@danhassan.co',
    phone: '+234 9 461 4000',
    icon: Building2
  },
  {
    title: 'Investor Relations',
    role: 'Shareholder Services',
    description: 'Dedicated channel for analysts, shareholders, and financial performance data.',
    email: 'investors@danhassan.co',
    phone: '+234 9 461 4100',
    icon: Globe
  },
  {
    title: 'Media & Communications',
    role: 'Press Office',
    description: 'For media inquiries, brand assets, and strategic partnership proposals.',
    email: 'media@danhassan.co',
    phone: '+234 9 461 4200',
    icon: MessageSquare
  }
];

const regionalOffices = [
  { city: 'Lagos', address: 'Victoria Island Business District' },
  { city: 'Port Harcourt', address: 'Trans-Amadi Industrial Layout' },
  { city: 'Kano', address: 'Post Office Road, Central Area' },
  { city: 'Accra', address: 'Airport City, Accra, Ghana' },
  { city: 'Nairobi', address: 'Upper Hill District, Kenya' },
  { city: 'Johannesburg', address: 'Sandton Central, South Africa' },
];

export default function Contact({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-emerald-100">
      
      {/* TYPOGRAPHY INJECTION */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* 1. HERO SECTION (Split Layout) */}
      <section className="pt-32 pb-20 bg-[#FAF9F6] border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Text */}
            <div>
              <div className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-slate-500">
                <button onClick={() => onNavigate('home')} className="hover:text-emerald-700 transition-colors">Home</button>
                <span className="text-slate-300">&gt;</span>
                <span className="text-slate-900 font-medium">Contact</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-slate-900 leading-[1.05] mb-8">
                Connect with our <br/> global team.
              </h1>
              <p className="text-xl text-slate-600 font-light leading-relaxed max-w-lg mb-10">
                Whether you are an investor, partner, or community member, our teams are available across our regional hubs to assist you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-200 rounded-full"><Clock className="h-4 w-4 text-slate-700" /></div>
                  <span>Mon-Fri: 08:00 - 17:00 WAT</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-200 rounded-full"><Phone className="h-4 w-4 text-slate-700" /></div>
                  <span>+234 9 461 4000</span>
                </div>
              </div>
            </div>

            {/* Right: HQ Image (Card Style) */}
            <div className="relative h-[500px] w-full bg-slate-100 rounded-sm overflow-hidden shadow-2xl group">
              <img loading="lazy" decoding="async" 
                src={officeImage} 
                alt="Danhassan House HQ" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <div className="text-xs font-bold uppercase tracking-widest mb-1 text-emerald-300">Headquarters</div>
                <div className="text-2xl font-serif">Danhassan House, Abuja</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CONTACT DEPARTMENTS (Interactive Grid) */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactDepartments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <div 
                  key={index} 
                  className="group relative bg-[#F8F9FA] border border-slate-200 p-8 hover:bg-white hover:border-emerald-200 hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden"
                >
                  {/* Hover Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-emerald-800 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

                  <div className="mb-6 flex justify-between items-start">
                    <div className="p-3 bg-white border border-slate-200 text-slate-700 rounded-lg group-hover:text-emerald-800 group-hover:border-emerald-200 transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-slate-300 group-hover:text-emerald-800 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>

                  <h3 className="text-xl font-serif text-slate-900 mb-1">{dept.title}</h3>
                  <div className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-4">{dept.role}</div>
                  
                  <p className="text-sm text-slate-600 leading-relaxed mb-8 min-h-[40px]">
                    {dept.description}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-slate-200 group-hover:border-emerald-100 transition-colors">
                    <a href={`mailto:${dept.email}`} className="flex items-center gap-3 text-sm font-medium text-slate-900 hover:text-emerald-700 transition-colors">
                      <Mail className="h-4 w-4 text-slate-400" /> {dept.email}
                    </a>
                    <a href={`tel:${dept.phone}`} className="flex items-center gap-3 text-sm font-medium text-slate-900 hover:text-emerald-700 transition-colors">
                      <Phone className="h-4 w-4 text-slate-400" /> {dept.phone}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FORM & OFFICES (Split Section) */}
      <section className="py-32 bg-[#F8F9FA]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-20">
          
          {/* LEFT: FORM */}
          <div>
            <div className="mb-10">
              <h2 className="text-4xl font-serif text-slate-900 mb-4">Send a direct inquiry</h2>
              <p className="text-slate-600 text-lg">Please fill out the form below. For urgent operational matters, please refer to the phone numbers listed above.</p>
            </div>

            {formStatus === 'success' ? (
              <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-sm flex flex-col items-center text-center animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-serif text-emerald-900 mb-2">Message Sent</h3>
                <p className="text-emerald-800">Thank you. Our team will review your inquiry and respond within 48 hours.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 text-sm font-bold uppercase tracking-widest text-emerald-900 underline hover:text-emerald-700"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 bg-white p-10 border border-slate-200 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2 group">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest group-focus-within:text-emerald-700 transition-colors">Full Name</label>
                    <input type="text" required className="w-full border-b border-slate-300 py-3 text-slate-900 focus:outline-none focus:border-emerald-700 transition-colors bg-transparent placeholder-slate-300" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest group-focus-within:text-emerald-700 transition-colors">Email Address</label>
                    <input type="email" required className="w-full border-b border-slate-300 py-3 text-slate-900 focus:outline-none focus:border-emerald-700 transition-colors bg-transparent placeholder-slate-300" placeholder="name@company.com" />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest group-focus-within:text-emerald-700 transition-colors">Subject</label>
                  <select className="w-full border-b border-slate-300 py-3 text-slate-900 focus:outline-none focus:border-emerald-700 transition-colors bg-transparent cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Investor Relations</option>
                    <option>Media Request</option>
                    <option>Partnership Proposal</option>
                  </select>
                </div>

                <div className="space-y-2 group">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest group-focus-within:text-emerald-700 transition-colors">Message</label>
                  <textarea required rows={4} className="w-full border-b border-slate-300 py-3 text-slate-900 focus:outline-none focus:border-emerald-700 transition-colors bg-transparent placeholder-slate-300 resize-none" placeholder="How can we assist you?"></textarea>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="bg-slate-900 text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-emerald-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Submit Message'}
                  </button>
                  <span className="text-xs text-slate-400">* Required fields</span>
                </div>
              </form>
            )}
          </div>

          {/* RIGHT: REGIONAL OFFICES */}
          <div>
            <div className="bg-slate-900 text-white p-10 border border-slate-800 h-full relative overflow-hidden">

              <div className="relative z-10">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-8 pb-4 border-b border-white/10">
                  Global Presence
                </h3>
                
                <div className="space-y-8">
                  {regionalOffices.map((office, idx) => (
                    <div key={idx} className="group cursor-default">
                      <div className="flex items-center gap-3 mb-1">
                        <MapPin className="h-4 w-4 text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <h4 className="text-xl font-serif text-white group-hover:text-emerald-200 transition-colors">{office.city}</h4>
                      </div>
                      <p className="text-sm text-slate-400 pl-7 group-hover:text-white transition-colors">{office.address}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">Primary Address</div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Plot 1275 Cadastral Zone,<br/>
                    Central Business District,<br/>
                    Abuja, Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
