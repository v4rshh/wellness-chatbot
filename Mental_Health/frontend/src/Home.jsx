import React from 'react'
import "./index.css"
import Footer from './footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <header className="sticky-header w-full px-6 md:px-10 py-4">
        <nav className="flex items-center justify-between">
          <Link
            className="flex items-center gap-2 text-xl font-bold text-[var(--dark-text)]"
            to="/"
          >
            <svg
              className="h-8 w-8 text-[var(--pastel-blue)]"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2a10 10 0 0 0-10 10c0 5.523 4.477 10 10 10s10-4.477 10-10A10 10 0 0 0 12 2Z"></path>
              <path d="M12 12a4 4 0 0 1 4-4"></path>
            </svg>
            <span>MindfulU</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link className="text-sm font-medium text-[var(--light-text)] hover:text-[var(--dark-text)] transition-colors" to="/">Home</Link>
            <Link className="text-sm font-medium text-[var(--light-text)] hover:text-[var(--dark-text)] transition-colors" to="/resources">Resources</Link>
            <Link className="text-sm font-medium text-[var(--light-text)] hover:text-[var(--dark-text)] transition-colors" to="/counselors">Counsellors</Link>
            <Link className="text-sm font-medium text-[var(--light-text)] hover:text-[var(--dark-text)] transition-colors" to="/dashboard">Dashboard</Link>
            <Link className="text-sm font-medium text-[var(--light-text)] hover:text-[var(--dark-text)] transition-colors" to="/auth">Login</Link>
          </div>
          <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6h16M4 12h16m-7 6h7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </button>
        </nav>
      </header>

      <main className="flex-grow">
        <section id="hero" className="hero-bg py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl md:text-5xl font-bold text-[var(--dark-text)] leading-tight mb-4">
                  Your safe digital space for mental well-being
                </h1>
                <p className="text-lg text-[var(--light-text)] mb-8">
                  Find support, resources, and a community that understands.
                  We're here for you, every step of the way.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link className="inline-block px-8 py-3 bg-[var(--pastel-blue)] text-white font-semibold rounded-full shadow-lg hover:bg-[#96b9d8] transition-colors duration-300" to="/auth">Take a Quick Check-up</Link>
                  <Link className="inline-block px-8 py-3 bg-white text-[var(--pastel-blue)] font-semibold rounded-full border border-[var(--pastel-blue)] hover:bg-gray-50 transition-colors duration-300" to="/resources">Explore Resources</Link>
                </div>
              </div>
              <div className="flex justify-center">
                <svg
                  className="w-full max-w-sm h-auto"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    alt="Abstract representation of mental well-being"
                    d="M48.8,-63.1C62.9,-54.1,73.8,-39.3,77.7,-23.1C81.6,-6.9,78.5,10.6,70.5,25.6C62.5,40.6,49.6,53,35.2,61.1C20.8,69.2,4.8,73,-11.1,72.1C-27.1,71.2,-43,65.7,-55.8,55.1C-68.5,44.5,-78,28.8,-79.8,12.3C-81.5,-4.3,-75.4,-21.7,-65.4,-35.5C-55.4,-49.3,-41.4,-59.4,-27.1,-67.2C-12.8,-75,1.9,-80.4,16.5,-77.2C31.1,-73.9,45.8,-72,48.8,-63.1Z"
                    fill="#A7C7E7"
                    transform="translate(100 100)"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section id="resources" className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-text)] text-center mb-12">
              Our Resources
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <img
                  alt="Illustration of a journal"
                  className="w-24 h-24 mb-4 image-resource-1"
                  src="https://dayoneapp.com/wp-content/uploads/2023/02/journal-prompts.jpg?w=700&h=700&crop=1"
                />
                <h3 className="text-xl font-semibold text-[var(--dark-text)] mb-2">
                  Journaling Prompts
                </h3>
                <p className="text-[var(--light-text)] mb-4">
                  Discover guided prompts to explore your thoughts and feelings.
                </p>
                <a
                  className="text-[var(--pastel-blue)] font-medium hover:underline smooth-scroll"
                  href="#resources"
                >
                  Learn More
                </a>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <img
                  alt="Illustration of meditation"
                  className="w-24 h-24 mb-4 image-resource-2"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-EGDy2-VMjzKRrlQOdhRskF0uTJ0HQMqoCw&s"
                />
                <h3 className="text-xl font-semibold text-[var(--dark-text)] mb-2">
                  Meditation Guides
                </h3>
                <p className="text-[var(--light-text)] mb-4">
                  Access guided meditations for relaxation and mindfulness.
                </p>
                <a
                  className="text-[var(--pastel-blue)] font-medium hover:underline smooth-scroll"
                  href="#resources"
                >
                  Learn More
                </a>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <img
                  alt="Illustration of a community forum"
                  className="w-24 h-24 mb-4 image-resource-3"
                  src="data:image/jpeg;base64,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"
                />
                <h3 className="text-xl font-semibold text-[var(--dark-text)] mb-2">
                  Community Support
                </h3>
                <p className="text-[var(--light-text)] mb-4">
                  Connect with others in a safe and supportive environment.
                </p>
                <a
                  className="text-[var(--pastel-blue)] font-medium hover:underline smooth-scroll"
                  href="#community"
                >
                  Join Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="community"
          className="py-20 lg:py-32 bg-[var(--soft-lavender)]"
        >
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-text)] mb-4">
                  Join Our Thriving Community
                </h2>
                <p className="text-lg text-[var(--light-text)] mb-8">
                  Share your experiences, find encouragement, and build
                  meaningful connections with people who care.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <a
                    className="inline-block px-8 py-3 bg-[var(--pastel-green)] text-white font-semibold rounded-full shadow-lg hover:bg-[#c3d8b5] transition-colors duration-300 smooth-scroll"
                    href="#about"
                  >
                    Learn About Our Values
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  alt="Illustration of people connecting"
                  className="w-full max-w-md h-auto image-community-1"
                  src="https://www.cniins.com/files/2018/01/community-image.gif"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 lg:py-32 ">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-text)] text-center mb-12">
              About MindfulU
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <img
                  alt="Illustration of a calming scene"
                  className="w-full max-w-md h-auto image-about-1"
                  src="data:image/jpeg;base64,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"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="text-lg text-[var(--light-text)] mb-6">
                  We are a passionate team dedicated to fostering mental
                  well-being through accessible digital tools and a supportive
                  community. Our mission is to create a space where everyone
                  feels safe, heard, and empowered.
                </p>
                <p className="text-lg text-[var(--light-text)]">
                  Founded on the principles of empathy and understanding,
                  MindfulU aims to break down the barriers to mental health
                  support, making it easier for individuals to prioritize their
                  well-being.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating Chatbot Button */}
      <Link
        to="/chatbot"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[var(--pastel-blue)] hover:bg-[#96b9d8] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
        aria-label="Open AI Chatbot"
      >
        <svg
          className="w-8 h-8 group-hover:animate-pulse"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        
        {/* Notification dot (optional) */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
      </Link>
    </div>
  )
}

export default Home