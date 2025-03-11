"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CaseStudy } from '@/types';

interface CaseStudyCardProps {
    study: CaseStudy;
    index: number;
}

const CaseStudyCard = React.memo(({ study, index }: CaseStudyCardProps) => (
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
));

CaseStudyCard.displayName = 'CaseStudyCard';

export default CaseStudyCard; 