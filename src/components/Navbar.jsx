import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', href);

      if (targetId === 'contact') {
        setTimeout(() => {
          const nameInput = document.getElementById('contact-name');
          if (nameInput) {
            nameInput.focus();
          }
        }, 500);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#07090e]/85 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#about"
          onClick={(e) => handleNavClick(e, '#about')}
          className="flex items-center gap-2.5 group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07090e]"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 p-[1px] shadow-glow-cyan transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#07090e] rounded-[11px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-cyan-400 font-sans">
              ITZFIZZ
            </span>
            <span className="text-[10px] tracking-widest text-cyan-400 uppercase font-mono font-medium">
              DIGITAL AGENCY
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] px-4 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07090e]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTA — Let's Talk */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-full group bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-600 group-hover:from-cyan-500 group-hover:to-violet-600 hover:shadow-glow-cyan transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07090e]"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#07090e] rounded-full group-hover:bg-transparent flex items-center gap-2 text-white">
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07090e]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#07090e]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all animate-in slide-in-from-top duration-300 shadow-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-white/[0.05] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
