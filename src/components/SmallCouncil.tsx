import { councilMembers } from '../data/council-members';
import CouncilCard from './CouncilCard';
import { Users } from 'lucide-react';

export default function SmallCouncil() {
  return (
    <section id="council" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-red-900" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Her Majesty's Small Council
          </h2>
          <p className="font-lato text-stone-600 text-base sm:text-lg max-w-2xl mx-auto">
            The trusted advisors and commanders who serve the Crown and protect the realm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {councilMembers.map((member, index) => (
            <CouncilCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
