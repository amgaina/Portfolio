// components/EducationCard.tsx
"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react"
import Image from "next/image"
import { Progress } from "./ui/progress"
import { Radar } from 'react-chartjs-2'

// Define a type for the education data for better type safety
type EducationStep = {
    institution: string;
    degree: string;
    period: string;
    location: string;
    logo: string;
    progress: number;
    gpa: string;
    radarData: any;
};

type EducationCardProps = {
    edu: EducationStep;
    chartOptions: any;
};

// Variants for staggered animations within the card
const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
};

export const EducationCard = ({ edu, chartOptions }: EducationCardProps) => {
    return (
        <Card className="h-full w-full overflow-hidden rounded-2xl border-2 border-orange-500/10 bg-neutral-900/40 backdrop-blur-lg shadow-2xl shadow-black/40">
            <motion.div
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <CardContent className="p-6 space-y-8">
                    {/* Header */}
                    <motion.div variants={contentVariants} className="flex items-center gap-5">
                        <Image
                            src={edu.logo}
                            alt={`${edu.institution} logo`}
                            width={64}
                            height={64}
                            className="flex-shrink-0 rounded-lg bg-white/10 p-1 object-contain"
                        />
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-white">
                                {edu.institution}
                            </h3>
                            <p className="font-medium text-white/80">{edu.degree}</p>
                        </div>
                    </motion.div>

                    {/* Meta Info & Progress */}
                    <motion.div variants={contentVariants} className="space-y-6 border-t border-orange-500/10 pt-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                            <div className="flex items-center gap-3 text-neutral-300"><Calendar className="h-4 w-4 flex-shrink-0 text-orange-500" /><span>{edu.period}</span></div>
                            <div className="flex items-center gap-3 text-neutral-300"><MapPin className="h-4 w-4 flex-shrink-0 text-orange-500" /><span>{edu.location}</span></div>
                            <div className="flex items-center col-span-full gap-3 text-neutral-300"><GraduationCap className="h-4 w-4 flex-shrink-0 text-orange-500" /><span>GPA: {edu.gpa}</span></div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm font-medium text-neutral-300">Status: {edu.progress}% Complete</p>
                            <Progress value={edu.progress} indicatorClassName="bg-gradient-to-r from-orange-500 to-red-500" className="h-2" />
                        </div>
                    </motion.div>

                    {/* Full-Width Radar Chart Section */}
                    <motion.div variants={contentVariants} className="h-96 w-full rounded-lg border border-orange-500/10 bg-black/20 p-4 pt-2">
                        <div className="flex items-center gap-2 mb-2">
                            <BookOpen className="h-5 w-5 text-orange-400" />
                            <h4 className="font-semibold text-white">Skills Snapshot</h4>
                        </div>
                        <div className="relative h-[calc(100%-2rem)] w-full">
                            <Radar data={edu.radarData} options={chartOptions} />
                        </div>
                    </motion.div>
                </CardContent>
            </motion.div>
        </Card>
    );
};