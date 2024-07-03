import { useContext, useEffect, useRef } from "react";
import { Education } from "./Education";
import skillStyles from "./Skill.module.css";
import { Technologies } from "./Technologies/Technologies";
import { MenuContext } from "../../App";
import { useInView } from "framer-motion";
import { Element } from "react-scroll";
import { Cards } from "./Cards/Cards";

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
      <Cards />
      <Education />
      <Technologies />
    </section>
  );
}

export { Skill };
