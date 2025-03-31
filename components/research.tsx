"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import {  ExternalLink, Award } from "lucide-react"
import Image from "next/image"

export default function Research() {
  const conferencePresentations = [
    {
      title: "LAS Conference Award Winner",
      shortDescription: "Won the best oral presentation for my IP subnetting teaching tool.",
      image: "./las_conference.png",
      eventUrl: "https://sites.google.com/selu.edu/las-2025-annual-meeting/home"
    },
    {
      title: "Biomedical Research Day 2024",
      shortDescription: "Presented cancer disparities research using Python data analysis.",
      image: "./braid_conference.png",
      eventUrl: "https://www.lsuhs.edu/centers/cardiovascular-diseases-and-sciences/events/braid"
    }
  ]

  return (
    <section id="research" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Conference Presentations</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {conferencePresentations.map((presentation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={presentation.image}
                      alt={presentation.title}
                      fill
                      className="object-contain"
                      sizes="100vw"
                    />
                    {index === 0 && (
                      <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <Award className="h-4 w-4 mr-1" />
                        First Place
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{presentation.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {presentation.shortDescription}
                    </p>
                    <div className="mt-auto">
                      <Button
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                        asChild
                      >
                        <a href={presentation.eventUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Event Details
                        </a>
                      </Button>
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