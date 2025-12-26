// File: components/experience.tsx

"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import Image from "next/image";

// --- DATA ---
const experiences = [
  {
    title: "AI/Tech Intern",
    company: "Mid South Extrusion",
    period: "December 2025 - Present",
    location: "Monroe, Louisiana",
    logo: "/mse-logo.png",
    responsibilities: [
      "Applying AI solutions to streamline manufacturing workflows and support data-driven decision making across the organization.",
      "Building workflow automations with Power Automate to reduce manual tasks, improve process reliability, and increase engagement for production and office teams.",
      "Designing Retrieval-Augmented Generation (RAG) architectures and LLM-powered tools to turn internal documents and ERP data into practical assistants for engineering, operations, and leadership.",
      "Collaborating with the IT and systems integration team on ERP systems to enhance reporting, integrate APIs, and develop intelligent features on top of Epicor and related platforms."
    ],
    skills: [
      "Power Automate",
      "ERP systems",
      "SQL",
      "C#",
      "Power BI",
      "Python",
      "RAG",
      "LLM",
      "Algorithms",
      "Machine Learning"
    ],
    isCurrent: true,
  },
  {
    title: "Web Developer Intern",
    company: "Kinetix Solutions",
    period: "May 2025 - December 2025",
    location: "Monroe, Louisiana",
    logo: "/kinetix-logo.png",
    responsibilities: [
      "Developed and maintained full-stack web applications using the Next.js framework and TypeScript.",
      "Integrated Azure Cloud Services for scalable and reliable backend infrastructure.",
      "Implemented secure payment processing with Stripe and managed user authentication via NextAuth.",
      "Created insightful data visualizations and dashboards using Power BI."
    ],
    skills: ["Next.js", "TailwindCSS", "Azure", "NextAuth", "Stripe", "Power BI"],
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
      "Engineered NLP-powered chatbots that enhanced customer engagement and support metrics.",
    ],
    skills: ["Python", "ML/DL", "Computer Vision", "SpringBoot", "React", "Power Apps"],
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
    ],
    skills: ["Teaching", "Mentorship", "Java", "Python", "Community Outreach"],
  },
];

// --- MAIN COMPONENT ---
export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
  };

  return (
    <section id="experience" className="relative w-full bg-transparent py-24 sm:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Professional <span className="text-primary">Journey</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of my roles, responsibilities, and the technologies I've mastered along the way.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* The timeline bar */}
          <motion.div
            className="absolute left-6 top-6 h-full w-0.5 bg-border"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="relative pl-16 pb-16">
                {/* Timeline Node */}
                <div className="absolute left-6 top-6 -translate-x-[calc(50%-1px)]">
                  <div className={`h-4 w-4 rounded-full border-2 border-primary ${exp.isCurrent ? 'bg-primary animate-pulse' : 'bg-background'}`} />
                </div>

                {/* Experience Card */}
                <div className="rounded-2xl border border-border bg-background/50 p-6 shadow-xl backdrop-blur-lg">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <Image src={exp.logo} alt={`${exp.company} logo`} width={48} height={48} className="rounded-md" />
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        <p className="text-md text-primary">{exp.company}</p>
                      </div>
                    </div>
                    {exp.isCurrent && (
                      <span className="flex-shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        Current Role
                      </span>
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2"><Calendar size={16} /><span>{exp.period}</span></div>
                    <div className="flex items-center gap-2"><MapPin size={16} /><span>{exp.location}</span></div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Briefcase size={18} className="text-primary/80" />
                      Key Contributions
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills?.map((skill) => (
                        <span key={skill} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
