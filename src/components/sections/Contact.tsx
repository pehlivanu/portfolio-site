"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useNavigation } from '@/context/NavigationContext';
import ContactForm from './ContactForm';

export default function Contact() {
  useScrollSpy('contact');
  const { isContactVisible, setContactVisible } = useNavigation();
  const sectionRef = React.useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (!isContactVisible || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only hide if we are scrolling away (it was visible, now it's not)
        // We check if it's NOT intersecting
        if (!entry.isIntersecting) {
           // We need a small delay or check to ensure we didn't just open it
           // But since we scroll to it immediately after opening, it should be fine.
           // However, if the user opens it and it's already off-screen (unlikely with scrollIntoView), it might close.
           // The main issue is that scrollIntoView takes time.
           // Let's rely on the fact that we scroll to it.
           
           // Actually, simpler logic: if it leaves the viewport, hide it.
           // But we need to make sure it doesn't hide immediately upon mounting if it's slightly off.
           // IntersectionObserver fires initially.
        }
      },
      { threshold: 0.1 } 
    );
    
    // We actually want to detect when it *leaves* the viewport.
    // So we track if it has *entered* first?
    let hasEntered = false;

    const scrollObserver = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                hasEntered = true;
            } else if (hasEntered) {
                // It was visible, now it's gone. Hide it.
                setContactVisible(false);
            }
        },
        { threshold: 0 } // Trigger as soon as one pixel is visible/invisible
    );

    scrollObserver.observe(sectionRef.current);

    return () => {
        if (sectionRef.current) scrollObserver.unobserve(sectionRef.current);
    };
  }, [isContactVisible, setContactVisible]);
  
  return (
    <AnimatePresence>
      {isContactVisible && (
        <motion.section 
            id="contact" 
            ref={sectionRef}
            initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
            animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
            exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
            transition={{ duration: 0.5 }}
            className="py-20 px-8 max-w-4xl mx-auto hidden md:block"
        >
      <div className="flex items-center gap-2 mb-12">
        <span className="text-ide-accent font-mono text-xl">05.</span>
        <h2 className="text-3xl font-bold text-ide-text-active">Contact Me</h2>
        <div className="h-[1px] bg-ide-border flex-1 ml-4"></div>
      </div>

      <div className="relative md:border-l-2 md:border-ide-border ml-0 md:ml-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative pl-0 md:pl-16"
        >
          {/* Timeline Icon */}
          <div className="hidden md:flex absolute -left-[19px] top-0 w-10 h-10 rounded-full items-center justify-center border-4 border-ide-bg z-10 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <Mail size={20} className="text-white" />
          </div>
          
          <div className="bg-ide-card-bg p-6 rounded-lg border border-ide-border hover:border-ide-accent/50 transition-colors group relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute top-0 left-0 w-1 h-full opacity-50 bg-blue-500" />

            <ContactForm />

          </div>
        </motion.div>
      </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
