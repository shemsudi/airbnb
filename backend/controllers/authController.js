require("dotenv").config();

const validateRegisterInput = require("../validation/register.js");

const jwt = require("jsonwebtoken");
const moment = require("moment");

const User = require("../models/User");
const nodemailer = require("nodemailer");
const client = require("twilio")(process.env.accountSid, process.env.authToken);

exports.verifyPhone = async (req, res) => {
  const { countryCode, phoneNumber } = req.body;

  const fullPhoneNumber = countryCode + phoneNumber;

  try {
    const response = await client.verify.v2
      .services(process.env.serviceId)
      .verifications.create({ to: fullPhoneNumber, channel: "sms" });
    console.log("im here");

    res.json({ response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to send OTP" });
  }
};
exports.verifyOTP = async (req, res) => {
  const { phoneNumber, enteredOtp } = req.body;
  console.log(req.body);

  if (!enteredOtp) {
    return res.status(400).json({ message: "OTP is required" });
  }
  try {
    const verifiedResponse = await client.verify.v2
      .services(process.env.serviceId)
      .verificationChecks.create({
        to: phoneNumber,
        code: enteredOtp,
      });
    console.log(verifiedResponse);
    if (verifiedResponse.valid) {
      const user = await User.findOne({ phone: phoneNumber });
      if (user) {
        const payload = { userId: user.id };
        const authToken = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        console.log(authToken, user);
        res.status(201).json({
          isUserExist: true,
          token: "Bearer " + authToken,
          user: user,
        });
      } else {
        res.json({ isUserExist: false });
      }
    }
  } catch (error) {
    console.log(error);
    res.send("Incorrect OTP");
  }
};

exports.completeRegistration = async (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    res.status(400).json(errors);
  }
  const { fullPhoneNumber, name, birthday, email } = req.body;
  const parsedBirthday = moment(birthday, "DD/MM/YYYY").toDate();

  // console.log(req.body);
  try {
    User.findOne({ email: email }).then((user) => {
      if (user) {
        return res.json({ email: "email already exists" });
      }
      const newUser = new User({
        phone: fullPhoneNumber,
        name,
        birthday: parsedBirthday,
        email,
      });
      console.log(newUser);

      const payload = { userId: newUser._id };
      const authToken = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
      newUser.save();
      res.status(201).json({
        message: "User registered successfully",
        token: authToken,
        user: newUser,
      });
    });
  } catch (err) {
    res.status(400).json({ message: "Invalid or expired token" });
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
