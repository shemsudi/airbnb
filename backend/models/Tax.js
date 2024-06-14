// models/tax.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const taxSchema = new Schema({
  taxpayerInfo: {
    taxInfoRequired: { type: Boolean, default: true },
    // Additional taxpayer information fields as needed
  },
  vatInfo: {
    vatRegistered: { type: Boolean, default: false },
    vatIDNumber: { type: String },
    // Additional VAT information fields as needed
  },
  taxDocuments: [
    {
      year: { type: Number, required: true },
      documentIssued: { type: Boolean, default: false },
      // Additional tax document fields as needed
    },
  ],
});

const Tax = mongoose.model("Tax", taxSchema);
module.exports = Tax;
