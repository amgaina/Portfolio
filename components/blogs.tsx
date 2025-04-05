"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from "../lib/utils"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"
import { blogs } from "../data/blogs"
import Image from "next/image"
import placeholder from '../public/placeholder.svg';

export default function BlogSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );

    const cardWidth = container.scrollWidth / blogs.length;
    const newIndex = Math.round(container.scrollLeft / cardWidth);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
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
    <section id="blogs" className="py-20 bg-gradient-to-br from-gray-900 black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-red-500">
            Latest Articles
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Insights and tutorials on AI, machine learning, and technology trends
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "rounded-full bg-gray-800 shadow-xl hover:bg-gray-700 border-gray-700 text-white",
                !canScrollLeft && "opacity-50 cursor-not-allowed"
              )}
              onClick={() => scrollTo('left')}
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          <div className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "rounded-full bg-gray-800 shadow-xl hover:bg-gray-700 border-gray-700 text-white",
                !canScrollRight && "opacity-50 cursor-not-allowed"
              )}
              onClick={() => scrollTo('right')}
              disabled={!canScrollRight}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>

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
                  className="blog-card flex-shrink-0 w-[350px] md:w-[420px] snap-center"
                >
                  <Card className="overflow-hidden h-full hover:shadow-2xl transition-all group bg-gray-800 border-gray-700">
                    <CardContent className="p-0 h-full flex flex-col">
                      <div className="relative overflow-hidden h-56">
                        <Image
                          src={blog.image || placeholder}
                          alt={blog.title}
                          width={800}
                          height={450}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          placeholder="blur"
                          blurDataURL={placeholder.src}
                        />
                        <div className="absolute top-0 right-0 m-4">
                          <Badge className="bg-red-600 hover:bg-red-700 text-white border-none shadow-lg">
                            {blog.readTime}
                          </Badge>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-80"></div>
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center text-sm text-gray-400 mb-4">
                          <div className="flex items-center mr-4">
                            <Calendar className="h-4 w-4 mr-2 text-red-500" />
                            <span>{blog.date}</span>
                          </div>
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-2 text-red-500" />
                            <span>{blog.author}</span>
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">
                          {blog.title}
                        </h3>
                        <p className="text-gray-300 mb-5 flex-1">{blog.excerpt}</p>

                        <div className="flex flex-wrap gap-2 mb-5">
                          {blog.categories.map((category, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="bg-gray-700/50 text-gray-300 border-gray-600 hover:bg-gray-700"
                            >
                              {category}
                            </Badge>
                          ))}
                        </div>

                        <Button
                          asChild
                          variant="ghost"
                          className="text-red-500 hover:bg-red-500/10 p-0 hover:text-white justify-start group-hover:underline"
                        >
                          <Link href={`./blog/${blog.id}`} className="flex items-center">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {blogs.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${activeIndex === index
                  ? "bg-red-500 scale-125 shadow-[0_0_8px_2px_rgba(239,68,68,0.6)]"
                  : "bg-gray-600 hover:bg-gray-500"
                  }`}
                onClick={() => scrollToCard(index)}
                aria-label={`Go to blog ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
        </motion.div>
      </div>
    </section>
  )
}