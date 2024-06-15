import { BackSection } from "./BackSection";
import { FrontSection } from "./FrontSection";
import { LangSection } from "./LangSection";
import skillStyles from "./Skill.module.css";
import { ToolSection } from "./ToolSection";

function Technologies() {
  return (
    <section className={skillStyles.technologies}>
      <h2>Technologies</h2>
      <section className={skillStyles.techSection}>
        <section className={skillStyles.languages}>
          <h3>Languages</h3>
          <section className={skillStyles.langSection}>
            <LangSection />
            <LangSection />
          </section>
        </section>
        <section className={skillStyles.tools}>
          <h3>Tools</h3>
          <section className={skillStyles.toolSection}>
            <ToolSection />
            <ToolSection />
          </section>
        </section>
        <section className={skillStyles.frontEnd}>
          <h3>Front-End</h3>
          <section className={skillStyles.frontSection}>
            <FrontSection />
            <FrontSection />
          </section>
        </section>
        <section className={skillStyles.backEnd}>
          <h3>Back-End</h3>
          <section className={skillStyles.backSection}>
            <BackSection />
            <BackSection />
          </section>
        </section>
      </section>
    </section>
  );
}

export { Technologies };
