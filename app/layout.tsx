// File: app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Abhishek Amgain - AI & Machine Learning Engineer | Portfolio",
  description: "Explore the professional portfolio of Abhishek Amgain, an AI and Machine Learning Engineer specializing in deep learning, computer vision, and NLP.",
  keywords: "Abhishek Amgain, AI Engineer, Machine Learning, Deep Learning, Computer Vision, NLP, Portfolio, Artificial Intelligence",
};

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
          <div className="background-container">
            <div id="day-sky">
              <div id="stars"></div>
              <div id="stars2"></div>
              <div id="stars3"></div>
            </div>
            <div id="night-sky">
              <div id="stars"></div>
              <div id="stars2"></div>
              <div id="stars3"></div>
            </div>
          </div>

          <Navbar />

          <main className="relative z-10 min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
