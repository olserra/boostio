"use client";

import React from "react";
import Link from "next/link";
import { Vampiro_One } from "next/font/google";

const vampiroOne = Vampiro_One({
    weight: ['400'],  // Vampiro One only comes in regular weight
    subsets: ['latin'],
    display: 'swap',
});

const Logo = () => {
    return (
        <Link href="/" className="relative group">
            <span className={`${vampiroOne.className} text-3xl [letter-spacing:-0.05em] font-normal bg-clip-text text-gray-700 bg-gradient-to-r from-[#000000] to-[#333333] transition-all duration-300 group-hover:from-[#FF5C35] group-hover:to-[#00E6C3]`}>
                boostio
            </span>
        </Link>
    );
};

export default Logo; 