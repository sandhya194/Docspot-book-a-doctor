const mongoose = require("mongoose");

const appointmentModel = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctor",
      required: true,
    },
    userInfo: {
      type: Object,
      default: {},
      required: true,
    },
    doctorInfo: {
      type: Object,
      default: {},
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    document: {
      type: Object,
    },
    status: {
      type: String,
      require: true,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const appointmentSchema = mongoose.model("appointment", appointmentModel);

module.exports = appointmentSchema;
