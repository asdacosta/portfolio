import workStyles from "./Work.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { AnimatedNum } from "../Skill/AnimateNum.jsx";
import { MenuContext } from "../../App.jsx";
import { Element } from "react-scroll";
import { workVariants as variants } from "./workVariants.js";
import { WorkSwipe } from "./WorkSwipe/WorkSwipe.jsx";
import { WorkSamplesAnim } from "./WorkSamplesAnim/WorkSamplesAnim.jsx";

function Work() {
  const [displayExp, setDisplayExp] = useState(false);
  const workRef = useRef(null);
  const workInView = useInView(workRef, { amount: 0.2 });
  const { page, setPage } = useContext(MenuContext);

  const updatePageInView = () => {
    if (workInView) setPage("work");
  };
  useEffect(updatePageInView, [workInView]);

  const expRef = useRef(null);
  const expControls = useAnimation();
  const expInView = useInView(expRef);

  const displayExpInView = () => {
    if (expInView) {
      setDisplayExp(true);
      expControls.start("visible");
    }
  };
  useEffect(displayExpInView, [expControls, expInView]);

  return (
    <section className={workStyles.work} ref={workRef}>
      <Element name="Work" className="targetScroll"></Element>
      <WorkSamplesAnim />

      <motion.section className={workStyles.workSamplesSwipe}>
        <WorkSwipe />
      </motion.section>

      <motion.section
        className={workStyles.experience}
        ref={expRef}
        initial="hidden"
        animate={expControls}
        variants={variants.expVariant}
      >
        <h2>Experience</h2>
        {displayExp && (
          <p>
            <AnimatedNum target={20} percent={false} delayTime={0.5} />{" "}
            <span className={workStyles.months}>months</span> ~{" "}
            <AnimatedNum target={2} percent={false} delayTime={0.5} />{" "}
            <span className={workStyles.years}>years</span>
          </p>
        )}
      </motion.section>
    </section>
  );
}

export { Work };
