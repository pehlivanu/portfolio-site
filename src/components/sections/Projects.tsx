"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Folder, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '@/data/mockData';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import Highlight from '@/components/ui/Highlight';

export default function Projects() {
  useScrollSpy('projects');
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Create a triplicated list for infinite scrolling illusion
  const extendedProjects = [...projects, ...projects, ...projects];

  // Initialize scroll position to the middle set
  React.useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth;
      const oneSetWidth = scrollWidth / 3;
      scrollRef.current.scrollLeft = oneSetWidth;
    }
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const oneSetWidth = scrollWidth / 3;
      
      // If we've scrolled past the second set (to the right), jump back to the start of the second set
      if (scrollLeft >= oneSetWidth * 2) {
        scrollRef.current.scrollLeft = scrollLeft - oneSetWidth;
      } 
      // If we've scrolled into the first set (to the left), jump forward to the second set
      else if (scrollLeft <= 0) {
        scrollRef.current.scrollLeft = scrollLeft + oneSetWidth;
      }
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 350 + 24; // card width + gap
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
        <h2 className="text-3xl font-bold text-ide-text-active">Projects</h2>
        <div className="h-[1px] bg-ide-border flex-1 ml-4"></div>
        
        <div className="flex gap-2">
          <button onClick={() => scroll('left')} aria-label="Scroll left" className="p-2 bg-ide-activity-bar rounded hover:bg-ide-border transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scroll('right')} aria-label="Scroll right" className="p-2 bg-ide-activity-bar rounded hover:bg-ide-border transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {extendedProjects.map((project, index) => (
          <motion.div
            key={`${project.id}-${index}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="min-w-[300px] md:min-w-[350px] bg-ide-card-bg p-6 rounded-lg border border-ide-border hover:border-ide-accent/50 transition-all hover:-translate-y-1 snap-start flex flex-col"
          >
            <div className="flex justify-between items-start mb-4">
              <Folder 
                size={40} 
                className="text-ide-accent animate-pulse-glow" 
                style={{ animationDelay: `${(index % projects.length) * 1}s` }}
              />
              <div className="flex gap-3">
                <a href={project.link} target="_blank" rel="noopener noreferrer" title="View Code" aria-label="View Code">
                  <Github 
                    size={20} 
                    className="text-ide-text opacity-90 hover:text-ide-text-active hover:opacity-100 cursor-pointer animate-pulse-glow" 
                    style={{ animationDelay: `${(index % projects.length) * 1}s` }}
                  />
                </a>
                <a href={project.link} target="_blank" rel="noopener noreferrer" title="Live Demo" aria-label="Live Demo">
                  <ExternalLink 
                    size={20} 
                    className="text-ide-text opacity-90 hover:text-ide-text-active hover:opacity-100 cursor-pointer animate-pulse-glow" 
                    style={{ animationDelay: `${(index % projects.length) * 1}s` }}
                  />
                </a>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-ide-text-active mb-2"><Highlight text={project.title} /></h3>
            <p className="text-ide-text mb-4 flex-1">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t) => (
                <span key={t} className="text-xs font-mono text-ide-text opacity-80">
                  <Highlight text={t} />
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
