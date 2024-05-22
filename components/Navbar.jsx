"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import menu from "../public/menu.svg";
import { useState } from "react";
import Logo from "../public/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const LandingMenuItems = [
    {
      label: `About`,
      href: `/about`,
    },
    {
      label: `Services`,
      href: `/services`,
    },
    {
      label: `Careers`,
      href: `https://www.linkedin.com/company/boostio-ai/`,
    },
    {
      label: `FAQ`,
      href: `/faq`,
    },
  ];

  const BurguerMenu = () => {
    return (
      <>
        <button
          className="flex items-center px-3 py-2 rounded-md text-white"
          onClick={toggleMenu}
          aria-controls="-menu"
        >
          <Image
            src={menu}
            alt="menu-Icon"
            className="w-[24px] h-[24px] object-contain"
          />
        </button>
      </>
    );
  };

  const BurgerMenuItem = () => {
    return (
      <div
        className="fixed top-0 left-0 w-full bg-black p-2 text-gray-800 border-t border-gray-700"
        ref={buttonRef}
      >
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col text-sm gap-4 p-4 text-gray-800">
            {LandingMenuItems.map((item, index) => (
              <a
                key={index}
                target={item.href === "Careers" ? "_blank" : "_self"}
                rel="noreferrer"
                href={item.href}
                className="lg:mt-4 lg:pr-6"
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={handleGetContacted}
              className="text-gray-800 underline mt-4"
            >
              Contact Us
            </Button>
          </div>
          <div className="p-4" onClick={() => setIsMenuOpen(false)}>
            <Image
              src={CloseIcon}
              alt="Close Icon"
              className="cursor-pointer"
              height={15}
            />
          </div>
          <div className="border-gray-400">
            {isMenuOpen ? <BurgerMenuItem /> : null}
          </div>
        </div>
      </div>
    );
  };

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
        <div className="flex flex-row items-center cursor-pointer">
          <Image src={Logo} alt="Boostio logo" width={20} />
          <p className="sm:text-xl text-xl text-gray-200 font-bold font-pacifico ml-2">
            Boostio
          </p>
        </div>
        <BurguerMenu />
      </motion.div>
    </nav>
  );
}

export default Navbar;
