"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '@/data/mockData';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import Highlight from '@/components/ui/Highlight';

export default function Education() {
  useScrollSpy('education');
  return (
    <section id="education" className="py-20 px-8 max-w-4xl mx-auto">
      <div className="flex items-center gap-2 mb-12">
        <span className="text-ide-accent font-mono text-xl">03.</span>
        <h2 className="text-3xl font-bold text-ide-text-active">Education</h2>
        <div className="h-[1px] bg-ide-border flex-1 ml-4"></div>
      </div>

      <div className="grid gap-6">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-ide-card-bg p-6 rounded-lg border border-ide-border hover:border-ide-accent/50 transition-colors flex items-start gap-4"
          >
            <div className="p-3 bg-ide-activity-bar rounded-lg text-ide-accent">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-ide-text-active"><Highlight text={edu.school} /></h3>
              <p className="text-ide-text text-lg"><Highlight text={edu.degree} /></p>
              <p className="text-sm text-gray-500 font-mono mt-1 mb-2">{edu.year}</p>
              {/* @ts-ignore */}
              {edu.description && (
                <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
                  {/* @ts-ignore */}
                  {edu.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
