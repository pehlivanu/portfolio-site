"use client";

import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [techIndex, setTechIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const technologies = [
    "Built with Next.js 16 & Tailwind CSS",
    "Built with React 19 & TypeScript",
    "Built with Framer Motion & Lucide"
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
    <footer className="py-8 text-center text-ide-text opacity-50 text-sm font-mono">
      <p className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {technologies[techIndex]}
      </p>
    </footer>
  );
}
