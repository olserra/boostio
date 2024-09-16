"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import React from 'react';
import { Logo } from "./Logo";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  }

  const handleGetContacted = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }
      , 2000);
  }

  return (
    // NOTE we can declare tags with motion like this for whichever tag we want to animate
    <nav className={`${styles.xPaddings} py-8 relative`}>
      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="absolute w-[50%]"
      />

      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <div onClick={handleLogoClick}>
          <Logo />
        </div>
        <div className="flex gap-3 items-center">
          <a href="https://olserra.notion.site/Careers-4ac062b2b8d34b9fb1c4a3e16ecd3be4?pvs=4" target="_blank" rel="noopener noreferrer">
            <button className="text-gray-800 text-sm">CAREERS</button>
          </a>
          <a href="/reports" target="_blank" rel="noopener noreferrer">
            <button className="text-gray-800 text-sm">REPORTS</button>
          </a>
          {isClicked ?
            <h1 onClick={handleGetContacted} className="text-gray-800 text-sm">SCROLL ↓ </h1>
            : <h1 onClick={handleGetContacted} className="text-gray-800 cursor-pointer text-sm border border-black py-2 px-3">CONTACT</h1>
          }
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
