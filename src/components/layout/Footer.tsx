'use client';

import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [techIndex, setTechIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const technologies = [
    'Built with Next.js 16 & Tailwind CSS',
    'Built with React 19 & TypeScript',
    'Built with Framer Motion & React Icons',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setTechIndex((prev) => (prev + 1) % technologies.length);
        setIsVisible(true);
      }, 500); // Wait for fade out
    }, 20000); // Change every 20 seconds

    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <footer className="text-ide-text py-8 text-center font-mono text-sm opacity-50">
      <p className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {technologies[techIndex]}
      </p>
    </footer>
  );
}
