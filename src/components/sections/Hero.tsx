import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, ChevronDown, Terminal, Download, Sparkles } from 'lucide-react';
import type { Profile } from '../../types';
import { generateResumePdf } from '../../utils/generateResumePdf';

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
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-transparent">
      {/* Background Neon Green Ambient Glow Orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#88EC11]/15 via-[#70E000]/10 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Availability Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#88EC11]/10 border border-[#88EC11]/40 text-[#88EC11] text-xs font-mono-code mb-8 backdrop-blur-md shadow-lg shadow-[#88EC11]/15"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#88EC11] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#88EC11]"></span>
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#88EC11]" />
          <span>Available for New Projects & Freelance Engineering</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 leading-[1.08] font-kumbh"
        >
          Hi, I'm <span className="text-[#88EC11] drop-shadow-[0_0_25px_rgba(136,236,17,0.4)]">{profile.name}</span>
        </motion.h1>

        {/* Animated Word-Cycle / Typewriter Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-12 sm:h-16 flex items-center justify-center mb-8"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-mono-code font-medium text-slate-300 flex items-center gap-2">
            <Terminal className="w-6 h-6 text-[#88EC11] shrink-0" />
            <motion.span
              key={taglineIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-[#88EC11] font-bold"
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
          className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-10 font-jakarta"
        >
          {profile.bio}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-xl bg-[#88EC11] text-[#0b0b0c] font-black text-sm tracking-wide shadow-xl shadow-[#88EC11]/30 hover:bg-[#70E000] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group"
          >
            <span>View Featured Work</span>
            <ArrowRight className="w-4 h-4 text-[#0b0b0c] group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenChat}
            className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm border border-white/10 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
          >
            <Bot className="w-4 h-4 text-[#88EC11]" />
            <span>Chat with My AI</span>
          </button>

          <button
            onClick={generateResumePdf}
            className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-bold text-sm border border-white/10 flex items-center justify-center gap-2 transition-all hover:scale-105"
          >
            <Download className="w-4 h-4 text-[#88EC11]" />
            <span>Get Resume</span>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 0.8 }, y: { repeat: Infinity, duration: 2 } }}
          className="inline-flex flex-col items-center text-slate-400 hover:text-[#88EC11] transition-colors"
        >
          <span className="text-xs font-mono-code tracking-widest uppercase mb-2">Scroll Down</span>
          <ChevronDown className="w-5 h-5 text-[#88EC11]" />
        </motion.a>

      </div>
    </section>
  );
};
