"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { ExternalLink, Award, Presentation } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Research() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const conferencePresentations = [
    {
      title: "LAS Conference Award Winner",
      shortDescription: "Won the best oral presentation for my IP subnetting teaching tool.",
      image: "./las_conference.png",
      eventUrl: "https://sites.google.com/selu.edu/las-2025-annual-meeting/home",
      award: true
    },
    {
      title: "Biomedical Research Day 2024",
      shortDescription: "Presented cancer disparities research using Python data analysis.",
      image: "./braid_conference.png",
      eventUrl: "https://www.lsuhs.edu/centers/cardiovascular-diseases-and-sciences/events/braid",
      award: false
    }
  ]

  // Floating particles configuration
  const particles = [
    { id: 1, size: 4, left: 15, top: 20 },
    { id: 2, size: 6, left: 85, top: 30 },
    { id: 3, size: 5, left: 30, top: 70 },
    { id: 4, size: 7, left: 75, top: 60 }
  ]

  return (
    <section id="research" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map(particle => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-red-500/20"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, Math.sin(particle.id) * 20],
                x: [0, Math.cos(particle.id) * 15],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 5 + particle.id,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: particle.id * 0.3
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Research Presentations
            </span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            My academic research contributions presented at conferences
          </motion.p>
        </motion.div>

        {/* Presentations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {conferencePresentations.map((presentation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border border-gray-700 bg-gray-900/50 backdrop-blur-sm group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0 h-full flex flex-col">
                  {/* Image with hover overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={presentation.image}
                      alt={presentation.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Award badge */}
                    {presentation.award && (
                      <motion.div
                        className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center shadow-lg"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <Award className="h-4 w-4 mr-1" />
                        First Place
                      </motion.div>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Presentation className="h-12 w-12 text-white opacity-80" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <motion.h3
                      className="text-xl font-bold mb-2 text-white group-hover:text-red-400 transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {presentation.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-400 mb-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {presentation.shortDescription}
                    </motion.p>
                    <div className="mt-auto">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <Button
                          variant="outline"
                          className="w-full bg-red-600 hover:bg-red-700 text-white border-red-600 hover:border-red-700 group-hover:scale-[1.02] transition-transform"
                          asChild
                        >
                          <a href={presentation.eventUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                            View Event Details
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}