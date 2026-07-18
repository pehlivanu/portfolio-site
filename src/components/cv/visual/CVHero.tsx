"use client";

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import clsx from 'clsx';
import { Terminal, MapPin, Phone, Mail, Linkedin, Github } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface CVHeroProps {
    linkedInProfile: any;
    about: any;
    theme: string;
    detailLevel: string;
    t: (key: string) => string;
}

export default function CVHero({ linkedInProfile, about, theme, detailLevel, t }: CVHeroProps) {
    return (
        <div className={clsx(
            "border-b p-8 print:px-[15mm] print:pt-[15mm] print:pb-0",
            theme === 'ide' 
                ? "bg-ide-bg border-ide-border" 
                : "bg-[#f8f9fa] border-gray-200 print:bg-[#f8f9fa]"
        )}>
            <div className="flex justify-between items-start gap-8">
                <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-2 text-blue-600 mb-2">
                        <Terminal size={18} />
                        <span className="font-mono text-sm font-semibold">
                            {(() => {
                                const rawTitle = t('portfolioTitle');
                                const cleanTitle = rawTitle.replace(/^(portfolio|portofoliu)\s*-\s*/i, '');
                                const urlPart = 'liviuionesi.com';
                                
                                if (cleanTitle.toLowerCase().includes(urlPart)) {
                                    const textPart = cleanTitle.replace(new RegExp(urlPart, 'i'), '');
                                    return (
                                        <>
                                            {textPart}
                                            <a 
                                                href="https://www.liviuionesi.com" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="font-bold hover:underline"
                                            >
                                                {urlPart}
                                            </a>
                                        </>
                                    );
                                }
                                return cleanTitle;
                            })()}
                        </span>
                    </div>
                    
                    <div>
                        <h1 className={clsx(
                            "text-4xl font-bold tracking-tight mb-1",
                            theme === 'ide' ? "text-ide-text" : "text-gray-900"
                        )}>
                            {linkedInProfile.name}
                        </h1>
                        <p className="text-xl text-blue-600 font-medium">{linkedInProfile.headline}</p>
                    </div>

                    <div className={clsx(
                        "leading-relaxed max-w-2xl text-sm",
                         theme === 'ide' ? "text-ide-text opacity-90" : "text-gray-700"
                    )}>
                        {detailLevel === 'detailed' ? (
                            <div className="prose prose-sm prose-blue max-w-none dark:prose-invert">
                                <ReactMarkdown>{about.description}</ReactMarkdown>
                            </div>
                        ) : (
                            linkedInProfile.about
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-y-2 gap-x-6 text-sm mt-4 text-gray-600">
                        {(linkedInProfile.address || linkedInProfile.location) && (
                            <div className="flex items-center gap-2 col-span-2">
                                <MapPin size={14} className="text-blue-500" />
                                <span>{linkedInProfile.address || linkedInProfile.location}</span>
                            </div>
                        )}
                         {linkedInProfile.phone && (
                            <div className="flex items-center gap-2">
                                <Phone size={14} className="text-blue-500" />
                                <a href={`tel:${linkedInProfile.phone.replace(/\\s+/g, '')}`} className="text-gray-600 hover:text-blue-600 hover:underline">
                                    {linkedInProfile.phone}
                                </a>
                            </div>
                        )}
                        <div className="flex items-center gap-2">
                            <Mail size={14} className="text-blue-500" />
                            <a href={`mailto:${linkedInProfile.email || "ionesiliviu@yahoo.com"}`} className="text-gray-600 hover:text-blue-600 hover:underline">
                                {linkedInProfile.email || "ionesiliviu@yahoo.com"}
                            </a>
                        </div>
                         <div className="flex items-center gap-2">
                            <Linkedin size={14} className="text-blue-500" />
                            <a href="https://linkedin.com/in/liviu-ionesi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 hover:underline">
                                linkedin.com/in/liviu-ionesi
                            </a>
                        </div>
                         <div className="flex items-center gap-2">
                            <Github size={14} className="text-blue-500" />
                            <a href="https://github.com/pehlivanu" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 hover:underline">
                                github.com/pehlivanu
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-lg overflow-hidden border-2 border-white shadow-lg">
                        <img 
                            src={linkedInProfile.avatarUrl} 
                            alt={linkedInProfile.name} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
