"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Calendar, User, ArrowRight, BookOpen, X, Search } from 'lucide-react'
import Link from "next/link"
import { Suspense, useState, useMemo } from "react"
import { blogs } from "../data/blogs" // Assuming your blog data is here
import Image from "next/image"
import { Canvas } from "@react-three/fiber"
import { Stars, Sparkles } from "@react-three/drei"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"


// --- Main Blog Section Component ---
export default function BlogSection() {
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
      <section id="blogs" className="relative py-24 sm:py-32 bg-black text-white overflow-hidden">
        {/* --- Thematic Star Background --- */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
            <Suspense fallback={null}>
              <Stars radius={200} depth={60} count={12000} factor={7} saturation={0} fade speed={1} />
              <Sparkles count={100} scale={10} size={3} speed={0.5} color="#ffae34" />
            </Suspense>
          </Canvas>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(10,5,0,0)_60%,_#000000_100%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Insights & Articles
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
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
              whileHover={{ y: -8, scale: 1.02, boxShadow: "0px 20px 40px rgba(255, 140, 0, 0.15)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group"
            >
              <Link href={`/blog/${featuredBlog.id}`} passHref>
                <Card className="h-full cursor-pointer overflow-hidden rounded-2xl border-2 border-orange-500/10 bg-neutral-900/40 backdrop-blur-lg shadow-2xl shadow-black/40 transition-all duration-300 hover:border-orange-500/30">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <Image src={featuredBlog.image} alt={featuredBlog.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <Badge className="absolute top-4 right-4 bg-orange-500 text-white border-none shadow-lg">{featuredBlog.readTime}</Badge>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-white mb-3">{featuredBlog.title}</h3>
                      <p className="text-neutral-300 mb-4 flex-1">{featuredBlog.excerpt}</p>
                      <div className="flex items-center text-sm text-neutral-400">
                        <Calendar className="h-4 w-4 mr-2 text-orange-500" /><span>{featuredBlog.date}</span>
                        <span className="mx-2">|</span>
                        <User className="h-4 w-4 mr-2 text-orange-500" /><span>{featuredBlog.author}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Other Articles */}
            <div className="space-y-8">
              {otherBlogs.map((blog) => (
                <motion.div key={blog.id} variants={itemVariants} whileHover={{ y: -6, scale: 1.03, boxShadow: "0px 15px 30px rgba(255, 140, 0, 0.1)" }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="group">
                  <Link href={`/blog/${blog.id}`} passHref>
                    <Card className="cursor-pointer overflow-hidden rounded-2xl border-2 border-orange-500/10 bg-neutral-900/40 backdrop-blur-lg shadow-2xl shadow-black/40 transition-all duration-300 hover:border-orange-500/30">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                          <Image src={blog.image} alt={blog.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="100px" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white mb-2">{blog.title}</h4>
                          <p className="text-sm text-neutral-400 line-clamp-2">{blog.excerpt}</p>
                        </div>
                        <ArrowRight className="h-6 w-6 text-orange-400 flex-shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* View All Button */}
          <motion.div className="text-center mt-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
            <Button onClick={() => setIsModalOpen(true)} size="lg" className="rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all hover:scale-105 hover:shadow-orange-500/30">
              <BookOpen className="h-5 w-5 mr-2" />
              <span>View All Articles</span>
            </Button>
          </motion.div>
        </div>
      </section>

      <AllArticlesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

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
          <DialogContent className="max-w-6xl w-[95vw] h-[90vh] p-0 flex flex-col overflow-hidden rounded-2xl border-2 border-orange-500/10 bg-black/50 backdrop-blur-2xl shadow-2xl shadow-orange-900/50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col h-full"
            >
              {/* --- ACCESSIBILITY FIX & HEADER --- */}
              <DialogHeader className="p-6 border-b border-orange-500/10 flex-shrink-0">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    All Articles
                  </DialogTitle>
                  <div className="relative w-full sm:w-auto sm:max-w-xs">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 rounded-full border border-orange-500/20 bg-neutral-900/50 text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>
                  <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full group hover:bg-orange-500/10 text-orange-400">
                    <X className="h-6 w-6 transition-colors group-hover:text-white" />
                  </Button>
                </div>
                <VisuallyHidden><DialogTitle>All Articles Modal</DialogTitle></VisuallyHidden>
              </DialogHeader>

              {/* Filters */}
              <div className="p-4 flex-shrink-0 border-b border-orange-500/10">
                <div className="flex flex-wrap gap-2">
                  {allCategories.map(cat => (
                    <Button
                      key={cat}
                      variant={activeCategory === cat || (cat === "All" && activeCategory === null) ? "default" : "outline"}
                      onClick={() => setActiveCategory(cat)}
                      className={`rounded-full transition-all duration-300 ${activeCategory === cat || (cat === "All" && activeCategory === null) ? 'bg-orange-500 text-white border-orange-500' : 'bg-transparent border-orange-500/20 text-orange-300 hover:bg-orange-500/10 hover:text-white'}`}
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Blog Grid */}
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
                        <Card className="h-full cursor-pointer overflow-hidden rounded-xl border border-orange-500/10 bg-neutral-900/40 transition-all duration-300 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-900/50 hover:-translate-y-1">
                          <CardContent className="p-0 flex flex-col">
                            <div className="relative h-40 overflow-hidden">
                              <Image src={blog.image} alt={blog.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="33vw" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            </div>
                            <div className="p-4 flex-1 flex flex-col">
                              <h4 className="font-bold text-white mb-2 flex-1">{blog.title}</h4>
                              <div className="flex items-center text-xs text-neutral-400">
                                <Calendar className="h-3 w-3 mr-1.5 text-orange-500" /><span>{blog.date}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  )) : (
                    <p className="col-span-full text-center text-neutral-400 py-10">No articles found for your query.</p>
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