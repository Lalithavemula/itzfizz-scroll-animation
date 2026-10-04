import React, { useRef, useLayoutEffect, useState } from 'react';
import { ArrowUpRight, Sparkles, Mail, MessageSquare, Calendar, Clock, CheckCircle2, User, Send, RefreshCw } from 'lucide-react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../utils/gsapHelpers';

const CTA = () => {
  const ctaRef = useRef(null);
  const formRef = useRef(null);

  // Form mode: 'inquiry' | 'discovery'
  const [formMode, setFormMode] = useState('inquiry');

  // Form input state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    preferredDate: '',
    preferredTime: '10:00 AM',
    message: ''
  });

  // Submission feedback state
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ctaRef.current,
        { scale: 0.96, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, ctaRef);

    return () => ctx.revert();
  }, []);

  const handleModeChange = (mode) => {
    setFormMode(mode);
    setSubmitted(false);
    setTimeout(() => {
      const nameInput = document.getElementById('contact-name');
      if (nameInput) {
        nameInput.focus();
      }
    }, 100);
  };

  const handleScrollToForm = (e, mode) => {
    e.preventDefault();
    setFormMode(mode);
    setSubmitted(false);

    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setTimeout(() => {
      const nameInput = document.getElementById('contact-name');
      if (nameInput) {
        nameInput.focus();
      }
    }, 400);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate small UI state delay for realistic feel
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      preferredDate: '',
      preferredTime: '10:00 AM',
      message: ''
    });
    setSubmitted(false);
  };

  // Get tomorrow's date formatted for min date attribute
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-[#07090e] px-4">
      <div
        ref={ctaRef}
        className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-b from-[#0d121f] to-[#080b12] border border-white/15 p-6 sm:p-12 lg:p-16 relative overflow-hidden text-center shadow-2xl shadow-cyan-950/20"
      >
        {/* Ambient Glows */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-violet-600/20 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>START YOUR DIGITAL TRANSFORMATION</span>
          </div>

          <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Let's Build Something <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500">
              Remarkable Together.
            </span>
          </h2>

          <p className="text-sm sm:text-lg text-slate-300 max-w-xl mx-auto font-normal">
            Whether you need a scroll-driven hero section, an enterprise Web app, or an AI-powered platform, Itzfizz is ready to engineer your vision.
          </p>

          {/* Action Trigger Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact-form"
              onClick={(e) => handleScrollToForm(e, 'inquiry')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-bold text-sm flex items-center justify-center gap-2 hover:shadow-glow-cyan hover:scale-[1.02] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07090e]"
            >
              <Mail className="w-4 h-4" />
              <span>Initiate Query</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={(e) => handleScrollToForm(e, 'discovery')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.05] border border-white/10 hover:border-white/20 text-slate-200 hover:text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07090e]"
            >
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>Schedule Discovery Call</span>
            </button>
          </div>
        </div>

        {/* Embedded Accessible Contact & Scheduling Form */}
        <div ref={formRef} id="contact-form" className="mt-12 pt-10 border-t border-white/10 max-w-2xl mx-auto text-left relative z-10">
          
          {/* Mode Switcher Tabs */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <button
              type="button"
              onClick={() => handleModeChange('inquiry')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all ${
                formMode === 'inquiry'
                  ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300 shadow-glow-cyan'
                  : 'bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white'
              } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Project Inquiry</span>
            </button>
            <button
              type="button"
              onClick={() => handleModeChange('discovery')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all ${
                formMode === 'discovery'
                  ? 'bg-violet-500/20 border border-violet-400 text-violet-300 shadow-glow-violet'
                  : 'bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white'
              } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Schedule Discovery Call</span>
            </button>
          </div>

          {/* Confirmation Success Alert */}
          {submitted ? (
            <div
              role="region"
              aria-live="polite"
              className="p-6 sm:p-8 rounded-2xl glass-panel border border-emerald-500/30 bg-emerald-950/20 text-center space-y-4 animate-in fade-in duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {formMode === 'discovery' ? 'Discovery Call Request Recorded!' : 'Inquiry Received!'}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                Thank you, <strong className="text-white">{formData.name}</strong>! Your request for{' '}
                {formMode === 'discovery' && formData.preferredDate ? (
                  <span className="text-cyan-300 font-mono">{formData.preferredDate} at {formData.preferredTime}</span>
                ) : (
                  'a project discussion'
                )}{' '}
                has been captured locally.
              </p>
              <p className="text-xs text-slate-400 font-mono bg-white/[0.03] p-3 rounded-lg border border-white/5">
                (Frontend demo confirmation — no backend server connected).
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold inline-flex items-center gap-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Submit Another Request</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name Field */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 uppercase mb-2">
                    Full Name <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Alex Morgan"
                      className="w-full bg-[#06080e] border border-white/15 rounded-xl px-4 py-3 pl-10 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-all"
                    />
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  </div>
                </div>

                {/* Email Address Field */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 uppercase mb-2">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full bg-[#06080e] border border-white/15 rounded-xl px-4 py-3 pl-10 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-all"
                    />
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  </div>
                </div>
              </div>

              {/* Conditional Discovery Call Fields (Preferred Date & Time) */}
              {formMode === 'discovery' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-4 rounded-xl bg-violet-950/20 border border-violet-500/20">
                  <div>
                    <label htmlFor="contact-date" className="block text-xs font-mono text-violet-300 uppercase mb-2">
                      Preferred Date <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="contact-date"
                        name="preferredDate"
                        type="date"
                        min={getMinDate()}
                        required={formMode === 'discovery'}
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full bg-[#06080e] border border-white/15 rounded-xl px-4 py-3 pl-10 text-sm text-white focus:border-violet-400 focus:ring-1 focus:ring-violet-400 focus:outline-none transition-all"
                      />
                      <Calendar className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-time" className="block text-xs font-mono text-violet-300 uppercase mb-2">
                      Preferred Time Slot
                    </label>
                    <div className="relative">
                      <select
                        id="contact-time"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full bg-[#06080e] border border-white/15 rounded-xl px-4 py-3 pl-10 text-sm text-white focus:border-violet-400 focus:ring-1 focus:ring-violet-400 focus:outline-none transition-all"
                      >
                        <option value="09:00 AM">09:00 AM EST</option>
                        <option value="11:00 AM">11:00 AM EST</option>
                        <option value="02:00 PM">02:00 PM EST</option>
                        <option value="04:00 PM">04:00 PM EST</option>
                      </select>
                      <Clock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    </div>
                  </div>
                </div>
              )}

              {/* Message / Brief Field */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 uppercase mb-2">
                  {formMode === 'discovery' ? 'Discussion Agenda / Topic *' : 'Project Scope & Requirements *'}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={
                    formMode === 'discovery'
                      ? 'Briefly describe what you would like to cover during the discovery call...'
                      : 'Tell us about your project timeline, goals, and technical requirements...'
                  }
                  className="w-full bg-[#06080e] border border-white/15 rounded-xl p-4 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-all"
                />
              </div>

              {/* Submit Form Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-bold text-sm flex items-center justify-center gap-2 hover:shadow-glow-cyan transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>
                      {formMode === 'discovery' ? 'Confirm Discovery Call Request' : 'Submit Project Inquiry'}
                    </span>
                  </>
                )}
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};

export default CTA;
