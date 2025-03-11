"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { WhatWeDoItem } from '@/types';

const WhatWeDoCard = ({ item, index }: { item: WhatWeDoItem; index: number }) => (
    <motion.div
        className="group p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
    >
        <div className={`h-2 w-20 mb-6 bg-gradient-to-r ${item.color} group-hover:w-32 transition-all duration-300`} />
        <span className="text-4xl mb-4 block">{item.icon}</span>
        <h3 className="heading-3 mb-4">{item.title}</h3>
        <p className="text-body mb-4">{item.description}</p>
        <span className="text-small">{item.client}</span>
    </motion.div>
);

const WhatWeDo = () => {
    const items: WhatWeDoItem[] = [
        {
            title: "Discover",
            description: "Validate new AI products, experiences, services or business models",
            client: "Roche",
            color: "from-[#FF5C35] to-[#FF8B6C]",
            icon: "🔍"
        },
        {
            title: "Pilot",
            description: "Make it real and try it out in the real world",
            client: "Amyris",
            color: "from-[#4C6FFF] to-[#84A1FF]",
            icon: "🚀"
        },
        {
            title: "Launch",
            description: "Pick the highest value features and iterate towards success",
            client: "Farfetch",
            color: "from-[#00E6C3] to-[#4DFFD9]",
            icon: "✨"
        },
        {
            title: "Boost",
            description: "Supercharge your team's potential with new capabilities",
            client: "Feegow",
            color: "from-[#FF5C35] to-[#FF8B6C]",
            icon: "⚡"
        }
    ];

    return (
        <section className="section-divide bg-white relative">
            <div className="absolute inset-0 bg-[#F8F8F8] skew-y-3 -z-10" />
            <div className="container py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <div className="sticky top-32">
                            <div className="h-2 w-20 mb-6 bg-gradient-to-r from-[#FF5C35] to-[#FF8B6C]" />
                            <h2 className="heading-2 mb-8">What we do</h2>
                            <p className="text-xl text-gray-700 mb-8 max-w-lg">
                                We help businesses harness the power of AI through strategic consulting, automation solutions, and expert implementation.
                            </p>
                            <Link href="#services" className="text-2xl text-gray-800 hover:text-[#FF5C35] transition-colors duration-300">
                                Read about what we do →
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {items.map((item, index) => (
                            <WhatWeDoCard key={item.title} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo; 