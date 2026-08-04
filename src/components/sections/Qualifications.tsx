import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../common/AnimatedSection';
import type { Certification } from '../../types';
import { Award, ShieldCheck, CheckCircle2, ExternalLink, Calendar, Building2, Code2, Palette } from 'lucide-react';

interface QualificationsProps {
  certifications: Certification[];
}

export const Qualifications: React.FC<QualificationsProps> = ({ certifications }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Cyber Security', 'Web Development', 'Programming', 'Design & Creative'];

  const filteredCerts = activeCategory === 'All'
    ? certifications
    : certifications.filter((cert) => cert.category === activeCategory);

  const getCategoryIcon = (category?: string) => {
    switch (category) {
      case 'Cyber Security':
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case 'Web Development':
        return <Code2 className="w-5 h-5 text-purple-400" />;
      case 'Programming':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      case 'Design & Creative':
        return <Palette className="w-5 h-5 text-pink-400" />;
      default:
        return <Award className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <AnimatedSection id="qualifications" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono-code text-cyan-400 tracking-widest uppercase mb-2">
            // 05. Qualifications & Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Certifications & <span className="text-gradient-cyan">Courses</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mt-3">
            Verified qualifications, specialized training, and professional learning achievements across cybersecurity, development, and design.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-4" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-mono-code font-medium rounded-full transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold border-transparent shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-[#121222]/80 text-slate-400 border-white/10 hover:text-white hover:border-cyan-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Card Top Glow Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400/80 to-purple-500/80 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Issuer Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                      {getCategoryIcon(cert.category)}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono-code text-cyan-400 font-semibold flex items-center gap-1">
                        <Building2 className="w-3 h-3" />
                        {cert.issuer}
                      </span>
                      {cert.category && (
                        <span className="text-[10px] font-mono-code text-purple-300 block">
                          {cert.category}
                        </span>
                      )}
                    </div>
                  </div>

                  <span className="flex items-center gap-1 text-[11px] font-mono-code text-slate-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                    <Calendar className="w-3 h-3 text-purple-400" />
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>

                {/* Description */}
                {cert.description && (
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                )}

                {/* Skill Badges */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono-code bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Optional Credential Link */}
              {cert.credentialUrl && (
                <div className="pt-4 border-t border-white/5 flex items-center justify-end">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono-code text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
};
