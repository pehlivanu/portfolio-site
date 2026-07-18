"use client";

import React from 'react';
import clsx from 'clsx';
import { Code, Github, ExternalLink } from 'lucide-react';
import { Project } from '@/types/data';

interface CVProjectsProps {
    projects: Project[];
    theme: string;
    t: (key: string) => string;
}

export default function CVProjects({ projects, theme, t }: CVProjectsProps) {
    return (
        <section className="cv-section">
            <div className={clsx(
                "flex items-center gap-2 mb-4 border-b pb-2",
                theme === 'ide' ? "border-ide-border" : "border-gray-200"
            )}>
                <Code className="text-blue-600" size={20} />
                <h2 className={clsx("text-lg font-bold uppercase tracking-wide", theme === 'ide' ? "text-ide-text" : "text-gray-900")}>
                    {t('projects')}
                </h2>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
                {projects.map((proj) => (
                    <div key={proj.id} className={clsx(
                        "cv-item print-break-inside-avoid p-4 rounded-lg border",
                        theme === 'ide' ? "bg-ide-activity-bar border-ide-border" : "bg-gray-50 border-gray-200"
                    )}>
                        <div className="flex justify-between items-start mb-1">
                            <h3 className={clsx("font-bold text-base", theme === 'ide' ? "text-ide-text" : "text-gray-900")}>
                                {proj.title}
                            </h3>
                            <div className="flex gap-2">
                                {proj.githubUrl && (
                                    <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className={clsx("hover:text-blue-600", theme === 'ide' ? "text-gray-400" : "text-gray-500")} title={t('viewSource')}>
                                        <Github size={16} />
                                    </a>
                                )}
                                {proj.deployUrl && (
                                    <a href={proj.deployUrl} target="_blank" rel="noopener noreferrer" className={clsx("hover:text-blue-600", theme === 'ide' ? "text-gray-400" : "text-gray-500")} title={t('viewLive')}>
                                        <ExternalLink size={16} />
                                    </a>
                                )}
                            </div>
                        </div>
                        <p className={clsx(
                            "text-sm leading-relaxed mb-3 text-justify",
                            theme === 'ide' ? "text-gray-300" : "text-gray-700"
                        )}>
                            {proj.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {proj.tech.map((tech: string, i: number) => (
                                <span key={i} className={clsx(
                                    "text-xs px-2 py-0.5 rounded border font-medium",
                                    theme === 'ide' ? "bg-ide-bg text-blue-400 border-ide-border" : "bg-white text-blue-700 border-blue-100"
                                )}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
