import React, { useRef, useLayoutEffect } from 'react';
import Navbar from './Navbar';
import Stats from './Stats';
import AnimatedVisual from './AnimatedVisual';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../utils/gsapHelpers';
import { ArrowDown, Sparkles, ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const titleContainerRef = useRef(null);
  const subTitleRef = useRef(null);
  const visualRef = useRef(null);
  const statsRef = useRef(null);
  const scrollBadgeRef = useRef(null);

  // Floating elements refs inside AnimatedVisual
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const browserRef = useRef(null);
  const glowRef = useRef(null);

  useLayoutEffect(() => {
    // If reduced motion is enabled, skip complex 3D scroll animations
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // -------------------------------------------------------------
      // 1. Initial Page Load Animation (GSAP Timeline)
      // -------------------------------------------------------------
      const introTl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 1.2 }
      });

      // Split headline letters/words reveal
      if (titleContainerRef.current) {
        const titleElements = titleContainerRef.current.querySelectorAll('.title-part');
        introTl.fromTo(
          titleElements,
          { y: 50, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, stagger: 0.15, duration: 1.1 }
        );
      }

      if (subTitleRef.current) {
        introTl.fromTo(
          subTitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          '-=0.7'
        );
      }

      if (visualRef.current) {
        introTl.fromTo(
          visualRef.current,
          { y: 60, opacity: 0, rotateX: 20 },
          { y: 0, opacity: 1, rotateX: 12, duration: 1.3, ease: 'power2.out' },
          '-=0.8'
        );
      }

      if (statsRef.current) {
        const statCards = statsRef.current.querySelectorAll('.stat-card');
        introTl.fromTo(
          statCards,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15, duration: 0.9 },
          '-=0.9'
        );
      }

      if (scrollBadgeRef.current) {
        introTl.fromTo(
          scrollBadgeRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          '-=0.5'
        );
      }

      // -------------------------------------------------------------
      // 2. Core Feature — Scroll-Driven GSAP ScrollTrigger Animation
      // -------------------------------------------------------------
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2, // Smooth interpolation tied directly to scroll
          pin: false,
          invalidateOnRefresh: true,
        }
      });

      // Sequence 0% -> 100% Scroll Progress:
      
      // Headline & Subtitle fade & float up
      if (titleContainerRef.current) {
        scrollTl.to(titleContainerRef.current, {
          y: -120,
          opacity: 0.15,
          scale: 0.9,
          ease: 'none'
        }, 0);
      }

      if (subTitleRef.current) {
        scrollTl.to(subTitleRef.current, {
          y: -80,
          opacity: 0,
          ease: 'none'
        }, 0);
      }

      // Main Browser Window: Rotates from 12deg tilted perspective to flat parallel & scales up
      if (browserRef.current) {
        scrollTl.to(browserRef.current, {
          rotateX: 0,
          rotateY: 0,
          scale: 1.06,
          y: -40,
          boxShadow: '0 30px 80px rgba(6, 182, 212, 0.35)',
          ease: 'none'
        }, 0);
      }

      // Card 1 (Top Left): Flies outward left & upward with 3D translation
      if (card1Ref.current) {
        scrollTl.to(card1Ref.current, {
          x: -120,
          y: -100,
          rotate: -15,
          scale: 1.1,
          opacity: 0.9,
          ease: 'none'
        }, 0);
      }

      // Card 2 (Top Right): Flies outward right & upward
      if (card2Ref.current) {
        scrollTl.to(card2Ref.current, {
          x: 130,
          y: -110,
          rotate: 15,
          scale: 1.1,
          opacity: 0.9,
          ease: 'none'
        }, 0);
      }

      // Card 3 (Bottom Left): Displaces downward left
      if (card3Ref.current) {
        scrollTl.to(card3Ref.current, {
          x: -110,
          y: 90,
          rotate: 10,
          scale: 1.05,
          opacity: 0.85,
          ease: 'none'
        }, 0);
      }

      // Card 4 (Bottom Right): Displaces downward right
      if (card4Ref.current) {
        scrollTl.to(card4Ref.current, {
          x: 120,
          y: 100,
          rotate: -10,
          scale: 1.05,
          opacity: 0.85,
          ease: 'none'
        }, 0);
      }

      // Ambient Glow expands & intensifies
      if (glowRef.current) {
        scrollTl.to(glowRef.current, {
          scale: 1.4,
          opacity: 0.8,
          ease: 'none'
        }, 0);
      }

      // Stats section smoothly recedes
      if (statsRef.current) {
        scrollTl.to(statsRef.current, {
          y: 50,
          opacity: 0.3,
          ease: 'none'
        }, 0);
      }

    }, heroRef);

    return () => ctx.revert(); // GSAP Clean up on unmount
  }, []);

  return (
    <section
      id="about"
      ref={heroRef}
      className="relative min-h-screen pt-28 sm:pt-36 pb-16 flex flex-col justify-between overflow-hidden bg-grid-pattern"
    >
      <Navbar />

      {/* Top Ambient Glow Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 ambient-glow-cyan pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 ambient-glow-violet pointer-events-none -z-10" />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        
        {/* Subtitle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-cyan-400 text-xs sm:text-sm font-mono mb-6 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>NEXT-GEN SCROLL ANIMATION ENGINE</span>
        </div>

        {/* Main Headline with Spaced Lettering */}
        <div ref={titleContainerRef} className="space-y-2 sm:space-y-4">
          <h1 className="title-part text-4xl sm:text-7xl lg:text-8xl font-black font-sans tracking-hero uppercase text-white leading-tight">
            W E L C O M E
          </h1>
          <h1 className="title-part text-4xl sm:text-7xl lg:text-8xl font-black font-sans tracking-hero uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 leading-tight">
            I T Z F I Z Z
          </h1>
        </div>

        {/* Sub-headline description */}
        <p
          ref={subTitleRef}
          className="mt-6 text-sm sm:text-lg lg:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed px-4"
        >
          Crafting high-performance digital products, interactive scroll experiences, and high-converting agency applications.
        </p>

        {/* Core Animated 3D Visual */}
        <AnimatedVisual
          ref={visualRef}
          floatingRefs={{
            card1Ref,
            card2Ref,
            card3Ref,
            card4Ref,
            browserRef,
            glowRef
          }}
        />

        {/* Statistics Bar */}
        <Stats ref={statsRef} />

      </div>

      {/* Floating Scroll Indicator Badge */}
      <div
        ref={scrollBadgeRef}
        className="mt-12 flex flex-col items-center justify-center gap-2 text-xs font-mono text-slate-400 z-10"
      >
        <span className="tracking-widest uppercase text-[11px] text-cyan-400">SCROLL DOWN TO ANIMATE</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
