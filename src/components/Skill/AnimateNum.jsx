// AnimateNum.jsx
import React, { useEffect, useRef } from "react";
import skillStyles from "./Skill.module.css";
import { useMotionValue, animate, motion } from "framer-motion";

function AnimatedNum({
  target = 0,
  percent = true,
  delayTime = 0,
  duration = 2.5,
}) {
  const wrapperRef = useRef(null);
  const motionValue = useMotionValue(0);
  const numNodeRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const firstElement = Array.from(wrapper.childNodes).find(
      (n) => n.nodeType === 1
    );
    numNodeRef.current = firstElement || null;
  }, []);

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (v) => {
      const node = numNodeRef.current;
      if (!node) return;
      const intVal = Math.floor(v);
      if (node.textContent !== String(intVal)) {
        node.textContent = String(intVal);
      }
    });

    const controls = animate(motionValue, target, {
      duration: Number(duration) || 0,
      delay: Number(delayTime) || 0,
      ease: "easeOut",
    });

    return () => {
      unsubscribe();
      try {
        if (controls && typeof controls.stop === "function") controls.stop();
      } catch (e) {}
    };
  }, [target, duration, delayTime, motionValue]);

  return (
    <motion.span ref={wrapperRef} aria-live="polite" role="status">
      <span>0</span>
      {percent && (
        <span className={skillStyles.percent} aria-hidden="true">
          %
        </span>
      )}
    </motion.span>
  );
}

export { AnimatedNum };
