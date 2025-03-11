"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "@/components/Tag";
import { BlogPost } from '@/types/blog';

const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'AI Consulting: Transforming Businesses with Artificial Intelligence',
        excerpt: 'Discover how AI consulting services can revolutionize your business operations and drive innovation.',
        date: 'March 15, 2024',
        category: 'AI Consulting',
        image: '/blog/ai-consulting-hero.jpg',
        tags: ['AI', 'Consulting', 'Innovation'],
        readingTime: '5 min'
    },
    {
        id: '2',
        title: 'The Power of Automation in Modern Business',
        excerpt: 'Learn how automation can streamline your workflows and boost productivity across your organization.',
        date: 'March 10, 2024',
        category: 'Automation',
        image: '/blog/automation-hero.jpg',
        tags: ['Automation', 'Productivity', 'Technology'],
        readingTime: '4 min'
    },
    {
        id: '3',
        title: 'Custom Software Development Best Practices',
        excerpt: 'Explore the essential practices for successful custom software development projects.',
        date: 'March 5, 2024',
        category: 'Development',
        image: '/blog/development-hero.jpg',
        tags: ['Development', 'Software', 'Best Practices'],
        readingTime: '6 min'
    },
    {
        id: '4',
        title: 'AI Training: Empowering Your Team with AI Skills',
        excerpt: 'Invest in your team\'s future with comprehensive AI training programs.',
        date: 'March 1, 2024',
        category: 'Training',
        image: '/blog/training-hero.jpg',
        tags: ['Training', 'AI', 'Skills Development'],
        readingTime: '4 min'
    }
];

const categories = ['All', 'AI Consulting', 'Automation', 'Development', 'Training'];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
                        Insights, tutorials, and updates from our team of experts in AI, automation, and software development.
                    </p>
                </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Link href={`/blog/${post.id}`} key={post.id} className="group">
                            <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex gap-2 mb-4 flex-wrap">
                                        {post.tags.map((tag, index) => (
                                            <Tag key={index} text={tag} />
                                        ))}
                                    </div>
                                    <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <time>{post.date}</time>
                                        <span className="mx-2">•</span>
                                        <span>{post.readingTime} read</span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-blue-700 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Subscribe to Our Newsletter
                    </h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        Stay updated with our latest insights and news about AI, automation, and software development.
                    </p>
                    <form className="max-w-md mx-auto flex gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            type="submit"
                            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
} 