import React from 'react';

const Section2 = () => {
  const properties = [
    {
      id: 1,
      title: 'Seaside Serenity Villa',
      description: 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...',
      bedrooms: 4,
      bathrooms: 3,
      type: 'Villa',
      price: '$550,000',
      image: '/images/housi.png', 
    },
    {
      id: 2,
      title: 'Metropolitan Haven',
      description: 'A chic and fully-furnished 2-bedroom apartment with panoramic city views...',
      bedrooms: 2,
      bathrooms: 2,
      type: 'Villa',
      price: '$550,000',
      image: '/images/storyy.png', 
    },
    {
      id: 3,
      title: 'Rustic Retreat Cottage',
      description: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...',
      bedrooms: 3,
      bathrooms: 3,
      type: 'Villa',
      price: '$550,000',
      image: '/images/fiine.png', 
    },
  ];

  return (
    <div className="bg-zink-900 text-white mt-24 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Featured Properties</h2>
      <p className="text-center text-gray-400 mb-8">
        Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-black border rounded overflow-hidden  w-80">
            <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
              <p className="text-gray-400 text-sm mb-4">
                {property.description} <a href="#" className="text-indigo-400">Read More</a>
              </p>
              <div className="flex items-center text-sm text-gray-600 gap-3 mb-4">
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 18.364l1.415 1.415 12.728-12.728-1.414-1.415L5.121 18.364z" /></svg>
                  {property.bedrooms}-Bedroom
                </span>
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 14h.01M15.004 11H19v8H5v-8h3.996L15.004 11z" /></svg>
                  {property.bathrooms}-Bathroom
                </span>
                <span className="flex items-center gap-1">
                  <svg xmlns="" className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12V4H3v16h18V4h-6v8H9z" /></svg>
                  {property.type}
                </span>
              </div>
              <div className='flex'>

              <div className="text-lg font-semibold text-indigo-400 mb-4 ">Price: {property.price}</div>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg">
                View Property Details
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;

