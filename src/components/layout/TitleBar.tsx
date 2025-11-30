import React from 'react';
import { Minus, Square, X } from 'lucide-react';

export default function TitleBar() {
  return (
    <div className="h-8 bg-ide-title-bar flex items-center justify-between px-2 select-none">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
      </div>
      <div className="text-sm text-ide-text opacity-80 font-sans">
        Antigravity IDE - portfolio-site
      </div>
      <div className="flex items-center gap-2 opacity-0 sm:opacity-100">
         {/* Windows-like controls just for show if needed, or just empty */}
      </div>
    </div>
  );
}
