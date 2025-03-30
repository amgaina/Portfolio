import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Abhishek Amgain - AI & Machine Learning Engineer | Portfolio",
  description: "Professional portfolio of Abhishek Amgain, AI and Machine Learning Engineer specializing in deep learning, computer vision, and NLP. Explore projects, skills, and experience.",
  keywords: "Abhishek Amgain, AI Engineer, Machine Learning Engineer, Deep Learning, Computer Vision, NLP, Portfolio, Artificial Intelligence",
  authors: [{ name: "Abhishek Amgain" }],
  robots: "index, follow",
  icons: {
    icon: [
      { url: '/favicon.ico' }, // Traditional .ico
      { url: '/icon.png', type: 'image/png' }, // Modern browsers
    ],
    apple: [
      { url: '/apple-touch-icon.png' } // Apple devices
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

        {/* Structured Data for better search appearance */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Abhishek Amgain",
            "jobTitle": "AI & Machine Learning Engineer",
            "url": "https://abhishekamgain.com.np",
            "sameAs": [
              "https://linkedin.com/in/yourprofile",
              "https://github.com/yourprofile"
            ],
            "description": "AI and Machine Learning Engineer specializing in deep learning, computer vision, and natural language processing."
          })}
        </script>

        {/* Canonical URL */}
        <link rel="canonical" href="https://abhishekamgain.com.np" />
      </Head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}