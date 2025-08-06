// File: components/papers.tsx

"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// --- DATA ---
const papers = [
  {
    title: "Data Analysis of Cancer Disparities Among African Americans in Louisiana",
    journal: "American Journal of Computer Science and Technology",
    imageUrl: "/cancer_journal_paper.png",
    link: "https://www.sciencepg.com/article/10.11648/j.ajcst.20250802.11",
  },
  // Add more papers here in the future
  // {
  //   title: "Another Research Paper",
  //   ...
  // }
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {papers.map((paper, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-full [perspective:1000px]"
            >
              <motion.div
                className="group relative w-full aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] rounded-2xl border border-border bg-background/50 shadow-xl backdrop-blur-lg [transform-style:preserve-3d] transition-all duration-300 overflow-hidden"
              >
                {/* Background Image with Parallax Effect */}
                <motion.div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={paper.imageUrl}
                    alt={paper.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>

                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 text-white">
                  <div className="mb-4">
                    <div className="p-3 rounded-full bg-primary/20 inline-block mb-3">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-primary [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)]">{paper.journal}</p>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                    {paper.title}
                  </h3>
                  <Link
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/30"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Read Full Paper
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
