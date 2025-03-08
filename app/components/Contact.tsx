"use client";

import React from 'react';
import { CompanyValue } from '@/types';

const ValueCard = ({ value }: { value: CompanyValue }) => (
    <div className="flex gap-4">
        <div className="w-8 h-8 rounded-full bg-[#FF5C35]/10 flex items-center justify-center flex-shrink-0">
            <span className="text-[#FF5C35]">✓</span>
        </div>
        <div>
            <h4 className="font-semibold mb-1 text-gray-800">{value.title}</h4>
            <p className="text-gray-700">{value.description}</p>
        </div>
    </div>
);

const Contact = () => {
    const values: CompanyValue[] = [
        {
            title: "Innovation First",
            description: "We push the boundaries of what's possible with AI"
        },
        {
            title: "Client Success",
            description: "Your growth and success are our top priorities"
        },
        {
            title: "Ethical AI",
            description: "We develop responsible and sustainable solutions"
        }
    ];

    return (
        <section className="section-divide bg-white relative">
            <div className="absolute inset-0 bg-[#F8F8F8] skew-y-3 -z-10" />
            <div className="container py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <div className="h-2 w-20 mb-6 bg-gradient-to-r from-[#FF5C35] to-[#FF8B6C]" />
                        <h2 className="heading-2 mb-8">Let's see what we can create together</h2>
                        <div className="space-y-6 mb-8">
                            <p className="text-xl text-gray-700">
                                Ready to transform your business with AI? Let's start a conversation.
                            </p>
                            <div className="flex items-center gap-4">
                                <a href="mailto:hello@boostio.ai" className="text-2xl text-gray-800 hover:text-[#FF5C35] transition-colors duration-300">
                                    contact@boostio.ai →
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <h3 className="heading-3 mb-6">Our Values</h3>
                        <div className="space-y-6">
                            {values.map((value) => (
                                <ValueCard key={value.title} value={value} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 