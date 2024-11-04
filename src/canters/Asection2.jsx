import React from 'react';
import { FaStar, FaGraduationCap, FaUsers, FaCheckCircle } from 'react-icons/fa';

const Asection2 = () => {
  return (
    <div className="bg-black text-white px-12 py-16 flex justify-between items-center">
      
      <div className="w-1/2 space-y-6">
        <h2 className="text-4xl font-semibold">Our Values</h2>
        <p className="text-gray-400">
          Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
        </p>
      </div>
      
      
      <div className=" border-4 border-zinc-800 rounded-xl p-8 w-1/2 grid grid-cols-2 gap-6">
        {/* Trust */}
        <div className="flex flex-col items-start space-y-2">
          <div className="text-purple-400 text-4xl">
            <FaStar />
          </div>
          <h3 className="text-xl font-semibold">Trust</h3>
          <p className="text-gray-400 text-sm">Trust is the cornerstone of every successful real estate transaction.</p>
        </div>
        
        {/* Excellence */}
        <div className="flex flex-col items-start space-y-2">
          <div className="text-purple-400 text-4xl">
            <FaGraduationCap />
          </div>
          <h3 className="text-xl font-semibold">Excellence</h3>
          <p className="text-gray-400 text-sm">We set the bar high for ourselves. From the properties we list to the services we provide.</p>
        </div>
        
        {/* Client-Centric */}
        <div className="flex flex-col items-start space-y-2">
          <div className="text-purple-400 text-4xl">
            <FaUsers />
          </div>
          <h3 className="text-xl font-semibold">Client-Centric</h3>
          <p className="text-gray-400 text-sm">Your dreams and needs are at the center of our universe. We listen, understand.</p>
        </div>
        
        {/* Our Commitment */}
        <div className="flex flex-col items-start space-y-2">
          <div className="text-purple-400 text-4xl">
            <FaCheckCircle />
          </div>
          <h3 className="text-xl font-semibold">Our Commitment</h3>
          <p className="text-gray-400 text-sm">We are dedicated to providing you with the highest level of service, professionalism, and support.</p>
        </div>
      </div>
    </div>
  );
};

export default Asection2;

