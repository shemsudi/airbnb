const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["entire home", "private room", "shared room"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
  },
  beds: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  uniqueFeatures: {
    type: String,
    required: false,
  },
  location: {
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    coordinates: {
      lat: {
        type: Number,
        required: true,
      },
      lng: {
        type: Number,
        required: true,
      },
    },
  },
  photos: [
    {
      url: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: false,
      },
    },
  ],
  amenities: [
    {
      type: String,
      required: false,
    },
  ],
  houseRules: [
    {
      type: String,
      required: false,
    },
  ],
  pricing: {
    nightlyRate: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
      default: "USD",
    },
    smartPricing: {
      type: Boolean,
      default: false,
    },
  },
  availability: {
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    minStay: {
      type: Number,
      required: true,
    },
    maxStay: {
      type: Number,
      required: false,
    },
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

listingSchema.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
