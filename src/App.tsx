import { useEffect, useRef, useState } from 'react';
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
function getPage(): Page {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '') || 'home';
  return path in pages ? path as Page : 'home';
}
export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(getPage);
  const mainRef = useRef<HTMLElement>(null);
  const firstRender = useRef(true);
  useEffect(() => {
    const onPopState = () => { setCurrentPage(getPage()); window.scrollTo(0, 0); };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);
  useEffect(() => {
    document.title = `${titles[currentPage]} | Danhassan & Co.`;
    if (firstRender.current) firstRender.current = false;
    else mainRef.current?.focus({ preventScroll: true });
  }, [currentPage]);
  const onNavigate = (page: string) => {
    if (!(page in pages)) return;
    const nextPage = page as Page;
    if (nextPage !== currentPage) window.history.pushState({}, '', nextPage === 'home' ? '/' : `/${nextPage}`);
    setCurrentPage(nextPage);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  const PageComponent = pages[currentPage];
  return <div className={`site page-${currentPage}`}><a className="skip-link" href="#main-content">Skip to content</a><Header currentPage={currentPage} onNavigate={onNavigate} /><main id="main-content" tabIndex={-1} ref={mainRef} key={currentPage}><PageComponent onNavigate={onNavigate} /></main><Footer onNavigate={onNavigate} /></div>;
}
