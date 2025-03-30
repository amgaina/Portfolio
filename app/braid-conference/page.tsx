"use client"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, MapPin, Users, PieChart, Microscope, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BRAIDConferencePage() {
  const conferenceDetails = [
    {
      id: "event",
      title: "Biomedical Research and Industry Day",
      date: "October 20th, 2024",
      location: "University of Louisiana at Monroe",
      icon: <Microscope className="h-6 w-6" />,
      content:
        "I attended the Biomedical Research and Industry Day at ULM, an enlightening experience where I learned from distinguished guest speakers, including Dr. Khalid A. El Sayed, Dr. Aaron R. Navratil, Dr. Corie Robinson, Dr. Emily Stevenson, and Dr. Anitaben Tailor. Their discussions covered groundbreaking advancements in biomedical and medical research, highlighting how emerging technologies are shaping the future of healthcare.",
    },
    {
      id: "presentation",
      title: "Cancer Disparities Research",
      date: "October 20th, 2024",
      location: "Poster Presentation",
      icon: <PieChart className="h-6 w-6" />,
      content:
        'I had the opportunity to present a poster titled "Analyzing Key Factors and Trends in Cancer Disparities Among African Americans in Louisiana." In collaboration with Dr. Sreekumari, our research analyzed cancer data from 2016-2020 provided by state cancer profiles, underscoring the critical need to understand the underlying causes of rising cancer cases.',
    },
    {
      id: "methodology",
      title: "Research Methodology",
      date: "2023-2024",
      location: "Data Analysis Process",
      icon: <GraduationCap className="h-6 w-6" />,
      content:
        "We utilized Python libraries like Matplotlib, Seaborn, and Pandas for data analysis and visualization, along with statistical analysis software to conduct correlation analysis on various risk factors and mortality rates. This comprehensive approach allowed us to identify significant patterns and potential areas for intervention in addressing cancer disparities.",
    },
    {
      id: "impact",
      title: "Professional Development",
      date: "October 20th, 2024",
      location: "Networking and Learning",
      icon: <Users className="h-6 w-6" />,
      content:
        "The event was an invaluable experience, not only for deepening my understanding of cancer disparities but also for expanding my knowledge on how to boost one's career by becoming a domain expert. Interacting with professionals in the field and exchanging ideas was both inspiring and rewarding, reaffirming my commitment to impactful research and continuous learning in the biomedical arena.",
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
            BRAID Conference 2024
          </motion.h1>

          <motion.p
            className="text-xl text-white/90 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Biomedical Research and Industry Day at the University of Louisiana at Monroe
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
              alt="Biomedical Research and Industry Day Conference"
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

      {/* Reflection */}
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
              Personal Reflection
            </motion.h2>

            <motion.p
              className="text-xl text-slate-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Attending the BRAID conference was a pivotal moment in my academic journey. The insights gained from
              leading researchers and the opportunity to present my own work have significantly shaped my understanding
              of biomedical research and its real-world applications. I'm excited to continue exploring this field and
              contributing to meaningful research that addresses critical health disparities.
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
            "The intersection of data science and biomedical research offers tremendous potential to address health
            disparities and improve outcomes for all communities."
          </motion.blockquote>
        </div>
      </section>
    </main>
  )
}

