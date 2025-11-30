import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import IDELayout from "@/components/layout/IDELayout";
import { NavigationProvider } from "@/context/NavigationContext";

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
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-ide-bg text-ide-text overflow-hidden`}
      >
        <NavigationProvider>
          <IDELayout>{children}</IDELayout>
        </NavigationProvider>
      </body>
    </html>
  );
}
