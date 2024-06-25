import Typing from "react-typing-effect";
import connectStyles from "./Connect.module.css";
// import Typed from "typed.js";
import { useEffect, useRef } from "react";

function Label({
  nonEmptyField,
  focusedField,
  focusedOption,
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
              speed={150}
              text={typingText}
              typingDelay={0}
              eraseDelay={200}
              eraseSpeed={60}
              cursor=" "
            />
          ) : (
            <Typing
              speed={50}
              text={typingText}
              typingDelay={0}
              eraseDelay={2500}
              eraseSpeed={25}
              cursor=" "
            />
          )}
        </span>
      ) : required ? (
        <span
          className={`${connectStyles.requiredField} ${
            focusedOption ? connectStyles.animateFieldOption : ""
          }`}
        >
          {" "}
          Required
        </span>
      ) : (
        <span
          className={`${connectStyles.optionalField} ${
            focusedOption ? connectStyles.animateFieldOption : ""
          }`}
        >
          Optional
        </span>
      )}
    </label>
  );
}

export { Label };
