"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { NAV_LINKS } from '@/constants';
import { NavLink } from '../types';

type NavigationContextType = {
    currentPath: string;
    setCurrentPath: (path: string) => void;
    navLinks: NavLink[];
    isMenuOpen: boolean;
    toggleMenu: () => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
    const [currentPath, setCurrentPath] = useState('/');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const value = {
        currentPath,
        setCurrentPath,
        navLinks: NAV_LINKS,
        isMenuOpen,
        toggleMenu
    };

    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    );
}

export function useNavigation() {
    const context = useContext(NavigationContext);
    if (context === undefined) {
        throw new Error('useNavigation must be used within a NavigationProvider');
    }
    return context;
} 