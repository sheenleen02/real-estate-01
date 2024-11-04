import React from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    title: 'Exceptional Service!',
    content:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    name: 'Wade Warren',
    location: 'USA, California',
    image: 'https://via.placeholder.com/40', // Replace with actual image URL
  },
  {
    title: 'Efficient and Reliable',
    content:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    name: 'Emelie Thomson',
    location: 'USA, Florida',
    image: 'https://via.placeholder.com/40', // Replace with actual image URL
  },
  {
    title: 'Trusted Advisors',
    content:
      "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    name: 'John Mans',
    location: 'USA, Nevada',
    image: 'https://via.placeholder.com/40', // Replace with actual image URL
  },
];

const Section0 = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">What Our Clients Say</h2>
          <p className="text-gray-400">
            Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="flex justify-center space-x-4 overflow-x-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg w-80 space-y-4">
              {/* Stars */}
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
              {/* Content */}
              <h3 className="text-xl font-semibold">{testimonial.title}</h3>
              <p className="text-gray-400">{testimonial.content}</p>
              {/* User Info */}
              <div className="flex items-center space-x-3">
                <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition">
            View All Testimonials
          </button>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-4 mt-10 text-gray-400">
          <p>01 of 10</p>
          <button className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition">
            <FaChevronLeft />
          </button>
          <button className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section0;
