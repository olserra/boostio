"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import Image from "next/image";

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
        <span className="font-extrabold text-gray-900">BoostioAI</span> is an agency specialized in AI training, hackathons, and automation solutions. We help businesses and teams adopt and implement AI by providing hands-on learning experiences and custom automation strategies.{" "}
        <span className="font-extrabold text-gray-900">BoostioAI</span> empowers organizations to leverage artificial intelligence effectively, optimizing workflows and driving innovation.
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px] text-gray-800"
      />
    </motion.div>
    <div className="flex justify-center items-center gap-8 mt-16">
      <h1>Meet some of our clients and partners</h1>
      <Image className="grayscale brightness-75" src="/roche.png" width={100} height={100} alt="logo-1" />
      <Image className="grayscale brightness-75" src="/amyris.png" width={100} height={100} alt="logo-2" />
      <Image className="grayscale brightness-75" src="/farfetch.png" width={100} height={100} alt="logo-3" />
      <Image className="grayscale brightness-75" src="/aws.png" width={100} height={100} alt="logo-4" />
      <Image className="grayscale brightness-75" src="/openai.png" width={100} height={100} alt="logo-5" />
    </div>
  </section>
);

export default About;
