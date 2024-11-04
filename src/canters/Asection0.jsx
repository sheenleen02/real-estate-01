import React from 'react';  

const Asection0 = () => {  
  const teamMembers = [  
    {  
      name: "Max Mitchell",  
      position: "Founder",  
      imageUrl: "path_to_image_1.jpg", // Replace with actual image path  
    },  
    {  
      name: "Sarah Johnson",  
      position: "Chief Real Estate Officer",  
      imageUrl: "path_to_image_2.jpg", // Replace with actual image path  
    },  
    {  
      name: "David Brown",  
      position: "Head of Property Management",  
      imageUrl: "path_to_image_3.jpg", // Replace with actual image path  
    },  
    {  
      name: "Michael Turner",  
      position: "Legal Counsel",  
      imageUrl: "path_to_image_4.jpg", // Replace with actual image path  
    },  
  ];  

  return (  
    <div className="bg-black text-white p-10">  
      <h2 className="text-3xl font-bold mb-6">Meet the Estatein Team</h2>  
      <p className="mb-8">  
        At Estatein, our success is driven by the dedication and expertise of our team.   
        Get to know the people behind our mission to make your real estate dreams a reality.  
      </p>  
      <div className="flex justify-center space-x-6">  
        {teamMembers.map((member, index) => (  
          <div key={index} className="bg-gray-800 rounded-lg p-5 w-64">  
            <img   
              src={member.imageUrl}   
              alt={member.name}   
              className="h-40 w-full object-cover rounded-t-lg"  
            />  
            <h3 className="text-lg font-semibold mt-4">{member.name}</h3>  
            <p className="text-gray-400">{member.position}</p>  
            <div className="flex justify-between mt-4">  
              <button className="text-purple-500 bg-gray-700 rounded-full p-2">  
                Say Hello 👋  
              </button>  
              <button className="text-purple-500 bg-gray-700 rounded-full p-2">  
                <i className="fab fa-twitter"></i>  
              </button>  
            </div>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default Asection0;