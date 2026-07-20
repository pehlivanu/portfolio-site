'use client';

import { FaGithub } from 'react-icons/fa';
import { LuClock, LuBook, LuGitCommitVertical } from 'react-icons/lu';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export interface GitHubProfile {
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

export default function GitHubStats({
  onClose,
  initialProfile,
}: {
  onClose?: () => void;
  initialProfile?: GitHubProfile | null;
}) {
  const { t } = useLanguage();

  if (!initialProfile)
    return (
      <div className="p-8 text-center text-red-400 [.light-theme_&]:text-red-600">
        {t('errorGithub')}
      </div>
    );
  const profile = initialProfile;

  return (
    <div className="bg-ide-sidebar border-ide-border/30 flex h-full w-full flex-col overflow-y-auto border-r md:w-80">
      <div className="text-ide-text border-ide-border/30 flex items-center justify-between border-b p-3 text-xs font-bold tracking-wider uppercase">
        <span>{t('githubStats')}</span>
        <button onClick={onClose} className="text-ide-text hover:text-ide-text-active md:hidden">
          <svg
            role="img"
            aria-label="Close GitHub"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <title>Close GitHub</title>
            <line x1="18" x2="6" y1="6" y2="18" />
            <line x1="6" x2="18" y1="6" y2="18" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-center p-6 text-center">
        <div className="relative mb-4 h-24 w-24">
          <Image
            src={profile.avatar_url}
            alt={profile.name}
            fill
            sizes="96px"
            className="border-ide-bg rounded-full border-4 object-cover shadow-lg"
          />
          <div className="bg-ide-bg absolute right-1 bottom-1 rounded-full p-1">
            <FaGithub size={20} className="text-ide-text-active" />
          </div>
        </div>

        <h2 className="text-ide-text-active mb-1 text-xl font-bold">{profile.name}</h2>
        <a
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ide-accent mb-4 text-sm hover:underline"
        >
          @{profile.login}
        </a>

        <p className="text-ide-text mb-6 text-sm leading-relaxed">{profile.bio}</p>

        <div className="w-full space-y-4">
          <div className="text-ide-text flex items-center gap-3 text-sm">
            <LuClock size={16} className="text-ide-accent" />
            <span>
              {t('joined')} {new Date(profile.created_at).getFullYear()}
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="bg-ide-bg border-ide-border rounded-lg border p-3 text-center">
              <LuBook
                size={20}
                className="mx-auto mb-2 text-blue-400 [.light-theme_&]:text-blue-700"
                title="Repositories"
              />
              <div className="text-ide-text-active text-xl font-bold">{profile.public_repos}</div>
              <div className="text-xs text-gray-500 [.light-theme_&]:text-gray-600">
                {t('repositories')}
              </div>
            </div>

            <div className="bg-ide-bg border-ide-border rounded-lg border p-3 text-center">
              <LuGitCommitVertical
                size={20}
                className="mx-auto mb-2 text-green-400 [.light-theme_&]:text-green-700"
              />
              <div className="text-ide-text-active text-xl font-bold">235</div>
              <div className="text-xs text-gray-500 [.light-theme_&]:text-gray-600">
                {t('contributions')}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 w-full">
          <h3 className="text-ide-text mb-3 text-left text-xs font-bold uppercase">
            {t('achievements')}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div
              className="bg-ide-bg border-ide-border flex flex-col items-center gap-2 rounded border p-2 text-center"
              title={t('quickDraw')}
            >
              <Image src="/images/quick-draw.png" alt="Quick Draw" width={48} height={48} />
              <span className="text-ide-text text-xs font-medium">{t('quickDraw')}</span>
            </div>
            <div
              className="bg-ide-bg border-ide-border flex flex-col items-center gap-2 rounded border p-2 text-center"
              title={t('pullShark')}
            >
              <Image src="/images/pull-shark.png" alt="Pull Shark" width={48} height={48} />
              <span className="text-ide-text text-xs font-medium">{t('pullShark')}</span>
            </div>
            <div
              className="bg-ide-bg border-ide-border flex flex-col items-center gap-2 rounded border p-2 text-center"
              title={t('yolo')}
            >
              <Image src="/images/yolo.png" alt="YOLO" width={48} height={48} />
              <span className="text-ide-text text-xs font-medium">{t('yolo')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
