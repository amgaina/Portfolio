"use client"
import { useState } from "react"
import Image, { ImageProps } from "next/image"
import { cn } from "@/lib/utils"
import { Loader2 } from 'lucide-react'

interface ImageWithLoaderProps extends Omit<ImageProps, 'onLoadingComplete'> {
  wrapperClassName?: string
  loaderType?: "spinner" | "skeleton" | "blur"
}

export default function ImageWithLoader({
  src,
  alt,
  width,
  height,
  wrapperClassName,
  className,
  loaderType = "spinner",
  ...props
}: ImageWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      {isLoading && (
        <>
          {loaderType === "spinner" && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}
          
          {loaderType === "skeleton" && (
            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 animate-pulse" />
          )}
          
          {loaderType === "blur" && (
            <div 
              className="absolute inset-0 bg-cover bg-center blur-xl scale-110 opacity-70"
              style={{ 
                backgroundImage: `url(${typeof src === 'string' ? src : '/placeholder.svg'})`,
                filter: 'blur(10px)'
              }}
            />
          )}
        </>
      )}
      
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        onLoadingComplete={() => setIsLoading(false)}
        {...props}
      />
    </div>
  )
}
