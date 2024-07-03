import Typing from "react-typing-effect";
import connectStyles from "./Connect.module.css";

function Label({
  nonEmptyField,
  focusedField,
  focusedOption,
  inputLabel,
  typingText,
  required,
  id,
  contentError,
  check,
}) {
  return (
    <label htmlFor={id}>
      {inputLabel}{" "}
      {!check ? (
        nonEmptyField && focusedField ? (
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
        )
      ) : (
        <svg
          className={connectStyles.checkIcon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
      )}
    </label>
  );
}

export { Label };
