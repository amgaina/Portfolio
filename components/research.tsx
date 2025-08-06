// File: components/research.tsx

"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import Image from "next/image";
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {conferencePresentations.map((presentation, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-full h-full [perspective:1000px]"
            >
              <motion.div
                className="group relative w-full h-[480px] sm:h-[450px] rounded-2xl border border-border bg-background/50 shadow-xl backdrop-blur-lg [transform-style:preserve-3d] transition-all duration-300 overflow-hidden"
              >
                {/* Background Image with Parallax Effect */}
                <motion.div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={presentation.image}
                    alt={presentation.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>

                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

                {/* Award Banner */}
                {presentation.award && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground shadow-lg backdrop-blur-sm">
                    <Award className="h-4 w-4" />
                    <span>First Place Winner</span>
                  </div>
                )}

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                    {presentation.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/90 mb-6 [text-shadow:_0_1px_3px_rgba(0,0,0,0.4)]">
                    {presentation.shortDescription}
                  </p>
                  <Link
                    href={presentation.eventUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/30"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Event Details
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
