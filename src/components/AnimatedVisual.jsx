import React, { forwardRef } from 'react';
import { ShieldCheck, Cpu, Code2, Activity, Zap, Layers, Sparkles, Terminal, Play, LineChart } from 'lucide-react';

const AnimatedVisual = forwardRef(({ floatingRefs }, ref) => {
  const { card1Ref, card2Ref, card3Ref, card4Ref, browserRef, glowRef } = floatingRefs;

  return (
    <div
      ref={ref}
      className="relative w-full max-w-5xl mx-auto my-6 sm:my-10 perspective-1000 z-10 px-4 select-none"
    >
      {/* Background Ambient Radial Glow */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-cyan-500/20 via-violet-600/20 to-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10 transition-transform duration-700"
      />

      {/* Main 3D Container */}
      <div className="relative w-full preserve-3d flex items-center justify-center">
        
        {/* Floating Card 1 - Top Left: Performance Monitor */}
        <div
          ref={card1Ref}
          className="absolute -top-8 -left-2 sm:-top-12 sm:-left-10 z-30 p-3 sm:p-4 rounded-2xl glass-panel border border-white/10 shadow-2xl backdrop-blur-xl w-48 sm:w-64 transform -rotate-6 transition-all duration-300 pointer-events-auto hover:border-cyan-500/50"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-[11px] font-mono text-cyan-300 uppercase font-semibold">FPS Monitor</span>
            </div>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              99.8 FPS
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl font-extrabold text-white">0.4ms</span>
            <span className="text-[11px] text-slate-400">Frame Latency</span>
          </div>
          {/* Simulated Wave SVG */}
          <div className="mt-2 h-8 w-full">
            <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
              <path
                d="M0 20 Q 25 5, 50 18 T 100 10 L 100 30 L 0 30 Z"
                fill="url(#cyan-grad)"
                opacity="0.3"
              />
              <path
                d="M0 20 Q 25 5, 50 18 T 100 10"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="2.5"
              />
              <defs>
                <linearGradient id="cyan-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Floating Card 2 - Top Right: Real-time Code Engine */}
        <div
          ref={card2Ref}
          className="absolute -top-10 -right-2 sm:-top-14 sm:-right-10 z-30 p-3 sm:p-4 rounded-2xl glass-panel border border-white/10 shadow-2xl backdrop-blur-xl w-52 sm:w-72 transform rotate-6 transition-all duration-300 pointer-events-auto hover:border-violet-500/50"
        >
          <div className="flex items-center gap-2 mb-2 pb-1 border-b border-white/5">
            <Terminal className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-[11px] font-mono text-slate-300 font-medium">engine.config.js</span>
          </div>
          <pre className="text-[10px] sm:text-[11px] font-mono text-slate-300 leading-tight">
            <span className="text-purple-400">const</span> <span className="text-cyan-300">Itzfizz</span> = <span className="text-yellow-300">new</span> <span className="text-blue-400">ScrollTrigger</span>({`{\n`}
            &nbsp;&nbsp;scrub: <span className="text-emerald-400">1.5</span>,<br />
            &nbsp;&nbsp;smoothness: <span className="text-emerald-400">"100%"</span>,<br />
            &nbsp;&nbsp;performance: <span className="text-cyan-300">true</span><br />
            {`}`});
          </pre>
        </div>

        {/* Core Main Browser Window Mockup */}
        <div
          ref={browserRef}
          className="w-full rounded-2xl bg-[#090d16] border border-white/15 shadow-2xl shadow-cyan-950/40 overflow-hidden transform transition-shadow duration-500"
        >
          {/* Top Browser Header Bar */}
          <div className="h-10 sm:h-12 bg-[#0d121f] border-b border-white/10 px-4 flex items-center justify-between">
            {/* Window Dots */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/30" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/30" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/30" />
            </div>

            {/* Address Bar */}
            <div className="flex-1 max-w-xs sm:max-w-md mx-4 bg-[#06080e] border border-white/10 rounded-lg px-3 py-1 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="truncate flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                https://itzfizz.digital/scroll-engine
              </span>
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
            </div>

            {/* Live Indicator */}
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                SCROLL ACTIVE
              </span>
            </div>
          </div>

          {/* Browser Workspace Canvas */}
          <div className="p-4 sm:p-8 bg-gradient-to-b from-[#0a0e19] to-[#06080e] relative min-h-[260px] sm:min-h-[360px] flex flex-col justify-between overflow-hidden">
            
            {/* Top Row: System Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col">
                <span className="text-[10px] font-mono text-slate-400 uppercase">GPU Acceleration</span>
                <span className="text-base sm:text-lg font-bold text-white mt-1">DirectX / WebGL</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Motion Velocity</span>
                <span className="text-base sm:text-lg font-bold text-cyan-400 mt-1">60.00 FPS</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Memory Footprint</span>
                <span className="text-base sm:text-lg font-bold text-violet-400 mt-1">12.4 MB</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Viewport Status</span>
                <span className="text-base sm:text-lg font-bold text-emerald-400 mt-1">Interactive</span>
              </div>
            </div>

            {/* Central Visual Interactive Dashboard Graphic */}
            <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-slate-900/50 to-violet-950/30 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden">
              {/* Decorative background grid */}
              <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

              <div className="space-y-2 relative z-10 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>ITZFIZZ CORE ANIMATION FRAMEWORK</span>
                </div>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Scroll-Driven Digital Interface
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                  Experience fluid, hardware-accelerated motion response synchronized with your viewport.
                </p>
              </div>

              {/* Glowing Interactive Circle Widget */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-blue-500 to-violet-600 flex-shrink-0 animate-pulse-glow shadow-glow-cyan">
                <div className="w-full h-full bg-[#080b12] rounded-full flex flex-col items-center justify-center p-2 text-center border border-white/10">
                  <Activity className="w-6 h-6 text-cyan-400 animate-bounce mb-1" />
                  <span className="text-xs font-extrabold text-white font-mono">LIVE SCROLL</span>
                  <span className="text-[9px] text-slate-400">GSAP ScrollTrigger</span>
                </div>
              </div>
            </div>

            {/* Bottom Status Bar inside Browser */}
            <div className="mt-6 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/5 pt-3">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  System Operational
                </span>
                <span className="hidden sm:inline">Engine: GSAP v3.12+</span>
              </div>
              <span className="text-cyan-400">Scroll to Explore ↓</span>
            </div>

          </div>
        </div>

        {/* Floating Card 3 - Bottom Left: Active Nodes */}
        <div
          ref={card3Ref}
          className="absolute -bottom-8 -left-2 sm:-bottom-12 sm:-left-8 z-30 p-3 sm:p-4 rounded-2xl glass-panel border border-white/10 shadow-2xl backdrop-blur-xl w-48 sm:w-60 transform rotate-3 transition-all duration-300 pointer-events-auto hover:border-emerald-500/50"
        >
          <div className="flex items-center gap-2 mb-1">
            <Cpu className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold text-white">Digital Nodes</span>
          </div>
          <p className="text-xs text-slate-400 mb-2">1,024 Distributed Edge Nodes</p>
          <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-full w-[88%] rounded-full" />
          </div>
        </div>

        {/* Floating Card 4 - Bottom Right: User Engagement */}
        <div
          ref={card4Ref}
          className="absolute -bottom-10 -right-2 sm:-bottom-14 sm:-right-8 z-30 p-3 sm:p-4 rounded-2xl glass-panel border border-white/10 shadow-2xl backdrop-blur-xl w-52 sm:w-64 transform -rotate-3 transition-all duration-300 pointer-events-auto hover:border-cyan-500/50"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <LineChart className="w-4 h-4 text-cyan-400" />
              Growth Metric
            </span>
            <span className="text-[10px] text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-full">
              +142.8%
            </span>
          </div>
          <p className="text-[11px] text-slate-400">Conversion & User Engagement</p>
        </div>

      </div>
    </div>
  );
});

AnimatedVisual.displayName = 'AnimatedVisual';

export default AnimatedVisual;
