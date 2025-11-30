import React from 'react';
import { Files, Search, GitGraph, Play, LayoutGrid, Settings, User } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-12 bg-ide-activity-bar flex flex-col items-center py-2 justify-between h-full border-r border-ide-border/30">
      <div className="flex flex-col gap-4">
        <div className="p-2 cursor-pointer border-l-2 border-ide-accent text-ide-text-active">
          <Files size={24} strokeWidth={1.5} />
        </div>
        <div className="p-2 cursor-pointer text-ide-text hover:text-ide-text-active opacity-70 hover:opacity-100">
          <Search size={24} strokeWidth={1.5} />
        </div>
        <div className="p-2 cursor-pointer text-ide-text hover:text-ide-text-active opacity-70 hover:opacity-100">
          <GitGraph size={24} strokeWidth={1.5} />
        </div>
        <div className="p-2 cursor-pointer text-ide-text hover:text-ide-text-active opacity-70 hover:opacity-100">
          <Play size={24} strokeWidth={1.5} />
        </div>
        <div className="p-2 cursor-pointer text-ide-text hover:text-ide-text-active opacity-70 hover:opacity-100">
          <LayoutGrid size={24} strokeWidth={1.5} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="p-2 cursor-pointer text-ide-text hover:text-ide-text-active opacity-70 hover:opacity-100">
          <User size={24} strokeWidth={1.5} />
        </div>
        <div className="p-2 cursor-pointer text-ide-text hover:text-ide-text-active opacity-70 hover:opacity-100">
          <Settings size={24} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}
