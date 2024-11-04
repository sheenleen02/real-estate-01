import React from 'react';

const Asection3 = () => {
  return (
    <div className="bg-black text-white py-16 px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
        Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
      </p>
      
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-sm mx-auto md:mx-0">
          <h3 className="text-xl font-semibold mb-4">3+ Years of Excellence</h3>
          <p className="text-gray-300">
            With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-sm mx-auto md:mx-0">
          <h3 className="text-xl font-semibold mb-4">Happy Clients</h3>
          <p className="text-gray-300">
            Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-sm mx-auto md:mx-0">
          <h3 className="text-xl font-semibold mb-4">Industry Recognition</h3>
          <p className="text-gray-300">
            We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Asection3;

