"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimationControls } from 'framer-motion';

const ClientsSection = () => {
    const clients = [
        { src: "/roche.png", alt: "Roche" },
        { src: "/amyris.png", alt: "Amyris" },
        { src: "/farfetch.png", alt: "Farfetch" },
        { src: "/feegow.png", alt: "Feegow" },
        { src: "/openai.png", alt: "OpenAI" },
        { src: "/solea.png", alt: "Solea" },
        { src: "/doctoralia.svg", alt: "Doctoralia" }
    ];

    // Quadruple the array for smoother infinite loop
    const duplicatedClients = [...clients, ...clients, ...clients, ...clients];
    const controls = useAnimationControls();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        // Get the total width of the content
        const logoWidth = 100; // logo width
        const gap = 80; // gap between logos
        const totalWidth = clients.length * (logoWidth + gap);
        setWidth(totalWidth);

        // Animate
        controls.start({
            x: -totalWidth,
            transition: {
                duration: 20,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
            }
        });
    }, [clients.length, controls]);

    return (
        <div className="flex flex-col items-center mt-16">
            <h2 className="mb-12 text-2xl font-semibold text-gray-800">
                Meet some of our clients and partners
            </h2>
            <div className="relative w-full max-w-7xl overflow-hidden">
                <motion.div
                    className="flex items-center gap-20"
                    animate={controls}
                    style={{
                        width: 'fit-content',
                        paddingLeft: '20px'
                    }}
                >
                    {duplicatedClients.map((client, index) => (
                        <div
                            key={`${client.alt}-${index}`}
                            className={`flex-shrink-0 hover:scale-110 transition-transform duration-300 flex items-center justify-center ${
                                client.alt === "Doctoralia" ? "h-[150px]" : 
                                client.alt === "Solea" ? "h-[70px]" : 
                                client.alt === "Farfetch" ? "h-[120px]" : 
                                "h-[100px]"
                            }`}
                        >
                            <Image
                                className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-300 object-contain"
                                src={client.src}
                                width={client.alt === "Doctoralia" ? 150 : 
                                      client.alt === "Solea" ? 70 : 
                                      client.alt === "Farfetch" ? 120 : 
                                      100}
                                height={client.alt === "Doctoralia" ? 150 : 
                                       client.alt === "Solea" ? 70 : 
                                       client.alt === "Farfetch" ? 120 : 
                                       100}
                                alt={client.alt}
                                quality={90}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default ClientsSection; 