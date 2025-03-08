"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useScroll } from "@/hooks/useScroll";
import { scrollToElement } from "@/utils/scroll";
import { NAV_LINKS } from "@/constants";
import { MotionProps } from "@/types";
import Logo from "./Logo";

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const router = useRouter();
    const isScrolled = useScroll();

    const handleLogoClick = (): void => {
        router.push("/");
    };

    const handleGetContacted = (): void => {
        scrollToElement("contact");
    };

    const navMotionProps: MotionProps = {
        initial: { y: -100 },
        animate: { y: 0 }
    };

    const linkMotionProps: MotionProps = {
        whileHover: { scale: 1.02 }
    };

    const buttonMotionProps: MotionProps = {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 }
    };

    return (
        <motion.nav
            {...navMotionProps}
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled 
                    ? "bg-black/80 backdrop-blur-md border-b border-white/10" 
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/">
                        <motion.div {...linkMotionProps} className="text-xl font-bold text-white">
                            <Logo />
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {NAV_LINKS.map((link) => (
                            <Link key={link.name} href={link.href}>
                                <motion.span
                                    {...linkMotionProps}
                                    className="text-sm text-gray-300 hover:text-white transition-colors cursor-pointer font-medium"
                                >
                                    {link.name}
                                </motion.span>
                            </Link>
                        ))}
                        <motion.button
                            {...buttonMotionProps}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg shadow-blue-500/20"
                            onClick={handleGetContacted}
                        >
                            Get Started
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-black/80 backdrop-blur-md rounded-lg mt-2 overflow-hidden border border-white/10"
                        >
                            <div className="px-4 py-4 space-y-4">
                                {NAV_LINKS.map((link) => (
                                    <Link key={link.name} href={link.href}>
                                        <motion.span
                                            {...linkMotionProps}
                                            className="block text-sm text-gray-300 hover:text-white transition-colors cursor-pointer font-medium"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </motion.span>
                                    </Link>
                                ))}
                                <motion.button
                                    {...buttonMotionProps}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg shadow-blue-500/20"
                                    onClick={handleGetContacted}
                                >
                                    Get Started
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar; 