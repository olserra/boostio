"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "What services does BoostioAI offer?",
        answer: "BoostioAI offers a comprehensive range of AI services including AI Consultancy, Automation Solutions, Hackathons, and Training Programs. Our services are designed to help businesses leverage artificial intelligence for growth and innovation."
    },
    {
        question: "How can AI benefit my business?",
        answer: "AI can transform your business in multiple ways: automating repetitive tasks, providing data-driven insights, enhancing customer experience, optimizing operations, and enabling predictive analytics. Our team helps you identify and implement the most impactful AI solutions for your specific needs."
    },
    {
        question: "What industries do you work with?",
        answer: "We work across various industries including technology, healthcare, finance, retail, and manufacturing. Our solutions are tailored to meet the unique challenges and opportunities of each sector."
    },
    {
        question: "How long does it take to implement AI solutions?",
        answer: "Implementation timelines vary depending on the complexity and scope of the project. Simple automation solutions might take a few weeks, while comprehensive AI transformations could take several months. We'll provide a detailed timeline during our initial consultation."
    },
    {
        question: "Do you provide ongoing support?",
        answer: "Yes, we offer comprehensive support packages including maintenance, updates, and optimization services. Our team is always available to help you maximize the value of your AI investments."
    }
];

const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({
    question,
    answer,
    isOpen,
    onClick
}) => {
    return (
        <div className="border-b border-white/10">
            <button
                className="w-full py-4 text-left flex justify-between items-center"
                onClick={onClick}
            >
                <span className="text-lg font-medium">{question}</span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    ▼
                </motion.span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-4 text-gray-400">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-3xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold mb-8 text-center"
                >
                    Frequently Asked Questions
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 text-center mb-12"
                >
                    Find answers to common questions about our AI services and solutions
                </motion.p>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                        >
                            <FAQItem
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
} 