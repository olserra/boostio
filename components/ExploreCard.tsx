"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles";
import { fadeIn } from "../utils/motion";
import Logo from "../public/logo.png";

interface ExploreCardProps {
    id: string;
    imgUrl: string;
    title: string;
    index: number;
    active: string;
    handleClick: (id: string) => void;
}

const ExploreCard: React.FC<ExploreCardProps> = ({ id, imgUrl, title, index, active, handleClick }) => (
    <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className={`relative ${active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
            } ${styles.flexCenter
            } min-w-[170px] h-[600px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer border border-gray-800`}
        onClick={() => handleClick(id)}
    >
        <Image
            src={imgUrl}
            alt={title}
            placeholder="blur"
            className="absolute w-full h-full object-cover rounded-[24px]"
        />
        {active !== id ? (
            <h3 className="font-semibold sm:text-[26px] text-[18px] text-black absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] ">
                {title}
            </h3>
        ) : (
            <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)]">
                <div
                    className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
                >
                    <Image
                        src={Logo}
                        alt="Logo"
                        className="w-1/2 h-1/2 object-contain"
                    />
                </div>
                <p className="font-normal text-[16px] leading-[20px] text-white uppercase ">
                    We can help you with
                </p>
                <h2 className="mt-[12px] font-semibold sm:text-[32px] text-[24px] text-white ">
                    {title}
                </h2>
            </div>
        )}
    </motion.div>
);

export default ExploreCard; 