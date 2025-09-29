import React, { useState } from "react";

// Array of resources
const resources = [
  {
    id: 1,
    title: "Mindfulness Meditation",
    description: "A guided meditation to help you focus and relax.",
    icon: "self_improvement",
    type: "audio",
  },
  {
    id: 2,
    title: "Intro to Yoga Philosophy",
    description: "Learn the basics of yoga and its mental benefits.",
    icon: "spa",
    type: "article",
  },
  {
    id: 3,
    title: "Gratitude Journaling",
    description: "A guide to starting your gratitude journal.",
    icon: "volunteer_activism",
    type: "article",
  },
  {
    id: 4,
    title: "Sleep Hygiene Tips",
    description: "Creating a healthy sleep routine for better rest.",
    icon: "bedtime",
    type: "article",
  },
  {
    id: 5,
    title: "Balancing Studies & Health",
    description: "Tips for managing academic stress.",
    icon: "school",
    type: "article",
  },
  {
    id: 6,
    title: "Breathing Exercises",
    description: "Simple breathing techniques to calm your mind.",
    icon: "air",
    type: "audio",
  },
  {
    id: 7,
    title: "The Power of Karma",
    description: "Understanding the concept of karma and its impact.",
    icon: "recycling",
    type: "article",
  },
  {
    id: 8,
    title: "Building Healthy Relationships",
    description: "Improving communication and connection with others.",
    icon: "groups",
    type: "article",
  },
  {
    id: 9,
    title: "Time Management for Students",
    description: "Effective strategies to organize your time.",
    icon: "timer",
    type: "article",
  },
];

const ResourceHub = () => {
  const [openResource, setOpenResource] = useState(null);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[var(--secondary-color)] group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header removed; Home contains the only navbar */}

        {/* Main Content */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tighter">Resource Hub</h1>
            <p className="mt-3 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Explore resources to support your mental well-being in rural and semi-urban India. Optimized for low bandwidth.
            </p>
          </div>

          <div className="mb-10">
            <div className="flex flex-wrap justify-center gap-3 px-4">
              <button className="px-4 py-2 text-sm font-semibold rounded-full bg-[var(--primary-color)] text-white shadow-sm">
                All
              </button>
              <button className="px-4 py-2 text-sm font-medium rounded-full bg-white text-[var(--text-primary)] hover:bg-gray-100 transition-colors">
                Meditation
              </button>
              <button className="px-4 py-2 text-sm font-medium rounded-full bg-white text-[var(--text-primary)] hover:bg-gray-100 transition-colors">
                Indian Philosophy
              </button>
              <button className="px-4 py-2 text-sm font-medium rounded-full bg-white text-[var(--text-primary)] hover:bg-gray-100 transition-colors">
                Gratitude
              </button>
              <button className="px-4 py-2 text-sm font-medium rounded-full bg-white text-[var(--text-primary)] hover:bg-gray-100 transition-colors">
                Sleep
              </button>
              <button className="px-4 py-2 text-sm font-medium rounded-full bg-white text-[var(--text-primary)] hover:bg-gray-100 transition-colors">
                Lifestyle Tips
              </button>
            </div>
          </div>

          {/* Resource Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden group transition-shadow hover:shadow-xl">
                <div className="p-5">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 bg-[var(--primary-color)]/10 rounded-full text-[var(--primary-color)]">
                      <span className="material-symbols-outlined">{resource.icon}</span>
                    </div>
                    <h3 className="text-base font-bold text-[var(--text-primary)]">{resource.title}</h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 h-10">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {resource.type === "audio" ? (
                        <button onClick={() => setOpenResource(resource)} className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-color)] text-white text-sm font-semibold hover:bg-[var(--primary-color)]/90 transition-colors">
                          <span className="material-symbols-outlined text-base">play_arrow</span> Play
                        </button>
                      ) : (
                        <button onClick={() => setOpenResource(resource)} className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-[var(--text-primary)] text-sm font-semibold hover:bg-gray-200 transition-colors">
                          <span className="material-symbols-outlined text-base">article</span> Read
                        </button>
                      )}
                      <button
                        aria-label={`Download ${resource.type}`}
                        className="flex items-center justify-center size-9 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                      >
                        <span className="material-symbols-outlined text-xl">download</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Content Modal */}
      {openResource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold">{openResource.title}</h3>
              <button onClick={() => setOpenResource(null)} className="p-2 rounded-full hover:bg-gray-100">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mb-4">{openResource.description}</p>
            <div className="rounded-md bg-gray-50 p-4 text-sm text-gray-700">
              This is demo content. In a real app, we'd stream audio or render an article.
            </div>
            <div className="mt-4 flex justify-end">
              <button onClick={() => setOpenResource(null)} className="px-4 py-2 rounded-md bg-[var(--primary-color)] text-white text-sm font-semibold">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourceHub;
