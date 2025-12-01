import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import IDELayout from "@/components/layout/IDELayout";
import { NavigationProvider } from "@/context/NavigationContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { SearchProvider } from "@/context/SearchContext";

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
  description: "Java EE to Next.js Transition - Developer Portfolio",
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
            </NavigationProvider>
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
