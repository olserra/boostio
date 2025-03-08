"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SERVICES, TESTIMONIALS, PROCESS_STEPS } from "@/constants";
import { MotionProps } from "@/types";

const fadeIn: MotionProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const Home: React.FC = () => {
    const heroMotionProps: MotionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 }
    };

    const buttonMotionProps: MotionProps = {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 }
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden mb-24">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-secondary/10 to-accent/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

                {/* Static Background Map */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: 'url("/map.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(2px)',
                    }}
                />

                {/* Main Content */}
                <motion.div
                    className="container z-10"
                    {...heroMotionProps}
                >
                    <h1 className="heading-1 mb-6">
                        Transform Your Business with
                        <span className="gradient-text">
                            {" "}AI Innovation
                        </span>
                    </h1>
                    <p className="text-body text-xl md:text-2xl mb-8 max-w-2xl">
                        We help businesses harness the power of AI through consultancy, automation, hackathons, and training programs.
                    </p>
                    <div className="flex gap-4">
                        <motion.a
                            href="https://wa.me/351914127195"
                            target="_blank"
                            rel="noopener noreferrer"
                            {...buttonMotionProps}
                            className="btn btn-primary"
                        >
                            Get Started
                        </motion.a>
                        <motion.button
                            {...buttonMotionProps}
                            className="btn btn-secondary"
                        >
                            Learn More
                        </motion.button>
                    </div>
                </motion.div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 md:py-32 px-4 md:px-0">
                <div className="container mx-auto">
                    <motion.h2
                        className="heading-2 text-center mb-8 md:mb-16"
                        {...fadeIn}
                    >
                        Our Services
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {SERVICES.map((service, index) => (
                            <motion.div
                                key={service.title}
                                className="card p-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="heading-3 mb-2">{service.title}</h3>
                                <p className="text-small">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 md:py-32 px-4 md:px-0 bg-white/[0.02]">
                <div className="container">
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <div>
                            <h2 className="heading-2 mb-6 mt-12">Why Choose BoostioAI?</h2>
                            <p className="text-body mb-8">
                                With years of experience in AI implementation and a team of experts, we deliver exceptional results for businesses of all sizes.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Proven track record of successful AI implementations",
                                    "Expert team with diverse industry experience",
                                    "Customized solutions for your specific needs",
                                    "Ongoing support and maintenance"
                                ].map((item, index) => (
                                    <motion.li
                                        key={item}
                                        className="flex items-center text-body"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <span className="text-primary mr-3">✓</span>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        <motion.div
                            className="relative h-[500px] rounded-2xl overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1932&auto=format&fit=crop"
                                alt="AI Technology and Innovation"
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Process Section */}
            <section id="process" className="py-16 md:py-32 px-4 md:px-0">
                <div className="container">
                    <motion.h2
                        className="heading-2 text-center mb-16"
                        {...fadeIn}
                    >
                        How We Work
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {PROCESS_STEPS.map((step, index) => (
                            <motion.div
                                key={step.step}
                                className="card p-6 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="text-5xl font-bold gradient-text mb-4">{step.step}</div>
                                <h3 className="heading-3 mb-2">{step.title}</h3>
                                <p className="text-small">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="case-studies" className="py-16 md:py-32 px-4 md:px-0 bg-white/[0.02]">
                <div className="container mx-auto mt-12">
                    <motion.h2
                        className="heading-2 text-center mb-8 md:mb-16"
                        {...fadeIn}
                    >
                        What Our Clients Say
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {TESTIMONIALS.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                className="card p-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="relative w-12 h-12 mr-4 rounded-full overflow-hidden">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="heading-3">{testimonial.name}</h3>
                                        <p className="text-small">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-body">{testimonial.content}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16">
                        <h1 className="text-center mb-8 md:mb-0">Meet some of our clients and partners</h1>
                        <div className="grid grid-cols-3 md:flex gap-8 md:gap-8 items-center justify-center pb-8 md:pb-0">
                            <Image className="invert grayscale brightness-100 hover:opacity-80 transition-all duration-300 w-20 md:w-[100px] h-auto" src="/roche.png" width={100} height={100} alt="logo-1" />
                            <Image className="invert grayscale brightness-100 hover:opacity-80 transition-all duration-300 w-20 md:w-[100px] h-auto" src="/amyris.png" width={100} height={100} alt="logo-2" />
                            <Image className="invert grayscale brightness-100 hover:opacity-80 transition-all duration-300 w-20 md:w-[100px] h-auto" src="/farfetch.png" width={100} height={100} alt="logo-3" />
                            <Image className="invert grayscale brightness-100 hover:opacity-80 transition-all duration-300 w-20 md:w-[100px] h-auto" src="/aws.png" width={100} height={100} alt="logo-4" />
                            <Image className="invert grayscale brightness-100 hover:opacity-80 transition-all duration-300 w-20 md:w-[100px] h-auto" src="/openai.png" width={100} height={100} alt="logo-5" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 md:py-32 px-4 md:px-0">
                <div className="container mx-auto max-w-3xl">
                    <motion.div
                        className="card p-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <h2 className="heading-2 mb-6">Ready to Transform Your Business?</h2>
                        <p className="text-body mb-8">
                            Let's discuss how we can help you leverage AI for your business growth.
                        </p>
                        <motion.a
                            href="https://wa.me/351914127195"
                            target="_blank"
                            rel="noopener noreferrer"
                            {...buttonMotionProps}
                            className="btn btn-primary"
                        >
                            Contact Us
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home; 