"use client";

import React, { createContext, useContext, useMemo } from 'react';
import { CaseStudy, CaseStudiesContextType } from '@/types';
import { studies } from '@/constants/index';

const CaseStudiesContext = createContext<CaseStudiesContextType | undefined>(undefined);

export const CaseStudiesProvider = ({ children }: { children: React.ReactNode }) => {
    const studiesData = useMemo(() => studies, []);

    return (
        <CaseStudiesContext.Provider value={{ studies: studiesData }}>
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