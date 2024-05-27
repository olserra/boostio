"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { GoArrowUpRight } from "react-icons/go";

const InsightCard = ({ title, subtitle, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex md:flex-row flex-col items-center gap-2"
  >
    <GoArrowUpRight size={150} />

    <div className="flex w-full justify-between items-center ">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-gray-900">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-gray-700">
          {subtitle}
        </p>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
