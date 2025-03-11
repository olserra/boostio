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
    content?: ReactNode;
} 