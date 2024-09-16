"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Boostio" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[10px] font-normal sm:text-[32px] text-[20px] text-center text-gray-600"
      >
        <span className="font-extrabold text-gray-900">Boostio</span> is your digital memory for the internet, offering smarter and more personalized recommendations. Our AI-driven platform centralizes your interactions and provides intelligent insights, helping businesses and individuals make better decisions faster.{" "}
        <span className="font-extrabold text-gray-900">Boostio AI</span> empowers you with seamless integration across platforms and delivers recommendations tailored to your unique needs, optimizing productivity and growth.{" "}
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px] text-gray-800"
      />
    </motion.div>
  </section>
);

export default About;
