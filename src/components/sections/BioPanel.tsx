'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useLanguage } from '@/context/LanguageContext';
import Highlight from '@/components/ui/Highlight';

export default function BioPanel() {
  const { data } = useLanguage();
  const { linkedInProfile } = data;

  return (
    <div className="prose prose-invert max-w-none p-6 text-sm">
      <ReactMarkdown
        components={{
          h3: ({ children, ...props }) => (
            <h3
              className="text-ide-text-active mt-8 mb-6 text-lg leading-relaxed font-bold"
              {...props}
            >
              {React.Children.map(children, (child) =>
                typeof child === 'string' ? <Highlight text={child} /> : child
              )}
            </h3>
          ),
          p: ({ children, ...props }) => (
            <p className="text-ide-text mb-4 leading-relaxed" {...props}>
              {React.Children.map(children, (child) =>
                typeof child === 'string' ? <Highlight text={child} /> : child
              )}
            </p>
          ),
          ul: ({ ...props }) => (
            <ul className="text-ide-text mb-4 list-disc space-y-2 pl-5" {...props} />
          ),
          li: ({ children, ...props }) => (
            <li className="pl-1 leading-relaxed" {...props}>
              {React.Children.map(children, (child) =>
                typeof child === 'string' ? <Highlight text={child} /> : child
              )}
            </li>
          ),
          strong: ({ children, ...props }) => (
            <strong className="text-ide-text-active font-semibold" {...props}>
              {React.Children.map(children, (child) =>
                typeof child === 'string' ? <Highlight text={child} /> : child
              )}
            </strong>
          ),
          hr: ({ ...props }) => <hr className="border-ide-border my-8" {...props} />,
          em: ({ children, ...props }) => (
            <em className="text-ide-text mt-4 block italic opacity-90" {...props}>
              {React.Children.map(children, (child) =>
                typeof child === 'string' ? <Highlight text={child} /> : child
              )}
            </em>
          ),
        }}
      >
        {linkedInProfile.fullBio}
      </ReactMarkdown>
    </div>
  );
}
