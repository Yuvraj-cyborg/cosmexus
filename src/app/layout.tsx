import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Icon } from 'lucide-react';
import { planet } from '@lucide/lab';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cosmexus",
  description: "Beyond realms of reality",
  icons: {
    icon: "/space-shuttle.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
            <Link href="/" className="inline-flex items-center gap-2">
            <Icon iconNode={planet} />              
            <span className="font-mono text-sm tracking-widest text-foreground">COSMEXUS</span>
            </Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
