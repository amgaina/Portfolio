"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Briefcase } from "lucide-react"
import Image from "next/image"
import placeholderSvg from '/public/placeholder.svg';

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "IBM LED",
      period: "Oct 2023 - Present",
      responsibilities: [
        "Collaborated with peers on various software development projects, contributing to a 30% improvement in application efficiency through code optimization and testing.",
        "Managed and optimized databases, focusing on data structuring and indexing to ensure fast and reliable access, improving query performance by 25%.",
        "Executed tests and debugged code to validate application functionality, resulting in a 20% reduction in system errors.",
        "Compiled detailed reports and created presentations to effectively communicate research progress and results to stakeholders.",
        "Utilized natural language processing to create chatbots for small businesses, enhancing customer engagement through automated, conversational interactions.",
      ],
      skills: [
        "Python",
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Data Preprocessing",
        "SpringBoot",
        "ReactJs",
        "React Native",
        "Data Analysis",
        "Microsoft Power App",
      ],
      logo: "/led_logo.png?height=200&width=200",
    },
    {
      title: "Data Analyst Intern",
      company: "Qatar Airways",
      period: "May 2023 - August 2023",
      responsibilities: [
        "Developed and implemented data models to analyze airline operations, leading to a 15% improvement in decision-making processes and enhanced operational efficiency.",
        "Conducted exploratory data analysis (EDA) to identify trends in passenger behavior, flight schedules, and revenue performance, resulting in a 10% increase in revenue optimization.",
        "Created interactive dashboards and reports using Tableau and PowerBI, improving the ability to visualize key metrics and communicate findings to stakeholders.",
      ],
      skills: ["Tableau", "Alteryx", "Microsoft 365", "Data Analysis", "Data Manipulation"],
      logo: "/qatar_logo.png?height=200&width=200",
    },
    {
      title: "Tutor",
      company: "US Department of Education (TRIO Program)",
      period: "Aug 2022 - Oct 2023",
      responsibilities: [
        "Tutored first-generation students at the TRIO program at ULM, which is one of the major programs run under the US Department of Education.",
        "Helped them build problem-solving and analytical skills.",
        "Organized in-person coding workshops at various high schools in the Monroe Area.",
      ],
      skills: ["Teaching", "Mentorship", "Workshop Organization", "Java", "Python", "Presentation Skills"],
      logo: "/trio_logo.png?height=200&width=200",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-4">
                    <div className="bg-primary/10 p-6 flex flex-col justify-center items-center md:items-start">
                      <div className="w-20 h-20 rounded-full overflow-hidden bg-white flex items-center justify-center mb-4">
                        <Image
                          src={exp.logo || placeholderSvg}
                          alt={exp.company || 'Company logo'}
                          width={64} // 4 * 16 = 64px
                          height={64} // 4 * 16 = 64px
                          className="w-16 h-16 object-contain"
                          quality={100}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-center md:text-left">{exp.company}</h3>
                      <p className="text-primary font-medium">{exp.title}</p>
                      <div className="flex items-center mt-2">
                        <Calendar className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>

                    <div className="p-6 md:col-span-3">
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <Briefcase className="h-5 w-5 text-primary mr-2" />
                          <span className="font-medium">Responsibilities:</span>
                        </div>
                        <ul className="list-disc list-inside ml-7 space-y-2">
                          {exp.responsibilities.map((item, i) => (
                            <li key={i} className="text-gray-700 dark:text-gray-300">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="font-medium mb-2">Skills Used:</div>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <Badge key={i} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
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

