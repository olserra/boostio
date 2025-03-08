"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const blogPosts = [
    {
        id: 1,
        title: "The Future of AI in Business",
        excerpt: "Discover how artificial intelligence is transforming the way businesses operate and compete in the digital age.",
        date: "2024-03-15",
        category: "AI Trends",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Getting Started with AI Automation",
        excerpt: "Learn the basics of implementing AI automation in your business processes and the benefits it can bring.",
        date: "2024-03-10",
        category: "Automation",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "AI Ethics in the Workplace",
        excerpt: "Exploring the ethical considerations and best practices for implementing AI solutions in the workplace.",
        date: "2024-03-05",
        category: "Ethics",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "The Role of AI in Customer Service",
        excerpt: "How AI is revolutionizing customer service and improving customer satisfaction across industries.",
        date: "2024-02-28",
        category: "Customer Service",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

const categories = ["All", "AI Trends", "Automation", "Ethics", "Customer Service"];

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = React.useState("All");

    const filteredPosts = selectedCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold mb-8 text-center"
                >
                    Blog
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 text-center mb-12"
                >
                    Insights, trends, and updates from the world of AI
                </motion.p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, index) => (
                        <motion.button
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
                                ? "bg-white text-black"
                                : "bg-white/10 text-white hover:bg-white/20"
                                }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors"
                        >
                            <Link href={`/blog/${post.id}`}>
                                <div className="aspect-video relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-sm text-gray-400">{post.date}</span>
                                        <span className="text-sm text-white bg-white/10 px-3 py-1 rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                                    <p className="text-gray-400">{post.excerpt}</p>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
} 