import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { NextChapter, type CorporatePageProps } from '../components/CorporateLayout';
import { executiveManagement, boardOfDirectors } from '../data/leadership';

type Leader = { name: string; role?: string; category: string; bio: string; image: string };

function Portrait({ leader, onSelect }: { leader: Leader; onSelect: (leader: Leader) => void }) {
  return <button className="portrait-card" onClick={() => onSelect(leader)} aria-label={`Read biography of ${leader.name}`}>
    <span className="portrait-image"><img src={leader.image} alt="" loading="lazy" /><span className="portrait-open"><ArrowUpRight size={23} aria-hidden="true" /></span></span>
    <span className="portrait-name">{leader.name}</span>
    <span className="portrait-role">{leader.role || `${leader.category} Director`}</span>
  </button>;
}

export default function Leadership({ onNavigate }: CorporatePageProps) {
  const [selected, setSelected] = useState<Leader | null>(null);
  const [team, setTeam] = useState<'management' | 'board'>('management');
  const ceo = executiveManagement[0];

  return <div className="redesign leadership-redesign">
    <section className="people-opening site-container"><h1>Experience that leads.<br /><em>People who build.</em></h1><p>Meet the people guiding our businesses, shaping our decisions, and building lasting value across the group.</p></section>
    <section className="ceo-section"><div className="site-container ceo-feature"><div className="ceo-portrait"><img src={ceo.image} alt={ceo.name} fetchPriority="high" /></div><div className="ceo-copy"><h2>Leadership with<br /><em>a long-term view.</em></h2><p>{ceo.bio}</p><div className="ceo-identity"><h3>{ceo.name}</h3><p>{ceo.role}</p></div><button className="action-link" onClick={() => setSelected(ceo)}>Read biography <ArrowUpRight size={20} /></button></div></div></section>
    <section className="team-section site-container"><div className="team-heading"><h2>Our leadership</h2><div className="team-controls" role="group" aria-label="Choose leadership team"><button aria-pressed={team === 'management'} onClick={() => setTeam('management')}>Executive management</button><button aria-pressed={team === 'board'} onClick={() => setTeam('board')}>Board of directors</button></div></div><div className="team-content" aria-live="polite">{team === 'management' ? <div className="portrait-grid">{executiveManagement.map(leader => <Portrait leader={leader} onSelect={setSelected} key={leader.name} />)}</div> : boardOfDirectors.map(group => <div className="board-group" key={group.group}><h3>{group.group}</h3><div className="portrait-grid">{group.members.map(leader => <Portrait leader={leader} onSelect={setSelected} key={leader.name} />)}</div></div>)}</div></section>
    <NextChapter title="Accountability at every level." copy="Explore our financial reporting, governance policies, and shareholder information." page="investors" label="Explore our governance" onNavigate={onNavigate} />
    <Dialog open={!!selected} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent className="leader-dialog">{selected && <><div className="leader-dialog-image"><img src={selected.image} alt={selected.name} /></div><div className="leader-dialog-copy"><DialogTitle>{selected.name}</DialogTitle><p className="biography-role">{selected.role || `${selected.category} Director`}</p><DialogDescription>{selected.bio}</DialogDescription></div></>}</DialogContent></Dialog>
  </div>;
}
