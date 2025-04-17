import React, { ReactNode } from 'react';

export interface CaseStudiesContextType {
    studies: CaseStudy[];
}

// Type definitions for the application
export interface Service {
    title: string;
    description: string;
    icon: string;
}

export interface WhatWeDoItem {
    title: string;
    description: string;
    color: string;
    icon: React.ReactNode;
    href: string;
}


export interface Statistic {
    label: string;
    value: string;
}

export interface CompanyValue {
    title: string;
    description: string;
}


export interface CaseStudy {
    title: string;
    client: string;
    description: string;
    image: string;
    color: string;
    stats: string[];
}

export interface Testimonial {
    name: string;
    role: string;
    content: string;
    image: string;
}

export interface NavLink {
    name: string;
    href: string;
}

export interface FooterSection {
    title: string;
    links: FooterLink[];
}

export interface FooterLink {
    name: string;
    href: string;
}

export interface ProcessStep {
    step: string;
    title: string;
    desc: string;
}

export interface MotionProps {
    initial?: Record<string, number | string>;
    animate?: Record<string, number | string>;
    transition?: Record<string, number | string>;
    whileHover?: Record<string, number | string>;
    whileTap?: Record<string, number | string>;
    whileInView?: Record<string, number | string>;
    exit?: Record<string, number | string>;
}

// Tailwind theme types
export interface ThemeColors {
    primary: {
        black: string;
        blue: string;
        purple: string;
    };
    gray: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
}

export interface Theme {
    colors: ThemeColors;
    extend: {
        colors: ThemeColors;
    };
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    image: string;
    authorId: string;
    tags: string[];
    readingTime: string;
    content: BlogContent;
}

export interface BlogContent {
    introduction: string;
    sections: BlogSection[];
}

export interface BlogSection {
    title: string;
    content?: string;
    items?: string[];
    subsections?: BlogSubsection[];
}

export interface BlogSubsection {
    title: string;
    content?: string;
    items?: string[];
}

export interface BlogPostProps {
    title: string;
    date: string;
    category: string;
    content: ReactNode;
    image: {
        url: string;
        alt: string;
    };
    tags: string[];
    readingTime?: string;
    authorId: string;
}

export interface TagProps {
    text: string;
    variant?: 'default' | 'outline' | 'filled';
} 