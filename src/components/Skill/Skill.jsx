import { AboutSocials } from "../About/AboutSocials";
import { AllDevices } from "./AllDevices";
import { Analytics } from "./Analytics";
import { Author } from "./Author";
import { Bot } from "./Bot";
import { Mobile } from "./Mobile";
import { Research } from "./Research";
import skillStyles from "./Skill.module.css";
import { Team } from "./Team";

function Skill() {
  return (
    <section className={skillStyles.skill}>
      <AllDevices />
      <Mobile />
      <Analytics />
      <Bot />
      <Team />
      <Author />
      <Research />
    </section>
  );
}

export { Skill };
