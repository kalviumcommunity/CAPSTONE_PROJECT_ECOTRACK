// src/components/Navbar.jsx
import React from 'react';
import Button from './Header';

const Navbar = () => {
  return (
    <nav className="w-full px-8 py-4 flex items-center justify-between border-b border-gray-200">
      <div className="text-xl font-bold">EcoTrack</div>
      
      <div className="flex items-center space-x-8">
        <div className="hidden md:flex space-x-8">
          <a href="#" className="font-medium hover:-translate-y-0.5 transition-transform">Track Footprint</a>
          <a href="#" className="font-medium hover:-translate-y-0.5 transition-transform">Eco Resources</a>
          <a href="#" className="font-medium hover:-translate-y-0.5 transition-transform">Join Community</a>
          <a href="#" className="font-medium hover:-translate-y-0.5 transition-transform flex items-center">
            More Options <span className="ml-1">▼</span>
          </a>
        </div>
        
        <div className="flex space-x-3">
          <Button variant="outline">Learn</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;