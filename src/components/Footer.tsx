import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { SiteLink, type CorporatePageProps } from './CorporateLayout';

const groups = [
  { title: 'The group', links: [['Corporate profile', 'about'], ['Our leadership', 'leadership#leadership-team'], ['Newsroom', 'newsroom']] },
  { title: 'Our businesses', links: [['Power & energy', 'portfolio#power'], ['Infrastructure & engineering', 'portfolio#engineering'], ['Real estate & property', 'portfolio#property']] },
  { title: 'Connect', links: [['Investor relations', 'investors'], ['Reports and disclosures', 'investors#reports'], ['Contact us', 'contact']] },
];

export default function Footer({ onNavigate }: CorporatePageProps) {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-top">
          <SiteLink page="home" onNavigate={onNavigate} className="wordmark">
            DANHASSAN <span>&</span> CO<span className="brand-period">.</span>
          </SiteLink>
          <SiteLink page="contact#send-enquiry" onNavigate={onNavigate} className="text-link">
            Contact our team <ArrowUpRight size={18} aria-hidden="true" />
          </SiteLink>
        </div>
        <div className="footer-grid">
          <div className="footer-address">
            <p>Danhassan House<br />Plot 1275, Central Business District<br />Abuja, Nigeria</p>
            <a href="mailto:info@danhassan.co">info@danhassan.co</a>
          </div>
          {groups.map(group => (
            <nav key={group.title} aria-label={group.title}>
              <p className="footer-label">{group.title}</p>
              {group.links.map(([label, page]) => (
                <SiteLink key={page} page={page} onNavigate={onNavigate}>{label}</SiteLink>
              ))}
            </nav>
          ))}
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Danhassan & Co, Plc. All rights reserved.</p>
          <a href="#top" className="footer-back-top">
            Back to top <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
