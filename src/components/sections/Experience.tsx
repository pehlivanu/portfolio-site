"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Rocket, Briefcase, Code, GraduationCap } from 'lucide-react';
import { experience } from '@/data/mockData';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import ReactMarkdown from 'react-markdown';
import Highlight from '@/components/ui/Highlight';

const getIconByType = (type: string) => {
  switch (type) {
    case 'senior':
      return <Rocket size={20} className="text-ide-text-active" />;
    case 'mid':
      return <Briefcase size={20} className="text-ide-text-active" />;
    case 'junior':
      return <Code size={20} className="text-ide-text-active" />;
    case 'intern':
      return <GraduationCap size={20} className="text-ide-text-active" />;
    default:
      return <Briefcase size={20} className="text-ide-text-active" />;
  }
};

const getIconBackground = (type: string) => {
  switch (type) {
    case 'senior':
      return 'bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]';
    case 'mid':
      return 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]';
    case 'junior':
      return 'bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]';
    case 'intern':
      return 'bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]';
    default:
      return 'bg-gray-500';
  }
};

export default function Experience() {
  useScrollSpy('experience');
  return (
    <section id="experience" className="py-20 px-8 max-w-4xl mx-auto">
      <div className="flex items-center gap-2 mb-12">
        <span className="text-ide-accent font-mono text-xl">02.</span>
        <h2 className="text-3xl font-bold text-ide-text-active">Work Experience</h2>
        <div className="h-[1px] bg-ide-border flex-1 ml-4"></div>
      </div>

      <div className="relative md:border-l-2 md:border-ide-border ml-0 md:ml-6 space-y-8 md:space-y-16">
        {experience.map((job, index) => (
          <motion.div 
            key={job.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-0 md:pl-16"
          >
            {/* Timeline Icon */}
            <div className={`hidden md:flex absolute -left-[19px] top-0 w-10 h-10 rounded-full items-center justify-center border-4 border-ide-bg z-10 ${getIconBackground(job.type || '')}`}>
              {getIconByType(job.type || '')}
            </div>
            
            <div className="bg-ide-card-bg p-6 rounded-lg border border-ide-border hover:border-ide-accent/50 transition-colors group relative overflow-hidden">
              {/* Subtle gradient overlay based on role type */}
              <div className={`absolute top-0 left-0 w-1 h-full opacity-50 ${
                  job.type === 'senior' ? 'bg-purple-500' : 
                  job.type === 'mid' ? 'bg-blue-500' : 
                  job.type === 'junior' ? 'bg-green-500' : 'bg-orange-500'
              }`} />

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <h3 className="text-xl font-bold text-ide-text-active group-hover:text-ide-accent transition-colors">
                  <Highlight text={job.role} /> <span className="text-ide-accent">@ <Highlight text={job.company} /></span>
                </h3>
                <div className="flex items-center gap-2 text-sm text-ide-text opacity-80 font-mono">
                  <Calendar size={14} />
                  {job.period}
                </div>
              </div>
              
              <div className="text-ide-text mb-6 leading-relaxed text-sm">
                <ReactMarkdown
                  components={{
                    p: ({node, ...props}: any) => <p className="mb-4 last:mb-0" {...props} />,
                    ul: ({node, ...props}: any) => <ul className="list-disc list-outside ml-4 mb-4 space-y-1" {...props} />,
                    li: ({node, ...props}: any) => <li className="pl-1" {...props} />,
                    strong: ({node, ...props}: any) => <strong className="text-ide-text-active font-semibold" {...props} />,
                  }}
                >
                  {job.description}
                </ReactMarkdown>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {job.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-ide-activity-bar text-ide-accent border border-ide-border hover:bg-ide-accent/10 transition-colors cursor-default">
                    <Highlight text={tech} />
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
