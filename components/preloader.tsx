// File: components/ui/preloader.tsx

"use client";

import { motion } from "framer-motion";

export default function Preloader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 2, ease: "easeOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background pointer-events-none"
        >
            <div className="preloader-spinner"></div>
        </motion.div>
    );
}
