
import React from 'react';

const Section1 = () => {
  return (
    <div className="bg-black text-white   h-screen">
      
      <div className="flex flex-col md:flex-row justify-between items-center pt-12  mb-10 px-12">
        <div className="md:w-1/2 space-y-4 ">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight pb-10">
            Discover Your Dream Property with Estatein
          </h1>
          <p className="text-lg pb-10">
            Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
          </p>
          
          {/* Buttons */}
          <div className="flex space-x-4 pb-10">
            <button className="bg-black border border-white px-4 py-2 text-lg hover:bg-white hover:text-black">
              Learn More
            </button>
            <button className="bg-purple-600 px-4 py-2 text-lg hover:bg-purple-700">
              Browse Properties
            </button>
          </div>

          
          <div className="flex justify-between mt-8 text-center ">
            <div className="bg-zinc-900 p-4 rounded-md">
              <h2 className="text-2xl font-bold">200+</h2>
              <p>Happy Customers</p>
            </div>
            <div className="bg-zinc-900 p-4 rounded-md">
              <h2 className="text-2xl font-bold">10k+</h2>
              <p>Properties For Clients</p>
            </div>
            <div className="bg-zinc-900 p-4 rounded-md">
              <h2 className="text-2xl font-bold">16+</h2>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
        <div className='top-1'><img src="/images/Text.png" alt="Overlay Text" />
        </div>
        


        <div className=" md:w-1/2 flex justify-center">
          <img src="/images/building.png" alt="Building" className="h-[500px] w-[600px]" />
          <div className="absolute left-[700px] top-28">
           
          </div>



          
        </div>
      </div>

      
      <div className="flex flex-wrap px-8  gap-10 bg-black overflow-hidden ">
        <div className="bg-zinc-900  justify-around px-4 rounded-md text-center">
          <img src="/images/food.png" alt="Find Your Dream Home" className="h-14 mx-auto mb-2" />
          <p>Find Your Dream Home</p>
        </div>
        <div className="bg-zinc-900  w-full md:w-1/4 rounded-md text-center">
          <img src="/images/property_value.png" alt="Unlock Property Value" className="h-10 mx-auto mb-2" />
          <p>Unlock Property Value</p>
        </div>
        <div className="bg-zinc-900  w-full md:w-1/4 rounded-md text-center">
          <img src="/images/property_management.png" alt="Effortless Property Management" className="h-10 mx-auto mb-2" />
          <p>Effortless Property Management</p>
        </div>
        <div className="bg-zinc-900  w-full md:w-1/4 rounded-md text-center">
          <img src="/images/smart_investments.png" alt="Smart Investments" className="h-10 mx-auto mb-2" />
          <p>Smart Investments, Informed Decisions</p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
