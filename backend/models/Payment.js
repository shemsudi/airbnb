const { Schema } = require("mongoose");

const paymentSchema = new Schema({
  booking: {
    type: Schema.Types.ObjectId,
    ref: "Booking",
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
    default: "USD",
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "failed"],
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;
