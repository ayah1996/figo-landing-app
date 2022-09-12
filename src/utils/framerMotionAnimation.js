// Header Animation
export const blurImgVariants = {
  initial: { opacity: 0 },
  animate: (custom) => ({
    opacity: 1,
    transition: { delay: custom },
  }),
};

export const imgVariants = {
  initial: { opacity: 0, scaleX: 0.1, transformOrigin: "left" },
  whileInView: { opacity: 1, scaleX: 1, transition: { duration: 0.3 } },
};
export const navbarVariants = {
  initial: { y: -100 },
  animate: { y: 0, transition: { duration: 0.5 } },
};

export const santanceVariants = {
  initial: { opacity: 1 },
  animate: { opacity: 1, transition: { delay: 0.2, staggerChildren: 0.08 } },
};

export const letterVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

export const generalVariants = {
  initial: { opacity: 0 },
  whileInView: (custom) => ({
    opacity: 1,
    transition: { delay: custom },
  }),
};

export const cardVariants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  whileInView: {
    scale: 1,
    opacity: 1,
  },
};

export const fromUpVariants = {
  initial: {
    y: 200,
    opacity: 0,
  },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};
export const fromDownVariants = {
  initial: {
    y: -200,
    opacity: 0,
  },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const heroImageVariants = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
};
