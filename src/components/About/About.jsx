import aboutStyles from "./About.module.css";
import { AboutMe } from "./AboutMe";
import { AboutSocials } from "./AboutSocials";

function About() {
  return (
    <section className={aboutStyles.about}>
      <AboutMe />
      <AboutSocials />
    </section>
  );
}

export { About };
