// components/Preloader.tsx
"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Preloader = () => {
    const count = useMotionValue(0);
    // Round the count to the nearest whole number for display
    const roundedCount = useTransform(count, latest => Math.round(latest));
    const [displayCount, setDisplayCount] = React.useState(0);

    useEffect(() => {
        const unsubscribe = roundedCount.onChange((latest) => {
            setDisplayCount(latest);
        });

        return () => unsubscribe();
    }, [roundedCount]);

    useEffect(() => {
        // Animate the count from 0 to 100 over 3 seconds
        const controls = animate(count, 100, {
            duration: 3,
            ease: "easeInOut",
        });

        // Cleanup the animation when the component unmounts
        return controls.stop;
    }, [count]);

    const containerVariants = {
        initial: { opacity: 1 },
        exit: {
            // "Zoom in" effect on exit
            scale: 2,
            opacity: 0,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
        },
    };

    const ringVariants = {
        initial: { opacity: 0, scale: 0.5 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
                delay: 0.2
            }
        }
    }

    return (
        <motion.div
            variants={containerVariants}
            initial="initial"
            exit="exit"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
        >
            <motion.div
                variants={ringVariants}
                initial="initial"
                animate="animate"
                className="relative w-48 h-48 flex items-center justify-center"
            >
                {/* Animated rotating rings */}
                <motion.svg
                    className="absolute w-full h-full"
                    viewBox="0 0 200 200"
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 270 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                    <circle
                        cx="100" cy="100" r="80"
                        fill="none"
                        stroke="#ff8c00"
                        strokeWidth="4"
                        strokeDasharray="10 15"
                        strokeLinecap="round"
                    />
                </motion.svg>
                <motion.svg
                    className="absolute w-full h-full"
                    viewBox="0 0 200 200"
                    initial={{ rotate: 90 }}
                    animate={{ rotate: -270 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                    <circle
                        cx="100" cy="100" r="60"
                        fill="none"
                        stroke="#FFA500"
                        strokeOpacity="0.8"
                        strokeDasharray="5 10"
                        strokeLinecap="round"
                    />
                </motion.svg>

                {/* The percentage counter */}
                <motion.p className="text-white text-5xl font-semibold z-10">
                    {displayCount}
                    <span className="text-2xl">%</span>
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default Preloader;