// models/professionalHostingTools.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const professionalHostingToolsSchema = new Schema({
  companyInfo: {
    companyName: { type: String }, // Company name
    // Additional fields for company info as needed
  },
  customProfileURL: { type: String }, // Custom profile URL
});

const ProfessionalHostingTools = mongoose.model(
  "ProfessionalHostingTools",
  professionalHostingToolsSchema
);
module.exports = ProfessionalHostingTools;
