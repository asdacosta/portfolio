import { useContext, useEffect, useRef } from "react";
import { AboutSocials } from "../About/AboutSocials";
import { AllDevices } from "./AllDevices";
import { Analytics } from "./Analytics";
import { Author } from "./Author";
import { Bot } from "./Bot";
import { Education } from "./Education";
import { Mobile } from "./Mobile";
import { Research } from "./Research";
import skillStyles from "./Skill.module.css";
import { Team } from "./Team";
import { Technologies } from "./Technologies";
import { MenuContext } from "../../App";
import { useInView } from "framer-motion";

function Skill() {
  const { page, setPage } = useContext(MenuContext);
  const SkillRef = useRef(null);
  const inView = useInView(SkillRef);

  useEffect(() => {
    if (inView) {
      setPage("skill");
    }
  }, [inView]);

  return (
    <section className={skillStyles.skill} ref={SkillRef}>
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
