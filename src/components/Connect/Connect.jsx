import { useEffect, useState } from "react";
import connectStyles from "./Connect.module.css";
import "@dotlottie/player-component";
import { Label } from "./Label";
import { allFeedbacks } from "./feedbacks";
import { IntType } from "three";

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
  const [contentErrors, setContentErrors] = useState({
    name: { isError: false, onInput: null, onBlur: null },
    country: { isError: false, onInput: null, onBlur: null },
    motive: { isError: false, onInput: null, onBlur: null },
    mail: { isError: false, onInput: null, onBlur: null },
    note: { isError: false, onInput: null, onBlur: null },
  });

  useEffect(() => {
    // Set feedback content
    for (const [key, value] of Object.entries(nonEmptyFields)) {
      if (value === true && !contentErrors[key].isError) {
        setFeedbacks((prev) => ({
          ...prev,
          [key]: { ellipsis: true, value: "..." },
        }));
      } else if (value === true && contentErrors[key].isError) {
        setFeedbacks((prev) => ({
          ...prev,
          [key]: {
            ellipsis: false,
            value:
              allFeedbacks.nameFeedbacks.onInput[contentErrors.name.onInput],
          },
        }));
      }
    }
  }, [nonEmptyFields]);

  const handleInput = (event) => {
    const inputType = event.currentTarget.id;
    const inputValue = event.currentTarget.value;
    // Set to default if an onInput removes all value
    if (inputValue === "") {
      setNonEmptyFields((prev) => ({ ...prev, [inputType]: false }));
      return;
    }

    // Validations
    // onInput validations
    if (inputType === "name" && inputValue.length > 0) {
      const nameNumRegex = /\d/;
      const nameNoSpecialCharRegex = /^[a-zA-Z'-]+$/;
      if (inputValue.length > 40) {
        setContentErrors((prev) => ({
          ...prev,
          [inputType]: {
            ...prev[IntType],
            isError: true,
            onInput: 1,
            onBlur: null,
          },
        }));
      } else if (nameNumRegex.test(inputValue)) {
        setContentErrors((prev) => ({
          ...prev,
          [inputType]: {
            ...prev[IntType],
            isError: true,
            onInput: 2,
            onBlur: null,
          },
        }));
      } else if (!nameNoSpecialCharRegex.test(inputValue)) {
        setContentErrors((prev) => ({
          ...prev,
          [inputType]: {
            ...prev[IntType],
            isError: true,
            onInput: 3,
            onBlur: null,
          },
        }));
      } else if (inputValue.length > 15 && inputValue.length <= 25) {
        setContentErrors((prev) => ({
          ...prev,
          [inputType]: {
            ...prev[IntType],
            isError: true,
            onInput: 0,
            onBlur: null,
          },
        }));
      } else {
        setContentErrors((prev) => ({
          ...prev,
          [inputType]: {
            ...prev[IntType],
            isError: false,
            onInput: null,
            onBlur: null,
          },
        }));
      }
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
              contentError={contentErrors.name.isError}
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
              contentError={contentErrors.country.isError}
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
              contentError={contentErrors.motive.isError}
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
              contentError={contentErrors.mail.isError}
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
              contentError={contentErrors.note.isError}
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
