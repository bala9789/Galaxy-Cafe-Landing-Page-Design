import { Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TestimonialCardProps {
  quote: string;
  name: string;
  rating: number;
  avatarUrl: string;
}

export function TestimonialCard({ quote, name, rating, avatarUrl }: TestimonialCardProps) {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 md:p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 md:w-5 md:h-5 ${
              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-300 text-sm md:text-base mb-6 italic">"{quote}"</p>
      <div className="flex items-center gap-3">
        <ImageWithFallback
          src={avatarUrl}
          alt={name}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
        />
        <span className="text-white font-semibold">{name}</span>
      </div>
    </div>
  );
}
