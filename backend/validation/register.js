const validator = require("validator");
const isEmpty = require("./is-empty.js");
module.exports = function validateRegisterInput(data) {
  let errors = {};
  if (!validator.isEmail(data.email)) {
    errors.name = "Invalid Email";
  }
  return {
    errors,
    isValid: errors,
  };
};
