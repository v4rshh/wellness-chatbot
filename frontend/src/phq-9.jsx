import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PHQ9Page = () => {
  const [answers, setAnswers] = useState(Array(9).fill(null));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const questions = [
    "Little interest or pleasure in doing things?",
    "Feeling down, depressed, or hopeless?",
    "Trouble falling or staying asleep, or sleeping too much?",
    "Feeling tired or having little energy?",
    "Poor appetite or overeating?",
    "Feeling bad about yourself?",
    "Trouble concentrating on things?",
    "Moving or speaking so slowly that others notice?",
    "Thoughts that you would be better off dead?"
  ];

  const handleSelect = (value) => {
    const updated = [...answers];
    updated[currentQuestion] = value;
    setAnswers(updated);
  };

  const submitAssessment = async (score, responses) => {
    setLoading(true);
    
    try {
      // Get user data from localStorage
      const userData = JSON.parse(localStorage.getItem("mindfulu_user") || "{}");
      const email = userData.email;
      const userId = userData.userId; // You'll need to store this during login

      if (!email || !userId) {
        throw new Error("User not logged in properly");
      }

      const payload = {
        email,
        userId,
        responses: responses.map((answer, index) => ({
          question: questions[index],
          answer,
        })),
        totalScore: score,
      };

      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/forms/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to save assessment');
      }

      // Navigate to results with saved data
      navigate("/result", { 
        state: { 
          score,
          responseId: data.data.id,
          severity: data.data.severity 
        } 
      });
    } catch (error) {
      console.error('Error saving assessment:', error);
      alert('Failed to save assessment: ' + error.message);
      // Still navigate to results even if save fails
      navigate("/result", { state: { score } });
    } finally {
      setLoading(false);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      return;
    }
    // Submit on last question
    if (answers.every((a) => a !== null)) {
      const score = answers.reduce((sum, a) => sum + (a ?? 0), 0);
      submitAssessment(score, answers);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="flex min-h-screen flex-col bg-[var(--secondary-color)]">
      {/* Header */}
      <header className="w-full border-b border-[var(--border-color)]">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
          <div className="flex items-center gap-3">
            <svg className="h-6 w-6 text-[var(--primary-color)]" fill="currentColor" viewBox="0 0 48 48">
              <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"></path>
              <path d="M24 29c-4.41 0-8-3.59-8-8s3.59-8 8-8c1.48 0 2.85.41 4.05 1.11l2.83-2.83C28.98 10.37 26.58 10 24 10c-6.63 0-12 5.37-12 12s5.37 12 12 12c2.58 0 4.98-.83 6.88-2.28l-2.83-2.83C26.85 28.59 25.48 29 24 29z" fillOpacity="0.5"></path>
            </svg>
            <h1 className="text-xl font-bold tracking-tight">MindfulU</h1>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10">
        <div className="w-full max-w-xl">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <p className="text-sm font-medium text-[var(--text-secondary)]">Progress</p>
              <p className="text-sm font-bold text-[var(--text-primary)]">{currentQuestion + 1} / {questions.length}</p>
            </div>
            <div className="w-full rounded-full h-2 bg-[var(--progress-bar-bg)]">
              <div
                className="h-2 rounded-full bg-[var(--primary-color)] transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">{questions[currentQuestion]}</h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-6">
              Over the last 2 weeks, how often have you been bothered by this?
            </p>

            <div className="space-y-4">
              {["Not at all", "Several days", "More than half the days", "Nearly every day"].map((label, idx) => (
                <label
                  key={idx}
                  className={`flex items-center gap-4 rounded-lg border border-[var(--border-color)] p-4 cursor-pointer hover:border-[var(--primary-color)] transition-colors ${
                    answers[currentQuestion] === idx ? "border-[var(--primary-color)] bg-blue-50" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestion}`}
                    className="peer hidden"
                    value={idx}
                    checked={answers[currentQuestion] === idx}
                    onChange={() => handleSelect(idx)}
                  />
                  <span
                    className="h-5 w-5 flex-shrink-0 rounded-full border-2 border-[var(--border-color)] peer-checked:border-[var(--primary-color)] peer-checked:bg-blue-50 transition-all"
                  ></span>
                  <span className="text-base font-medium text-[var(--text-primary)]">{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex justify-between">
            <button
              onClick={prevQuestion}
              className="btn-secondary rounded-lg h-12 px-6 text-base font-bold transition-colors disabled:opacity-50"
              disabled={currentQuestion === 0 || loading}
            >
              Back
            </button>
            <button
              onClick={nextQuestion}
              className="btn-primary rounded-lg h-12 px-6 text-base font-bold transition-colors disabled:opacity-50"
              disabled={loading || answers[currentQuestion] === null}
            >
              {loading ? "Saving..." : currentQuestion === questions.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-[var(--secondary-color)]">
        <div className="container mx-auto px-4 text-center text-[var(--text-secondary)]">
          <div className="flex justify-center gap-4 mb-2 flex-wrap">
            <a href="#" className="text-sm hover:text-[var(--text-primary)]">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-[var(--text-primary)]">Terms of Service</a>
            <a href="#" className="text-sm hover:text-[var(--text-primary)]">Contact</a>
          </div>
          <p className="text-sm">© 2024 MindfulU. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PHQ9Page;
