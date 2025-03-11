"use client";

import React, { createContext, useContext, ReactNode } from 'react';
import { SERVICES } from '@/constants';
import { Service } from '@/types';

type ServicesContextType = {
    services: Service[];
    selectedService: Service | null;
    selectService: (service: Service) => void;
};

const ServicesContext = createContext<ServicesContextType | undefined>(undefined);

export function ServicesProvider({ children }: { children: ReactNode }) {
    const [selectedService, setSelectedService] = React.useState<Service | null>(null);

    const selectService = (service: Service) => {
        setSelectedService(service);
    };

    const value = {
        services: SERVICES,
        selectedService,
        selectService
    };

    return (
        <ServicesContext.Provider value={value}>
            {children}
        </ServicesContext.Provider>
    );
}

export function useServices() {
    const context = useContext(ServicesContext);
    if (context === undefined) {
        throw new Error('useServices must be used within a ServicesProvider');
    }
    return context;
} 