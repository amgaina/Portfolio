// components/Education.tsx
"use client"
import { motion } from "framer-motion"
import { EducationCard } from "./educationCard" // Adjust path if needed
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js'
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Stars, Sparkles } from "@react-three/drei"

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const educationData = [
  {
    institution: "Oxford College of Engineering and Management",
    degree: "High School (Science)",
    period: "2019 - 2021",
    location: "Gaindakot, Nepal",
    logo: "/oxford_logo.png",
    progress: 100,
    gpa: "3.82", // GPA Added
    radarData: {
      labels: ['Programming', 'Web Dev', 'CS Basics', 'Math', 'Physics'],
      datasets: [{
        label: 'Foundational Skills', data: [60, 60, 70, 65, 75],
        backgroundColor: 'rgba(255, 165, 0, 0.2)', borderColor: 'rgba(255, 140, 0, 1)',
        borderWidth: 2, pointBackgroundColor: 'rgba(255, 140, 0, 1)', pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(255, 140, 0, 1)'
      }]
    }
  },
  {
    institution: "University of Louisiana at Monroe",
    degree: "B.S. in Computer Science",
    period: "2022 - August 2025 (Expected)", // Updated with current time context
    location: "Monroe, LA, USA",
    logo: "/ulm_logo.png",
    progress: 85,
    gpa: "4.0", // GPA Added
    radarData: {
      labels: ['ML & AI', 'Math', 'Software Eng.', 'Data Structures', 'Algorithms'], // Shortened for clarity
      datasets: [{
        label: 'Advanced Skills', data: [80, 75, 90, 85, 80],
        backgroundColor: 'rgba(255, 165, 0, 0.2)', borderColor: 'rgba(255, 140, 0, 1)',
        borderWidth: 2, pointBackgroundColor: 'rgba(255, 140, 0, 1)', pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(255, 140, 0, 1)'
      }]
    }
  },
];

export default function Education() {
  const chartOptions = {
    responsive: true, maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: { color: 'rgba(255, 255, 255, 0.15)' },
        grid: { color: 'rgba(255, 255, 255, 0.15)' },
        pointLabels: { color: 'rgba(255, 255, 255, 0.8)', font: { size: 13, weight: '600' } },
        ticks: { display: false }, suggestedMin: 0, suggestedMax: 100,
      }
    },
    layout: {
      padding: 15 // Provides a buffer so labels never touch the edge
    },
    plugins: {
      legend: { display: false }, tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: 10, cornerRadius: 4,
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.4 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="education" className="relative py-24 sm:py-32 text-white overflow-hidden">

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Academic <span className="text-primary">Journey</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My educational background and the key skills I've developed along the way.
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-200px" }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute left-1/2 top-4 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-orange-500/0 via-orange-500/30 to-orange-500/0 md:block" />

          {educationData.map((edu, index) => (
            <motion.div key={index} variants={itemVariants} className="relative mb-16 md:mb-24">
              <div className="absolute left-1/2 top-5 z-10 hidden -translate-x-1/2 md:block">
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-orange-500/50 bg-black">
                  <div className="h-3 w-3 rounded-full bg-orange-400 shadow-[0_0_10px_theme(colors.orange.400)]" />
                </div>
              </div>

              <div className={`w-full md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                <EducationCard edu={edu} chartOptions={chartOptions} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}