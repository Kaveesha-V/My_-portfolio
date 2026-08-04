import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../common/AnimatedSection';
import type { Experience } from '../../types';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

interface TimelineProps {
  experiences: Experience[];
}

export const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  return (
    <AnimatedSection id="experience" className="py-24 relative bg-[#0a0a12]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono-code text-purple-400 tracking-widest uppercase mb-2">
            // 04. Career History
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Professional <span className="text-gradient-purple">Experience</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mt-3">
            Track record of technical leadership, feature execution, and infrastructure optimization.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-white/10 space-y-12 ml-2 sm:ml-4">
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Indicator Node */}
              <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-125 ${
                exp.current
                  ? 'bg-cyan-500 border-cyan-300 shadow-lg shadow-cyan-500/50'
                  : 'bg-[#0a0a12] border-purple-500 text-purple-400'
              }`}>
                <div className={`w-2 h-2 rounded-full ${exp.current ? 'bg-black animate-ping' : 'bg-purple-400'}`} />
              </div>

              {/* Card Container */}
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 group-hover:border-purple-500/30 transition-all">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-mono-code text-cyan-400 font-semibold tracking-wide flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      {exp.company}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono-code text-slate-400">
                    <span className="flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 hidden sm:flex">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Bullet Highlights */}
                <ul className="space-y-2 mb-6">
                  {exp.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {exp.techUsed.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono-code bg-purple-950/40 border border-purple-500/20 text-purple-300 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </AnimatedSection>
  );
};
