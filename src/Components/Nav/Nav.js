import React from 'react';
import '../../sass/materialize.scss';

const Nav = () => {
  return (
    <nav>
      <div className='nav-wrapper green darken-4'>
        <div className='container'>
          <a href='#!' className='brand-logo'>
            Lowthers
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li className='active'>
              <a href='/'>Planner</a>
            </li>
            <li>
              <a href='/'>Customers</a>
            </li>
            <li>
              <a href='/'>Sign out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
