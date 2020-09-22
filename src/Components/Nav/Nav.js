import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../sass/materialize.scss';

const Nav = (props) => {
  return (
    <nav>
      <div className='nav-wrapper green darken-4'>
        <div className='container'>
          <Link to='/' className='brand-logo'>
            Lowthers
          </Link>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li className={props.active === 'home' ? 'active' : null}>
              <NavLink to='/home'>Home</NavLink>
            </li>
            <li className={props.active === 'planner' ? 'active' : null}>
              <NavLink to='/planner'>Planner</NavLink>
            </li>
            <li className={props.active === 'customers' ? 'active' : null}>
              <NavLink to='/customers'>Customers</NavLink>
            </li>
            <li className={props.active === 'sign in' ? 'active' : null}>
              <NavLink to='/signin'>Sign In</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
