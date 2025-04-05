import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] }); // Added weights for flexibility

export const metadata = {
  title: "Abhishek Amgain - AI & Machine Learning Engineer | Portfolio",
  description: "Explore the professional portfolio of Abhishek Amgain, an AI and Machine Learning Engineer specializing in deep learning, computer vision, and NLP.",
  keywords: "Abhishek Amgain, AI Engineer, Machine Learning, Deep Learning, Computer Vision, NLP, Portfolio, Artificial Intelligence",
  authors: [{ name: "Abhishek Amgain" }],
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/abhishek_logo.png", type: "image/x-icon" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    title: "Abhishek Amgain - AI & Machine Learning Engineer | Portfolio",
    description: "Explore the professional portfolio of Abhishek Amgain, specializing in AI and Machine Learning.",
    url: "https://abhishekamgain",
    siteName: "Abhishek Amgain Portfolio",
    images: [
      {
        url: "/abhishek_logo.png", // Replace with your actual image path
        width: 1200,
        height: 630,
        alt: "Abhishek Amgain Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Amgain - AI & Machine Learning Engineer | Portfolio",
    description: "Explore the professional portfolio of Abhishek Amgain, specializing in AI and Machine Learning.",
    images: ["/abhishek_logo.png"], // Replace with your actual image path
    creator: "@yourTwitterHandle", // Add your Twitter handle
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        {/* Viewport for responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

        {/* SEO Meta Tags */}
        <meta name="author" content="Abhishek Amgain" />
        <meta name="theme-color" content="#f5e8d3" /> {/* Cream color from global.css */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={String(metadata.openGraph.images[0].width)} />
        <meta property="og:image:height" content={String(metadata.openGraph.images[0].height)} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />

        {/* Twitter Cards */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Abhishek Amgain",
            "jobTitle": "AI & Machine Learning Engineer",
            "url": "https://abhishekamgain.com.np",
            "sameAs": [
              "https://www.linkedin.com/in/abhishek-amgain-04b642265/", // Replace with your LinkedIn
              "https://github.com/amgaina", // Replace with your GitHub
              "https://twitter.com/AbhishekAmgain", // Replace with your Twitter
            ],
            "description": "AI and Machine Learning Engineer specializing in deep learning, computer vision, and natural language processing.",
            "image": "https://abhishekamgain.com.np/abhishek_logo.png", // Replace with actual image
          })}
        </script>

        {/* Canonical URL */}
        <link rel="canonical" href="https://abhishekamgain.com.np" />

        {/* Preload critical assets */}
        <link rel="preload" href="/abhishek_logo.png" as="image" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" as="style" />
      </Head>
      <body
        className={`${inter.className} overflow-x-hidden antialiased min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <main className="relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}