"use client";

import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import React from 'react';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="flex justify-between items-center flex-wrap gap-4">
      <h4 className="font-extrabold text-[24px] text-gray-900">boostio</h4>
      <p className="font-normal text-[14px] text-gray-900 opacity-50">
        Copyright © 2024 boostio. All rights reserved.
      </p>

      <div className="flex gap-4">
        <FaXTwitter size={24} />
      </div>
    </div>
  </motion.footer>
);
export default Footer;
