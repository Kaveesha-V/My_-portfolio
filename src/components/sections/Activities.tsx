import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { AnimatedSection } from '../common/AnimatedSection';
import type { Activity } from '../../types';
import { 
  Music, 
  Users, 
  Sparkles, 
  Video, 
  Activity as ActivityIcon, 
  CheckCircle2, 
  Building2, 
  Calendar,
  Award
} from 'lucide-react';

interface ActivitiesProps {
  activities: Activity[];
}

export const Activities: React.FC<ActivitiesProps> = ({ activities }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNodes, setActiveNodes] = useState<boolean[]>(() => activities.map(() => false));

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 50%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  // Dynamically activate timeline nodes as scroll progresses
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const step = 1 / (activities.length || 1);
    setActiveNodes(activities.map((_, index) => latest >= (index * step * 0.9)));
  });

  const getActivityIcon = (category: string) => {
    switch (category) {
      case 'Music & Performing Arts':
        return <Music className="w-4 h-4 text-[#88EC11]" />;
      case 'Leadership & Rotaract':
        return <Users className="w-4 h-4 text-[#88EC11]" />;
      case 'Event Leadership':
        return <Sparkles className="w-4 h-4 text-[#88EC11]" />;
      case 'Media Production':
        return <Video className="w-4 h-4 text-[#88EC11]" />;
      case 'Sports & Athletics':
        return <ActivityIcon className="w-4 h-4 text-[#88EC11]" />;
      default:
        return <Award className="w-4 h-4 text-[#88EC11]" />;
    }
  };

  return (
    <AnimatedSection id="activities" className="py-24 relative bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Volunteering & <span className="text-[#88EC11]">Extracurricular Timeline</span>
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mt-3 font-jakarta">
            Campus leadership roles, Rotaract initiatives, classical musical achievements, department media production, and athletic participation.
          </p>
          <div className="w-20 h-1 bg-[#88EC11] rounded-full mt-4" />
        </div>

        {/* Vertical Timeline Container */}
        <div ref={containerRef} className="relative pl-10 sm:pl-14 space-y-10 ml-1 sm:ml-2">
          
          {/* Static Dim Track Line */}
          <div 
            className="absolute left-[15px] sm:left-[23px] top-[38px] bottom-[38px] w-[2px] bg-white/10 pointer-events-none z-0 rounded-full"
          />

          {/* Glowing Animated Progress Line */}
          <div className="absolute left-[15px] sm:left-[23px] top-[38px] bottom-[38px] w-[2px] pointer-events-none z-0">
            <motion.div
              style={{
                scaleY,
                transformOrigin: 'top',
                background: 'linear-gradient(to bottom, #88EC11 0%, #88EC11 85%, #c2ff6b 100%)',
                boxShadow: '0 0 12px rgba(136, 236, 17, 0.75)'
              }}
              className="w-full h-full rounded-full"
            />
          </div>

          {/* Timeline Nodes */}
          {activities.map((act, index) => {
            const isActive = activeNodes[index];

            return (
              <motion.div
                key={act.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Glowing Node Dot on Timeline */}
                <div 
                  className={`absolute left-[-25px] sm:left-[-33px] top-6 -translate-x-1/2 w-7 h-7 rounded-full border-2 flex items-center justify-center z-10 transition-all duration-500 ease-out ${
                    isActive
                      ? 'border-[#88EC11] bg-[#0b0b0c] shadow-[0_0_18px_rgba(136,236,17,0.85)] scale-110'
                      : 'border-white/20 bg-[#121218] shadow-none scale-100'
                  }`}
                >
                  <div 
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ease-out ${
                      isActive
                        ? 'bg-[#88EC11] shadow-[0_0_8px_#88EC11]'
                        : 'bg-slate-500'
                    }`} 
                  />
                </div>

                {/* Timeline Card */}
                <div className="glass-card p-6 sm:p-7 rounded-3xl border border-white/10 group-hover:border-[#88EC11]/40 transition-all bg-[#18181c]">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-2xl bg-[#0b0b0c] border border-white/10 group-hover:border-[#88EC11]/40 group-hover:shadow-[0_0_15px_rgba(136,236,17,0.25)] transition-all shrink-0">
                        {getActivityIcon(act.category)}
                      </div>
                      <div>
                        <span className="text-xs font-mono-code text-[#88EC11] font-semibold flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 shrink-0" />
                          <span>{act.organization}</span>
                        </span>
                        <h3 className="text-lg sm:text-xl font-extrabold text-white mt-0.5 font-kumbh group-hover:text-[#88EC11] transition-colors leading-tight">
                          {act.title}
                        </h3>
                      </div>
                    </div>

                    {/* Metadata Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono-code bg-[#88EC11]/10 text-[#88EC11] border border-[#88EC11]/30 px-3 py-1 rounded-full font-bold uppercase tracking-wider w-fit">
                        {act.category}
                      </span>
                      {act.period && (
                        <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 text-slate-300 text-[11px] font-mono-code">
                          <Calendar className="w-3 h-3 text-[#88EC11]" />
                          <span>{act.period}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Role Subtitle */}
                  {act.role && (
                    <div className="text-xs font-semibold text-slate-200 mb-2.5 flex items-center gap-1.5 font-jakarta">
                      <span className="text-[#88EC11]">Role:</span>
                      <span>{act.role}</span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-sm text-slate-300 mb-4 leading-relaxed font-jakarta">
                    {act.description}
                  </p>

                  {/* Highlights Bullet List */}
                  {act.highlights && act.highlights.length > 0 && (
                    <div className="pt-3 border-t border-white/10 space-y-2">
                      {act.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-jakarta">
                          <CheckCircle2 className="w-4 h-4 text-[#88EC11] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </AnimatedSection>
  );
};
