// Work.jsx
import React, { useContext, useEffect, useRef, memo } from "react";
import workStyles from "./Work.module.css";
import { motion, useAnimation, useInView } from "framer-motion";
import { AnimatedNum } from "../Skill/AnimateNum.jsx";
import { MenuContext } from "../../App.jsx";
import { Element } from "react-scroll";
import { workVariants as variants } from "./workVariants.js";
import { WorkSwipe } from "./WorkSwipe/WorkSwipe.jsx";
import { WorkSamplesAnim } from "./WorkSamplesAnim/WorkSamplesAnim.jsx";

function WorkComponent() {
  const workRef = useRef(null);
  const expRef = useRef(null);

  const workInView = useInView(workRef, { amount: 0.2 });
  const expInView = useInView(expRef, { amount: 0.1 });

  const expControls = useAnimation();
  const { page, setPage } = useContext(MenuContext);

  useEffect(() => {
    if (workInView && page !== "work") setPage("work");
    if (expInView) expControls.start("visible");
  }, [workInView, expInView, setPage, page, expControls]);

  return (
    <section className={workStyles.work} ref={workRef}>
      <Element name="Work" className="targetScroll" />
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
        aria-labelledby="work-experience-heading"
      >
        <h2 id="work-experience-heading">Experience</h2>
        {expInView && (
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

export const Work = memo(WorkComponent);
