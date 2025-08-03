"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { ExternalLink, Award } from "lucide-react"
import Image from "next/image"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Stars, Sparkles } from "@react-three/drei"

const conferencePresentations = [
  {
    title: "LAS Conference Award Winner",
    shortDescription: "Won the best oral presentation for my IP subnetting teaching tool.",
    image: "/las_conference.png", // Ensure images are in /public
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
]

export default function Research() {

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.1 },
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="research" className="relative py-24 sm:py-32 bg-black text-white overflow-hidden">
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
            Research & Presentations
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
        </motion.div>

        {/* Presentations Grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {conferencePresentations.map((presentation, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.03, boxShadow: "0px 20px 40px rgba(255, 140, 0, 0.15)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group"
            >
              <Card className="h-full overflow-hidden rounded-2xl border-2 border-orange-500/10 bg-neutral-900/40 backdrop-blur-lg shadow-2xl shadow-black/40 transition-all duration-300 group-hover:border-orange-500/30">
                <CardContent className="p-0 h-full flex flex-col md:flex-row">
                  {/* Image Panel */}
                  <div className="relative w-full md:w-2/5 h-48 md:h-auto flex-shrink-0">
                    <Image
                      src={presentation.image}
                      alt={presentation.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r" />
                  </div>

                  {/* Content Panel */}
                  <div className="p-6 flex flex-1 flex-col justify-between">
                    <div>
                      {presentation.award && (
                        <motion.div
                          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 mb-3 animate-pulse"
                        >
                          <Award className="h-4 w-4" />
                          <span>First Place Winner</span>
                        </motion.div>
                      )}
                      <h3 className="text-xl font-bold text-white mb-2">
                        {presentation.title}
                      </h3>
                      <p className="text-neutral-300 mb-6">
                        {presentation.shortDescription}
                      </p>
                    </div>
                    <Button
                      className="w-full rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/20 font-semibold transition-all duration-300 hover:bg-orange-500/20 hover:border-orange-500/40 hover:text-white"
                      asChild
                    >
                      <a href={presentation.eventUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Event Details
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}