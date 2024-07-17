const leftVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 1.3 } },
  hidden: { opacity: 0, x: -150 },
};

const rightVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 1.3 } },
  hidden: { opacity: 0, x: 150 },
};

const cardsVariants = { leftVariant, rightVariant };

export { cardsVariants };
