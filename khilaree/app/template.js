"use client";
import { motion } from "framer-motion";
export default function Template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 70, filter: "blur(4px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
