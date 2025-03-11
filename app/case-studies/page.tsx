"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { studies } from '@/constants/index';

const CaseStudyDetail = ({ study, index }: { study: any; index: number }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`flex flex-col lg:flex-row gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'} py-20`}
        >
            <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${study.color} mix-blend-multiply opacity-40`} />
                    <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <span className="text-sm font-medium text-gray-500 mb-2 block">{study.client}</span>
                <h2 className="heading-2 mb-6">{study.title}</h2>
                <p className="text-xl text-gray-600 mb-8">{study.description}</p>

                <div className="space-y-6">
                    {study.client === "Roche" && (
                        <>
                            <h3 className="heading-3">Challenge</h3>
                            <p className="text-gray-600">Scientists at Roche needed a more efficient way to manage and transfer data between CIDM and eLN Signals systems, along with the ability to bulk upload custom data in CSV format.</p>

                            <h3 className="heading-3">Solution</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                <li>Developed seamless integration between CIDM and eLN Signals</li>
                                <li>Created Boost app for efficient CSV bulk uploads</li>
                                <li>Implemented intuitive UI/UX design for better user experience</li>
                                <li>Added data validation and error handling</li>
                            </ul>
                        </>
                    )}

                    {study.client === "Amyris" && (
                        <>
                            <h3 className="heading-3">Challenge</h3>
                            <p className="text-gray-600">Amyris needed to optimize their processes and create a unified knowledge platform that could handle complex data while maintaining their e-commerce operations.</p>

                            <h3 className="heading-3">Solution</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                <li>Implemented AI agents for process automation</li>
                                <li>Developed RAG system for knowledge management</li>
                                <li>Created custom React frontend for improved UX</li>
                                <li>Integrated with Shopify using Python backend</li>
                            </ul>
                        </>
                    )}

                    {study.client === "Feegow" && (
                        <>
                            <h3 className="heading-3">Challenge</h3>
                            <p className="text-gray-600">Healthcare providers using Feegow needed a more efficient way to manage patient appointments and reduce no-shows while improving overall patient satisfaction.</p>

                            <h3 className="heading-3">Solution</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                <li>Implemented AI-powered scheduling optimization</li>
                                <li>Created smart notification system</li>
                                <li>Developed patient flow analytics dashboard</li>
                                <li>Added automated reminder system</li>
                            </ul>
                        </>
                    )}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                    {study.stats.map((stat: string, i: number) => (
                        <span
                            key={i}
                            className={`text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r ${study.color} bg-opacity-10 text-gray-800`}
                        >
                            {stat}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const CaseStudiesPage = () => {
    return (
        <div className="min-h-screen bg-[#F8F8F8]">
            <div className="container py-32">
                <div className="text-center mb-20">
                    <div className="h-2 w-20 bg-gradient-to-r from-[#FF5C35] to-[#FF8B6C] mx-auto mb-6" />
                    <h1 className="heading-1 mb-6">Our Case Studies</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover how we've helped businesses transform their operations with cutting-edge AI solutions and innovative technology.
                    </p>
                </div>

                <div className="space-y-20">
                    {studies.map((study, index) => (
                        <CaseStudyDetail key={study.title} study={study} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CaseStudiesPage; 