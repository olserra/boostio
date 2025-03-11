"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { THEME } from '@/constants';

type ThemeContextType = {
    theme: typeof THEME;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev);
        // You can add logic here to update document classes or CSS variables
    };

    const value = {
        theme: THEME,
        isDarkMode,
        toggleDarkMode
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
} 