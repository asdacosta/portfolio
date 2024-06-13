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
              style={{ width: "100%", height: "140px" }}
            ></dotlottie-player>
          </div>
          <p className={skillStyles.context}>
            <span>The Odin Project</span>
            <span>⚫</span>
            <span>Front-end Development</span>
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
              style={{ width: "100%", height: "140px" }}
            ></dotlottie-player>
          </div>
          <p className={skillStyles.context}>
            <span>University</span>
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
              style={{ width: "100%", height: "140px" }}
            ></dotlottie-player>
          </div>
          <p className={skillStyles.context}>
            <span>ALX</span>
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
              style={{ width: "100%", height: "140px" }}
            ></dotlottie-player>
          </div>
          <p className={skillStyles.context}>
            <span>ALX</span>
            <span>⚫</span>
            <span>AI Essentials</span>
          </p>
          <p className={skillStyles.eduBar}>
            <span>
              <span className={skillStyles.fill}></span>
            </span>
            <span>
              40<span className={skillStyles.percent}>%</span>
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
              style={{ width: "100%", height: "140px" }}
            ></dotlottie-player>
          </div>
          <p className={skillStyles.context}>
            <span>The Odin Project</span>
            <span>⚫</span>
            <span>Back-end Development</span>
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
