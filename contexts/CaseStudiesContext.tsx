"use client";

import React, { createContext, useContext, useMemo } from 'react';
import { CaseStudy, CaseStudiesContextType } from '@/types';

const CaseStudiesContext = createContext<CaseStudiesContextType | undefined>(undefined);

export const CaseStudiesProvider = ({ children }: { children: React.ReactNode }) => {
    const studies = useMemo<CaseStudy[]>(() => [
        {
            title: "Digital Transformation",
            client: "Tech Corp",
            description: "Complete digital transformation project",
            image: "/images/case-studies/tech-corp.jpg",
            color: "#FF5C35",
            stats: ["45% increase in efficiency", "2x revenue growth", "98% customer satisfaction"]
        },
        {
            title: "AI Implementation",
            client: "Innovation Labs",
            description: "Enterprise-wide AI solution deployment",
            image: "/images/case-studies/innovation-labs.jpg",
            color: "#00E6C3",
            stats: ["30% cost reduction", "3x productivity boost", "95% accuracy rate"]
        }
    ], []);

    return (
        <CaseStudiesContext.Provider value={{ studies }}>
            {children}
        </CaseStudiesContext.Provider>
    );
};

export const useCaseStudies = () => {
    const context = useContext(CaseStudiesContext);
    if (context === undefined) {
        throw new Error('useCaseStudies must be used within a CaseStudiesProvider');
    }
    return context;
};

export default CaseStudiesContext; 