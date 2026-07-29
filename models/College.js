const mongoose = require('mongoose');

const CollegeSchema = new mongoose.Schema({
  collegeId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  totalLostItems: { type: Number, default: 0 },
  totalFoundItems: { type: Number, default: 0 },
  recoveryRate: { type: Number, default: 94.2 }, // Percentage
  adminEmail: { type: String, required: true },
  activeLockersCount: { type: Number, default: 24 },
}, { timestamps: true });

module.exports = mongoose.model('College', CollegeSchema);
