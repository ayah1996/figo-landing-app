import React from "react";
import { motion } from "framer-motion";
import { letterVariants } from "../../utils/framerMotionAnimation";

const AnimatedLetters = ({ text }) => {
  return text.split("").map((char, index) => {
    return (
      <motion.span key={char + "-" + index} variants={letterVariants}>
        {char}
      </motion.span>
    );
  });
};

export default AnimatedLetters;
