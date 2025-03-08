"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Statistic } from '@/types';


const StatisticCard = ({ stat }: { stat: Statistic }) => (
    <div className="p-4 bg-gray-50 rounded-lg">
        <div className="text-3xl font-bold text-[#FF5C35] mb-2">{stat.value}</div>
        <div className="text-sm text-gray-700">{stat.label}</div>
    </div>
);

const AIApproach = () => {
    const stats: Statistic[] = [
        { label: "Projects Delivered", value: "100+" },
        { label: "Client Satisfaction", value: "98%" },
        { label: "Team Members", value: "25+" },
        { label: "Countries Served", value: "12" }
    ];

    return (
        <section className="section-divide bg-white relative">
            <div className="absolute inset-0 bg-[#F8F8F8] -skew-y-3 -z-10" />
            <div className="container py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <div className="h-2 w-20 mb-6 bg-gradient-to-r from-[#FF5C35] to-[#FF8B6C]" />
                        <h2 className="heading-2 mb-8">Our approach to AI</h2>
                        <p className="text-xl text-gray-700 mb-8">
                            Building for what's next with responsible, human-centered AI. We focus on creating sustainable, ethical, and efficient solutions.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            {stats.map((stat) => (
                                <StatisticCard key={stat.label} stat={stat} />
                            ))}
                        </div>
                        <Link href="#about" className="text-2xl text-gray-800 hover:text-[#FF5C35] transition-colors duration-300">
                            Learn more →
                        </Link>
                    </div>
                    <div className="relative">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#4C6FFF] to-[#84A1FF] mix-blend-multiply opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                            <Image
                                src="https://ert.eu/wp-content/uploads/2023/03/roche.jpg"
                                alt="Our approach to AI"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-xl max-w-xs">
                            <div className="text-sm font-medium text-[#FF5C35] mb-2">Featured Project</div>
                            <div className="text-lg font-bold text-gray-800 mb-2">AI-Powered Healthcare Solutions</div>
                            <div className="text-sm text-gray-700">Revolutionizing patient care through intelligent automation</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIApproach; 