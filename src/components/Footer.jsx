import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        {/* Logo and Subscription */}
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-2 text-white">
            {/* Logo Placeholder */}
            <div className="bg-purple-600 w-6 h-6 rounded-full"></div>
            <span className="text-2xl font-bold">Estatein</span>
          </div>
          <div className="flex items-center space-x-2 bg-gray-800 rounded-full p-3 w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-transparent text-sm text-gray-400 outline-none w-full"
            />
            <button className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.25 4.25h15.5v15.5H4.25z" fill="none"/>
                <path d="M11.75 16V8l6 4z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Home</h3>
            <ul className="space-y-2 text-sm">
              <li>Hero Section</li>
              <li>Features</li>
              <li>Properties</li>
              <li>Testimonials</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Our Story</li>
              <li>Our Works</li>
              <li>How It Works</li>
              <li>Our Team</li>
              <li>Our Clients</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Properties</h3>
            <ul className="space-y-2 text-sm">
              <li>Portfolio</li>
              <li>Categories</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Valuation Mastery</li>
              <li>Strategic Marketing</li>
              <li>Negotiation Wizardry</li>
              <li>Closing Success</li>
              <li>Property Management</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Contact Form</li>
              <li>Our Offices</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 text-center md:text-left">
            &copy;2023 Estatein. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-500 text-center md:text-left">
            Terms & Conditions
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaFacebook className="text-gray-500 hover:text-white" />
            <FaLinkedin className="text-gray-500 hover:text-white" />
            <FaTwitter className="text-gray-500 hover:text-white" />
            <FaYoutube className="text-gray-500 hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

