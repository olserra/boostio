"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FOOTER_SECTIONS } from "@/constants";
import { MotionProps } from "@/types";

const Footer: React.FC = () => {
    const sectionMotionProps: MotionProps = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 }
    };

    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {FOOTER_SECTIONS.map((section, index) => (
                        <motion.div
                            key={section.title}
                            {...sectionMotionProps}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href}>
                                            <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
                                                {link.name}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h2 className="text-xl font-bold">BoostioAI</h2>
                            <p className="text-sm text-gray-400 mt-2">
                                Transforming businesses through AI innovation
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.linkedin.com/company/boostio-ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                                aria-label="LinkedIn"
                            >
                                <img
                                    src="https://img.icons8.com/ios_filled/512/linkedin.png"
                                    alt="LinkedIn"
                                    className="w-6 h-5 invert brightness-0"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 