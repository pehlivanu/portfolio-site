"use client";

import React from 'react';
import ReactMarkdown from 'react-markdown';

interface ATSHeaderProps {
    linkedInProfile: any;
    about: any;
    detailLevel: string;
    t: (key: string) => string;
}

export default function ATSHeader({ linkedInProfile, about, detailLevel, t }: ATSHeaderProps) {
    return (
        <>
            {/* 1. HEADER / CONTACT INFO */}
            <header className="mb-8 border-b-2 border-black pb-4 text-center">
                <h1 className="text-3xl font-bold uppercase tracking-wider mb-2">{linkedInProfile.name}</h1>
                <h2 className="text-xl mb-4 font-semibold">{linkedInProfile.headline}</h2>
                <address className="not-italic text-sm leading-relaxed">
                    <p className="mb-1">{linkedInProfile.address || linkedInProfile.location}</p>
                    <p>
                        {t('email')}: {linkedInProfile.email || "ionesiliviu@yahoo.com"} | 
                        {' '} {t('phone')}: {linkedInProfile.phone} | 
                        {' '} {t('linkedin')}: linkedin.com/in/liviu-ionesi | 
                        {' '} {t('github')}: github.com/pehlivanu
                    </p>
                </address>
            </header>

            {/* 2. PROFESSIONAL SUMMARY */}
            <section className="mb-8">
                <h2 className="text-xl font-bold uppercase border-b border-gray-400 mb-4 pb-1">
                    {t('cvProfessionalSummary')}
                </h2>
                <div className="text-sm leading-relaxed text-justify">
                    {detailLevel === 'detailed' ? (
                        <div className="prose prose-sm max-w-none text-black">
                            <ReactMarkdown>{about.description}</ReactMarkdown>
                        </div>
                    ) : (
                        <p>{linkedInProfile.about}</p>
                    )}
                </div>
            </section>
        </>
    );
}
