import { useEffect, useRef } from "react";
import { BackSection } from "./BackSection";
import { FrontSection } from "./FrontSection";
import { LangSection } from "./LangSection";
import skillStyles from "./Skill.module.css";
import { ToolSection } from "./ToolSection";
import { useAnimation, useInView, motion } from "framer-motion";

function Technologies() {
  const techRef = useRef(null);
  const controls = useAnimation();
  const techInView = useInView(techRef);

  useEffect(() => {
    if (techInView) {
      controls.start("visible");
    }
  }, [controls, techInView]);

  const techVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
    hidden: { opacity: 0, y: 150 },
  };

  return (
    <motion.section
      className={skillStyles.technologies}
      ref={techRef}
      initial="hidden"
      animate={controls}
      variants={techVariants}
    >
      <h2>Technologies</h2>
      <section className={skillStyles.techSection}>
        <section className={skillStyles.languages}>
          <h3>Languages</h3>
          <section className={skillStyles.langSection}>
            <LangSection />
            <LangSection />
          </section>
        </section>
        <section className={skillStyles.tools}>
          <h3>Tools</h3>
          <section className={skillStyles.toolSection}>
            <ToolSection />
            <ToolSection />
          </section>
        </section>
        <section className={skillStyles.frontEnd}>
          <h3>Front-End</h3>
          <section className={skillStyles.frontSection}>
            <FrontSection />
            <FrontSection />
          </section>
        </section>
        <section className={skillStyles.backEnd}>
          <h3>Back-End</h3>
          <section className={skillStyles.backSection}>
            <BackSection />
            <BackSection />
          </section>
        </section>
      </section>
    </motion.section>
  );
}

export { Technologies };
