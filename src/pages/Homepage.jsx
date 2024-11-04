// Import React and the Section components
import React from 'react';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section0 from '../components/Section0'

const Homepage = () => {
  return (
    <div className="bg-black">
      
      <Section1 />
      <Section2 />
      <Section3 />
      <Section0 />
      <Section4 />
    </div>
  );
};

export default Homepage;
