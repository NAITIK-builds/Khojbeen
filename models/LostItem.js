const mongoose = require('mongoose');

const LostItemSchema = new mongoose.Schema({
  collegeId: { type: String, required: true, default: 'DELHI_TECH_UNIV' },
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  voiceTranscript: { type: String, default: '' },
  locationLost: { type: String, required: true },
  dateLost: { type: Date, default: Date.now },
  reporterName: { type: String, required: true },
  reporterContact: { type: String, required: true },
  imageUrl: { type: String, default: '' },
  preRequestActive: { type: Boolean, default: true },
  status: { type: String, enum: ['LOST', 'AI_MATCHED', 'RECLAIMED', 'CLOSED'], default: 'LOST' },
  securityQuestions: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('LostItem', LostItemSchema);
