"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CaseStudy } from '@/types';
import { studies } from '@/constants';

const CaseStudyCard = ({ study, index }: { study: CaseStudy; index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="group cursor-pointer bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
    >
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
            <div className={`absolute inset-0 bg-gradient-to-r ${study.color} mix-blend-multiply opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
            <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
        </div>
        <div className="p-6">
            <h3 className="heading-3 mb-2">{study.title}</h3>
            <p className="text-body mb-4">{study.description}</p>
            <div className="flex gap-4 mb-4">
                {study.stats.map((stat, i) => (
                    <span key={i} className="text-sm font-medium px-3 py-1 bg-gray-100 rounded-full">
                        {stat}
                    </span>
                ))}
            </div>
            <span className="text-small block">{study.client}</span>
        </div>
    </motion.div>
);

const CaseStudies = () => {

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

export default CaseStudies; 