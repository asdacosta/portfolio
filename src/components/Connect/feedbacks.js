const nameFeedbacks = {
  onInput: [
    "You may, but using full name isn't necessary.",
    "Name is lengthy.",
    "Numbers not allowed.",
    "Special characters not allowed.",
  ],
  onBlur: ["Name must be at least 2 characters.", "Use a valid name or none."],
};
const countryFeedback = { onBlur: ["Select a valid country."] };
const motiveFeedback = {
  onBlur: ["Select a motive or custom one with 'Other'"],
};
const noteFeedback = {
  onBlur: ["Note must be at least 10 characters.", "Note can't be empty."],
};
const mailFeedback = {
  onInput: ["Email is lengthy. Use a valid email.", "Use a valid email."],
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
