// Education.jsx
import { useEffect, useRef } from "react";
import skillStyles from "./Skill.module.css";
import "@dotlottie/player-component";
import { useAnimation, useInView, motion } from "framer-motion";
import { AnimatedNum } from "./AnimateNum";

/* Animation variants defined once (not recreated on each render) */
const EDU_VARIANTS = {
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  hidden: { opacity: 0, y: 100 },
};

/* Shared Lottie source — keep here so it's easy to update */
const LOTTIE_SRC =
  "https://raw.githubusercontent.com/asdacosta/portfolio/main/src/assets/cert.lottie";

/* Small presentational components */
function LottieIcon({
  src = LOTTIE_SRC,
  style = { width: "100%", height: "100%" },
}) {
  return (
    <div className={skillStyles.icon}>
      <dotlottie-player
        autoplay
        loop
        mode="normal"
        src={src}
        style={style}
      ></dotlottie-player>
    </div>
  );
}

function CircleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  );
}

/* Data model for education items — one source of truth */
const EDU_ITEMS = [
  {
    key: "msc",
    cssClass: skillStyles.msc,
    institution: "University",
    institutionLink: null, // no link in original — keep null
    course: "MSc. Computer Science",
    score: 60,
    universitySpanClass: skillStyles.eduUniversitySpan,
  },
  {
    key: "odin",
    cssClass: skillStyles.odin,
    institution: "Odin",
    institutionLink: "https://www.theodinproject.com/",
    course: "Full-stack Development",
    score: 100,
  },
  {
    key: "uni",
    cssClass: skillStyles.uni,
    institution: "University",
    institutionLink: null, // no link in original — keep null
    course: "BSc. Statistics",
    score: 100,
    universitySpanClass: skillStyles.eduUniversitySpan,
  },
  {
    key: "alx-ai",
    cssClass: skillStyles.alx2,
    institution: "ALX",
    institutionLink: "https://www.alxafrica.com/",
    course: "AI Essentials",
    score: 100,
  },
  {
    key: "alx-se",
    cssClass: skillStyles.alx1,
    institution: "ALX",
    institutionLink: "https://www.alxafrica.com/",
    course: "Software engineering",
    score: 80,
  },
];

/* Component for each education item */
function EducationItem({ item }) {
  return (
    <section className={item.cssClass}>
      <LottieIcon />
      <p className={skillStyles.context}>
        <span
          className={
            item.universitySpanClass ? item.universitySpanClass : undefined
          }
        >
          {item.institutionLink ? (
            <a
              href={item.institutionLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.institution}
            </a>
          ) : (
            item.institution
          )}
        </span>

        <span>
          <CircleIcon />
        </span>

        <span>{item.course}</span>
      </p>

      <p className={skillStyles.eduBar}>
        <span>
          <span className={skillStyles.fill}></span>
        </span>
        <AnimatedNum target={item.score} />
      </p>
    </section>
  );
}

/* Main component */
function Education() {
  const eduRef = useRef(null);
  const controls = useAnimation();

  /* Using useInView with `once: true` so we lazy-render when visible and never re-trigger */
  const eduInView = useInView(eduRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (eduInView) {
      controls.start("visible");
    }
  }, [eduInView, controls]);

  return (
    <motion.section
      className={skillStyles.education}
      ref={eduRef}
      initial="hidden"
      animate={controls}
      variants={EDU_VARIANTS}
    >
      <h2>Education</h2>

      {/* Render the education entries only after the section has come into view (lazy load) */}
      {eduInView && (
        <section className={skillStyles.eduSection}>
          {EDU_ITEMS.map((item) => (
            <EducationItem key={item.key} item={item} />
          ))}
        </section>
      )}
    </motion.section>
  );
}

export { Education };
