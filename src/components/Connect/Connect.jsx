import { useEffect, useState } from "react";
import connectStyles from "./Connect.module.css";
import "@dotlottie/player-component";
import { Label } from "./Label";

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

  const nameFeedbacks = {
    onInput: [
      "You may, but using full name isn't necessary.",
      "Name is lengthy.",
      "Numbers not allowed.",
      "Special characters not allowed.",
    ],
    onBlur: [
      "Name must be at least 2 characters.",
      "Use a valid name or none.",
    ],
  };
  const countryFeedback = { onBlur: "Select a valid country." };
  const motiveFeedback = {
    onBlur: "Select a motive or custom one with 'Other'",
  };
  const noteFeedback = {
    onBlur: ["Note must be at least 10 characters.", "Note can't be empty."],
  };
  const submitFeedback = ["Complete the form.", "Send"];

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
    // Set to default if an onInput removes all value
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
    // Trigger nonEmpty field on focus
    if (event.currentTarget.value !== "") {
      setNonEmptyFields((prev) => ({ ...prev, [inputType]: true }));
    }

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
            <Label
              nonEmptyField={nonEmptyFields.name}
              focusedField={focusedFields.name}
              inputLabel="Name"
              typingText={feedbacks.name.value}
              required={false}
              id="name"
            />
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
            <Label
              nonEmptyField={nonEmptyFields.country}
              focusedField={focusedFields.country}
              inputLabel="Country"
              typingText={feedbacks.country.value}
              required={true}
              id="country"
            />
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
            <Label
              nonEmptyField={nonEmptyFields.motive}
              focusedField={focusedFields.motive}
              inputLabel="Motive"
              typingText={feedbacks.motive.value}
              required={true}
              id="motive"
            />
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
            <Label
              nonEmptyField={nonEmptyFields.mail}
              focusedField={focusedFields.mail}
              inputLabel="Email"
              typingText={feedbacks.mail.value}
              required={true}
              id="mail"
            />
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
            <Label
              nonEmptyField={nonEmptyFields.note}
              focusedField={focusedFields.note}
              inputLabel="Note"
              typingText={feedbacks.note.value}
              required={true}
              id="note"
            />
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
