import React from 'react';
import Nav from '../Components/Nav/Nav';
import Hero from '../Components/Landing/Hero/Hero';
import About from '../Components/Landing/About/About';
import ProjectsShowcase from '../Components/Landing/Projects/ProjectsShowcase/ProjectsShowcase';
import Team from '../Components/Landing/Team/Team';
import Gardening from '../Components/Landing/Gardening/Gardening';
import Tree from '../Components/Landing/Tree/Tree';

const Landing = () => {
  return (
    <>
      <Nav active='landing' />
      <div>
        <Hero />
        <About />
        <ProjectsShowcase />
        <Team />
        <Gardening />
        <Tree />
      </div>
    </>
  );
};

export default Landing;
