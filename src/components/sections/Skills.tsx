import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../common/AnimatedSection';
import type { Skill } from '../../types';
import { Code } from 'lucide-react';
import { CPlusPlusBrandIcon } from '../common/BrandIcons';

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories: string[] = ['All', 'Cyber Security & Tools', 'Programming Languages', 'Web & Mobile', 'Design & Creative', 'Databases & Systems'];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  const getSkillLogo = (skillName: string) => {
    const nameLower = skillName.toLowerCase();
    if (nameLower.includes('react')) return <img src="/Logos/react.png" alt="React" className="w-8 h-8 object-contain rounded-md" />;
    if (nameLower.includes('html')) return <img src="/Logos/HTML.png" alt="HTML5" className="w-8 h-8 object-contain rounded-md" />;
    if (nameLower.includes('css')) return <img src="/Logos/CSS.jpg" alt="CSS3" className="w-8 h-8 object-contain rounded-md" />;
    if (nameLower.includes('python')) return <img src="/Logos/Python.jpg" alt="Python" className="w-8 h-8 object-contain rounded-md" />;
    if (nameLower.includes('java') && !nameLower.includes('script')) return <img src="/Logos/Java.webp" alt="Java" className="w-8 h-8 object-contain rounded-md" />;
    if (nameLower.includes('linux')) return <img src="/Logos/Linux.webp" alt="Linux" className="w-8 h-8 object-contain rounded-md" />;
    if (nameLower.includes('mysql')) return <img src="/Logos/mysql.webp" alt="MySQL" className="w-8 h-8 object-contain rounded-md" />;
    if (nameLower.includes('postgres')) return <img src="/Logos/Postgresql.webp" alt="PostgreSQL" className="w-8 h-8 object-contain rounded-md" />;
    if (nameLower.includes('sql')) return <img src="/Logos/SQL.webp" alt="SQL" className="w-8 h-8 object-contain rounded-md" />;
    if (nameLower.includes('photoshop')) return <img src="/Logos/ps.webp" alt="Photoshop" className="w-8 h-8 object-contain rounded-md" />;
    if (nameLower.includes('illustrator')) return <img src="/Logos/AI.jpg" alt="Illustrator" className="w-8 h-8 object-contain rounded-md" />;
    if (nameLower.includes('after effects')) return <img src="/Logos/AE.webp" alt="After Effects" className="w-8 h-8 object-contain rounded-md" />;
    if (nameLower.includes('canva')) return <img src="/Logos/Canva.webp" alt="Canva" className="w-8 h-8 object-contain rounded-md" />;
    if (nameLower.includes('antigravity')) return <img src="/Logos/antigravity.jpg" alt="Antigravity AI" className="w-8 h-8 object-contain rounded-md" />;
    if (nameLower.includes('mobile') || nameLower.includes('android')) return <img src="/Logos/android.webp" alt="Android" className="w-8 h-8 object-contain rounded-md" />;
    if (nameLower.includes('graphic design')) return <img src="/Logos/AI.jpg" alt="Graphic Design" className="w-8 h-8 object-contain rounded-md" />;
    if (nameLower.includes('video editing')) return <img src="/Logos/AE.webp" alt="Video Editing" className="w-8 h-8 object-contain rounded-md" />;
    if (nameLower.includes('c++')) return <CPlusPlusBrandIcon className="w-8 h-8" />;
    if (nameLower.includes('web development') || nameLower.includes('web')) return <img src="/Logos/HTML.png" alt="Web Development" className="w-8 h-8 object-contain rounded-md" />;

    return <Code className="w-6 h-6 text-[#88EC11]" />;
  };

  return (
    <AnimatedSection id="skills" className="py-24 relative bg-[#0b0b0c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono-code text-[#88EC11] tracking-widest uppercase mb-2 font-semibold">
            // 02. Skills
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Tech Stacks & <span className="text-[#88EC11]">Tools</span>
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mt-3 font-jakarta">
            Handcrafted suite of modern frameworks, languages, databases, cybersecurity tools, and design software.
          </p>
          <div className="w-20 h-1 bg-[#88EC11] rounded-full mt-4" />
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-mono-code font-bold transition-all duration-200 ${
                  isActive
                    ? 'text-[#0b0b0c] bg-[#88EC11] shadow-lg shadow-[#88EC11]/25 scale-105'
                    : 'text-slate-400 bg-white/5 border border-white/10 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skill Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between group hover:border-[#88EC11]/40 bg-[#18181c]"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="p-2.5 rounded-xl bg-[#0b0b0c] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#88EC11]/60 group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(136,236,17,0.35)] transition-all duration-300 overflow-hidden">
                      {getSkillLogo(skill.name)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-kumbh group-hover:text-[#88EC11] transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] font-mono-code text-[#88EC11] font-semibold block">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-jakarta">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </AnimatedSection>
  );
};
