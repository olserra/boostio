"use client";

import React from "react";
import { motion } from "framer-motion";

const sections = [
    {
        title: "What Are Cookies",
        content: "Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience and enable certain features to function properly."
    },
    {
        title: "How We Use Cookies",
        content: "We use cookies to: remember your preferences, understand how you use our website, improve your browsing experience, and analyze website traffic. Some cookies are essential for the website to function properly."
    },
    {
        title: "Types of Cookies We Use",
        content: "We use several types of cookies: Essential cookies for basic functionality, Analytics cookies to understand usage, Performance cookies to improve speed, and Marketing cookies for targeted advertising (with your consent)."
    },
    {
        title: "Third-Party Cookies",
        content: "We may use cookies from third-party services such as Google Analytics, social media platforms, and advertising networks. These cookies are subject to their respective privacy policies."
    },
    {
        title: "Managing Cookies",
        content: "You can control and manage cookies through your browser settings. You can delete all cookies that are already on your computer and set your browser to prevent them from being placed. However, disabling certain cookies may limit your ability to use some features of our website."
    },
    {
        title: "Updates to This Policy",
        content: "We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date."
    },
    {
        title: "Contact Us",
        content: "If you have any questions about our use of cookies, please contact us at privacy@boostioai.com"
    }
];

export default function CookiePolicyPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-3xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold mb-8 text-center"
                >
                    Cookie Policy
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 text-center mb-12"
                >
                    Last updated: {new Date().toLocaleDateString()}
                </motion.p>
                <div className="space-y-8">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                        >
                            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                            <p className="text-gray-400 leading-relaxed">{section.content}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
} 