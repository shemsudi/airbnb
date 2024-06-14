// models/globalPreferences.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const globalPreferencesSchema = new Schema({
  preferredLanguage: { type: String }, // Preferred language
  preferredCurrency: { type: String }, // Preferred currency
  timeZone: { type: String }, // Time zone
});

const GlobalPreferences = mongoose.model(
  "GlobalPreferences",
  globalPreferencesSchema
);
module.exports = GlobalPreferences;
