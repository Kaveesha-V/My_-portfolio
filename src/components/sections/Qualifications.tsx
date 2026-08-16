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
        return <ShieldCheck className="w-4 h-4 text-[#88EC11]" />;
      case 'Web Development':
        return <Code2 className="w-4 h-4 text-[#88EC11]" />;
      case 'Programming':
        return <CheckCircle2 className="w-4 h-4 text-[#88EC11]" />;
      case 'Design & Creative':
        return <Palette className="w-4 h-4 text-[#88EC11]" />;
      default:
        return <Award className="w-4 h-4 text-[#88EC11]" />;
    }
  };

  return (
    <AnimatedSection id="qualifications" className="py-20 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Certifications & <span className="text-[#88EC11]">Qualifications</span>
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mt-2 font-jakarta">
            Verified qualifications, specialized training, and professional learning achievements across cybersecurity, development, and design.
          </p>
          <div className="w-20 h-1 bg-[#88EC11] rounded-full mt-4" />
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
              className="glass-card p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-[#88EC11]/40 transition-all flex flex-col justify-between group relative overflow-hidden bg-[#18181c]"
            >
              <div>
                {/* Issuer & Category Header */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded-lg bg-[#0b0b0c] border border-white/10 group-hover:border-[#88EC11]/30 transition-colors shrink-0">
                    {getCategoryIcon(cert.category)}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono-code text-[#88EC11] font-semibold flex items-center gap-1 truncate">
                      <Building2 className="w-3 h-3 shrink-0" />
                      <span className="truncate">{cert.issuer}</span>
                    </span>
                    {cert.category && (
                      <span className="text-[10px] font-mono-code text-slate-400 block truncate">
                        {cert.category}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-[#88EC11] transition-colors font-kumbh">
                  {cert.title}
                </h3>

                {/* Description */}
                {cert.description && (
                  <p className="text-xs text-slate-300 leading-relaxed mb-3 line-clamp-3 font-jakarta">
                    {cert.description}
                  </p>
                )}

                {/* Skill Tags */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[9px] font-mono-code bg-[#88EC11]/10 border border-[#88EC11]/30 text-[#88EC11] px-2 py-0.5 rounded font-bold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* View Credential LinkedIn Button */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between mt-auto">
                <a
                  href={cert.linkedinUrl || cert.credentialUrl || 'https://www.linkedin.com/in/kaveesha-vimukthi-544a08352'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#88EC11] text-[11px] font-mono-code font-bold text-slate-300 hover:text-[#0b0b0c] transition-all w-full justify-center border border-white/10 hover:border-[#88EC11]"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>View Credential</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
};
