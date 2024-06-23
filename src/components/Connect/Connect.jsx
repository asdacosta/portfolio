import { useEffect, useState } from "react";
import connectStyles from "./Connect.module.css";
import "@dotlottie/player-component";
import Typing from "react-typing-effect";

function Connect() {
  const [focusedFields, setFocusedFields] = useState({
    name: false,
    country: false,
    motive: false,
    mail: false,
    note: false,
  });
  const [nonEmptyFields, setNonEmptyFields] = useState({
    name: false,
    country: false,
    motive: false,
    mail: false,
    note: false,
  });
  const [feedbacks, setFeedbacks] = useState({
    name: { ellipsis: false, value: "" },
    country: { ellipsis: false, value: "" },
    motive: { ellipsis: false, value: "" },
    mail: { ellipsis: false, value: "" },
    note: { ellipsis: false, value: "" },
  });

  useEffect(() => {
    // Set feedback content
    for (const [key, value] of Object.entries(nonEmptyFields)) {
      if (value === true) {
        setFeedbacks((prev) => ({
          ...prev,
          [key]: { ellipsis: true, value: "..." },
        }));
      }
    }
  }, [nonEmptyFields]);

  const handleInput = (event) => {
    const inputType = event.currentTarget.id;
    if (event.currentTarget.value === "") {
      setNonEmptyFields((prev) => ({ ...prev, [inputType]: false }));
      return;
    }
    setNonEmptyFields((prev) => ({
      name: false,
      country: false,
      motive: false,
      mail: false,
      note: false,
      [inputType]: true,
    }));
  };

  const handleFocus = (event) => {
    const inputType = event.currentTarget.id;
    setFocusedFields((prev) => ({
      name: false,
      country: false,
      motive: false,
      mail: false,
      note: false,
      [inputType]: true,
    }));
  };

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
              {nonEmptyFields.name ? (
                <span className={connectStyles.feedback}>
                  <Typing
                    speed={200}
                    text={feedbacks.name.value}
                    typingDelay={0}
                    eraseDelay={200}
                    eraseSpeed={150}
                    cursor=" "
                  />
                </span>
              ) : (
                <span
                  className={`${connectStyles.optionalField} ${
                    focusedFields.name ? connectStyles.animateFieldOption : ""
                  }`}
                >
                  Optional
                </span>
              )}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name..."
              onFocus={handleFocus}
              onBlur={() => {
                setFocusedFields((prev) => ({ ...prev, name: false }));
              }}
              onInput={handleInput}
            />
          </div>
          <div
            className={`${connectStyles.countryField} ${connectStyles.field}`}
          >
            <label htmlFor="country">
              Country{" "}
              {nonEmptyFields.country ? (
                <span className={connectStyles.feedback}>
                  {feedbacks.country.value}
                </span>
              ) : (
                <span
                  className={`${connectStyles.requiredField} ${
                    focusedFields.country
                      ? connectStyles.animateFieldOption
                      : ""
                  }`}
                >
                  Required
                </span>
              )}
            </label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder="Enter country..."
              required
              onFocus={handleFocus}
              onBlur={() => {
                setFocusedFields((prev) => ({ ...prev, country: false }));
              }}
              onInput={handleInput}
            />
          </div>
          <div
            className={`${connectStyles.motiveField} ${connectStyles.field}`}
          >
            <label htmlFor="motive">
              Motive{" "}
              {nonEmptyFields.motive ? (
                <span className={connectStyles.feedback}>
                  {feedbacks.motive.value}
                </span>
              ) : (
                <span
                  className={`${connectStyles.requiredField} ${
                    focusedFields.motive ? connectStyles.animateFieldOption : ""
                  }`}
                >
                  Required
                </span>
              )}
            </label>
            <input
              type="text"
              name="motive"
              id="motive"
              placeholder="Enter subject..."
              required
              onFocus={handleFocus}
              onBlur={() => {
                setFocusedFields((prev) => ({ ...prev, motive: false }));
              }}
              onInput={handleInput}
            />
          </div>
          <div className={`${connectStyles.emailField} ${connectStyles.field}`}>
            <label htmlFor="mail">
              Email{" "}
              {nonEmptyFields.mail ? (
                <span className={connectStyles.feedback}>
                  {feedbacks.mail.value}
                </span>
              ) : (
                <span
                  className={`${connectStyles.requiredField} ${
                    focusedFields.mail ? connectStyles.animateFieldOption : ""
                  }`}
                >
                  Required
                </span>
              )}
            </label>
            <input
              type="text"
              name="mail"
              id="mail"
              placeholder="Enter email..."
              required
              onFocus={handleFocus}
              onBlur={() => {
                setFocusedFields((prev) => ({ ...prev, mail: false }));
              }}
              onInput={handleInput}
            />
          </div>
          <div className={`${connectStyles.noteField} ${connectStyles.field}`}>
            <label htmlFor="note">
              Note{" "}
              {nonEmptyFields.note ? (
                <span className={connectStyles.feedback}>
                  {feedbacks.note.value}
                </span>
              ) : (
                <span
                  className={`${connectStyles.requiredField} ${
                    focusedFields.note ? connectStyles.animateFieldOption : ""
                  }`}
                >
                  Required
                </span>
              )}
            </label>
            <textarea
              name="note"
              id="note"
              cols="20"
              rows="10"
              placeholder="Whatever..."
              onFocus={handleFocus}
              onBlur={() => {
                setFocusedFields((prev) => ({ ...prev, note: false }));
              }}
              onInput={handleInput}
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
