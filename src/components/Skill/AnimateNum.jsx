import skillStyles from "./Skill.module.css";
import {
  useMotionValue,
  useTransform,
  motion,
  animate,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useState } from "react";

function AnimatedNum({ target }) {
  const motionValue = useMotionValue(0);
  const number = useTransform(motionValue, (value) => Math.floor(value));
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    animate(motionValue, target, { duration: 2.5 });
  }, [target, motionValue]);

  useMotionValueEvent(number, "change", (latest) => {
    setCurrentValue(latest);
  });

  return (
    <motion.span>
      {currentValue}
      <span className={skillStyles.percent}>%</span>
    </motion.span>
  );
}

export { AnimatedNum };
