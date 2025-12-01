"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code, Coffee, Zap } from 'lucide-react';
import { useScrollSpy } from '@/hooks/useScrollSpy';

// ... (keep existing code strings)

export default function Hero() {
  useScrollSpy('hero');
  const [isJava, setIsJava] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsJava((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-[80vh] flex flex-col xl:flex-row items-center justify-center p-8 gap-12 max-w-7xl mx-auto w-full">
      <div className="flex-1 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-ide-accent mb-2">
            <Terminal size={20} />
            <span className="font-mono text-sm">~/developer/portfolio</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-ide-text-active mb-4">
            Liviu <span className="text-ide-accent">.io</span><span className="text-orange-400 font-semibold text-xl max-w-lg leading-relaxed">NESI</span>
          </h1>
          <p className="text-xl text-ide-text max-w-lg leading-relaxed">
            Transitioning from robust <span className="text-orange-400 font-semibold">Java EE</span> architectures 
            to the dynamic world of <span className="text-blue-400 font-semibold">Spring Boot</span> paired to performant UI frameworks and AI-accelerated prototyping. 
          </p>
        </motion.div>

        <div className="flex gap-4">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-ide-accent hover:bg-blue-600 text-white rounded-md font-medium transition-colors flex items-center gap-2"
          >
            <Code size={18} /> Projects, not just code
          </button>
          <button className="px-6 py-3 border border-ide-border hover:bg-ide-activity-bar text-ide-text rounded-md font-medium transition-colors">
            Contact Me
          </button>
        </div>
      </div>

      <div className="flex-1 w-full max-w-xl">
        <div className="rounded-lg overflow-hidden border border-ide-border bg-ide-bg shadow-2xl">
          <div className="flex items-center justify-between px-4 py-2 bg-ide-sidebar border-b border-ide-border">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="ml-3 text-xs text-ide-text opacity-70 font-mono">
                {isJava ? 'LegacyBackendApplication.java' : 'api/vibe-coding.ts'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {isJava ? <Coffee size={14} className="text-orange-400" /> : <Zap size={14} className="text-yellow-400" />}
            </div>
          </div>
          
          <div className="p-6 font-mono text-sm overflow-x-auto relative h-[300px]">
            <AnimatePresence mode="wait">
              {isJava ? (
                <motion.pre
                  key="java"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="text-ide-text"
                >
                  <code>
                    <span className="text-orange-400">package</span> dev.portfolio;{'\n\n'}
                    <span className="text-orange-400">import</span> org.springframework.boot.SpringApplication;{'\n'}
                    <span className="text-orange-400">import</span> org.springframework.boot.autoconfigure.SpringBootApplication;{'\n\n'}
                    <span className="text-yellow-400">@SpringBootApplication</span>{'\n'}
                    <span className="text-orange-400">public class</span> <span className="text-yellow-300">LegacyBackendApplication</span> {'{'}{'\n\n'}
                    {'    '}<span className="text-orange-400">public static void</span> <span className="text-blue-300">main</span>(String[] args) {'{'}{'\n'}
                    {'        '}SpringApplication.run(LegacyBackendApplication.class, args);{'\n'}
                    {'        '}System.out.println(<span className="text-green-300">&quot;Java EE Enterprise Logic Initialized...&quot;</span>);{'\n'}
                    {'    '}{'}'}{'\n'}
                    {'}'}
                  </code>
                </motion.pre>
              ) : (
                <motion.pre
                  key="next"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="text-ide-text"
                >
                  <code>
                    <span className="text-purple-400">import</span> {'{'} NextApiRequest, NextApiResponse {'}'} <span className="text-purple-400">from</span> <span className="text-green-300">&apos;next&apos;</span>;{'\n\n'}
                    <span className="text-purple-400">export default function</span> <span className="text-blue-300">handler</span>(req: NextApiRequest, res: NextApiResponse) {'{'}{'\n'}
                    {'  '}res.status(<span className="text-orange-300">200</span>).json({'{'} {'\n'}
                    {'    '}message: <span className="text-green-300">&apos;Vibe Coding Initialized 🚀&apos;</span>, {'\n'}
                    {'    '}stack: <span className="text-green-300">&apos;Next.js 16 + Tailwind&apos;</span> {'\n'}
                    {'  '}{'}'});{'\n'}
                    {'}'}
                  </code>
                </motion.pre>
              )}
            </AnimatePresence>
            
            <div className="absolute bottom-4 right-4">
                <div className="bg-ide-activity-bar px-3 py-1 rounded-full text-xs flex items-center gap-2 border border-ide-border">
                    <div className={`w-2 h-2 rounded-full ${isJava ? 'bg-orange-500' : 'bg-blue-500'} animate-pulse`} />
                    {isJava ? 'Compiling...' : 'Hot Reloading...'}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
