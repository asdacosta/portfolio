import { useContext, useEffect, useRef, useState } from "react";
import connectStyles from "./Connect.module.css";
import "@dotlottie/player-component";
import { Label } from "./Label";
import { allFeedbacks } from "./feedbacks";
import { FetchCountries } from "./FetchCountries";
import { motion, useAnimation, useInView } from "framer-motion";
import { Element, animateScroll as scroll } from "react-scroll";
import { MenuContext } from "../../App";
import Typed from "typed.js";
import { placeholders } from "./placeholders";

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
  const [checks, setChecks] = useState({
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
  const [send, setSend] = useState({ feedback: 0, status: false });
  const scrollUpRef = useRef(null);
  const fieldsRef = useRef(null);

  const typingName = useRef(null);
  const typingMotive = useRef(null);
  const typingMail = useRef(null);
  const typingNote = useRef(null);

  useEffect(() => {
    const typedName = new Typed(typingName.current, {
      strings: placeholders.names,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      attr: "placeholder",
      loop: true,
    });

    return () => {
      typedName.destroy();
    };
  }, []);

  useEffect(() => {
    const typedMotive = new Typed(typingMotive.current, {
      strings: placeholders.motives,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      attr: "placeholder",
      loop: true,
      smartBackspace: true,
    });

    return () => {
      typedMotive.destroy();
    };
  }, []);

  const { page, setPage } = useContext(MenuContext);
  const connectRef = useRef(null);
  const connectInView = useInView(connectRef);

  useEffect(() => {
    if (connectInView) {
      setPage("connect");
    }
  }, [connectInView]);

  const scrollUpControls = useAnimation();
  const fieldControls = useAnimation();
  const scrollUpInView = useInView(scrollUpRef);
  const fieldInView = useInView(fieldsRef);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 1000, smooth: true });
  };

  useEffect(() => {
    if (scrollUpInView) {
      scrollUpControls.start("visible");
    }
    if (fieldInView) {
      fieldControls.start("visible");
    }
  }, [scrollUpControls, scrollUpInView, fieldControls, fieldInView]);

  const scrollUpVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: 100 },
  };

  const fieldVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: -150 },
  };

  useEffect(() => {
    // Send logic
    const allChecked = Object.values(checks).every((value) => value === true);
    if (allChecked) {
      setSend((prev) => ({ ...prev, feedback: 1, status: true }));
    } else if (!allChecked) {
      setSend((prev) => ({ ...prev, feedback: 0, status: false }));
    }
  }, [checks]);

  useEffect(() => {
    // Set feedback content
    let newFeedback = {};
    for (const [key, value] of Object.entries(nonEmptyFields)) {
      if (value === true && !contentErrors[key].isError) {
        newFeedback[key] = { ellipsis: true, value: "..." };
      } else if (value === true && contentErrors[key].isError) {
        if (contentErrors[key].onInput !== null) {
          newFeedback[key] = {
            ellipsis: false,
            value: allFeedbacks[key].onInput[contentErrors[key].onInput],
          };
        }
        if (contentErrors[key].onBlur !== null) {
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
    const nameNoSpecialCharRegex = /^[a-zA-Z'-\s]+$/;
    if (inputType === "name" && inputValue.length > 0) {
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
    if (inputType === "mail" && inputValue.length > 0) {
      const mailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      if (inputValue.length > 50) {
        setContentErrors((prev) => ({
          ...prev,
          [inputType]: {
            isError: true,
            onInput: 0,
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

    // Motive onInput validation
    if (inputType === "motive" && inputValue.length > 0) {
      if (inputValue.length > 30) {
        setContentErrors((prev) => ({
          ...prev,
          [inputType]: {
            isError: true,
            onInput: 0,
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

    // Note onInput validation
    if (inputType === "note" && inputValue.length > 0) {
      // Set back to default since it has no onInput validation
      setContentErrors((prev) => ({
        ...prev,
        [inputType]: {
          isError: false,
          onInput: null,
          onBlur: null,
        },
      }));
    }
  };

  const handleFocus = (event) => {
    let inputType = event.currentTarget.id;
    const inputValue = event.currentTarget.value;
    // Capture Country odd id
    if (inputType === "react-select-3-input") {
      inputType = "country";
    }
    // Trigger nonEmpty field on focus
    if (inputValue !== "") {
      setNonEmptyFields((prev) => ({ ...prev, [inputType]: true }));
    }

    setFocusedFields((prev) => ({
      ...prev,
      [inputType]: true,
    }));

    // Continue with input validation from onBlur validations
    handleInput(event);

    // Stop check
    for (const [key, data] of Object.entries(contentErrors)) {
      if (key === inputType && inputValue.length > 0) {
        setChecks((prev) => ({ ...prev, [key]: false }));
      }
    }
  };

  const handleBlur = (event) => {
    let inputType = event.currentTarget.id;
    // Capture Country odd id
    if (inputType === "react-select-3-input") {
      inputType = "country";
    }

    const inputValue = event.currentTarget.value;
    setFocusedFields((prev) => ({ ...prev, [inputType]: false }));

    // Name onBlur validations
    if (inputType === "name" && inputValue.length > 0) {
      let errorType = null;
      let errorValue = false;
      if (inputValue.length === 1) {
        errorType = 0;
        errorValue = true;
      } else if (contentErrors.name.isError) {
        if (contentErrors.name.onInput === 0) {
          // Not a real error
          errorType = null;
        } else {
          errorType = 1;
          errorValue = true;
        }
      } else {
        errorType = null;
      }
      setContentErrors((prev) => ({
        ...prev,
        [inputType]: {
          isError: errorValue,
          onInput: null,
          onBlur: errorType,
        },
      }));
    }

    // Email onBlur validations
    const mailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (inputType === "mail" && inputValue.length > 0) {
      if (!mailRegex.test(inputValue)) {
        setContentErrors((prev) => ({
          ...prev,
          [inputType]: {
            isError: true,
            onInput: null,
            onBlur: 0,
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

    // Note onBlur validations
    if (inputType === "note" && inputValue.length > 0) {
      if (inputValue.length < 10) {
        setContentErrors((prev) => ({
          ...prev,
          [inputType]: {
            isError: true,
            onInput: null,
            onBlur: 0,
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

    // Motive onBlur validations
    if (inputType === "motive" && inputValue.length > 0) {
      if (inputValue.length === 1) {
        setContentErrors((prev) => ({
          ...prev,
          [inputType]: {
            isError: true,
            onInput: null,
            onBlur: 0,
          },
        }));
      }
    }

    // For Label focusedField props
    const focusedReturn = handleFocusedField(event);
    setFocusedFieldReturn((prev) => focusedReturn);

    // Run checks
    for (const [key, data] of Object.entries(contentErrors)) {
      let errorValue = data.isError;
      if (key === "name" && data.onInput === 0) {
        errorValue = false;
      }
      if (
        key === inputType &&
        !errorValue &&
        inputValue.length !== 1 &&
        inputValue.length > 0
      ) {
        // Set extra ifs for fields not setting isError correctly (data.isError captures input error and in these fields they have no onInput error related to onBlur error)
        // onBlur doesn't capture the state update in setContentErrors immediately. The fields that passed are ones that were set onInput which happened prior to onBlur
        if (key === "note" && inputValue.length < 10) {
          return;
        }
        if (key === "mail" && !mailRegex.test(inputValue)) {
          return;
        }
        if (inputType === "country") {
          // Already sets check onChange
          return;
        }
        setChecks((prev) => ({ ...prev, [key]: true }));
        return;
      }
    }
  };

  const handleFocusedField = (event) => {
    const inputType = event.currentTarget.id;

    if (contentErrors[inputType].isError) {
      if (contentErrors[inputType].onInput !== null) {
        return "onInput";
      } else if (contentErrors[inputType].onBlur !== null) {
        return "onBlur";
      }
    } else {
      return "onInput";
    }
  };

  const handleCountryOnChange = () => {
    setChecks((prev) => ({ ...prev, country: true }));
  };

  const animateScroll = () => {
    if (scrollUpRef.current) {
      scrollUpRef.current.play();
      scrollUpRef.current.setSpeed(1.2);
    }
  };

  const revertAnimation = () => {
    if (scrollUpRef.current) {
      scrollUpRef.current.stop();
    }
  };

  return (
    <section className={connectStyles.connect} ref={connectRef}>
      <Element name="Connect" className="targetScroll"></Element>
      <motion.section
        className={connectStyles.fieldSection}
        ref={fieldsRef}
        initial="hidden"
        animate={fieldControls}
        variants={fieldVariant}
      >
        <div className={connectStyles.mailLottie}>
          <dotlottie-player
            autoplay
            loop
            mode="normal"
            src="https://raw.githubusercontent.com/asdacosta/portfolio/main/src/assets/mail.lottie"
            style={{ width: "80px", height: "80px" }}
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
              check={checks.name}
            />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter name..."
              onFocus={handleFocus}
              onBlur={handleBlur}
              onInput={handleInput}
              ref={typingName}
            />
          </div>
          <div
            className={`${connectStyles.countryField} ${connectStyles.field}`}
          >
            <Label
              nonEmptyField={nonEmptyFields.country}
              focusedOption={focusedFields.country}
              focusedField={focusedFieldReturn}
              inputLabel="Country"
              typingText={feedbacks.country.value}
              required={true}
              id="country"
              contentError={contentErrors.country.isError}
              check={checks.country}
            />

            <FetchCountries
              name="country"
              id="country"
              required
              handleFocus={handleFocus}
              handleBlur={handleBlur}
              handleChange={handleCountryOnChange}
            />
          </div>
          <div
            className={`${connectStyles.motiveField} ${connectStyles.field}`}
          >
            <Label
              nonEmptyField={nonEmptyFields.motive}
              focusedOption={focusedFields.motive}
              focusedField={focusedFieldReturn}
              inputLabel="Motive"
              typingText={feedbacks.motive.value}
              required={true}
              id="motive"
              contentError={contentErrors.motive.isError}
              check={checks.motive}
            />
            <input
              list="allMotives"
              name="motive"
              id="motive"
              placeholder="Custom or select..."
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
              onInput={handleInput}
              ref={typingMotive}
            />
            <div className={connectStyles.chevronCover}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>
            <datalist id="allMotives">
              <option value="Hire short term" />
              <option value="Hire long term" />
              <option value="Consult" />
              <option value="Collaboration" />
              <option value="General Inquiry" />
              <option value="Bug Report" />
              <option value="Support $" />
              <option value=" ">Other</option>
            </datalist>
          </div>
          <div className={`${connectStyles.emailField} ${connectStyles.field}`}>
            <Label
              nonEmptyField={nonEmptyFields.mail}
              focusedOption={focusedFields.mail}
              focusedField={focusedFieldReturn}
              inputLabel="Email"
              typingText={feedbacks.mail.value}
              required={true}
              id="mail"
              contentError={contentErrors.mail.isError}
              check={checks.mail}
            />
            <input
              type="text"
              name="mail"
              id="mail"
              placeholder="ace@example.com"
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
              onInput={handleInput}
              ref={typingMail}
            />
          </div>
          <div className={`${connectStyles.noteField} ${connectStyles.field}`}>
            <Label
              nonEmptyField={nonEmptyFields.note}
              focusedOption={focusedFields.note}
              focusedField={focusedFieldReturn}
              inputLabel="Note"
              typingText={feedbacks.note.value}
              required={true}
              id="note"
              contentError={contentErrors.note.isError}
              check={checks.note}
            />
            <textarea
              name="note"
              id="note"
              cols="20"
              rows="10"
              placeholder="Hi Ace, ..."
              onFocus={handleFocus}
              onBlur={handleBlur}
              onInput={handleInput}
              ref={typingNote}
            ></textarea>
          </div>
          <div>
            <button
              className={`${connectStyles.submitButton} ${
                send.status ? connectStyles.send : ""
              }`}
            >
              {allFeedbacks.submitFeedbacks[send.feedback]}
            </button>
          </div>
        </section>
      </motion.section>
      <motion.section
        className={connectStyles.otherConnect}
        ref={scrollUpRef}
        initial="hidden"
        animate={scrollUpControls}
        variants={scrollUpVariant}
      >
        <div className={connectStyles.scrollUpLottie}>
          <dotlottie-player
            className={connectStyles.lottieIcon}
            // ref={scrollUpRef}
            onMouseEnter={animateScroll}
            onMouseLeave={revertAnimation}
            onClick={scrollToTop}
            loop
            delay="0"
            mode="normal"
            src="https://raw.githubusercontent.com/asdacosta/portfolio/main/src/assets/scrollUp.lottie"
            style={{ width: "75px", height: "75px" }}
          ></dotlottie-player>
        </div>
      </motion.section>
    </section>
  );
}

export { Connect };
