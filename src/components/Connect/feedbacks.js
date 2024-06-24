const nameFeedbacks = {
  onInput: [
    "No need to use full name.",
    "Name is lengthy.",
    "Numbers not allowed.",
    "Special chars not allowed.",
  ],
  onBlur: ["Name must be at least 2 chars.", "Use a valid name or none."],
};
const countryFeedback = { onBlur: ["Select a valid country."] };
const motiveFeedback = {
  onBlur: ["Select a motive or custom one."],
};
const noteFeedback = {
  onBlur: ["Note must be at least 10 chars.", "Note can't be empty."],
};
const mailFeedback = {
  onInput: ["Email is lengthy, use a valid one."],
  onBlur: ["Use a valid email."],
};
const submitFeedback = ["Complete the form.", "Send"];

const allFeedbacks = {
  nameFeedbacks,
  countryFeedback,
  motiveFeedback,
  noteFeedback,
  submitFeedback,
};

export { allFeedbacks };
