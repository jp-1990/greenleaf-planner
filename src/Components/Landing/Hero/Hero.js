/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classes from './Hero.module.scss';

const Hero = () => {
  const scrollHandler = (el) => {
    window.scroll({
      left: 0,
      top: document.getElementById(el).offsetTop - 43,
      behavior: 'smooth',
    });
  };

  return (
    <section className={classes.hero} id='hero'>
      <div className={classes.herotextbox}>
        <h1>Lowthers</h1>
        <h2>Gardening Services</h2>
        <a
          onClick={() => scrollHandler('about')}
          className={`btn brown darken-4 ${classes.about}`}
        >
          Learn more
        </a>
        <a
          onClick={() => scrollHandler('contact')}
          className={`btn white brown-text text-darken-4 ${classes.contact}`}
        >
          Contact
        </a>
      </div>
    </section>
  );
};

export default Hero;
