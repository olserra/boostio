"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tag } from './Tag';

// Progress bar component
const ReadingProgress = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
            }
        }

        window.addEventListener('scroll', updateScrollCompletion);
        return () => window.removeEventListener('scroll', updateScrollCompletion);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
            <div
                className="h-full bg-[#FF5C35] transition-all duration-100"
                style={{ width: `${completion}%` }}
            />
        </div>
    );
};

// Client component for share buttons
const ShareButtons = () => {
    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href);
    };

    return (
        <div className="flex flex-col items-center gap-6 fixed left-8 top-1/2 transform -translate-y-1/2 hidden lg:flex">
            <span className="text-gray-500 text-sm">Share</span>
            <a href="#" className="text-gray-400 hover:text-[#FF5C35] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#FF5C35] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            </a>
            <button
                className="text-gray-400 hover:text-[#FF5C35] transition-colors duration-300"
                onClick={handleCopy}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
            </button>
        </div>
    );
};

interface BlogPostProps {
    title: string;
    date: string;
    category: string;
    content: React.ReactNode;
    image: string;
    tags: string[];
    readingTime?: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
    title,
    date,
    content,
    image,
    tags,
    readingTime = '5 min read',
}) => {
    return (
        <article className="min-h-screen bg-white">
            <ReadingProgress />

            {/* Header Section */}
            <header className="container max-w-4xl mx-auto pt-20 px-4 md:px-0">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[#FF5C35] hover:text-[#FF5C35]/80 transition-colors duration-300 mb-8"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to Blog
                </Link>

                <div className="space-y-4">
                    <div className="space-x-2">
                        {tags.map((tag, index) => (
                            <Tag key={index} text={tag} variant="default" />
                        ))}
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">{title}</h1>

                    {/* Author Section */}
                    <div className="flex items-center gap-4 py-6">
                        <Image
                            src="/otavio-serra.jpeg"
                            alt="Author"
                            width={48}
                            height={48}
                            className="rounded-full"
                        />
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="font-medium text-gray-900">Olserra</span>
                                <span className="text-gray-400">·</span>
                                <time className="text-gray-600">{date}</time>
                                <span className="text-gray-400">·</span>
                                <span className="text-gray-600">{readingTime}</span>
                            </div>
                            <p className="text-gray-600 text-sm">Founder & CEO at Boostio</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Featured Image */}
            <div className="relative h-[60vh] w-full my-12">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content Section */}
            <div className="container">
                <div className="max-w-2xl mx-auto px-4 md:px-0">
                    <ShareButtons />

                    <div className="prose prose-lg max-w-none">
                        <div className="prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:text-xl prose-p:leading-relaxed prose-li:text-gray-600 prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl">
                            {content}
                        </div>
                    </div>

                    {/* Tags Section */}
                    <div className="my-12 pt-8 border-t border-gray-100 mt-12">
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <Tag key={index} text={tag} variant="default" />
                            ))}
                        </div>
                    </div>

                    {/* Author Bio Section */}
                    <div className="my-12 p-8 bg-gray-50 rounded-xl mt-12">
                        <div className="flex items-start gap-6">
                            <Image
                                src="/otavio-serra.jpeg"
                                alt="Author"
                                width={80}
                                height={80}
                                className="rounded-full"
                            />
                            <div>
                                <h4 className="text-xl font-semibold mb-2">Written by Otavio Serra</h4>
                                <p className="text-gray-600 mb-4">Founder & CEO at Boostio. Passionate about AI, innovation, and helping businesses grow through technology.</p>
                                <div className="flex gap-4">
                                    <a href="#" className="text-[#FF5C35] hover:text-[#FF5C35]/80 transition-colors duration-300">
                                        Twitter
                                    </a>
                                    <a href="#" className="text-[#FF5C35] hover:text-[#FF5C35]/80 transition-colors duration-300">
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="my-20 bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-2xl text-white">
                        <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
                        <p className="text-gray-300 mb-8 text-lg">
                            Take the first step towards innovation. Let's discuss how we can help you achieve your goals.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://wa.me/351914127195"
                                className="inline-block bg-[#FF5C35] text-white px-8 py-4 rounded-lg hover:bg-[#FF5C35]/90 transition-all duration-300 transform hover:scale-105"
                            >
                                Get Started
                            </a>
                            <Link
                                href="#case-studies"
                                className="inline-block border-2 border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                            >
                                View Case Studies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BlogPost; 