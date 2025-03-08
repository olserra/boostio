"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ClientsSection from './ClientsSection';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#F8F8F8] to-white">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF5C35] to-[#00E6C3]" />
                <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
            </div>
            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-[90%] md:max-w-[80%] mx-auto text-center"
                >
                    <h1 className="heading-1 mb-8 text-gray-700">
                        <span className="gradient-text">AI innovation</span> so that businesses can grow with confidence in their future.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
                        Partner with us to transform your business through AI innovation, automation, and expert consulting.
                    </p>
                    <motion.a
                        href={`https://wa.me/351914127195`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary inline-block"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Let's work together →
                    </motion.a>
                    <ClientsSection />
                </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
};

export default Hero; 