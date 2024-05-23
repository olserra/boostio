"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import Image from "next/image";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className="flex items-center flex-wrap gap-4">
      <h4 className="font-extrabold text-[24px] text-white">boostio</h4>
      <p className="font-normal text-[14px] text-white opacity-50">
        Copyright © 2024 boostio. All rights reserved.
      </p>

      <div className="flex gap-4">
        {socials.map((social) => (
          <a href={social.link} key={social.name} target="_blank" rel="noopener noreferrer">
            <Image
              key={social.name}
              src={social.img}
              alt={social.name}
              className="w-[24px] h-[24px] object-contain cursor-pointer"
            />
          </a>
        ))}
      </div>
    </div>
  </motion.footer>
);
export default Footer;
