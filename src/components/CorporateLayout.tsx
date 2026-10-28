import type { MouseEvent, ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface CorporatePageProps { onNavigate: (page: string) => void; }

export function PageLink({ page, onNavigate, children, className = 'action-link' }: CorporatePageProps & { page: string; children: ReactNode; className?: string }) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    onNavigate(page);
  };
  return <a href={`/${page}`} onClick={handleClick} className={className}>{children}<ArrowUpRight size={20} aria-hidden="true" /></a>;
}

export function NextChapter({ title, copy, page, label, onNavigate }: CorporatePageProps & { title: string; copy: string; page: string; label: string }) {
  return <section className="next-chapter"><div className="site-container next-chapter-inner"><h2>{title}</h2><div><p>{copy}</p><PageLink page={page} onNavigate={onNavigate} className="action-button light-button">{label}</PageLink></div></div></section>;
}
