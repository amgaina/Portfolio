import BlogDetailClient from '../blogDetailClient';
import { blogs } from '../../../data/blogs';
import { notFound } from 'next/navigation';

// This function tells Next.js which pages to build
export async function generateStaticParams() {
    return blogs.map((blog) => ({
        id: blog.id,
    }));
}

// The component must be an async function
export default async function BlogDetail({ params }: { params: { id: string } }) {

    // The line below is where the error was happening.
    // Making the function async resolves the params object before this line is executed.
    const { id } = await params;
    const blog = blogs.find(blog => blog.id === id);

    if (!blog) {
        notFound();
    }

    return <BlogDetailClient blog={blog} />;
}