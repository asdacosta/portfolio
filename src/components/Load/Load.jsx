import "@dotlottie/player-component";
import loadStyles from "./Load.module.css";
import { useEffect, useRef } from "react";

function Load({ onComplete }) {
  const animationRef = useRef(null);

  useEffect(() => {
    const animation = animationRef.current;
    if (!animation) return;

    const handleComplete = () => {
      if (onComplete) onComplete();
    };

    animation.addEventListener("complete", handleComplete);
    return () => animation.removeEventListener("complete", handleComplete);
  }, [onComplete]);

  return (
    <section className={loadStyles.load}>
      <dotlottie-player
        ref={animationRef}
        className={loadStyles.lottie}
        autoplay
        mode="normal"
        src="https://raw.githubusercontent.com/asdacosta/portfolio/main/src/assets/loader.lottie"
        style={{ width: "260px", height: "260px" }}
      ></dotlottie-player>
    </section>
  );
}

export { Load };
