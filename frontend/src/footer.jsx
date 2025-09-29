import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white py-8">
        <div className="container mx-auto px-6 text-center text-[var(--light-text)]">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a
              className="text-sm hover:text-[var(--dark-text)] transition-colors smooth-scroll"
              href="#privacy"
            >
              Privacy Policy
            </a>
            <a
              className="text-sm hover:text-[var(--dark-text)] transition-colors smooth-scroll"
              href="#terms"
            >
              Terms of Service
            </a>
            <a
              className="text-sm hover:text-[var(--dark-text)] transition-colors smooth-scroll"
              href="#contact"
            >
              Contact Us
            </a>
          </div>
          <p className="text-sm">© 2024 MindfulU. All rights reserved.</p>
        </div>
      </footer>
  )
}

export default Footer