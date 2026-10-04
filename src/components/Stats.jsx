import React from 'react';
import { Zap, Sparkles, TrendingUp } from 'lucide-react';

const statsData = [
  {
    value: '98%',
    label: 'Performance',
    subtext: 'Blazing fast load times & 99+ Lighthouse metrics',
    icon: Zap,
    accent: 'from-cyan-500 to-blue-500',
    glow: 'group-hover:shadow-glow-cyan'
  },
  {
    value: '95%',
    label: 'Creativity',
    subtext: 'Bespoke scroll-driven interactive experiences',
    icon: Sparkles,
    accent: 'from-violet-500 to-purple-500',
    glow: 'group-hover:shadow-glow-violet'
  },
  {
    value: '90%',
    label: 'Satisfaction',
    subtext: 'Enterprise client growth & retention rate',
    icon: TrendingUp,
    accent: 'from-emerald-500 to-teal-500',
    glow: 'group-hover:shadow-emerald-500/25'
  }
];

const Stats = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="w-full max-w-5xl mx-auto px-4 mt-8 sm:mt-12 lg:mt-16 z-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {statsData.map((stat, idx) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={idx}
              className={`stat-card group relative p-5 sm:p-6 rounded-2xl glass-card hover:bg-white/[0.04] transition-all duration-300 transform hover:-translate-y-1 ${stat.glow}`}
            >
              {/* Top ambient highlight line */}
              <div className={`absolute top-0 inset-x-6 h-[2px] bg-gradient-to-r ${stat.accent} rounded-full opacity-60 group-hover:opacity-100 transition-opacity`} />
              
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-white group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </span>
                <div className={`p-2 rounded-xl bg-gradient-to-br ${stat.accent} bg-opacity-10 text-white/90`}>
                  <IconComponent className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-bold text-slate-100 tracking-wide">
                  {stat.label}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

Stats.displayName = 'Stats';

export default Stats;
