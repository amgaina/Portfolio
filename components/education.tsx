"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Calendar, Code } from "lucide-react"

export default function Education() {
  const educationData = [
    {
      institution: "Oxford College of Engineering and Management",
      degree: "High School",
      period: "2019-2021",
      location: "Gaindakot - 02, Nepal",
      skills: ["QBASIC", "C", "HTML", "CSS", "JavaScript", "Microsoft Office Suite"],
      logo: "/oxford_logo.png?height=200&width=200",
    },
    {
      institution: "University of Louisiana at Monroe",
      degree: "Undergraduate Degree",
      period: "2022 - current",
      location: "Monroe, LA",
      focus: ["AI and Machine Learning", "Mathematics and Statistics", "Software Engineering"],
      logo: "/ulm_logo.png?height=200&width=200",
    },
  ]

  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-primary/10 p-6 flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center mr-4 flex-shrink-0">
                      <img
                        src={edu.logo || "/placeholder.svg"}
                        alt={edu.institution}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{edu.institution}</h3>
                      <p className="text-primary font-medium">{edu.degree}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <Calendar className="h-5 w-5 text-primary mr-2" />
                      <span>{edu.period}</span>
                    </div>

                    {edu.location && (
                      <div className="flex items-center mb-4">
                        <MapPin className="h-5 w-5 text-primary mr-2" />
                        <span>{edu.location}</span>
                      </div>
                    )}

                    {edu.focus && (
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <GraduationCap className="h-5 w-5 text-primary mr-2" />
                          <span className="font-medium">Focus Areas:</span>
                        </div>
                        <ul className="list-disc list-inside ml-7 space-y-1">
                          {edu.focus.map((item, i) => (
                            <li key={i} className="text-gray-700 dark:text-gray-300">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {edu.skills && (
                      <div>
                        <div className="flex items-center mb-2">
                          <Code className="h-5 w-5 text-primary mr-2" />
                          <span className="font-medium">Skills Learned:</span>
                        </div>
                        <div className="flex flex-wrap gap-2 ml-7">
                          {edu.skills.map((skill, i) => (
                            <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
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

