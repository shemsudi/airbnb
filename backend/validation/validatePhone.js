const { isLength } = require("validator");
const isEmpty = require("./is-empty.js");
const { parsePhoneNumberFromString } = require("libphonenumber-js");

module.exports = function validatePhoneNumber(data) {
  const { countryCode, phoneNumber } = data;
  let errors = {};
  console.log(data);
  const fullPhoneNumber = parsePhoneNumberFromString(
    countryCode + phoneNumber,
    "ZZ"
  );
  console.log(phoneNumber);
  if (isEmpty(phoneNumber)) {
    errors.phoneNumber = "Phone number is required.";
  } else if (isLength(phoneNumber, { max: 5 })) {
    errors.phoneNumber =
      "Phone number is too short or contains invalid characters.";
  } else if (isLength(countryCode + phoneNumber, { min: 15 })) {
    errors.longPhoneNumber =
      "That phone number is either too short or too long. Make sure you've entered the right number and try again.";
  } else if (!fullPhoneNumber || !fullPhoneNumber.isValid()) {
    errors.invalidPhoneNumber =
      "We can't send a code to this phone number. Try different one.";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
