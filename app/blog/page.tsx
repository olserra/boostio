"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "@/components/Tag";
import { BlogPost } from '@/types/types';

const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'AI Consulting: Transforming Businesses with Artificial Intelligence',
        excerpt: 'Discover how AI consulting services can revolutionize your business operations and drive innovation.',
        date: 'March 21, 2024',
        category: 'AI Consulting',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
        tags: ['AI', 'Consulting', 'Innovation'],
        readingTime: '5 min',
        content: {
            introduction: 'AI consulting services are revolutionizing how businesses operate in the modern world.',
            sections: [
                {
                    title: 'Understanding AI Consulting',
                    content: 'AI consulting helps businesses leverage artificial intelligence technologies effectively.'
                }
            ]
        }
    },
    {
        id: '2',
        title: 'The Power of Automation in Modern Business',
        excerpt: 'Learn how automation can streamline your workflows and boost productivity across your organization.',
        date: 'March 10, 2024',
        category: 'Automation',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
        tags: ['Automation', 'Productivity', 'Technology'],
        readingTime: '4 min',
        content: {
            introduction: 'Automation is transforming the way businesses operate and manage their workflows.',
            sections: [
                {
                    title: 'Benefits of Automation',
                    content: 'Discover how automation can improve efficiency and reduce operational costs.'
                }
            ]
        }
    },
    {
        id: '3',
        title: 'Custom Software Development Best Practices',
        excerpt: 'Explore the essential practices for successful custom software development projects.',
        date: 'March 5, 2024',
        category: 'Development',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
        tags: ['Development', 'Software', 'Best Practices'],
        readingTime: '6 min',
        content: {
            introduction: 'Following best practices in custom software development is crucial for project success.',
            sections: [
                {
                    title: 'Key Development Practices',
                    content: 'Learn about the essential practices that lead to successful software projects.'
                }
            ]
        }
    },
    {
        id: '4',
        title: 'AI Training: Empowering Your Team with AI Skills',
        excerpt: 'Invest in your team\'s future with comprehensive AI training programs.',
        date: 'March 1, 2024',
        category: 'Training',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
        tags: ['Training', 'AI', 'Skills Development'],
        readingTime: '4 min',
        content: {
            introduction: 'Empower your team with the skills they need to leverage AI effectively.',
            sections: [
                {
                    title: 'AI Training Benefits',
                    content: 'Discover how AI training can transform your team\'s capabilities.'
                }
            ]
        }
    }
];

const categories = ['All', 'AI Consulting', 'Automation', 'Development', 'Training'];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full">
                <Image
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop"
                    alt="Modern Architecture and Technology"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 to-gray-900/20" />
                <div className="container mx-auto px-4 relative h-full flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FF5C35]">Our Blog</h1>
                    <p className="text-xl md:text-2xl text-[#FF5C35]/90 max-w-2xl">
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
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">
                        Subscribe to Our Newsletter
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Stay updated with our latest insights and news about AI, automation, and software development.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5C35] border border-gray-200 w-full"
                        />
                        <button
                            type="submit"
                            className="bg-[#FF5C35] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#FF5C35]/90 transition-colors duration-300 w-full sm:w-auto"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
} 