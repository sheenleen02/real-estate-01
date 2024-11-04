import React from 'react';

const Section4 = () => {
  return (
    <div className="flex items-center justify-between px-36 py-16 bg-black text-white relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-r from-black to-zinc-500 opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-lg">
        <h2 className="text-4xl font-bold mb-4">Start Your Real Estate Journey Today</h2>
        <p className="text-gray-400 mb-6">
          Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
        </p>
      </div>

      {/* CTA Button */}
      <button className="relative z-10 px-6 py-3 text-lg font-semibold text-white bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none">
        Explore Properties
      </button>
    </div>
  );
};

export default Section4;

