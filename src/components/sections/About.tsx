import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../common/AnimatedSection';
import type { Profile } from '../../types';
import { Code2, MapPin, Mail, Sparkles, BookOpen, Palette, GraduationCap, ShieldCheck, Terminal } from 'lucide-react';

interface AboutProps {
  profile: Profile;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <AnimatedSection id="about" className="py-24 relative bg-[#0b0b0c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#88EC11]/10 border border-[#88EC11]/40 text-[#88EC11] text-xs font-mono-code mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest">// 01. About Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-kumbh leading-tight">
            Engineering Precision Meets <span className="text-[#88EC11] drop-shadow-[0_0_20px_rgba(136,236,17,0.35)]">Creative Vision</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#88EC11] to-[#70E000] rounded-full mt-4" />
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Profile Interactive Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative w-full max-w-md glass-card rounded-3xl p-6 border border-white/10 shadow-2xl group overflow-hidden bg-[#18181c]"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#88EC11] via-[#70E000] to-emerald-400" />

              {/* Profile Image Wrapper */}
              <div className="relative rounded-2xl overflow-hidden mb-6 aspect-square bg-[#0b0b0c] border border-white/10 flex items-center justify-center group-hover:border-[#88EC11]/40 transition-colors">
                <img
                  src={profile.avatarUrl || '/profile.jpg'}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs font-mono-code">
                  <span className="profile-overlay-badge flex items-center gap-1.5 bg-[#0b0b0c]/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white font-bold shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-[#88EC11] shrink-0" />
                    <span>{profile.location}</span>
                  </span>
                  <span className="profile-overlay-badge flex items-center gap-1.5 bg-[#0b0b0c]/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white font-bold shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-[#88EC11] shrink-0" />
                    <span>IT Undergraduate</span>
                  </span>
                </div>
              </div>

              {/* Education Highlight Badge */}
              <div className="mb-4 p-3.5 rounded-xl bg-[#88EC11]/10 border border-[#88EC11]/30 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-[#88EC11] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white font-kumbh">University of Kelaniya</span>
                  <span className="text-[11px] font-mono-code text-[#88EC11]">BSc (Hons) in IT — Industrial Management</span>
                </div>
              </div>

              {/* Quick Info */}
              <h3 className="text-2xl font-bold text-white mb-1 font-kumbh">{profile.name}</h3>
              <p className="text-xs font-mono-code text-[#88EC11] mb-4">{profile.title}</p>
              <p className="text-sm text-slate-300 leading-relaxed mb-4 font-jakarta">
                {profile.resumeSummary}
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-xs font-mono-code text-slate-300 hover:text-[#88EC11] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#88EC11]" />
                  <span>{profile.email}</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Detailed Narrative & Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#18181c]">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5 font-kumbh">
                <Code2 className="w-6 h-6 text-[#88EC11]" />
                <span>Technical Profile</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-jakarta">
                I am an IT Undergraduate at the University of Kelaniya with a strong focus on building secure and efficient digital solutions. My technical interests span modern web development, comprehensive cybersecurity practices, and high-performance game development using C++ and Raylib. I complement my engineering background with proven skills in graphic design and video editing, allowing me to create both technically robust and visually compelling user experiences.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col gap-2.5 bg-[#18181c]">
                <div className="w-10 h-10 rounded-xl bg-[#88EC11]/15 flex items-center justify-center text-[#88EC11] border border-[#88EC11]/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-sm font-kumbh">Cyber Security Focus</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-jakarta">
                  Conducting security assessments, analyzing network vulnerabilities, and studying defensive cybersecurity principles.
                </p>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col gap-2.5 bg-[#18181c]">
                <div className="w-10 h-10 rounded-xl bg-[#88EC11]/15 flex items-center justify-center text-[#88EC11] border border-[#88EC11]/30">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-sm font-kumbh">Continuous Learning</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-jakarta">
                  Actively expanding technical skills in Java, C++, SQL databases, and game engine mechanics.
                </p>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col gap-2.5 bg-[#18181c]">
                <div className="w-10 h-10 rounded-xl bg-[#88EC11]/15 flex items-center justify-center text-[#88EC11] border border-[#88EC11]/30">
                  <Palette className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-sm font-kumbh">Graphic Design</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-jakarta">
                  Combining visual design principles, Adobe suite tools, and UI design for impactful multimedia assets.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </AnimatedSection>
  );
};
