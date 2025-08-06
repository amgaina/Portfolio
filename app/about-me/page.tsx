// File: app/about-me/page.tsx

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Lightbulb, Code, GraduationCap, Rocket, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react"; // Imported useEffect
import LoadingSpinner from "@/components/preloader";

// --- DATA ---
const journeySteps = [
    {
        id: "early-spark",
        title: "Early Spark in Nepal",
        year: "2010-2015",
        location: "Nepal",
        icon: <Lightbulb className="h-8 w-8 text-primary" />,
        content: 'Born and raised in Nepal, I got my first computer in grade 8. At first, I just played games—but soon, I became obsessed with how things worked. That curiosity led me to tear apart every piece of software I could find.',
        image: "/abhishek_about1.png",
        imageAlt: "Childhood in Nepal",
    },
    {
        id: "first-code",
        title: "First Lines of Code",
        year: "2019-2021",
        location: "Oxford College",
        icon: <Code className="h-8 w-8 text-primary" />,
        content: "At Oxford College, I learned QBASIC, HTML, and CSS. I'll never forget the rush I felt when I wrote my first program. That tiny success hooked me. Soon after, I built a full calculator with JS. At the time, it felt like I'd built a spaceship.",
        image: "/abhishek_about2.png",
        imageAlt: "First coding experiences",
    },
    {
        id: "us-leap",
        title: "Leap to the U.S.",
        year: "2022",
        location: "ULM, Monroe, LA",
        icon: <GraduationCap className="h-8 w-8 text-primary" />,
        content: "Like many students, I dreamed of studying abroad. Thanks to a full scholarship at the University of Louisiana at Monroe, I got my chance. Initially, I sharpened my software engineering skills, but my real turning point came in March 2023.",
        image: "/abhishek_about3.png",
        imageAlt: "Moving to the United States",
    },
    {
        id: "ai-awakening",
        title: "The AI Awakening",
        year: "2023-Present",
        location: "The Digital Frontier",
        icon: <Rocket className="h-8 w-8 text-primary" />,
        content: "When OpenAI released GPT-4, something clicked. Seeing AI generate human-like text, solve problems, and even code was mind-blowing. The idea that machines could learn—not just follow rigid code—rewired my ambitions toward AI.",
        image: "/abhishek_about4.png",
        imageAlt: "AI and machine learning exploration",
    },
];

type JourneyStep = typeof journeySteps[0];

// --- MAIN PAGE COMPONENT ---
export default function AboutPage() {
    const [selectedStep, setSelectedStep] = useState<JourneyStep | null>(null);
    // NEW: State to control the loading process
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Set a timer to hide the loader after 1 second
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } },
    };

    return (
        <main className="relative w-full min-h-screen bg-transparent">
            {/* The LoadingSpinner is now controlled by the AnimatePresence wrapper */}
            <AnimatePresence>
                {isLoading && <LoadingSpinner />}
            </AnimatePresence>

            {/* The main content is now wrapped and will only render after loading is complete */}
            {!isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    {/* Page Header */}
                    <section className="container mx-auto px-4 pt-32 pb-16 text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }} // Removed delay
                        >
                            <Link
                                href="/?section=about"
                                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8 group"
                            >
                                <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                                <span>Back to Home</span>
                            </Link>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                                My Journey Into Tech & AI
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                From a curious child in Nepal to an AI enthusiast in the United States — click on a chapter to explore my story.
                            </p>
                        </motion.div>
                    </section>

                    {/* Interactive Journey Nodes */}
                    <section className="container mx-auto px-4 py-16 relative z-10">
                        <motion.div
                            className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {journeySteps.map((step) => (
                                <motion.div
                                    key={step.id}
                                    variants={itemVariants}
                                    className="flex flex-col items-center gap-4 cursor-pointer group"
                                    onClick={() => setSelectedStep(step)}
                                >
                                    <motion.div
                                        className="grid h-24 w-24 place-items-center rounded-full border border-border bg-background/50 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:border-primary/50 group-hover:scale-110"
                                        whileHover={{ y: -5 }}
                                    >
                                        {step.icon}
                                    </motion.div>
                                    <span className="font-semibold text-muted-foreground transition-colors group-hover:text-foreground">{step.title}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>

                    {/* Footer Section */}
                    <section className="container mx-auto px-4 py-24 text-center relative z-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={containerVariants}
                            className="max-w-3xl mx-auto"
                        >
                            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Where I Am Now
                            </motion.h2>
                            <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed mb-8">
                                Today, I'm all-in on <span className="font-semibold text-primary/90">AI and Machine Learning</span> (NLP, Computer Vision, GenAI, AI Agents). Every day feels like that first time I made a cursor move—except now, I'm teaching machines to think.
                            </motion.p>
                            <motion.blockquote variants={itemVariants} className="border-l-4 border-primary/50 pl-6 italic text-muted-foreground">
                                "The journey has been incredible. I'm excited to see where this path leads next."
                            </motion.blockquote>
                        </motion.div>
                    </section>

                    {/* Modal for displaying Journey Step Details */}
                    <AnimatePresence>
                        {selectedStep && (
                            <motion.div
                                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div
                                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                                    onClick={() => setSelectedStep(null)}
                                />
                                <motion.div
                                    className="relative w-full max-w-4xl max-h-[90vh] grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl border border-border bg-background/80 shadow-2xl backdrop-blur-lg overflow-hidden"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    transition={{ type: "spring", damping: 20, stiffness: 150 }}
                                >
                                    <div className="relative h-64 md:h-full">
                                        <Image
                                            src={selectedStep.image}
                                            alt={selectedStep.imageAlt}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col overflow-y-auto">
                                        <h3 className="text-3xl font-bold text-foreground mb-2">
                                            {selectedStep.title}
                                        </h3>
                                        <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /><span>{selectedStep.year}</span></div>
                                            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /><span>{selectedStep.location}</span></div>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed flex-1">
                                            {selectedStep.content}
                                        </p>
                                        <button
                                            onClick={() => setSelectedStep(null)}
                                            className="absolute top-4 right-4 p-2 rounded-full text-muted-foreground bg-background/50 hover:bg-muted transition-colors"
                                            aria-label="Close details"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </main>
    );
}
