import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../common/AnimatedSection';
import type { Project } from '../../types';
import { ExternalLink, Sparkles, X, CheckCircle2, Layers, Cpu } from 'lucide-react';
import { GithubIcon } from '../common/Icons';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories: string[] = ['All', 'Cyber Security', 'Game Dev', 'Graphic Design', 'Full Stack'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(selectedCategory.toLowerCase())));

  return (
    <AnimatedSection id="projects" className="py-24 relative bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-kumbh">
            Featured <span className="text-[#88EC11]">Projects & Architecture</span>
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mt-3 font-jakarta">
            Real-world applications, packet sniffer systems, and software platforms engineered for high performance.
          </p>
          <div className="w-20 h-1 bg-[#88EC11] rounded-full mt-4" />
        </div>

        {/* Filter Tab Bar */}
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

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group hover:border-[#88EC11]/40 bg-[#18181c]"
              >
                <div>
                  {/* Image Preview Banner */}
                  <div className="relative aspect-video overflow-hidden bg-[#0b0b0c]">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#18181c] via-transparent to-transparent opacity-80" />

                    {project.featured && (
                      <div className="absolute top-3 left-3 bg-[#88EC11] text-[#0b0b0c] font-black text-[10px] font-mono-code px-3 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#0b0b0c]" />
                        Featured
                      </div>
                    )}

                    <div className="absolute top-3 right-3 flex items-center gap-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-black/70 backdrop-blur-md text-white hover:text-[#88EC11] border border-white/10 hover:border-[#88EC11]/50 transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-black/70 backdrop-blur-md text-white hover:text-[#88EC11] border border-white/10 hover:border-[#88EC11]/50 transition-colors"
                          aria-label="GitHub Repo"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-6">
                    <span className="text-[10px] font-mono-code text-[#88EC11] uppercase tracking-wider block mb-2 font-bold">
                      {project.category}
                    </span>

                    <h3 className="text-xl font-bold text-white mb-2 font-kumbh group-hover:text-[#88EC11] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4 font-jakarta line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono-code bg-[#88EC11]/10 border border-[#88EC11]/30 text-[#88EC11] px-2 py-0.5 rounded font-bold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Inspect Architecture Footer */}
                <div className="px-6 pb-6 pt-2 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-mono-code font-bold text-[#88EC11] hover:underline flex items-center gap-1 group/btn"
                  >
                    <span>Inspect Architecture</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                  {project.metrics && (
                    <span className="text-[10px] font-mono-code text-slate-400 truncate max-w-[130px]">
                      {project.metrics.split('|')[0]}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Modal View */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl glass-card border border-white/15 p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto shadow-2xl bg-[#18181c]"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono-code text-[#88EC11] mb-2 font-bold">
                <Cpu className="w-4 h-4" />
                <span>{activeModalProject.category} System Architecture</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-kumbh">
                {activeModalProject.title}
              </h2>

              <div className="rounded-2xl overflow-hidden mb-6 aspect-video border border-white/10">
                <img
                  src={activeModalProject.imageUrl}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-6 text-slate-300">
                <div>
                  <h4 className="text-xs font-mono-code text-white uppercase tracking-wider mb-2 font-bold">System Overview</h4>
                  <p className="text-sm sm:text-base leading-relaxed font-jakarta">{activeModalProject.longDescription}</p>
                </div>

                {activeModalProject.metrics && (
                  <div className="p-4 rounded-xl bg-[#88EC11]/10 border border-[#88EC11]/30 text-[#88EC11] text-xs font-mono-code font-bold">
                    {activeModalProject.metrics}
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-mono-code text-white uppercase tracking-wider mb-3 font-bold flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#88EC11]" />
                    <span>Technical Highlights & Architecture</span>
                  </h4>
                  <ul className="space-y-2">
                    {activeModalProject.architectureHighlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 font-jakarta">
                        <CheckCircle2 className="w-4 h-4 text-[#88EC11] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono-code text-white uppercase tracking-wider mb-2 font-bold">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono-code bg-[#88EC11]/10 text-[#88EC11] border border-[#88EC11]/30 px-3 py-1 rounded-lg font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4">
                  {activeModalProject.githubUrl && (
                    <a
                      href={activeModalProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-[#88EC11] text-[#0b0b0c] font-black text-xs font-mono-code uppercase tracking-wider flex items-center gap-2 hover:bg-[#70E000] transition-colors shadow-lg shadow-[#88EC11]/25"
                    >
                      <GithubIcon className="w-4 h-4 text-[#0b0b0c]" />
                      <span>View Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </AnimatedSection>
  );
};
