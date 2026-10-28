import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Clock, Mail, Phone } from 'lucide-react';
import type { CorporatePageProps } from '../components/CorporateLayout';
import officeImage from '../images/dh.png';

const departments = [
  { title: 'General enquiries', copy: 'Corporate correspondence, governance requests, and administrative matters.', email: 'info@danhassan.co', phone: '+234 9 461 4000' },
  { title: 'Investor relations', copy: 'Shareholder services, financial performance, and analyst enquiries.', email: 'investors@danhassan.co', phone: '+234 9 461 4100' },
  { title: 'Media & communications', copy: 'Press enquiries, official statements, and brand information.', email: 'media@danhassan.co', phone: '+234 9 461 4200' },
];
const offices = [
  ['Lagos', 'Victoria Island Business District'],
  ['Port Harcourt', 'Trans-Amadi Industrial Layout'],
  ['Kano', 'Post Office Road, Central Area'],
  ['Accra', 'Airport City, Accra, Ghana'],
  ['Nairobi', 'Upper Hill District, Kenya'],
  ['Johannesburg', 'Sandton Central, South Africa'],
];

export default function Contact({ onNavigate }: CorporatePageProps) {
  const [draftOpened, setDraftOpened] = useState(false);
  const prepareEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = String(data.get('subject') || 'General enquiry');
    const recipient = subject === 'Investor relations' ? 'investors@danhassan.co' : subject === 'Media enquiry' ? 'media@danhassan.co' : 'info@danhassan.co';
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraftOpened(true);
  };

  return <div className="redesign contact-redesign">
    <section className="contact-opening site-container"><div><h1>Good things start<br /><em>with a conversation.</em></h1><p>For investment opportunities, partnerships, or a question about the group, we’ll help you find the right people.</p><a className="action-link" href="#contact-teams">Find your team <ArrowUpRight size={20} /></a></div><div className="headquarters-panel"><h2>Visit us in Abuja.</h2><address>Danhassan House<br />Plot 1275 Cadastral Zone<br />Central Business District<br />Abuja, Nigeria</address><p><Clock size={19} /> Monday–Friday, 08:00–17:00 WAT</p><a href="tel:+23494614000"><Phone size={19} /> +234 9 461 4000</a></div></section>
    <div className="headquarters-photo site-container"><img src={officeImage} alt="Danhassan House headquarters in Abuja" fetchPriority="high" /></div>
    <section className="contact-teams site-container" id="contact-teams"><div className="redesign-section-title"><h2>The right conversation.<br /><em>The right team.</em></h2><p>Reach our teams directly by email or phone.</p></div><div className="department-grid">{departments.map(department => <article key={department.title}><h3>{department.title}</h3><p>{department.copy}</p><a href={`mailto:${department.email}`}><Mail size={18} /><span>{department.email}</span></a><a href={`tel:${department.phone.replace(/\s/g, '')}`}><Phone size={18} />{department.phone}</a></article>)}</div></section>
    <section className="enquiry-section"><div className="site-container enquiry-grid"><div className="enquiry-intro"><h2>Tell us what<br /><em>you have in mind.</em></h2><p>Prepare your enquiry here, then send it using your email app. Your message will be addressed to the relevant team.</p><button className="action-link" onClick={() => onNavigate('investors')}>Looking for investor resources? <ArrowUpRight size={20} /></button></div><form className="enquiry-form" onSubmit={prepareEmail}><div className="form-two-columns"><div><label htmlFor="contact-name">Full name *</label><input id="contact-name" name="name" autoComplete="name" required placeholder="Your full name" /></div><div><label htmlFor="contact-email">Email address *</label><input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></div></div><div><label htmlFor="contact-subject">What would you like to discuss?</label><select id="contact-subject" name="subject"><option>General enquiry</option><option>Investor relations</option><option>Media enquiry</option><option>Partnership proposal</option></select></div><div><label htmlFor="contact-message">Your message *</label><textarea id="contact-message" name="message" rows={5} required placeholder="How can we help?" /></div><div className="form-submit-row"><button className="action-button" type="submit">Open email draft <ArrowUpRight size={20} /></button><span>* Required fields</span></div>{draftOpened && <p className="email-draft-notice" role="status">Complete and send the draft in your email app. If it didn’t open, email <a href="mailto:info@danhassan.co">info@danhassan.co</a>. Your entries remain here.</p>}</form></div></section>
    <section className="regional-section site-container"><div className="redesign-section-title"><h2>Closer to our markets.</h2><p>Our regional offices across Africa.</p></div><div className="regional-grid">{offices.map(([city, address]) => <div key={city}><h3>{city}</h3><p>{address}</p></div>)}</div></section>
  </div>;
}
