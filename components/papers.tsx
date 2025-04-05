"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { FileText } from "lucide-react"

export default function Papers() {
  return (
    <section
      id="papers"
      className="py-24 bg-gradient-to-b from-black via-slate-900 to-black text-white"
    >
      <div className="container mx-auto px-4">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-4 tracking-tight">
            Research Papers
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Card Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-slate-800 via-slate-900 to-black border border-slate-700 rounded-2xl shadow-lg hover:shadow-red-500/20 transition-all duration-300">
            <CardContent className="p-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-center mb-8"
              >
                <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500">
                  <FileText className="h-10 w-10 text-red-500" />
                </div>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold text-red-500 text-center mb-4"
              >
                Upcoming Research
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-center text-white/80 text-lg mb-6"
              >
                I am currently in the process of writing a research paper that delves into advanced topics in{" "}
                <span className="text-white font-semibold">Machine Learning</span>. This work aims to offer fresh insights
                and innovative approaches in the world of <span className="text-white font-semibold">AI</span>.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="text-red-500 font-medium text-center"
              >
                Stay tuned! This page will be updated once the paper is published.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
