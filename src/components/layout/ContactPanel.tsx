"use client";

import React from 'react';
import ContactForm from '../sections/ContactForm';

export default function ContactPanel() {
  return (
    <div className="w-full md:w-80 bg-ide-sidebar flex flex-col h-full border-r border-ide-border/30 flex overflow-y-auto">
      <div className="p-3 text-xs font-bold text-ide-text tracking-wider uppercase border-b border-ide-border/30">
        Contact Me
      </div>
      
      <div className="p-4">
        <ContactForm />
      </div>
    </div>
  );
}
