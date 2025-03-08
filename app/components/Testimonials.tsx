"use client";

import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
    return (
        <section className="section-divide bg-[#F8F8F8] relative overflow-hidden">
            <div className="absolute inset-0 opacity-50">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00E6C3]/5 to-[#FF5C35]/5" />
            </div>
            <div className="container py-32 relative">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="h-2 w-20 mb-12 bg-gradient-to-r from-[#00E6C3] to-[#4DFFD9] mx-auto" />
                    <div className="flex justify-center mb-12">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden">
                            <Image
                                src="https://t3.ftcdn.net/jpg/02/43/12/40/360_F_243124072_6XpPAWH0VM911MjRBfqp4QQ5PKsvD6T9.jpg"
                                alt="John Smith"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <blockquote className="text-3xl md:text-4xl font-medium leading-tight mb-8 text-gray-800">
                        "The AI solutions and support mechanisms they've designed will help me reach more customers and optimize operations in a meaningful and lasting way. I can't wait to see how things go from here."
                    </blockquote>
                    <cite className="text-lg inline-flex flex-col items-center">
                        <span className="font-semibold block text-gray-800">John Smith</span>
                        <span className="text-gray-600">PM at Roche</span>
                        <div className="flex items-center gap-2 mt-2">
                            <Image src="/roche.png" alt="Roche" width={80} height={30} className="opacity-50" />
                        </div>
                    </cite>
                </div>
            </div>
        </section>
    );
};

export default Testimonials; 