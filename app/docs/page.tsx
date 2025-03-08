"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const sections = [
    {
        title: "Getting Started",
        items: [
            { title: "Introduction", href: "/docs/introduction" },
            { title: "Quick Start Guide", href: "/docs/quick-start" },
            { title: "Installation", href: "/docs/installation" },
            { title: "Configuration", href: "/docs/configuration" }
        ]
    },
    {
        title: "Core Concepts",
        items: [
            { title: "AI Models", href: "/docs/ai-models" },
            { title: "Data Processing", href: "/docs/data-processing" },
            { title: "API Integration", href: "/docs/api-integration" },
            { title: "Security", href: "/docs/security" }
        ]
    },
    {
        title: "Advanced Topics",
        items: [
            { title: "Custom Models", href: "/docs/custom-models" },
            { title: "Performance Optimization", href: "/docs/optimization" },
            { title: "Deployment", href: "/docs/deployment" },
            { title: "Monitoring", href: "/docs/monitoring" }
        ]
    },
    {
        title: "Troubleshooting",
        items: [
            { title: "Common Issues", href: "/docs/common-issues" },
            { title: "Error Codes", href: "/docs/error-codes" },
            { title: "Support", href: "/docs/support" }
        ]
    }
];

const featuredDocs = [
    {
        title: "Getting Started with AI Integration",
        description: "Learn how to integrate AI capabilities into your existing applications with our step-by-step guide.",
        icon: "🚀"
    },
    {
        title: "Best Practices for AI Implementation",
        description: "Discover the best practices and patterns for implementing AI solutions in your business.",
        icon: "✨"
    },
    {
        title: "Security Guidelines",
        description: "Essential security considerations and guidelines for AI-powered applications.",
        icon: "🔒"
    }
];

export default function DocumentationPage() {
    const [activeSection, setActiveSection] = useState("Getting Started");

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold mb-8 text-center"
                >
                    Documentation
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 text-center mb-12"
                >
                    Comprehensive guides and resources for using our AI solutions
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {featuredDocs.map((doc, index) => (
                        <motion.div
                            key={doc.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors"
                        >
                            <div className="text-4xl mb-4">{doc.icon}</div>
                            <h2 className="text-xl font-semibold mb-2">{doc.title}</h2>
                            <p className="text-gray-400">{doc.description}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="flex gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-64 flex-shrink-0"
                    >
                        <nav className="sticky top-24">
                            {sections.map((section) => (
                                <div key={section.title} className="mb-6">
                                    <h3 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-2">
                                        {section.items.map((item) => (
                                            <li key={item.title}>
                                                <Link
                                                    href={item.href}
                                                    className={`block text-sm py-1 px-2 rounded transition-colors ${activeSection === section.title
                                                            ? "text-white bg-white/10"
                                                            : "text-gray-400 hover:text-white hover:bg-white/5"
                                                        }`}
                                                    onClick={() => setActiveSection(section.title)}
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </nav>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-grow"
                    >
                        <div className="bg-white/5 rounded-lg p-8">
                            <h2 className="text-2xl font-semibold mb-4">Welcome to Our Documentation</h2>
                            <p className="text-gray-400 mb-6">
                                Select a topic from the sidebar to get started with our comprehensive documentation.
                                Whether you're new to AI integration or an experienced developer, you'll find the
                                resources you need to build powerful AI-powered applications.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Link
                                    href="/docs/quick-start"
                                    className="block p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                                >
                                    <h3 className="font-semibold mb-2">Quick Start Guide</h3>
                                    <p className="text-sm text-gray-400">
                                        Get up and running with our AI solutions in minutes
                                    </p>
                                </Link>
                                <Link
                                    href="/docs/api-integration"
                                    className="block p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                                >
                                    <h3 className="font-semibold mb-2">API Integration</h3>
                                    <p className="text-sm text-gray-400">
                                        Learn how to integrate our APIs into your applications
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
} 