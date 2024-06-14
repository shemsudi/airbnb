// models/privacy.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const privacySchema = new Schema({
  data: {
    requestData: { type: Boolean, default: false }, // Whether the user has requested their personal data
    dataRequestReceived: { type: Boolean, default: false }, // Whether the data request has been received
    deleteAccount: { type: Boolean, default: false }, // Whether the user has requested to delete their account
  },
  sharing: {
    activitySharing: { type: Boolean, default: false }, // Whether profile and activity are shown to others
    includeListingInSearchEngines: { type: Boolean, default: false }, // Whether the listing(s) are included in search engines
    readReceipts: { type: Boolean, default: false }, // Whether read receipts are enabled
  },
  services: {
    connectedServices: [{ type: String }], // List of services connected to the Airbnb account
  },
});

const Privacy = mongoose.model("Privacy", privacySchema);
module.exports = Privacy;
