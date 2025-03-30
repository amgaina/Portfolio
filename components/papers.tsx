"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FileText } from "lucide-react"

export default function Papers() {
  return (
    <section id="papers" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Research Papers</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="h-10 w-10 text-primary" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center mb-4">Upcoming Research</h3>

              <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                I am currently in the process of writing a research paper that delves into advanced topics in machine
                learning. This research aims to contribute valuable insights into the field of AI and Machine Learning.
              </p>

              <p className="text-primary font-medium text-center">
                Stay tuned! The website will be updated with the paper once it's completed.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

