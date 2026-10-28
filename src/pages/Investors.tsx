import CountUpText from '../components/CountUpText';
import { useState } from 'react';
import { ArrowDown, ArrowUpRight, FileText, Mail, Phone } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { NextChapter, type CorporatePageProps } from '../components/CorporateLayout';

const metrics = [
  { end: 27.3, prefix: '₦', suffix: 'T', decimals: 1, label: 'Market capitalisation', note: 'NGX: DANHASSAN' },
  { end: 11.8, prefix: '₦', suffix: 'T', decimals: 1, label: 'Revenue', note: '+12% year on year' },
  { end: 2.9, prefix: '₦', suffix: 'T', decimals: 1, label: 'EBITDA', note: '25% margin' },
  { end: 1.45, prefix: '₦', suffix: 'T', decimals: 2, label: 'Net income', note: '₦170.00 earnings per share' },
  { end: 12, prefix: '', suffix: '%', decimals: 1, label: 'Return on equity', note: 'FY2025' },
  { end: 0.58, prefix: '', suffix: 'x', decimals: 2, label: 'Debt / equity', note: 'FY2025' },
];
const reports = [
  { title: 'FY2025 Audited Financial Results', date: '24 Jan 2026', type: 'Annual report', size: '4.2 MB' },
  { title: 'Q4 2025 Investor Presentation', date: '15 Jan 2026', type: 'Presentation', size: '2.8 MB' },
  { title: '2025 Sustainability & ESG Report', date: '10 Dec 2025', type: 'ESG report', size: '6.1 MB' },
  { title: 'Notice of Annual General Meeting', date: '05 Nov 2025', type: 'Governance', size: '1.2 MB' },
];
const policies = ['Code of Business Ethics', 'Board Charter', 'Risk Management Framework', 'Whistleblowing Policy', 'Sustainability Policy', 'Audit Committee Charter'];
const ratings = [
  { agency: 'Fitch Ratings', rating: 'BB-', outlook: 'Stable', date: 'Dec 2025' },
  { agency: "Moody’s", rating: 'Ba3', outlook: 'Positive', date: 'Nov 2025' },
  { agency: 'Standard & Poor’s', rating: 'BB-', outlook: 'Stable', date: 'Oct 2025' },
];

