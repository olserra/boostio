"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const jobOpenings = [
    {
        title: "AI Research Engineer",
        department: "Research & Development",
        location: "Remote",
        type: "Full-time",
        description: "Join our R&D team to push the boundaries of AI technology and develop cutting-edge solutions."
    },
    {
        title: "Product Manager",
        department: "Product",
        location: "Remote",
        type: "Full-time",
        description: "Lead the development of our AI products and help shape the future of AI solutions."
    },
    {
        title: "Frontend Developer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        description: "Build beautiful and intuitive interfaces for our AI-powered applications."
    },
    {
        title: "AI Solutions Architect",
        department: "Solutions",
        location: "Remote",
        type: "Full-time",
        description: "Design and implement AI solutions for our enterprise clients."
    }
];

const benefits = [
    {
        title: "Competitive Salary",
        description: "We offer market-competitive salaries and regular reviews",
        icon: "💰"
    },
    {
        title: "Remote Work",
        description: "Work from anywhere in the world with our fully remote setup",
        icon: "🌍"
    },
    {
        title: "Learning & Growth",
        description: "Continuous learning opportunities and professional development",
        icon: "📚"
    },
    {
        title: "Health & Wellness",
        description: "Comprehensive health coverage and wellness programs",
        icon: "❤️"
    },
    {
        title: "Flexible Hours",
        description: "Work-life balance with flexible working hours",
        icon: "⏰"
    },
    {
        title: "Team Events",
        description: "Regular virtual and in-person team events",
        icon: "🎉"
    }
];

const values = [
    {
        title: "Innovation",
        description: "We push the boundaries of what's possible with AI",
        icon: "💡"
    },
    {
        title: "Collaboration",
        description: "We believe in the power of teamwork and shared knowledge",
        icon: "🤝"
    },
    {
        title: "Ethics",
        description: "We develop AI solutions with strong ethical principles",
        icon: "⚖️"
    },
    {
        title: "Excellence",
        description: "We strive for excellence in everything we do",
        icon: "⭐"
    }
];

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
                    <p className="text-xl text-gray-400">
                        Help us shape the future of AI technology
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors"
                        >
                            <div className="text-4xl mb-4">{benefit.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                            <p className="text-gray-400">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-8">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                                className="bg-white/5 rounded-lg p-6"
                            >
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                                <p className="text-gray-400">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
                </motion.div>

                <div className="space-y-4">
                    {jobOpenings.map((job, index) => (
                        <motion.div
                            key={job.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                        <span>{job.department}</span>
                                        <span>•</span>
                                        <span>{job.location}</span>
                                        <span>•</span>
                                        <span>{job.type}</span>
                                    </div>
                                    <p className="text-gray-400 mt-4">{job.description}</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <Link
                                        href="https://www.linkedin.com/company/boostioai/jobs/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-8 py-2 text-white font-medium hover:text-gray-300 transition-colors"
                                    >
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-400 mb-4">
                        Don't see a position that matches your skills?
                    </p>
                    <Link
                        href="/careers/contact"
                        className="inline-block px-6 py-2 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
                    >
                        Contact Us
                    </Link>
                </motion.div>
            </div>
        </div>
    );
} 