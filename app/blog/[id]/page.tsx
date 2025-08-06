import BlogDetailClient from '../blogDetailClient';
import { blogs } from '../../../data/blogs';
import { notFound } from 'next/navigation';

export default function BlogDetail({ params }: { params: { id: string } }) {
    const blog = blogs.find(blog => blog.id === params.id);

    if (!blog) {
        notFound();
    }

    return <BlogDetailClient blog={blog} />;
}