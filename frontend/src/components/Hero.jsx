import React from 'react';
import heroImage from '../assets/hero-image.jpg';

const Hero = () => (
  <section className="flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-12">
    <div className="md:w-1/2">
      <h1 className="text-4xl font-bold mb-4">Track Your Carbon Footprint, Change the World</h1>
    </div>
    <div className="md:w-1/2 mb-6 md:mb-0">
      <p className="mb-4 text-gray-700">
        At EcoTrack, we empower you to take control of your environmental impact. Join us in making sustainable choices that benefit both you and the planet.
      </p>
      <button className="bg-black text-white px-4 py-2 mr-2">Get Started</button>
      <button className="border px-4 py-2">Learn More</button>
    </div>
  </section>
);

export default Hero;
