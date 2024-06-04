import navStyles from "./Nav.module.css";
import { motion, AnimatePresence } from "framer-motion";

const navBlurVariant = {
  hidden: { filter: "blur(10px" },
  visible: { filter: "blur(0)", transition: { duration: 1 } },
};

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

const buttonVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

function Nav() {
  return (
    <nav className={navStyles.nav}>
      <motion.button
        key="home"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={navBlurVariant}
        className={navStyles.home}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M0 96C0 60.7 28.7 32 64 32h96c123.7 0 224 100.3 224 224s-100.3 224-224 224H64c-35.3 0-64-28.7-64-64V96zm160 0H64V416h96c88.4 0 160-71.6 160-160s-71.6-160-160-160z" />
        </svg>
      </motion.button>

      <motion.section
        className={navStyles.others}
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.button key="about" variants={buttonVariant}>
          About
        </motion.button>
        <motion.button key="skill" variants={buttonVariant}>
          Skill
        </motion.button>
        <motion.button key="work" variants={buttonVariant}>
          Work
        </motion.button>
        <motion.button key="blog" variants={buttonVariant}>
          Blog
        </motion.button>
        <motion.button key="connect" variants={buttonVariant}>
          Connect
        </motion.button>
      </motion.section>

      <motion.div
        key="theme"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={navBlurVariant}
      >
        <section className={navStyles.theme}>
          <div className={navStyles.bar}>
            <span></span>
          </div>
          <div className={navStyles.switch}>
            <button>ON</button>
            <button>OFF</button>
          </div>
        </section>
      </motion.div>
    </nav>
  );
}

export { Nav };
