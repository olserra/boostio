"use client";

import React from "react";
import { motion } from "framer-motion";

const sections = [
    {
        title: "Agreement to Terms",
        content: "By accessing or using BoostioAI's services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services."
    },
    {
        title: "Services Description",
        content: "BoostioAI provides AI consultancy, automation solutions, hackathons, and training programs. We reserve the right to modify, suspend, or discontinue any part of our services at any time."
    },
    {
        title: "User Responsibilities",
        content: "You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account. You must provide accurate and complete information when using our services."
    },
    {
        title: "Intellectual Property",
        content: "All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are the exclusive property of BoostioAI and are protected by international copyright, trademark, and other intellectual property laws."
    },
    {
        title: "Payment Terms",
        content: "Fees for our services are billed in advance. All payments are non-refundable unless required by law. We reserve the right to modify our pricing with 30 days notice."
    },
    {
        title: "Limitation of Liability",
        content: "BoostioAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services."
    },
    {
        title: "Termination",
        content: "We may terminate or suspend your access to our services immediately, without prior notice, for any reason whatsoever, including breach of these Terms."
    },
    {
        title: "Contact Information",
        content: "If you have any questions about these Terms of Service, please contact us at legal@boostioai.com"
    }
];

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-3xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold mb-8 text-center"
                >
                    Terms of Service
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