import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins safely
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/**
 * Utility to check if user prefers reduced motion
 * @returns {boolean}
 */
export const prefersReducedMotion = () => {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
