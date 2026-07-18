'use client';

import React, { useState } from 'react';
import { LuPrinter, LuX, LuFileText, LuLayoutTemplate, LuEye } from 'react-icons/lu';
import { useLanguage } from '@/context/LanguageContext';

export default function CVConfigPanel({ onClose }: { onClose?: () => void }) {
  const { t, language } = useLanguage();

  const [detailLevel, setDetailLevel] = useState<'brief' | 'detailed'>('brief');
  const [showProjects, setShowProjects] = useState(true);
  const [showLanguages, setShowLanguages] = useState(true);
  const [showCertifications, setShowCertifications] = useState(true);
  const [theme, setTheme] = useState<'print' | 'ats'>('print');

  const handleOpenCV = () => {
    const params = new URLSearchParams();
    params.set('lang', language);
    params.set('detail', detailLevel);
    params.set('projects', showProjects.toString());
    params.set('languages', showLanguages.toString());
    params.set('certifications', showCertifications.toString());

    // Direct ATS theme to the ats page, else the visual print page
    const baseUrl = theme === 'ats' ? '/cv-ats' : '/cv';

    window.open(`${baseUrl}?${params.toString()}`, '_blank');
  };

  return (
    <div className="bg-ide-sidebar border-ide-border/30 flex h-full w-full flex-col border-r md:w-80">
      {/* Header */}
      <div className="text-ide-text bg-ide-sidebar flex items-center justify-between p-3 text-xs font-bold tracking-wider uppercase select-none">
        <div className="flex items-center gap-2">
          <LuPrinter size={14} />
          <span>{t('cvConfig') || 'CV Configuration'}</span>
        </div>
        <button onClick={onClose} className="text-ide-text hover:text-ide-text-active md:hidden">
          <LuX size={16} />
        </button>
      </div>

      <div className="flex-1 space-y-6 overflow-y-auto p-4">
        {/* Content Detail Section */}
        <div className="space-y-3">
          <div className="text-ide-text-active border-ide-border/50 flex items-center gap-2 border-b pb-1 text-sm font-semibold">
            <LuFileText size={16} />
            <span>{t('contentDetail') || 'Content Detail'}</span>
          </div>

          <div className="space-y-2">
            <label className="hover:bg-ide-hover-bg group flex cursor-pointer items-start gap-3 rounded p-2 transition-colors">
              <input
                type="radio"
                name="detailLevel"
                checked={detailLevel === 'brief'}
                onChange={() => setDetailLevel('brief')}
                className="bg-ide-bg border-ide-border mt-1 text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-900"
              />
              <div className="flex flex-col">
                <span className="text-ide-text group-hover:text-ide-text-active text-sm font-medium">
                  {t('briefSummary') || 'Brief Summary'}
                </span>
                <span className="mt-0.5 text-xs text-gray-500">
                  {t('briefSummaryDesc') ||
                    'Compact view with summaries only. Best for quick scanning.'}
                </span>
              </div>
            </label>

            <label className="hover:bg-ide-hover-bg group flex cursor-pointer items-start gap-3 rounded p-2 transition-colors">
              <input
                type="radio"
                name="detailLevel"
                checked={detailLevel === 'detailed'}
                onChange={() => setDetailLevel('detailed')}
                className="bg-ide-bg border-ide-border mt-1 text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-900"
              />
              <div className="flex flex-col">
                <span className="text-ide-text group-hover:text-ide-text-active text-sm font-medium">
                  {t('detailedView') || 'Detailed View'}
                </span>
                <span className="mt-0.5 text-xs text-gray-500">
                  {t('detailedViewDesc') ||
                    'Includes full professional biography and complete job descriptions.'}
                </span>
              </div>
            </label>
          </div>
        </div>

        {/* Sections Toggle */}
        <div className="space-y-3">
          <div className="text-ide-text-active border-ide-border/50 flex items-center gap-2 border-b pb-1 text-sm font-semibold">
            <LuLayoutTemplate size={16} />
            <span>{t('sections') || 'Sections'}</span>
          </div>
          <label className="hover:bg-ide-hover-bg group flex cursor-pointer items-center gap-3 rounded p-2 transition-colors">
            <input
              type="checkbox"
              checked={showLanguages}
              onChange={(e) => setShowLanguages(e.target.checked)}
              className="bg-ide-bg border-ide-border rounded text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-900"
            />
            <span className="text-ide-text group-hover:text-ide-text-active text-sm font-medium">
              {t('includeLanguages')}
            </span>
          </label>

          <label className="hover:bg-ide-hover-bg group flex cursor-pointer items-center gap-3 rounded p-2 transition-colors">
            <input
              type="checkbox"
              checked={showCertifications}
              onChange={(e) => setShowCertifications(e.target.checked)}
              className="bg-ide-bg border-ide-border rounded text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-900"
            />
            <span className="text-ide-text group-hover:text-ide-text-active text-sm font-medium">
              {t('includeCertifications')}
            </span>
          </label>

          <label className="hover:bg-ide-hover-bg group flex cursor-pointer items-center gap-3 rounded p-2 transition-colors">
            <input
              type="checkbox"
              checked={showProjects}
              onChange={(e) => setShowProjects(e.target.checked)}
              className="bg-ide-bg border-ide-border rounded text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-900"
            />
            <span className="text-ide-text group-hover:text-ide-text-active text-sm font-medium">
              {t('includeProjects')}
            </span>
          </label>
        </div>

        {/* Style Selection */}
        <div className="space-y-3">
          <div className="text-ide-text-active border-ide-border/50 flex items-center gap-2 border-b pb-1 text-sm font-semibold">
            <LuEye size={16} />
            <span>{t('visualStyle') || 'Visual Style'}</span>
          </div>

          <div className="space-y-2">
            <label className="hover:bg-ide-hover-bg group flex cursor-pointer items-start gap-3 rounded p-2 transition-colors">
              <input
                type="radio"
                name="theme"
                checked={theme === 'print'}
                onChange={() => setTheme('print')}
                className="bg-ide-bg border-ide-border mt-1 text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-900"
              />
              <div className="flex flex-col">
                <span className="text-ide-text group-hover:text-ide-text-active text-sm font-medium">
                  {t('printOptimized') || 'Print Optimized'}
                </span>
                <span className="mt-0.5 text-xs text-gray-500">
                  {t('printOptimizedDesc') ||
                    'Clean white background, optimized for physical paper printing.'}
                </span>
              </div>
            </label>

            <label className="hover:bg-ide-hover-bg group flex cursor-pointer items-start gap-3 rounded p-2 transition-colors">
              <input
                type="radio"
                name="theme"
                checked={theme === 'ats'}
                onChange={() => setTheme('ats')}
                className="bg-ide-bg border-ide-border mt-1 text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-900"
              />
              <div className="flex flex-col">
                <span className="text-ide-text group-hover:text-ide-text-active text-sm font-medium">
                  ATS Optimized
                </span>
                <span className="mt-0.5 text-xs text-gray-500">
                  Uses standard formatting with hidden labels for perfect machine reading.
                </span>
              </div>
            </label>
          </div>
        </div>

        {/* Action Button */}
        <div className="border-ide-border/30 border-t pt-4">
          <button
            onClick={handleOpenCV}
            className="flex w-full items-center justify-center gap-2 rounded bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 hover:shadow"
          >
            <LuPrinter size={16} />
            {t('openPrintableCV') || 'Open Printable Version'}
          </button>
          <p className="mt-2 text-center text-[10px] text-gray-500">
            {t('openInNewTabDesc') ||
              "Opens in a new tab. Use your browser's print dialog (Ctrl+P) to save as PDF."}
          </p>
        </div>
      </div>
    </div>
  );
}
