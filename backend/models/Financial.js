// models/financial.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const financialSchema = new Schema({
  payments: [
    {
      amount: { type: Number, required: true },
      description: { type: String },
      // Additional fields as needed
    },
  ],
  payouts: [
    {
      amount: { type: Number, required: true },
      description: { type: String },
      // Additional fields as needed
    },
  ],
  paymentMethods: [
    {
      type: { type: String, required: true }, // e.g., credit card, PayPal
      // Additional fields as needed
    },
  ],
  airbnbGiftCredit: {
    amount: { type: Number, required: true },
    // Additional fields as needed
  },
  coupons: [
    {
      code: { type: String, required: true },
      // Additional fields as needed
    },
  ],
  guestContribution: {
    allowed: { type: Boolean, default: false }, // Whether contributions from guests are allowed
    // Additional fields as needed
  },
});

const Financial = mongoose.model("Financial", financialSchema);
module.exports = Financial;
