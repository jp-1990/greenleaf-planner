import React from 'react';
import Nav from '../Components/Nav/Nav';
import Hero from '../Components/Landing/Hero/Hero';

const Landing = () => {
  return (
    <>
      <Nav active='landing' />
      <div>
        <Hero />
      </div>
    </>
  );
};

export default Landing;
