const validator = require("validator");
const isEmpty = require("./is-empty.js");
module.exports = function validateRegisterInput(data) {
  let errors = {};
  console.log(data.birthday);
  if (validator.isEmpty(data.birthday)) {
    errors.birthday = "Birthday is required";
  } else {
    const birthDate = new Date(data.birthday);
    let age = new Date().getFullYear() - birthDate.getFullYear();
    const monthDifference = new Date().getMonth() - birthDate.getMonth();
    const dayDifference = new Date().getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }

    if (age < 18) {
      errors.birthday =
        "You must be 18 or older to use Airbnb. Other people won’t see your birthday.";
    }
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "Invalid Email";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  } else if (!validator.isEmail(data.email)) {
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
