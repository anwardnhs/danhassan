import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Leadership from './pages/Leadership';
import Investors from './pages/Investors';
import Contact from './pages/Contact';
import Newsroom from './pages/Newsroom';

const pages = { home: Home, about: About, portfolio: Portfolio, leadership: Leadership, investors: Investors, contact: Contact, newsroom: Newsroom };
type Page = keyof typeof pages;
const titles: Record<Page, string> = { home: 'Invested in Africa’s future', about: 'Corporate profile', portfolio: 'Our portfolio', leadership: 'Our leadership', investors: 'Investor relations', contact: 'Contact us', newsroom: 'Newsroom' };
function isPage(page: string): page is Page {
  return Object.prototype.hasOwnProperty.call(pages, page);
}

function getLocation() {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
  return { page: isPage(path) ? path : 'home' as Page, hash: window.location.hash };
}
export default function App() {
  const [location, setLocation] = useState(getLocation);
  const { page: currentPage, hash } = location;
  const mainRef = useRef<HTMLElement>(null);
  const firstRender = useRef(true);
  useEffect(() => {
    const onPopState = () => setLocation(getLocation());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);
  useLayoutEffect(() => {
    document.title = `${titles[currentPage]} | Danhassan & Co.`;
    const target = hash && document.getElementById(hash.slice(1));
    if (target) {
      if (!target.hasAttribute('tabindex')) target.tabIndex = -1;
      target.focus({ preventScroll: true });
      target.scrollIntoView({ behavior: 'instant' });
    } else if (!firstRender.current) {
      mainRef.current?.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    firstRender.current = false;
  }, [location, currentPage, hash]);
  const onNavigate = (destination: string) => {
    const [page, fragment] = destination.split('#', 2);
    if (!isPage(page)) return;
    const nextHash = fragment ? `#${fragment}` : '';
    const url = (page === 'home' ? '/' : `/${page}`) + nextHash;
    if (url !== window.location.pathname + window.location.hash) window.history.pushState({}, '', url);
    setLocation({ page, hash: nextHash });
  };
  const PageComponent = pages[currentPage];
  return (
    <div id="top" className={`site page-${currentPage}`}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      <main id="main-content" tabIndex={-1} ref={mainRef} key={currentPage}>
        <PageComponent onNavigate={onNavigate} section={hash.slice(1)} />
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
