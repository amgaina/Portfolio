"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"
import { blogs } from "@/data/blogs"

export default function BlogSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Check scroll position
  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
    
    // Calculate active index based on scroll position
    const cardWidth = container.scrollWidth / blogs.length;
    const newIndex = Math.round(container.scrollLeft / cardWidth);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      // Initial check
      checkScroll();
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll);
      }
    };
  }, []);

  const scrollTo = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const cardWidth = container.querySelector('.blog-card')?.clientWidth || 0;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  const scrollToCard = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const cards = container.querySelectorAll('.blog-card');
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    }
  };

  return (
    <section id="blogs" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest Articles</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Insights and tutorials on AI, machine learning, and technology trends
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="hidden md:block absolute -left-5 top-1/2 -translate-y-1/2 z-10">
            <Button 
              variant="outline" 
              size="icon" 
              className={cn(
                "rounded-full bg-white shadow-lg hover:bg-slate-50 border-slate-200",
                !canScrollLeft && "opacity-50 cursor-not-allowed"
              )}
              onClick={() => scrollTo('left')}
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 z-10">
            <Button 
              variant="outline" 
              size="icon" 
              className={cn(
                "rounded-full bg-white shadow-lg hover:bg-slate-50 border-slate-200",
                !canScrollRight && "opacity-50 cursor-not-allowed"
              )}
              onClick={() => scrollTo('right')}
              disabled={!canScrollRight}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white dark:from-slate-800 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white dark:from-slate-800 to-transparent z-10"></div>

          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex space-x-8">
              {blogs.map((blog, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="blog-card flex-shrink-0 w-[350px] md:w-[400px]"
                >
                  <Card className="overflow-hidden h-full hover:shadow-xl transition-all group">
                    <CardContent className="p-0 h-full flex flex-col">
                      <div className="relative overflow-hidden h-48">
                        <img
                          src={blog.image || "/placeholder.svg"}
                          alt={blog.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-0 right-0 m-4">
                          <Badge className="bg-primary text-white border-none">{blog.readTime}</Badge>
                        </div>
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <div className="flex items-center mr-4">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{blog.date}</span>
                          </div>
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            <span>{blog.author}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {blog.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">{blog.excerpt}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {blog.categories.map((category, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="bg-primary/10 text-primary border-primary/20"
                            >
                              {category}
                            </Badge>
                          ))}
                        </div>

                        <Button
                          asChild
                          variant="ghost"
                          className="text-primary hover:bg-primary/10 p-0 justify-start"
                        >
                          <Link href={`/blog/${blog.id}`}>
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-6 gap-3">
            {blogs.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index 
                    ? "bg-primary scale-125" 
                    : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400"
                }`}
                onClick={() => scrollToCard(index)}
                aria-label={`Go to blog ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
