import Typing from "react-typing-effect";
import connectStyles from "./Connect.module.css";

function Label({
  nonEmptyField,
  focusedField,
  inputLabel,
  typingText,
  required,
  id,
}) {
  return (
    <label htmlFor={id}>
      {inputLabel}{" "}
      {nonEmptyField && focusedField ? (
        <span className={connectStyles.feedback}>
          <Typing
            speed={200}
            text={typingText}
            typingDelay={0}
            eraseDelay={200}
            eraseSpeed={150}
            cursor=" "
          />
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
