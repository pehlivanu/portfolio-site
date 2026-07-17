"use client";

import React, { useState } from 'react';
import { Printer, X, FileText, LayoutTemplate, Eye } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function CVConfigPanel({ onClose }: { onClose?: () => void }) {
  const { t, language } = useLanguage();
  
  const [detailLevel, setDetailLevel] = useState<'brief' | 'detailed'>('brief');
  const [showProjects, setShowProjects] = useState(true);
  const [theme, setTheme] = useState<'print' | 'ats'>('print');

  const handleOpenCV = () => {
    const params = new URLSearchParams();
    params.set('lang', language);
    params.set('detail', detailLevel);
    params.set('projects', showProjects.toString());
    
    // Direct ATS theme to the ats page, else the visual print page
    const baseUrl = theme === 'ats' ? '/cv-ats' : '/cv';
    
    window.open(`${baseUrl}?${params.toString()}`, '_blank');
  };

  return (
    <div className="w-full md:w-80 bg-ide-sidebar flex flex-col h-full border-r border-ide-border/30 flex">
      {/* Header */}
      <div className="p-3 text-xs font-bold text-ide-text tracking-wider uppercase flex justify-between items-center bg-ide-sidebar select-none">
        <div className="flex items-center gap-2">
            <Printer size={14} />
            <span>{t('cvConfig') || "CV Configuration"}</span>
        </div>
        <button onClick={onClose} className="md:hidden text-ide-text hover:text-ide-text-active">
          <X size={16} />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        
        {/* Content Detail Section */}
        <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-ide-text-active border-b border-ide-border/50 pb-1">
                <FileText size={16} />
                <span>{t('contentDetail') || "Content Detail"}</span>
            </div>
            
            <div className="space-y-2">
                <label className="flex items-start gap-3 p-2 rounded hover:bg-ide-hover-bg cursor-pointer transition-colors group">
                    <input 
                        type="radio" 
                        name="detailLevel" 
                        checked={detailLevel === 'brief'} 
                        onChange={() => setDetailLevel('brief')}
                        className="mt-1 bg-ide-bg border-ide-border text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-900"
                    />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-ide-text group-hover:text-ide-text-active">
                            {t('briefSummary') || "Brief Summary"}
                        </span>
                        <span className="text-xs text-gray-500 mt-0.5">
                            {t('briefSummaryDesc') || "Compact view with summaries only. Best for quick scanning."}
                        </span>
                    </div>
                </label>

                <label className="flex items-start gap-3 p-2 rounded hover:bg-ide-hover-bg cursor-pointer transition-colors group">
                    <input 
                        type="radio" 
                        name="detailLevel" 
                        checked={detailLevel === 'detailed'} 
                        onChange={() => setDetailLevel('detailed')}
                        className="mt-1 bg-ide-bg border-ide-border text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-900"
                    />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-ide-text group-hover:text-ide-text-active">
                            {t('detailedView') || "Detailed View"}
                        </span>
                        <span className="text-xs text-gray-500 mt-0.5">
                            {t('detailedViewDesc') || "Includes full professional biography and complete job descriptions."}
                        </span>
                    </div>
                </label>
            </div>
        </div>

        {/* Sections Toggle */}
        <div className="space-y-3">
             <div className="flex items-center gap-2 text-sm font-semibold text-ide-text-active border-b border-ide-border/50 pb-1">
                <LayoutTemplate size={16} />
                <span>{t('sections') || "Sections"}</span>
            </div>
             <label className="flex items-center gap-3 p-2 rounded hover:bg-ide-hover-bg cursor-pointer transition-colors group">
                <input 
                    type="checkbox" 
                    checked={showProjects} 
                    onChange={(e) => setShowProjects(e.target.checked)}
                    className="rounded bg-ide-bg border-ide-border text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-900"
                />
                <span className="text-sm font-medium text-ide-text group-hover:text-ide-text-active">
                    {t('includeProjects') || "Include Projects"}
                </span>
            </label>
        </div>

        {/* Style Selection */}
        <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-ide-text-active border-b border-ide-border/50 pb-1">
                <Eye size={16} />
                <span>{t('visualStyle') || "Visual Style"}</span>
            </div>
            
             <div className="space-y-2">
                <label className="flex items-start gap-3 p-2 rounded hover:bg-ide-hover-bg cursor-pointer transition-colors group">
                    <input 
                        type="radio" 
                        name="theme" 
                        checked={theme === 'print'} 
                        onChange={() => setTheme('print')}
                        className="mt-1 bg-ide-bg border-ide-border text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-900"
                    />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-ide-text group-hover:text-ide-text-active">
                            {t('printOptimized') || "Print Optimized"}
                        </span>
                        <span className="text-xs text-gray-500 mt-0.5">
                            {t('printOptimizedDesc') || "Clean white background, optimized for physical paper printing."}
                        </span>
                    </div>
                </label>

                <label className="flex items-start gap-3 p-2 rounded hover:bg-ide-hover-bg cursor-pointer transition-colors group">
                    <input 
                        type="radio" 
                        name="theme" 
                        checked={theme === 'ats'} 
                        onChange={() => setTheme('ats')}
                        className="mt-1 bg-ide-bg border-ide-border text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-900"
                    />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-ide-text group-hover:text-ide-text-active">
                            ATS Optimized
                        </span>
                        <span className="text-xs text-gray-500 mt-0.5">
                            Uses standard formatting with hidden labels for perfect machine reading.
                        </span>
                    </div>
                </label>
            </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-ide-border/30">
            <button
                onClick={handleOpenCV}
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-colors flex items-center justify-center gap-2 text-sm shadow-sm hover:shadow"
            >
                <Printer size={16} />
                {t('openPrintableCV') || "Open Printable Version"}
            </button>
            <p className="text-[10px] text-gray-500 mt-2 text-center">
                {t('openInNewTabDesc') || "Opens in a new tab. Use your browser's print dialog (Ctrl+P) to save as PDF."}
            </p>
        </div>

      </div>
    </div>
  );
}
