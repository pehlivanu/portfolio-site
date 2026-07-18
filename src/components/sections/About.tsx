'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuTerminal, LuCode, LuCoffee, LuZap } from 'react-icons/lu';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useNavigation } from '@/context/NavigationContext';
import { useLanguage } from '@/context/LanguageContext';
import Highlight from '@/components/ui/Highlight';

export default function About() {
  useScrollSpy('about');
  const { openRightPanel, scrollToSection } = useNavigation();
  const { data, t } = useLanguage();
  const { about } = data;
  const [isJava, setIsJava] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsJava((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="mx-auto flex min-h-[80vh] w-full max-w-7xl flex-wrap items-center justify-center gap-12 p-8"
    >
      <div className="min-w-[340px] flex-1 space-y-6 md:min-w-[600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-ide-accent mb-2 flex items-center gap-2">
            <LuTerminal size={20} />
            <span className="font-mono text-sm">
              <Highlight text={about.greeting} />
            </span>
          </div>
          <h1 className="text-ide-text-active mb-4 text-5xl font-bold tracking-tight md:text-7xl">
            <Highlight text={about.name} />{' '}
            <span className="text-ide-accent">
              <Highlight text={about.suffix} />
            </span>
            <span className="max-w-lg text-xl leading-relaxed font-semibold text-orange-400">
              <Highlight text={about.lastName} />
            </span>
          </h1>
          <div className="text-ide-text max-w-lg text-xl leading-relaxed">
            <Highlight text={about.description} />
            <button
              onClick={() => openRightPanel('bio')}
              className="text-ide-accent ml-2 inline-flex items-center gap-1 text-base font-medium hover:underline"
            >
              {t('readMore')}
            </button>
          </div>
        </motion.div>

        <div className="flex gap-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            <LuCode size={18} /> {about.ctaPrimary}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border-ide-border hover:bg-ide-activity-bar text-ide-text rounded-md border px-6 py-3 font-medium transition-colors"
          >
            {about.ctaSecondary}
          </button>
        </div>
      </div>

      <div className="w-full max-w-xl min-w-[340px] flex-1 md:min-w-[500px]">
        {/* ... (keep Right Side content same) */}
        <div className="border-ide-border bg-ide-bg overflow-hidden rounded-lg border shadow-2xl">
          <div className="bg-ide-sidebar border-ide-border flex items-center justify-between border-b px-4 py-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <span className="text-ide-text ml-3 font-mono text-xs opacity-70">
                {isJava ? 'LegacyBackendApplication.java' : 'api/vibe-coding.ts'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {isJava ? (
                <LuCoffee size={14} className="text-orange-400" />
              ) : (
                <LuZap size={14} className="text-yellow-400" />
              )}
            </div>
          </div>

          <div className="relative h-[300px] overflow-x-auto p-6 font-mono text-sm">
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
                    <span className="text-orange-400 [.light-theme_&]:text-orange-700">
                      package
                    </span>{' '}
                    dev.portfolio;{'\n\n'}
                    <span className="text-orange-400 [.light-theme_&]:text-orange-700">
                      import
                    </span>{' '}
                    org.springframework.boot.SpringApplication;{'\n'}
                    <span className="text-orange-400 [.light-theme_&]:text-orange-700">
                      import
                    </span>{' '}
                    org.springframework.boot.autoconfigure.SpringBootApplication;{'\n\n'}
                    <span className="text-yellow-400 [.light-theme_&]:text-yellow-700">
                      @SpringBootApplication
                    </span>
                    {'\n'}
                    <span className="text-orange-400 [.light-theme_&]:text-orange-700">
                      public class
                    </span>{' '}
                    <span className="text-yellow-300 [.light-theme_&]:text-yellow-700">
                      LegacyBackendApplication
                    </span>{' '}
                    {'{'}
                    {'\n\n'}
                    {'    '}
                    <span className="text-orange-400 [.light-theme_&]:text-orange-700">
                      public static void
                    </span>{' '}
                    <span className="text-blue-300 [.light-theme_&]:text-blue-700">main</span>
                    (String[] args) {'{'}
                    {'\n'}
                    {'        '}SpringApplication.run(LegacyBackendApplication.class, args);{'\n'}
                    {'        '}System.out.println(
                    <span className="text-green-300 [.light-theme_&]:text-green-700">
                      &quot;Java EE Enterprise Logic Initialized...&quot;
                    </span>
                    );{'\n'}
                    {'    '}
                    {'}'}
                    {'\n'}
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
                    <span className="text-purple-400 [.light-theme_&]:text-purple-700">import</span>{' '}
                    {'{'} NextApiRequest, NextApiResponse {'}'}{' '}
                    <span className="text-purple-400 [.light-theme_&]:text-purple-700">from</span>{' '}
                    <span className="text-green-300 [.light-theme_&]:text-green-700">
                      &apos;next&apos;
                    </span>
                    ;{'\n\n'}
                    <span className="text-purple-400 [.light-theme_&]:text-purple-700">
                      export default function
                    </span>{' '}
                    <span className="text-blue-300 [.light-theme_&]:text-blue-700">handler</span>
                    (req: NextApiRequest, res: NextApiResponse) {'{'}
                    {'\n'}
                    {'  '}res.status(
                    <span className="text-orange-300 [.light-theme_&]:text-orange-700">200</span>
                    ).json({'{'} {'\n'}
                    {'    '}message:{' '}
                    <span className="text-green-300 [.light-theme_&]:text-green-700">
                      &apos;Vibe Coding Initialized 🚀&apos;
                    </span>
                    , {'\n'}
                    {'    '}stack:{' '}
                    <span className="text-green-300 [.light-theme_&]:text-green-700">
                      &apos;Next.js 16 + Tailwind&apos;
                    </span>{' '}
                    {'\n'}
                    {'  '}
                    {'}'});{'\n'}
                    {'}'}
                  </code>
                </motion.pre>
              )}
            </AnimatePresence>

            <div className="absolute right-4 bottom-4">
              <div className="bg-ide-activity-bar border-ide-border flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
                <div
                  className={`h-2 w-2 rounded-full ${isJava ? 'bg-orange-500' : 'bg-blue-500'} animate-pulse`}
                />
                {isJava ? 'Compiling...' : 'Hot Reloading...'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
