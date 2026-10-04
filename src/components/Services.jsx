import React, { useRef, useLayoutEffect } from 'react';
import { Code2, Smartphone, Cpu, Megaphone, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../utils/gsapHelpers';

const services = [
  {
    id: '01',
    title: 'Web Development',
    description: 'Bespoke React & Vite applications featuring interactive 3D motion, GSAP animations, and Lighthouse 99+ score optimization.',
    icon: Code2,
    features: ['GSAP & Three.js Integration', 'Headless CMS & APIs', 'SSR & Edge Performance'],
    accent: 'from-cyan-500 to-blue-600',
    border: 'group-hover:border-cyan-500/50'
  },
  {
    id: '02',
    title: 'Mobile Engineering',
    description: 'Native cross-platform mobile apps for iOS and Android with smooth 60fps animations and offline-first architectures.',
    icon: Smartphone,
    features: ['React Native / Flutter', 'Biometric Security', 'Real-time WebSockets'],
    accent: 'from-violet-500 to-purple-600',
    border: 'group-hover:border-violet-500/50'
  },
  {
    id: '03',
    title: 'AI & Machine Learning',
    description: 'Custom AI agents, LLM integrations, predictive analytics dashboards, and automated neural workflow pipelines.',
    icon: Cpu,
    features: ['OpenAI / Gemini APIs', 'Custom RAG Architectures', 'Real-time Data Processing'],
    accent: 'from-emerald-500 to-teal-600',
    border: 'group-hover:border-emerald-500/50'
  },
  {
    id: '04',
    title: 'Digital Brand Strategy',
    description: 'High-impact agency positioning, interactive pitch experiences, UI/UX design systems, and conversion-focused growth engine.',
    icon: Megaphone,
    features: ['Design Systems & Tokens', 'Interactive Prototypes', 'Conversion Optimization'],
    accent: 'from-amber-500 to-rose-600',
    border: 'group-hover:border-amber-500/50'
  }
];

const Services = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const cards = sectionRef.current.querySelectorAll('.service-card');

      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 sm:py-32 relative bg-[#07090e]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 ambient-glow-cyan pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
              // WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Engineering Digital <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-500">
                Excellence & Motion
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md">
            We partner with visionary companies to build high-end web platforms that stand out in crowded digital markets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`service-card group relative p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 ${service.border}`}
              >
                {/* Accent top line */}
                <div className={`absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r ${service.accent} rounded-full opacity-50 group-hover:opacity-100 transition-opacity`} />

                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.accent} p-0.5 shadow-lg`}>
                    <div className="w-full h-full bg-[#07090e] rounded-[14px] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <span className="text-sm font-mono text-slate-500 font-bold">
                    {service.id}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature Checklist */}
                <ul className="space-y-2 pt-4 border-t border-white/5 mb-6">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Card CTA Link */}
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                  <span>Explore Capability</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
