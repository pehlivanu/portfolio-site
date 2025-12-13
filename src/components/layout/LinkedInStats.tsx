"use client";

import React from 'react';
import { Linkedin, Users, Briefcase, Award, ExternalLink } from 'lucide-react';

export default function LinkedInStats({ onClose }: { onClose?: () => void }) {
  // Mock data since LinkedIn API requires complex auth
  const profile = {
    name: "Liviu Ionesi",
    headline: "Full Stack Developer | Java | Spring Boot | Next.js",
    location: "Kirchheim unter Teck, Germany",
    connections: "500+",
    about: "Passionate Full Stack Developer transitioning from robust Java EE architectures to modern Next.js applications. Experienced in building scalable microservices and interactive web experiences.",
    profileUrl: "https://www.linkedin.com/in/liviuionesi",
    avatarUrl: "/images/linkedin-profile.png"
  };

  return (
    <div className="w-full md:w-80 bg-ide-sidebar flex flex-col h-full border-r border-ide-border/30 flex overflow-y-auto">
      <div className="p-3 text-xs font-bold text-ide-text tracking-wider uppercase border-b border-ide-border/30 flex justify-between items-center">
        <span>LinkedIn Profile</span>
        <button onClick={onClose} className="md:hidden text-ide-text hover:text-ide-text-active">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
        </button>
      </div>
      
      <div className="p-6 flex flex-col items-center text-center">
        <div className="relative mb-4">
          <img 
            src={profile.avatarUrl} 
            alt={profile.name} 
            className="w-24 h-24 rounded-full border-4 border-ide-bg shadow-lg"
          />
          <div className="absolute bottom-1 right-1 bg-ide-bg p-1 rounded-full">
            <Linkedin size={20} className="text-ide-text-active" />
          </div>
        </div>
        
        <h2 className="text-xl font-bold text-ide-text-active mb-1">{profile.name}</h2>
        <p className="text-xs text-ide-text opacity-80 mb-4 max-w-[200px]">{profile.headline}</p>
        
        <a 
          href={profile.profileUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#0077b5] hover:bg-[#006396] text-white text-sm rounded-md font-medium transition-colors flex items-center gap-2 mb-6"
        >
          <span>View Profile</span>
          <ExternalLink size={14} />
        </a>
        
        <div className="w-full space-y-4">

          
          <div className="flex items-center gap-3 text-sm text-ide-text">
            <Users size={16} className="text-ide-accent" />
            <span>{profile.connections} connections</span>
          </div>

          <div className="bg-ide-bg p-4 rounded-lg border border-ide-border text-left mt-4">
            <h3 className="text-xs font-bold text-ide-text uppercase mb-2 flex items-center gap-2">
              <Briefcase size={14} /> About
            </h3>
            <p className="text-sm text-ide-text opacity-80 leading-relaxed">
              {profile.about}
            </p>
          </div>
          
          <div className="mt-6 w-full">
            <h3 className="text-xs font-bold text-ide-text uppercase mb-3 text-left">Top Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['Java', 'Spring Boot', 'Next.js', 'React', 'TypeScript', 'Microservices', 'Docker'].map((skill) => (
                <span key={skill} className="px-2 py-1 bg-ide-bg border border-ide-border rounded text-xs text-ide-text">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 w-full">
            <h3 className="text-xs font-bold text-ide-text uppercase mb-3 text-left">Certifications</h3>
            <div className="space-y-2">
              <div className="bg-ide-bg p-2 rounded border border-ide-border flex items-center gap-3 text-left">
                <Award size={20} className="text-yellow-500 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-ide-text-active">Java SE 8 Programmer</div>
                  <div className="text-xs text-gray-500">Oracle</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
