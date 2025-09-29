import mongoose from 'mongoose';

const formResponseSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false, // Optional since users can be anonymous
  },
  assessmentType: {
    type: String,
    required: true,
    default: 'PHQ-9',
  },
  responses: [{
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: Number,
      required: true,
      min: 0,
      max: 3,
    },
  }],
  totalScore: {
    type: Number,
    required: true,
    min: 0,
    max: 27,
  },
  severity: {
    type: String,
    required: true,
    enum: ['Minimal', 'Mild', 'Moderate', 'Moderately Severe', 'Severe'],
  },
  completedAt: {
    type: Date,
    default: Date.now,
  }
});

const FormResponse = mongoose.model('FormResponse', formResponseSchema);
export default FormResponse;