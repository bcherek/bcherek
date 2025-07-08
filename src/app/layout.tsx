import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Levi Cherek | UChicago Chemist, PhD student, Notre Dame Alumni",
  description: "Levi Cherek is a UChicago Chemist, PhD student, Notre Dame Alumni. Discover projects, articles, and more on the personal website of Levi Dolar Cherek.",
  keywords: ["Levi Cherek", "Levi Dolar Cherek", "personal website", "portfolio", "blog"],
  openGraph: {
    title: "Levi Cherek | UChicago Chemist, PhD student, Notre Dame Alumni",
    description: "Explore the personal website of Levi Cherek, featuring projects, articles, and more.",
    url: "https://levicherek.com",
    siteName: "Levi Cherek",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Levi Cherek | UChicago Chemist, PhD student, Notre Dame Alumni",
    description: "Explore the personal website of Levi Cherek, featuring projects, articles, and more.",
    creator: "@levicherek",
  },
  authors: [{ name: "Levi Cherek", url: "https://levicherek.com" }],
  creator: "Levi Cherek",
  publisher: "Levi Cherek",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Levi Cherek" />
        <meta name="keywords" content="UChicago Chemist, PhD student, Notre Dame Alumni" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Levi Cherek | Chicago Chemisty Student, PhD student, Notre Dame Alumni" />
        <meta property="og:description" content="Explore the personal website of Levi Cherek, featuring projects, articles, and more." />
        <meta property="og:url" content="https://levicherek.com" />
        <meta property="og:site_name" content="Levi Cherek" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
