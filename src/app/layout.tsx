import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

import { NavigationProvider } from '@/context/NavigationContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { SearchProvider } from '@/context/SearchContext';
import { SessionProvider } from '@/components/providers/SessionProvider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://liviuionesi.com'),
  title: {
    default: 'Liviu Ionesi — Technical Lead & Senior Full-Stack Engineer',
    template: '%s | Liviu Ionesi',
  },
  description:
    'Liviu Ionesi — Technical Lead & Senior Full-Stack Engineer building the digital backbone of the Automotive and Fintech industries with Spring Boot & React.',
  alternates: { canonical: 'https://liviuionesi.com' },
  openGraph: {
    title: 'Liviu Ionesi — Technical Lead & Senior Full-Stack Engineer',
    description:
      'Building the digital backbone of the Automotive and Fintech industries. Spring Boot microservices, React frontends, and AI-augmented software delivery.',
    url: 'https://liviuionesi.com',
    siteName: 'Liviu Ionesi Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Liviu Ionesi — Technical Lead & Senior Full-Stack Engineer',
    description:
      'Building the digital backbone of the Automotive and Fintech industries with Spring Boot microservices and React.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'light') {
                  document.documentElement.classList.add('light-theme');
                } else {
                  document.documentElement.classList.remove('light-theme');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-ide-bg text-ide-text antialiased`}
      >
        <ThemeProvider>
          <SessionProvider>
            <LanguageProvider>
              <SearchProvider>
                <NavigationProvider>{children}</NavigationProvider>
              </SearchProvider>
            </LanguageProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
