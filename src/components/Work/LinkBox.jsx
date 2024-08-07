import { motion, AnimatePresence } from "framer-motion";
import workStyles from "./Work.module.css";
import { useState } from "react";

function LinkBox({ revealBox, technologies, links }) {
  const [displayImgTechnologies, setDisplayImgTechnologies] = useState(false);

  const containerVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const dotVariant = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      filter: "blur(0)",
      transition: { duration: 0.2 },
    },
  };

  const textVariant = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 30 },
    visible: {
      opacity: 1,
      filter: "blur(0)",
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  function handleHover() {
    setDisplayImgTechnologies(true);
  }

  function handleLeave() {
    setDisplayImgTechnologies(false);
  }

  return (
    <div
      className={
        revealBox
          ? `${workStyles.imgLinkBox} ${workStyles.revealLinkBox}`
          : workStyles.imgLinkBox
      }
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className={workStyles.imgLinks}>
        <a href={links.live} className={workStyles.livePreview} target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
          </svg>
        </a>
        <a href={links.code} className={workStyles.sourceCode} target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z" />
          </svg>
        </a>
      </div>
      {displayImgTechnologies && (
        <AnimatePresence>
          <motion.p
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            className={workStyles.imgTechnologies}
          >
            <motion.span key="first1" variants={textVariant}>
              {technologies[0]}
            </motion.span>
            <motion.span
              key="sec1"
              variants={dotVariant}
              className={workStyles.dotBox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
              </svg>
            </motion.span>
            <motion.span key="third1" variants={textVariant}>
              {technologies[1]}
            </motion.span>
            {technologies[2] !== null ? (
              <>
                <motion.span
                  key="fourth1"
                  variants={dotVariant}
                  className={workStyles.dotBox}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </motion.span>
                <motion.span key="fifth1" variants={textVariant}>
                  {technologies[2]}
                </motion.span>
              </>
            ) : null}
          </motion.p>
        </AnimatePresence>
      )}
    </div>
  );
}

export { LinkBox };
