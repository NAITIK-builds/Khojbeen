const mongoose = require('mongoose');

const AIMatchSchema = new mongoose.Schema({
  collegeId: { type: String, required: true },
  lostItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'LostItem', required: true },
  foundItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'FoundItem', required: true },
  confidenceScore: { type: Number, required: true }, // e.g. 96 (%)
  visualSimilarity: { type: Number, default: 94 },
  nlpTextSimilarity: { type: Number, default: 98 },
  matchingFeatures: [{ type: String }], // e.g. ["Color: Dark Blue", "Brand: Fastrack", "Location: Library"]
  status: { type: String, enum: ['PENDING_ADMIN_REVIEW', 'APPROVED', 'REJECTED'], default: 'PENDING_ADMIN_REVIEW' },
  verificationPassCode: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('AIMatch', AIMatchSchema);
