"use client";

import React, { useState } from 'react';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import CaseStudies from './components/CaseStudies';
import AIApproach from './components/AIApproach';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function Home() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to subscribe');
            }

            setStatus('success');
            setEmail('');
        } catch (error) {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Failed to subscribe');
        }
    };

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
            {/* Newsletter Section */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">
                        Subscribe to Our Newsletter
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Stay updated with our latest insights and news about AI, automation, and software development.
                    </p>
                    <form 
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5C35] border border-gray-200 w-full"
                            required
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="bg-[#FF5C35] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#FF5C35]/90 transition-colors duration-300 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                        </button>
                    </form>
                    {status === 'success' && (
                        <p className="mt-4 text-green-600">Thank you for subscribing!</p>
                    )}
                    {status === 'error' && (
                        <p className="mt-4 text-red-600">{errorMessage}</p>
                    )}
                </div>
            </div>
        </>
    );
} 