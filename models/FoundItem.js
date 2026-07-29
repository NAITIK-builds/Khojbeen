const mongoose = require('mongoose');

const FoundItemSchema = new mongoose.Schema({
  collegeId: { type: String, required: true, default: 'DELHI_TECH_UNIV' },
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  voiceTranscript: { type: String, default: '' },
  locationFound: { type: String, required: true },
  dateFound: { type: Date, default: Date.now },
  finderName: { type: String, required: true },
  finderContact: { type: String, required: true },
  securityLockerNumber: { type: String, default: 'LOCKER-B12' },
  foundImageUrl: { type: String, required: true },
  
  // 🔒 CRITICAL PRIVACY & ANTI-MISCHIEF FEATURE:
  // Found items & images are hidden from public general feed to prevent fake claims.
  isHiddenFromPublic: { type: Boolean, default: true },
  
  status: { type: String, enum: ['UNCLAIMED', 'MATCH_PENDING', 'VERIFIED_RETURNED'], default: 'UNCLAIMED' },
  matchedLostItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'LostItem', default: null }
}, { timestamps: true });

module.exports = mongoose.model('FoundItem', FoundItemSchema);
