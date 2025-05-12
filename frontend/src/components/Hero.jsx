import React from 'react';
import heroImage from '../assets/hero-image.png';

const Hero = () => (
  <section className="flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-12">
    <div className="md:w-1/2 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4 text-center">Track Your Carbon Footprint, Change the World</h1>
      <img
        src={heroImage}
        alt="Hero"
        className="mx-auto my-4 p-6 max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-md"
      />
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
