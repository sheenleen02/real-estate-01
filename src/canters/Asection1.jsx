import React from 'react';

const Asection1 = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
        
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">Our Journey</h2>
          <p className="text-gray-400">
            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.
          </p>
          <div className="flex space-x-6">
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold">200+</h3>
              <p className="text-gray-400">Happy Customers</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold">10k+</h3>
              <p className="text-gray-400">Properties For Clients</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold">16+</h3>
              <p className="text-gray-400">Years of Experience</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img 
            src="" 
            alt="Our Journey"
            className="rounded-lg shadow-lg object-cover w-96"
          />
        </div>

      </div>
    </section>
  );
};

export default Asection1;
