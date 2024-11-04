import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mb-0 bg-zinc-900 p-4 px-12">
        <div className='flex content-center'>
        <img src="/images/Symbol.png" alt="Estatein Logo" className="h-10" />
        <p className='text-white text-2xl'>Estatein</p>
        </div>
      
      <div className="flex space-x-6">
        <Link to='/' className="text-white text-lg">Home</Link>

        <Link to='/aboutpage' className="text-white text-lg">About Us</Link><a href="#" className="text-white text-lg">About Us</a>
        <a href="#" className="text-white text-lg">Properties</a>
        <a href="#" className="text-white text-lg">Services</a>
      </div>
      <button className="border border-white/20 bg-black text-white px-4 py-2 text-lg hover:bg-white/10">
        Contact Us
      </button>
    </nav>
  );
};

export default Navbar;

