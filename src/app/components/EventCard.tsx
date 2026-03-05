import { Calendar, Clock } from 'lucide-react';
import { ReactNode } from 'react';

interface EventCardProps {
  title: string;
  day: string;
  time: string;
  icon: ReactNode;
  description: string;
}

export function EventCard({ title, day, time, icon, description }: EventCardProps) {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 md:p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-pink-500/20 to-teal-500/20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm md:text-base mb-4">{description}</p>
      <div className="flex flex-col gap-2 text-sm text-gray-300">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-purple-400" />
          <span>{day}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-purple-400" />
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}
