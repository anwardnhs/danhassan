import { ArrowUp, ArrowUpRight } from 'lucide-react';

export default function Footer({ onNavigate }: { onNavigate: (page: string) => void }) {
  const groups = [
    { title: 'The group', links: [['Corporate profile', 'about'], ['Our leadership', 'leadership'], ['Newsroom', 'newsroom']] },
    { title: 'Our businesses', links: [['Power & energy', 'portfolio'], ['Infrastructure & engineering', 'portfolio'], ['Real estate & property', 'portfolio']] },
    { title: 'Connect', links: [['Investor relations', 'investors'], ['Contact us', 'contact']] },
  ];
  return <footer className="site-footer"><div className="site-container"><div className="footer-top"><a href="/" className="wordmark" onClick={e => { e.preventDefault(); onNavigate('home'); }}>DANHASSAN <span>&</span> CO<span className="brand-period">.</span></a><a className="text-link" href="/contact" onClick={e => { e.preventDefault(); onNavigate('contact'); }}>Let’s build what’s next <ArrowUpRight size={18} /></a></div><div className="footer-grid"><div className="footer-address"><p>Danhassan House<br />Plot 1275, Central Business District<br />Abuja, Nigeria</p><a href="mailto:info@danhassan.co">info@danhassan.co</a></div>{groups.map(group => <div key={group.title}><p className="footer-label">{group.title}</p>{group.links.map(([label, page]) => <a key={label} href={`/${page}`} onClick={e => { e.preventDefault(); onNavigate(page); }}>{label}</a>)}</div>)}</div><div className="footer-bottom"><p>© {new Date().getFullYear()} Danhassan & Co, Plc. All rights reserved.</p><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top <ArrowUp size={14} /></button></div></div></footer>;
}
