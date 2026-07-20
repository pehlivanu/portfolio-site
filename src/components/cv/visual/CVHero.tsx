'use client';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { LuGlobe, LuMapPin, LuPhone, LuMail } from 'react-icons/lu';
import ReactMarkdown from 'react-markdown';
import { LinkedInProfile, AboutData } from '@/types/data';

interface CVHeroProps {
  linkedInProfile: LinkedInProfile;
  about: AboutData;
  theme: string;
  detailLevel: string;
}

export default function CVHero({ linkedInProfile, about, theme, detailLevel }: CVHeroProps) {
  return (
    <div
      className={clsx(
        'border-b p-8 print:px-[15mm] print:pt-[15mm] print:pb-0',
        theme === 'ide'
          ? 'bg-ide-bg border-ide-border'
          : 'border-gray-200 bg-[#f8f9fa] print:bg-[#f8f9fa]'
      )}
    >
      <div className="flex items-start justify-between gap-8">
        <div className="flex-1 space-y-4">
          <div>
            <h1
              className={clsx(
                'mb-1 text-4xl font-bold tracking-tight',
                theme === 'ide' ? 'text-ide-text' : 'text-gray-900'
              )}
            >
              {linkedInProfile.name}
            </h1>
            <p className="text-xl font-medium text-blue-600">
              {linkedInProfile.headline.split(' | ').slice(0, -1).join(' | ')}
              <br />
              {linkedInProfile.headline.split(' | ').slice(-1)}
            </p>
          </div>

          <div
            className={clsx(
              'max-w-2xl text-sm leading-relaxed',
              theme === 'ide' ? 'text-ide-text opacity-90' : 'text-gray-700'
            )}
          >
            {detailLevel === 'detailed' ? (
              <div className="prose prose-sm prose-blue dark:prose-invert max-w-none">
                <ReactMarkdown>{about.description}</ReactMarkdown>
              </div>
            ) : (
              linkedInProfile.about
            )}
          </div>

          <div className="mt-4 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <LuGlobe size={14} className="text-blue-500" title="Website" />
              <a
                href="https://www.liviuionesi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap text-gray-600 hover:text-blue-600 hover:underline"
              >
                www.liviuionesi.com
              </a>
            </div>
            {(linkedInProfile.address || linkedInProfile.location) && (
              <div className="flex items-center gap-2">
                <LuMapPin size={14} className="min-w-max text-blue-500" title="Location" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(linkedInProfile.address || linkedInProfile.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap text-gray-600 hover:text-blue-600 hover:underline"
                >
                  {linkedInProfile.address || linkedInProfile.location}
                </a>
              </div>
            )}
            {linkedInProfile.phone && (
              <div className="flex items-center gap-2">
                <LuPhone size={14} className="text-blue-500" title="Phone" />
                <a
                  href={`tel:${linkedInProfile.phone.replace(/\\s+/g, '')}`}
                  className="whitespace-nowrap text-gray-600 hover:text-blue-600 hover:underline"
                >
                  {linkedInProfile.phone}
                </a>
              </div>
            )}
            <div className="flex items-center gap-2">
              <LuMail size={14} className="text-blue-500" title="Email" />
              <a
                href={`mailto:${linkedInProfile.email || 'ionesiliviu@yahoo.com'}`}
                className="whitespace-nowrap text-gray-600 hover:text-blue-600 hover:underline"
              >
                {linkedInProfile.email || 'ionesiliviu@yahoo.com'}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaLinkedin size={14} className="text-blue-500" title="LinkedIn" />
              <a
                href="https://linkedin.com/in/liviu-ionesi"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap text-gray-600 hover:text-blue-600 hover:underline"
              >
                linkedin.com/in/liviu-ionesi
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaGithub size={14} className="text-blue-500" title="GitHub" />
              <a
                href="https://github.com/pehlivanu"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap text-gray-600 hover:text-blue-600 hover:underline"
              >
                github.com/pehlivanu
              </a>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="relative h-32 w-32 overflow-hidden rounded-lg border-2 border-white shadow-lg">
            <Image
              src={linkedInProfile.avatarUrl}
              alt={linkedInProfile.name}
              fill
              sizes="(max-width: 768px) 128px, 128px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
