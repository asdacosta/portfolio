import { motion, AnimatePresence } from "framer-motion";
import workStyles from "./Work.module.css";

function LinkBox() {
  const containerVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const dotVariant = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      filter: "blur(0)",
      transition: { duration: 0.2 },
    },
  };

  const textVariant = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 30 },
    visible: {
      opacity: 1,
      filter: "blur(0)",
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.p
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className={workStyles.imgTechnologies}
    >
      <motion.span key="first1" variants={textVariant}>
        React
      </motion.span>
      <motion.span key="sec1" variants={dotVariant}>
        ⚫
      </motion.span>
      <motion.span key="third1" variants={textVariant}>
        CSS
      </motion.span>
      <motion.span key="fourth1" variants={dotVariant}>
        ⚫
      </motion.span>
      <motion.span key="fifth1" variants={textVariant}>
        Vite
      </motion.span>
    </motion.p>
  );
}

export { LinkBox };
