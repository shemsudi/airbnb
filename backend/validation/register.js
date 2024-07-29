const validator = require("validator");
const isEmpty = require("./is-empty.js");
module.exports = function validateRegisterInput(data) {
  let errors = {};
  if (!validator.isDate(data.birthday)) {
    errors.birthday = "Date is invalid";
  }
  if (!validator.isEmail(data.email)) {
    errors.email = "Invalid Email";
  }
  if (isEmpty(data.firstName)) {
    errors.firstName = "First Name is required";
  }
  if (isEmpty(data.lastName)) {
    errors.lastName = "Last Name is required";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
