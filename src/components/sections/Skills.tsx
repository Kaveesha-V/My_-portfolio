import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../common/AnimatedSection';
import type { Skill } from '../../types';
import {
  Code, FileCode, Palette, Sparkles, Server, Database,
  Terminal, Globe, Bot, Cpu, Layers, Container, Cloud, GitBranch, Video, Smartphone
} from 'lucide-react';

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories: string[] = ['All', 'Cyber Security & Tools', 'Programming Languages', 'Web & Mobile', 'Design & Creative', 'Databases & Systems'];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5" />;
      case 'FileCode': return <FileCode className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'Bot': return <Bot className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Container': return <Container className="w-5 h-5" />;
      case 'Cloud': return <Cloud className="w-5 h-5" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5" />;
      case 'Video': return <Video className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
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
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                        {getIcon(skill.icon)}
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
                    <span className="text-xs font-mono-code font-bold text-cyan-400 bg-cyan-950/50 px-2.5 py-1 rounded-md border border-cyan-500/30">
                      {skill.level}%
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {skill.description}
                  </p>
                </div>

                {/* Level Progress Visualizer */}
                <div className="w-full bg-slate-800/80 rounded-full h-1.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </AnimatedSection>
  );
};
