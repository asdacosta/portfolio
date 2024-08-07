import "@dotlottie/player-component";
import { motion, useAnimation, useInView } from "framer-motion";
import aboutStyles from "../About.module.css";
import { useEffect, useRef, useState } from "react";
import { aboutMeVariants } from "./aboutMeVariants.js";
import { aboutMeStrings } from "./aboutMeStrings.js";

function AboutMe() {
  const [expertise, setExpertise] = useState("");
  const [currentInfo, setCurrentInfo] = useState(
    "I develop interactive websites that are responsive across various devices, ensuring seamless user interfaces in collaboration with back-end developers."
  );
  const [expertiseCharIndex, setExpertiseCharIndex] = useState(0);
  const [expertiseIndex, setExpertiseIndex] = useState(0);
  const [slideUpNow, setSlideUpNow] = useState(false);
  const [hideCursor, setHideCursor] = useState(false);
  const [fillProgress, setFillProgress] = useState(false);
  const [resumeDownloaded, setResumeDownloaded] = useState(false);

  const aboutMeRef = useRef(null);
  const helloRef = useRef(null);
  const aboutMeControls = useAnimation();
  const aboutMeInView = useInView(aboutMeRef);

  const displayAboutMeOnView = () => {
    if (aboutMeInView) aboutMeControls.start("visible");
  };
  useEffect(displayAboutMeOnView, [aboutMeInView, aboutMeControls]);

  const handleTypingExpertiseText = () => {
    const clearAboutWhenExpertiseTextIsTyped = (() => {
      if (expertise.charAt(expertise.length - 1) === ".") {
        setHideCursor(true);
        setFillProgress(true);
        const timeoutId = setTimeout(() => {
          setSlideUpNow(true);
        }, 9000);
        return () => {
          clearTimeout(timeoutId);
        };
      }
    })();

    // Type expertise text
    const currentText = aboutMeStrings.expertise[expertiseIndex];
    if (expertiseCharIndex < currentText.length) {
      const timeoutId = setTimeout(() => {
        setExpertise((prev) => prev + currentText[expertiseCharIndex]);
        setExpertiseCharIndex(expertiseCharIndex + 1);
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  };
  useEffect(handleTypingExpertiseText, [expertise, expertiseIndex]);

  const slideUpWhenTypingLapses = () => {
    if (slideUpNow) {
      const timeoutId = setTimeout(() => {
        setExpertise("");
        setCurrentInfo(
          aboutMeStrings.info[(expertiseIndex + 1) % aboutMeStrings.info.length]
        );
        setHideCursor(false);
        setSlideUpNow(false);
        setFillProgress(false);
        setExpertiseCharIndex(0);
        setExpertiseIndex(
          (prev) => (prev + 1) % aboutMeStrings.expertise.length
        );
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  };
  useEffect(slideUpWhenTypingLapses, [slideUpNow]);

  const indicateResumeDownloaded = () => {
    setResumeDownloaded(true);
    setTimeout(() => setResumeDownloaded(false), 2000);
  };

  return (
    <motion.section
      variants={aboutMeVariants.containerVariant}
      initial="hidden"
      animate={aboutMeControls}
      ref={aboutMeRef}
      className={aboutStyles.aboutMe}
    >
      <motion.section
        key="hello"
        variants={aboutMeVariants.botVariant}
        className={aboutStyles.hello}
      >
        <div className={aboutStyles.boundPseudoElem}>
          <dotlottie-player
            ref={helloRef}
            className={aboutStyles.helloBot}
            autoplay
            loop
            mode="normal"
            src="https://raw.githubusercontent.com/asdacosta/portfolio/main/src/assets/bot.lottie"
            style={{ width: "8rem", height: "8rem" }}
          ></dotlottie-player>
        </div>
      </motion.section>
      <motion.h1
        key="name"
        variants={aboutMeVariants.textVariant}
        className={aboutStyles.header}
      >
        Ace Da Costa
      </motion.h1>
      <motion.p
        key="intro"
        variants={aboutMeVariants.textVariant}
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
          {expertise}
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
        variants={aboutMeVariants.textVariant}
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
        variants={aboutMeVariants.buttonVariant}
        className={`${aboutStyles.resume} ${
          resumeDownloaded ? aboutStyles.downloaded : ""
        }`}
        onClick={indicateResumeDownloaded}
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
