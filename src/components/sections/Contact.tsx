import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../common/AnimatedSection';
import type { Profile } from '../../types';
import { sendContactMessage } from '../../lib/supabase';
import confetti from 'canvas-confetti';
import { Mail, Send, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../common/Icons';

interface ContactProps {
  profile: Profile;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const result = await sendContactMessage(formData);
      setLoading(false);
      if (result.success) {
        setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#88ec11', '#70e000', '#ffffff'],
        });
      } else {
        setStatus({ type: 'error', message: result.error || 'Failed to send message. Please try again.' });
      }
    } catch {
      setLoading(false);
      setStatus({ type: 'error', message: 'An unexpected error occurred. Please try again.' });
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0b0b0c]">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#88EC11]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#88EC11]/10 border border-[#88EC11]/30 text-[#88EC11] text-xs font-mono-code mb-4">
            <Sparkles className="w-4 h-4 text-[#88EC11]" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-outfit">
            Let's Build Something <span className="text-[#88EC11] drop-shadow-[0_0_20px_rgba(136,236,17,0.35)]">Extraordinary</span>
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-sm sm:text-base font-jakarta">
            Have a project, security audit requirement, or collaboration in mind? Feel free to send a message or connect directly.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Direct Contact & Social Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col gap-6 bg-[#18181c]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#88EC11]/15 border border-[#88EC11]/30 flex items-center justify-center text-[#88EC11]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg font-kumbh">Direct Email</h3>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-xs font-mono-code text-[#88EC11] hover:underline font-semibold"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-jakarta">
                Response time is typically within 24 hours. For urgent technical consulting or hiring inquiries, feel free to reach out directly.
              </p>
            </div>

            {/* Social Channels */}
            <div className="glass-card p-8 rounded-3xl border border-white/10 bg-[#18181c]">
              <h3 className="font-bold text-white text-base mb-4 flex items-center gap-2 font-kumbh">
                <Sparkles className="w-4 h-4 text-[#88EC11]" />
                <span>Connect & Follow</span>
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all group"
                >
                  <GithubIcon className="w-6 h-6 mb-2 text-slate-200 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono-code font-bold">GitHub</span>
                </a>

                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-[#0A66C2] hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/15 hover:shadow-[0_0_20px_rgba(10,102,194,0.4)] transition-all group"
                >
                  <LinkedinIcon className="w-6 h-6 mb-2 group-hover:scale-110 group-hover:text-[#0A66C2] transition-all" />
                  <span className="text-[10px] font-mono-code font-bold group-hover:text-[#0A66C2]">LinkedIn</span>
                </a>

                <a
                  href={profile.socials.whatsapp || 'https://wa.me/94765502806'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-[#25D366] hover:border-[#25D366]/60 hover:bg-[#25D366]/15 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all group"
                  title="Connect & Follow on WhatsApp (0765502806)"
                >
                  <WhatsappIcon className="w-6 h-6 mb-2 text-emerald-400 group-hover:scale-110 group-hover:text-[#25D366] transition-all" />
                  <span className="text-[10px] font-mono-code font-bold group-hover:text-[#25D366]">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl border border-white/10 space-y-6 bg-[#18181c]">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono-code text-slate-300 uppercase tracking-wider mb-2 font-bold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Connor"
                    required
                    className="w-full px-4 py-3 rounded-xl glass-input text-sm font-jakarta"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-slate-300 uppercase tracking-wider mb-2 font-bold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. sarah@domain.com"
                    required
                    className="w-full px-4 py-3 rounded-xl glass-input text-sm font-jakarta"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-code text-slate-300 uppercase tracking-wider mb-2 font-bold">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Cybersecurity Audit / Full-Stack Project Collaboration"
                  className="w-full px-4 py-3 rounded-xl glass-input text-sm font-jakarta"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code text-slate-300 uppercase tracking-wider mb-2 font-bold">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or goal..."
                  required
                  className="w-full px-4 py-3 rounded-xl glass-input text-sm resize-none font-jakarta"
                />
              </div>

              {/* Status Toast Notification */}
              <AnimatePresence>
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-xl flex items-center gap-3 text-xs font-mono-code ${
                      status.type === 'success'
                        ? 'bg-[#88EC11]/15 border border-[#88EC11]/40 text-[#88EC11]'
                        : 'bg-rose-950/60 border border-rose-500/40 text-rose-300'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 text-[#88EC11] shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    )}
                    <span>{status.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-[#88EC11] text-[#0b0b0c] font-black text-sm tracking-wide shadow-xl shadow-[#88EC11]/30 hover:bg-[#70E000] hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-[#0b0b0c] border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#0b0b0c]" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
