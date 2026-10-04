import React from 'react';
import { Code2, ArrowUp, Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <footer className="bg-[#05070a] border-t border-white/10 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-violet-600 p-[1px]">
                <div className="w-full h-full bg-[#07090e] rounded-[7px] flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-extrabold text-lg text-white font-sans">
                ITZFIZZ
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pioneering next-generation scroll-driven web experiences, creative frontend engineering, and high-performance digital solutions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400">Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded">
                  About Itzfizz
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded">
                  Services & Expertise
                </a>
              </li>
              <li>
                <a href="#work" onClick={(e) => handleNavClick(e, '#work')} className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded">
                  Client Work
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleNavClick(e, '#process')} className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded">
                  Agency Process
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Stack */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400">Tech Stack</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-mono">
              <li>React.js (v18)</li>
              <li>Vite Build System</li>
              <li>GSAP & ScrollTrigger</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          {/* Col 4: Assignment Info & Back to Top */}
          <div className="space-y-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">Assignment</h4>
              <p className="text-xs text-slate-400">
                Web Development Internship Evaluation <br />
                <strong>Itzfizz Digital</strong>
              </p>
            </div>
            <button
              onClick={scrollToTop}
              className="self-start inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/50 text-xs text-slate-300 hover:text-white transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <p>© {new Date().getFullYear()} ITZFIZZ DIGITAL. Built for Web Development Internship.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for Itzfizz Digital Evaluation
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
