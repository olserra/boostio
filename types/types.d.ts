import { ReactNode } from 'react';

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    image: string;
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
}

export interface TagProps {
    text: string;
    variant?: 'default' | 'outline' | 'filled';
} 