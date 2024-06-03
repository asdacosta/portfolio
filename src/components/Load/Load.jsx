import "@dotlottie/player-component";
import loadStyles from "./Load.module.css";

function Load({ displayValue }) {
  return (
    <section style={{ display: displayValue }} className={loadStyles.load}>
      <dotlottie-player
        className={loadStyles.lottie}
        autoplay
        loop
        mode="normal"
        src="https://raw.githubusercontent.com/asdacosta/portfolio/main/src/assets/Animation%20-%201717421594190.lottie"
        style={{ width: "400px", height: "400px" }}
      ></dotlottie-player>
    </section>
  );
}

export { Load };
