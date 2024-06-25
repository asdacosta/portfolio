const name = {
  onInput: [
    "No need to use full name.",
    "Name is lengthy.",
    "Numbers not allowed.",
    "Special chars not allowed.",
  ],
  onBlur: ["Name must be at least 2 chars.", "Use a valid name or none."],
};
const country = { onBlur: ["Select a valid country."] };
const motive = {
  onInput: ["Kindly keep the subject short."],
};
const note = {
  onBlur: ["Note must be at least 10 chars."],
};
const mail = {
  onInput: ["Email is lengthy, use a valid one."],
  onBlur: ["Use a valid email."],
};
const submitFeedbacks = ["Complete the form.", "Send"];

const allFeedbacks = {
  name,
  country,
  motive,
  note,
  mail,
  submitFeedbacks,
};

export { allFeedbacks };
