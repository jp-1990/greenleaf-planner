import React from 'react';
import classes from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.herotextbox}>
        <h1>Lowthers</h1>
        <h2>Gardening Services</h2>
        <a className={`btn brown darken-4 ${classes.about}`} href='!#'>
          Learn more
        </a>
        <a
          className={`btn white brown-text text-darken-4 ${classes.contact}`}
          href='!#'
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Hero;
