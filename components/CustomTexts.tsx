"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

interface TextProps {
    title: string;
    textStyles?: string;
}

export const TypingText: React.FC<TextProps> = ({ title, textStyles }) => (
    <motion.p
        variants={textContainer}
        className={`font-normal text-[14px] text-gray-700 ${textStyles || ''}`}
    >
        {Array.from(title).map((letter, index) => (
            <motion.span variants={textVariant2} key={index}>
                {letter === " " ? "\u00A0" : letter}
            </motion.span>
        ))}
    </motion.p>
);

export const TitleText: React.FC<TextProps> = ({ title, textStyles }) => (
    <motion.h2
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-gray-900 ${textStyles || ''}`}
    >
        {title}
    </motion.h2>
); 