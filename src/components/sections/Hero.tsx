import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, ChevronDown, Terminal } from 'lucide-react';
import type { Profile } from '../../types';

interface HeroProps {
  profile: Profile;
  onOpenChat: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenChat }) => {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % profile.animatedTaglines.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [profile.animatedTaglines]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono-code mb-8 backdrop-blur-md shadow-lg shadow-cyan-500/10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span>Available for New Projects & Engineering Leadership</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Hi, I'm <span className="text-gradient-cyan">{profile.name}</span>
        </motion.h1>

        {/* Animated Word-Cycle / Typewriter Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-12 sm:h-16 flex items-center justify-center mb-8"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-mono-code font-medium text-slate-300 flex items-center gap-2">
            <Terminal className="w-6 h-6 text-purple-400 shrink-0" />
            <motion.span
              key={taglineIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-gradient-purple font-semibold"
            >
              {profile.animatedTaglines[taglineIndex]}
            </motion.span>
          </span>
        </motion.div>

        {/* Description Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-10"
        >
          {profile.bio}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold text-sm tracking-wide shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group"
          >
            <span>View Featured Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenChat}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#121224]/80 border border-white/15 text-white font-semibold text-sm hover:border-cyan-400/50 hover:bg-[#181832] transition-all flex items-center justify-center gap-2 group shadow-lg"
          >
            <Bot className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span>Chat with My AI</span>
          </button>
        </motion.div>

        {/* Mini Technical Metrics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          <div className="glass-card p-4 rounded-2xl text-left border border-white/5">
            <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono-code mb-1">
              {profile.stats.yearsExperience}+
            </span>
            <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Years Experience</span>
          </div>

          <div className="glass-card p-4 rounded-2xl text-left border border-white/5">
            <span className="block text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono-code mb-1">
              {profile.stats.projectsCompleted}+
            </span>
            <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Projects Built</span>
          </div>

          <div className="glass-card p-4 rounded-2xl text-left border border-white/5">
            <span className="block text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono-code mb-1">
              {profile.stats.techStackCount}+
            </span>
            <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Tech Stack Count</span>
          </div>

          <div className="glass-card p-4 rounded-2xl text-left border border-white/5">
            <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono-code mb-1">
              100%
            </span>
            <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Dedication & Drive</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors"
        >
          <a href="#about" className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-mono-code uppercase tracking-widest">Scroll Down</span>
            <ChevronDown className="w-5 h-5 animate-bounce text-cyan-400" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
