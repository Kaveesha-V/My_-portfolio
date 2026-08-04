import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../common/AnimatedSection';
import type { Certification } from '../../types';
import { Award, ShieldCheck, CheckCircle2, ExternalLink, Building2, Code2, Palette } from 'lucide-react';
import { LinkedinIcon } from '../common/Icons';

interface QualificationsProps {
  certifications: Certification[];
}

export const Qualifications: React.FC<QualificationsProps> = ({ certifications }) => {

  const getCategoryIcon = (category?: string) => {
    switch (category) {
      case 'Cyber Security':
        return <ShieldCheck className="w-4 h-4 text-cyan-400" />;
      case 'Web Development':
        return <Code2 className="w-4 h-4 text-purple-400" />;
      case 'Programming':
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      case 'Design & Creative':
        return <Palette className="w-4 h-4 text-pink-400" />;
      default:
        return <Award className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <AnimatedSection id="qualifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono-code text-cyan-400 tracking-widest uppercase mb-2">
            // 05. Qualifications & Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Certifications & <span className="text-gradient-cyan">Qualifications</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mt-2">
            Verified qualifications, specialized training, and professional learning achievements across cybersecurity, development, and design.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-4" />
        </div>

        {/* Compact Certifications Grid - 3 cards per row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-card p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Card Top Glow Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400/80 to-purple-500/80 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Issuer & Category Header */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/30 transition-colors shrink-0">
                    {getCategoryIcon(cert.category)}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono-code text-cyan-400 font-semibold flex items-center gap-1 truncate">
                      <Building2 className="w-3 h-3 shrink-0" />
                      <span className="truncate">{cert.issuer}</span>
                    </span>
                    {cert.category && (
                      <span className="text-[10px] font-mono-code text-purple-300 block truncate">
                        {cert.category}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>

                {/* Description */}
                {cert.description && (
                  <p className="text-xs text-slate-300 leading-relaxed mb-3 line-clamp-3">
                    {cert.description}
                  </p>
                )}

                {/* Skill Tags */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[9px] font-mono-code bg-cyan-950/50 border border-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* View Certificate LinkedIn Button */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between mt-auto">
                <a
                  href={cert.linkedinUrl || cert.credentialUrl || 'https://www.linkedin.com/in/your-profile/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 text-[11px] font-mono-code font-semibold text-cyan-300 hover:text-cyan-200 transition-all hover:scale-[1.02] active:scale-[0.98] w-full justify-center shadow-sm shadow-cyan-500/10"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>View Certificate</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 text-slate-400" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
};
