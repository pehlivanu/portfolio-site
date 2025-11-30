"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { experience } from '@/data/mockData';
import { useScrollSpy } from '@/hooks/useScrollSpy';

export default function Experience() {
  useScrollSpy('experience');
  return (
    <section id="experience" className="py-20 px-8 max-w-4xl mx-auto">
      <div className="flex items-center gap-2 mb-12">
        <span className="text-ide-accent font-mono text-xl">02.</span>
        <h2 className="text-3xl font-bold text-white">Work Experience</h2>
        <div className="h-[1px] bg-ide-border flex-1 ml-4"></div>
      </div>

      <div className="relative border-l border-ide-border ml-3 md:ml-6 space-y-12">
        {experience.map((job, index) => (
          <motion.div 
            key={job.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-ide-accent ring-4 ring-ide-bg" />
            
            <div className="bg-[#252526] p-6 rounded-lg border border-ide-border hover:border-ide-accent/50 transition-colors group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <h3 className="text-xl font-bold text-white group-hover:text-ide-accent transition-colors">
                  {job.role} <span className="text-ide-accent">@ {job.company}</span>
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-400 font-mono">
                  <Calendar size={14} />
                  {job.period}
                </div>
              </div>
              
              <p className="text-ide-text mb-6 leading-relaxed">
                {job.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {job.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-ide-activity-bar text-ide-accent border border-ide-border">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
