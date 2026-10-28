import { useState } from 'react';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { NextChapter, type CorporatePageProps } from '../components/CorporateLayout';
import { featuredStory, allUpdates, categories } from '../data/news';
import portImage from '../images/port.jpg';

type Story = { title: string; summary: string; category: string; date: string };

export default function Newsroom({ onNavigate }: CorporatePageProps) {
  const [category, setCategory] = useState('All');
  const [selected, setSelected] = useState<Story | null>(null);
  const updates = category === 'All' ? allUpdates : allUpdates.filter(story => story.category === category);

  return <div className="redesign newsroom-redesign">
    <section className="newsroom-opening site-container"><h1>News from<br /><em>across the group.</em></h1><p>Company announcements, investment updates, and the stories behind our progress.</p></section>
    <section className="featured-release site-container"><button className="featured-release-image" onClick={() => setSelected(featuredStory)} aria-label={`View announcement: ${featuredStory.title}`}><img src={portImage} alt="Port infrastructure and logistics operations" fetchPriority="high" /><span><ArrowUpRight size={28} /></span></button><div className="featured-release-copy"><p className="release-meta">{featuredStory.category} <span>{featuredStory.date}</span></p><h2>{featuredStory.title}</h2><p>{featuredStory.summary}</p><button className="action-link" onClick={() => setSelected(featuredStory)}>View announcement <ArrowUpRight size={20} /></button></div></section>
    <section className="updates-section"><div className="site-container"><div className="updates-heading"><h2>Latest updates</h2><span>{updates.length} announcements</span></div><div className="news-filters" role="group" aria-label="Filter news by category">{categories.map(item => <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item === 'All' ? 'All updates' : item}</button>)}</div><div className="updates-list" aria-live="polite">{updates.map(story => <article className="update-row" key={story.title}><div className="update-date"><span>{story.date}</span><span>{story.category}</span></div><div><h3><button onClick={() => setSelected(story)}>{story.title}</button></h3><p>{story.summary}</p></div><button className="update-open" onClick={() => setSelected(story)} aria-label={`View announcement: ${story.title}`}><ArrowUpRight size={25} /></button></article>)}</div></div></section>
    <section className="media-desk site-container"><div><h2>Let’s tell<br /><em>the whole story.</em></h2><p>For press enquiries, official statements, and future news updates, contact our corporate communications team.</p></div><div className="media-desk-links"><a href="mailto:media@danhassan.co"><Mail size={22} /><span>media@danhassan.co</span><ArrowUpRight size={20} /></a><a href="tel:+23494614200"><Phone size={22} /><span>+234 9 461 4200</span><ArrowUpRight size={20} /></a><a href="mailto:media@danhassan.co?subject=News%20updates%20request" className="action-link">Request news updates <ArrowUpRight size={20} /></a></div></section>
    <NextChapter title="Looking for the numbers?" copy="Find financial results, investor presentations, and governance documents in our investor centre." page="investors" label="Visit investor relations" onNavigate={onNavigate} />
    <Dialog open={!!selected} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent className="story-dialog release-dialog">{selected && <><p className="release-meta">{selected.category} · {selected.date}</p><DialogTitle>{selected.title}</DialogTitle><DialogDescription>{selected.summary}</DialogDescription><a className="action-link" href={`mailto:media@danhassan.co?subject=${encodeURIComponent(selected.title)}`}>Request the full release <ArrowUpRight size={20} /></a></>}</DialogContent></Dialog>
  </div>;
}
