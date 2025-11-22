import { useContext, useEffect, useRef } from "react";
import skillStyles from "./Skill.module.css";
import { Education } from "./Education";
import { Technologies } from "./Technologies/Technologies";
import { Cards } from "./Cards/Cards";
import { MenuContext } from "../../App";
import { useInView } from "framer-motion";
import { Element } from "react-scroll";

function Skill() {
  const { setPage } = useContext(MenuContext);
  const skillRef = useRef(null);
  const inView = useInView(skillRef, { amount: 0.1, once: true });

  useEffect(() => {
    if (inView) setPage("skill");
  }, [inView, setPage]);

  return (
    <section className={skillStyles.skill} ref={skillRef}>
      <Element name="Skill" className="targetScroll" />
      <Cards />
      <Education />
      <Technologies />
    </section>
  );
}

export { Skill };
