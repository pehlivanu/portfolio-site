import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import IDELayout from "@/components/layout/IDELayout";
import { NavigationProvider } from "@/context/NavigationContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { SearchProvider } from "@/context/SearchContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { WebVitals } from "@/components/performance/WebVitals";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Liviu | Full Stack Developer",
  description: "From Java EE &m JSP to Spring Boot Next.js Transition - Developer Portfolio",
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
          <SearchProvider>
            <NavigationProvider>
              <IDELayout>{children}</IDELayout>
              <Analytics />
              <SpeedInsights />
              <WebVitals />
            </NavigationProvider>
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
