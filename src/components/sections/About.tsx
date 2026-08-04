import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../common/AnimatedSection';
import type { Profile } from '../../types';
import { Zap, Code2, MapPin, Mail, Sparkles, BookOpen, Palette } from 'lucide-react';

interface AboutProps {
  profile: Profile;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <AnimatedSection id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono-code text-cyan-400 tracking-widest uppercase mb-2">
            // 01. About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Engineering Precision meets <span className="text-gradient-cyan">Creative Vision</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-4" />
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Profile Interactive Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative w-full max-w-md glass-card rounded-3xl p-6 border border-white/10 shadow-2xl group overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />
              
              {/* Profile Image Wrapper */}
              <div className="relative rounded-2xl overflow-hidden mb-6 aspect-square bg-[#0e0e1a] border border-white/10 flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
                <img
                  src={profile.avatarUrl || '/profile.jpg'}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono-code text-slate-300">
                  <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    {profile.location}
                  </span>
                  <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    IT Student
                  </span>
                </div>
              </div>

              {/* Quick Info */}
              <h3 className="text-xl font-bold text-white mb-1">{profile.name}</h3>
              <p className="text-xs font-mono-code text-cyan-400 mb-4">{profile.title}</p>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
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
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-cyan-400" />
                <span>My Engineering & Creative Philosophy</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I focus on building functional web and mobile applications that pair strong visual aesthetics with clean backend logic. By bridging graphic design, video editing, and software development, I create intuitive user experiences grounded in continuous technical growth across programming languages and modern frameworks.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-card p-5 rounded-2xl border border-white/5 flex flex-col gap-2">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-sm">High Performance & Design</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Crafting responsive web and mobile interfaces that load quickly and look polished. I blend visual design principles with core HTML and web technologies to ensure smooth usability across all device screen sizes.
                </p>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-white/5 flex flex-col gap-2">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-sm">Continuous Learning & Adaptability</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Actively expanding my technical toolkit across Java, C++, SQL, and mobile development. I focus on building core programming fundamentals and applying database concepts to practical, real-world software projects.
                </p>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-white/5 flex flex-col gap-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Palette className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-sm">Visual Communication & UI</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Combining graphic design, video editing, and Canva tools to produce clean UI concepts and engaging multimedia assets. I focus on clear visual hierarchy, aesthetic balance, and user-centered design.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </AnimatedSection>
  );
};
