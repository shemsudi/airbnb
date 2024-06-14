// models/travelForWork.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const travelForWorkSchema = new Schema({
  workEmail: { type: String }, // Work email address
});

const TravelForWork = mongoose.model("TravelForWork", travelForWorkSchema);
module.exports = TravelForWork;
