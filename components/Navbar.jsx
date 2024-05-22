"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Logo from "../public/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

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
        className="absolute w-[50%] inset-0 gradient-01"
      />

      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <div className="flex flex-row items-center cursor-pointer gap-2">
          <Image src={Logo} alt="Boostio logo" width={23} />
          <h4 className="font-extrabold text-[24px] text-white">boostio</h4>
        </div>
        <div className="flex gap-3 items-center">
          <a href="https://olserra.notion.site/Careers-4ac062b2b8d34b9fb1c4a3e16ecd3be4?pvs=4" target="_blank" rel="noopener noreferrer">
            <button className="text-gray-300">Careers</button>
          </a>
          {isClicked ?
            <button onClick={handleGetContacted} className="text-gray-300 border rounded-xl px-2 py-1">↓ Scroll down</button>
            : <button onClick={handleGetContacted} className="text-gray-300 border rounded-xl px-2 py-1">Contact Us</button>
          }
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
