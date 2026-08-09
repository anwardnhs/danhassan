import { CouncilMember } from '../data/council-members';
import { Shield } from 'lucide-react';

interface CouncilCardProps {
  member: CouncilMember;
}

export default function CouncilCard({ member }: CouncilCardProps) {
  return (
    <div className="bg-white border-t-4 border-red-900 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-cinzel text-lg md:text-xl font-semibold text-stone-900 mb-1">
            {member.name}
          </h3>
          <p className="font-lato text-sm text-amber-600 font-semibold mb-2">
            {member.title}
          </p>
        </div>
        <Shield className="w-6 h-6 text-red-900 flex-shrink-0 ml-2" />
      </div>

      <div className="space-y-2">
        <div>
          <span className="font-lato text-xs uppercase tracking-wider text-stone-500 font-semibold">
            Role
          </span>
          <p className="font-lato text-sm text-stone-700 mt-0.5">{member.role}</p>
        </div>

        <div>
          <span className="font-lato text-xs uppercase tracking-wider text-stone-500 font-semibold">
            Description
          </span>
          <p className="font-lato text-sm text-stone-600 mt-0.5 leading-relaxed">
            {member.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
