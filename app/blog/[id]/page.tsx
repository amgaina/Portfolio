import { blogs } from '../../../data/blogs'
import { User, Clock, ArrowLeft, Calendar } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '../../../components/ui/badge'
import { Button } from '../../../components/ui/button'
import Image from 'next/image'
import { BlogVote } from '../../../components/BlogVote'

export async function generateStaticParams() {
    const blogIds = blogs.map(blog => blog.id);
    return blogIds.map(id => ({
        id: id.toString(),
    }));
}


function VoteSection() {
    return (
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col justify-between items-start gap-4 md:gap-6 md:flex-row md:items-center">
                <Button asChild variant="outline" className="w-full md:w-auto px-4 py-3 md:px-6 md:py-5">
                    <Link href="/#blogs" className="flex items-center justify-center md:justify-start">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        <span>Back to All Articles</span>
                    </Link>
                </Button>
                <div className="w-full md:w-auto">
                    <BlogVote />
                </div>
            </div>
        </div>
    )
}

export default async function BlogDetail({ params }: { params: { id: string } }) {
    const { id } = await params;
    const blog = blogs.find(blog => blog.id === id)

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div className="bg-white dark:bg-slate-900 pt-24 pb-16">
            {/* Hero Section */}
            <section className="relative h-[60vh] sm:h-[55vh] md:h-[50vh] overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
                {/* Content container */}
                <div className="container mx-auto px-4 sm:px-6 h-full flex flex-col justify-end pb-8 sm:pb-12 md:pb-20 relative z-10">
                    <div className="max-w-3xl">
                        {/* Back button */}
                        <Link
                            href="/#blogs"
                            className="inline-flex items-center text-white/90 hover:text-white transition-all mb-4 sm:mb-6 group"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:-translate-x-1" />
                            <span className="text-base sm:text-lg font-medium">All Articles</span>
                        </Link>

                        {/* Title */}
                        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight">
                            {blog.title}
                        </h1>

                        {/* Metadata ribbon */}
                        <div className="flex flex-col xs:flex-row flex-wrap items-start xs:items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
                            <div className="flex items-center bg-white/10 backdrop-blur-lg px-3 py-1 sm:px-4 sm:py-2 rounded-full">
                                <User className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 text-white/80" />
                                <span className="text-sm sm:text-base font-medium text-white">{blog.author}</span>
                            </div>
                            <div className="flex items-center bg-white/10 backdrop-blur-lg px-3 py-1 sm:px-4 sm:py-2 rounded-full">
                                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 text-white/80" />
                                <span className="text-sm sm:text-base font-medium text-white">{blog.date}</span>
                            </div>
                            <div className="flex items-center bg-white/10 backdrop-blur-lg px-3 py-1 sm:px-4 sm:py-2 rounded-full">
                                <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 text-white/80" />
                                <span className="text-sm sm:text-base font-medium text-white">{blog.readTime}</span>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="flex flex-wrap gap-2 sm:gap-3 mb-2">
                            {blog.categories.map((category, i) => (
                                <Link
                                    key={i}
                                    href={`/category/${category}`}
                                    className="transition-transform hover:scale-105"
                                >
                                    <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-lg px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium">
                                        {category}
                                    </Badge>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Decorative bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-slate-900 to-transparent z-0" />
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">

                    <div
                        className="prose dark:prose-invert prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                </div>
            </section>
            <VoteSection />
        </div>
    );
}