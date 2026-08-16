import React from 'react';
import { motion } from 'framer-motion';
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

  const getActivityIcon = (category: string) => {
    switch (category) {
      case 'Music & Performing Arts':
        return <Music className="w-5 h-5 text-[#88EC11]" />;
      case 'Leadership & Rotaract':
        return <Users className="w-5 h-5 text-[#88EC11]" />;
      case 'Event Leadership':
        return <Sparkles className="w-5 h-5 text-[#88EC11]" />;
      case 'Media Production':
        return <Video className="w-5 h-5 text-[#88EC11]" />;
      case 'Sports & Athletics':
        return <ActivityIcon className="w-5 h-5 text-[#88EC11]" />;
      default:
        return <Award className="w-5 h-5 text-[#88EC11]" />;
    }
  };

  return (
    <AnimatedSection id="activities" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-mono-code text-[#88EC11] tracking-widest uppercase mb-2 font-semibold">
            // 06. Leadership & Community
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Volunteering & <span className="text-[#88EC11]">Extracurricular Activities</span>
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mt-3 font-jakarta">
            Campus leadership roles, classical musical achievements, media unit production, event coordination, and athletic team involvement.
          </p>
          <div className="w-20 h-1 bg-[#88EC11] rounded-full mt-4" />
        </div>

        {/* Activities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((act, index) => (
            <motion.div
              key={act.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-3xl border border-white/10 hover:border-[#88EC11]/40 transition-all flex flex-col justify-between group bg-[#18181c] relative overflow-hidden"
            >
              {/* Card Top Header */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-[#0b0b0c] border border-white/10 group-hover:border-[#88EC11]/40 group-hover:shadow-[0_0_15px_rgba(136,236,17,0.3)] transition-all shrink-0">
                    {getActivityIcon(act.category)}
                  </div>
                  <span className="text-[10px] font-mono-code bg-[#88EC11]/10 text-[#88EC11] border border-[#88EC11]/30 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                    {act.category}
                  </span>
                </div>

                {/* Organization & Role */}
                <div className="mb-3">
                  <span className="text-xs font-mono-code text-[#88EC11] font-semibold flex items-center gap-1.5 mb-1">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{act.organization}</span>
                  </span>
                  <h3 className="text-lg font-extrabold text-white font-kumbh group-hover:text-[#88EC11] transition-colors leading-tight">
                    {act.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-semibold text-slate-300 font-jakarta">
                      {act.role}
                    </span>
                    {act.period && (
                      <span className="text-[10px] font-mono-code text-slate-400 flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                        <Calendar className="w-3 h-3 text-[#88EC11]" />
                        {act.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4 font-jakarta">
                  {act.description}
                </p>

                {/* Key Bullet Highlights */}
                {act.highlights && act.highlights.length > 0 && (
                  <div className="pt-3 border-t border-white/10 space-y-1.5">
                    {act.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300 font-jakarta">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#88EC11] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
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
