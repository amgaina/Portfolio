// File: components/blogs.tsx

"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, User, ArrowRight, BookOpen, Search } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { blogs } from "../data/blogs"; // Import your blog data

// --- "All Articles" Modal Component ---
function AllArticlesModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    blogs.forEach(blog => blog.categories.forEach(cat => categories.add(cat)));
    return ["All", ...Array.from(categories)];
  }, []);

  const filteredBlogs = useMemo(() => {
    return blogs.filter(blog => {
      const matchesSearch = searchTerm === "" ||
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === null || activeCategory === "All" ||
        blog.categories.includes(activeCategory);
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <AnimatePresence>
        {isOpen && (
          <DialogContent className="max-w-6xl w-[95vw] h-[90vh] p-0 flex flex-col overflow-hidden rounded-2xl border border-border bg-card dark:bg-background/80 shadow-2xl dark:backdrop-blur-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col h-full"
            >
              <DialogHeader className="p-6 border-b border-border flex-shrink-0">
                <div className="relative flex flex-col sm:flex-row justify-between items-center gap-4">
                  <DialogTitle className="text-2xl font-bold text-foreground">All Articles</DialogTitle>
                  <div className="relative w-full sm:w-auto sm:flex-1 sm:max-w-xs sm:mx-auto">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-2 rounded-full border border-border bg-background/50 text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                </div>
              </DialogHeader>

              <div className="p-4 flex-shrink-0 border-b border-border">
                <div className="flex flex-wrap gap-2">
                  {allCategories.map(cat => (
                    <Button
                      key={cat}
                      variant={activeCategory === cat || (cat === "All" && activeCategory === null) ? "default" : "outline"}
                      onClick={() => setActiveCategory(cat)}
                      className="rounded-full"
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                <motion.div
                  variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                  {filteredBlogs.length > 0 ? filteredBlogs.map((blog) => (
                    <motion.div key={blog.id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="group">
                      <Link href={`/blog/${blog.id}`} passHref>
                        <Card className="h-full cursor-pointer overflow-hidden rounded-xl border border-border bg-background/50 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
                          <CardContent className="p-0 flex flex-col">
                            <div className="relative h-40 overflow-hidden">
                              <Image src={blog.image} alt={blog.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="33vw" />
                            </div>
                            <div className="p-4 flex-1 flex flex-col">
                              <h4 className="font-bold text-foreground mb-2 flex-1">{blog.title}</h4>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Calendar className="h-3 w-3 mr-1.5 text-primary" /><span>{blog.date}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  )) : (
                    <p className="col-span-full text-center text-muted-foreground py-10">No articles found.</p>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
}

// --- Main Blog Section Component ---
export default function Blogs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const featuredBlog = blogs[0];
  const otherBlogs = blogs.slice(1, 3);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <>
      <section id="blogs" className="relative w-full bg-transparent py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Insights & <span className="text-primary">Articles</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Exploring the latest in AI, software development, and data science.
            </p>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* Featured Article */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group"
            >
              <Link href={`/blog/${featuredBlog.id}`} passHref>
                <Card className="h-full cursor-pointer overflow-hidden rounded-2xl border border-border bg-background/50 shadow-xl backdrop-blur-lg transition-all duration-300 hover:border-primary/50">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <Image src={featuredBlog.image} alt={featuredBlog.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <span className="absolute top-4 right-4 rounded-full bg-primary/80 px-3 py-1 text-xs font-semibold text-primary-foreground shadow-lg backdrop-blur-sm">{featuredBlog.readTime}</span>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-foreground mb-3">{featuredBlog.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-1">{featuredBlog.excerpt}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 text-primary" /><span>{featuredBlog.date}</span>
                        <span className="mx-2">|</span>
                        <User className="h-4 w-4 mr-2 text-primary" /><span>{featuredBlog.author}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Other Articles */}
            <div className="space-y-8">
              {otherBlogs.map((blog) => (
                <motion.div key={blog.id} variants={itemVariants} whileHover={{ y: -6, scale: 1.03 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="group">
                  <Link href={`/blog/${blog.id}`} passHref>
                    <Card className="cursor-pointer overflow-hidden rounded-2xl border border-border bg-background/50 shadow-xl backdrop-blur-lg transition-all duration-300 hover:border-primary/50">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                          <Image src={blog.image} alt={blog.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="100px" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-foreground mb-2">{blog.title}</h4>
                          <p className="text-sm text-muted-foreground line-clamp-2">{blog.excerpt}</p>
                        </div>
                        <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="text-center mt-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
            <Button onClick={() => setIsModalOpen(true)} size="lg" className="rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:brightness-110">
              <BookOpen className="h-5 w-5 mr-2" />
              <span>View All Articles</span>
            </Button>
          </motion.div>
        </div>
      </section>

      <AllArticlesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
