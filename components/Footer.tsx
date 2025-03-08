"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components";

const Footer = () => {
    const footerLinks = [
        {
            title: 'What we do',
            links: [
                { name: 'AI Consulting', href: '#services' },
                { name: 'Automation', href: '#services' },
                { name: 'Development', href: '#services' },
                { name: 'Training', href: '#services' },
            ],
        },
        {
            title: 'Company',
            links: [
                { name: 'About Us', href: '#about' },
                { name: 'Case Studies', href: '#case-studies' },
                { name: 'Process', href: '#process' },
                { name: 'Contact', href: '#contact' },
            ],
        },
        {
            title: 'Legal',
            links: [
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Terms of Service', href: '/terms-of-service' },
                { name: 'Cookie Policy', href: '/cookie-policy' },
                { name: 'GDPR', href: '/gdpr' },
            ],
        },
    ];

    const socialLinks = [
        { name: 'LinkedIn', href: '#' },
        { name: 'Twitter', href: '#' },
        { name: 'Instagram', href: '#' },
    ];

    return (
        <footer className="bg-white border-t border-gray-100">
            <div className="container py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                    {/* Logo and Contact */}
                    <div className="lg:col-span-2">
                        <Logo />
                        <p className="mt-6 text-gray-500 max-w-sm">
                            Transform your business with AI innovation through consultancy, automation, hackathons, and training programs.
                        </p>
                        <div className="mt-6">
                            <a href="mailto:hello@boostio.ai" className="text-[#111111] hover:text-[#FF5C35] transition-colors duration-300">
                                hello@boostio.ai
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-sm font-semibold text-[#111111] mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-500 hover:text-[#FF5C35] transition-colors duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-100">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Boostio. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-500 hover:text-[#FF5C35] transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 