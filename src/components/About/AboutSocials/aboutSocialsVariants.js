const containerVariant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 2.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const iconVariant = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0)",
    transition: { duration: 0.5 },
  },
};

const backgroundVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, delay: 2.5 } },
};

const connectVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 4.5 } },
};

const aboutSocialsVariants = {
  containerVariant,
  iconVariant,
  backgroundVariant,
  connectVariant,
};

export { aboutSocialsVariants };
