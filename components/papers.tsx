// File: components/papers.tsx

"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import Link from "next/link";

// --- DATA ---
const papers = [
  {
    title: "Data Analysis of Cancer Disparities Among African Americans in Louisiana",
    journal: "American Journal of Computer Science and Technology",
    imageUrl: "/cancer_journal_paper.png",
    link: "https://www.sciencepg.com/article/10.11648/j.ajcst.20250802.11",
  },
];

// --- MAIN COMPONENT ---
export default function Papers() {
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
    <section id="papers" className="relative w-full bg-transparent py-24 sm:py-32">
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
            Published <span className="text-primary">Papers</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my academic publications and contributions to the field.
          </p>
        </motion.div>

        {/* Papers Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {papers.map((paper, index) => (
            <motion.article key={index} variants={itemVariants} className="flex">
              <div className="w-full">
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-white/3 to-transparent dark:from-black/20 p-6 sm:p-8 shadow-lg transition hover:scale-[1.01]">
                  {/* Decorative accent */}
                  <div className="absolute -top-6 left-6 right-6 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-400 opacity-80 blur-[6px]" />

                  <div className="relative z-10 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-full bg-primary/20 inline-flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-sm font-medium text-primary">{paper.journal}</p>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-foreground">{paper.title}</h3>

                    <div className="mt-2 flex items-center gap-3">
                      <Link
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-foreground border border-white/10 hover:bg-white/20 transition"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Read
                      </Link>

                      <span className="ml-auto text-xs text-muted-foreground">Published</span>
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
