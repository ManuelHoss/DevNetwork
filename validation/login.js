const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  // Replace undefined or null by empty strings
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Check email
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid!";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required!";
  }

  // Chack passwords
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required!";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
