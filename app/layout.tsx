// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/app/components/sections/Navbar";
import { Footer } from "@/app/components/sections/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ARNAV - Full Stack Developer",
  description: "Full Stack Developer specializing in AI-powered applications",
  keywords: "Full Stack Developer, Next.js, React, AI, Portfolio, ARNAV",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}