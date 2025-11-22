import React, { memo, lazy, Suspense } from "react";
import skillStyles from "../Skill.module.css";
import { motion } from "framer-motion";

const LazyLangSection = lazy(() =>
  import("./Languages").then((m) => ({ default: m.LangSection }))
);
const LazyToolSection = lazy(() =>
  import("./Tools").then((m) => ({ default: m.ToolSection }))
);
const LazyFrontSection = lazy(() =>
  import("./FrontEnd").then((m) => ({ default: m.FrontSection }))
);
const LazyBackSection = lazy(() =>
  import("./BackEnd").then((m) => ({ default: m.BackSection }))
);

const techVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  hidden: { opacity: 0, y: 100 },
};

const SECTIONS = [
  {
    key: "languages",
    title: "Languages",
    containerClass: skillStyles.languages,
    innerClass: skillStyles.langSection,
    Component: LazyLangSection,
    repeat: 2,
  },
  {
    key: "tools",
    title: "Tools",
    containerClass: skillStyles.tools,
    innerClass: skillStyles.toolSection,
    Component: LazyToolSection,
    repeat: 2,
  },
  {
    key: "frontEnd",
    title: "Front-End",
    containerClass: skillStyles.frontEnd,
    innerClass: skillStyles.frontSection,
    Component: LazyFrontSection,
    repeat: 2,
  },
  {
    key: "backEnd",
    title: "Back-End",
    containerClass: skillStyles.backEnd,
    innerClass: skillStyles.backSection,
    Component: LazyBackSection,
    repeat: 2,
  },
];

const RepeatedSection = memo(function RepeatedSection({ Component, count }) {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push(<Component key={i} />);
  }
  return <>{items}</>;
});
RepeatedSection.displayName = "RepeatedSection";

function Technologies() {
  return (
    <motion.section
      className={skillStyles.technologies}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={techVariants}
    >
      <h2>Technologies</h2>

      <section className={skillStyles.techSection}>
        <Suspense fallback={null}>
          {SECTIONS.map(
            ({ key, title, containerClass, innerClass, Component, repeat }) => (
              <section key={key} className={containerClass}>
                <h3>{title}</h3>
                <section className={innerClass}>
                  <RepeatedSection Component={Component} count={repeat} />
                </section>
              </section>
            )
          )}
        </Suspense>
      </section>
    </motion.section>
  );
}

export { Technologies };
