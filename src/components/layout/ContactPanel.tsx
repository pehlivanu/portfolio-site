"use client";

import React from 'react';
import ContactForm from '../sections/ContactForm';

export default function ContactPanel() {
  return (
    <div className="h-full w-full bg-ide-sidebar flex flex-col overflow-y-auto">
      <div className="p-4">
        <ContactForm />
      </div>
    </div>
  );
}