export default function Investors({ onNavigate }: CorporatePageProps) {
  const [category, setCategory] = useState<'reports' | 'governance'>('reports');
  const [requestedResource, setRequestedResource] = useState<string | null>(null);

  return <div className="redesign investors-redesign">
    <section className="investor-opening"><div className="site-container investor-opening-grid"><div><h1>Conviction in our future.<br /><em>Clarity in our performance.</em></h1><p>Financial results, shareholder information, and the governance behind our long-term approach to investing.</p><a className="action-link on-dark" href="#financial-results">Explore FY2025 results <ArrowDown size={20} /></a></div><div className="annual-report-feature"><span>Danhassan & Co.</span><div><p>Annual report</p><strong>2025</strong><h2>Building value.<br />Advancing Africa.</h2></div><button onClick={() => setRequestedResource('FY2025 Annual Report')}>Request the report <ArrowUpRight size={22} /></button></div></div></section>

    <section className="results-section site-container" id="financial-results"><div className="redesign-section-title"><h2>A year in perspective.</h2><p>FY2025 financial highlights<br />Results published 24 January 2026</p></div><dl className="financial-metrics">{metrics.map(metric => <div key={metric.label}><dt>{metric.label}</dt><dd><CountUpText end={metric.end} prefix={metric.prefix} suffix={metric.suffix} decimals={metric.decimals} /></dd><span>{metric.note}</span></div>)}</dl></section>

    <section className="investor-market"><div className="site-container market-grid"><div className="share-snapshot"><div className="market-heading"><h2>Share performance</h2><span>NGX: DANHASSAN</span></div><div className="share-price"><strong><CountUpText end={3200} prefix="₦" /></strong><span><CountUpText end={1.2} prefix="+" suffix="%" decimals={1} /></span></div><p>Market snapshot · 24 Jan 2026, 16:00 WAT</p><dl className="share-details">{[['Day range', '₦3,180 – ₦3,245'], ['52-week range', '₦2,800 – ₦3,400'], ['Volume', '12.4M'], ['Shares outstanding', '8.52B'], ['Free float', '63.6%'], ['P/E ratio', '18.8x']].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><button className="action-link" onClick={() => setRequestedResource('Stock information')}>Request stock information <ArrowUpRight size={20} /></button></div><div className="credit-ratings"><h2>Credit ratings</h2>{ratings.map(rating => <div className="rating-row" key={rating.agency}><div><h3>{rating.agency}</h3><p>{rating.outlook} outlook · {rating.date}</p></div><strong>{rating.rating}</strong></div>)}</div></div></section>

    <section className="investor-library site-container" id="reports"><div className="library-heading"><h2>Reports & disclosures</h2><button className="action-link" onClick={() => setRequestedResource('Financial reports archive')}>Request archive <ArrowUpRight size={20} /></button></div><div className="library-controls" role="group" aria-label="Choose document category"><button aria-pressed={category === 'reports'} onClick={() => setCategory('reports')}>Financial reports</button><button aria-pressed={category === 'governance'} onClick={() => setCategory('governance')}>Governance documents</button></div><div className="document-list" aria-live="polite">{category === 'reports' ? reports.map(report => <button className="document-row" key={report.title} onClick={() => setRequestedResource(report.title)}><FileText size={25} aria-hidden="true" /><span><strong>{report.title}</strong><span>{report.type} · {report.date} · PDF {report.size}</span></span><span className="document-action">Request PDF <ArrowUpRight size={20} /></span></button>) : policies.map(policy => <button className="document-row" key={policy} onClick={() => setRequestedResource(policy)}><FileText size={25} aria-hidden="true" /><span><strong>{policy}</strong><span>Group governance</span></span><span className="document-action">Request document <ArrowUpRight size={20} /></span></button>)}</div><p className="library-note">To obtain a document, send a request to our investor relations team.</p></section>

    <section className="shareholder-services"><div className="site-container"><div className="redesign-section-title"><h2>Here for our shareholders.</h2><p>Find the information and support you need.</p></div><div className="shareholder-links">{['AGM information', 'Dividend history', 'Financial calendar'].map(title => <button key={title} onClick={() => setRequestedResource(title)}>{title}<ArrowUpRight size={22} /></button>)}</div><div className="investor-contacts"><div><h3>Investor relations</h3><p>For investors, analysts, and financial enquiries.</p><a href="mailto:ir@danhassan.co"><Mail size={19} /> ir@danhassan.co</a><a href="tel:+23494614100"><Phone size={19} /> +234 9 461 4100</a></div><div><h3>Registrar services</h3><p>For share certificates, dividend payments, and account updates.</p><a href="mailto:registrars@danhassan.co"><Mail size={19} /> registrars@danhassan.co</a></div></div></div></section>
    <NextChapter title="Stay close to the group." copy="Read our latest announcements, company news, and operational updates." page="newsroom" label="Visit the newsroom" onNavigate={onNavigate} />

    <Dialog open={!!requestedResource} onOpenChange={open => { if (!open) setRequestedResource(null); }}><DialogContent className="story-dialog resource-dialog"><DialogTitle>{requestedResource}</DialogTitle><DialogDescription>Contact our investor relations team to request this document or the latest information. The link below opens a draft in your email app.</DialogDescription><a className="action-link" href={`mailto:ir@danhassan.co?subject=${encodeURIComponent(`Request: ${requestedResource}`)}`}>Request from investor relations <ArrowUpRight size={20} /></a></DialogContent></Dialog>
  </div>;
}
