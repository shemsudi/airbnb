const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hostingSchema = new Schema({
  title: {
    type: String,
    required: false,
  },
  uuid: {
    type: String,
    required: true,
  },
  lastPage: {
    type: String,
    required: false,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  structure: {
    type: String,
    required: false,
  },

  privacyType: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  visibility: {
    type: String,
    required: false,
  },

  highlights: [
    {
      type: String,
      required: false,
    },
  ],
  instantBook: {
    type: String,
    required: false,
  },
  guests: {
    type: Number,
    required: false,
  },
  beds: {
    type: Number,
    required: false,
  },
  bedrooms: {
    type: Number,
    required: false,
  },
  bathrooms: {
    type: Number,
    required: false,
  },

  location: {
    streetAddress: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    zipCode: {
      type: String,
      required: false,
    },
    coordinates: {
      lat: {
        type: Number,
        required: false,
      },
      lng: {
        type: Number,
        required: false,
      },
    },
    showExactLocation: {
      type: Boolean,
      default: false,
    },
  },
  photos: [
    {
      type: String,
      required: false,
    },
  ],
  amenities: [
    {
      type: String,
      required: false,
    },
  ],
  uniqueAmenities: [
    {
      type: String,
      required: false,
    },
  ],
  safetyAmenities: [
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
      required: false,
    },
    currency: {
      type: String,
      required: false,
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
      required: false,
    },
    endDate: {
      type: Date,
      required: false,
    },
    minStay: {
      type: Number,
      required: false,
    },
    maxStay: {
      type: Number,
      required: false,
    },
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
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

hostingSchema.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});

const Hosting = mongoose.model("Hosting", hostingSchema);

module.exports = Hosting;
