/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import NavItems from './NavItems/NavItems';

const LandingNav = () => {
  const [scrolled, setScrolled] = useState(false);
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

  return (
    <nav
      style={
        scrolled
          ? { position: 'fixed', zIndex: '100' }
          : { position: 'absolute' }
      }
    >
      <div className='nav-wrapper green darken-4'>
        <div className='container'>
          <a
            className='brand-logo'
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

          <NavItems />
        </div>
      </div>
    </nav>
  );
};

export default LandingNav;
