"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { CONTACT } from "../../constants";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <div className="container py-16 md:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center"
                >
                    {/* Image Section */}
                    <div className="overflow-hidden">
                        <Image
                            src="/bridge.jpg"
                            alt="Lisbon Bridge"
                            width={600}
                            height={600}
                            style={{ objectFit: "cover" }}
                            className="hover:scale-105 rounded-2xl transition-transform duration-500"
                            priority
                        />
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8">
                        <div>
                            <div className="h-2 w-20 mb-6 bg-gradient-to-r from-[#FF5C35] to-[#FF8B6C]" />
                            <h1 className="text-4xl font-bold mb-6">Our Story</h1>
                            <p className="text-xl text-gray-700 mb-8">
                                Born in the Heart of Lisbon
                            </p>
                        </div>

                        <div className="space-y-6 text-gray-600">
                            <p>
                                Solea was born in the vibrant heart of Lisbon, a city where innovation meets tradition, and where the sun's golden rays inspire creativity. Our journey began in this dynamic tech hub, where cutting-edge technology and sustainable practices converge.
                            </p>
                            <p>
                                From our roots in this historic yet forward-thinking city, we've grown into a company that embodies the perfect blend of tradition and innovation. Our commitment to excellence and sustainable development drives everything we do, as we continue to build bridges between technology and human potential.
                            </p>
                        </div>

                        <div className="flex gap-6">
                            <Link
                                href={CONTACT.whatsapp}
                                target="_blank"
                                className="inline-flex items-center gap-2 text-[#FF5C35] hover:text-[#FF8B6C] transition-colors duration-300"
                            >
                                <span>Get in Touch →</span>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutPage; 