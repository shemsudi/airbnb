const mongoose = require("mongoose");
const { Schema } = mongoose;

const personalInfoSchema = new Schema({
  legalName: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  preferredName: {
    firstName: { type: String },
    lastName: { type: String },
  },
  emailAddress: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  governmentID: {
    type: String,
    // Add additional fields or validation as needed
  },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
  },
  emergencyContact: {
    name: { type: String, required: true },
    relationship: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String },
  },
});

const PersonalInfo = mongoose.model("PersonalInfo", personalInfoSchema);
module.exports = PersonalInfo;
