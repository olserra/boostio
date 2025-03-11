import React from 'react';
import BlogPost from '@/components/BlogPost';
import { BLOG_POSTS } from '@/constants/blog';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
    params: {
        id: string;
    };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const post = BLOG_POSTS.find(post => post.id === params.id);

    if (!post) {
        notFound();
    }

    return (
        <BlogPost
            title={post.title}
            date={post.date}
            category={post.category}
            image={{
                url: post.image,
                alt: post.title
            }}
            tags={post.tags}
            readingTime={post.readingTime}
            content={post.content}
        />
    );
} 