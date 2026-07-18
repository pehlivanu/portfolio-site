'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuMail } from 'react-icons/lu';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useNavigation } from '@/context/NavigationContext';
import { useLanguage } from '@/context/LanguageContext';
import ContactForm from './ContactForm';

export default function Contact() {
  const { t } = useLanguage();
  useScrollSpy('contact');
  const { activeRightPanel, closeRightPanel } = useNavigation();
  const sectionRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    if (activeRightPanel !== 'contact' || !sectionRef.current) return;

    new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          // Logic for when it leaves viewport
        }
      },
      { threshold: 0.1 }
    );

    let hasEntered = false;

    const scrollObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasEntered = true;
        } else if (hasEntered) {
          // It was visible, now it's gone. Hide it.
          closeRightPanel();
        }
      },
      { threshold: 0 }
    );

    scrollObserver.observe(sectionRef.current);

    const currentRef = sectionRef.current;
    return () => {
      if (currentRef) scrollObserver.unobserve(currentRef);
    };
  }, [activeRightPanel, closeRightPanel]);

  return (
    <AnimatePresence>
      {activeRightPanel === 'contact' && (
        <motion.section
          id="contact"
          ref={sectionRef}
          initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
          animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
          exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
          transition={{ duration: 0.5 }}
          className="mx-auto hidden max-w-4xl px-8 py-20 md:block"
        >
          <div className="mb-12 flex items-center gap-2">
            <span className="text-ide-accent font-mono text-xl">05.</span>
            <h2 className="text-ide-text-active text-3xl font-bold">{t('contact')}</h2>
            <div className="bg-ide-border ml-4 h-[1px] flex-1"></div>
          </div>

          <div className="md:border-ide-border relative ml-0 md:ml-6 md:border-l-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-0 md:pl-16"
            >
              {/* Timeline Icon */}
              <div className="border-ide-bg absolute top-0 -left-[19px] z-10 hidden h-10 w-10 items-center justify-center rounded-full border-4 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] md:flex">
                <LuMail size={20} className="text-white" />
              </div>

              <div className="bg-ide-card-bg border-ide-border hover:border-ide-accent/50 group relative overflow-hidden rounded-lg border p-6 transition-colors">
                {/* Subtle gradient overlay */}
                <div className="absolute top-0 left-0 h-full w-1 bg-blue-500 opacity-50" />

                <ContactForm />
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
