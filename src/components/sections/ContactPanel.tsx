'use client';

import React from 'react';
import ContactForm from '../sections/ContactForm';

export default function ContactPanel() {
  return (
    <div className="bg-ide-sidebar flex h-full w-full flex-col overflow-y-auto">
      <div className="p-4">
        <ContactForm />
      </div>
    </div>
  );
}
