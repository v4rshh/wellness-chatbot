import FormResponse from '../models/form.model.js';

// Helper function to calculate severity based on PHQ-9 score
const calculateSeverity = (score) => {
  if (score <= 4) return 'Minimal';
  if (score <= 9) return 'Mild';
  if (score <= 14) return 'Moderate';
  if (score <= 19) return 'Moderately Severe';
  return 'Severe';
};

export const saveFormResponse = async (req, res) => {
  try {
    const { email, responses, totalScore, userId } = req.body;

    // Validate required fields
    if (!email || !responses || totalScore === undefined || !userId) {
      return res.status(400).json({
        success: false,
        error: 'Email, responses, total score, and user ID are required',
      });
    }

    // Validate responses format
    if (!Array.isArray(responses) || responses.length !== 9) {
      return res.status(400).json({
        success: false,
        error: 'Responses must be an array of 9 answers',
      });
    }

    // Calculate severity
    const severity = calculateSeverity(totalScore);

    // Create new form response
    const formResponse = new FormResponse({
      email,
      userId,
      responses,
      totalScore,
      severity,
    });

    await formResponse.save();

    res.status(201).json({
      success: true,
      data: {
        id: formResponse._id,
        totalScore,
        severity,
        completedAt: formResponse.completedAt,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};


