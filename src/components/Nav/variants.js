const navBlurVariant = {
  hidden: { filter: "blur(10px" },
  visible: { filter: "blur(0)", transition: { duration: 1 } },
};

const containerVariant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const buttonVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const navVariants = { navBlurVariant, containerVariant, buttonVariant };

export { navVariants };
