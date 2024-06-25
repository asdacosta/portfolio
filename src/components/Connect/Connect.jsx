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
  const [focusedFieldReturn, setFocusedFieldReturn] = useState("onInput");

  useEffect(() => {
    // Set feedback content
    let newFeedback = {};
    for (const [key, value] of Object.entries(nonEmptyFields)) {
      if (value === true && !contentErrors[key].isError) {
        newFeedback[key] = { ellipsis: true, value: "..." };
      } else if (value === true && contentErrors[key].isError) {
        if (contentErrors[key].onInput !== null) {
          console.log("Truly input");
          newFeedback[key] = {
            ellipsis: false,
            value: allFeedbacks[key].onInput[contentErrors[key].onInput],
          };
        }
        if (contentErrors[key].onBlur !== null) {
          console.log("Truly blurred");
          newFeedback[key] = {
            ellipsis: false,
            value: allFeedbacks[key].onBlur[contentErrors[key].onBlur],
          };
        }
      }
    }

    setFeedbacks((prev) => ({ ...prev, ...newFeedback }));
  }, [nonEmptyFields, contentErrors, allFeedbacks]);

  const handleInput = (event) => {
    const inputType = event.currentTarget.id;
    const inputValue = event.currentTarget.value;
    // Set to default if an onInput removes all value
    if (inputValue === "") {
      setContentErrors((prev) => ({
        ...prev,
        [inputType]: {
          isError: false,
          onInput: null,
          onBlur: null,
        },
      }));
      setNonEmptyFields((prev) => ({ ...prev, [inputType]: false }));
      return;
    }

    setNonEmptyFields((prev) => ({
      ...prev,
      [inputType]: true,
    }));

    // Name onInput validations
    const nameNumRegex = /\d/;
    const nameNoSpecialCharRegex = /^[a-zA-Z'-]+$/;
    if (inputType === "name" && nonEmptyFields.name) {
      let errorType = null;
      if (inputValue.length > 40) {
        errorType = 1;
      } else if (nameNumRegex.test(inputValue)) {
        errorType = 2;
      } else if (!nameNoSpecialCharRegex.test(inputValue)) {
        errorType = 3;
      } else if (inputValue.length > 15 && inputValue.length <= 25) {
        errorType = 0;
      }
      if (errorType !== null) {
        setContentErrors((prev) => ({
          ...prev,
          [inputType]: {
            isError: true,
            onInput: errorType,
            onBlur: null,
          },
        }));
      } else {
        setContentErrors((prev) => ({
          ...prev,
          [inputType]: {
            isError: false,
            onInput: null,
            onBlur: null,
          },
        }));
      }
    }

    // Mail onInput validations
    if (inputType === "mail" && nonEmptyFields.mail) {
      if (inputValue.length > 50) {
        setContentErrors((prev) => ({
          ...prev,
          [inputType]: {
            isError: true,
            onInput: 0,
            onBlur: null,
          },
        }));
      }
    }
  };

  const handleFocus = (event) => {
    const inputType = event.currentTarget.id;
    // Trigger nonEmpty field on focus
    if (event.currentTarget.value !== "") {
      setNonEmptyFields((prev) => ({ ...prev, [inputType]: true }));
    }

    setFocusedFields((prev) => ({
      ...prev,
      [inputType]: true,
    }));

    // Continue with input validation from onBlur validations
    handleInput(event);
  };

  const handleBlur = (event) => {
    const inputType = event.currentTarget.id;
    const inputValue = event.currentTarget.value;
    setFocusedFields((prev) => ({ ...prev, [inputType]: false }));

    // Name onBlur validations
    if (inputType === "name" && nonEmptyFields.name) {
      let errorType = null;
      if (inputValue.length === 1) {
        errorType = 0;
      } else if (contentErrors.name.isError) {
        errorType = 1;
      } else {
        errorType = null;
      }
      setContentErrors((prev) => ({
        ...prev,
        [inputType]: {
          isError: true,
          onInput: null,
          onBlur: errorType,
        },
      }));
    }

    // For Label focusedField props
    const focusedReturn = handleFocusedField(event);
    setFocusedFieldReturn((prev) => focusedReturn);
  };

  const handleFocusedField = (event) => {
    const inputType = event.currentTarget.id;

    // console.log(contentErrors[inputType].isError);
    if (contentErrors[inputType].isError) {
      if (contentErrors[inputType].onInput !== null) {
        // console.log("onInput");
        return "onInput";
      } else if (contentErrors[inputType].onBlur !== null) {
        // console.log("onBlur");
        return "onBlur";
      }
    } else {
      //   console.log("Second onBlur");
      return "onInput";
    }
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
              focusedOption={focusedFields.name}
              focusedField={focusedFieldReturn}
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
              onBlur={handleBlur}
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
              onBlur={handleBlur}
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
              onBlur={handleBlur}
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
              onBlur={handleBlur}
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
              onBlur={handleBlur}
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
