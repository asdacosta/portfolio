import "@dotlottie/player-component";
import loadStyles from "./Load.module.css";
import { useEffect, useRef, useState } from "react";

function Load({ onComplete }) {
  const animationRef = useRef(null);

  useEffect(() => {
    const animation = animationRef.current;
    if (!animation) return;

    animation.addEventListener("complete", () => {
      if (onComplete) {
        onComplete();
      }
    });
  }, []);

  return (
    <section className={loadStyles.load}>
      <dotlottie-player
        ref={animationRef}
        className={loadStyles.lottie}
        autoplay
        mode="normal"
        src="https://raw.githubusercontent.com/asdacosta/portfolio/main/src/assets/Animation%20-%201717421594190.lottie"
        style={{ width: "400px", height: "400px" }}
      ></dotlottie-player>
    </section>
  );
}

export { Load };
