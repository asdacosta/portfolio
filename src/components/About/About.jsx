import { useContext, useEffect, useRef } from "react";
import aboutStyles from "./About.module.css";
import { AboutMe } from "./AboutMe";
import { AboutSocials } from "./AboutSocials";
import { useAnimation, useInView, motion } from "framer-motion";
import { MenuContext } from "../../App";

function About() {
  const aboutRef = useRef(null);
  const inView = useInView(aboutRef);
  const { page, setPage } = useContext(MenuContext);

  useEffect(() => {
    if (inView) {
      setPage("about");
    }
  }, [inView]);

  return (
    <motion.section className={aboutStyles.about} ref={aboutRef}>
      <AboutMe />
      <AboutSocials />
    </motion.section>
  );
}

export { About };
