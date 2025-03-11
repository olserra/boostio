"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CaseStudyCard from './CaseStudyCard';
import { useCaseStudies } from '@/contexts/CaseStudiesContext';

const CaseStudies = () => {
    const { studies } = useCaseStudies();

    if (!studies || studies.length === 0) {
        return null;
    }

    return (
        <section className="section-divide bg-[#F8F8F8] relative overflow-hidden">
            <div className="absolute inset-0 opacity-50">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF5C35]/5 to-[#00E6C3]/5" />
            </div>
            <div className="container py-32 relative">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <div className="h-2 w-20 mb-6 bg-gradient-to-r from-[#FF5C35] to-[#FF8B6C]" />
                        <h2 className="heading-2">Our work</h2>
                    </div>
                    <Link href="/case-studies" className="text-xl text-gray-800 hover:text-[#FF5C35] transition-colors duration-300">
                        View all case studies →
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {studies.map((study, index) => (
                        <CaseStudyCard key={study.title} study={study} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default React.memo(CaseStudies); 