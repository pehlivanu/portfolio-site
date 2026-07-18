"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from 'react';
import { Github, Clock, Book, GitCommit } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';

interface GitHubProfile {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  location: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string;
  created_at: string;
}

export default function GitHubStats({ onClose }: { onClose?: () => void }) {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { t } = useLanguage();

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/pehlivanu');
        if (!response.ok) throw new Error('Failed to fetch GitHub data');
        const data = await response.json();
        setProfile(data);
      } catch {
        setError('Could not load GitHub profile');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) return <div className="p-8 text-ide-text text-center">{t('loadingGithub')}</div>;
  if (error) return <div className="p-8 text-red-400 [.light-theme_&]:text-red-600 text-center">{t('errorGithub')}</div>;
  if (!profile) return null;

  return (
    <div className="w-full md:w-80 bg-ide-sidebar flex flex-col h-full border-r border-ide-border/30 flex overflow-y-auto">
      <div className="p-3 text-xs font-bold text-ide-text tracking-wider uppercase border-b border-ide-border/30 flex justify-between items-center">
        <span>{t('githubStats')}</span>
        <button onClick={onClose} className="md:hidden text-ide-text hover:text-ide-text-active">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
        </button>
      </div>
      
      <div className="p-6 flex flex-col items-center text-center">
        <div className="relative mb-4">
          <img 
            src={profile.avatar_url} 
            alt={profile.name} 
            className="w-24 h-24 rounded-full border-4 border-ide-bg shadow-lg"
          />
          <div className="absolute bottom-1 right-1 bg-ide-bg p-1 rounded-full">
            <Github size={20} className="text-ide-text-active" />
          </div>
        </div>
        
        <h2 className="text-xl font-bold text-ide-text-active mb-1">{profile.name}</h2>
        <a 
          href={profile.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-ide-accent hover:underline text-sm mb-4"
        >
          @{profile.login}
        </a>
        
        <p className="text-ide-text text-sm mb-6 leading-relaxed">
          {profile.bio}
        </p>
        
        <div className="w-full space-y-4">

          
          <div className="flex items-center gap-3 text-sm text-ide-text">
            <Clock size={16} className="text-ide-accent" />
            <span>{t('joined')} {new Date(profile.created_at).getFullYear()}</span>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mt-6">
            <div className="bg-ide-bg p-3 rounded-lg border border-ide-border text-center">
              <Book size={20} className="mx-auto mb-2 text-blue-400 [.light-theme_&]:text-blue-700" />
              <div className="text-xl font-bold text-ide-text-active">{profile.public_repos}</div>
              <div className="text-xs text-gray-500 [.light-theme_&]:text-gray-600">{t('repositories')}</div>
            </div>
            
            <div className="bg-ide-bg p-3 rounded-lg border border-ide-border text-center">
              <GitCommit size={20} className="mx-auto mb-2 text-green-400 [.light-theme_&]:text-green-700" />
              <div className="text-xl font-bold text-ide-text-active">235</div>
              <div className="text-xs text-gray-500 [.light-theme_&]:text-gray-600">{t('contributions')}</div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 w-full">
          <h3 className="text-xs font-bold text-ide-text uppercase mb-3 text-left">{t('achievements')}</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-ide-bg p-2 rounded border border-ide-border flex flex-col items-center text-center gap-2" title={t('quickDraw')}>
              <img src="/images/quick-draw.png" alt="Quick Draw" className="w-12 h-12" />
              <span className="text-xs text-ide-text font-medium">{t('quickDraw')}</span>
            </div>
            <div className="bg-ide-bg p-2 rounded border border-ide-border flex flex-col items-center text-center gap-2" title={t('pullShark')}>
              <img src="/images/pull-shark.png" alt="Pull Shark" className="w-12 h-12" />
              <span className="text-xs text-ide-text font-medium">{t('pullShark')}</span>
            </div>
            <div className="bg-ide-bg p-2 rounded border border-ide-border flex flex-col items-center text-center gap-2" title={t('yolo')}>
              <img src="/images/yolo.png" alt="YOLO" className="w-12 h-12" />
              <span className="text-xs text-ide-text font-medium">{t('yolo')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
