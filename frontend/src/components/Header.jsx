import React from 'react';

const Header = () => (
  <header className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      
      <div className="text-3xl font-bold italic">Logo</div>

      
      <nav className="flex-1 flex justify-center space-x-8 text-sm text-gray-800">
        <a href="#" className="hover:text-black">Track Footprint</a>
        <a href="#" className="hover:text-black">Eco Resources</a>
        <a href="#" className="hover:text-black">Join Community</a>
        <a href="#" className="hover:text-black flex items-center gap-1">
          More Options
          <span>▼</span>
        </a>
      </nav>

      
      <div className="flex space-x-2">
        <button className="border border-black px-4 py-1 rounded hover:bg-gray-100">Learn</button>
        <button className="bg-black text-white px-4 py-1 rounded hover:bg-gray-800">Sign Up</button>
      </div>
    </div>
  </header>
);

export default Header;
