"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { PiBrain, PiRobot, PiGraduationCap, PiUsers, PiCode, PiPalette } from 'react-icons/pi';

interface ServiceItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
}

const ServiceCard = ({ item, index }: { item: ServiceItem; index: number }) => (
    <motion.div
        className="group p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
    >
        <div className={`h-2 w-20 mb-6 bg-gradient-to-r ${item.color} group-hover:w-32 transition-all duration-300`} />
        <span className="text-5xl mb-6 block text-gray-800">{item.icon}</span>
        <h3 className="heading-3 mb-4">{item.title}</h3>
        <p className="text-body">{item.description}</p>
    </motion.div>
);

const ServicesPage = () => {
    const services: ServiceItem[] = [
        {
            title: "AI Strategy",
            description: "We help businesses develop comprehensive AI strategies aligned with their goals. Our experts analyze your current state, identify opportunities, and create a roadmap for AI implementation that drives real business value.",
            icon: <PiBrain className="w-12 h-12" />,
            color: "from-[#FF5C35] to-[#FF8B6C]"
        },
        {
            title: "AI Automations",
            description: "Transform your business processes with intelligent automation solutions. We implement AI-powered systems that streamline operations, reduce manual work, and improve efficiency across your organization.",
            icon: <PiRobot className="w-12 h-12" />,
            color: "from-[#4C6FFF] to-[#84A1FF]"
        },
        {
            title: "AI Training",
            description: "Empower your team with AI knowledge and skills. Our comprehensive training programs cover everything from AI fundamentals to advanced implementation techniques, ensuring your organization is ready for the AI era.",
            icon: <PiGraduationCap className="w-12 h-12" />,
            color: "from-[#00E6C3] to-[#4DFFD9]"
        },
        {
            title: "AI Hackathons",
            description: "Accelerate innovation through collaborative AI hackathons. We organize and facilitate hackathons that bring together your team to solve real business challenges using AI, fostering creativity and rapid prototyping.",
            icon: <PiUsers className="w-12 h-12" />,
            color: "from-[#FF5C35] to-[#FF8B6C]"
        },
        {
            title: "Software Engineering",
            description: "Build robust, scalable AI solutions with our expert software engineering services. We develop custom AI applications, integrate AI into existing systems, and ensure your solutions are production-ready.",
            icon: <PiCode className="w-12 h-12" />,
            color: "from-[#4C6FFF] to-[#84A1FF]"
        },
        {
            title: "Design & UX",
            description: "Create intuitive, user-friendly AI interfaces that people love to use. Our design services focus on creating seamless experiences that make complex AI solutions accessible and engaging for your users.",
            icon: <PiPalette className="w-12 h-12" />,
            color: "from-[#00E6C3] to-[#4DFFD9]"
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <section className="section-divide relative">
                <div className="absolute inset-0 bg-[#F8F8F8] skew-y-3 -z-10" />
                <div className="container py-32">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <div className="h-2 w-20 mx-auto mb-6 bg-gradient-to-r from-[#FF5C35] to-[#FF8B6C]" />
                        <h1 className="heading-1 mb-8">Our Services</h1>
                        <p className="text-xl text-gray-700 mb-12">
                            We offer a comprehensive suite of AI solutions and services to help your business thrive in the digital age. From strategy to implementation, we're here to guide you every step of the way.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={service.title} item={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ServicesPage; 