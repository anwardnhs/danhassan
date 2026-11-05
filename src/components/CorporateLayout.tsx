import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface CorporatePageProps { onNavigate: (page: string) => void; section?: string; }

type SiteLinkProps = CorporatePageProps & Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'onClick'> & {
  page: string;
};

export function SiteLink({ page, onNavigate, ...props }: SiteLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    onNavigate(page);
  };
  return <a {...props} href={page === 'home' ? '/' : `/${page}`} onClick={handleClick} />;
}

export function PageLink({ page, onNavigate, children, className = 'action-link' }: CorporatePageProps & { page: string; children: ReactNode; className?: string }) {
  return <SiteLink page={page} onNavigate={onNavigate} className={className}>{children}<ArrowUpRight size={20} aria-hidden="true" /></SiteLink>;
}

export function NextChapter({ title, copy, page, label, onNavigate }: CorporatePageProps & { title: string; copy: string; page: string; label: string }) {
  return <section className="next-chapter"><div className="site-container next-chapter-inner"><h2>{title}</h2><div><p>{copy}</p><PageLink page={page} onNavigate={onNavigate} className="action-button light-button">{label}</PageLink></div></div></section>;
}
