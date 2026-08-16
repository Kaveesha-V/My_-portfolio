import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../common/AnimatedSection';
import type { SampleItem, SampleCategory } from '../../types';
import { Image, Video, X, Play, Maximize2, Layers } from 'lucide-react';

interface SamplesProps {
  samples: SampleItem[];
}

export const Samples: React.FC<SamplesProps> = ({ samples }) => {
  const [selectedCategory, setSelectedCategory] = useState<SampleCategory>('All');
  const [activeMediaModal, setActiveMediaModal] = useState<SampleItem | null>(null);

  const categories: SampleCategory[] = ['All', 'Graphic Design', 'Video Editing'];

  const filteredSamples = selectedCategory === 'All'
    ? samples
    : samples.filter((s) => s.category === selectedCategory);

  return (
    <AnimatedSection id="samples" className="py-24 relative bg-[#0a0a12]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Design & Video <span className="text-gradient-cyan">Gallery</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mt-3">
            Portfolio showcase of graphic design projects, branding concepts, and video edits.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-4" />
        </div>

        {/* Filter Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-mono-code font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-black bg-gradient-to-r from-cyan-400 to-purple-400 shadow-lg shadow-cyan-500/20 scale-105'
                    : 'text-slate-400 bg-white/5 border border-white/10 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSamples.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveMediaModal(item)}
                className="glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group hover:border-cyan-500/40 cursor-pointer"
              >
                {/* Media Preview Container */}
                <div className="relative aspect-video bg-[#0e0e1a] overflow-hidden flex items-center justify-center">
                  {item.type === 'video' ? (
                    <div className="relative w-full h-full">
                      <video
                        src={encodeURI(item.mediaUrl)}
                        muted
                        loop
                        autoPlay
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-cyan-500/90 text-black flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 fill-black translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={encodeURI(item.mediaUrl)}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}

                  {/* Badge Overlay */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white font-mono-code text-[10px] px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                    {item.type === 'video' ? (
                      <>
                        <Video className="w-3 h-3 text-purple-400" />
                        <span>VIDEO</span>
                      </>
                    ) : (
                      <>
                        <Image className="w-3 h-3 text-cyan-400" />
                        <span>DESIGN</span>
                      </>
                    )}
                  </div>

                  <div className="absolute top-3 right-3 p-2 rounded-xl bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                    <Maximize2 className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-bold text-white text-base group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-slate-300 leading-relaxed mt-2">
                      {item.description}
                    </p>
                  )}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Media Lightbox / Modal */}
        <AnimatePresence>
          {activeMediaModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveMediaModal(null)}
                className="fixed inset-0 bg-black/85 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-4xl glass-card rounded-3xl border border-white/15 p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto shadow-2xl"
              >
                <button
                  onClick={() => setActiveMediaModal(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 text-xs font-mono-code text-cyan-400 mb-2">
                  <Layers className="w-4 h-4" />
                  <span>{activeMediaModal.category} Showcase</span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-4">
                  {activeMediaModal.title}
                </h2>

                {/* Media Container inside Modal */}
                <div className="rounded-2xl overflow-hidden bg-black border border-white/10 flex items-center justify-center max-h-[65vh]">
                  {activeMediaModal.type === 'video' ? (
                    <video
                      controls
                      autoPlay
                      playsInline
                      preload="auto"
                      key={activeMediaModal.id}
                      className="w-full h-auto max-h-[60vh] object-contain"
                    >
                      <source src={encodeURI(activeMediaModal.mediaUrl)} type="video/mp4" />
                      Your browser does not support playing HTML5 video.
                    </video>
                  ) : (
                    <img
                      src={encodeURI(activeMediaModal.mediaUrl)}
                      alt={activeMediaModal.title}
                      className="w-full h-auto max-h-[60vh] object-contain"
                    />
                  )}
                </div>

                {activeMediaModal.description && (
                  <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                    {activeMediaModal.description}
                  </p>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </AnimatedSection>
  );
};
