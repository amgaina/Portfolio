

"use client";
import { User, Clock, ArrowLeft, Calendar, ThumbsUp, ThumbsDown, Share2 } from 'lucide-react';
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"; // Import motion
import Preloader from "../../components/preloader";

export default function BlogDetailClient({ blog }: { blog: any }) {
    const [reaction, setReaction] = useState<'like' | 'dislike' | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Simulate a loading time
    useEffect(() => {
        // Prevent scrolling on the body while preloader is active
        document.body.style.overflow = 'hidden';

        const timer = setTimeout(() => {
            setIsLoading(false);
            // Restore scrolling after the preloader is gone
            document.body.style.overflow = 'auto';
        }, 2500); // Set loading time to 2.5 seconds

        return () => {
            clearTimeout(timer);
            // Ensure scroll is restored if the component unmounts early
            document.body.style.overflow = 'auto';
        };
    }, []);
    return (<>
        <AnimatePresence>
            {isLoading && <Preloader />}
        </AnimatePresence>
        {!isLoading && (
            <main className="relative w-full bg-transparent py-24 sm:py-32">
                {/* Floating Content Section */}
                <div className="relative z-10 container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <a
                            href="/?section=blogs"
                            className="inline-flex items-center text-primary hover:text-primary/90 transition-colors mb-8 group w-fit"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            <span>Back to All Articles</span>
                        </a>

                        <article
                            className="rounded-2xl border border-border bg-card/80 p-6 sm:p-10 shadow-2xl backdrop-blur-lg"
                        >
                            {/* Article Header */}
                            <header className="pb-8 border-b border-border">
                                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                                    {blog.title}
                                </h1>
                                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground">
                                    <div className="flex items-center gap-2"><User size={16} className="text-primary" /><span>{blog.author}</span></div>
                                    <div className="flex items-center gap-2"><Calendar size={16} className="text-primary" /><span>{blog.date}</span></div>
                                    <div className="flex items-center gap-2"><Clock size={16} className="text-primary" /><span>{blog.readTime}</span></div>
                                </div>
                            </header>

                            {/* Article Content */}
                            <div className="prose dark:prose-invert prose-lg max-w-none py-8 prose-p:text-muted-foreground prose-h3:text-foreground prose-blockquote:border-primary prose-a:text-primary hover:prose-a:text-primary/80">
                                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                            </div>

                            {/* Author & Interaction Section */}
                            <section className="mt-8 pt-8 border-t border-border">
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                                    {/* Author Bio */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-2xl font-bold text-primary-foreground">
                                            {blog.author.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Written by</p>
                                            <h3 className="text-xl text-foreground font-bold">{blog.author}</h3>
                                        </div>
                                    </div>

                                    {/* Interaction Buttons */}
                                    <div className="flex items-center gap-3 p-2 rounded-full bg-muted border border-border">
                                        <button
                                            onClick={() => setReaction(reaction === 'like' ? null : 'like')}
                                            className={`p-3 rounded-full transition-colors ${reaction === 'like' ? 'bg-primary/20 text-primary' : 'hover:bg-primary/20 text-muted-foreground hover:text-primary'}`}
                                        >
                                            <ThumbsUp size={20} />
                                        </button>
                                        <div className="w-px h-6 bg-border" />
                                        <button
                                            onClick={() => setReaction(reaction === 'dislike' ? null : 'dislike')}
                                            className={`p-3 rounded-full transition-colors ${reaction === 'dislike' ? 'bg-destructive/20 text-destructive' : 'hover:bg-destructive/20 text-muted-foreground hover:text-destructive'}`}
                                        >
                                            <ThumbsDown size={20} />
                                        </button>
                                        <div className="w-px h-6 bg-border" />
                                    </div>
                                </div>
                            </section>
                        </article>
                    </motion.div>
                </div>
            </main>)
        }
    </>
    );
}