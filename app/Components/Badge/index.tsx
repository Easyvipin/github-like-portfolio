"use client";

import React, { ReactNode } from "react";
import { motion } from "motion/react";

interface IBadgeProps {
  children: ReactNode;
}

const Badge: React.FunctionComponent<IBadgeProps> = ({ children }) => {
  return (
    <motion.span
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="rounded-2xl text-xs font-mono border bg-gray-100 font-semibold px-2 py-1 text-black"
    >
      {children}
    </motion.span>
  );
};

export default Badge;
