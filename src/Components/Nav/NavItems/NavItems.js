import React from 'react';
import NavItem from './NavItem/NavItem';
import { NavLink } from 'react-router-dom';
import classes from './NavItems.module.scss';
import { useAuth } from '../../../Context/AuthContext';

const NavItems = (props) => {
  const { currentUser } = useAuth();
  return (
    <ul id='nav-mobile' className={`${classes[props.styles]} right`}>
      <NavItem scroll={'about'} menuFunc={props.menuFunc}>
        About
      </NavItem>
      <NavItem scroll={'team'} menuFunc={props.menuFunc}>
        The Team
      </NavItem>
      <NavItem scroll={'gardening'} menuFunc={props.menuFunc}>
        Gardening
      </NavItem>
      <NavItem scroll={'tree'} menuFunc={props.menuFunc}>
        Tree Work
      </NavItem>
      <NavItem scroll={'landscaping'} menuFunc={props.menuFunc}>
        Landscaping
      </NavItem>
      <NavItem scroll={'projects'} menuFunc={props.menuFunc}>
        Projects
      </NavItem>
      <NavItem scroll={'contact'} menuFunc={props.menuFunc}>
        Contact
      </NavItem>
      <li>
        <NavLink to={currentUser ? '/home' : '/signin'}>
          {currentUser ? 'Staff home' : 'Sign in'}
        </NavLink>
      </li>
    </ul>
  );
};

export default NavItems;
