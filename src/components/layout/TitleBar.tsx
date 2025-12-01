import React from 'react';
import { Menu } from 'lucide-react';

interface TitleBarProps {
  onMenuClick?: () => void;
}

export default function TitleBar({ onMenuClick }: TitleBarProps) {
  return (
    <div className="h-8 bg-ide-title-bar flex items-center justify-between px-2 select-none shrink-0">
      <div className="flex items-center gap-2">
        <button 
          onClick={onMenuClick}
          className="md:hidden text-ide-text hover:text-ide-text-active mr-2"
          aria-label="Toggle Menu"
        >
          <Menu size={18} />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
      </div>
      <div className="text-sm text-ide-text opacity-80 font-sans truncate px-2">
        portfolio - Antigravity - liviuionesi.dev
      </div>
      <div className="flex items-center gap-2 opacity-0 sm:opacity-100 w-[60px]">
         {/* Spacer to balance the title centering if needed, or controls */}
      </div>
    </div>
  );
}
