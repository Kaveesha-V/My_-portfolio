import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../common/AnimatedSection';
import type { Skill } from '../../types';
import { Code } from 'lucide-react';
import {
  ReactBrandIcon, HtmlBrandIcon, CssBrandIcon, PythonBrandIcon,
  CPlusPlusBrandIcon, JavaBrandIcon, LinuxBrandIcon, MySqlBrandIcon,
  PostgreSqlBrandIcon, SqlBrandIcon, PhotoshopBrandIcon, IllustratorBrandIcon,
  AfterEffectsBrandIcon, CanvaBrandIcon, DesignPaletteBrandIcon, VideoEditingBrandIcon,
  AndroidBrandIcon, AntigravityBrandIcon, WebDevBrandIcon
} from '../common/BrandIcons';

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories: string[] = ['All', 'Cyber Security & Tools', 'Programming Languages', 'Web & Mobile', 'Design & Creative', 'Databases & Systems'];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  const getBrandIcon = (skillName: string) => {
    const nameLower = skillName.toLowerCase();
    if (nameLower.includes('react')) return <ReactBrandIcon className="w-6 h-6" />;
    if (nameLower.includes('html')) return <HtmlBrandIcon className="w-6 h-6" />;
    if (nameLower.includes('css')) return <CssBrandIcon className="w-6 h-6" />;
    if (nameLower.includes('python')) return <PythonBrandIcon className="w-6 h-6" />;
    if (nameLower.includes('c++')) return <CPlusPlusBrandIcon className="w-6 h-6" />;
    if (nameLower.includes('java') && !nameLower.includes('script')) return <JavaBrandIcon className="w-6 h-6" />;
    if (nameLower.includes('linux')) return <LinuxBrandIcon className="w-6 h-6" />;
    if (nameLower.includes('mysql')) return <MySqlBrandIcon className="w-6 h-6" />;
    if (nameLower.includes('postgres')) return <PostgreSqlBrandIcon className="w-6 h-6" />;
    if (nameLower.includes('sql')) return <SqlBrandIcon className="w-6 h-6" />;
    if (nameLower.includes('photoshop')) return <PhotoshopBrandIcon className="w-6 h-6" />;
    if (nameLower.includes('illustrator')) return <IllustratorBrandIcon className="w-6 h-6" />;
    if (nameLower.includes('after effects')) return <AfterEffectsBrandIcon className="w-6 h-6" />;
    if (nameLower.includes('canva')) return <CanvaBrandIcon className="w-6 h-6" />;
    if (nameLower.includes('graphic design')) return <DesignPaletteBrandIcon className="w-6 h-6" />;
    if (nameLower.includes('video editing')) return <VideoEditingBrandIcon className="w-6 h-6" />;
    if (nameLower.includes('mobile')) return <AndroidBrandIcon className="w-6 h-6" />;
    if (nameLower.includes('antigravity')) return <AntigravityBrandIcon className="w-6 h-6" />;
    if (nameLower.includes('web development') || nameLower.includes('web')) return <WebDevBrandIcon className="w-6 h-6" />;

    // Default Fallback
    return <Code className="w-6 h-6 text-purple-400" />;
  };

  return (
    <AnimatedSection id="skills" className="py-24 relative bg-[#0a0a12]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono-code text-purple-400 tracking-widest uppercase mb-2">
            // 02. Tech Stack & Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Technologies & <span className="text-gradient-purple">Tooling</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mt-3">
            Handcrafted suite of modern frameworks, languages, databases, and AI libraries.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-mono-code font-semibold transition-all duration-200 ${isActive
                    ? 'text-black bg-gradient-to-r from-cyan-400 to-purple-400 shadow-lg shadow-cyan-500/20 scale-105'
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
                className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between group hover:border-purple-500/40"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all shrink-0 shadow-inner">
                      {getBrandIcon(skill.name)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] font-mono-code text-slate-400">
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
