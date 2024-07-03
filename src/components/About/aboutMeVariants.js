const containerVariant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const botVariant = {
  hidden: { filter: "blur(10px)", opacity: 0 },
  visible: {
    filter: "blur(0)",
    opacity: 1,
    transition: { duration: 0.5, delay: 2 },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const buttonVariant = {
  hidden: { filter: "blur(10px)", opacity: 0, x: 50 },
  visible: {
    filter: "blur(0)",
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const aboutMeVariants = {
  containerVariant,
  botVariant,
  textVariant,
  buttonVariant,
};

export { aboutMeVariants };
