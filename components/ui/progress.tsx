"use client"
import * as React from "react"
import { motion } from "framer-motion"

interface ProgressProps {
    value: number
    className?: string
    indicatorClassName?: string
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
    ({ value, className = "", indicatorClassName = "" }, ref) => {
        const [progress, setProgress] = React.useState(0)

        React.useEffect(() => {
            // Only animate when in viewport (you might want to use IntersectionObserver in production)
            const timer = setTimeout(() => {
                setProgress(value)
            }, 300)

            return () => clearTimeout(timer)
        }, [value])

        return (
            <div
                ref={ref}
                className={`relative h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 ${className}`}
            >
                <motion.div
                    className={`h-full rounded-full ${indicatorClassName}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1.5, type: "spring", damping: 10 }}
                    style={{
                        background: `linear-gradient(90deg, 
              hsl(var(--primary)) 0%, 
              hsl(var(--primary) / 0.8) 50%, 
              hsl(var(--primary) / 0.6) 100%)`
                    }}
                />
            </div>
        )
    }
)

Progress.displayName = "Progress"

export { Progress }