// File: app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import ClientBackgrounds from '@/components/clientBackground';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  // Sets a base URL for resolving relative paths, like for the Open Graph image.
  metadataBase: new URL('https://abhishekamgain.com'), // Replace with your actual domain

  title: "Abhishek Amgain | AI & Machine Learning Engineer",
  description: "Explore the professional portfolio of Abhishek Amgain, an AI and Machine Learning Engineer specializing in deep learning, computer vision, and NLP.",

  // Keywords for search engines
  keywords: ["Abhishek Amgain", "AI Engineer", "Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Portfolio", "Artificial Intelligence", "Full Stack Developer"],

  // Information about the author
  authors: [{ name: "Abhishek Amgain", url: "https://abhishekamgain.com" }], // Replace with your domain
  creator: "Abhishek Amgain",
  publisher: "Abhishek Amgain",

  // --- ICONS ---
  // Defines the icons for browser tabs, bookmarks, and mobile devices.
  icons: {
    icon: [
      { url: "./abhishek_logo.png", type: "image/png" },
    ],
    shortcut: "./abhishek_logo.png",
    apple: "./abhishek_logo.png",
  },

  // --- OPEN GRAPH (for social sharing on Facebook, LinkedIn, etc.) ---
  openGraph: {
    title: "Abhishek Amgain | AI & Machine Learning Engineer",
    description: "Explore the professional portfolio of an AI and Machine Learning Engineer specializing in deep learning, computer vision, and NLP.",
    url: "https://abhishekamgain.com", // Replace with your domain
    siteName: "Abhishek Amgain's Portfolio",
    images: [
      {
        url: "./abhishek_logo.png", // Path to your logo in the /public folder
        width: 512, // Specify image dimensions
        height: 512,
        alt: "Abhishek Amgain's Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // --- TWITTER CARD (for sharing on Twitter) ---
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Amgain | AI & Machine Learning Engineer",
    description: "Explore the professional portfolio of an AI and Machine Learning Engineer specializing in deep learning, computer vision, and NLP.",
    images: ["./abhishek_logo.png"], // Path to your logo
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* --- Animated Backgrounds Container --- */}
          <ClientBackgrounds />

          <Navbar />

          <main className="relative z-10 min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
