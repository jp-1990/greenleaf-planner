import React from 'react';
import Nav from '../Components/Nav/Nav';
import Hero from '../Components/Landing/Hero/Hero';
import About from '../Components/Landing/About/About';
import ProjectsShowcase from '../Components/Landing/Projects/ProjectsShowcase/ProjectsShowcase';
import Team from '../Components/Landing/Team/Team';
import Gardening from '../Components/Landing/Gardening/Gardening';
import Tree from '../Components/Landing/Tree/Tree';
import Landscaping from '../Components/Landing/Landscaping/Landscaping';
import ProjectsPatio from '../Components/Landing/Projects/ProjectsPatio/ProjectsPatio';
import Contact from '../Components/Landing/Contact/Contact';

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
        <Landscaping />
        <ProjectsPatio />
        <Contact />
      </div>
    </>
  );
};

export default Landing;
