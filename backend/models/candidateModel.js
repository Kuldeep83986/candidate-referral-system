const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  jobTitle: { type: String, required: true },
  status: {
    type: String,
    enum: ["Pending", "Reviewed", "Hired"],
    default: "Pending",
  },
  createdAt: { type: Date, default: Date.now },
});

const Candidate = mongoose.model("Candidate", CandidateSchema);

module.exports = Candidate;
