import React, { useState } from "react";

const questions = [
  "Little interest or pleasure in doing things",
  "Feeling down, depressed, or hopeless",
  "Trouble falling or staying asleep, or sleeping too much",
  "Feeling tired or having little energy",
  "Poor appetite or overeating",
  "Feeling bad about yourself — or that you are a failure",
  "Trouble concentrating on things, such as reading or watching TV",
  "Moving or speaking so slowly that others notice",
  "Thoughts that you would be better off dead or hurting yourself",
];

const options = [
  { value: 0, label: "Not at all" },
  { value: 1, label: "Several days" },
  { value: 2, label: "More than half the days" },
  { value: 3, label: "Nearly every day" },
];

const PHQ9 = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (qIndex, value) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = value;
    setAnswers(newAnswers);
    setError(""); // clear error when selecting
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all questions are answered
    if (answers.includes(null)) {
      setError("⚠️ Please answer all questions before submitting.");
      setScore(null);
      return;
    }

    const total = answers.reduce((sum, val) => sum + val, 0);
    setScore(total);
    setError(""); // clear error
  };

  const getSeverity = (score) => {
    if (score <= 4) return { text: "Minimal depression", color: "green" };
    if (score <= 9) return { text: "Mild depression", color: "yellow" };
    if (score <= 14) return { text: "Moderate depression", color: "orange" };
    if (score <= 19) return { text: "Moderately severe depression", color: "red" };
    return { text: "Severe depression", color: "red" };
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-2 text-center text-gray-800">
          PHQ-9 Questionnaire
        </h1>
        <p className="text-center text-gray-600 mb-6">
          A standard self-assessment tool to evaluate symptoms of depression.
        </p>

        <form onSubmit={handleSubmit} className="space-y-10">
          {questions.map((q, i) => (
            <div key={i} className="border-b pb-8">
              {/* Progress Indicator */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">
                  Question {i + 1} of {questions.length}
                </span>
                {answers[i] !== null && (
                  <span className="text-xs text-blue-600 font-medium">Answered</span>
                )}
              </div>

              <p className="font-medium text-gray-800 mb-4">{q}</p>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {options.map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-center justify-center border rounded-lg py-2 px-3 cursor-pointer transition-all text-sm
                      ${
                        answers[i] === opt.value
                          ? "bg-blue-600 text-white shadow scale-105"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                      }`}
                  >
                    <input
                      type="radio"
                      name={`q-${i}`}
                      value={opt.value}
                      checked={answers[i] === opt.value}
                      onChange={() => handleChange(i, opt.value)}
                      className="hidden"
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>
          ))}

          {/* Error Message */}
          {error && (
            <p className="text-red-600 text-center font-medium">{error}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 
                       text-white font-medium text-base shadow hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>

        {/* Result */}
        {score !== null && (
          <div className="mt-10 p-6 rounded-xl border bg-gray-50 text-center shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Your Result</h2>
            <p className="text-lg font-semibold text-gray-800">
              Total Score: <span className="text-blue-600">{score}</span>
            </p>
            <span
              className={`inline-block mt-3 px-4 py-2 rounded-full text-sm font-medium 
                ${
                  getSeverity(score).color === "green"
                    ? "bg-green-100 text-green-800"
                    : getSeverity(score).color === "yellow"
                    ? "bg-yellow-100 text-yellow-800"
                    : getSeverity(score).color === "orange"
                    ? "bg-orange-100 text-orange-800"
                    : "bg-red-100 text-red-800"
                }`}
            >
              {getSeverity(score).text}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PHQ9;
