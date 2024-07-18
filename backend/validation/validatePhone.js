const isEmpty = require("./is-empty.js");
const { parsePhoneNumberFromString } = require("libphonenumber-js");

module.exports = function validatePhoneNumber(data) {
  let errors = {};
  const phoneNumber = parsePhoneNumberFromString(data, "ZZ");
  if (!phoneNumber || !phoneNumber.isValid()) {
    errors.phone = "Invalid phone number";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
