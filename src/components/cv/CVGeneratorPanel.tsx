"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function CVGeneratorPanel() {
  const { t, language } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center h-full bg-ide-bg text-ide-text p-8 text-center space-y-6">
        <div className="max-w-md space-y-4">
            <h2 className="text-2xl font-bold">{t('cvGenerator') || "CV Generator"}</h2>
            <p className="text-gray-400">
                Generate a PDF version of the portfolio by printing this page.
                For best results, enable &quot;Background graphics&quot; in your print settings.
            </p>
            
            <button
                onClick={() => window.open(`/cv?lang=${language}`, '_blank')}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors flex items-center justify-center gap-2 mx-auto"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Open Printable Version
            </button>
        </div>
    </div>
  );
}
