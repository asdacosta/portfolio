import connectStyles from "./Connect.module.css";
import "@dotlottie/player-component";

function Connect() {
  return (
    <section className={connectStyles.connect}>
      <section className={connectStyles.fieldSection}>
        <div className={connectStyles.mailLottie}>
          <dotlottie-player
            autoplay
            loop
            mode="normal"
            src="https://raw.githubusercontent.com/asdacosta/portfolio/main/src/assets/mail.lottie"
            style={{ width: "90px", height: "90px" }}
          ></dotlottie-player>
          <h2>Reach Out</h2>
        </div>

        <section className={connectStyles.allFields}>
          <div className={connectStyles.nameField}>
            <label htmlFor="name">
              Name <span className={connectStyles.optionalField}>Optional</span>
            </label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className={connectStyles.motiveField}>
            <label htmlFor="motive">
              Motive{" "}
              <span className={connectStyles.requiredField}>Required</span>
            </label>
            <input type="text" name="motive" id="motive" required />
          </div>
          <div className={connectStyles.emailField}>
            <label htmlFor="email">
              Email{" "}
              <span className={connectStyles.requiredField}>Required</span>
            </label>
            <input type="text" name="email" id="email" required />
          </div>
          <div className={connectStyles.noteField}>
            <label htmlFor="note">
              Note <span className={connectStyles.requiredField}>Required</span>
            </label>
            <textarea name="note" id="note" cols="20" rows="10"></textarea>
          </div>
          <div>
            <button>Send</button>
          </div>
        </section>
      </section>
    </section>
  );
}

export { Connect };
