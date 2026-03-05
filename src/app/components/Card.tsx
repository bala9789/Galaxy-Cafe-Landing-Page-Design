import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'bordered';
}

export function Card({ children, className = '', variant = 'default' }: CardProps) {
  const variants = {
    default: 'bg-slate-800/50 backdrop-blur-sm border border-slate-700/50',
    glass: 'bg-white/5 backdrop-blur-md border border-white/10',
    bordered: 'bg-slate-900/80 border-2 border-purple-500/30'
  };
  
  return (
    <div className={`rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
