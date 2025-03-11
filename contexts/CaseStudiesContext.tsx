"use client";

import React, { createContext, useContext, useMemo } from 'react';

type CaseStudy = {
    id: string;
    title: string;
    description: string;
    // Add other case study fields as needed
}

type CaseStudiesContextType = {
    studies: CaseStudy[];
};

const CaseStudiesContext = createContext<CaseStudiesContextType | undefined>(undefined);
export const CaseStudiesProvider = ({ children }: { children: React.ReactNode }) => {
    const studies = useMemo(() => [], []);

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