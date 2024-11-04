import React from 'react';

const Section3 = () => {
  return (
    <div className="flex flex-col items-center bg-black text-white py-10 px-4">
      <h1 className="text-3xl font-bold mb-2">Let's Make it Happen</h1>
      <p className="text-sm text-gray-400 mb-8 text-center max-w-lg">
        Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don’t wait, let’s embark on this exciting journey together.
      </p>

      <form className="bg-gray-900 px-8 py-6 rounded-lg w-full max-w-4xl space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <input type="text" placeholder="Enter First Name" className="p-4 bg-gray-800 rounded-md text-gray-200" />
          <input type="text" placeholder="Enter Last Name" className="p-4 bg-gray-800 rounded-md text-gray-200" />
          <input type="email" placeholder="Enter your Email" className="p-4 bg-gray-800 rounded-md text-gray-200" />
          <input type="tel" placeholder="Enter Phone Number" className="p-4 bg-gray-800 rounded-md text-gray-200" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <select className="p-4 bg-gray-800 rounded-md text-gray-400">
            <option>Select Location</option>
          </select>
          <select className="p-4 bg-gray-800 rounded-md text-gray-400">
            <option>Select Property Type</option>
          </select>
          <select className="p-4 bg-gray-800 rounded-md text-gray-400">
            <option>Select no. of Bathrooms</option>
          </select>
          <select className="p-4 bg-gray-800 rounded-md text-gray-400">
            <option>Select no. of Bedrooms</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <select className="p-4 bg-gray-800 rounded-md text-gray-400">
            <option>Select Budget</option>
          </select>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2 text-gray-400">
              <input type="radio" name="contactMethod" className="form-radio text-purple-600" />
              <span>Enter Your Number</span>
            </label>
            <input type="tel" placeholder="Enter your Number" className="p-4 bg-gray-800 rounded-md text-gray-200 w-full" />
          </div>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2 text-gray-400">
              <input type="radio" name="contactMethod" className="form-radio text-purple-600" />
              <span>Enter Your Email</span>
            </label>
            <input type="email" placeholder="Enter your Email" className="p-4 bg-gray-800 rounded-md text-gray-200 w-full" />
          </div>
        </div>

        <textarea
          placeholder="Enter your Message here.."
          className="w-full p-4 bg-gray-800 rounded-md text-gray-200"
          rows="4"
        ></textarea>

        <div className="flex items-center space-x-2 text-gray-400">
          <input type="checkbox" className="form-checkbox text-purple-600" />
          <span>
            I agree with <a href="#" className="underline text-purple-500">Terms of Use</a> and <a href="#" className="underline text-purple-500">Privacy Policy</a>
          </span>
        </div>

        <button type="submit" className="w-full p-4 bg-purple-600 rounded-md text-white font-semibold hover:bg-purple-700">
          Send Your Message
        </button>
      </form>
    </div>
  );
}

export default Section3;

