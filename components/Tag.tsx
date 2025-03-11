import React from 'react';

interface TagProps {
    text: string;
    variant?: 'default' | 'light';
}

export const Tag = ({ text, variant = 'default' }: TagProps) => {
    const baseClasses = "inline-block px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300";

    const variantClasses = {
        default: "bg-gray-100 text-gray-700 hover:bg-gray-200",
        light: "bg-white/20 text-white hover:bg-white/30"
    };

    return (
        <span className={`${baseClasses} ${variantClasses[variant]}`}>
            {text}
        </span>
    );
}; 