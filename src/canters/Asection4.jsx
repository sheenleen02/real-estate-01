import React from 'react';

const Asection4 = () => {
  return (
    <div className="bg-black text-white py-16 px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">Navigating the Estatein Experience</h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
        At Estatein, we’ve designed a straightforward process to help you find and purchase your dream property with ease. Here’s a step-by-step guide to how it all works.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-zinc-900 rounded-lg shadow-lg p-8 relative">
            <div className="absolute top-0 right-0 w-[20%] h-[20%] rounded-full bg-gradient-to-r via-transparent from-purple-500 to-blue-600 rounded-t-lg"></div>
            <span className="absolute top-4 left-4 text-sm font-semibold text-gray-400">Step {index + 1}</span>
            <h3 className="text-xl font-semibold mt-8 mb-4">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const steps = [
  {
    title: "Discover a World of Possibilities",
    description: "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget."
  },
  {
    title: "Narrowing Down Your Choices",
    description: "Once you’ve found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision."
  },
  {
    title: "Personalized Guidance",
    description: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away."
  },
  {
    title: "See It for Yourself",
    description: "Arrange viewings of the properties you’re interested in. We’ll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home."
  },
  {
    title: "Making Informed Decisions",
    description: "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice."
  },
  {
    title: "Getting the Best Deal",
    description: "We’ll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms."
  }
];

export default Asection4;
