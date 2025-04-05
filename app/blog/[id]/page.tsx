import { blogs } from '../../../data/blogs'
import { User, Clock, ArrowLeft, Calendar, Share2, Bookmark, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '../../../components/ui/badge'
import { Button } from '../../../components/ui/button'
import { BlogVote } from '../../../components/BlogVote'

export async function generateStaticParams() {
    return blogs.map(blog => ({ id: blog.id.toString() }));
}

function VoteSection() {
    return (
        <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-6 items-center justify-center md:justify-between">
                    <Button
                        asChild
                        variant="outline"
                        className="border-red-500 text-white bg-red-400 hover:bg-red-500/10 hover:text-white transition-all duration-300 group"
                    >
                        <Link
                            href="/#blogs"
                            className="flex items-center px-6 py-3"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            Back to All Articles
                        </Link>
                    </Button>

                    <div className="flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm p-2 rounded-full border border-gray-700 shadow-lg">
                        <div className="h-8 w-px bg-gray-600 mx-1"></div>
                        <BlogVote />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default async function BlogDetail({ params }: { params: { id: string } }) {
    const num = params.id
    const blog = blogs.find(blog => blog.id === num)

    if (!blog) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center text-white">
                <div className="text-center p-6">
                    <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
                    <p className="text-xl mb-6">Article not found</p>
                    <Button asChild variant="outline" className="border-red-500 text-red-500 hover:bg-red-500/10 hover:text-white transition-all">
                        <Link href="/#blogs">Back to Articles</Link>
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-gradient-to-br  pb-4 from-gray-900 via-gray-800 to-gray-900 text-white">
            {/* Hero Section */}
            <section className="relative py-28 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute inset-0 bg-[url('/images/grid.svg')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 max-w-5xl relative z-10">
                    <Link href="/#blogs" className="inline-flex items-center text-white/90 hover:text-white mb-8 group transition-all">
                        <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                        All Articles
                    </Link>

                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        <div className="flex-1">
                            <Badge className="bg-red-500/10 text-red-500 hover:bg-red-500/20 mb-4">
                                Featured Article
                            </Badge>
                            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                {blog.title}
                            </h1>

                            <div className="flex flex-wrap gap-3 mb-8">
                                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all">
                                    <User className="h-5 w-5 mr-2 text-red-500" />
                                    {blog.author}
                                </div>
                                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all">
                                    <Calendar className="h-5 w-5 mr-2 text-red-500" />
                                    {blog.date}
                                </div>
                                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all">
                                    <Clock className="h-5 w-5 mr-2 text-red-500" />
                                    {blog.readTime}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {blog.categories.map((category, i) => (
                                    <Badge key={i} className="bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-all">
                                        {category}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="pb-16 relative">
                <div className="container mx-auto px-4 max-w-3xl prose prose-invert prose-lg">
                    <div className="prose-headings:text-white prose-a:text-red-400 hover:prose-a:text-red-300 prose-strong:text-white prose-blockquote:border-red-500 prose-blockquote:text-gray-300 prose-img:rounded-xl prose-img:border prose-img:border-gray-700 prose-img:shadow-lg">
                        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </div>
                </div>
            </section>

            {/* Author Bio Section */}
            <section className="py-12 bg-gray-800/50 border-y border-gray-700">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-2xl font-bold">
                            {blog.author.charAt(0)}
                        </div>
                        <div>
                            <h3 className="text-xl text-red-400 font-bold">About the Author</h3>
                            <p className="text-gray-400 mt-1"> Always eager to explore and learn every emerging field in Computer Science.</p>
                        </div>
                    </div>
                </div>
            </section>

            <VoteSection />
        </div>
    )
}