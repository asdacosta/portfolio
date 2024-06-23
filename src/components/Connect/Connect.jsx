import { useState } from "react";
import connectStyles from "./Connect.module.css";
import "@dotlottie/player-component";

function Connect() {
  const [focusedFields, setFocusedFields] = useState({
    name: false,
    country: false,
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
          <h2>Get In Touch</h2>
        </div>

        <section className={connectStyles.allFields}>
          <div className={`${connectStyles.nameField} ${connectStyles.field}`}>
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
              placeholder="Enter your name..."
              onFocus={() => {
                setFocusedFields((prev) => ({
                  name: true,
                  country: false,
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
          <div
            className={`${connectStyles.countryField} ${connectStyles.field}`}
          >
            <label htmlFor="country">
              Country{" "}
              <span
                className={`${connectStyles.requiredField} ${
                  focusedFields.country ? connectStyles.animateFieldOption : ""
                }`}
              >
                Required
              </span>
            </label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder="Enter country..."
              required
              onFocus={() => {
                setFocusedFields((prev) => ({
                  name: false,
                  country: true,
                  motive: false,
                  mail: false,
                  note: false,
                }));
              }}
              onBlur={() => {
                setFocusedFields((prev) => ({ ...prev, country: false }));
              }}
            />
          </div>
          <div
            className={`${connectStyles.motiveField} ${connectStyles.field}`}
          >
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
              placeholder="Enter subject..."
              required
              onFocus={() => {
                setFocusedFields((prev) => ({
                  name: false,
                  country: false,
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
          <div className={`${connectStyles.emailField} ${connectStyles.field}`}>
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
              placeholder="Enter email..."
              required
              onFocus={() => {
                setFocusedFields((prev) => ({
                  name: false,
                  country: false,
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
          <div className={`${connectStyles.noteField} ${connectStyles.field}`}>
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
              placeholder="Whatever..."
              onFocus={() => {
                setFocusedFields((prev) => ({
                  name: false,
                  country: false,
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
