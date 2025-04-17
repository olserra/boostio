"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'What we do', href: '#what-we-do' },
        { name: 'Work', href: '#work' },
        { name: 'Our story', href: '/about' },
        { name: 'Insights', href: '#insights' },
        { name: 'Blog', href: '/blog' },
        { name: "Let's chat", href: 'https://wa.me/351914127195' },
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            x: '100%',
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
            } else {
                // If element is not found, we're probably on a different page
                // Navigate to homepage with the hash
                window.location.href = '/' + href;
            }
        }
    };

    return (
        <>
            <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-white/90 backdrop-blur-md border-b border-gray-100' : 'py-6'}`}>
                <nav className="container flex items-center justify-between">
                    <Logo />

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleAnchorClick(e, item.href)}
                                className="text-gray-700 font-medium hover:text-[#FF5C35] transition-colors duration-300"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-8">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="text-gray-700 font-medium hover:text-[#FF5C35] transition-colors duration-300"
                        >
                            Menu
                        </button>
                    </div>
                </nav>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-md z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.nav
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="fixed right-0 top-0 bottom-0 w-full md:w-[500px] bg-white z-50 p-8 overflow-y-auto"
                        >
                            <div className="flex justify-end mb-8">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-[#111111] hover:text-[#FF5C35] transition-colors duration-300"
                                >
                                    Close
                                </button>
                            </div>

                            <div className="flex flex-col gap-8">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => {
                                            handleAnchorClick(e, item.href);
                                            setIsOpen(false);
                                        }}
                                        className="text-4xl font-bold text-[#111111] hover:text-[#FF5C35] transition-colors duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar; 