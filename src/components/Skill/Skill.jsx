import { useContext, useEffect, useRef } from "react";
import { AllDevices } from "./Cards/AllDevices";
import { Analytics } from "./Cards/Analytics";
import { Author } from "./Cards/Author";
import { Bot } from "./Cards/Bot";
import { Education } from "./Education";
import { Mobile } from "./Cards/Mobile";
import { Research } from "./Cards/Research";
import skillStyles from "./Skill.module.css";
import { Team } from "./Cards/Team";
import { Technologies } from "./Technologies/Technologies";
import { MenuContext } from "../../App";
import { useInView } from "framer-motion";
import { Element } from "react-scroll";

function Skill() {
  const { page, setPage } = useContext(MenuContext);
  const SkillRef = useRef(null);
  const inView = useInView(SkillRef, { amount: 0.1 });

  useEffect(() => {
    if (inView) {
      setPage("skill");
    }
  }, [inView]);

  return (
    <section className={skillStyles.skill} ref={SkillRef}>
      <Element name="Skill" className="targetScroll"></Element>
      <AllDevices />
      <Mobile />
      <Analytics />
      <Bot />
      <Team />
      <Author />
      <Research />
      <Education />
      <Technologies />
    </section>
  );
}

export { Skill };
