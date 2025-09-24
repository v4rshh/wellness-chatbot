import React from "react";
import { useLocation, Link } from "react-router-dom";

const AssessmentResult = () => {
  const location = useLocation();
  const score = location.state?.score ?? 0;

  const getSeverity = (s) => {
    if (s <= 4) return { label: "Minimal", badge: "bg-green-100 text-green-800" };
    if (s <= 9) return { label: "Mild", badge: "bg-lime-100 text-lime-800" };
    if (s <= 14) return { label: "Moderate", badge: "bg-yellow-100 text-yellow-800" };
    if (s <= 19) return { label: "Moderately Severe", badge: "bg-orange-100 text-orange-800" };
    return { label: "Severe", badge: "bg-red-100 text-red-800" };
  };

  const severity = getSeverity(score);

  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8 flex flex-1 justify-center">
      <div className="flex max-w-4xl flex-1 flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <h1 className="text-gray-900 text-4xl font-bold leading-tight tracking-tighter">
            Your Assessment Result
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Here's a summary of your mental health assessment. Remember, this is
            a starting point for understanding your well-being.
          </p>
        </div>

        {/* Severity Box */}
        <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200">
          <div className="p-6 bg-white flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className={`inline-flex items-center rounded-md px-3 py-1 text-sm font-medium ${severity.badge}`}>
                Severity: {severity.label}
              </span>
            </div>
            <p className="text-gray-600 text-base">
              Based on your responses, your assessment indicates a moderate
              level of distress. It's important to seek support and explore
              available resources to improve your well-being.
            </p>
            <div className="text-gray-900 font-semibold">Score: {score} / 27</div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-900 text-2xl font-bold leading-tight tracking-tight">
            Recommendations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-100)] text-[var(--primary-700)]">
                <span className="material-symbols-outlined text-2xl">
                  auto_stories
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-gray-900 text-lg font-semibold leading-normal">
                  Self-Help Resources
                </h3>
                <p className="text-gray-600 text-sm leading-normal">
                  Access guides and articles to learn coping strategies and
                  stress management techniques.
                </p>
              </div>
              <Link to="/resources" className="mt-auto inline-flex items-center justify-center rounded-lg bg-gray-100 px-4 py-2 text-sm font-bold text-gray-900 hover:bg-gray-200 transition-colors">
                View Resources
                <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-100)] text-[var(--primary-700)]">
                <span className="material-symbols-outlined text-2xl">
                  calendar_month
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-gray-900 text-lg font-semibold leading-normal">
                  Book a Counsellor
                </h3>
                <p className="text-gray-600 text-sm leading-normal">
                  Schedule a session with a qualified counsellor for
                  personalized support and guidance.
                </p>
              </div>
              <Link to="/counselors" className="mt-auto inline-flex items-center justify-center rounded-lg bg-[var(--primary-300)] px-4 py-2 text-sm font-bold text-gray-900 hover:bg-[var(--primary-400)] transition-colors">
                Book Now
                <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-100)] text-[var(--primary-700)]">
                <span className="material-symbols-outlined text-2xl">call</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-gray-900 text-lg font-semibold leading-normal">
                  Helpline Numbers
                </h3>
                <p className="text-gray-600 text-sm leading-normal">
                  Contact a helpline for immediate assistance and emotional
                  support from trained professionals.
                </p>
              </div>
              <a href="tel:112" className="mt-auto inline-flex items-center justify-center rounded-lg bg-gray-100 px-4 py-2 text-sm font-bold text-gray-900 hover:bg-gray-200 transition-colors">
                Call Helpline
                <span className="material-symbols-outlined text-base ml-1">call</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Link to="/phq9" className="inline-flex items-center justify-center rounded-lg bg-gray-100 px-4 py-2 text-sm font-bold text-gray-900 hover:bg-gray-200 transition-colors">Retake Assessment</Link>
          <Link to="/dashboard" className="inline-flex items-center justify-center rounded-lg bg-[var(--primary-300)] px-4 py-2 text-sm font-bold text-gray-900 hover:bg-[var(--primary-400)] transition-colors">Go to Dashboard</Link>
        </div>
      </div>
    </main>
  );
};

export default AssessmentResult;
