"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { FileText, ExternalLink, Lightbulb } from "lucide-react"
import Image from "next/image"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Stars, Sparkles } from "@react-three/drei"
import { Button } from "./ui/button"
import Link from "next/link"

export default function Papers() {
  const paper = {
    title: "Data Analysis of Cancer Disparities Among African Americans in Louisiana",
    journal: "American Journal of Computer Science and Technology",
    imageUrl: "/cancer_journal_paper.png", // Ensure image is in /public
    link: "https://www.sciencepg.com/article/10.11648/j.ajcst.20250802.11",
    description: "This study investigates the five most common cancers in African American populations across Louisiana, analyzing gender and geographic trends to uncover underlying health inequities.",
    insights: [
      "Utilized Python (Pandas, Matplotlib) & GIS to pinpoint clusters of elevated incidence.",
      "Provides actionable insights for targeted screening and resource allocation in underserved communities."
    ],
    acknowledgement: "Special thanks to Dr. Sreekumari for her invaluable guidance."
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="papers" className="relative py-24 sm:py-32 bg-black text-white overflow-hidden">
      {/* --- Thematic Star Background --- */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Suspense fallback={null}>
            <Stars radius={200} depth={60} count={12000} factor={7} saturation={0} fade speed={1} />
            <Sparkles count={100} scale={10} size={3} speed={0.5} color="#ffae34" />
          </Suspense>
        </Canvas>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(10,5,0,0)_60%,_#000000_100%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Published Research
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
        </motion.div>

        {/* Paper Card */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            whileHover={{ y: -8, scale: 1.02, boxShadow: "0px 20px 40px rgba(255, 140, 0, 0.15)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card className="group overflow-hidden rounded-2xl border-2 border-orange-500/10 bg-neutral-900/40 backdrop-blur-lg shadow-2xl shadow-black/40">
              <CardContent className="p-0 grid grid-cols-1 md:grid-cols-3">

                {/* Image Panel */}
                <div className="relative md:col-span-1 h-64 md:h-auto">
                  <Image
                    src={paper.imageUrl}
                    alt="Cover visualization of the cancer research paper"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content Panel */}
                <motion.div
                  className="md:col-span-2 p-8 lg:p-10 space-y-6"
                  variants={sectionVariants} // Reuse section variants for staggering
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <motion.div variants={itemVariants} className="flex items-center gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-full border-2 border-orange-500/20 bg-black/30">
                      <FileText className="h-7 w-7 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-orange-300">Published in</p>
                      <p className="font-semibold text-white">{paper.journal}</p>
                    </div>
                  </motion.div>

                  <motion.h3 variants={itemVariants} className="text-2xl lg:text-3xl font-bold text-white">
                    {paper.title}
                  </motion.h3>

                  <motion.p variants={itemVariants} className="text-neutral-300 leading-relaxed">
                    {paper.description}
                  </motion.p>

                  <motion.div variants={itemVariants} className="rounded-lg border border-orange-500/10 bg-black/20 p-4 space-y-3">
                    <h4 className="font-semibold text-orange-400 flex items-center gap-2"><Lightbulb className="h-5 w-5" />Key Insights</h4>
                    <ul className="space-y-2 text-sm text-neutral-300">
                      {paper.insights.map((insight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                    <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all hover:scale-105 hover:shadow-orange-500/30">
                      <Link href={paper.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Read Full Paper
                      </Link>
                    </Button>
                    <p className="text-xs text-neutral-400 italic">{paper.acknowledgement}</p>
                  </motion.div>
                </motion.div>

              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}