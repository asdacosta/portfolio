import Typing from "react-typing-effect";
import connectStyles from "./Connect.module.css";
// import Typed from "typed.js";
import { useEffect, useRef } from "react";

function Label({
  nonEmptyField,
  focusedField,
  inputLabel,
  typingText,
  required,
  id,
  contentError,
}) {
  return (
    <label htmlFor={id}>
      {inputLabel}{" "}
      {nonEmptyField && focusedField ? (
        <span className={connectStyles.feedback}>
          {!contentError ? (
            <Typing
              speed={100}
              text={typingText}
              typingDelay={0}
              eraseDelay={200}
              eraseSpeed={50}
              cursor=" "
            />
          ) : (
            <Typing
              speed={50}
              text={typingText}
              typingDelay={0}
              eraseDelay={3000}
              eraseSpeed={25}
              cursor=" "
            />
          )}
        </span>
      ) : required ? (
        <span
          className={`${connectStyles.requiredField} ${
            focusedField ? connectStyles.animateFieldOption : ""
          }`}
        >
          {" "}
          Required
        </span>
      ) : (
        <span
          className={`${connectStyles.optionalField} ${
            focusedField ? connectStyles.animateFieldOption : ""
          }`}
        >
          Optional
        </span>
      )}
    </label>
  );
}

export { Label };
