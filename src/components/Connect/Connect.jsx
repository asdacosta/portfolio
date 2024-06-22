import { useState } from "react";
import connectStyles from "./Connect.module.css";
import "@dotlottie/player-component";

function Connect() {
  const [focusedFields, setFocusedFields] = useState({
    name: false,
    motive: false,
    mail: false,
    note: false,
  });

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
              Name{" "}
              <span
                className={`${connectStyles.optionalField} ${
                  focusedFields.name ? connectStyles.animateFieldOption : ""
                }`}
              >
                Optional
              </span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onFocus={() => {
                setFocusedFields((prev) => ({
                  name: true,
                  motive: false,
                  mail: false,
                  note: false,
                }));
              }}
              onBlur={() => {
                setFocusedFields((prev) => ({ ...prev, name: false }));
              }}
            />
          </div>
          <div className={connectStyles.motiveField}>
            <label htmlFor="motive">
              Motive{" "}
              <span
                className={`${connectStyles.requiredField} ${
                  focusedFields.motive ? connectStyles.animateFieldOption : ""
                }`}
              >
                Required
              </span>
            </label>
            <input
              type="text"
              name="motive"
              id="motive"
              required
              onFocus={() => {
                setFocusedFields((prev) => ({
                  name: false,
                  motive: true,
                  mail: false,
                  note: false,
                }));
              }}
              onBlur={() => {
                setFocusedFields((prev) => ({ ...prev, motive: false }));
              }}
            />
          </div>
          <div className={connectStyles.emailField}>
            <label htmlFor="email">
              Email{" "}
              <span
                className={`${connectStyles.requiredField} ${
                  focusedFields.mail ? connectStyles.animateFieldOption : ""
                }`}
              >
                Required
              </span>
            </label>
            <input
              type="text"
              name="email"
              id="email"
              required
              onFocus={() => {
                setFocusedFields((prev) => ({
                  name: false,
                  motive: false,
                  mail: true,
                  note: false,
                }));
              }}
              onBlur={() => {
                setFocusedFields((prev) => ({ ...prev, mail: false }));
              }}
            />
          </div>
          <div className={connectStyles.noteField}>
            <label htmlFor="note">
              Note{" "}
              <span
                className={`${connectStyles.requiredField} ${
                  focusedFields.note ? connectStyles.animateFieldOption : ""
                }`}
              >
                Required
              </span>
            </label>
            <textarea
              name="note"
              id="note"
              cols="20"
              rows="10"
              onFocus={() => {
                setFocusedFields((prev) => ({
                  name: false,
                  motive: false,
                  mail: false,
                  note: true,
                }));
              }}
              onBlur={() => {
                setFocusedFields((prev) => ({ ...prev, note: false }));
              }}
            ></textarea>
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
