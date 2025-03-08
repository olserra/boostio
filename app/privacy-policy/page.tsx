"use client";

import React from "react";
import { motion } from "framer-motion";

const sections = [
    {
        title: "Introduction",
        content: "At BoostioAI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services. Please read this privacy policy carefully. By using our services, you consent to the practices described in this policy."
    },
    {
        title: "Information We Collect",
        content: "We collect information that you provide directly to us, including but not limited to: name, email address, phone number, company information, and any other information you choose to provide. We also collect information automatically when you use our services, such as IP address, browser type, and usage data."
    },
    {
        title: "How We Use Your Information",
        content: "We use the information we collect to: provide and maintain our services, improve and personalize your experience, communicate with you, process your transactions, and comply with legal obligations. We may also use your information for marketing purposes with your consent."
    },
    {
        title: "Information Sharing",
        content: "We do not sell your personal information. We may share your information with service providers who assist in operating our services, with business partners when necessary, or when required by law."
    },
    {
        title: "Data Security",
        content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
    },
    {
        title: "Your Rights",
        content: "You have the right to: access your personal information, correct inaccurate data, request deletion of your data, object to data processing, and withdraw consent at any time."
    },
    {
        title: "Contact Us",
        content: "If you have any questions about this Privacy Policy, please contact us at privacy@boostioai.com"
    }
];

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-3xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold mb-8 text-center"
                >
                    Privacy Policy
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