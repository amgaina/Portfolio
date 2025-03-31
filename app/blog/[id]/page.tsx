"use client"
import { notFound } from 'next/navigation'
import { blogs } from '../../../data/blogs'
import { Calendar, User, Clock, ArrowLeft, ThumbsUp, ThumbsDown } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '../../../components/ui/badge'
import { Button } from '../../../components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { use } from 'react';
import { useState } from 'react';


export default function BlogDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const blog = blogs.find(blog => blog.id === id)
    const [userVote, setUserVote] = useState<'like' | 'dislike' | null>(null)

    if (!blog) {
        notFound()
    }

    const handleLike = () => {
        if (userVote === 'like') {
            setUserVote(null)
        } else {
            setUserVote('like')
        }
    }

    const handleDislike = () => {
        if (userVote === 'dislike') {
            setUserVote(null)
        } else {
            setUserVote('dislike')
        }
    }

    return (
        <div className="bg-white dark:bg-slate-900 pt-24 pb-16">
            {/* Fashionable Hero Section with Smaller Image */}
            <section className="relative h-[50vh] md:h-[60vh] overflow-hidden  md:pt-0">
                {/* Background Image Container */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {blog.image ? (
                        <div className="relative w-full h-full max-w-4xl">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover md:object-contain"
                                priority
                                sizes="(max-width: 768px) 100vw, 80vw"
                            />
                        </div>
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-primary/90">
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                                backgroundSize: "60px 60px",
                            }}
                        ></div>
                    </div>
                </div>

                {/* Content Container */}
                <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Back Link - Adjusted for mobile */}
                        <Link
                            href="/#blogs"
                            className="inline-flex items-center text-white/90 hover:text-white transition-colors mb-4 md:mb-8 group"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:-translate-x-1" />
                            <span className="text-base md:text-lg">Back to Articles</span>
                        </Link>

                        {/* Title - Responsive sizing */}
                        <motion.h1
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {blog.title}
                        </motion.h1>

                        {/* Meta Info - Stacked on mobile */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-white/90 mb-6 md:mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base">
                                <User className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                                <span>{blog.author}</span>
                            </div>
                            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base">
                                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                                <span>{blog.date}</span>
                            </div>
                            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base">
                                <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                                <span>{blog.readTime}</span>
                            </div>
                        </motion.div>

                        {/* Categories - Adjusted spacing */}
                        <motion.div
                            className="flex flex-wrap gap-2 sm:gap-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            {blog.categories.map((category, i) => (
                                <Badge
                                    key={i}
                                    className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm text-xs sm:text-sm"
                                >
                                    {category}
                                </Badge>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Featured Image */}
                    <motion.div
                        className="mb-12 flex justify-center rounded-2xl overflow-hidden shadow-xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src={blog.image || "./placeholder.svg"}
                            alt={blog.title}
                            width={500}
                            height={300}
                            className="object-contain"
                        />
                    </motion.div>

                    {/* Blog Content */}
                    <motion.div
                        className="prose dark:prose-invert prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    />

                    {/* Author Bio */}
                    <motion.div
                        className="mt-16 p-8 bg-slate-100 dark:bg-slate-800 rounded-2xl flex flex-col md:flex-row gap-6 items-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-md">
                            <Image
                                src="./abhishek_about.png"
                                alt={blog.author}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">About {blog.author}</h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Tech Enthusiast. Currently exploring cutting-edge developments in deep learning and their real-world applications.
                            </p>
                        </div>
                    </motion.div>

                    {/* Like/Dislike Buttons */}
                    <motion.div
                        className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <Button asChild variant="outline" className="px-6 py-5">
                                <Link href="/#blogs">
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Back to All Articles
                                </Link>
                            </Button>

                            <div className="flex items-center gap-4">
                                <Button
                                    variant="ghost"
                                    className={`gap-2 ${userVote === 'like' ? 'text-green-500' : ''}`}
                                    onClick={handleLike}
                                >
                                    <ThumbsUp className="h-4 w-4" />
                                    <span>Like</span>
                                </Button>
                                <Button
                                    variant="ghost"
                                    className={`gap-2 ${userVote === 'dislike' ? 'text-red-500' : ''}`}
                                    onClick={handleDislike}
                                >
                                    <ThumbsDown className="h-4 w-4" />
                                    <span>Dislike</span>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Related Articles */}
            <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-8">More Articles You Might Enjoy</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.filter(b => b.id !== blog.id).slice(0, 3).map((relatedBlog) => (
                            <Link
                                key={relatedBlog.id}
                                href={`/blog/${relatedBlog.id}`}
                                className="group"
                            >
                                <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all h-full">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={relatedBlog.image || "./placeholder.svg"}
                                            alt={relatedBlog.title}
                                            width={600}
                                            height={400}
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {relatedBlog.categories.slice(0, 2).map((category) => (
                                                <Badge
                                                    key={category}
                                                    variant="outline"
                                                    className="bg-primary/10 text-primary border-primary/20"
                                                >
                                                    {category}
                                                </Badge>
                                            ))}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                            {relatedBlog.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                                            {relatedBlog.excerpt}
                                        </p>
                                        <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                                            <span>{relatedBlog.readTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}