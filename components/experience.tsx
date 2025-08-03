"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Calendar, MapPin, ChevronDown, Rocket, BarChart2, Users, Briefcase } from "lucide-react"
import Image from "next/image"
import { Suspense, useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { Stars, Sparkles } from "@react-three/drei"

// Data for the Experience section - DATES UPDATED FOR CURRENT TIME CONTEXT
const experiences = [
  {
    title: "Web Developer Intern",
    company: "Kinetix Solutions",
    period: "May 2025 - Present",
    location: "Monroe, Louisiana",
    logo: "/kinetix-logo.png",
    responsibilities: [
      "Developing and maintaining full-stack web applications using the Next.js framework and TypeScript.",
      "Integrating Azure Cloud Services for scalable and reliable backend infrastructure.",
      "Implementing secure payment processing with Stripe and managing user authentication via NextAuth.",
      "Connecting to and querying the HaloPSA database to build dynamic, data-driven features.",
      "Creating insightful data visualizations and dashboards using Power BI."
    ],
    skills: ["Next.js", "TailwindCSS", "Azure", "NextAuth", "Stripe", "Power BI", "HaloPSA DB"],
    isCurrent: true,
  },
  {
    title: "Software Engineer Intern",
    company: "IBM LED",
    period: "Oct 2023 - May 2025",
    location: "Monroe, Louisiana",
    logo: "/led_logo.png",
    responsibilities: [
      "Collaborated on diverse software projects, boosting application efficiency by 30%.",
      "Managed and optimized databases, achieving a 25% improvement in query performance.",
      "Reduced critical system errors by 20% through rigorous testing and debugging protocols.",
      "Engineered NLP-powered chatbots that enhanced customer engagement and support metrics.",
    ],
    skills: ["Python", "ML/DL", "Computer Vision", "SpringBoot", "React", "React Native", "Power Apps"],
  },
  {
    title: "Data Analyst Intern",
    company: "Qatar Airways",
    period: "May 2023 - Aug 2023",
    location: "Remote",
    logo: "/qatar_logo.png",
    responsibilities: [
      "Developed predictive data models that improved operational decision-making by 15%.",
      "Identified key market trends, contributing to a 10% optimization in revenue streams.",
      "Designed and delivered interactive dashboards using Tableau and Power BI for executive reporting.",
    ],
    skills: ["Tableau", "Alteryx", "PowerBI", "SQL", "Data Modeling"],
  },
  {
    title: "Tutor & Mentor",
    company: "US Dept. of Education (TRIO)",
    period: "Aug 2022 - Oct 2023",
    location: "Monroe, Louisiana",
    logo: "/trio_logo.png",
    responsibilities: [
      "Tutored over 100 first-generation students in STEM subjects through the TRIO program.",
      "Fostered critical problem-solving and analytical skills in a supportive academic environment.",
      "Organized and led community coding workshops, increasing local student engagement in tech.",
    ],
    skills: ["Teaching", "Mentorship", "Java", "Python", "Community Outreach"],
  },
]

// Main component
export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-black text-white overflow-hidden">
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
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
        </motion.div>

        {/* --- Interactive Experience Panel --- */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="md:flex gap-8 rounded-2xl border-2 border-orange-500/10 bg-neutral-900/40 p-4 backdrop-blur-lg shadow-2xl shadow-black/40">
            {/* Desktop Tabs */}
            <aside className="hidden md:flex flex-col w-1/3 lg:w-1/4">
              <div className="relative">
                {experiences.map((exp, index) => (
                  <button
                    key={exp.company}
                    onClick={() => setActiveIndex(index)}
                    className="w-full text-left p-4 rounded-lg flex items-center gap-4 transition-colors duration-300 relative"
                  >
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={40}
                      height={40}
                      className={`flex-shrink-0 rounded-md transition-all duration-300 ${activeIndex === index ? 'grayscale-0 opacity-100' : 'grayscale opacity-50'}`}
                    />
                    <span className={`font-semibold transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-neutral-400'}`}>
                      {exp.company}
                    </span>
                  </button>
                ))}
                <motion.div
                  layout
                  layoutId="active-tab-indicator"
                  className="absolute inset-0 bg-orange-500/10 border-l-2 border-orange-500 rounded-lg -z-10"
                  initial={{ y: 0 }}
                  animate={{ y: activeIndex * 64 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              </div>
            </aside>

            {/* Content Panel */}
            <main className="w-full md:w-2/3 lg:w-3/4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="w-full"
                >
                  {/* Mobile Accordion */}
                  <div className="md:hidden">
                    {experiences.map((exp, index) => (
                      <div key={index} className="border-b border-orange-500/10 last:border-b-0">
                        <button
                          onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                          className="w-full text-left p-4 flex justify-between items-center"
                        >
                          <div className="flex items-center gap-4">
                            <Image src={exp.logo} alt={`${exp.company} logo`} width={40} height={40} className="rounded-md" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <motion.div animate={{ rotate: activeIndex === index ? 180 : 0 }}>
                            <ChevronDown className="h-5 w-5 text-orange-400" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {activeIndex === index && (
                            <motion.div
                              initial="collapsed"
                              animate="open"
                              exit="collapsed"
                              variants={{
                                open: { opacity: 1, height: 'auto' },
                                collapsed: { opacity: 0, height: 0 }
                              }}
                              transition={{ duration: 0.4, ease: 'easeOut' }}
                              className="overflow-hidden"
                            >
                              {/* In the mobile view, we already know the index is valid */}
                              <ExperienceContent exp={exp} />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>

                  {/* --- FIX IS HERE --- */}
                  {/* Desktop Content - Conditionally render only if activeIndex is valid */}
                  <div className="hidden md:block">
                    {activeIndex !== -1 && experiences[activeIndex] ? (
                      <ExperienceContent exp={experiences[activeIndex]} />
                    ) : null}
                  </div>
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Sub-component for displaying experience details
const ExperienceContent = ({ exp }: { exp: typeof experiences[0] }) => {
  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">{exp.title}</h3>
          <div className="flex items-center gap-4 mt-2 text-sm text-neutral-40receive0">
            <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-orange-500" />{exp.period}</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-orange-500" />{exp.location}</div>
          </div>
        </div>
        {exp.isCurrent && (
          <Badge className="bg-green-500/10 text-green-400 border-green-500/20 mt-3 sm:mt-0 animate-pulse">
            Current Role
          </Badge>
        )}
      </div>

      <div className="mt-6">
        <h4 className="font-semibold text-lg mb-3 text-orange-400 flex items-center gap-2"><Briefcase className="h-5 w-5" />Key Contributions</h4>
        <ul className="space-y-2 text-neutral-300 pl-1">
          {exp.responsibilities.map((item, i) => (
            <li key={i} className="flex items-start">
              <ChevronDown className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0 -rotate-90" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold text-lg mb-3 text-orange-400">Technologies Used</h4>
        <div className="flex flex-wrap gap-2">
          {exp.skills?.map((skill) => (
            <Badge key={skill} variant="outline" className="bg-black/20 text-orange-300 border-orange-500/20">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};