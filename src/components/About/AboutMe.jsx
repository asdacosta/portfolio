import "@dotlottie/player-component";
import { motion, useAnimation, useInView } from "framer-motion";
import aboutStyles from "./About.module.css";
import { useEffect, useRef, useState } from "react";

function AboutMe() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentInfo, setCurrentInfo] = useState(
    "I develop interactive websites that are responsive across various devices, ensuring seamless user interfaces in collaboration with back-end developers."
  );
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const [slideUpNow, setSlideUpNow] = useState(false);

  const [hideCursor, setHideCursor] = useState(false);
  const [fillProgress, setFillProgress] = useState(false);

  const aboutMeRef = useRef(null);
  const helloRef = useRef(null);
  const aboutMeControls = useAnimation();
  const aboutMeInView = useInView(aboutMeRef);

  useEffect(() => {
    if (aboutMeInView) {
      aboutMeControls.start("visible");
    }
  }, [aboutMeInView, aboutMeControls]);

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

  const botVariant = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: {
      filter: "blur(0)",
      opacity: 1,
      transition: { duration: 0.5, delay: 2 },
    },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  const buttonVariant = {
    hidden: { filter: "blur(10px)", opacity: 0, x: 50 },
    visible: {
      filter: "blur(0)",
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const text = [
    "Web Developer.",
    "UI/UX Designer.",
    "Web Analyst.",
    "Linguist.",
  ];
  const infos = [
    "I develop interactive websites that are responsive across various devices, ensuring seamless user interfaces in collaboration with back-end developers.",
    "I design visually appealing and user-friendly websites, focusing on layout, aesthetics, and refining user experience through continuous improvement.",
    "With a background in Statistics, I leverage my analytical and problem solving skills to solve complex challenges in development, ensuring optimal solutions.",
    "With fluency in four languages, I craft websites to suit users with diverse cultural nuances and collaborate well with teams having various cultural backgrounds.",
  ];

  useEffect(() => {
    const currentText = text[textIndex];
    if (displayedText.charAt(displayedText.length - 1) === ".") {
      setHideCursor(true);
      setFillProgress(true);
      const timeoutId = setTimeout(() => {
        setSlideUpNow(true);
      }, 9000);
      return () => {
        clearTimeout(timeoutId);
      };
    }

    if (index < currentText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [displayedText, textIndex]);

  useEffect(() => {
    if (slideUpNow) {
      const timeoutId = setTimeout(() => {
        setDisplayedText("");
        setCurrentInfo(infos[(textIndex + 1) % infos.length]);
        setHideCursor(false);
        setSlideUpNow(false);
        setFillProgress(false);
        setIndex(0);
        setTextIndex((prev) => (prev + 1) % text.length);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [slideUpNow]);

  return (
    <motion.section
      variants={containerVariant}
      initial="hidden"
      animate={aboutMeControls}
      ref={aboutMeRef}
      className={aboutStyles.aboutMe}
    >
      <motion.section
        key="hello"
        variants={botVariant}
        className={aboutStyles.hello}
      >
        <dotlottie-player
          ref={helloRef}
          className={aboutStyles.helloBot}
          autoplay
          loop
          mode="normal"
          src="https://raw.githubusercontent.com/asdacosta/portfolio/main/src/assets/bot.lottie"
          style={{ width: "16vmin", height: "16vmin" }}
        ></dotlottie-player>
      </motion.section>
      <motion.h1
        key="name"
        variants={textVariant}
        className={aboutStyles.header}
      >
        Ace Da Costa
      </motion.h1>
      <motion.p
        key="intro"
        variants={textVariant}
        className={aboutStyles.intro}
      >
        I'm a
        <span
          className={
            slideUpNow
              ? `${aboutStyles.expertise} ${aboutStyles.slideUp}`
              : aboutStyles.expertise
          }
        >
          {" "}
          {displayedText}
          <span
            className={
              hideCursor
                ? `${aboutStyles.cursor} ${aboutStyles.hideCursor}`
                : aboutStyles.cursor
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
          </span>
        </span>{" "}
      </motion.p>
      <motion.section
        key="infoBox"
        variants={textVariant}
        className={aboutStyles.infoBox}
      >
        <p className={aboutStyles.info}>
          <span className={slideUpNow ? `${aboutStyles.slideUp}` : null}>
            {currentInfo}
          </span>
        </p>
        <p
          className={
            fillProgress
              ? `${aboutStyles.progress} ${aboutStyles.fill}`
              : aboutStyles.progress
          }
        ></p>
      </motion.section>
      <motion.button
        key="resume"
        variants={buttonVariant}
        className={aboutStyles.resume}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z" />
        </svg>
        Resume
      </motion.button>
    </motion.section>
  );
}

export { AboutMe };
