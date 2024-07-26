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
  if (!validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
