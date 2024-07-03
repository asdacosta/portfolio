const workSamplesVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  hidden: { opacity: 0, x: 100 },
};

const expVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 100 },
};

const workVariants = { workSamplesVariant, expVariant };

export { workVariants };
