"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { FileText, ExternalLink } from "lucide-react";
import Image from "next/image";

// Reusable animation helper
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 * i }
  })
};

export default function Papers() {
  return (
    <section id="papers" className="relative py-16 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Decorative blurred gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 aspect-square w-[120%] -translate-x-1/2 bg-gradient-to-tr from-red-600/20 via-purple-800/10 to-transparent opacity-50 blur-3xl" />
        <div className="absolute bottom-0 right-1/2 aspect-square w-[100%] translate-x-1/2 bg-gradient-to-br from-indigo-600/20 via-fuchsia-700/10 to-transparent opacity-40 blur-2xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl text-center font-bold mb-4 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent"
        >
          Research Papers
        </motion.h2>
        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-16 h-1 w-32 rounded-full bg-gradient-to-r from-red-500 to-red-700"
        />

        {/* Paper card */}
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-5xl"
        >
          <Card className="group/press relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-black/80 shadow-xl transition-shadow hover:shadow-red-500/30">
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />

            <CardContent className="p-0">
              <div className="grid md:grid-cols-5">
                {/* Image */}
                <div className="relative col-span-2 h-64 md:h-auto">
                  <Image
                    src="/cancer_journal_paper.png"
                    alt="Cover visualization of the cancer research paper"
                    fill
                    className="object-fit transition-transform duration-500 group-hover/press:scale-105"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60" />
                </div>

                {/* Content */}
                <div className="relative col-span-3 space-y-6 p-8 md:p-12">
                  <motion.div
                    variants={fadeUp}
                    custom={4}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-red-500/50 bg-red-500/10 backdrop-blur"
                  >
                    <FileText className="h-8 w-8 text-red-400" />
                  </motion.div>

                  <motion.h3
                    variants={fadeUp}
                    custom={5}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center text-2xl font-semibold text-red-400 md:text-3xl"
                  >
                    Data Analysis of Cancer Incidence & Mortality Disparities Among African Americans in Louisiana
                  </motion.h3>

                  <motion.p
                    variants={fadeUp}
                    custom={6}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center text-sm text-red-300"
                  >
                    Published in&nbsp;
                    <span className="font-medium">American Journal of Computer Science and Technology</span>
                  </motion.p>

                  <motion.p
                    variants={fadeUp}
                    custom={7}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-left text-base leading-relaxed text-white/90"
                  >
                    This study investigates the five most common cancers diagnosed in African‑American populations across Louisiana over the last five years, analysing gender and geographic trends to uncover underlying health inequities.
                  </motion.p>

                  <motion.ul
                    variants={fadeUp}
                    custom={8}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-3 rounded-lg border-l-4 border-red-500/70 bg-slate-800/50 p-5 text-sm"
                  >
                    <li className="flex items-start text-white gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-400" />
                      Utilized Python (Pandas, Matplotlib) & GIS dashboards to pinpoint clusters of elevated incidence.
                    </li>
                    <li className="flex items-start text-white  gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-400" />
                      Provides actionable insights for targeted screening and resource allocation in underserved communities.
                    </li>
                  </motion.ul>

                  <motion.div
                    variants={fadeUp}
                    custom={9}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-3 md:flex-row md:justify-center"
                  >
                    <button
                      onClick={() =>
                        window.open(
                          "https://www.sciencepg.com/article/10.11648/j.ajcst.20250802.11",
                          "_blank"
                        )
                      }
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-medium shadow hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    >
                      Read full paper
                      <ExternalLink className="h-4 w-4" />
                    </button>
                    <p className="text-xs italic text-white/60">
                      Special thanks to Dr.&nbsp;Sreekumari for invaluable guidance
                    </p>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section >
  );
}
