import React from 'react';
import NavItem from './NavItem/NavItem';
import { NavLink } from 'react-router-dom';

const navItems = (props) => {
  return (
    <ul id='nav-mobile' className='right hide-on-med-and-down'>
      <NavItem scroll={'about'}>About</NavItem>
      <NavItem scroll={'team'}>The Team</NavItem>
      <NavItem scroll={'gardening'}>Gardening</NavItem>
      <NavItem scroll={'tree'}>Tree Work</NavItem>
      <NavItem scroll={'landscaping'}>Landscaping</NavItem>
      <NavItem scroll={'projects'}>Projects</NavItem>
      <NavItem scroll={'contact'}>Contact</NavItem>
      <li>
        <NavLink to='/signin'>Sign In</NavLink>
      </li>
    </ul>
  );
};

export default navItems;
