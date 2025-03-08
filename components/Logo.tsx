"use client";

import React from "react";
import { motion } from "framer-motion";
import { MotionProps } from "@/types";

const Logo: React.FC = () => {
    const motionProps: MotionProps = {
        whileHover: { scale: 1.05 }
    };

    return (
        <motion.div
            {...motionProps}
            className="flex items-center space-x-2"
        >
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                BoostioAI
            </span>
        </motion.div>
    );
};

export default Logo; 