import React from 'react';
import Nav from '../Components/Nav/Nav';
import Hero from '../Components/Landing/Hero/Hero';
import About from '../Components/Landing/About/About';

const Landing = () => {
  return (
    <>
      <Nav active='landing' />
      <div>
        <Hero />
        <About />
      </div>
    </>
  );
};

export default Landing;
