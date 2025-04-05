"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { GraduationCap, MapPin, Calendar, Code, BookOpen, ChevronRight } from "lucide-react"
import Image from "next/image"
import placeholder from '../public/placeholder.svg'
import { Progress } from "./ui/progress"
import { useEffect, useState } from "react"
import { Radar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

export default function Education() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const educationData = [
    {
      institution: "Oxford College of Engineering and Management",
      degree: "High School",
      period: "2019-2021",
      location: "Gaindakot - 02, Nepal",
      skills: ["QBASIC", "C", "HTML", "CSS", "JavaScript", "Microsoft Office Suite"],
      logo: "./oxford_logo.png",
      progress: 100,
      focusAreas: [
        { name: "Programming Fundamentals", value: 60 },
        { name: "Web Development", value: 60 },
        { name: "Computer Science Basics", value: 70 }
      ],
      radarData: {
        labels: ['Programming', 'Web Dev', 'CS Basics', 'Math', 'Algorithms'],
        datasets: [
          {
            label: 'Proficiency',
            data: [60, 60, 70, 50, 55],
            backgroundColor: 'rgba(239, 68, 68, 0.2)',
            borderColor: 'rgba(239, 68, 68, 0.8)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(239, 68, 68, 1)',
          }
        ]
      }
    },
    {
      institution: "University of Louisiana at Monroe",
      degree: "Undergraduate Degree",
      period: "2022 - current",
      location: "Monroe, LA",
      focus: ["AI and Machine Learning", "Mathematics and Statistics", "Software Engineering"],
      logo: "./ulm_logo.png",
      progress: 80,
      focusAreas: [
        { name: "Machine Learning", value: 80 },
        { name: "Advanced Mathematics", value: 75 },
        { name: "Software Engineering", value: 90 },
        { name: "Data Structures", value: 85 }
      ],
      radarData: {
        labels: ['ML/AI', 'Mathematics', 'Software Eng', 'Data Structures', 'Algorithms'],
        datasets: [
          {
            label: 'Proficiency',
            data: [80, 75, 90, 85, 80],
            backgroundColor: 'rgba(239, 68, 68, 0.2)',
            borderColor: 'rgba(239, 68, 68, 0.8)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(239, 68, 68, 1)',
          }
        ]
      }
    },
  ]

  // Fixed background element positions - now deterministic
  const backgroundElements = [
    { id: 1, left: 10, top: 15, size: 8 },
    { id: 2, left: 85, top: 20, size: 12 },
    { id: 3, left: 30, top: 70, size: 10 },
    { id: 4, left: 75, top: 60, size: 7 },
    { id: 5, left: 20, top: 40, size: 9 },
    { id: 6, left: 65, top: 30, size: 11 },
    { id: 7, left: 40, top: 80, size: 6 },
    { id: 8, left: 90, top: 50, size: 8 }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97]
      }
    }
  }

  const hoverEffect = {
    scale: 1.02,
    y: -5,
    boxShadow: "0 20px 25px -5px rgba(239, 68, 68, 0.1), 0 10px 10px -5px rgba(239, 68, 68, 0.04)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }

  const skillHover = {
    scale: 1.1,
    backgroundColor: "rgba(239, 68, 68, 0.3)",
    boxShadow: "0 0 15px rgba(239, 68, 68, 0.5)",
    transition: {
      duration: 0.2
    }
  }

  return (
    <section id="education" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      {/* Animated background elements - only render on client */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          {backgroundElements.map((el) => (
            <motion.div
              key={el.id}
              className="absolute rounded-full bg-red-500"
              style={{
                width: `${el.size}px`,
                height: `${el.size}px`,
                left: `${el.left}%`,
                top: `${el.top}%`,
              }}
              animate={{
                y: [0, Math.sin(el.id * 2) * 15],
                x: [0, Math.cos(el.id) * 10],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 5 + el.id,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: el.id * 0.5
              }}
            />
          ))}
        </div>
      )}

      {/* Floating particles */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-red-500/20"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, (Math.random() - 0.5) * 100],
                x: [0, (Math.random() - 0.5) * 50],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Title Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Education Journey
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
            My academic path from foundational studies to specialized AI education
          </motion.p>
        </motion.div>

        {/* Timeline with Cards */}
        <motion.div
          className="relative"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-red-500 to-red-700 hidden lg:block"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={item}
              custom={index}
              className={`relative mb-16 lg:mb-24 ${index % 2 === 0 ? 'lg:pr-[55%]' : 'lg:pl-[55%]'}`}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-12 w-6 h-6 rounded-full bg-red-500 border-4 border-gray-900 shadow-lg hidden lg:block z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                viewport={{ once: true }}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={hoverEffect}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-red-500 rounded-xl opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300 -z-10" />

                {/* Year indicator */}
                <div className="absolute -top-6 left-0 lg:left-1/2 lg:-translate-x-1/2 text-sm font-medium text-red-400 bg-gray-900 px-3 py-1 rounded-full border border-red-500/30">
                  {edu.period.split(' ')[0]}
                  <ChevronRight className="inline ml-1 w-4 h-4" />
                </div>

                <Card className="overflow-hidden h-full border border-gray-700 bg-gray-900/50 backdrop-blur-sm relative">
                  {/* Animated border */}
                  <div className="absolute inset-0 overflow-hidden rounded-xl">
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/30 transition-all duration-500 rounded-xl" />
                  </div>

                  <CardContent className="p-0">
                    {/* Institution Header */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-red-900/30 to-red-900/10 p-6 flex items-start relative overflow-hidden"
                    >
                      {/* Animated background */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-transparent" />
                      </div>

                      <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center mr-6 flex-shrink-0 border border-gray-700 relative group-hover:border-red-500/50 transition-colors duration-300">
                        <Image
                          src={edu.logo || placeholder}
                          alt={edu.institution}
                          width={80}
                          height={80}
                          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                          quality={100}
                        />
                      </div>
                      <div className="flex-1 relative z-10">
                        <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                          {edu.institution}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 mt-2">
                          <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="px-3 py-1 bg-red-900/40 text-red-400 rounded-full text-sm font-medium border border-red-500/30 group-hover:bg-red-900/60 group-hover:text-white transition-colors duration-300"
                          >
                            {edu.degree}
                          </motion.span>
                          {edu.progress && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 0.4, delay: 0.4 }}
                              viewport={{ once: true }}
                              className="flex items-center gap-2"
                            >
                              <div className="w-24">
                                <Progress
                                  value={edu.progress}
                                  className="h-2 bg-red group-hover:bg-gray-600 transition-colors duration-300"
                                  indicatorClassName="bg-gradient-to-r from-red-500 to-red-600"
                                />
                              </div>
                              <span className="text-sm text-red group-hover:text-white transition-colors duration-300">
                                {edu.progress}%
                              </span>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>

                    <div className="p-6">
                      {/* Meta Information */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-6 mb-6"
                      >
                        <motion.div
                          variants={fadeInUp}
                          className="flex items-center group"
                        >
                          <Calendar className="h-5 w-5 text-red-500 mr-2 group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                            {edu.period}
                          </span>
                        </motion.div>
                        {edu.location && (
                          <motion.div
                            variants={fadeInUp}
                            className="flex items-center group"
                          >
                            <MapPin className="h-5 w-5 text-red-500 mr-2 group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                              {edu.location}
                            </span>
                          </motion.div>
                        )}
                      </motion.div>

                      {/* Radar Chart */}
                      {edu.radarData && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="mb-8 bg-gray-800/50 p-4 rounded-lg border border-gray-700 group-hover:border-red-500/30 transition-colors duration-300"
                        >
                          <div className="flex items-center mb-4">
                            <BookOpen className="h-5 w-5 text-red-500 mr-2 group-hover:scale-110 transition-transform duration-300" />
                            <h4 className="font-semibold text-lg text-white group-hover:text-red-400 transition-colors duration-300">
                              Skills Radar
                            </h4>
                          </div>
                          <div className="h-64">
                            <Radar
                              data={edu.radarData}
                              options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                scales: {
                                  r: {
                                    angleLines: {
                                      color: 'rgba(255, 255, 255, 0.1)'
                                    },
                                    grid: {
                                      color: 'rgba(255, 255, 255, 0.1)'
                                    },
                                    pointLabels: {
                                      color: 'rgba(255, 255, 255, 0.7)',
                                      font: {
                                        size: 12
                                      }
                                    },
                                    ticks: {
                                      display: false,
                                      backdropColor: 'transparent'
                                    },
                                    suggestedMin: 0,
                                    suggestedMax: 100
                                  }
                                },
                                plugins: {
                                  legend: {
                                    labels: {
                                      color: 'white'
                                    }
                                  }
                                }
                              }}
                            />
                          </div>
                        </motion.div>
                      )}

                      {/* Focus Areas */}
                      {edu.focusAreas && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="mb-8"
                        >
                          <div className="flex items-center mb-4">
                            <BookOpen className="h-5 w-5 text-red-500 mr-2 group-hover:scale-110 transition-transform duration-300" />
                            <h4 className="font-semibold text-lg text-white group-hover:text-red-400 transition-colors duration-300">
                              Focus Areas Proficiency
                            </h4>
                          </div>
                          <div className="space-y-4">
                            {edu.focusAreas.map((area, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 * i }}
                                viewport={{ once: true }}
                                className="space-y-1 group"
                              >
                                <div className="flex justify-between text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                                  <span>{area.name}</span>
                                  <span>{area.value}%</span>
                                </div>
                                <Progress
                                  value={area.value}
                                  className="h-2 bg-red group-hover:bg-gray-600 transition-colors duration-300"
                                  indicatorClassName="bg-gradient-to-r from-red-500 to-red-600"
                                />
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {/* Skills */}
                      {edu.skills && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex items-center mb-4">
                            <Code className="h-5 w-5 text-red-500 mr-2 group-hover:scale-110 transition-transform duration-300" />
                            <h4 className="font-semibold text-lg text-white group-hover:text-red-400 transition-colors duration-300">
                              Acquired Skills
                            </h4>
                          </div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-2"
                          >
                            {edu.skills.map((skill, i) => (
                              <motion.span
                                key={i}
                                variants={fadeInUp}
                                whileHover={skillHover}
                                className="px-3 py-1.5 bg-red-900/40 text-red-400 rounded-full text-sm font-medium border border-red-500/30 cursor-default"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </motion.div>
                        </motion.div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}