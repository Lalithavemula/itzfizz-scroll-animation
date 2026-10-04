import React, { useRef, useLayoutEffect } from 'react';
import { ExternalLink, Layers, Award, Shield, Zap } from 'lucide-react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../utils/gsapHelpers';

const projects = [
  {
    title: 'CyberVault Security Dashboard',
    category: 'Fintech & Web3 Interface',
    metric: '4.8M+',
    metricLabel: 'Daily Active Transactions',
    tags: ['React', 'GSAP', 'Tailwind', 'WebSockets'],
    gradient: 'from-blue-600/30 to-cyan-500/30',
    borderGlow: 'hover:border-cyan-500/50'
  },
  {
    title: 'Nexus AI Engine Portal',
    category: 'Enterprise SaaS Experience',
    metric: '99.99%',
    metricLabel: 'Uptime SLA Guaranteed',
    tags: ['Vite', 'Python RAG', 'Canvas 3D', 'Edge API'],
    gradient: 'from-violet-600/30 to-purple-500/30',
    borderGlow: 'hover:border-violet-500/50'
  },
  {
    title: 'Pulse Real-time Analytics',
    category: 'High-Frequency Data Viz',
    metric: '12ms',
    metricLabel: 'Global Latency Benchmark',
    tags: ['Next-Gen JS', 'Tailwind CSS', 'D3.js', 'WebGL'],
    gradient: 'from-emerald-600/30 to-teal-500/30',
    borderGlow: 'hover:border-emerald-500/50'
  }
];

const Impact = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const projectItems = containerRef.current.querySelectorAll('.project-card');

      gsap.fromTo(
        projectItems,
        { scale: 0.95, opacity: 0, y: 40 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={containerRef} className="py-24 sm:py-32 relative bg-[#06080d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>FEATURED CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Measurable Impact Through <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400">
              Precision Frontend Engineering
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Take a look at how we combine scroll-driven animations and robust software architecture to deliver real business growth.
          </p>
        </div>

        {/* Projects Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className={`project-card group rounded-3xl glass-panel p-6 border border-white/10 ${proj.borderGlow} transition-all duration-300 flex flex-col justify-between`}
            >
              {/* Top Banner Graphic Mockup */}
              <div className={`w-full h-44 rounded-2xl bg-gradient-to-tr ${proj.gradient} p-4 border border-white/10 relative overflow-hidden flex flex-col justify-between mb-6 group-hover:scale-[1.02] transition-transform`}>
                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] font-mono text-cyan-300 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    {proj.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
                </div>
                
                {/* Simulated interface wireframe overlay */}
                <div className="space-y-1.5 z-10">
                  <div className="w-2/3 h-3 bg-white/20 rounded-full" />
                  <div className="w-1/2 h-2.5 bg-white/15 rounded-full" />
                </div>

                <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
              </div>

              {/* Project Title & Metric */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-baseline justify-between">
                  <span className="text-2xl font-extrabold text-white font-mono">
                    {proj.metric}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {proj.metricLabel}
                  </span>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono text-slate-300 bg-white/[0.05] border border-white/10 px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Impact;
