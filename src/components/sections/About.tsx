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
    <AnimatedSection id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-code mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest">// 01. About Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-kumbh leading-tight">
            Engineering Precision Meets <span className="text-gradient-cyan">Creative Vision</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-4" />
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Profile Interactive Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative w-full max-w-md glass-card rounded-3xl p-6 border border-white/10 shadow-2xl group overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />
              
              {/* Profile Image Wrapper */}
              <div className="relative rounded-2xl overflow-hidden mb-6 aspect-square bg-[#0e0e1a] border border-white/10 flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
                <img
                  src={profile.avatarUrl || '/EAF02513.jpg'}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a10] via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono-code text-slate-300">
                  <span className="flex items-center gap-1 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    {profile.location}
                  </span>
                  <span className="flex items-center gap-1 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    IT Undergraduate
                  </span>
                </div>
              </div>

              {/* Education Highlight Badge */}
              <div className="mb-4 p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-purple-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white font-kumbh">University of Kelaniya</span>
                  <span className="text-[11px] font-mono-code text-purple-300">BSc (Hons) in IT — Industrial Management</span>
                </div>
              </div>

              {/* Quick Info */}
              <h3 className="text-2xl font-bold text-white mb-1 font-kumbh">{profile.name}</h3>
              <p className="text-xs font-mono-code text-cyan-400 mb-4">{profile.title}</p>
              <p className="text-sm text-slate-300 leading-relaxed mb-4 font-jakarta">
                {profile.resumeSummary}
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-xs font-mono-code text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{profile.email}</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Detailed Narrative & Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5 font-kumbh">
                <Code2 className="w-6 h-6 text-cyan-400" />
                <span>My Engineering & Creative Philosophy</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-jakarta">
                I focus on building functional web and interactive applications that pair strong visual aesthetics with clean backend logic. By bridging graphic design, video editing, and software development, I create intuitive user experiences grounded in continuous technical growth across programming languages and modern cybersecurity frameworks.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-sm font-kumbh">Cyber Security Focus</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-jakarta">
                  Conducting security assessments, analyzing network vulnerabilities, and studying defensive cybersecurity principles.
                </p>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-sm font-kumbh">Continuous Learning</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-jakarta">
                  Actively expanding technical skills in Java, C++, SQL databases, and game engine mechanics.
                </p>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
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

