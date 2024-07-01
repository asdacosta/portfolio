import skillStyles from "./Skill.module.css";
import "@dotlottie/player-component";

function Education() {
  return (
    <section className={skillStyles.education}>
      <h2>Education</h2>
      <section className={skillStyles.eduSection}>
        <section className={skillStyles.odin1}>
          <div className={skillStyles.icon}>
            <dotlottie-player
              autoplay
              loop
              mode="normal"
              src="https://raw.githubusercontent.com/asdacosta/portfolio/main/src/assets/cert.lottie"
              style={{ width: "100%", height: "100%" }}
            ></dotlottie-player>
          </div>
          <p className={skillStyles.context}>
            <span>
              <a href="https://www.theodinproject.com/" target="_blank">
                The Odin Project
              </a>
            </span>
            <span>⚫</span>
            <span>Front-end Dev</span>
          </p>
          <p className={skillStyles.eduBar}>
            <span>
              <span className={skillStyles.fill}></span>
            </span>
            <span>
              100<span className={skillStyles.percent}>%</span>
            </span>
          </p>
        </section>
        <section className={skillStyles.uni}>
          <div className={skillStyles.icon}>
            <dotlottie-player
              autoplay
              loop
              mode="normal"
              src="https://raw.githubusercontent.com/asdacosta/portfolio/main/src/assets/cert.lottie"
              style={{ width: "100%", height: "100%" }}
            ></dotlottie-player>
          </div>
          <p className={skillStyles.context}>
            <span className={skillStyles.eduUniversitySpan}>University</span>
            <span>⚫</span>
            <span>BSc. Statistics</span>
          </p>
          <p className={skillStyles.eduBar}>
            <span>
              <span className={skillStyles.fill}></span>
            </span>
            <span>
              100<span className={skillStyles.percent}>%</span>
            </span>
          </p>
        </section>
        <section className={skillStyles.alx1}>
          <div className={skillStyles.icon}>
            <dotlottie-player
              autoplay
              loop
              mode="normal"
              src="https://raw.githubusercontent.com/asdacosta/portfolio/main/src/assets/cert.lottie"
              style={{ width: "100%", height: "100%" }}
            ></dotlottie-player>
          </div>
          <p className={skillStyles.context}>
            <span>
              <a href="https://www.alxafrica.com/" target="_blank">
                ALX
              </a>
            </span>
            <span>⚫</span>
            <span>Software engineering</span>
          </p>
          <p className={skillStyles.eduBar}>
            <span>
              <span className={skillStyles.fill}></span>
            </span>
            <span>
              75<span className={skillStyles.percent}>%</span>
            </span>
          </p>
        </section>
        <section className={skillStyles.alx2}>
          <div className={skillStyles.icon}>
            <dotlottie-player
              autoplay
              loop
              mode="normal"
              src="https://raw.githubusercontent.com/asdacosta/portfolio/main/src/assets/cert.lottie"
              style={{ width: "100%", height: "100%" }}
            ></dotlottie-player>
          </div>
          <p className={skillStyles.context}>
            <span>
              <a href="https://www.alxafrica.com/" target="_blank">
                ALX
              </a>
            </span>
            <span>⚫</span>
            <span>AI Essentials</span>
          </p>
          <p className={skillStyles.eduBar}>
            <span>
              <span className={skillStyles.fill}></span>
            </span>
            <span>
              70<span className={skillStyles.percent}>%</span>
            </span>
          </p>
        </section>
        <section className={skillStyles.odin2}>
          <div className={skillStyles.icon}>
            <dotlottie-player
              autoplay
              loop
              mode="normal"
              src="https://raw.githubusercontent.com/asdacosta/portfolio/main/src/assets/cert.lottie"
              style={{ width: "100%", height: "100%" }}
            ></dotlottie-player>
          </div>
          <p className={skillStyles.context}>
            <span>
              <a href="https://www.theodinproject.com/" target="_blank">
                The Odin Project
              </a>
            </span>
            <span>⚫</span>
            <span>Back-end Dev</span>
          </p>
          <p className={skillStyles.eduBar}>
            <span>
              <span className={skillStyles.fill}></span>
            </span>
            <span>
              15<span className={skillStyles.percent}>%</span>
            </span>
          </p>
        </section>
      </section>
    </section>
  );
}

export { Education };
