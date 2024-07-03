import { useContext, useEffect, useRef } from "react";
import aboutStyles from "./About.module.css";
import { AboutMe } from "./AboutMe/AboutMe";
import { AboutSocials } from "./AboutSocials/AboutSocials";
import { useInView, motion } from "framer-motion";
import { MenuContext } from "../../App";
import { Element } from "react-scroll";

function About() {
  const aboutRef = useRef(null);
  const inView = useInView(aboutRef, { amount: 0.1 });
  const { page, setPage } = useContext(MenuContext);

  useEffect(() => {
    if (inView) {
      setPage("about");
    }
  }, [inView]);

  return (
    <motion.section className={aboutStyles.about} ref={aboutRef}>
      <Element name="About" className="targetScroll"></Element>
      <AboutMe />
      <AboutSocials />
    </motion.section>
  );
}

export { About };
