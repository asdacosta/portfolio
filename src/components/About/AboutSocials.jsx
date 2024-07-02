import "@dotlottie/player-component";
import { delay, motion, useAnimation, useInView } from "framer-motion";
import aboutStyles from "./About.module.css";
import { useEffect, useRef, useState } from "react";

function AboutSocials() {
  const [isBubbling, setIsBubbling] = useState(true);

  const githubRef = useRef(null);
  const linkedInRef = useRef(null);
  const xRef = useRef(null);
  const igRef = useRef(null);
  const fbRef = useRef(null);
  const youtubeRef = useRef(null);
  const mediumRef = useRef(null);
  const [refClasses, setRefClasses] = useState({
    github: false,
    linkedIn: false,
    x: false,
    ig: false,
    fb: false,
    youtube: false,
    medium: false,
  });

  const animationRef = useRef(null);
  const toConnectRef = useRef(null);
  const aboutSocialsRef = useRef(null);
  const aboutSocialsInView = useInView(aboutSocialsRef);
  const controls = useAnimation();

  useEffect(() => {
    if (aboutSocialsInView) {
      controls.start("visible");
    }
  }, [aboutSocialsInView, controls]);

  function fillUp() {
    if (toConnectRef.current) {
      toConnectRef.current.setDirection(1);
      toConnectRef.current.play();
      toConnectRef.current.setSpeed(1.5);
    }
    setIsBubbling(false);
  }

  function revertFill() {
    if (toConnectRef.current) {
      toConnectRef.current.setDirection(-1);
      toConnectRef.current.play();
      toConnectRef.current.setSpeed(4);
    }
    setTimeout(() => {
      setIsBubbling(true);
    }, 200);
  }

  function blurOthers(event) {
    switch (event.currentTarget) {
      case githubRef.current:
        setRefClasses((prev) => ({
          ...prev,
          x: true,
          linkedIn: true,
          ig: true,
          fb: true,
          youtube: true,
          medium: true,
        }));
        break;
      case linkedInRef.current:
        setRefClasses((prev) => ({
          ...prev,
          github: true,
          x: true,
          ig: true,
          fb: true,
          youtube: true,
          medium: true,
        }));
        break;
      case xRef.current:
        setRefClasses((prev) => ({
          ...prev,
          github: true,
          linkedIn: true,
          ig: true,
          fb: true,
          youtube: true,
          medium: true,
        }));
        break;
      case igRef.current:
        setRefClasses((prev) => ({
          ...prev,
          github: true,
          linkedIn: true,
          x: true,
          fb: true,
          youtube: true,
          medium: true,
        }));
        break;
      case fbRef.current:
        setRefClasses((prev) => ({
          ...prev,
          github: true,
          linkedIn: true,
          x: true,
          ig: true,
          youtube: true,
          medium: true,
        }));
        break;
      case youtubeRef.current:
        setRefClasses((prev) => ({
          ...prev,
          github: true,
          linkedIn: true,
          x: true,
          fb: true,
          ig: true,
          medium: true,
        }));
        break;
      case mediumRef.current:
        setRefClasses((prev) => ({
          ...prev,
          github: true,
          linkedIn: true,
          x: true,
          fb: true,
          youtube: true,
          ig: true,
        }));
        break;
    }
  }

  function revertBlur() {
    setRefClasses((prev) => ({
      github: false,
      xRef: false,
      linkedIn: false,
      ig: false,
      fb: false,
      youtube: false,
      medium: false,
    }));
  }

  const slowDown = () => {
    if (animationRef.current) {
      animationRef.current.setSpeed(0.2);
    }
  };

  const toNormal = () => {
    if (animationRef.current) {
      animationRef.current.setSpeed(1);
    }
  };

  const containerVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 2.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const iconVariant = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      filter: "blur(0)",
      transition: { duration: 0.5 },
    },
  };

  const backgroundVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 2.5 } },
  };

  const connectVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 4.5 } },
  };

  return (
    <section className={aboutStyles.aboutSocials}>
      <motion.section
        ref={aboutSocialsRef}
        variants={containerVariant}
        initial="hidden"
        animate={controls}
        className={aboutStyles.socialIcons}
      >
        <motion.div
          key="github"
          variants={iconVariant}
          className={aboutStyles.githubBox}
        >
          <svg
            ref={githubRef}
            onMouseEnter={blurOthers}
            onMouseLeave={revertBlur}
            className={
              refClasses.github
                ? `${aboutStyles.github} ${aboutStyles.blurIcon}`
                : aboutStyles.github
            }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z" />
          </svg>
        </motion.div>
        <motion.div
          key="linkedIn"
          variants={iconVariant}
          className={aboutStyles.linkedInBox}
        >
          <svg
            ref={linkedInRef}
            onMouseEnter={blurOthers}
            onMouseLeave={revertBlur}
            className={
              refClasses.linkedIn
                ? `${aboutStyles.linkedIn} ${aboutStyles.blurIcon}`
                : aboutStyles.linkedIn
            }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
          </svg>
        </motion.div>
        <motion.div key="X" variants={iconVariant} className={aboutStyles.xBox}>
          <svg
            ref={xRef}
            onMouseEnter={blurOthers}
            onMouseLeave={revertBlur}
            className={
              refClasses.x
                ? `${aboutStyles.x} ${aboutStyles.blurIcon}`
                : aboutStyles.x
            }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
          </svg>
        </motion.div>
        <motion.div
          key="ig"
          variants={iconVariant}
          className={aboutStyles.igBox}
        >
          <svg
            ref={igRef}
            onMouseEnter={blurOthers}
            onMouseLeave={revertBlur}
            className={
              refClasses.ig
                ? `${aboutStyles.ig} ${aboutStyles.blurIcon}`
                : aboutStyles.ig
            }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" />
          </svg>
        </motion.div>
        <motion.div
          key="fb"
          variants={iconVariant}
          className={aboutStyles.fbBox}
        >
          <svg
            ref={fbRef}
            onMouseEnter={blurOthers}
            onMouseLeave={revertBlur}
            className={
              refClasses.fb
                ? `${aboutStyles.fb} ${aboutStyles.blurIcon}`
                : aboutStyles.fb
            }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
          </svg>
        </motion.div>
        <motion.div
          key="tube"
          variants={iconVariant}
          className={aboutStyles.youtubeBox}
        >
          <svg
            ref={youtubeRef}
            onMouseEnter={blurOthers}
            onMouseLeave={revertBlur}
            className={
              refClasses.youtube
                ? `${aboutStyles.youtube} ${aboutStyles.blurIcon}`
                : aboutStyles.youtube
            }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M282 256.2l-95.2-54.1V310.3L282 256.2zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm14.4 136.1c7.6 28.6 7.6 88.2 7.6 88.2s0 59.6-7.6 88.1c-4.2 15.8-16.5 27.7-32.2 31.9C337.9 384 224 384 224 384s-113.9 0-142.2-7.6c-15.7-4.2-28-16.1-32.2-31.9C42 315.9 42 256.3 42 256.3s0-59.7 7.6-88.2c4.2-15.8 16.5-28.2 32.2-32.4C110.1 128 224 128 224 128s113.9 0 142.2 7.7c15.7 4.2 28 16.6 32.2 32.4z" />
          </svg>
        </motion.div>
        <motion.div
          key="medium"
          variants={iconVariant}
          className={aboutStyles.mediumBox}
        >
          <svg
            ref={mediumRef}
            onMouseEnter={blurOthers}
            onMouseLeave={revertBlur}
            className={
              refClasses.medium
                ? `${aboutStyles.medium} ${aboutStyles.blurIcon}`
                : aboutStyles.medium
            }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path d="M180.5 74.3C80.8 74.3 0 155.6 0 256S80.8 437.7 180.5 437.7 361 356.4 361 256 280.2 74.3 180.5 74.3zm288.3 10.6c-49.8 0-90.2 76.6-90.2 171.1s40.4 171.1 90.3 171.1 90.3-76.6 90.3-171.1H559C559 161.5 518.6 84.9 468.8 84.9zm139.5 17.8c-17.5 0-31.7 68.6-31.7 153.3s14.2 153.3 31.7 153.3S640 340.6 640 256C640 171.4 625.8 102.7 608.3 102.7z" />
          </svg>
        </motion.div>
      </motion.section>
      <motion.section
        variants={backgroundVariant}
        initial="hidden"
        animate="visible"
        className={aboutStyles.bgLottie}
      >
        <dotlottie-player
          ref={animationRef}
          onMouseEnter={slowDown}
          onMouseLeave={toNormal}
          speed="1"
          autoplay
          loop
          mode="bounce"
          src="https://raw.githubusercontent.com/asdacosta/portfolio/main/src/assets/0BpLlOouLt.lottie"
          style={{ width: "65vmin", height: "65vmin" }}
        ></dotlottie-player>
      </motion.section>
      <motion.section
        variants={connectVariant}
        initial="hidden"
        animate="visible"
        className={aboutStyles.toConnect}
      >
        <dotlottie-player
          ref={toConnectRef}
          onMouseEnter={fillUp}
          onMouseLeave={revertFill}
          delay="0"
          mode="normal"
          src="https://raw.githubusercontent.com/asdacosta/portfolio/main/src/assets/toConnect.lottie"
          style={{ width: "25vmin", height: "10vmin" }}
        ></dotlottie-player>
        {isBubbling && (
          <div className={aboutStyles.bubbleBox}>
            <div className={aboutStyles.bubble}></div>
          </div>
        )}
      </motion.section>
    </section>
  );
}

export { AboutSocials };
