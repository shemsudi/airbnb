// models/preferences.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const preferencesSchema = new Schema({
  hosting: {
    insightsAndRewards: {
      recognitionAndAchievements: { type: String },
      insightsAndTips: { type: String },
      pricingTrendsAndSuggestions: { type: String },
      hostingPerks: { type: String },
    },
    hostingUpdates: {
      newsAndUpdates: { type: String },
      localLawsAndRegulations: { type: String },
    },
    travelTipsAndOffers: {
      inspirationAndOffers: { type: String },
      tripPlanning: { type: String },
    },
    airbnbUpdates: {
      newsAndPrograms: { type: String },
      feedback: { type: String },
      travelRegulations: { type: String },
    },
  },
  notification: {
    accountActivityAndPolicies: {
      confirmBookingAndAccountActivity: { type: String },
      accountActivity: { type: String },
      listingActivity: { type: String },
      guestPolicies: { type: String },
      hostPolicies: { type: String },
      reminders: { type: String },
      guestAndHostMessages: { type: String },
    },
  },
});

const Preferences = mongoose.model("Preferences", preferencesSchema);
module.exports = Preferences;
