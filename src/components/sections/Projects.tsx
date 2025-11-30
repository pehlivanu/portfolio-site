"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Folder, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '@/data/mockData';
import { useScrollSpy } from '@/hooks/useScrollSpy';

export default function Projects() {
  useScrollSpy('projects');
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-8 max-w-6xl mx-auto">
      <div className="flex items-center gap-2 mb-12">
        <span className="text-ide-accent font-mono text-xl">04.</span>
        <h2 className="text-3xl font-bold text-white">Projects</h2>
        <div className="h-[1px] bg-ide-border flex-1 ml-4"></div>
        
        <div className="flex gap-2">
          <button onClick={() => scroll('left')} className="p-2 bg-ide-activity-bar rounded hover:bg-ide-border transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scroll('right')} className="p-2 bg-ide-activity-bar rounded hover:bg-ide-border transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="min-w-[300px] md:min-w-[350px] bg-[#252526] p-6 rounded-lg border border-ide-border hover:border-ide-accent/50 transition-all hover:-translate-y-1 snap-start flex flex-col"
          >
            <div className="flex justify-between items-start mb-4">
              <Folder size={40} className="text-ide-accent" />
              <div className="flex gap-3">
                <Github size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                <ExternalLink size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-ide-text mb-4 flex-1">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t) => (
                <span key={t} className="text-xs font-mono text-gray-400">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
