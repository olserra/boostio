"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import { useState, useCallback, useMemo } from "react";
import { useRouter } from 'next/navigation';
import React from 'react';
import { Logo } from "./Logo";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const handleGetContacted = useCallback(() => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const menuItems = useMemo(() => (
    <>
      <a href="https://olserra.notion.site/Careers-4ac062b2b8d34b9fb1c4a3e16ecd3be4?pvs=4" target="_blank" rel="noopener noreferrer">
        <button className="text-gray-800 text-sm">CAREERS</button>
      </a>
      {isClicked ? (
        <button onClick={handleGetContacted} className="text-gray-800 text-sm">SCROLL ↓</button>
      ) : (
        <button onClick={handleGetContacted} className="text-gray-800 cursor-pointer text-sm border border-black py-2 px-3">
          CONTACT
        </button>
      )}
    </>
  ), [isClicked, handleGetContacted]);

  return (
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
        className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}
      >
        <div onClick={handleLogoClick}>
          <Logo />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <RiCloseFill size={30} /> : <RiMenu4Fill size={30} />}
        </div>

        {/* Menu Items */}
        <div className={`md:flex gap-3 items-center ${isMenuOpen ? "flex flex-col absolute top-16 left-0 w-full bg-white p-4 shadow-lg" : "hidden md:flex"}`}>
          {menuItems}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
