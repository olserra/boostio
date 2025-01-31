"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import { FiArrowDownRight } from "react-icons/fi";
import cover from "../public/cover.png";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-2`}>
    {/* this is a container div in which we can animate children elements */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10 gap-3 mb-24">
        <motion.h1
          variants={textVariant(1.1)}
          className="flex flex-row items-center font-bold font-sans text-gray-800 text-4xl md:text-[70px] leading-extra-tight sm:pl-0 pl-4 gap-3"
        >
          Your AI Mentor and Coach for Upskilling and Reskilling
          <FiArrowDownRight className="hidden sm:block" size={80} />
        </motion.h1>
      </div>

      {/* NOTE "-mt-[20px]" means "minus 20px margin top" */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px] "
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-10 -top-[30px]" />
        <Image
          src={cover}
          alt="cover"
          placeholder="blur"
          priority
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
