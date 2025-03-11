"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <div className="container py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Image Section */}
                    <div className="overflow-hidden">
                        <Image
                            src="/otavio-serra.jpeg"
                            alt="Otavio Serra"
                            width={500}
                            height={500}
                            style={{ objectFit: "cover" }}
                            className="hover:scale-105 rounded-2xl transition-transform duration-500"
                            priority
                        />
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8">
                        <div>
                            <div className="h-2 w-20 mb-6 bg-gradient-to-r from-[#FF5C35] to-[#FF8B6C]" />
                            <h1 className="text-4xl font-bold mb-6">About Otavio Serra</h1>
                            <p className="text-xl text-gray-700 mb-8">
                                Founder & CEO of Boostio AI
                            </p>
                        </div>

                        <div className="space-y-6 text-gray-600">
                            <p>
                                His experience extends to AI-powered applications, where he has leveraged cutting-edge technologies to drive innovation and business growth. Passionate about business development, growth strategies, and international expansion, Otavio combines technical depth with a strategic mindset to deliver impactful results.
                            </p>
                            <p>
                                With a proven track record in developing and implementing AI solutions, Otavio has helped numerous organizations transform their operations and achieve significant competitive advantages in the digital age.
                            </p>
                        </div>

                        <div className="flex gap-6">
                            <Link
                                href="https://www.linkedin.com/in/olserra/"
                                target="_blank"
                                className="inline-flex items-center gap-2 text-[#FF5C35] hover:text-[#FF8B6C] transition-colors duration-300"
                            >
                                <span>LinkedIn</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </Link>
                            <Link
                                href="https://wa.me/351914127195"
                                className="inline-flex items-center gap-2 text-[#FF5C35] hover:text-[#FF8B6C] transition-colors duration-300"
                            >
                                <span>Contact</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutPage; 