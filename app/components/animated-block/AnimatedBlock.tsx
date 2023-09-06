"use client";

import { motion } from "framer-motion";

const AnimatedBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, type: "spring " }}
    >
      {children}
    </motion.div>
  );
};
export default AnimatedBlock;
