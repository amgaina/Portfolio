"use client"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, MapPin, Trophy, Presentation, Users, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LASConferencePage() {
  const conferenceDetails = [
    {
      id: "award",
      title: "Award Recognition",
      date: "2024",
      location: "Louisiana Academy of Sciences Conference",
      icon: <Trophy className="h-6 w-6" />,
      content:
        'I had the honor of winning the "Best Undergraduate Oral Presentation" award at the Louisiana Academy of Sciences (LAS) conference for my project, "Improving Student Understanding of IP Subnetting Through a Web-Based Instruction Tool". The recognition was both humbling and motivating, validating months of dedicated research and development.',
    },
    {
      id: "project",
      title: "The Subnetting Tutorial Website",
      date: "2023-2024",
      location: "University of Louisiana at Monroe",
      icon: <Presentation className="h-6 w-6" />,
      content:
        "Developed in collaboration with Dr. Paul D Wiedemeier, Professor of Computer Science at ULM, the Subnetting Tutorial Website aims to provide a comprehensive and user-friendly resource for learning and mastering subnetting concepts in computer networking. We focused on creating intuitive visualizations that make abstract networking concepts more accessible to students at all levels.",
    },
    {
      id: "technologies",
      title: "Technologies & Approach",
      date: "2023-2024",
      location: "Development Process",
      icon: <Lightbulb className="h-6 w-6" />,
      content:
        "The project leveraged HTML/CSS for structuring and styling the website, JavaScript for interactivity and functionality, and focused heavily on pedagogical approaches to visualize how subnetting works. Our goal was to transform traditional learning methods into an interactive experience that helps students grasp complex networking concepts more effectively.",
    },
    {
      id: "conference",
      title: "The Conference Experience",
      date: "2024",
      location: "LSUA Campus",
      icon: <Users className="h-6 w-6" />,
      content:
        "The conference was incredibly rewarding, filled with inspiring presentations and research talks from students and faculty across Louisiana. The opportunity to present my work to peers and experts in the field provided valuable feedback and opened doors for future collaborations. I'm deeply grateful to LAS and LSUA for organizing such an amazing event.",
    },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-primary/90">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <Link
            href="/"
            className="inline-flex items-center text-white mb-6 hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to Home</span>
          </Link>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            🚀 Exciting News!
          </motion.h1>

          <motion.p
            className="text-xl text-white/90 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Best Undergraduate Oral Presentation Award at the Louisiana Academy of Sciences Conference
          </motion.p>
        </div>
      </section>

      {/* Conference Image */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/placeholder.svg?height=600&width=1200"
              alt="Louisiana Academy of Sciences Conference"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Conference Details */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {conferenceDetails.map((detail, index) => (
            <motion.div
              key={detail.id}
              className="mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={fadeInUp}
            >
              {/* Content */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    {detail.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">{detail.title}</h2>
                </div>

                <div className="flex items-center text-sm text-slate-600 mb-6 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{detail.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{detail.location}</span>
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed mb-6">{detail.content}</p>

                <div className="h-1 w-20 bg-primary rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Acknowledgment */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Acknowledgments
            </motion.h2>

            <motion.p
              className="text-xl text-slate-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A huge shoutout to LAS and LSUA for organizing such an amazing event and to my incredible research
              advisor, Dr. Paul Wiedemeier, for your mentorship and support in creating a tool that can truly transform
              how students learn networking concepts. Grateful for this milestone and excited for what's next!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                <Link href="/#projects">See My Projects</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.blockquote
            className="text-2xl md:text-3xl font-medium text-center text-slate-700 italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            "This recognition reinforces my belief that technology should make learning more accessible and engaging for
            everyone."
          </motion.blockquote>
        </div>
      </section>
    </main>
  )
}

