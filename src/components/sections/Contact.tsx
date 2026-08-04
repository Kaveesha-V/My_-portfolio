import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../common/AnimatedSection';
import type { Profile } from '../../types';
import { sendContactMessage } from '../../lib/supabase';
import confetti from 'canvas-confetti';
import { Mail, Send, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../common/Icons';

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

    const result = await sendContactMessage(formData);

    setLoading(false);
    if (result.success) {
      setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Trigger celebratory confetti effect
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00f0ff', '#8a2be2', '#10b981'],
        });
      } catch (e) {
        // Fallback silently if confetti fails
      }
    } else {
      setStatus({ type: 'error', message: result.error || 'Failed to send message. Please try again.' });
    }
  };

  return (
    <AnimatedSection id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono-code text-cyan-400 tracking-widest uppercase mb-2">
            // 05. Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Let's Build Something <span className="text-gradient-cyan">Exceptional</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mt-3">
            Have a project in mind, want to hire an engineer, or explore collaboration? Drop me a line below!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Direct Contact & Social Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Direct Email</h3>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-xs font-mono-code text-cyan-400 hover:underline"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Response time is typically within 24 hours. For urgent technical consulting or hiring inquiries, feel free to reach out directly.
              </p>
            </div>

            {/* Social Channels */}
            <div className="glass-card p-8 rounded-3xl border border-white/10">
              <h3 className="font-bold text-white text-base mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Connect & Follow</span>
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-950/20 transition-all group"
                >
                  <GithubIcon className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono-code">GitHub</span>
                </a>

                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-950/20 transition-all group"
                >
                  <LinkedinIcon className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono-code">LinkedIn</span>
                </a>

                <a
                  href={profile.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-950/20 transition-all group"
                >
                  <TwitterIcon className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono-code">Twitter</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl border border-white/10 space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono-code text-slate-300 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Connor"
                    required
                    className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-slate-300 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. sarah@domain.com"
                    required
                    className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-code text-slate-300 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Full-Stack Role / AI Project Collaboration"
                  className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code text-slate-300 uppercase tracking-wider mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or goal..."
                  required
                  className="w-full px-4 py-3 rounded-xl glass-input text-sm resize-none"
                />
              </div>

              {/* Status Toast Notification */}
              <AnimatePresence>
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-xl flex items-center gap-3 text-xs font-mono-code ${status.type === 'success'
                        ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-300'
                        : 'bg-rose-950/60 border border-rose-500/40 text-rose-300'
                      }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
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
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold text-sm tracking-wide shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </AnimatedSection>
  );
};
