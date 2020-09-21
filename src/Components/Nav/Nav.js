import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../sass/materialize.scss';

const Nav = () => {
  const [active, setActive] = useState('');

  const activePageHandler = (e) => {
    setActive(e.currentTarget.innerHTML.toLowerCase());
  };

  return (
    <nav>
      <div className='nav-wrapper green darken-4'>
        <div className='container'>
          <Link
            onClick={(e) => activePageHandler(e)}
            to='/'
            className='brand-logo'
          >
            Lowthers
          </Link>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li className={active === 'home' ? 'active' : null}>
              <NavLink onClick={(e) => activePageHandler(e)} to='/home'>
                Home
              </NavLink>
            </li>
            <li className={active === 'planner' ? 'active' : null}>
              <NavLink onClick={(e) => activePageHandler(e)} to='/planner'>
                Planner
              </NavLink>
            </li>
            <li className={active === 'customers' ? 'active' : null}>
              <NavLink onClick={(e) => activePageHandler(e)} to='/customers'>
                Customers
              </NavLink>
            </li>
            <li className={active === 'sign in' ? 'active' : null}>
              <NavLink onClick={(e) => activePageHandler(e)} to='/signin'>
                Sign In
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
