/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import NavItems from './NavItems/NavItems';
import classes from './LandingNav.module.scss';

const LandingNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuState, setMenuState] = useState('closed');
  const [widthHeight, setWidthHeight] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  // reset width and height on resize
  useEffect(() => {
    const handleResize = () => {
      setWidthHeight([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleResize);
    return (_) => window.removeEventListener('resize', handleResize);
  });

  // once the window has scrolled, set scrolled
  useEffect(() => {
    const scrollHandler = () => {
      let display;
      if (document.getElementById('landing')) {
        display =
          Math.abs(
            document.getElementById('landing').getBoundingClientRect().y
          ) >=
          widthHeight[1] - 64;
      }

      if (display !== true) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    };
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [scrolled, widthHeight]);

  // close menu if scrolled changes
  useEffect(() => {
    if (menuState === 'open') {
      setMenuState('closed');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolled]);

  // toggle mobile menu
  const toggleMenuHandler = () => {
    if (menuState === 'closed') {
      setMenuState('open');
      document.getElementById('landingNav').classList.remove(classes.closed);
      document.getElementById('landingNav').classList.add(classes.open);
    } else {
      setMenuState('closed');
      document.getElementById('landingNav').classList.remove(classes.open);
      document.getElementById('landingNav').classList.add(classes.closed);
    }
  };

  // mobile nav bar jsx
  const mobileNavJsx = () => {
    return (
      <>
        <div className={classes.Container} onClick={toggleMenuHandler}>
          <div
            className={
              menuState === 'open'
                ? `${classes.Hamburger} ${classes.MenuOpen}`
                : classes.Hamburger
            }
          ></div>
        </div>
        <div>
          <NavItems
            menuFunc={toggleMenuHandler}
            styles={menuState === 'open' ? 'mobNav' : 'None'}
          />
        </div>
      </>
    );
  };

  // standard nav bar jsx
  const standardNavJsx = () => {
    return (
      <div
        className={`${classes.standardNav} col l10 offset-l2 xl9 offset-xl2`}
      >
        <NavItems />
      </div>
    );
  };

  return (
    <nav
      id='landingNav'
      className={scrolled ? `${classes.Menu} row` : `${classes.Fixed} row`}
      style={
        scrolled
          ? { position: 'fixed', zIndex: '500' }
          : { position: 'absolute', zIndex: '500' }
      }
    >
      <div className='nav-wrapper green darken-4'>
        <a
          className={`${classes.logo} brand-logo col s2 offset-s2 l1 offset-l1`}
          style={{ cursor: 'pointer' }}
          onClick={() =>
            window.scroll({
              left: 0,
              top: 0,
              behavior: 'smooth',
            })
          }
        >
          Lowthers
        </a>
        {widthHeight[0] < 993 ? mobileNavJsx() : standardNavJsx()}
      </div>
    </nav>
  );
};

export default LandingNav;
