"use client";

import React from 'react';
import { GitBranch, RefreshCw, XCircle, AlertTriangle, Bell, Check, Mail } from 'lucide-react';
import { useNavigation } from '@/context/NavigationContext';

export default function StatusBar() {
  const { contactStatus, zoomLevel, activeSection } = useNavigation();

  const getLanguageForSection = (section: string) => {
    switch (section) {
      case 'hero':
        return 'TypeScript';
      case 'experience':
        return 'Java';
      case 'education':
        return 'TypeScript';
      case 'projects':
        return 'JSON';
      case 'contact':
        return 'TypeScript';
      default:
        return 'TypeScript';
    }
  };

  return (
    <div className="h-8 bg-ide-status-bar hidden md:flex items-center justify-between px-3 text-xs text-ide-status-bar-foreground select-none z-30 border-t border-ide-border">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 hover:bg-ide-status-bar-hover px-1 rounded cursor-pointer transition-colors">
          <GitBranch size={12} />
          <span>main*</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-ide-status-bar-hover px-1 rounded cursor-pointer transition-colors">
          <RefreshCw size={12} />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 hover:bg-ide-status-bar-hover px-1 rounded cursor-pointer transition-colors">
            <XCircle size={12} />
            <span>0</span>
          </div>
          <div className="flex items-center gap-1 hover:bg-ide-status-bar-hover px-1 rounded cursor-pointer transition-colors">
            <AlertTriangle size={12} />
            <span>0</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 hover:bg-ide-status-bar-hover px-1 rounded cursor-pointer transition-colors">
            {contactStatus === 'sent' ? (
                <>
                    <Check size={12} />
                    <span>Email Sent</span>
                </>
            ) : (
                <>
                    <Mail size={12} />
                    <span>Not Contacted Yet</span>
                </>
            )}
        </div>
        
        <div className="flex items-center gap-1 hover:bg-ide-status-bar-hover px-1 rounded cursor-pointer transition-colors">
           <span>Ln 1, Col 1</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-ide-status-bar-hover px-1 rounded cursor-pointer transition-colors">
           <span>UTF-8</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-ide-status-bar-hover px-1 rounded cursor-pointer transition-colors min-w-[80px] justify-center">
           <span>{getLanguageForSection(activeSection)}</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-ide-status-bar-hover px-1 rounded cursor-pointer transition-colors">
           <span>{zoomLevel}%</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-ide-status-bar-hover px-1 rounded cursor-pointer transition-colors">
            <Bell size={12} />
        </div>
      </div>
    </div>
  );
}
