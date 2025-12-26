// File: components/research.tsx

"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import Link from "next/link";

// --- DATA ---
const conferencePresentations = [
  {
    title: "LAS Conference Award Winner",
    shortDescription: "Won the best oral presentation for my IP subnetting teaching tool.",
    image: "/las_conference.png",
    eventUrl: "https://sites.google.com/selu.edu/las-2025-annual-meeting/home",
    award: true
  },
  {
    title: "Biomedical Research Day 2024",
    shortDescription: "Presented cancer disparities research using Python data analysis.",
    image: "/braid_conference.png",
    eventUrl: "https://www.lsuhs.edu/centers/cardiovascular-diseases-and-sciences/events/braid",
    award: false
  }
];

// --- MAIN COMPONENT ---
export default function Research() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
  };

  return (
    <section id="research" className="relative w-full bg-transparent py-24 sm:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Research & <span className="text-primary">Presentations</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my contributions to academic conferences and research initiatives.
          </p>
        </motion.div>

        {/* Presentations Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {conferencePresentations.map((presentation, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="flex"
            >
              <div className="w-full">
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-white/3 to-transparent dark:from-black/20 p-6 sm:p-8 shadow-lg transition hover:scale-[1.01]">
                  {/* Decorative top stripe */}
                  <div className="absolute -top-6 left-6 right-6 h-2 rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-400 opacity-80 blur-[6px]" />

                  {/* Award badge */}
                  {presentation.award && (
                    <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
                      <Award className="h-4 w-4" />
                      <span>Winner</span>
                    </div>
                  )}

                  <div className="relative z-10 flex flex-col gap-3">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">{presentation.title}</h3>
                    <p className="text-sm text-muted-foreground">{presentation.shortDescription}</p>

                    <div className="mt-3 flex items-center gap-3">
                      <Link
                        href={presentation.eventUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-foreground border border-white/10 hover:bg-white/20 transition"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Details
                      </Link>

                      <span className="ml-auto text-xs text-muted-foreground">Event</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
