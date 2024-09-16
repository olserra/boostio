"use client";

import { FiArrowDownRight } from "react-icons/fi";

const Reports = () => {
    return (
        <div className="max-w-7xl mx-auto p-8">
            <h1 className="text-5xl font-bold mb-8 text-center">The Future of Jobs & Skills in the Age of AI</h1>

            <section className="mb-16">
                <p className="text-lg leading-relaxed text-gray-700">
                    AI is transforming the workforce, creating shifts in the job market. While automation replaces some roles, it also creates new opportunities across industries. Understanding these shifts is key to staying competitive in the evolving landscape.
                </p>

                <h2 className="text-3xl font-semibold mt-12">Skills in Demand</h2>
                <ul className="list-disc ml-5 mt-4 text-gray-600">
                    <li>Emotional Intelligence</li>
                    <li>Complex Problem-Solving</li>
                    <li>Creativity and Innovation</li>
                    <li>Technological Literacy</li>
                </ul>
            </section>

            <section className="mt-12 mb-16">
                <h2 className="text-3xl font-semibold">Job Evolution & New Career Paths</h2>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Automation and AI are shaping new career paths in sectors such as tech, healthcare, and education. Preparing for these changes requires upskilling in areas where human intelligence, creativity, and empathy remain unmatched.
                </p>
            </section>

            <div className="flex justify-start items-center">
                <a href="https://medium.com/@olserra" target="_blank" rel="noopener noreferrer">Read more</a>
                <FiArrowDownRight className="hidden sm:block" size={30} />
            </div>
        </div>
    );
};

export default Reports;