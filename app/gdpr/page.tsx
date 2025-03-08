"use client";

import React from "react";
import { motion } from "framer-motion";

const sections = [
    {
        title: "GDPR Compliance",
        content: "BoostioAI is committed to complying with the General Data Protection Regulation (GDPR) and other applicable data protection laws. This page outlines our GDPR compliance measures and your rights under GDPR."
    },
    {
        title: "Your Rights Under GDPR",
        content: "Under GDPR, you have the following rights: Right to access your personal data, Right to rectification, Right to erasure ('right to be forgotten'), Right to restrict processing, Right to data portability, Right to object, and Rights related to automated decision-making and profiling."
    },
    {
        title: "Data Processing",
        content: "We process your personal data in accordance with GDPR requirements. This includes: having a lawful basis for processing, implementing appropriate security measures, and ensuring data minimization. We only collect and process data that is necessary for the specified purposes."
    },
    {
        title: "Data Transfers",
        content: "When we transfer your personal data outside the European Economic Area (EEA), we ensure appropriate safeguards are in place to protect your data, such as standard contractual clauses or other approved transfer mechanisms."
    },
    {
        title: "Data Breach Procedures",
        content: "We have implemented procedures to detect, report, and investigate personal data breaches. In the event of a data breach that poses a risk to your rights and freedoms, we will notify you without undue delay."
    },
    {
        title: "Data Protection Officer",
        content: "We have appointed a Data Protection Officer (DPO) who is responsible for overseeing our data protection strategy and compliance with GDPR. You can contact our DPO at dpo@boostioai.com"
    },
    {
        title: "Exercising Your Rights",
        content: "To exercise your GDPR rights, please contact us at privacy@boostioai.com. We will respond to your request within 30 days and may ask for additional information to verify your identity."
    },
    {
        title: "Updates to Our GDPR Compliance",
        content: "We regularly review and update our GDPR compliance measures to ensure we maintain the highest standards of data protection. Any significant changes will be communicated to you through our website or directly."
    }
];

export default function GDPRPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-3xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold mb-8 text-center"
                >
                    GDPR Compliance
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