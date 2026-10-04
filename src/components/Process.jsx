import React, { useRef, useLayoutEffect } from 'react';
import { Search, Layout, Sparkles, Rocket } from 'lucide-react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../utils/gsapHelpers';

const steps = [
  {
    number: '01',
    title: 'Discovery & UX Alignment',
    description: 'We analyze target user flows, conversion funnels, and brand identity to lay out a bulletproof strategy.',
    icon: Search,
    accent: 'text-cyan-400'
  },
  {
    number: '02',
    title: 'System Architecture',
    description: 'Clean modular component hierarchies built with React, Vite, Tailwind CSS, and strict state boundaries.',
    icon: Layout,
    accent: 'text-blue-400'
  },
  {
    number: '03',
    title: 'Scroll & Creative Motion',
    description: 'We orchestrate GSAP timelines and ScrollTrigger scrub mechanics with hardware-accelerated transforms.',
    icon: Sparkles,
    accent: 'text-violet-400'
  },
  {
    number: '04',
    title: 'Production & Global Scale',
    description: 'Automated CI/CD deployment pipelines, Lighthouse 99+ auditing, and instant CDN propagation.',
    icon: Rocket,
    accent: 'text-emerald-400'
  }
];

const Process = () => {
  const processRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const stepItems = processRef.current.querySelectorAll('.process-step');

      gsap.fromTo(
        stepItems,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: processRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, processRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={processRef} className="py-24 sm:py-32 relative bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
            // HOW WE BUILD
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our 4-Step Production Workflow
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            From raw concept to liquid-smooth scroll interaction.
          </p>
        </div>

        {/* Workflow Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="process-step group p-6 rounded-2xl glass-card border border-white/10 hover:border-white/20 transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-3xl font-extrabold font-mono ${step.accent}`}>
                      {step.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Phase {step.number} Complete</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;
