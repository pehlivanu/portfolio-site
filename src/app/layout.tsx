import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import IDELayout from "@/components/layout/IDELayout";
import { NavigationProvider } from "@/context/NavigationContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { SearchProvider } from "@/context/SearchContext";
import { SessionProvider } from "@/components/providers/SessionProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import WebVitals from "@/components/performance/WebVitals";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://liviuionesi.com'),
  title: "Liviu | Full Stack Developer",
  description: "From Java EE & JSP to Spring Boot Next.js Transition - Developer Portfolio",
  openGraph: {
    title: "Liviu | Full Stack Developer",
    description: "Senior Fullstack Architect & Engineer Portfolio",
    url: 'https://liviuionesi.com',
    siteName: 'Liviu Ionesi Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-ide-bg text-ide-text overflow-hidden`}
      >
        <ThemeProvider>
          <SessionProvider>
            <LanguageProvider>
              <SearchProvider>
                <NavigationProvider>
                  <IDELayout>{children}</IDELayout>
                  <Analytics />
                  <SpeedInsights />
                  <WebVitals />
                </NavigationProvider>
              </SearchProvider>
            </LanguageProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
