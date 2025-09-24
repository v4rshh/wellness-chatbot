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
            <Link className="text-sm font-medium text-[var(--light-text)] hover:text-[var(--dark-text)] transition-colors" to="/phq9">PHQ-9</Link>
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

      <main className="flex-grow ">
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
                  <Link className="inline-block px-8 py-3 bg-[var(--pastel-blue)] text-white font-semibold rounded-full shadow-lg hover:bg-[#96b9d8] transition-colors duration-300" to="/phq9">Take a Quick Check-up</Link>
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
                  src="[IMAGE_PLACEHOLDER_1]"
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
                  src="[IMAGE_PLACEHOLDER_2]"
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
                  src="[IMAGE_PLACEHOLDER_3]"
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
                  src="[IMAGE_PLACEHOLDER_4]"
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
                  src="[IMAGE_PLACEHOLDER_5]"
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
      <Footer></Footer>

      
    </div>
  )
}

export default Home