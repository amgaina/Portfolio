"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Calendar, Briefcase, ChevronRight, Rocket, BarChart2, Users } from "lucide-react"
import Image from "next/image"
import placeholderSvg from '../public/placeholder.svg'
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

export default function Experience() {
  const [isClient, setIsClient] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "IBM LED",
      period: "Oct 2023 - Present",
      responsibilities: [
        "Collaborated with peers on various software development projects, contributing to a 30% improvement in application efficiency",
        "Managed and optimized databases, improving query performance by 25%",
        "Reduced system errors by 20% through rigorous testing and debugging",
        "Created NLP-powered chatbots enhancing customer engagement",
      ],
      skills: [
        "Python", "ML/DL", "Computer Vision", "SpringBoot",
        "React", "React Native", "Power Apps"
      ],
      logo: "./led_logo.png",
      impact: "30% efficiency gain",
      icon: <Rocket className="w-5 h-5 text-red-500" />
    },
    {
      title: "Data Analyst Intern",
      company: "Qatar Airways",
      period: "May 2023 - Aug 2023",
      responsibilities: [
        "Developed data models improving decision-making by 15%",
        "Identified trends leading to 10% revenue optimization",
        "Created interactive dashboards in Tableau/PowerBI",
      ],
      skills: ["Tableau", "Alteryx", "PowerBI", "Data Analysis"],
      logo: "./qatar_logo.png",
      impact: "15% better decisions",
      icon: <BarChart2 className="w-5 h-5 text-red-500" />
    },
    {
      title: "Tutor",
      company: "US Dept of Education",
      period: "Aug 2022 - Oct 2023",
      responsibilities: [
        "Tutored first-generation students in TRIO program",
        "Built problem-solving and analytical skills",
        "Organized coding workshops in Monroe area",
      ],
      skills: ["Teaching", "Mentorship", "Java", "Python"],
      logo: "./trio_logo.png",
      impact: "100+ students helped",
      icon: <Users className="w-5 h-5 text-red-500" />
    },
  ]

  // Fixed particle positions to avoid hydration mismatch
  const particles = [
    { id: 1, size: 3, left: 10, top: 15 },
    { id: 2, size: 4, left: 85, top: 20 },
    { id: 3, size: 2, left: 30, top: 70 },
    { id: 4, size: 5, left: 75, top: 60 },
    { id: 5, size: 3, left: 20, top: 40 },
    { id: 6, size: 4, left: 65, top: 30 },
    { id: 7, size: 2, left: 40, top: 80 },
    { id: 8, size: 3, left: 90, top: 50 }
  ]

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section
      id="experience"
      className="relative py-16 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden"
      ref={ref}
    >
      {/* Animated background elements - only render on client */}
      {isClient && (
        <>
          <div className="absolute inset-0 opacity-20 pointer-events-none">
          </div>
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
        </>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            My career path through innovative companies and impactful roles
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-red-500/30 via-red-500 to-red-500/30 hidden md:block" />

          <div className="space-y-8 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative group ${index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%]'}`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Timeline dot - hidden on mobile */}
                <motion.div
                  className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-12 w-4 h-4 rounded-full border-4 border-gray-900 z-10 hidden md:block ${activeIndex === index ? 'bg-red-500 scale-125' : 'bg-gray-700'
                    }`}
                  transition={{ type: "spring", stiffness: 500 }}
                />

                {/* Mobile date indicator */}
                <div className="md:hidden flex items-center mb-3 text-red-400">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{exp.period}</span>
                </div>

                <motion.div
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(239, 68, 68, 0.1), 0 10px 10px -5px rgba(239, 68, 68, 0.04)"
                  }}
                  whileTap={{ scale: 0.98 }} // Mobile tap feedback
                  transition={{ duration: 0.3 }}
                  className={`relative rounded-xl overflow-hidden border border-gray-700 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm ${activeIndex === index ? 'ring-2 ring-red-500/50' : ''
                    }`}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Impact badge */}
                  <motion.div
                    className="absolute -top-0 right-4 md:right-6 bg-gradient-to-r from-red-600 to-red-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.2 }}
                  >
                    {exp.icon}
                    <span className="ml-2">{exp.impact}</span>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* Company Info */}
                    <div className="p-6 md:p-8 bg-gradient-to-b from-gray-800/70 to-gray-900/70 md:border-r border-gray-700 flex flex-col items-center md:items-start">
                      <motion.div
                        className="w-16 h-16 md:w-24 md:h-24 rounded-xl overflow-hidden bg-gray-800 border border-gray-700 flex items-center justify-center mb-4 md:mb-6 group-hover:border-red-500/50 transition-colors duration-300"
                        initial={{ scale: 0.8 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ delay: index * 0.15 }}
                      >
                        <Image
                          src={exp.logo || placeholderSvg}
                          alt={exp.company}
                          width={80}
                          height={80}
                          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                          quality={100}
                        />
                      </motion.div>

                      <h3 className="text-xl md:text-2xl font-bold text-center md:text-left group-hover:text-red-400 transition-colors duration-300">
                        {exp.company}
                      </h3>
                      <p className="text-red-400 font-medium mt-1 text-sm md:text-base">{exp.title}</p>

                      <div className="hidden md:flex items-center mt-4 text-gray-300 group-hover:text-white transition-colors duration-300">
                        <Calendar className="h-4 w-4 text-red-500 mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 md:col-span-2">
                      <div className="mb-6">
                        <div className="flex items-center mb-3 md:mb-4">
                          <Briefcase className="h-5 w-5 text-red-500 mr-2" />
                          <h4 className="font-semibold text-base md:text-lg group-hover:text-red-400 transition-colors duration-300">
                            Key Contributions
                          </h4>
                        </div>

                        <ul className="space-y-2 md:space-y-3">
                          {exp.responsibilities.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.4, delay: index * 0.15 + i * 0.1 }}
                              className="flex items-start text-sm md:text-base text-gray-300 group-hover:text-white transition-colors duration-300"
                            >
                              <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-base md:text-lg mb-2 md:mb-3 group-hover:text-red-400 transition-colors duration-300">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-1 md:gap-2">
                          {exp.skills.map((skill, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={inView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ duration: 0.3, delay: index * 0.15 + i * 0.05 }}
                              whileHover={{
                                scale: 1.1,
                                backgroundColor: "rgba(239, 68, 68, 0.3)",
                                boxShadow: "0 0 15px rgba(239, 68, 68, 0.5)"
                              }}
                            >
                              <Badge
                                variant="outline"
                                className="text-xs md:text-sm bg-gray-800/70 text-gray-300 border-gray-700 group-hover:border-red-500/30 cursor-default"
                              >
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}