'use client';
import React, { useState } from 'react';
import { LuMenu, LuX, LuMinus, LuMaximize2, LuTerminal } from 'react-icons/lu';
import MatrixRain from '@/components/ui/MatrixRain';

interface TitleBarProps {
  onMenuClick?: () => void;
}

import { useLanguage } from '@/context/LanguageContext';

export default function TitleBar({ onMenuClick }: TitleBarProps) {
  const { t } = useLanguage();
  const [isShuttingDown, setIsShuttingDown] = useState(false);
  const [showShutdownText, setShowShutdownText] = useState(false);
  const [showErrorText, setShowErrorText] = useState(false);
  const [showRebootButton, setShowRebootButton] = useState(false);

  const handleExit = () => {
    setIsShuttingDown(true);
    setShowShutdownText(true);
    setShowErrorText(false);
    setShowRebootButton(false);

    setTimeout(() => setShowErrorText(true), 2000);
    setTimeout(() => setShowRebootButton(true), 4000);
    setTimeout(() => setShowShutdownText(false), 5000);
    setTimeout(() => setShowErrorText(false), 10000);
  };

  const handleReboot = () => {
    setIsShuttingDown(false);
    setShowShutdownText(false);
    setShowErrorText(false);
    setShowRebootButton(false);
  };

  return (
    <>
      <div className="bg-ide-title-bar relative z-50 flex h-8 shrink-0 items-center justify-between px-2 select-none">
        <div className="flex items-center gap-2">
          <button
            onClick={onMenuClick}
            className="text-ide-text hover:text-ide-text-active mr-2 md:hidden"
            aria-label="Toggle LuMenu"
          >
            <LuMenu size={18} />
          </button>
          <div className="group flex items-center gap-2">
            <button
              className="relative flex h-3 w-3 cursor-pointer items-center justify-center rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]"
              title={t('exit')}
              onClick={handleExit}
            >
              <LuX size={8} strokeWidth={3} className="text-[#4c0000] opacity-80" />
            </button>
            <button
              className="relative flex h-3 w-3 cursor-pointer items-center justify-center rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]"
              title={t('exitFullscreen')}
              onClick={() => {
                if (document.fullscreenElement) {
                  document.exitFullscreen().catch((err) => console.error(err));
                }
              }}
            >
              <LuMinus size={8} strokeWidth={3} className="text-[#5c3e00] opacity-80" />
            </button>
            <button
              className="relative flex h-3 w-3 cursor-pointer items-center justify-center rounded-full bg-[#27c93f] hover:bg-[#27c93f]"
              title={t('enterFullscreen')}
              onClick={() => {
                if (!document.fullscreenElement) {
                  document.documentElement.requestFullscreen().catch((err) => console.error(err));
                }
              }}
            >
              <LuMaximize2 size={8} strokeWidth={3} className="text-[#004d00] opacity-80" />
            </button>
          </div>
        </div>
        <div className="text-ide-text truncate px-2 font-sans text-sm opacity-80">
          {t('portfolioTitle')}
        </div>
        <div className="flex w-[60px] items-center gap-2 opacity-0 sm:opacity-100">
          {/* Spacer to balance the title centering if needed, or controls */}
        </div>
      </div>

      {/* Shutdown Overlay */}
      {/* Shutdown Overlay */}
      {isShuttingDown && (
        <>
          <MatrixRain />
          <div className="pointer-events-auto fixed inset-0 z-[99999] flex flex-col items-center justify-center p-8">
            <div
              className={`mb-8 flex items-center gap-4 font-mono text-xl text-red-500 transition-opacity duration-500 md:text-3xl ${showShutdownText ? 'opacity-100' : 'opacity-0'} ${showShutdownText ? 'animate-pulse' : ''}`}
            >
              <LuTerminal size={32} />
              <span className="rounded bg-black/50 p-2">{t('systemShutdown')}</span>
            </div>

            <div
              className={`max-w-2xl text-center font-mono text-lg text-green-500 transition-opacity duration-1000 md:text-2xl ${showErrorText ? 'opacity-100' : 'opacity-0'}`}
            >
              <span className="block rounded bg-black/80 p-2">{t('errorNoSleep')}</span>
            </div>

            <div
              className={`mt-16 transition-opacity duration-1000 ${showRebootButton ? 'opacity-100' : 'opacity-0'} ${showRebootButton ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
              <button
                onClick={handleReboot}
                className="border-2 border-green-500 bg-black px-6 py-3 font-mono text-xl text-green-500 transition-colors hover:bg-green-500 hover:text-black"
              >
                {t('rebootSystem')}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
