import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import heroImage from './assets/hero-image.jpg';

const App = () => (
  <>
    <Header />
    <Hero />
    <section className="px-8 pb-12">
      <img src={heroImage} alt="Hero" className="w-full h-auto rounded-lg shadow" />
    </section>
  </>
);

export default App;
