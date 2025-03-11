"use client";

import React from 'react';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import CaseStudies from './components/CaseStudies';
import AIApproach from './components/AIApproach';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function Home() {
    return (
        <>
            <Hero />
            <section id="what-we-do">
                <WhatWeDo />
            </section>
            <section id="work">
                <CaseStudies />
            </section>
            <section id="insights">
                <AIApproach />
            </section>
            <Testimonials />
            <Contact />
        </>
    );
} 