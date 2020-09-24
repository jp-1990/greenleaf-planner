import React from 'react';
import Nav from '../Components/Nav/Nav';
import Hero from '../Components/Landing/Hero/Hero';
import About from '../Components/Landing/About/About';
import ProjectsShowcase from '../Components/Landing/Projects/ProjectsShowcase/ProjectsShowcase';

const Landing = () => {
  return (
    <>
      <Nav active='landing' />
      <div>
        <Hero />
        <About />
        <ProjectsShowcase />
      </div>
    </>
  );
};

export default Landing;
