import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { AnimatedSection } from '../common/AnimatedSection';
import type { Experience } from '../../types';
import { Briefcase, Calendar, MapPin, ChevronRight, Folder, ExternalLink, GraduationCap } from 'lucide-react';

interface TimelineProps {
  experiences: Experience[];
}

export const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 50%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <AnimatedSection id="experience" className="py-24 relative bg-[#0b0b0c]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono-code text-[#88EC11] tracking-widest uppercase mb-2 font-semibold">
            // 04. Career & Academic Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Professional <span className="text-[#88EC11]">Experience & Education</span>
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mt-3 font-jakarta">
            Academic degree studies, corporate banking internship experience, and freelance graphic design & video editing work.
          </p>
          <div className="w-20 h-1 bg-[#88EC11] rounded-full mt-4" />
        </div>

        {/* Vertical Timeline Container */}
        <div ref={containerRef} className="relative pl-10 sm:pl-14 space-y-12 ml-1 sm:ml-2">
          
          {/* Base vertical connector line with smooth top & bottom gradient fade */}
          <div 
            className="absolute left-[15px] sm:left-[23px] top-3 bottom-3 w-[2px] pointer-events-none z-0"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.15) 10%, rgba(255, 255, 255, 0.15) 90%, transparent 100%)'
            }}
          />

          {/* Scroll-revealed active accent line */}
          <motion.div
            style={{
              scaleY,
              transformOrigin: 'top',
              background: 'linear-gradient(to bottom, transparent 0%, rgba(136, 236, 17, 0.85) 10%, rgba(136, 236, 17, 0.85) 90%, transparent 100%)',
              boxShadow: '0 0 10px rgba(136, 236, 17, 0.5)'
            }}
            className="absolute left-[15px] sm:left-[23px] top-3 bottom-3 w-[2px] pointer-events-none z-0"
          />

          {/* Continuous animated flowing light pulse */}
          <div className="absolute left-[15px] sm:left-[23px] top-3 bottom-3 w-[2px] overflow-hidden pointer-events-none z-0">
            <motion.div
              animate={{ y: ['-100%', '350%'] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="w-full h-36 bg-gradient-to-b from-transparent via-[#88EC11] to-transparent shadow-[0_0_12px_#88EC11] opacity-90"
            />
          </div>

          {/* Node 1: Education (University of Kelaniya) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            {/* Consistent Timeline Indicator Node */}
            <div className="absolute left-[-25px] sm:left-[-33px] top-2 -translate-x-1/2 w-7 h-7 rounded-full border-2 border-[#88EC11] bg-[#0b0b0c] shadow-[0_0_14px_rgba(136,236,17,0.5)] flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-125">
              <div className="w-2.5 h-2.5 rounded-full bg-[#88EC11] shadow-[0_0_8px_#88EC11]" />
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#88EC11]/30 bg-[#18181c] group-hover:border-[#88EC11]/50 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <span className="text-xs font-mono-code text-[#88EC11] font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-[#88EC11]" />
                    University of Kelaniya
                  </span>
                  <h3 className="text-xl font-extrabold text-white font-kumbh mt-1">
                    BSc (Hons) in IT — Industrial Management
                  </h3>
                </div>
                <span className="flex items-center gap-1.5 bg-[#88EC11]/10 px-3 py-1 rounded-full border border-[#88EC11]/30 text-[#88EC11] text-xs font-mono-code font-bold w-fit">
                  <Calendar className="w-3.5 h-3.5" />
                  Ongoing Undergraduate
                </span>
              </div>
              <p className="text-sm text-slate-300 font-jakarta leading-relaxed">
                Focusing on software engineering, industrial management IT applications, cybersecurity principles, database management systems, and low-level game development in C++.
              </p>
            </div>
          </motion.div>

          {/* Nodes 2 & 3: Work Experiences (Bank Internship & Freelance) */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.15 }}
              className="relative group"
            >
              {/* Consistent Timeline Indicator Node */}
              <div className="absolute left-[-25px] sm:left-[-33px] top-2 -translate-x-1/2 w-7 h-7 rounded-full border-2 border-[#88EC11] bg-[#0b0b0c] shadow-[0_0_14px_rgba(136,236,17,0.5)] flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-125">
                <div className="w-2.5 h-2.5 rounded-full bg-[#88EC11] shadow-[0_0_8px_#88EC11]" />
              </div>

              {/* Card Container */}
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 group-hover:border-[#88EC11]/40 transition-all bg-[#18181c]">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-mono-code text-[#88EC11] font-semibold tracking-wide flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#88EC11]" />
                      {exp.company}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 font-kumbh">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono-code text-slate-400">
                    <span className="flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-[#88EC11]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 hidden sm:flex">
                      <MapPin className="w-3.5 h-3.5 text-[#88EC11]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 mb-4 leading-relaxed font-jakarta">
                  {exp.description}
                </p>

                {/* Key Bullet Highlights */}
                <ul className="space-y-2 mb-6">
                  {exp.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-jakarta">
                      <ChevronRight className="w-4 h-4 text-[#88EC11] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {exp.techUsed.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono-code bg-[#88EC11]/10 border border-[#88EC11]/30 text-[#88EC11] px-2.5 py-1 rounded-md font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Optional Google Drive Archive Button */}
                {exp.driveUrl && (
                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center">
                    <a
                      href={exp.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-5 py-2.5 text-xs font-mono-code font-bold uppercase rounded-full bg-[#88EC11] text-[#0b0b0c] shadow-lg shadow-[#88EC11]/20 hover:bg-[#70E000] transition-all"
                    >
                      <Folder className="w-4 h-4 text-[#0b0b0c]" />
                      <span>View Graphic & Video Works Archive (Google Drive)</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1 text-[#0b0b0c]" />
                    </a>
                  </div>
                )}

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </AnimatedSection>
  );
};
