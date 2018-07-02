const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters!";
  }

  if (validator.isEmpty(data.name)) {
    errors.name = "Name field is required!";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
