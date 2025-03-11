import React from 'react';
import BlogPost from '@/components/BlogPost';
import { BLOG_POSTS } from '@/constants/blog';
import { notFound } from 'next/navigation';
import type { BlogContent } from '@/types';

interface BlogPostPageProps {
    params: {
        id: string;
    };
}

const renderBlogContent = (content: BlogContent) => {
    return (
        <div>
            <p className="mb-8">{content.introduction}</p>
            {content.sections.map((section, index) => (
                <div key={index} className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                    {section.content && <p className="mb-4">{section.content}</p>}
                    {section.items && (
                        <ul className="list-disc list-inside mb-4">
                            {section.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    )}
                    {section.subsections?.map((subsection, i) => (
                        <div key={i} className="ml-4 mb-4">
                            <h3 className="text-xl font-semibold mb-2">{subsection.title}</h3>
                            {subsection.content && <p className="mb-2">{subsection.content}</p>}
                            {subsection.items && (
                                <ul className="list-disc list-inside">
                                    {subsection.items.map((item, j) => (
                                        <li key={j}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

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
            content={renderBlogContent(post.content)}
        />
    );
} 