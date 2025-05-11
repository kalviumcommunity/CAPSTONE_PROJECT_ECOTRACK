// src/components/Navbar.jsx
import React from 'react';
import Button from './Header';

const Navbar = () => {
  return (
    <nav className="w-full px-8 py-4 flex items-center justify-between bg-white shadow-md border-b border-gray-100">
      <div className="text-2xl font-extrabold tracking-wide text-green-700">EcoTrack</div>
      
      <div className="flex items-center w-full max-w-3xl justify-between ml-8">
        <div className="hidden md:flex flex-1 justify-center gap-12">
          <a href="#" className="font-semibold text-gray-700 hover:text-green-700 transition-colors duration-200">Track Footprint</a>
          <a href="#" className="font-semibold text-gray-700 hover:text-green-700 transition-colors duration-200">Eco Resources</a>
          <a href="#" className="font-semibold text-gray-700 hover:text-green-700 transition-colors duration-200">Join Community</a>
          <a href="#" className="font-semibold text-gray-700 hover:text-green-700 transition-colors duration-200 flex items-center">
            More Options <span className="ml-1">▼</span>
          </a>
        </div>
        
        <div className="flex space-x-4 ml-8">
          <Button variant="outline" className="px-6 py-2 rounded-lg border-2 border-green-700 text-green-700 hover:bg-green-50 font-semibold">Learn</Button>
          <Button className="px-6 py-2 rounded-lg bg-green-700 text-white hover:bg-green-800 font-semibold">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;