require("dotenv").config();

const validateRegisterInput = require("../validation/register.js");

const jwt = require("jsonwebtoken");
const moment = require("moment");

const User = require("../models/User.js");
const nodemailer = require("nodemailer");
const client = require("twilio")(process.env.accountSid, process.env.authToken);
const validatePhoneNumber = require("../validation/validatePhone.js");

exports.verifyPhone = async (req, res) => {
  const { countryCode, phoneNumber } = req.body;

  const fullPhoneNumber = countryCode + phoneNumber;
  const { errors, isValid } = validatePhoneNumber(req.body);
  console.log(errors);
  if (!isValid) {
    return res.status(400).json(errors); // Return validation errors
  }

  try {
    response = { ok: true };
    // const response = await client.verify.v2
    //   .services(process.env.serviceId)
    //   .verifications.create({ to: fullPhoneNumber, channel: "sms" });

    res.status(200).json({ response });
  } catch (error) {
    errors.phone = "Failed to send Otp to current Phone number ";
    errors.error = error;
    res.status(500).json(errors);
  }
};
exports.verifyOTP = async (req, res) => {
  const { phoneNumber, enteredOtp } = req.body;
  console.log(req.body);
  let errors = {};
  if (!enteredOtp) {
    errors.Otp = "OTP is required";
    return res.status(400).json(errors);
  }
  try {
    console.log("Verifying OTP...");
    // const verifiedResponse = await client.verify.v2
    //   .services(process.env.serviceId)
    //   .verificationChecks.create({
    //     to: fullPhoneNumber,
    //     code: enteredOtp,
    //   });
    // console.log(verifiedResponse);
    if (true) {
      const user = await User.findOne({ phone: phoneNumber });
      if (user) {
        const payload = { userId: user.id };
        const authToken = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1m",
        });
        console.log("User found");
        res.status(201).json({
          isUserExist: true,
          token: "Bearer " + authToken,
        });
      } else {
        console.log("User not found");
        res.status(200).json({ isUserExist: false });
      }
    }
  } catch (error) {
    console.error("Error during OTP verification:", error);
    errors.Otp = "The entered Otp is not correct";
    return res.status(400).json(errors);
  }
};

exports.completeRegistration = async (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { phoneNumber, firstName, lastName, birthday, email, optOutMarketing } =
    req.body;
  const parsedBirthday = moment(birthday, "YYYY-MM-DD").toDate();

  console.log(req.body);
  console.log(parsedBirthday);
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      errors.email = "email already exists.";
      return res.status(400).json(errors);
    }
    const newUser = new User({
      phone: phoneNumber,
      firstName: firstName,
      lastName: lastName,
      isOptOutMarketing: optOutMarketing,
      birthday: parsedBirthday,
      email,
    });
    console.log(newUser);

    const payload = { userId: newUser._id };
    console.log(payload);
    const authToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });
    console.log(authToken);
    const savedUser = await newUser.save();
    return res.status(201).json({
      message: "User registered successfully",
      token: "Bearer " + authToken,
    });
  } catch (err) {
    errors.message = err;
    return res.status(400).json(errors);
  }
};

exports.sendEmailConfirmation = async (req, res) => {
  const { email } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Email Confirmation",
      text: "Please confirm your email by clicking the following link.",
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent" });
  } catch (err) {
    res.status(500).json({ message: "Failed to send email" });
  }
};
